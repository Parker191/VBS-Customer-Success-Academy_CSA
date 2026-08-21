# 🎓 Certificates

Certificate templates for the VBS Certified Customer Success Professional (VCCSP) program.

## Status

| Asset | Status |
|---|---|
| Certificate of Completion Template (HTML, fillable placeholders) | ✅ Complete |
| Certificate Background (print-ready PNG, for Moodle automation) | ✅ Complete |

**2 / 2 assets complete.**

## Automating Certificate Generation in Moodle

To auto-generate and auto-issue certificates the moment a learner passes the Final Assessment quiz, use Moodle's **Custom Certificate** activity (`mod_customcert`) — a free, actively-maintained plugin built for exactly this.

### Setup

1. **Install the plugin** (if not already installed): Site administration → Plugins → Install plugins → search "Custom certificate", or download from [moodle.org/plugins/mod_customcert](https://moodle.org/plugins/mod_customcert).
2. In your course, **Add an activity → Custom certificate**.
3. Under **Manage templates**, create a new template and set **`VBS-CSA Certificate Background.png`** as the background image (Certificate elements → Background image). This file matches the Academy's brand exactly and already has the static labels and signature line in place.
4. Add these **dynamic elements** on top of the background, positioning each with Moodle's drag-and-drop editor:

   | Element | Moodle Element Type | Approx. Position |
   |---|---|---|
   | Recipient name | Student name | Centered, ~35% down the page (on the blank line under "This certifies that") |
   | Assessment score | Grade | Under "Assessment Score" label, ~62% down |
   | Completion date | Date (completion date) | Under "Date Completed" label, ~62% down |
   | Certificate ID | Code (built-in verification code) | Under "Certificate ID" label, ~62% down |

5. Under **Automatic issue criteria**, choose the **Final Assessment quiz activity** and set the **minimum grade to 80%** (matching the Module 20 spec) — the certificate will then generate and issue automatically the moment a learner passes, no manual step needed.
6. Optionally enable **"Allow anyone to verify a certificate"** so the built-in verification code can be checked without logging in.

### Fallback (manual / no-plugin option)

If the plugin isn't available, `Certificate of Completion Template.html` is a standalone fillable version — open in a browser, replace the `{{PLACEHOLDER}}` fields manually, and print to PDF.
