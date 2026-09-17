# Vattanary Tevy: Robotics Portfolio

Source for **[vattanaryt.github.io/portfolio](https://vattanaryt.github.io/portfolio/)**.

I develop fullstack robotics pipelines. Currently at UW's WEIRD Lab, supervised by
PI Abhishek Gupta, I work on automating carbon fiber layup using bimanual arms,
building the end-to-end system and developing the learning algorithms behind it.

Contact: [vtevy@uw.edu](mailto:vtevy@uw.edu) ·
[LinkedIn](https://www.linkedin.com/in/vattanary-tevy) ·
[Resume (PDF)](resume/Vattanary_Tevy_Resume.pdf)

## Selected work

Each project has a write-up covering the hardware, the sensing, the control, and
the learning, depending on what it touched.

| Project | What it is | Write-up |
| --- | --- | --- |
| **Robot Learning with Bimanual Arms for Carbon Fiber Layup Automation**<br><sub>WEIRD Lab, UW · 2026 – present</sub> | Carbon fiber layup automation with a dexterous bimanual robot. | [Details](https://vattanaryt.github.io/portfolio/projects/weird-lab.html) |
| **Production Robotic Perception Failure Analysis**<br><sub>Amazon Robotics · 2025</sub> | Perception inconsistency metrics to improve ML pipelines and the overall robotic system. | [Details](https://vattanaryt.github.io/portfolio/projects/amazon-robotics.html) |
| **Self-Driving Materials Lab**<br><sub>UW Sun Lab · 2024 – 2025</sub> | Automated a self-driving lab environment for materials discovery. | [Details](https://vattanaryt.github.io/portfolio/projects/sun-lab.html) |
| **First Portable Photoacoustic Ultrasound (PAUS) Clinical Imaging System**<br><sub>uWAMIT with GE HealthCare · 2024 – 2025</sub> | Adapted a GE HealthCare VE95 clinical scanner for portable photoacoustic-ultrasound imaging. | [Details](https://vattanaryt.github.io/portfolio/projects/uwamit.html) |

Earlier mechanical design, mechatronics, and systems engineering work is documented
in [`projects/`](projects/): an automated PV cell test machine (Powerlight), a tunnel
boring machine (Washington Hyperloop), an ultrasonic inspection probe end-effector
(Boeing ARC), plus undergraduate landing gear and anti-sway control projects.

## Publication

R. Shang, P. Lorraine, S. Smith, H. Chan, **V. Tevy**, I. Pelivanov, M. O'Donnell.
"Real-time spectroscopic PAUS imaging integrated on a commercial scanner."
*SPIE Photonics West*, Jan 2025.

---

## Working on this repo

Static site, no build step. Open `index.html` or serve the directory.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory .
```

`--directory` keeps the server pinned to this repo no matter where it is launched
from, and `--bind 127.0.0.1` keeps it off the local network.

### Layout

- `index.html` : the whole homepage. Hero, selected work, publications, earlier work.
- `projects/*.html` : one technical deep-dive per project, linked from the homepage.
- `resume/Vattanary_Tevy_Resume.pdf` : linked from the header, hero, and footer.
- `assets/css/style.css` : single stylesheet. The Google Fonts `@import` must stay on
  line 1, because CSS ignores an `@import` that appears after any rule.
- `assets/js/main.js` : smooth scroll, and pausing off-screen decorative video.

### Homepage project blocks

The homepage stays minimal and the depth lives on the project pages. Each block is:

1. `<h3>` : a short title naming the system, not the org.
2. `.project-block-role` : org, role, dates.
3. `.stack-bar` : five spans in fixed order (Hardware, Sensing, Control, Learning,
   Deployment). Add `class="on"` to the stages the project actually covers.
4. `.project-block-summary` : one or two sentences, readable by a non-specialist.
5. `.project-block-bullets` : **Outcome** only. Everything else belongs on the
   project page.
6. `.project-block-footer` : tags and the `Details →` link.

### Hidden sections

Education, honors, and coursework are commented out in `index.html` rather than
deleted, so they can be restored by removing the comment wrapper. Note that the
coursework block has its own inner comments stripped to keep the wrapper valid,
since HTML comments do not nest.

### Cache busting

The stylesheet and resume links carry a `?v=<timestamp>` query string. **Bump it
whenever `style.css` or the resume PDF changes**, otherwise returning visitors get
a stale cached copy from GitHub Pages:

```sh
V=$(date +%Y%m%d%H%M)
sed -i "s|style\.css?v=[0-9]*|style.css?v=$V|g" index.html projects/*.html
sed -i "s|Vattanary_Tevy_Resume\.pdf?v=[0-9]*|Vattanary_Tevy_Resume.pdf?v=$V|g" index.html projects/*.html
```

### Deploying

GitHub Pages serves from `main`. Merging to `main` and pushing publishes the site.

## License

MIT
