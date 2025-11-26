# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal academic website for Nicolas Gorlo, hosted on GitHub Pages at nicolasgorlo.com.

## Development

```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

## Architecture

### Layouts (`_layouts/`)
- `home.html` - Homepage with full SEO meta tags and Schema.org markup
- `default.html` - Base layout for other pages (blog)
- `post.html` - Blog post layout
- `paper.html` - Paper page layout using Bulma CSS framework

### Content
- `index.html` - Homepage content (bio, news, publications, blog link)
- `blog/index.html` - Blog listing page
- `_posts/` - Blog posts as markdown files (YYYY-MM-DD-title.md)
- `LP2_web/` - Paper page for Long-Term Human Trajectory Prediction
- `isar_wacv24/` - Paper page for ISAR benchmark

### Assets (`assets/`)
- `css/styles.css` - Main site styles with CSS custom properties
- `css/paper.css` - Paper page styles (Bulma customizations)
- `css/vendor/` - Shared Bulma CSS framework files
- `js/script.js` - Email obfuscation animation
- `js/paper.js` - Paper page carousel/slider initialization
- `js/vendor/` - Shared Bulma JS (carousel, slider)
- `images/profile/` - Profile image
- `images/papers/` - Publication thumbnail images

### Configuration
- `_config.yml` - Jekyll site config, SEO settings, plugin config
- `Gemfile` - Ruby dependencies (github-pages, jekyll-feed, jekyll-sitemap, jekyll-seo-tag)

## Adding a Blog Post

Create a new file in `_posts/` with format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
description: "Short description for SEO"
---

Post content in markdown...
```

## Deployment

Pushes to `main` branch trigger automatic Jekyll build and deploy via GitHub Pages. The custom domain is configured in the CNAME file.

## SEO

- Jekyll-seo-tag plugin handles meta tags
- Jekyll-sitemap plugin auto-generates sitemap.xml
- Jekyll-feed plugin generates RSS feed
- Paper pages include Schema.org ScholarlyArticle markup
