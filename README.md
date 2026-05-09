# Toadal Performance Website

## Files in this project

```
index.html       — Homepage (hero, difference, packages teaser, WOTW, challenge, socials)
packages.html    — Full packages, comparison table, in-person zones, mileage calculator, FAQ
coaches.html     — Coach profiles, certifications, team values
resources.html   — RPE/RMR/1RM calculators, exercise library, LI gym finder, glossary
community.html   — Monthly challenge, workout archive, social prompt
apply.html       — Full intake form with all fields
style.css        — Shared styles for all pages
shared.js        — Shared nav, footer, and utility functions
```

---

## How to put this on GitHub Pages (free hosting)

### Step 1 — Create a GitHub account
Go to github.com and sign up (free).

### Step 2 — Create a new repository
- Click the + button > New repository
- Name it anything (e.g. `toadal-site`)
- Set it to **Public**
- Click Create repository

### Step 3 — Upload your files
- Click **uploading an existing file**
- Drag and drop ALL files from this folder (index.html, packages.html, coaches.html, resources.html, community.html, apply.html, style.css, shared.js)
- Click **Commit changes**

### Step 4 — Enable GitHub Pages
- Go to your repository **Settings**
- Click **Pages** in the left sidebar
- Under Source, select **main** branch and **/ (root)** folder
- Click **Save**
- Your site will be live at: `https://yourusername.github.io/toadal-site`

### Step 5 — Connect toadalperformance.com
In GitHub Pages settings (same page), under Custom domain:
- Enter: `toadalperformance.com`
- Click Save

Then in Google Domains (where you registered the domain):
- Go to DNS settings
- Add a CNAME record: Name = `www`, Value = `yourusername.github.io`
- Add 4 A records pointing to GitHub's IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

DNS takes up to 24 hours to propagate. GitHub has a full guide at:
docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## Things to fill in before going live

### Coaches page
- Replace "YOUR NAME HERE" with your real names
- Replace the bio placeholder text with your real bios
- Replace the photo placeholder with real headshots:
  ```html
  <!-- Replace the coach-photo-box contents with: -->
  <img src="images/coach1.jpg" alt="Coach Name" style="width:100%;height:100%;object-fit:cover">
  ```
- Create an `images/` folder in your repo and upload your Aragon AI headshots there

### Apply form — connect to Formspree (free, takes 5 minutes)
1. Go to formspree.io and create a free account
2. Create a new form — copy your Form ID (looks like `xpzgkwqr`)
3. In apply.html, find the `<form>` tag and add:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the `onsubmit="handleApply(event)"` attribute
5. Done — submissions go straight to team@toadalperformance.com

### Social links
Search for `instagram.com/toadalperformance` and `tiktok.com/@toadalperformance` in the files.
Replace with your actual handles once you've set them up.

### Workout of the week
The current workout is in index.html under `<!-- WORKOUT OF THE WEEK -->`.
Update it every Monday by editing the exercise rows directly in the HTML.

### Challenge of the month
Update the challenge details in both index.html and community.html each month.

---

## Color palette (for reference)
- Deep green (backgrounds): #0F2A1A
- Dark green (cards): #1A4A2A
- Mid green (accents): #2A7A4A
- Bright green (toad): #3AAA68
- Gold (primary accent): #C9A84C
- Cream (text on dark): #F5F0E8

---

## Questions?
Email team@toadalperformance.com
