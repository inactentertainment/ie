# Session 5 — Nine-site release status (October 25, 2026)

## Automated testing completed
- [Nine-site browser release QA](https://github.com/inactentertainment/ie/actions/runs/40243794012): Chromium headless tests served all nine development branches locally at 1366px desktop and 390px mobile. All nine homepages loaded HTTP 200. No recorded uncaught browser errors, broken loaded images, or major horizontal overflow in the smoke run. LiveFit `roadmap.html` and Basketball source-mode checks were included.
- [Nine-site source QA](https://github.com/inactentertainment/ie/actions/runs/40241377717): Source references and inline syntax checks passed.
- **Limits:** Tests do not simulate real payment clearing, real Supabase connections, multi-device accounts, personally identifiable data, full functionality, mobile native printing or all tools.

## Published change
- **Divine Shades of Brown**: [PR #1](https://github.com/inactentertainment/divine-shades-of-brown/pull/1) merged as `c4e31c5ceac67c406c0727afbd8d682f16929c2e`. Disabled automatic marketing email popup and hid the two voluntary marketing forms. Original $49 one-time and $399 lifetime purchase links and existing site functionality preserved. [Release gate](https://github.com/inactentertainment/divine-shades-of-brown/actions/runs/40244093587) passed existing navigation and checkout-link preservation tests; [Pages deployment](https://github.com/inactentertainment/divine-shades-of-brown/actions/runs/40244175013) and parallel GitHub Pages build succeeded. Custom-domain load not independently checked.
  
## Sites held for further tests / transition
| Site | Why held | Next action |
|---|---|---|
| Basketball Brilliance | Free-account conversion passed automated tests but shared roster and progress with real accounts, Supabase uptime and youth/privacy constraints not verified | Configure isolated test adult coach + parent/player invitation accounts, test assignment and cross-device saved progress, verify RLS before merging draft PR #4 |
| LiveFit | Existing $7 one-time purchase preserved; payment success page currently grants paid local access based only on `?paid=1` | Design Stripe-verified order confirmation and purchase restore while preserving the existing payment link, then run real no-charge sandbox entitlement tests |
| Cannabis Basics | Marketing signup popup suppressed on development branch, but `join.html` and `members.html` retain significant lifetime-account record functions | Separate public tools from account gate without deleting stored journals/records; test import/export/restore and existing users |
| InAct Entertainment / IEPLR | Home link to membership was hidden in dev branch, but `membership.html` sells $149 one-time lifetime vault access; dev branch also diverged from newer main | Keep one-time vault revenue, rename/reframe purchase offering without discarding lifetime customers, reconcile main-branch changes, retest |
| Perennial Home & Gardens | Dev branch identical to main; existing garden tool infrastructure/camera/printing untested end-to-end | Run 12 tools, plant identification, journal export/restore, iPhone/Android camera and mobile print tests |
| Examine the Past | Dev branch contains preservation plan only; no public-facing conversion needed yet | Exercise escape rooms and interactive assets, audio, worksheets/downloads on mobile/desktop |
| WDW LLC | Dev branch behind newer main and contains planning document only | Reconcile newer WDW/family changes; test interview assistant audio, navigation and responsive UI |
| Mental Health Discussions | Dev branch contains preservation plan only | Test PDF and tool exports, safety disclosures, emergency resources, and mobile/keyboard accessibility |

## Release rules
- Do not merge docs-only branches simply to call them published.
- Do not remove LiveFit's one-time purchase or Divine Shades of Brown's lifetime sales.
- Do not replace secure Basketball coach-player sharing with browser-only fake persistence.
- Keep separate GitHub preservation branches from Session 1.
- Do not claim that GitHub Pages deploy success verifies an external custom domain without independent check.
- Production merges/deployments performed this session: **Divine Shades of Brown only.**
