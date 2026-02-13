---
title: Blogs
permalink: /blogs/
---

<ul>
  {% for post in site.posts %}
    <li>
      {% if post.thumbnail %}
        <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" style="width: 100px; margin-right: 10px; vertical-align: middle;">
      {% endif %}
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date: "%Y/%m/%d" }}
    </li>
  {% endfor %}
</ul>