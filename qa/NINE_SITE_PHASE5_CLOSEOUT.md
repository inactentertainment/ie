# Phase 5 — Membership transition closeout
Date: 2026-10-26

## Scope closed: public-facing membership simplification
The nine existing websites and their code have been preserved. This phase does not require any new membership service, website replatforming or paid infrastructure.

### Published targeted changes
- Basketball Brilliance: public annual membership offer panels and checkout prompts hidden; user-facing free-account entry labels; existing application/data code preserved. GitHub Pages deployed successfully at `60a7904dd8737a48acd22c2ed31738a4fe5329bc`.
- Cannabis Basics: email promotional overlay disabled; free resource directly accessible; saved-records account links labeled clearly; account functions retained. GitHub Pages successfully deployed at `a2c298a1003c9cb0b34046f19b8b384e5094b4f7`.
- Divine Shades of Brown: unwanted marketing forms suppressed, retained $49 and $399 one-time purchase links; GitHub Pages succeeded at `c4e31c5ceac67c406c0727afbd8d682f16929c2e`.
- InAct Entertainment / IEPLR: membership link renamed one-time Lifetime Vault; removed promotion of future monthly billing; kept $149 lifetime offering and checkout preparations; GitHub Pages succeeded at `79766541a228bf77cf9fd13da8bd2650f3d4d7a3`.

### Preserved without unrelated edits
- Perennial Home & Gardens: garden apps/site preserved.
- Examine the Past: historical learning content and products preserved.
- WDW LLC: portfolio, interview assistant and other site improvements preserved; new deployment underway during this closeout so monitor only the current independent WDW deployment.
- Mental Health Discussions: existing applications and pages preserved.
- LiveFit: free site and original $7 one-time roadmap product preserved; current payment confirmation flow warrants verification prior to future sales changes.

## QA accomplished
- Nine development sites: local headless Chromium 1366px/390px homepage checks, successful HTTP responses, no uncaught page errors or obvious broken images/horizontal overflow in those smoke visits. These are not comprehensive end-to-end tests.
- Nine live repositories: GitHub Pages successful deployment recorded for all nine; WDW LLC additionally has a newer, separately initiated deployment in progress at closeout.
- Basketball Brilliance: Supabase restored and ACTIVE_HEALTHY, 35 tables; privacy RLS enabled for profiles, teams, team_memberships and coach_plays; policies present.
- The prepared full free-coach account flow remains in separate development PR #6 and **has not been published**.

## Deferred to future application-improvement work (not a reason to keep membership removal open)
- Real coach/player/guardian login, cross-account assignments, and saved progress test; full free-account backend conversion.
- LiveFit $7 checkout fulfillment and restore verification.
- Exhaustive camera/native print/export-recovery tests across all applications.
- Custom domain HTTP checks (GitHub build success does not by itself verify the external domain).

## Exit decision
**Close membership-removal phase 5**. Do not tell the user that untested account-sharing or purchase flows have passed. Do not change production account/auth/payment functionality as part of the marketing cleanup. Resume direct improvements to individual website tools and products next.
