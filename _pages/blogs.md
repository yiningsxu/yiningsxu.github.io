---
title: Blogs
permalink: /blogs/
---

<style>
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  .post-card {
    border: 1px solid #eee;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    background: #fff;
    transition: transform 0.2s;
  }
  .post-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  .post-thumbnail {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .post-title {
    font-size: 1.0em;
    font-weight: bold;
    margin-bottom: 5px;
    line-height: 1.3;
  }
  .post-title a {
    text-decoration: none;
    color: #333;
  }
  .post-date {
    font-size: 0.85em;
    color: #777;
    display: block;
    margin-top: 5px;
  }
</style>

## Academic Activities

<div class="posts-grid">
  {% for post in site.posts %}
    {% if post.subcategory == 'academic' %}
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
    {% if post.subcategory == 'experience' %}
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
    {% if post.subcategory == 'hobbies' %}
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
    {% if post.subcategory == 'award' %}
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