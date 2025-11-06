---
layout: default
title: Research
permalink: /research/
---

## Preprints

{% assign items = site.publications | where_exp: "pub", "pub.status != 'published'" | sort: "date" | reverse %}
{%- for pub in items -%}
    {% include publication.html pub=pub %}
{% endfor %}

## Publications 

{% assign items = site.publications | where: "status", "published" | where: "archival", true | sort: "date" | reverse %}
{%- for pub in items -%}
    {% include publication.html pub=pub %}
{% endfor %}

## Other Publications

{% assign items = site.publications | where: "status", "published" | where: "archival", false | sort: "date" | reverse %}
{%- for pub in items -%}
    {% include publication.html pub=pub %}
{% endfor %}
