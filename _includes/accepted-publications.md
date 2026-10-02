{% for publication in site.data.accepted_publications %}
{{ forloop.index }}. {% if page.lang == 'ja' %}（{{ publication.role.ja }}）{% else %}({{ publication.role.en }}) {% endif %}{{ publication.authors }} ({{ publication.year }}). **{{ publication.title }}** *{{ publication.journal }}*, {{ publication.details }}. [{{ publication.doi }}]({{ publication.doi }})
{% endfor %}
