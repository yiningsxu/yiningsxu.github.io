---
layout: page
title: 活動記録
permalink: /ja/blogs/
description: 学術活動、国際経験、個人制作、受賞・奨学金の記録です。
lang: ja
ref: blogs
nav: true
nav_order: 3
nav_label: 活動記録
---

## 学術活動

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

## 国際経験

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

## 個人制作

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

## 受賞・奨学金

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
