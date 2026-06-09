---
layout: page
title: プロジェクト
permalink: /ja/projects/
description: 研究および個人プロジェクトの一覧です。
lang: ja
ref: projects
nav: true
nav_order: 2
nav_label: プロジェクト
---

## 研究プロジェクト

<div class="projects-grid">
{% for project in site.projects %}
{% if project.category == 'research' and project.lang == page.lang %}

{% if project.redirect %}
<div class="project">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank" rel="noopener noreferrer">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | relative_url }}" alt="{{ project.title }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}
<div class="project ">
    <div class="thumbnail">
        <a href="{{ project.url | relative_url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | relative_url }}" alt="{{ project.title }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% endif %}

{% endif %}
{% endfor %}
</div>

## 個人プロジェクト

<div class="projects-grid">
{% for project in site.projects %}
{% if project.category == 'personal' and project.lang == page.lang %}

{% if project.redirect %}
<div class="project">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank" rel="noopener noreferrer">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | relative_url }}" alt="{{ project.title }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}
<div class="project ">
    <div class="thumbnail">
        <a href="{{ project.url | relative_url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | relative_url }}" alt="{{ project.title }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% endif %}

{% endif %}
{% endfor %}
</div>
