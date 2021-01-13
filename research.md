---
layout: default
title: Research
permalink: /research/
---

{% assign sorted = site.publications | sort: "date" | reverse %}
{%- for pub in sorted -%}
  {:.content-block}
  {{ pub.authors }} ({{ pub.date | date: "%Y" }}
  {%- if pub.in-press -%}, in press {%- endif %}).
  {{ pub.title }}.
  _{{ pub.journal }}_
  {%- if pub.volume -%}, {{ pub.volume }} {%- endif -%}. 
  {% if pub.ref-1-name %} [<a href="{{ pub.ref-1-link }}" target="_blank">{{ pub.ref-1-name }}</a>
    {%- if pub.ref-2-name -%}, <a href="{{ pub.ref-2-link }}" target="_blank">{{ pub.ref-2-name }}</a>
      {%- if pub.ref-3-name -%}, <a href="{{ pub.ref-3-link }}" target="_blank">{{ pub.ref-3-name }}</a>
        {%- if pub.ref-4-name -%}, <a href="{{ pub.ref-4-link }}" target="_blank">{{ pub.ref-4-name }}</a>]
        {%- else -%}
        ]
        {%- endif -%}
      {%- else -%}
      ]
      {%- endif -%}
    {%- else -%}
    ]
    {%- endif -%}
  {% endif %}
  <div class="content-note">
    {{ pub.content }}
  </div>
{% endfor %}
