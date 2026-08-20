(function () {
  "use strict";

  const PASSING_SCORE = 80;

  const questions = [
    {
      question: "What is the primary goal of Customer Success?",
      options: [
        "Resolve only customer complaints.",
        "Ensure customers achieve desired outcomes and receive value.",
        "Increase internal meetings.",
        "Manage only invoices."
      ],
      answer: 1
    },
    {
      question: "What is the purpose of a Customer Health Score?",
      options: [
        "Measure employee performance.",
        "Identify customer status, risks, and opportunities.",
        "Track marketing campaigns.",
        "Replace customer conversations."
      ],
      answer: 1
    },
    {
      question: "When should a CSM start renewal conversations?",
      options: [
        "Only after the contract expires.",
        "Near the final day.",
        "Throughout the customer lifecycle.",
        "Only when Sales asks."
      ],
      answer: 2
    },
    {
      question: "What is the purpose of a customer playbook?",
      options: [
        "Provide guidance for repeatable customer situations.",
        "Store invoices.",
        "Replace CRM.",
        "Track attendance."
      ],
      answer: 0
    },
    {
      question: "Why are SOPs important?",
      options: [
        "They create consistent execution.",
        "They eliminate customer interaction.",
        "They replace CSM judgment.",
        "They are only for new employees."
      ],
      answer: 0
    },
    {
      question: "What should a CSM do when a customer becomes at risk?",
      options: [
        "Wait until the customer complains.",
        "Ignore the risk until renewal.",
        "Identify the root cause and create a recovery plan.",
        "Immediately transfer the account to Sales."
      ],
      answer: 2
    },
    {
      question: "What is the best approach to customer onboarding?",
      options: [
        "Send documents and wait.",
        "Define goals, expectations, milestones, and responsibilities.",
        "Discuss renewal immediately.",
        "Only introduce the project team."
      ],
      answer: 1
    },
    {
      question: "Which activity best supports customer adoption?",
      options: [
        "Regularly connecting product/service usage to customer goals.",
        "Sending invoices.",
        "Reducing customer communication.",
        "Waiting for complaints."
      ],
      answer: 0
    },
    {
      question: "What is an important purpose of a QBR/business review?",
      options: [
        "Discuss only outstanding invoices.",
        "Review value, outcomes, risks, priorities, and next steps.",
        "Replace all operational meetings.",
        "Sell unrelated services."
      ],
      answer: 1
    },
    {
      question: "What should a CRM customer note contain?",
      options: [
        "Only the customer's name.",
        "Only the invoice number.",
        "Relevant context, sentiment, risks, actions, and follow-up.",
        "Personal opinions unrelated to the account."
      ],
      answer: 2
    },
    {
      question: "What is the best response to a customer escalation?",
      options: [
        "Defend the internal team immediately.",
        "Acknowledge the concern, investigate, take ownership, and communicate a recovery plan.",
        "Ignore it until the next meeting.",
        "Tell the customer to contact another department."
      ],
      answer: 1
    },
    {
      question: "What does proactive Customer Success mean?",
      options: [
        "Waiting for customers to request help.",
        "Identifying risks and opportunities before they become urgent.",
        "Sending more promotional emails.",
        "Only contacting customers during renewals."
      ],
      answer: 1
    },
    {
      question: "Which is a customer retention signal?",
      options: [
        "Reduced engagement and declining project activity.",
        "Increasing adoption and positive feedback.",
        "Successful project delivery.",
        "All of the above can provide health signals."
      ],
      answer: 3
    },
    {
      question: "What should a CSM do when delivery performance declines?",
      options: [
        "Hide the issue.",
        "Investigate the cause and coordinate an improvement plan.",
        "Wait until the customer escalates.",
        "Immediately close the account."
      ],
      answer: 1
    },
    {
      question: "What is the role of data in Customer Success?",
      options: [
        "Replace human judgment completely.",
        "Support informed decisions and identify trends, risks, and opportunities.",
        "Only create reports for management.",
        "Track employee attendance."
      ],
      answer: 1
    },
    {
      question: "What is the appropriate use of AI-generated customer communication?",
      options: [
        "Send it without reviewing it.",
        "Use AI as an assistant and review the output before sending.",
        "Allow AI to make customer decisions.",
        "Avoid human involvement."
      ],
      answer: 1
    },
    {
      question: "What should a customer recovery plan include?",
      options: [
        "Only an apology.",
        "Actions, owners, timelines, communication, and prevention steps.",
        "Only a discount.",
        "Only an internal meeting."
      ],
      answer: 1
    },
    {
      question: "What is an expansion opportunity in Customer Success?",
      options: [
        "A solution that aligns with a genuine customer need or business outcome.",
        "Any product the customer has not purchased.",
        "An unrelated sales promotion.",
        "A mandatory upsell."
      ],
      answer: 0
    },
    {
      question: "What should a CSM do when an invoice becomes overdue?",
      options: [
        "Ignore it completely.",
        "Coordinate appropriately with Finance while maintaining the customer relationship.",
        "Threaten the customer.",
        "Immediately terminate the relationship."
      ],
      answer: 1
    },
    {
      question: "What is the strongest definition of Customer Success?",
      options: [
        "Managing customer requests.",
        "Managing accounts.",
        "Helping customers achieve meaningful outcomes and realize value.",
        "Reducing the number of meetings."
      ],
      answer: 2
    }
  ];

  const assessment = document.getElementById("vccsp-assessment");

  if (!assessment) {
    return;
  }

  const nameInput = document.getElementById("vccsp-candidate-name");
  const questionContainer = document.getElementById(
    "vccsp-question-container"
  );
  const submitButton = document.getElementById("vccsp-submit");
  const result = document.getElementById("vccsp-result");

  const certificateSection = document.getElementById("vccsp-certificate");
  const certificateSummary = document.getElementById(
    "vccsp-certificate-summary"
  );
  const generateCertificateButton = document.getElementById(
    "vccsp-generate-certificate"
  );

  const certificatePreview = document.getElementById(
    "vccsp-certificate-preview"
  );

  function renderQuestions() {
    questionContainer.innerHTML = questions
      .map(function (item, index) {
        return `
          <fieldset class="vccsp-question">
            <legend>
              <strong>${index + 1}. ${escapeHtml(item.question)}</strong>
            </legend>

            <div class="vccsp-options">
              ${item.options
                .map(function (option, optionIndex) {
                  return `
                    <label class="vccsp-option">
                      <input
                        type="radio"
                        name="question-${index}"
                        value="${optionIndex}"
                      />
                      <span>${escapeHtml(option)}</span>
                    </label>
                  `;
                })
                .join("")}
            </div>
          </fieldset>
        `;
      })
      .join("");
  }

  function calculateScore() {
    let correct = 0;

    questions.forEach(function (question, index) {
      const selected = document.querySelector(
        `input[name="question-${index}"]:checked`
      );

      if (selected && Number(selected.value) === question.answer) {
        correct++;
      }
    });

    return {
      correct: correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    };
  }

  function generateCertificateId() {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);

    return `VBS-VCCSP-${year}-${random}`;
  }

  function formatDate(date) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  function validateName() {
    const name = nameInput.value.trim();

    if (!name) {
      nameInput.focus();

      result.innerHTML = `
        <div class="vccsp-error">
          Please enter your full name before submitting the assessment.
        </div>
      `;

      return false;
    }

    return true;
  }

  function validateAllQuestions() {
    const unanswered = [];

    questions.forEach(function (_, index) {
      const selected = document.querySelector(
        `input[name="question-${index}"]:checked`
      );

      if (!selected) {
        unanswered.push(index + 1);
      }
    });

    if (unanswered.length > 0) {
      result.innerHTML = `
        <div class="vccsp-error">
          Please answer all questions before submitting.
          <br />
          Unanswered questions: ${unanswered.join(", ")}
        </div>
      `;

      return false;
    }

    return true;
  }

  submitButton.addEventListener("click", function () {
    if (!validateName()) {
      return;
    }

    if (!validateAllQuestions()) {
      return;
    }

    const score = calculateScore();
    const passed = score.percentage >= PASSING_SCORE;

    if (passed) {
      const completionDate = formatDate(new Date());
      const certificateId = generateCertificateId();

      result.innerHTML = `
        <div class="vccsp-success">
          <h3>🎉 Knowledge Assessment Passed</h3>
          <p>
            <strong>${escapeHtml(nameInput.value.trim())}</strong>
          </p>
          <p>
            Score: <strong>${score.percentage}%</strong>
            (${score.correct}/${score.total})
          </p>
          <p>
            You have achieved the minimum 80% knowledge assessment requirement.
          </p>
          <p>
            The practical case study, CSM simulation, and process/documentation
            review are still required for final VCCSP certification.
          </p>
        </div>
      `;

      certificateSection.hidden = false;

      certificateSummary.innerHTML = `
        Assessment Score:
        <strong>${score.percentage}%</strong><br>
        Candidate:
        <strong>${escapeHtml(nameInput.value.trim())}</strong><br>
        Date:
        <strong>${completionDate}</strong>
      `;

      generateCertificateButton.dataset.name = nameInput.value.trim();
      generateCertificateButton.dataset.score = score.percentage;
      generateCertificateButton.dataset.date = completionDate;
      generateCertificateButton.dataset.certId = certificateId;

      submitButton.disabled = true;
      nameInput.disabled = true;

      document.querySelectorAll("#vccsp-assessment input").forEach(function (input) {
        input.disabled = true;
      });

      certificateSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      result.innerHTML = `
        <div class="vccsp-failure">
          <h3>Reassessment Required</h3>
          <p>
            Score:
            <strong>${score.percentage}%</strong>
            (${score.correct}/${score.total})
          </p>
          <p>
            A minimum score of 80% is required to pass the knowledge assessment.
          </p>
          <p>
            Please review Modules 01–19 and retake the assessment.
          </p>
        </div>
      `;

      certificateSection.hidden = true;
    }
  });

  generateCertificateButton.addEventListener("click", function () {
    const data = generateCertificateButton.dataset;

    const certificateHtml = createCertificateHtml({
      recipientName: data.name,
      score: data.score,
      completionDate: data.date,
      certificateId: data.certId,
      managerName: "VBS Customer Success Leadership"
    });

    certificatePreview.hidden = false;
    certificatePreview.innerHTML = `
      <div class="vccsp-certificate-actions">
        <button id="vccsp-print-certificate" type="button">
          🖨️ Print / Save Certificate as PDF
        </button>
      </div>

      <iframe
        id="vccsp-certificate-frame"
        title="VCCSP Certificate"
        class="vccsp-certificate-frame"
      ></iframe>
    `;

    const frame = document.getElementById("vccsp-certificate-frame");

    frame.srcdoc = certificateHtml;

    document
      .getElementById("vccsp-print-certificate")
      .addEventListener("click", function () {
        frame.contentWindow.focus();
        frame.contentWindow.print();
      });

    certificatePreview.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  function createCertificateHtml(data) {
    const certificateTemplate = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=EB+Garamond:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet">
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@page {
  size: 1400px 990px;
  margin: 0;
}

html,
body {
  width: 1400px;
  height: 990px;
}

body {
  background: #F4F6F9;
  font-family: 'Inter', sans-serif;
  position: relative;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.frame {
  position: absolute;
  inset: 36px;
  border: 2px solid #1B2A4A;
}

.frame::before {
  content: "";
  position: absolute;
  inset: 14px;
  border: 1px solid #E08A3C;
}

.corner {
  position: absolute;
  width: 26px;
  height: 26px;
}

.corner::before,
.corner::after {
  content: "";
  position: absolute;
  background: #E08A3C;
}

.corner::before {
  width: 26px;
  height: 2px;
}

.corner::after {
  width: 2px;
  height: 26px;
}

.tl {
  top: 50px;
  left: 50px;
}

.tr {
  top: 50px;
  right: 50px;
}

.bl {
  bottom: 50px;
  left: 50px;
}

.br {
  bottom: 50px;
  right: 50px;
}

.content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 140px 0 140px;
  text-align: center;
}

.badge {
  width: 76px;
  height: 76px;
  background: #E08A3C;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
}

.badge-mark {
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 32px;
  font-weight: 700;
}

.org {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 15px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #5B6B82;
  font-weight: 600;
  margin-bottom: 6px;
}

.program {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  letter-spacing: 1px;
  color: #1B2A4A;
  font-weight: 600;
  margin-bottom: 36px;
}

.cert-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #1B2A4A;
  letter-spacing: 1px;
  margin-bottom: 34px;
}

.presented-to {
  font-size: 15px;
  color: #5B6B82;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.recipient-name {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-size: 52px;
  color: #E08A3C;
  border-bottom: 1.5px solid #C7D0DD;
  padding-bottom: 14px;
  margin-bottom: 30px;
  min-width: 560px;
}

.body-text {
  font-size: 17px;
  color: #333F51;
  line-height: 1.7;
  max-width: 760px;
  margin-bottom: 40px;
}

.body-text strong {
  color: #1B2A4A;
}

.details-row {
  display: flex;
  gap: 70px;
  margin-bottom: 56px;
}

.detail {
  text-align: center;
}

.detail .lbl {
  font-size: 12px;
  color: #8492A6;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.detail .val {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #1B2A4A;
}

.sign-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 820px;
  margin-top: auto;
  margin-bottom: 80px;
}

.sign-block {
  text-align: center;
  width: 240px;
}

.sign-line {
  border-top: 1.5px solid #1B2A4A;
  padding-top: 10px;
}

.sign-name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #1B2A4A;
}

.sign-role {
  font-size: 12.5px;
  color: #5B6B82;
  margin-top: 2px;
}
</style>
</head>

<body>
  <div class="frame"></div>

  <div class="corner tl"></div>
  <div class="corner tr"></div>
  <div class="corner bl"></div>
  <div class="corner br"></div>

  <div class="content">

    <div class="badge">
      <div class="badge-mark">VBS</div>
    </div>

    <div class="org">
      Virtual Building Studio
    </div>

    <div class="program">
      Customer Success Academy · VCCSP Certification Program
    </div>

    <div class="cert-title">
      Certificate of Completion
    </div>

    <div class="presented-to">
      This certifies that
    </div>

    <div class="recipient-name">
      ${escapeHtml(data.recipientName)}
    </div>

    <div class="body-text">
      has successfully completed all 20 modules of the
      <strong>VBS Customer Success Academy</strong>
      and passed the Final Assessment of the
      <strong>VBS Certified Customer Success Professional (VCCSP)</strong>
      program, demonstrating proficiency in customer onboarding,
      health management, business reviews, escalation handling,
      retention, growth strategy, and AI-assisted customer success workflows.
    </div>

    <div class="details-row">

      <div class="detail">
        <div class="lbl">Assessment Score</div>
        <div class="val">${escapeHtml(data.score)}%</div>
      </div>

      <div class="detail">
        <div class="lbl">Date Completed</div>
        <div class="val">${escapeHtml(data.completionDate)}</div>
      </div>

      <div class="detail">
        <div class="lbl">Certificate ID</div>
        <div class="val">${escapeHtml(data.certificateId)}</div>
      </div>

    </div>

    <div class="sign-row">

      <div class="sign-block">
        <div class="sign-line">
          <div class="sign-name">
            ${escapeHtml(data.managerName)}
          </div>

          <div class="sign-role">
            Certification Approval
          </div>
        </div>
      </div>

      <div class="sign-block">
        <div class="sign-line">
          <div class="sign-name">
            Virtual Building Studio
          </div>

          <div class="sign-role">
            Customer Success Academy
          </div>
        </div>
      </div>

    </div>

  </div>
</body>
</html>
`;

    return certificateTemplate;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  renderQuestions();
})();
