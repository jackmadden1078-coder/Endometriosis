import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CalendarDays, ClipboardList, FileText, HeartPulse, Download, AlertCircle } from "lucide-react";

const painDescriptors = [
  "Cramping",
  "Sharp / stabbing",
  "Burning",
  "Pressure / heaviness",
  "Radiating pain",
  "Bowel pain",
  "Bladder pain",
  "Pain with sex",
  "Back pain",
];

const redFlags = [
  "Severe period pain that disrupts school, work, or sleep",
  "Pain between periods",
  "Pain during bowel movements or urination",
  "Pain with sex",
  "Heavy bleeding or bleeding that feels unusual",
  "Symptoms not improving with basic pain relief",
  "Family history of endometriosis",
  "Years of symptoms without a clear explanation",
];

const questionBank = [
  "Could my symptoms be consistent with endometriosis?",
  "What other conditions are you considering, and why?",
  "Do I need imaging, bloodwork, or referral to a gynecologist?",
  "At what point should I be referred to an endometriosis specialist?",
  "What treatment options are available now for symptom relief?",
  "What should I track before my next appointment?",
];

function scoreSeverity(entries) {
  let score = 0;
  if (entries.periodPain >= 7) score += 2;
  else if (entries.periodPain >= 4) score += 1;

  if (entries.pelvicPain >= 7) score += 2;
  else if (entries.pelvicPain >= 4) score += 1;

  if (entries.missedActivities >= 3) score += 2;
  else if (entries.missedActivities >= 1) score += 1;

  if (entries.redFlagsChecked.length >= 4) score += 2;
  else if (entries.redFlagsChecked.length >= 2) score += 1;

  return score;
}

