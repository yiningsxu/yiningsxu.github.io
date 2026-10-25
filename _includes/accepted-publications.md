
{% assign pubs = site.data.accepted_publications %}{% if include.category %}{% assign pubs = pubs | where: "category", include.category %}{% endif %}
{% for publication in pubs %}
{{ forloop.index }}. {% if page.lang == 'ja' %}（{{ publication.role.ja }}）{% else %}({{ publication.role.en }}) {% endif %}{{ publication.authors }} ({{ publication.year }}). **{{ publication.title }}** *{{ publication.journal }}*, {{ publication.details }}.{% if publication.doi %} [{{ publication.doi }}]({{ publication.doi }}){% endif %}
{% endfor %}
