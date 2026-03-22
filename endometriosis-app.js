<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Endometriosis Doctor Visit Companion</title>
  <style>
    :root {
      --bg: #f8fafc;
      --card: #ffffff;
      --text: #0f172a;
      --muted: #475569;
      --line: #dbe4ee;
      --accent: #0f172a;
      --soft: #eef2f7;
      --warn-bg: #fff7ed;
      --warn-line: #fdba74;
      --badge: #e2e8f0;
      --shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
      --radius: 20px;
    }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Inter, Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
    }

    .container {
      max-width: 1150px;
      margin: 0 auto;
      padding: 20px;
    }

    .top-grid {
      display: grid;
      grid-template-columns: 1.4fr 0.9fr;
      gap: 16px;
      margin-bottom: 20px;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .card-header {
      padding: 24px 24px 8px;
    }

    .card-content {
      padding: 8px 24px 24px;
    }

    .eyebrow {
      font-size: 14px;
      color: var(--muted);
      margin-bottom: 8px;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      line-height: 1.15;
    }

    h2 {
      margin: 0;
      font-size: 1.25rem;
    }

    .desc {
      color: var(--muted);
      margin-top: 8px;
      font-size: 1rem;
    }

    .alert {
      background: var(--warn-bg);
      border: 1px solid var(--warn-line);
      border-radius: var(--radius);
      padding: 20px;
      align-self: start;
    }

    .alert strong {
      display: block;
      margin-bottom: 6px;
    }

    .tabs {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 16px;
    }

    .tab-btn {
      border: 1px solid var(--line);
      background: var(--card);
      color: var(--text);
      border-radius: 16px;
      padding: 12px 16px;
      cursor: pointer;
      font-weight: 600;
    }

    .tab-btn.active {
      background: var(--accent);
      color: white;
      border-color: var(--accent);
    }

    .tab-panel { display: none; }
    .tab-panel.active { display: block; }

    .grid-main {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 16px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    input, textarea {
      width: 100%;
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 12px 14px;
      font: inherit;
      color: var(--text);
      background: white;
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }

    .wide { grid-column: 1 / -1; }

    .chip-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .chip {
      border: 1px solid var(--line);
      background: white;
      color: var(--text);
      border-radius: 999px;
      padding: 10px 14px;
      cursor: pointer;
      font-size: 14px;
    }

    .chip.active {
      background: var(--accent);
      color: white;
      border-color: var(--accent);
    }

    .soft-box {
      background: var(--soft);
      border-radius: 18px;
      padding: 16px;
      color: var(--muted);
    }

    .badge {
      display: inline-block;
      background: var(--badge);
      padding: 8px 12px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 700;
    }

    .stack { display: grid; gap: 14px; }

    .checkbox-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .checkbox-card {
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 16px;
      display: flex;
      gap: 12px;
      align-items: flex-start;
      background: white;
    }

    .question-item {
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 16px;
      background: white;
    }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .summary-box {
      min-height: 420px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      white-space: pre-wrap;
      background: white;
    }

    .btn-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .primary-btn {
      border: none;
      background: var(--accent);
      color: white;
      border-radius: 16px;
      padding: 12px 16px;
      cursor: pointer;
      font: inherit;
      font-weight: 700;
    }

    .muted {
      color: var(--muted);
      font-size: 14px;
    }

    @media (max-width: 900px) {
      .top-grid, .grid-main, .two-col, .checkbox-grid {
        grid-template-columns: 1fr;
      }
      .tabs {
        grid-template-columns: repeat(2, 1fr);
      }
      .form-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 600px) {
      .tabs {
        grid-template-columns: 1fr;
      }
      h1 {
        font-size: 1.6rem;
      }
      .container {
        padding: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="top-grid">
      <section class="card">
        <div class="card-header">
          <div class="eyebrow">Prototype artifact for endometriosis communication support</div>
          <h1>Endometriosis Doctor Visit Companion</h1>
          <div class="desc">A simple website concept that helps users organize symptoms, identify patterns, and prepare for healthcare appointments.</div>
        </div>
      </section>

      <aside class="alert">
        <strong>Important note</strong>
        This is a course-project prototype, not a diagnostic tool or a replacement for medical care.
      </aside>
    </div>

    <div class="tabs">
      <button class="tab-btn active" data-tab="tracker">Tracker</button>
      <button class="tab-btn" data-tab="redflags">Red Flags</button>
      <button class="tab-btn" data-tab="questions">Questions</button>
      <button class="tab-btn" data-tab="summary">Visit Summary</button>
    </div>

    <section class="tab-panel active" id="tracker">
      <div class="grid-main">
        <div class="card">
          <div class="card-header">
            <h2>Symptom Tracker</h2>
            <div class="desc">Fill this in before an appointment to make your symptoms easier to explain.</div>
          </div>
          <div class="card-content form-grid">
            <div>
              <label for="name">Name</label>
              <input id="name" placeholder="Your name" />
            </div>
            <div>
              <label for="age">Age</label>
              <input id="age" placeholder="Age" />
            </div>
            <div>
              <label for="periodPain">Period pain (0–10)</label>
              <input id="periodPain" type="number" min="0" max="10" value="0" />
            </div>
            <div>
              <label for="pelvicPain">Pelvic pain outside periods (0–10)</label>
              <input id="pelvicPain" type="number" min="0" max="10" value="0" />
            </div>
            <div>
              <label for="symptomLength">How long have symptoms been happening?</label>
              <input id="symptomLength" placeholder="Example: 3 years" />
            </div>
            <div>
              <label for="missedActivities">Missed activities in the last month</label>
              <input id="missedActivities" type="number" min="0" value="0" />
            </div>
            <div class="wide">
              <label>How would you describe the pain?</label>
              <div class="chip-wrap" id="descriptorWrap"></div>
            </div>
            <div class="wide">
              <label for="notes">Extra notes</label>
              <textarea id="notes" placeholder="Anything else you want the doctor to know"></textarea>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h2>Snapshot</h2>
            <div class="desc">A quick, readable overview of how much symptoms are affecting daily life.</div>
          </div>
          <div class="card-content stack">
            <div>
              <div class="muted">Estimated impact level</div>
              <div class="badge" id="impactBadge">Lower reported impact</div>
            </div>
            <div class="soft-box">
              This tool does not diagnose endometriosis. It helps organize patterns that may support a more focused conversation in appointments.
            </div>
            <div class="muted"><strong>Selected pain descriptors:</strong> <span id="descriptorCount">0</span></div>
            <div class="muted"><strong>Red flags selected:</strong> <span id="redFlagCount">0</span></div>
            <div class="muted"><strong>Missed activities:</strong> <span id="missedCount">0</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="tab-panel" id="redflags">
      <div class="card">
        <div class="card-header">
          <h2>Possible Endometriosis Red Flags</h2>
          <div class="desc">Select the experiences that match. This is for communication support, not self-diagnosis.</div>
        </div>
        <div class="card-content checkbox-grid" id="redFlagWrap"></div>
      </div>
    </section>

    <section class="tab-panel" id="questions">
      <div class="two-col">
        <div class="card">
          <div class="card-header">
            <h2>Questions to Ask</h2>
            <div class="desc">Built to help users advocate clearly during short appointments.</div>
          </div>
          <div class="card-content stack" id="questionWrap"></div>
        </div>

        <div class="card">
          <div class="card-header">
            <h2>My Goal for the Appointment</h2>
            <div class="desc">Write what you want from the visit so the conversation stays focused.</div>
          </div>
          <div class="card-content">
            <textarea id="goals" style="min-height: 220px;">I want help understanding whether my symptoms could suggest endometriosis and what next steps make sense.</textarea>
          </div>
        </div>
      </div>
    </section>

    <section class="tab-panel" id="summary">
      <div class="card">
        <div class="card-header">
          <h2>Exportable Visit Summary</h2>
          <div class="desc">Copy this into notes, email it to yourself, or bring it to an appointment.</div>
        </div>
        <div class="card-content stack">
          <textarea id="summaryBox" class="summary-box" readonly></textarea>
          <div class="btn-row">
            <button class="primary-btn" id="copyBtn">Copy Summary</button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <script>
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

    const state = {
      descriptors: [],
      redFlagsChecked: [],
    };

    const els = {
      name: document.getElementById('name'),
      age: document.getElementById('age'),
      periodPain: document.getElementById('periodPain'),
      pelvicPain: document.getElementById('pelvicPain'),
      symptomLength: document.getElementById('symptomLength'),
      missedActivities: document.getElementById('missedActivities'),
      notes: document.getElementById('notes'),
      goals: document.getElementById('goals'),
      impactBadge: document.getElementById('impactBadge'),
      descriptorCount: document.getElementById('descriptorCount'),
      redFlagCount: document.getElementById('redFlagCount'),
      missedCount: document.getElementById('missedCount'),
      summaryBox: document.getElementById('summaryBox'),
      descriptorWrap: document.getElementById('descriptorWrap'),
      redFlagWrap: document.getElementById('redFlagWrap'),
      questionWrap: document.getElementById('questionWrap'),
      copyBtn: document.getElementById('copyBtn'),
    };

    function scoreSeverity() {
      let score = 0;
      const periodPain = Number(els.periodPain.value || 0);
      const pelvicPain = Number(els.pelvicPain.value || 0);
      const missed = Number(els.missedActivities.value || 0);

      if (periodPain >= 7) score += 2;
      else if (periodPain >= 4) score += 1;

      if (pelvicPain >= 7) score += 2;
      else if (pelvicPain >= 4) score += 1;

      if (missed >= 3) score += 2;
      else if (missed >= 1) score += 1;

      if (state.redFlagsChecked.length >= 4) score += 2;
      else if (state.redFlagsChecked.length >= 2) score += 1;

      return score;
    }

    function impactLabel() {
      const score = scoreSeverity();
      if (score >= 6) return 'High impact';
      if (score >= 3) return 'Moderate impact';
      return 'Lower reported impact';
    }

    function buildSummary() {
      return `Doctor Visit Summary\n\nName: ${els.name.value || 'Not entered'}\nAge: ${els.age.value || 'Not entered'}\n\nMain concerns:\n- Period pain: ${els.periodPain.value || 0}/10\n- Non-period pelvic pain: ${els.pelvicPain.value || 0}/10\n- Symptoms present for: ${els.symptomLength.value || 'Not entered'}\n- Activities missed in the last month due to symptoms: ${els.missedActivities.value || 0}\n\nPain descriptors:\n${state.descriptors.length ? state.descriptors.map(d => `- ${d}`).join('\n') : '- None selected'}\n\nPossible endometriosis-related red flags selected:\n${state.redFlagsChecked.length ? state.redFlagsChecked.map(f => `- ${f}`).join('\n') : '- None selected'}\n\nWhat I want from this visit:\n${els.goals.value || 'Not entered'}\n\nExtra notes:\n${els.notes.value || 'None'}\n\nOverall pattern: ${impactLabel()}\n\nSuggested questions:\n${questionBank.map(q => `- ${q}`).join('\n')}`;
    }

    function renderSummary() {
      els.impactBadge.textContent = impactLabel();
      els.descriptorCount.textContent = state.descriptors.length;
      els.redFlagCount.textContent = state.redFlagsChecked.length;
      els.missedCount.textContent = els.missedActivities.value || 0;
      els.summaryBox.value = buildSummary();
    }

    function toggleValue(arr, value) {
      const idx = arr.indexOf(value);
      if (idx >= 0) arr.splice(idx, 1);
      else arr.push(value);
    }

    function renderDescriptors() {
      els.descriptorWrap.innerHTML = '';
      painDescriptors.forEach((item) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chip' + (state.descriptors.includes(item) ? ' active' : '');
        btn.textContent = item;
        btn.addEventListener('click', () => {
          toggleValue(state.descriptors, item);
          renderDescriptors();
          renderSummary();
        });
        els.descriptorWrap.appendChild(btn);
      });
    }

    function renderRedFlags() {
      els.redFlagWrap.innerHTML = '';
      redFlags.forEach((flag) => {
        const label = document.createElement('label');
        label.className = 'checkbox-card';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = state.redFlagsChecked.includes(flag);
        input.addEventListener('change', () => {
          toggleValue(state.redFlagsChecked, flag);
          renderSummary();
        });

        const span = document.createElement('span');
        span.textContent = flag;

        label.appendChild(input);
        label.appendChild(span);
        els.redFlagWrap.appendChild(label);
      });
    }

    function renderQuestions() {
      questionBank.forEach((q) => {
        const div = document.createElement('div');
        div.className = 'question-item';
        div.textContent = q;
        els.questionWrap.appendChild(div);
      });
    }

    document.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });

    [els.name, els.age, els.periodPain, els.pelvicPain, els.symptomLength, els.missedActivities, els.notes, els.goals]
      .forEach((el) => el.addEventListener('input', renderSummary));

    els.copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(els.summaryBox.value);
        alert('Summary copied to clipboard.');
      } catch (e) {
        alert('Could not copy automatically. Please select and copy the summary manually.');
      }
    });

    renderDescriptors();
    renderRedFlags();
    renderQuestions();
    renderSummary();
  </script>
</body>
</html>
