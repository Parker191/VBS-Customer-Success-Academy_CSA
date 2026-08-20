(function () {
  "use strict";

  /*
   * VBS Customer Success Academy
   * Module 20 – Final Assessment & Certification
   * VCCSP Interactive Assessment
   *
   * Version: 3.0
   */

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
        "Regularly connecting product or service usage to customer goals.",
        "Sending invoices.",
        "Reducing customer communication.",
        "Waiting for complaints."
      ],
      answer: 0
    },
    {
      question: "What is an important purpose of a QBR or business review?",
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
      question: "Which can be a customer retention or health signal?",
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

  /*
   * ---------------------------------------------------------
   * DOM ELEMENTS
   * ---------------------------------------------------------
   */

  const assessment = document.getElementById("vccsp-assessment");

  if (!assessment) {
    return;
  }

  const nameInput = document.getElementById("vccsp-candidate-name");

  const startButton = document.getElementById("vccsp-start");

  const questionContainer = document.getElementById(
    "vccsp-question-container"
  );

  const submitArea = document.getElementById(
    "vccsp-submit-area"
  );

  const result = document.getElementById(
    "vccsp-result"
  );

  const certificateSection = document.getElementById(
    "vccsp-certificate"
  );

  const certificateSummary = document.getElementById(
    "vccsp-certificate-summary"
  );

  const generateCertificateButton = document.getElementById(
    "vccsp-generate-certificate"
  );

  const certificatePreview = document.getElementById(
    "vccsp-certificate-preview"
  );

  /*
   * ---------------------------------------------------------
   * STATE
   * ---------------------------------------------------------
   */

  let assessmentStarted = false;
  let assessmentSubmitted = false;

  /*
   * ---------------------------------------------------------
   * INITIAL STATE
   * ---------------------------------------------------------
   */

  questionContainer.hidden = true;
  submitArea.hidden = true;
  certificateSection.hidden = true;

  /*
   * ---------------------------------------------------------
   * START ASSESSMENT
   * ---------------------------------------------------------
   */

  startButton.addEventListener("click", function () {
    if (assessmentStarted) {
      return;
    }

    if (!validateName()) {
      return;
    }

    assessmentStarted = true;

    nameInput.disabled = true;

    startButton.disabled = true;

    startButton.textContent = "Assessment In Progress";

    renderQuestions();

    questionContainer.hidden = false;

    submitArea.hidden = false;

    submitArea.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  /*
   * ---------------------------------------------------------
   * RENDER QUESTIONS
   * ---------------------------------------------------------
   */

  function renderQuestions() {
    questionContainer.innerHTML = questions
      .map(function (item, index) {
        const questionNumber = index + 1;

        return `
          <fieldset class="vccsp-question">

            <legend>
              <strong>
                ${questionNumber}. ${escapeHtml(item.question)}
              </strong>
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

                      <span>
                        ${escapeHtml(option)}
                      </span>

                    </label>
                  `;
                })
                .join("")}

            </div>

          </fieldset>
        `;
      })
      .join("");

    renderSubmitButton();
  }

  /*
   * ---------------------------------------------------------
   * SUBMIT BUTTON
   * ---------------------------------------------------------
   */

  function renderSubmitButton() {
    submitArea.innerHTML = `
      <div class="vccsp-submit-wrapper">

        <p class="vccsp-submit-note">
          <strong>
            Please review all 20 questions before submitting.
          </strong>
        </p>

        <p>
          The assessment can only be submitted once per attempt.
        </p>

        <button
          type="button"
          id="vccsp-submit"
          class="md-button md-button--primary"
        >
          📝 Submit Assessment
        </button>

      </div>
    `;

    const submitButton = document.getElementById(
      "vccsp-submit"
    );

    submitButton.addEventListener(
      "click",
      submitAssessment
    );
  }

  /*
   * ---------------------------------------------------------
   * VALIDATE CANDIDATE NAME
   * ---------------------------------------------------------
   */

  function validateName() {
    const name = nameInput.value.trim();

    if (!name) {
      result.innerHTML = `
        <div class="vccsp-error">

          <h3>Candidate Name Required</h3>

          <p>
            Please enter your full name before starting
            the VCCSP assessment.
          </p>

        </div>
      `;

      nameInput.focus();

      return false;
    }

    if (name.length < 2) {
      result.innerHTML = `
        <div class="vccsp-error">

          <h3>Invalid Candidate Name</h3>

          <p>
            Please enter your complete name.
          </p>

        </div>
      `;

      nameInput.focus();

      return false;
    }

    return true;
  }

  /*
   * ---------------------------------------------------------
   * VALIDATE QUESTIONS
   * ---------------------------------------------------------
   */

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

          <h3>Incomplete Assessment</h3>

          <p>
            Please answer all 20 questions before submitting.
          </p>

          <p>
            <strong>
              Unanswered questions:
            </strong>
            ${unanswered.join(", ")}
          </p>

        </div>
      `;

      const firstUnanswered = document.querySelector(
        `input[name="question-${unanswered[0] - 1}"]`
      );

      if (firstUnanswered) {
        firstUnanswered.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }

      return false;
    }

    return true;
  }

  /*
   * ---------------------------------------------------------
   * CALCULATE SCORE
   * ---------------------------------------------------------
   */

  function calculateScore() {
    let correct = 0;

    questions.forEach(function (question, index) {
      const selected = document.querySelector(
        `input[name="question-${index}"]:checked`
      );

      if (
        selected &&
        Number(selected.value) === question.answer
      ) {
        correct++;
      }
    });

    const percentage = Math.round(
      (correct / questions.length) * 100
    );

    return {
      correct: correct,
      total: questions.length,
      percentage: percentage
    };
  }

  /*
   * ---------------------------------------------------------
   * SUBMIT ASSESSMENT
   * ---------------------------------------------------------
   */

  function submitAssessment() {
    if (assessmentSubmitted) {
      return;
    }

    if (!validateName()) {
      return;
    }

    if (!validateAllQuestions()) {
      return;
    }

    const confirmation = window.confirm(
      "Are you sure you want to submit your VCCSP assessment? " +
      "The assessment can only be submitted once per attempt."
    );

    if (!confirmation) {
      return;
    }

    assessmentSubmitted = true;

    const score = calculateScore();

    const passed =
      score.percentage >= PASSING_SCORE;

    const submitButton =
      document.getElementById("vccsp-submit");

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Assessment Submitted";
    }

    disableAssessmentInputs();

    if (passed) {
      handlePassedAssessment(score);
    } else {
      handleFailedAssessment(score);
    }
  }

  /*
   * ---------------------------------------------------------
   * PASSED ASSESSMENT
   * ---------------------------------------------------------
   */

  function handlePassedAssessment(score) {
    const completionDate = formatDate(
      new Date()
    );

    const certificateId =
      generateCertificateId();

    result.innerHTML = `
      <div class="vccsp-success">

        <h3>
          🎉 Knowledge Assessment Passed
        </h3>

        <p>
          <strong>
            ${escapeHtml(nameInput.value.trim())}
          </strong>
        </p>

        <p>
          Score:
          <strong>
            ${score.percentage}%
          </strong>

          (${score.correct}/${score.total})
        </p>

        <p>
          You have achieved the minimum
          <strong>80%</strong>
          knowledge assessment requirement.
        </p>

        <p>
          Your knowledge assessment is complete.
          The Practical Case Study, CSM Simulation,
          and Process & Documentation Review remain
          part of the complete VCCSP certification process.
        </p>

      </div>
    `;

    certificateSection.hidden = false;

    certificateSummary.innerHTML = `
      <div class="vccsp-certificate-summary">

        <p>
          <strong>Knowledge Assessment Score:</strong>
          ${score.percentage}%
        </p>

        <p>
          <strong>Correct Answers:</strong>
          ${score.correct}/${score.total}
        </p>

        <p>
          <strong>Candidate:</strong>
          ${escapeHtml(nameInput.value.trim())}
        </p>

        <p>
          <strong>Date:</strong>
          ${escapeHtml(completionDate)}
        </p>

        <p>
          <strong>Certificate ID:</strong>
          ${escapeHtml(certificateId)}
        </p>

      </div>
    `;

    generateCertificateButton.dataset.name =
      nameInput.value.trim();

    generateCertificateButton.dataset.score =
      score.percentage;

    generateCertificateButton.dataset.date =
      completionDate;

    generateCertificateButton.dataset.certId =
      certificateId;

    certificateSection.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

  /*
   * ---------------------------------------------------------
   * FAILED ASSESSMENT
   * ---------------------------------------------------------
   */

  function handleFailedAssessment(score) {
    certificateSection.hidden = true;

    result.innerHTML = `
      <div class="vccsp-failure">

        <h3>
          🔄 Reassessment Required
        </h3>

        <p>
          Score:
          <strong>
            ${score.percentage}%
          </strong>

          (${score.correct}/${score.total})
        </p>

        <p>
          A minimum score of
          <strong>80%</strong>
          is required to pass the knowledge assessment.
        </p>

        <p>
          Please review Modules 01–19 and revisit
          the relevant Customer Success concepts.
        </p>

        <p>
          You will need to complete a new assessment
          attempt according to the Academy's
          reassessment process.
        </p>

      </div>
    `;

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

  /*
   * ---------------------------------------------------------
   * DISABLE ASSESSMENT INPUTS
   * ---------------------------------------------------------
   */

  function disableAssessmentInputs() {
    const inputs = assessment.querySelectorAll(
      "input"
    );

    inputs.forEach(function (input) {
      input.disabled = true;
    });
  }

  /*
   * ---------------------------------------------------------
   * GENERATE CERTIFICATE ID
   * ---------------------------------------------------------
   */

  function generateCertificateId() {
    const year =
      new Date().getFullYear();

    const random =
      Math.floor(
        1000 + Math.random() * 9000
      );

    return `VBS-VCCSP-${year}-${random}`;
  }

  /*
   * ---------------------------------------------------------
   * FORMAT DATE
   * ---------------------------------------------------------
   */

  function formatDate(date) {
    return date.toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );
  }

  /*
   * ---------------------------------------------------------
   * GENERATE CERTIFICATE
   * ---------------------------------------------------------
   */

  generateCertificateButton.addEventListener(
    "click",
    function () {
      const data =
        generateCertificateButton.dataset;

      if (!data.name || !data.certId) {
        return;
      }

      const certificateHtml =
        createCertificateHtml({
          recipientName: data.name,
          score: data.score,
          completionDate: data.date,
          certificateId: data.certId,
          managerName:
            "VBS Customer Success Leadership"
        });

      certificatePreview.hidden = false;

      certificatePreview.innerHTML = `
        <div class="vccsp-certificate-actions">

          <button
            id="vccsp-print-certificate"
            type="button"
            class="md-button md-button--primary"
          >
            🖨️ Print / Save Certificate as PDF
          </button>

        </div>

        <iframe
          id="vccsp-certificate-frame"
          title="VCCSP Certificate"
          class="vccsp-certificate-frame"
        ></iframe>
      `;

      const frame =
        document.getElementById(
          "vccsp-certificate-frame"
        );

      frame.srcdoc =
        certificateHtml;

      document
        .getElementById(
          "vccsp-print-certificate"
        )
        .addEventListener(
          "click",
          function () {
            frame.contentWindow.focus();

            frame.contentWindow.print();
          }
        );

      certificatePreview.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  );

  /*
   * ---------------------------------------------------------
   * CERTIFICATE HTML
   * ---------------------------------------------------------
   */

  function createCertificateHtml(data) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>

<title>
VBS VCCSP Certificate
</title>

<link
  rel="preconnect"
  href="https://fonts.googleapis.com"
/>

<link
  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=EB+Garamond:ital,wght@0,500;0,600;1,500&display=swap"
  rel="stylesheet"
/>

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
  font-family: "Inter", sans-serif;
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

  padding:
    82px
    140px
    0
    140px;

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

  margin-bottom: 20px;
}

.badge-mark {
  color: white;

  font-family:
    "Space Grotesk",
    sans-serif;

  font-size: 30px;

  font-weight: 700;
}

.org {
  font-family:
    "Space Grotesk",
    sans-serif;

  font-size: 15px;

  letter-spacing: 3px;

  text-transform: uppercase;

  color: #5B6B82;

  font-weight: 600;

  margin-bottom: 6px;
}

.program {
  font-family:
    "Space Grotesk",
    sans-serif;

  font-size: 17px;

  letter-spacing: 1px;

  color: #1B2A4A;

  font-weight: 600;

  margin-bottom: 30px;
}

.cert-title {
  font-family:
    "Space Grotesk",
    sans-serif;

  font-size: 44px;

  font-weight: 700;

  color: #1B2A4A;

  letter-spacing: 1px;

  margin-bottom: 28px;
}

.presented-to {
  font-size: 15px;

  color: #5B6B82;

  letter-spacing: 1.5px;

  text-transform: uppercase;

  margin-bottom: 16px;
}

.recipient-name {
  font-family:
    "EB Garamond",
    serif;

  font-style: italic;

  font-size: 52px;

  color: #E08A3C;

  border-bottom:
    1.5px solid #C7D0DD;

  padding-bottom: 12px;

  margin-bottom: 24px;

  min-width: 560px;
}

.body-text {
  font-size: 16px;

  color: #333F51;

  line-height: 1.6;

  max-width: 790px;

  margin-bottom: 30px;
}

.body-text strong {
  color: #1B2A4A;
}

.details-row {
  display: flex;

  gap: 70px;

  margin-bottom: 36px;
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
  font-family:
    "Space Grotesk",
    sans-serif;

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

  margin-bottom: 62px;
}

.sign-block {
  text-align: center;

  width: 240px;
}

.sign-line {
  border-top:
    1.5px solid #1B2A4A;

  padding-top: 10px;
}

.sign-name {
  font-family:
    "Space Grotesk",
    sans-serif;

  font-weight: 600;

  font-size: 15px;

  color: #1B2A4A;
}

.sign-role {
  font-size: 12.5px;

  color: #5B6B82;

  margin-top: 2px;
}

.footer-note {
  position: absolute;

  bottom: 43px;

  left: 0;

  right: 0;

  text-align: center;

  font-size: 10px;

  color: #8492A6;

  letter-spacing: 0.5px;
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
      <div class="badge-mark">
        VBS
      </div>
    </div>

    <div class="org">
      Virtual Building Studio
    </div>

    <div class="program">
      Customer Success Academy
      ·
      VCCSP Certification Program
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

      has successfully completed the
      <strong>
        VBS Customer Success Academy
      </strong>

      and achieved a passing score in the
      <strong>
        VBS Certified Customer Success Professional
        (VCCSP)
      </strong>

      Final Knowledge Assessment, demonstrating
      proficiency in customer onboarding,
      customer health management,
      engagement, escalation handling,
      retention, growth strategy,
      operational excellence,
      and AI-assisted Customer Success workflows.

    </div>

    <div class="details-row">

      <div class="detail">

        <div class="lbl">
          Assessment Score
        </div>

        <div class="val">
          ${escapeHtml(data.score)}%
        </div>

      </div>

      <div class="detail">

        <div class="lbl">
          Date Completed
        </div>

        <div class="val">
          ${escapeHtml(data.completionDate)}
        </div>

      </div>

      <div class="detail">

        <div class="lbl">
          Certificate ID
        </div>

        <div class="val">
          ${escapeHtml(data.certificateId)}
        </div>

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

  <div class="footer-note">
    VBS Customer Success Academy ·
    VCCSP Certification Program ·
    ${escapeHtml(data.certificateId)}
  </div>

</body>

</html>
`;
  }

  /*
   * ---------------------------------------------------------
   * HTML ESCAPE
   * ---------------------------------------------------------
   */

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

})();
