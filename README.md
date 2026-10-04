# Nivesh Kavach (निवेश कवच)

**A privacy-first scam red-flag checker for WhatsApp and SMS investment messages, in English, Hindi and Marathi.**

Paste a suspicious message. Nivesh Kavach shows which scam warning signs it contains, explains each one in plain language, can read the result aloud, and creates a ready-made warning you can copy into a family group.

- **Live demo:** https://pramukhkasekar.github.io/nivesh-kavach/

## Quick start (no install, no internet needed)

1. **Extract the zip first** (right-click, *Extract All*). Do not open `index.html` from inside the zip.
2. Double-click `index.html`. It opens in your browser. It is a single self-contained file, so you can also copy that one file to a phone or pen drive and open it anywhere.

## Features

| Feature | Details |
|---|---|
| Three languages | English, हिंदी, मराठी: the whole interface, every explanation and the family warning |
| 100% private | Runs entirely in the browser. No server, no tracking, no network calls. Works offline |
| 14 red-flag rules | Guaranteed returns, unrealistic daily returns, "insider/operator" tips, fake SEBI claims, WhatsApp/Telegram group lures, OTP/PIN requests, fee demands, fake apps/APKs, secrecy pressure, urgency, fake KYC, withdrawal fees, short links, "AI/mentor" authority |
| Listen button | Reads the result aloud using the device's own voices (Hindi/Marathi voices depend on the device) |
| Family warning | One tap copies a short warning message for the family WhatsApp group |
| Accessible | Large touch targets, text-size button, keyboard friendly, colour is never the only signal |

## Responsible-AI guardrails (SANGYAN)

- **No stock tips, no predictions, no investment advice.** The tool never says what to buy or sell.
- **Never says a message is "safe" or "genuine".** When nothing matches, it says so and adds that scammers keep changing their words.
- **Points to official sources only:** SEBI's website (sebi.gov.in), the cyber-fraud helpline **1930** and cybercrime.gov.in.
- **Your message stays on your device.**

## Limitations (honest ones)

- Detection is **rule-based**: it can miss new scam wording and can occasionally flag a genuine message that uses risky-sounding words. It is a warning aid, not a verdict.
- Hindi/Marathi spoken output needs a Hindi/Marathi voice installed on the device (Microsoft Edge usually has them).
- Why not an LLM? An LLM would need a server or a large download, which breaks the privacy and offline goals, and it can invent reassurance. Fixed, auditable rules keep every warning explainable.

## Project layout

```
index.html            <- the finished app (single file, open this)
src/engine.js         <- detection rules + English/Hindi/Marathi text
src/template.html     <- page layout, styles and app code
build.js              <- inlines engine.js into template.html -> index.html
tests/engine.test.js  <- 16 automated tests
```

## Run the tests / rebuild

Requires Node.js 18 or newer (only for development; the app itself needs nothing).

```
node tests/engine.test.js
node build.js
```

## Team

| Name | Role |
|---|---|
| YOUR NAME | e.g. Developer |

## License

MIT. See `LICENSE`.
