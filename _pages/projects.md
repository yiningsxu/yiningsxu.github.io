---
layout: page
title: Projects
permalink: /projects/
description: An ongoing collection of projects.
lang: en
ref: projects
nav: true
nav_order: 2
nav_label: Projects
---

<div class="research-projects">
  <h2 id="research-projects-heading">Research Projects</h2>
  <section class="research-primary" aria-labelledby="child-welfare-heading">
    <header class="research-primary__header">
      <p class="research-eyebrow">Primary research area</p>
      <h3 id="child-welfare-heading">Child Welfare</h3>
      <p class="research-primary__intro">Research supporting children’s health and safety</p>
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
    <h3 id="infectious-diseases-heading">Infectious Disease Epidemiology</h3>
    <div class="research-secondary__grid">
      {% for project in infectious_disease_projects %}
        {% include research-project-card.html project=project compact=true %}
      {% endfor %}
    </div>
  </section>
  {% endif %}
</div>

## Personal Projects

<div class="projects-grid">
  {% assign personal_projects = site.projects | where: 'category', 'personal' | where: 'lang', page.lang %}
  {% for project in personal_projects %}
    {% include personal-project-card.html project=project %}
  {% endfor %}
</div>
