# WORKROOM MVP — Build. Ship. Show.

A responsive, static pilot site for practical challenges open to students across disciplines.

## What's included
- `index.html` — public-facing challenge board, challenge briefs, submission form.
- `apps_script.gs` — Google Apps Script endpoint to collect submissions in a Google Sheet.
- `pilot_tracker.csv` — experiment tracker for interviews, invitations, starts, completions and iteration.
- `AI_PROMPTS.md` — prompts used to create and review this MVP.

## Important: connect submissions before inviting testers
The site is in preview mode until the Google Apps Script endpoint is configured. In preview mode, submissions are saved only in the visitor's browser and are NOT sent to you.

### Configure the submission backend (about 10 minutes)
1. Create a blank Google Sheet named `WORKROOM Pilot Submissions`.
2. Copy the spreadsheet ID from its URL (the long value between `/d/` and `/edit`).
3. Open Extensions → Apps Script.
4. Paste `apps_script.gs` into the editor.
5. Replace `PASTE_GOOGLE_SHEET_ID_HERE` with your spreadsheet ID. Save.
6. Deploy → New deployment → select type `Web app`.
7. Set **Execute as: Me** and **Who has access: Anyone**. Deploy and authorize.
8. Copy the deployed Web App URL.
9. In `index.html`, find `const ENDPOINT="";` and paste the URL between the quotes.
10. Re-upload/redeploy the updated `index.html` to your host. Test one submission and verify a new row appears in the Sheet.

If your Google account or organisation blocks public Apps Script deployments, use a Google Form as a fallback and replace the form workflow before sharing.

## Publish the site
### Vercel (quickest)
1. Create a GitHub repository and upload `index.html` to its root.
2. Import the repository in Vercel.
3. Framework preset: Other; build command: leave blank; output directory: `.`.
4. Deploy. The generated `vercel.app` URL is your public product link.

### Netlify Drop (no Git needed)
1. Put `index.html` in a folder.
2. Open https://app.netlify.com/drop and drop the folder.
3. Use the generated public URL.

## Pilot challenge design
Three challenge types:
- Fix a campus friction (solo or team)
- Make the complex clear (team)
- Spot a local opportunity (solo)

The challenges accept non-code outputs: process redesigns, prototypes, explainers, research, service concepts and test plans. This keeps the experience open to non-CS students.

## Measurement definitions
- Invited: a unique person outside the founder's interview group who received the link and a clear invitation.
- Started: opened a challenge brief and began working (self-reported via a check-in or observed).
- Finished: submitted the required deliverables.
- Completion rate: finished ÷ started × 100.
- Do not count page views as starts or invited users as active users.
