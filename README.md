# Yining S Xu — personal website

Source for [yiningsxu.github.io](https://yiningsxu.github.io/), a bilingual (English / 日本語) academic site built with [Jekyll](https://jekyllrb.com/) on top of the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Where things live

| Content | Location |
| --- | --- |
| Home page (EN / JA) | `_pages/about.md`, `_pages/about_ja.md` (layout: `_layouts/about.html`) |
| Blog posts | `_posts/` — one file per language, paired by `ref` |
| Projects | `_projects/` — `category: research` or `personal` |
| Accepted publications | `_data/accepted_publications.yml` |
| Images | `assets/img/` (post card thumbnails in `assets/img/thumbs/`) |
| PDFs (CV, etc.) | `assets/pdf/` |

### Adding a blog post

1. Create `_posts/YYYY-MM-DD-slug.md` and `_posts/YYYY-MM-DD-slug-ja.md` with the same `ref`, and `lang: en` / `lang: ja`.
2. Set `subcategory` to `academic`, `experience`, `hobbies`, or `award` so it appears in the right section of the Blogs page.
3. Add images as WebP, no larger than about 1600px on the long edge, and a small (≈720px) copy in `assets/img/thumbs/` for the `thumbnail` field.

## License

Content is licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/). The theme code is MIT licensed (see `LICENSE`).