export default function EndometriosisCompanionApp() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    periodPain: 0,
    pelvicPain: 0,
    symptomLength: "",
    missedActivities: 0,
    descriptors: [],
    redFlagsChecked: [],
    notes: "",
    goals: "I want help understanding whether my symptoms could suggest endometriosis and what next steps make sense.",
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleArrayValue = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const summary = useMemo(() => {
    const severity = scoreSeverity(form);
    const urgencyLabel = severity >= 6 ? "High impact" : severity >= 3 ? "Moderate impact" : "Lower reported impact";

    return `Doctor Visit Summary\n\nName: ${form.name || "Not entered"}\nAge: ${form.age || "Not entered"}\n\nMain concerns:\n- Period pain: ${form.periodPain}/10\n- Non-period pelvic pain: ${form.pelvicPain}/10\n- Symptoms present for: ${form.symptomLength || "Not entered"}\n- Activities missed in the last month due to symptoms: ${form.missedActivities}\n\nPain descriptors:\n${form.descriptors.length ? form.descriptors.map((d) => `- ${d}`).join("\n") : "- None selected"}\n\nPossible endometriosis-related red flags selected:\n${form.redFlagsChecked.length ? form.redFlagsChecked.map((f) => `- ${f}`).join("\n") : "- None selected"}\n\nWhat I want from this visit:\n${form.goals || "Not entered"}\n\nExtra notes:\n${form.notes || "None"}\n\nOverall pattern: ${urgencyLabel}\n\nSuggested questions:\n${questionBank.map((q) => `- ${q}`).join("\n")}`;
  }, [form]);

  const exportSummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      alert("Summary copied to clipboard.");
    } catch {
      alert("Could not copy automatically. Please select and copy the summary manually.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-4 md:grid-cols-[1.4fr_0.9fr]"
        >
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <HeartPulse className="h-4 w-4" />
                Prototype artifact for endometriosis communication support
              </div>
              <CardTitle className="text-3xl">Endometriosis Doctor Visit Companion</CardTitle>
              <CardDescription className="text-base">
                A simple app concept that helps users organize symptoms, identify patterns, and prepare for healthcare appointments.
              </CardDescription>
            </CardHeader>
          </Card>

          <Alert className="rounded-2xl border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important note</AlertTitle>
            <AlertDescription>
              This is a course-project prototype, not a diagnostic tool or a replacement for medical care.
            </AlertDescription>
          </Alert>
        </motion.div>

        <Tabs defaultValue="tracker" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 rounded-2xl">
            <TabsTrigger value="tracker">Tracker</TabsTrigger>
            <TabsTrigger value="redflags">Red Flags</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="summary">Visit Summary</TabsTrigger>
          </TabsList>

          <TabsContent value="tracker">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="rounded-2xl lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><ClipboardList className="h-5 w-5" /> Symptom Tracker</CardTitle>
                  <CardDescription>Fill this in before an appointment to make your symptoms easier to explain.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Age</label>
                    <Input value={form.age} onChange={(e) => update("age", e.target.value)} placeholder="Age" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Period pain (0–10)</label>
                    <Input type="number" min="0" max="10" value={form.periodPain} onChange={(e) => update("periodPain", Number(e.target.value))} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Pelvic pain outside periods (0–10)</label>
                    <Input type="number" min="0" max="10" value={form.pelvicPain} onChange={(e) => update("pelvicPain", Number(e.target.value))} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">How long have symptoms been happening?</label>
                    <Input value={form.symptomLength} onChange={(e) => update("symptomLength", e.target.value)} placeholder="Example: 3 years" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Missed activities in the last month</label>
                    <Input type="number" min="0" value={form.missedActivities} onChange={(e) => update("missedActivities", Number(e.target.value))} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">How would you describe the pain?</label>
                    <div className="flex flex-wrap gap-2">
                      {painDescriptors.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleArrayValue("descriptors", item)}
                          className={`rounded-full border px-3 py-1 text-sm transition ${form.descriptors.includes(item) ? "bg-slate-900 text-white" : "bg-white text-slate-700"}`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Extra notes</label>
                    <Textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Anything else you want the doctor to know" className="min-h-[120px]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><CalendarDays className="h-5 w-5" /> Snapshot</CardTitle>
                  <CardDescription>A quick, readable overview of how much symptoms are affecting daily life.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Estimated impact level</div>
                    <Badge className="text-sm px-3 py-1 rounded-full">{scoreSeverity(form) >= 6 ? "High impact" : scoreSeverity(form) >= 3 ? "Moderate impact" : "Lower reported impact"}</Badge>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-700">
                    This tool does not diagnose endometriosis. It helps organize patterns that may support a more focused conversation in appointments.
                  </div>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Selected pain descriptors:</span> {form.descriptors.length || 0}</div>
                    <div><span className="font-medium">Red flags selected:</span> {form.redFlagsChecked.length || 0}</div>
                    <div><span className="font-medium">Missed activities:</span> {form.missedActivities}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="redflags">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Possible Endometriosis Red Flags</CardTitle>
                <CardDescription>Select the experiences that match. This is for communication support, not self-diagnosis.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                {redFlags.map((flag) => (
                  <label key={flag} className="flex items-start gap-3 rounded-2xl border p-4">
                    <Checkbox
                      checked={form.redFlagsChecked.includes(flag)}
                      onCheckedChange={() => toggleArrayValue("redFlagsChecked", flag)}
                    />
                    <span className="text-sm leading-6">{flag}</span>
                  </label>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="questions">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Questions to Ask</CardTitle>
                  <CardDescription>Built to help users advocate clearly during short appointments.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {questionBank.map((q) => (
                    <div key={q} className="rounded-2xl border p-4 text-sm">{q}</div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>My Goal for the Appointment</CardTitle>
                  <CardDescription>Write what you want from the visit so the conversation stays focused.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea value={form.goals} onChange={(e) => update("goals", e.target.value)} className="min-h-[220px]" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="summary">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl"><FileText className="h-5 w-5" /> Exportable Visit Summary</CardTitle>
                <CardDescription>Copy this into notes, email it to yourself, or bring it to an appointment.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea value={summary} readOnly className="min-h-[420px] font-mono text-sm" />
                <div className="flex flex-wrap gap-3">
                  <Button onClick={exportSummary} className="rounded-2xl"><Download className="mr-2 h-4 w-4" /> Copy Summary</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
