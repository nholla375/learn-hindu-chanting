# Learn Hindu Chanting

A small site for students to **hear, read, and learn** traditional Hindu chants in both **Devanagari** and **IAST**.  
Hosted via **GitHub Pages** at <https://nholla375.github.io/learn-hindu-chanting/>.

---

## Folder Guide

| Path | What’s inside |
|------|---------------|
| `/assets/audio/` | MP3 files for each chant |
| `/assets/images/` | Optional images (e.g., deity icons) |
| Root `.md` files | One Markdown page per chant (Durga Sūktam, Mahāmṛtyuñjaya, etc.) |
| `_includes/` and other Jekyll folders | Auto-generated or theme files—no need to edit for new chants |

---

## Adding a New Chant

1. **Record** your chant → save as `my-chant.mp3`.
2. **Copy** `template.md` (or any existing post) → rename to `my-chant.md`.
3. Fill in:
   - Front-matter title / date.
   - Devanagari `<div>` and IAST `<div>`.
   - Optional timestamps in the JavaScript array for line highlighting.
4. Place the audio file in `/assets/audio/` and update the `<audio>` tag path.
5. Commit + push to `main`. GitHub Pages will rebuild in about a minute.

---

## Local Preview (optional)

```bash
# one-time setup
gem install bundler
bundle install    # installs Jekyll

# run site locally
bundle exec jekyll serve
# open http://localhost:4000 in your browser
