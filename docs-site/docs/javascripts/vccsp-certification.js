document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-vccsp-assessment]');
  if (!root) return;

  const form = root.querySelector('#vccsp-assessment-form');
  const startButton = root.querySelector('#vccsp-start');
  const submitButton = root.querySelector('#vccsp-submit');
  const nameInput = root.querySelector('#vccsp-name');
  const questionContainer = root.querySelector('#vccsp-questions');
  const progress = root.querySelector('#vccsp-progress');
  const result = root.querySelector('#vccsp-result');
  const certificate = root.querySelector('#vccsp-certificate');
  const printButton = root.querySelector('#vccsp-print');
  const resetButton = root.querySelector('#vccsp-reset');

  const questions = [
    { q: 'What is the primary goal of Customer Success?', options: ['Resolve only customer complaints.', 'Ensure customers achieve desired outcomes and receive value.', 'Increase internal meetings.', 'Manage only invoices.'], answer: 1 },
    { q: 'What is the main purpose of a Customer Health Score?', options: ['Measure employee performance.', 'Identify customer status, risks, and opportunities.', 'Track marketing campaigns.', 'Replace customer conversations.'], answer: 1 },
    { q: 'When should a CSM begin renewal planning?', options: ['Only after the contract expires.', 'On the final day of the contract.', 'Throughout the customer lifecycle.', 'Only when Sales asks.'], answer: 2 },
    { q: 'What is the purpose of a customer playbook?', options: ['Provide guidance for repeatable customer situations.', 'Store invoices.', 'Replace the CRM.', 'Track attendance.'], answer: 0 },
    { q: 'Why are SOPs important in Customer Success?', options: ['They create consistent execution.', 'They eliminate customer interaction.', 'They replace CSM judgment.', 'They are only for new employees.'], answer: 0 },
    { q: 'A customer has declining usage and missed review meetings. What should the CSM do first?', options: ['Wait until renewal.', 'Update the account to Green without investigation.', 'Investigate the change, contact the customer, and assess risk.', 'Immediately propose an upsell.'], answer: 2 },
    { q: 'Which is the strongest indicator of customer value?', options: ['Number of internal meetings.', 'Achievement of agreed customer outcomes.', 'Number of emails sent.', 'Number of CRM fields completed.'], answer: 1 },
    { q: 'What should a CSM do when a delivery issue is reported?', options: ['Defend the delivery team immediately.', 'Acknowledge the concern, investigate facts, and coordinate a recovery plan.', 'Ignore it unless the customer escalates.', 'Promise an outcome before checking internally.'], answer: 1 },
    { q: 'What should a good CRM note contain?', options: ['Only the customer name.', 'Situation, sentiment, risks, actions, owner, and follow-up.', 'Only internal opinions.', 'Only invoice information.'], answer: 1 },
    { q: 'What is the best approach to customer health management?', options: ['Review health only at renewal.', 'Use multiple signals and proactively act on changes.', 'Set every customer to Green.', 'Use only revenue data.'], answer: 1 },
    { q: 'What is the purpose of a QBR?', options: ['Replace all project meetings.', 'Review strategic value, outcomes, risks, and future priorities.', 'Discuss only overdue invoices.', 'Conduct employee performance reviews.'], answer: 1 },
    { q: 'When should an escalation be internally coordinated?', options: ['Only after the customer threatens to leave.', 'As soon as material risk or impact is identified.', 'Only after the project closes.', 'Never; the CSM should handle everything alone.'], answer: 1 },
    { q: 'Which action best supports retention?', options: ['Contact the customer only when renewal is due.', 'Continuously demonstrate value and address risks early.', 'Avoid discussing customer concerns.', 'Focus only on selling more services.'], answer: 1 },
    { q: 'What is an appropriate response to an unhappy customer?', options: ['Argue the facts immediately.', 'Acknowledge the concern, show ownership, investigate, and agree next steps.', 'Transfer the customer without explanation.', 'Wait for the customer to calm down.'], answer: 1 },
    { q: 'What is the difference between Customer Success and Customer Support?', options: ['They are identical.', 'Success is proactive and outcome-focused; Support is primarily reactive issue resolution.', 'Support owns renewals and Success only handles tickets.', 'Success does not communicate with customers.'], answer: 1 },
    { q: 'How should AI-generated customer content be used?', options: ['Send it without review.', 'Verify it, apply human judgment, and protect confidential information.', 'Allow AI to make customer decisions.', 'Avoid all AI tools.'], answer: 1 },
    { q: 'What makes a CSM action plan effective?', options: ['General intentions without owners.', 'Clear actions, owners, timelines, and follow-up measures.', 'Only a list of customer complaints.', 'A plan shared only after completion.'], answer: 1 },
    { q: 'A customer has an overdue invoice and reduced project activity. What is the best approach?', options: ['Treat it only as a Finance issue.', 'Assess financial, delivery, relationship, and retention risks and coordinate the appropriate owners.', 'Stop all communication.', 'Immediately close the account.'], answer: 1 },
    { q: 'What should a CSM do after resolving a customer issue?', options: ['Close the ticket and move on.', 'Confirm satisfaction, document the outcome, and identify prevention actions.', 'Avoid contacting the customer again.', 'Delete the CRM history.'], answer: 1 },
    { q: 'What best describes a professional Customer Success mindset?', options: ['Task completion only.', 'Customer-first ownership, business awareness, proactive risk management, and continuous improvement.', 'Selling as much as possible.', 'Avoiding difficult conversations.'], answer: 1 }
  ];

  const PASS_MARK = 80;
  let selectedQuestions = [];
  let started = false;

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function renderQuestions() {
    questionContainer.innerHTML = selectedQuestions.map((item, index) => `
      <fieldset class="vccsp-question">
        <legend><strong>${index + 1}. ${escapeHtml(item.q)}</strong></legend>
        ${item.options.map((option, optionIndex) => `
          <label class="vccsp-option">
            <input type="radio" name="q${index}" value="${optionIndex}" required>
            <span>${escapeHtml(option)}</span>
          </label>`).join('')}
      </fieldset>`).join('');

    if (progress) {
      progress.hidden = false;
      progress.textContent = `Assessment: 0/${selectedQuestions.length} questions answered`;
    }

    questionContainer.addEventListener('change', updateProgress, { once: true });
  }

  function updateProgress() {
    if (!progress) return;
    const answered = selectedQuestions.reduce((count, _, index) => (
      form.querySelector(`input[name="q${index}"]:checked`) ? count + 1 : count
    ), 0);
    progress.textContent = `Assessment: ${answered}/${selectedQuestions.length} questions answered`;
    questionContainer.addEventListener('change', updateProgress, { once: true });
  }

  function createCertificate(candidate, score) {
    const date = new Date();
    const dateText = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    const dateCode = date.toISOString().slice(0, 10).replace(/-/g, '');
    const random = (window.crypto && window.crypto.randomUUID)
      ? window.crypto.randomUUID().replace(/-/g, '').slice(0, 8).toUpperCase()
      : Math.random().toString(36).slice(2, 10).toUpperCase();
    const certificateId = `VCCSP-${dateCode}-${random}`;

    certificate.innerHTML = `
      <div class="vccsp-certificate-card">
        <div class="vccsp-certificate-kicker">VIRTUAL BUILDING STUDIO</div>
        <h2>Certificate of Achievement</h2>
        <p>This certificate is proudly presented to</p>
        <div class="vccsp-recipient">${escapeHtml(candidate)}</div>
        <p>for successfully completing the VBS Customer Success Academy knowledge assessment and demonstrating proficiency in Customer Success fundamentals.</p>
        <div class="vccsp-certification-name">VBS Certified Customer Success Professional (VCCSP)</div>
        <div class="vccsp-certificate-meta">
          <span><strong>Assessment Score</strong><br>${score}%</span>
          <span><strong>Knowledge Status</strong><br>Passed</span>
          <span><strong>Completion Date</strong><br>${dateText}</span>
          <span><strong>Certificate ID</strong><br>${certificateId}</span>
        </div>
        <p class="vccsp-certificate-note">Knowledge assessment passed. Final VCCSP certification remains subject to completion and approval of the practical case study, CSM simulation, and process/documentation review.</p>
        <div class="vccsp-signature">Virtual Building Studio</div>
      </div>`;

    certificate.hidden = false;
    return certificateId;
  }

  startButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name.length < 2) {
      nameInput.setCustomValidity('Please enter your full name.');
      nameInput.reportValidity();
      nameInput.focus();
      return;
    }
    nameInput.setCustomValidity('');
    selectedQuestions = shuffle(questions).slice(0, 20);
    renderQuestions();
    started = true;
    startButton.hidden = true;
    nameInput.disabled = true;
    submitButton.hidden = false;
    resetButton.hidden = true;
    result.hidden = true;
    certificate.hidden = true;
    certificate.innerHTML = '';
    window.scrollTo({ top: questionContainer.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!started) return;

    const formData = new FormData(form);
    let correct = 0;
    selectedQuestions.forEach((item, index) => {
      if (Number(formData.get(`q${index}`)) === item.answer) correct += 1;
    });

    const score = Math.round((correct / selectedQuestions.length) * 100);
    const passed = score >= PASS_MARK;
    result.hidden = false;
    result.className = `vccsp-result ${passed ? 'is-pass' : 'is-fail'}`;
    result.innerHTML = passed
      ? `<h3>🎉 Knowledge Assessment Passed</h3><p><strong>${score}%</strong> (${correct}/${selectedQuestions.length} correct). You have met the ${PASS_MARK}% knowledge-assessment threshold.</p>`
      : `<h3>Assessment Not Passed</h3><p><strong>${score}%</strong> (${correct}/${selectedQuestions.length} correct). A score of ${PASS_MARK}% is required. Review the relevant modules and start a new attempt.</p>`;

    // A certificate is intentionally generated only after a passing score.
    if (passed) {
      createCertificate(nameInput.value.trim(), score);
      certificate.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      certificate.hidden = true;
      certificate.innerHTML = '';
    }

    submitButton.hidden = true;
    resetButton.hidden = false;
    if (progress) progress.textContent = `Assessment complete: ${score}% (${correct}/${selectedQuestions.length})`;
  });

  resetButton.addEventListener('click', () => {
    form.reset();
    questionContainer.innerHTML = '';
    result.hidden = true;
    certificate.hidden = true;
    certificate.innerHTML = '';
    nameInput.disabled = false;
    startButton.hidden = false;
    submitButton.hidden = true;
    resetButton.hidden = true;
    if (progress) progress.hidden = true;
    started = false;
    selectedQuestions = [];
    nameInput.focus();
    window.scrollTo({ top: root.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });

  printButton.addEventListener('click', () => window.print());
});
