# Copperline Heating & Air

A rebuilt fictional Phoenix HVAC website concept for Clinch Valley Digital. This is a separate project from KingKhao/copperline-demo, whose checked main commit dde4f47 contains Copperline Plumbing & Electric in Rogersville. That source and the CVD portfolio were not modified.

Status: local review build, not deployed over the existing copperline-demo.vercel.app URL. Local preview http://127.0.0.1:43830/ . No paid hosting, account setup or payment service needed.

Static HTML/CSS/vanilla JS, no dependencies or build step. Preview through a local HTTP server. Three generated editorial images are included as optimized WebP assets; no runtime image generation. Fonts have system fallbacks.

## Working demo interactions
- Four service choices update the service explanation, list and request action.
- The chosen service carries into the request form.
- Required fields, email and five-digit ZIP validation.
- Preview confirmation renders entered text safely, clearly says nothing was saved/sent/booked, and can reset.
- Native FAQ accordions, accessible focus and reduced-motion handling.
- Demo form is disabled without JavaScript; deployment CSP blocks native form submissions. No backend, analytics, cookies, local/session storage, outgoing email or payments.

All business details, hours and number are fictional. No invented customer reviews, certifications, guarantees, licenses, awards or operating history. Images are illustrative and generated, not actual job or employee photos.

## Verified
Browser checks at 1440, 768, 390 and 320px: no horizontal overflow, images decode, service selection and carry-over, invalid ZIP rejection, request preview/reset, safe text rendering, FAQ, no non-GET submissions, no local/session storage, and disabled controls without JS. No physical phone tested.

Taste source lint: 0 failures. Final responsive inspection: no failures with a documented still-page allowance (restrained motion is intentional for this service website); three warnings about type-size variation, mixed headline detection and no video remain reviewed. No conversion lift is claimed. Full notes and screenshots are outside the deployable site under Documents/Codex/outputs.
