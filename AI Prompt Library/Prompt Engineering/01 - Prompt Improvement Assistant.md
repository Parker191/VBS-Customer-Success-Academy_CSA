# 🧠 Prompt Improvement Assistant

## Purpose

Help a Customer Success Manager improve an existing AI prompt so that it produces clearer, more accurate, practical, and reusable results.

---

## Prompt

```text
Act as an expert Prompt Engineer who specializes in Customer Success workflows.

I will provide an existing AI prompt.

Your job is to review and improve it.

Existing Prompt:
[Paste the prompt here]

Context:
[Explain what the prompt is intended to accomplish]

Who will use it:
[CSM / Manager / Operations / Leadership / Other]

Desired Output:
[Describe what the AI should produce]

Improve the prompt using the following principles:

1. Clear Role
2. Relevant Context
3. Specific Task
4. Required Information
5. Clear Constraints
6. Defined Output Format
7. Accuracy Requirements
8. Appropriate Tone
9. Reusability
10. Customer Success Relevance

Provide the following:

### 1. Prompt Quality Score

Rate the original prompt from 0–100.

### 2. What Works

Identify the strongest parts of the existing prompt.

### 3. What Could Be Improved

Identify ambiguity, missing context, unnecessary instructions, or potential problems.

### 4. Improved Prompt

Rewrite the prompt so it is clearer, more practical, and reusable.

### 5. Why It Is Better

Explain the key improvements.

### 6. Example Input

Provide a realistic example showing how a CSM could use the improved prompt.

### 7. Expected Output

Show what a good AI response should look like.

Do not change the intended purpose of the original prompt.

Do not add unnecessary complexity.

Do not invent business rules or customer information.
```

---

# 🧪 Example

Suppose a CSM writes:

```text
Write an email to a customer about a delay.
```

The Prompt Improvement Assistant should recognize that this is too vague.

It should help transform it into something more useful by defining:

```text
Role
↓
Customer context
↓
Reason for delay
↓
Customer impact
↓
Required action
↓
Tone
↓
Output format
```

The result becomes a reusable professional prompt rather than a one-time instruction.

---

# 🧠 Prompt Engineering Framework

Our library will follow this basic model:

```text
ROLE
  ↓
CONTEXT
  ↓
TASK
  ↓
CONSTRAINTS
  ↓
OUTPUT FORMAT
  ↓
REVIEW
```

### Example

**Role**

> Act as an experienced Customer Success Manager.

**Context**

> The customer has experienced a delivery delay.

**Task**

> Prepare a customer communication.

**Constraints**

> Do not invent information. Keep the tone professional and empathetic.

**Output**

> Subject + email body + recommended follow-up action.

---

# ⚠️ Important

A longer prompt is **not automatically a better prompt**.

The objective is:

> **Clear instructions + useful context + appropriate constraints + predictable output.**

Avoid adding instructions simply to make a prompt longer.

---

# 📋 CSM Prompt Review Checklist

Before using an important AI prompt:

- [ ] Is the role clear?
- [ ] Is enough context provided?
- [ ] Is the task specific?
- [ ] Are constraints defined?
- [ ] Is the desired output clear?
- [ ] Are assumptions controlled?
- [ ] Is sensitive information protected?
- [ ] Can the prompt be reused?
- [ ] Can the output be reviewed easily?
- [ ] Does the prompt support a real CSM workflow?

---

## 📚 Related Resources

- AI Prompt Library README
- Customer Communication Prompts
- Customer Health Prompts
- Meeting Prompts
- Escalation Prompts
- Reporting Prompts

---

**Category:** Prompt Engineering  
**Version:** 6.0  
**Status:** Active
