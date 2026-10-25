# Session 4 — Nine-site technical quality audit
Date: 2026-10-25

## Verified in this session
- All nine connected GitHub repositories and their transition branches inspected. Perennial Home & Gardens now also has an untouched `feature/free-first-transition-2026` branch; main/production was not changed.
- Read-only nine-site QA script: `.github/scripts/nine-site-smoke-audit.cjs`.
- Non-deploying GitHub Actions test: `.github/workflows/nine-site-qa.yml`.
- Verified GitHub Actions run [40241280791](https://github.com/inactentertainment/ie/actions/runs/40241280791) passed script syntax and all nine-source checks (before the branch-list-only follow-up).
- Source checks: homepage local asset/link resolution (URL-decoded, excluding dynamic JS expressions), inline JavaScript syntax, free basketball account code, and existence of LiveFit's original Stripe payment link. No confirmed broken homepage links or inline script syntax defects were found.
- Basketball Brilliance has a separately passing [free-account CI run](https://github.com/inactentertainment/basketball-brilliance/actions/runs/40239266852).

## Release blockers / manual validation
1. **Basketball Brilliance:** Real isolated coach, parent and player accounts, team assignment/progress persistence, and authorization/RLS checks across accounts must be tested. Confirm secure handling of minors before opening youth registration. Free hosting uptime and Supabase connection must be checked.
2. **LiveFit:** Preserve the $7 one-time payment and related fulfillment. `success.html` currently grants client-side paid access when the URL includes `paid=1`; this is not proof of verified Stripe payment. Implement genuine verification without disrupting legitimate purchases before republishing.
3. **Cannabis Basics:** `join.html` and `members.html` remain in place. Preserve record-book and saved-user data while separating free tool access from obsolete lifetime/member sign-up flows. Confirm export/restore on real devices.
4. **Divine Shades of Brown:** Preserve existing one-time lifetime purchase routes, purchased entitlements and checkout; ensure marketing forms/popup removal doesn't break fulfillment.
5. **InAct Entertainment / IEPLR:** Home membership links are removed in development, but `membership.html` still advertises a $149 one-time lifetime-access offer. Preserve genuine sales and entitlements. Decide whether to keep this as a standalone one-time product or remove only recurring membership offers.
6. **Perennial Home & Gardens:** Inspect Supabase dependencies and test garden tools, Save/Import/Export, camera/print, and responsive UI. No public change made.
7. **Examine the Past:** Browser-play all major game/tool interactions and validate navigation, audio and downloadable products.
8. **WDW LLC:** Test interview tool, voice control and audio media, portfolio links and mobile view.
9. **Mental Health Discussions:** Test privacy, safety notices, tools/PDF exports, emergency-resource links and mobile layouts.

## Scope and cautions
- All checks were read-only except creating QA code/workflows and an empty Perennial development branch. There were **no production merges or deployments**.
- A successful static audit is **not** an end-to-end browser test or proof of payment/account reliability.
- Preserve one-time product purchases across all sites, especially LiveFit; remove only paid recurring subscriptions and unwanted marketing collection. Basketball's free coach/player/parent accounts are required.
- Proceed to Session 5 only when actual browser, permissions and payments tests are complete. Merge/deploy site by site, and verify public URLs after publication.
