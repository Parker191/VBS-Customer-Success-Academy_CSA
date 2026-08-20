(function () {
  "use strict";

  const QUESTIONS = [
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
      question: "What is the best approach when a customer raises a delivery concern?",
      options: [
        "Immediately blame the delivery team.",
        "Acknowledge the concern, investigate the facts, and coordinate a recovery plan.",
        "Ignore the concern until the next review.",
        "Send the issue directly to Sales."
      ],
      answer: 1
    },
    {
      question: "What should a CSM do when customer health deteriorates?",
      options: [
        "Wait for the customer to complain.",
        "Identify the risk and initiate proactive action.",
        "Close the account.",
        "Stop communication."
      ],
      answer: 1
    },
    {
      question: "Which is a strong indicator of customer risk?",
      options: [
        "Increased engagement.",
        "Successful project completion.",
        "Reduced activity and missed customer meetings.",
        "Positive feedback."
      ],
      answer: 2
    },
    {
      question: "What should be included in a CRM customer note?",
      options: [
        "Only the customer's name.",
        "Situation, sentiment, risks, actions, owners, and follow-up.",
        "Only invoice information.",
        "Only project files."
      ],
      answer: 1
    },
    {
      question: "What is the best response to a dissatisfied customer?",
      options: [
        "Defend the company immediately.",
        "Acknowledge the concern and take ownership of finding a resolution.",
        "Ask the customer to contact Sales.",
        "Avoid discussing the problem."
      ],
      answer: 1
    },
    {
      question: "What does proactive Customer Success mean?",
      options: [
        "Waiting for problems.",
        "Identifying opportunities and risks before they become critical.",
        "Only responding to emails.",
        "Managing invoices."
      ],
      answer: 1
    },
    {
      question: "Which activity supports customer retention?",
      options: [
        "Ignoring health signals.",
        "Regular value reviews and proactive risk management.",
        "Reducing communication.",
        "Waiting until renewal."
      ],
      answer: 1
    },
    {
      question: "What is the purpose of an escalation process?",
      options: [
        "Create unnecessary meetings.",
        "Provide structured handling of important customer issues.",
        "Avoid customer communication.",
        "Replace the CRM."
      ],
      answer: 1
    },
    {
      question: "How should AI-generated customer communication be handled?",
      options: [
        "Send it without reviewing.",
        "Verify the output and apply human judgment before sending.",
        "Allow AI to make customer decisions.",
        "Never use AI."
      ],
      answer: 1
    },
    {
      question: "What is an effective customer health review based on?",
      options: [
        "One data point.",
        "Multiple signals such as engagement, delivery, sentiment, usage, and financial status.",
        "Only revenue.",
        "Only customer complaints."
      ],
      answer: 1
    },
    {
      question: "What is the purpose of a Customer Success action plan?",
      options: [
        "Assign blame.",
        "Define actions, ownership, timelines, and expected outcomes.",
        "Replace customer meetings.",
        "Track employee attendance."
      ],
      answer: 1
    },
    {
      question: "What should happen after resolving a customer escalation?",
      options: [
        "Immediately close the issue.",
        "Confirm customer satisfaction and identify prevention actions.",
        "Stop communication.",
        "Delete the CRM note."
      ],
      answer: 1
    },
    {
      question: "What is the purpose of customer lifecycle management?",
      options: [
        "Manage only onboarding.",
        "Guide the customer through onboarding, adoption, engagement, retention, and growth.",
        "Manage invoices only.",
        "Replace Sales."
      ],
      answer: 1
    },
    {
      question: "Which behavior best demonstrates CSM ownership?",
      options: [
        "Passing every issue to another department.",
        "Coordinating the right teams and staying accountable for customer communication and follow-through.",
        "Waiting for instructions.",
        "Avoiding difficult conversations."
      ],
      answer: 1
    },
    {
      question: "What is the ultimate measure of Customer Success?",
      options: [
        "Number of emails sent.",
        "Number of internal meetings.",
        "Customer achievement of meaningful business outcomes and value.",
        "Number of CRM records."
      ],
      answer: 2
    }
  ];

  const PASSING_SCORE = 80;

  function shuffle(array) {
    const copy = array.slice();

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }

  function generateCertificateId() {
    const date = new Date();
    const year = date.getFullYear();

    const random = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    return `VCCSP-${year}-${random}`;
  }

  function formatDate() {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date());
  }

  function renderQuestions(container, questions) {
    container.innerHTML = "";

    questions.forEach((item, index) => {
      const wrapper = document.createElement("fieldset");
      wrapper.className = "vccsp-question";

      const legend = document.createElement("legend");
      legend.innerHTML = `<strong>${index + 1}. ${item.question}</strong>`;

      wrapper.appendChild(legend);

      item.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        label.className = "vccsp-option";

        label.innerHTML = `
          <input
            type="radio"
            name="question-${index}"
            value="${optionIndex}"
            required
          >
          <span>${option}</span>
        `;

        wrapper.appendChild(label);
      });

      container.appendChild(wrapper);
    });
  }

  function initAssessment() {
    const root = document.querySelector("[data-vccsp-assessment]");

    if (!root) {
      return;
    }

    const form = document.getElementById("vccsp-assessment-form");
    const nameInput = document.getElementById("vccsp-name");
    const startButton = document.getElementById("vccsp-start");
    const submitButton = document.getElementById("vccsp-submit");
    const resetButton = document.getElementById("vccsp-reset");
    const questionsContainer = document.getElementById("vccsp-questions");
    const result = document.getElementById("vccsp-result");
    const certificate = document.getElementById("vccsp-certificate");
    const printButton = document.getElementById("vccsp-print");

    let assessmentQuestions = [];
    let started = false;

    startButton.addEventListener("click", function () {
      const name = nameInput.value.trim();

      if (!name) {
        nameInput.focus();
        alert("Please enter your full name before starting the assessment.");
        return;
      }

      assessmentQuestions = shuffle(QUESTIONS);

      renderQuestions(
        questionsContainer,
        assessmentQuestions
      );

      started = true;

      startButton.hidden = true;
      submitButton.hidden = false;
      resetButton.hidden = true;

      result.hidden = true;
      certificate.hidden = true;

      questionsContainer.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!started) {
        return;
      }

      const answers = new FormData(form);

      let score = 0;

      assessmentQuestions.forEach(function (question, index) {
        const selected = Number(
          answers.get(`question-${index}`)
        );

        if (selected === question.answer) {
          score++;
        }
      });

      const percentage = Math.round(
        (score / assessmentQuestions.length) * 100
      );

      const passed = percentage >= PASSING_SCORE;
      const candidateName = nameInput.value.trim();
      const certificateId = generateCertificateId();
      const completionDate = formatDate();

      result.hidden = false;

      result.className =
        "vccsp-result " +
        (passed ? "vccsp-pass" : "vccsp-fail");

      result.innerHTML = `
        <h2>${passed ? "🎉 Assessment Passed" : "🔄 Assessment Not Passed"}</h2>

        <p>
          <strong>${candidateName}</strong>,
          your score is:
        </p>

        <div class="vccsp-score">${percentage}%</div>

        <p>
          ${score} out of ${assessmentQuestions.length}
          questions answered correctly.
        </p>

        ${
          passed
            ? `
              <p>
                You have passed the knowledge assessment requirement
                with the minimum required score of ${PASSING_SCORE}%.
              </p>

              <p>
                <strong>Important:</strong>
                Final VCCSP certification remains subject to completion
                and evaluator approval of the practical case study,
                CSM simulation, and process/documentation review.
              </p>
            `
            : `
              <p>
                A minimum score of ${PASSING_SCORE}% is required.
                Please review the relevant modules and try again.
              </p>
            `
        }
      `;

      if (passed) {
        certificate.hidden = false;

        certificate.dataset.name = candidateName;
        certificate.dataset.score = percentage;
        certificate.dataset.date = completionDate;
        certificate.dataset.id = certificateId;

        certificate.innerHTML = `
          <div class="vccsp-certificate-preview">

            <div class="vccsp-certificate-border">

              <div class="vccsp-certificate-inner">

                <div class="vccsp-certificate-badge">
                  🎓
                </div>

                <div class="vccsp-certificate-org">
                  VIRTUAL BUILDING STUDIO
                </div>

                <div class="vccsp-certificate-program">
                  CUSTOMER SUCCESS ACADEMY
                  ·
                  VCCSP CERTIFICATION PROGRAM
                </div>

                <h1>Certificate of Completion</h1>

                <div class="vccsp-presented">
                  This certifies that
                </div>

                <div class="vccsp-recipient">
                  ${candidateName}
                </div>

                <p class="vccsp-certificate-body">
                  has successfully completed the browser-based
                  knowledge assessment for the
                  <strong>VBS Customer Success Academy</strong>
                  and achieved the required passing score for the
                  <strong>VBS Certified Customer Success Professional
                  (VCCSP)</strong> knowledge component.
                </p>

                <div class="vccsp-certificate-details">

                  <div>
                    <span>Assessment Score</span>
                    <strong>${percentage}%</strong>
                  </div>

                  <div>
                    <span>Date Completed</span>
                    <strong>${completionDate}</strong>
                  </div>

                  <div>
                    <span>Certificate ID</span>
                    <strong>${certificateId}</strong>
                  </div>

                </div>

                <div class="vccsp-certificate-signatures">

                  <div>
                    <div class="vccsp-sign-line"></div>
                    <strong>Virtual Building Studio</strong>
                    <span>Customer Success Academy</span>
                  </div>

                  <div>
                    <div class="vccsp-sign-line"></div>
                    <strong>VCCSP Assessment</strong>
                    <span>Knowledge Component</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div class="vccsp-actions">
            <button
              type="button"
              id="vccsp-print-generated"
              class="md-button md-button--primary"
            >
              🖨️ Print / Save Certificate
            </button>
          </div>
        `;

        document
          .getElementById("vccsp-print-generated")
          .addEventListener("click", function () {
            window.print();
          });
      }

      submitButton.hidden = true;
      resetButton.hidden = false;

      result.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    resetButton.addEventListener("click", function () {
      form.reset();

      assessmentQuestions = [];
      started = false;

      questionsContainer.innerHTML = "";

      result.hidden = true;
      certificate.hidden = true;

      startButton.hidden = false;
      submitButton.hidden = true;
      resetButton.hidden = true;

      window.scrollTo({
        top: root.offsetTop,
        behavior: "smooth"
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAssessment);
  } else {
    initAssessment();
  }

  document.addEventListener("DOMContentLoaded", initAssessment);
})();
