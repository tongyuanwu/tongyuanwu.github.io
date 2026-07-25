# Tongyuan Wu — Academic Website

This repository contains the source for [tongyuanwu.github.io](https://tongyuanwu.github.io), built with the open-source [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

## Content map

- Personal profile and biography: `_pages/about.md`
- Research overview: `_pages/research.md`
- Publications: `_bibliography/papers.bib`
- Teaching experience: `_teachings/`
- Profile and research images: `assets/img/`
- Publication PDFs: `assets/pdf/`

The previous Academic Pages implementation remains available in the repository history on the `master` branch.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the site when changes reach `master` or `main` and publishes the generated `_site` directory to the `gh-pages` branch.

## License

The site theme is distributed under the MIT License. Personal text, research figures, publication previews, and PDFs remain the property of their respective authors and publishers.
