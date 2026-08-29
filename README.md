# Vattanary Tevy — Robotics Portfolio

Static site. No build step; open `index.html` or serve the directory.

## Structure

- `index.html` — the whole site: hero and positioning, selected work (plain-language
  snapshots), publications, coursework, earlier work, contact.
- `projects/*.html` — one technical deep-dive per project, linked from the homepage.
- `resume/Vattanary_Tevy_Resume.pdf` — linked from the header and footer.
- `assets/css/style.css` — single stylesheet. The Google Fonts `@import` must stay
  on line 1; CSS ignores `@import` that appears after any rule.
- `assets/js/main.js` — smooth scroll, and pausing off-screen decorative video.

## Editing conventions

Each homepage project block is:

1. `<h3>` — a plain-language title describing the problem, not the org name.
2. `.project-block-role` — org, role, dates.
3. `.stack-bar` — five spans in fixed order (Hardware, Sensing, Control, Learning,
   Deployment). Add `class="on"` to the stages the project actually covers.
4. `.project-block-summary` — the snapshot. Readable by a non-specialist; explains
   what the problem was and why it was hard.
5. `.project-block-bullets` — **My role**, **How it works**, **Outcome**.
6. `.project-block-footer` — tags and the `Technical details →` link.

Technical depth belongs on the project page, not the homepage.

## Archived projects

`design-build-fly.html` and `anti-sway.html` are earlier undergraduate work. They
are linked from the `#earlier-work` section rather than the main project list.

## Local preview

```sh
python3 -m http.server 8000
```

## License

MIT
