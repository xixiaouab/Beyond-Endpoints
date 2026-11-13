# Beyond Endpoints

Project website for **Beyond Endpoints: Bézier Paths for Vision Foundation Model Adaptation**.

**[Project page](https://xixiaouab.github.io/Beyond-Endpoints/)** · **[Paper PDF](https://xixiaouab.github.io/Beyond-Endpoints/assets/paper.pdf)**

Chenzhi Zheng*, Xi Xiao*†, Chih-Ting Liao, Qizhen Lan, Jingwen Lin, Tianyang Wang, Hao Xu, Xin Cao.

\* Equal contribution. † Corresponding author: xxiao@uab.edu.

This repository contains the static project website and paper assets. It does not contain the research implementation.

## Local preview

No build or dependencies are required:

```sh
python3 -m http.server 8765
```

Open `http://localhost:8765`. GitHub Pages serves the root of the `main` branch. The `.nojekyll` file preserves the static files as authored.

## Content

- `index.html`: paper introduction, author affiliations, findings, citation.
- `style.css`: responsive pink visual theme.
- `script.js`: Shallow/Deep results, accessible figure enlargement, BibTeX copy.
- `assets/`: figures rendered from the paper and the current paper PDF.

All reported results are taken from the paper. The analytic geometry is an exactly solvable attention model; the ViT experiments do not establish a certified guarantee between sampled path nodes.
