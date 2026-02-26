---
title: "Catalogue"
permalink: /catalogue/
---

{% assign grouped_by_family = site.assumptions | group_by: "family" %}

<ul>
{% for family in grouped_by_family %}
<li>{{ family.name }}-based Assumptions</li>

{% assign grouped_by_subfamily = family.items | group_by: "subfamily" %}
<ul>
{% for subfamily in grouped_by_subfamily %}
{% if subfamily.name == "" or subfamily.name == nil %}
  {% for assumption in subfamily.items %}
  <li><a href="{{ assumption.url }}">{{ assumption.title }}</a></li>
  {% endfor %}
{% else %}
<li>{{ subfamily.name }}</li>
  <ul>
  {% for assumption in subfamily.items %}
  <li><a href="{{ assumption.url }}">{{ assumption.title }}</a></li>
  {% endfor %}
{% endif %}
{% endfor %}
</ul>

{% endfor %}
</ul>

<hr>
<p style="text-align: center;">
  <a href="/" class="btn btn--primary">Back to Home</a>
</p>