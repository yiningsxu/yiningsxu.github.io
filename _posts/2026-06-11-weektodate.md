---
layout: post
title: Developed WeekToDate, a static date conversion tool.
date: 2026-06-11
categories: blog
tags: [Web App, LifeHack, Public Health]
thumbnail: /assets/img/Date%20Conversion%20Tool%20en.png
subcategory: hobbies
lang: en
ref: weektodate-post
---

![WeekToDate](/assets/img/Date%20Conversion%20Tool%20en.png){: width="300px"}

### I built "[WeekToDate](https://yiningsxu.github.io/WeekToDate/)" (date conversion tool)

I made a small static HTML tool for converting Japanese reporting week labels, Gregorian dates, infection-season week numbers, and Japanese era date labels.

The tool is designed for quick checks in a browser. It works as a standalone `index.html` file, and the Python script in the repository can also regenerate the page or run one-off conversions from the command line.

### What it does

- Converts **JIHS/IDWR-style reporting weeks** to the Monday date of that week
- Shows the full **Monday-Sunday date range** for each reporting week
- Switches modes to convert **Gregorian dates** back to reporting year, week, and day
- Calculates the **infection season / epidemiological year**, using reporting week 36 as the season start
- Converts **Showa, Heisei, and Reiwa** era dates to Gregorian dates
- Normalizes full-width digits, letters, and symbols
- Provides copy buttons for the main result, date range, and season details
- Runs as a static responsive HTML page with **no external libraries**

### Why I made it

Reporting weeks are convenient in epidemiological surveillance, but they are easy to misread when moving between weekly labels, calendar dates, and infection-season years. I wanted a fast, browser-based tool for checking those conversions without opening a spreadsheet or searching a reference table every time.

### Links

- Live demo: [Use now](https://yiningsxu.github.io/WeekToDate/)
- Source code: [GitHub repository](https://github.com/yiningsxu/WeekToDate)
