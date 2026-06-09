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

## Research Projects

### Child Welfare

<div class="projects-grid">
{% assign child_welfare_projects = site.projects | where: 'category', 'research' | where: 'research_area', 'child_welfare' | where: 'lang', page.lang | reverse %}
{% for project in child_welfare_projects %}

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

{% endfor %}
</div>

### Infectious Diseases

{% assign infectious_disease_projects = site.projects | where: 'category', 'research' | where: 'research_area', 'infectious_diseases' | where: 'lang', page.lang | reverse %}
{% if infectious_disease_projects.size > 0 %}
<div class="projects-grid">
{% for project in infectious_disease_projects %}

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

{% endfor %}
</div>
{% endif %}

## Personal Projects

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
