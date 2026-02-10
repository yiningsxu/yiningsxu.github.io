---
title: Blogs
permalink: /blogs/
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date: "%Y/%m/%d" }}
      {% if post.content contains 'img' %}
        <br>
        <i>(Contains image)</i>
      {% endif %}
    </li>
  {% endfor %}
</ul>