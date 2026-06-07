---
layout: post
title: Developed My Library, a mobile-first bookshelf manager.
date: 2026-05-11
categories: blog
tags: [Web App, Books]
thumbnail: /assets/img/2026-05-11_my_library.png
subcategory: hobbies
lang: en
ref: my-library-web-post
---

![My Library](/assets/img/2026-05-11_my_library.png){: width="300px"}

### I built "[My Library](https://yiningsxu.github.io/my_library_web/bookmanager.html)" (mobile-first bookshelf manager)

I made a compact web app for managing a personal book collection from the browser. It can add books by scanning a barcode or searching an ISBN manually, then fetch metadata from public book APIs.

The app is designed as a no-build, single-file client-side tool, so it can be deployed easily and used from a smartphone.

### What it does

- **Barcode scanning** and **manual ISBN lookup**
- Book metadata lookup through **openBD**, **Google Books**, and **Open Library**
- Reading status, notes, prices, cover images, and entry dates
- Cover photo upload with client-side image compression
- **CSV export/import** for backup and spreadsheet management
- **Multi-language UI** (English / Japanese / Chinese)
- Optional **Firebase Authentication + Firestore** synchronization
- Local-only fallback with browser `localStorage`

### Why I made it

I wanted a lightweight way to keep track of books without installing a dedicated app or setting up a complex database. The focus is on quick registration, simple reading notes, and keeping the data portable through CSV backup.

### Links

- Live demo: [Use now](https://yiningsxu.github.io/my_library_web/bookmanager.html)
- Source code: [GitHub repository](https://github.com/yiningsxu/my_library_web)
