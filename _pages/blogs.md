---
layout: page
title: Blogs
permalink: /blogs/
description: Academic activities, experience, hobbies, and awards.
lang: en
ref: blogs
nav: true
nav_order: 3
nav_label: Blogs
---

## Academic Activities

<div class="posts-grid">
  {% for post in site.posts %}
    {% if post.subcategory == 'academic' and post.lang == page.lang %}
      <div class="post-card">
        {% if post.thumbnail %}
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="post-thumbnail">
        {% endif %}
        <div class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </div>
        <span class="post-date">{{ post.date | date: "%Y/%m/%d" }}</span>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Global Experience

<div class="posts-grid">
  {% for post in site.posts %}
    {% if post.subcategory == 'experience' and post.lang == page.lang %}
      <div class="post-card">
        {% if post.thumbnail %}
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="post-thumbnail">
        {% endif %}
        <div class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </div>
        <span class="post-date">{{ post.date | date: "%Y/%m/%d" }}</span>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Personal Hobbies

<div class="posts-grid">
  {% for post in site.posts %}
    {% if post.subcategory == 'hobbies' and post.lang == page.lang %}
      <div class="post-card">
        {% if post.thumbnail %}
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="post-thumbnail">
        {% endif %}
        <div class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </div>
        <span class="post-date">{{ post.date | date: "%Y/%m/%d" }}</span>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Awards/Scholarships

<div class="posts-grid">
  {% for post in site.posts %}
    {% if post.subcategory == 'award' and post.lang == page.lang %}
      <div class="post-card">
        {% if post.thumbnail %}
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="post-thumbnail">
        {% endif %}
        <div class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </div>
        <span class="post-date">{{ post.date | date: "%Y/%m/%d" }}</span>
      </div>
    {% endif %}
  {% endfor %}
</div>
