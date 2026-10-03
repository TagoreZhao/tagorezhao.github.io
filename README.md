# Songlin Zhao's Academic Website

This repository contains the source for [Songlin Zhao's personal academic website](https://tagorezhao.github.io/). It presents my research, publications, software projects, and academic background as a Ph.D. student in Statistics at the University of Illinois Urbana-Champaign.

The site is built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## Acknowledgments and attribution

This website is adapted from [Academic Pages](https://github.com/academicpages/academicpages.github.io), a GitHub Pages template for academic websites. Academic Pages was created by [Stuart Geiger](https://github.com/staeiou) as a fork of the [Minimal Mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes) by [Michael Rose](https://github.com/mmistakes), and is maintained by [Robert Zupko](https://github.com/rjzupkoii) and the Academic Pages contributors.

The content, publication displays, navigation, and styling have been customized for my personal academic website. Thanks to the Academic Pages and Minimal Mistakes contributors for the foundation.

The original theme's MIT license and copyright notice are preserved in [LICENSE](LICENSE). Upstream template documentation is available at [academicpages.github.io](https://academicpages.github.io/).

## Updating the site

- `_config.yml`: site settings, profile information, and publication categories.
- `_pages/`: homepage, Publications, Teaching, Software, and CV pages.
- `_publications/`: paper metadata, abstracts, and links. Publications and Recent Works share these records and the `_includes/publication-entry.html` template.
- `_includes/` and `_layouts/`: shared page components and layouts.
- `_sass/` and `assets/`: styling, scripts, and other site assets.
- `images/` and `files/`: images and downloadable files.

Pushing changes to the `master` branch triggers the GitHub Pages build and deployment. Check the repository's [Actions page](https://github.com/TagoreZhao/tagorezhao.github.io/actions) for deployment status.

## Local preview

With Ruby, Bundler, and Node.js installed, run these commands from the repository root:

```bash
bundle install
bundle exec jekyll serve --livereload --host 127.0.0.1
```

Open <http://127.0.0.1:4000>. Restart the server after changing `_config.yml`.

Alternatively, use the included Dockerfile:

```bash
docker build -t songlin-academic-site .
docker run --rm -p 4000:4000 -v "$(pwd):/usr/src/app" songlin-academic-site
```

Open <http://localhost:4000> to preview the site.
