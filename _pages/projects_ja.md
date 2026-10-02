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

<div class="research-projects">
  <h2 id="research-projects-heading">研究プロジェクト</h2>
  <section class="research-primary" aria-labelledby="child-welfare-heading">
    <header class="research-primary__header">
      <p class="research-eyebrow">主な研究領域</p>
      <h3 id="child-welfare-heading">子どもの福祉</h3>
      <p class="research-primary__intro">子どもの健康と安全を支える研究</p>
    </header>
    <div class="research-grid">
      {% assign child_welfare_projects = site.projects | where: 'category', 'research' | where: 'research_area', 'child_welfare' | where: 'lang', page.lang | reverse %}
      {% for project in child_welfare_projects %}
        {% include research-project-card.html project=project %}
      {% endfor %}
    </div>
  </section>

  {% assign infectious_disease_projects = site.projects | where: 'category', 'research' | where: 'research_area', 'infectious_diseases' | where: 'lang', page.lang | sort: 'path' %}
  {% if infectious_disease_projects.size > 0 %}
  <section class="research-secondary" aria-labelledby="infectious-diseases-heading">
    <h3 id="infectious-diseases-heading">感染症の疫学研究</h3>
    <div class="research-secondary__grid">
      {% for project in infectious_disease_projects %}
        {% include research-project-card.html project=project compact=true %}
      {% endfor %}
    </div>
  </section>
  {% endif %}
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
