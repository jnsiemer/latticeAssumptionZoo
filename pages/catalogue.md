---
title: "Catalogued Assumptions"
permalink: /catalogue/
---

<style>
  .page__content h3 {
    margin-top: 0.5em !important;
  }

  .status-badge {
    display: inline-block;
    font-size: 0.45em;
    vertical-align: middle;
    padding: 0.2em 0.6em;
    margin-left: 0.7em;
    margin-bottom: 0.3em;
    border-radius: 0.25rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff !important;
    text-decoration: none !important;
    position: relative; 
    cursor: pointer;
  }
  .status-broken { background-color: #d9534f; }
  .status-standard { background-color: #5cb85c; }
</style>

The Lattice Assumption Zoo currently catalogues {{ site.assumptions.size }} assumptions; <span id="variants-count">couting...</span> counting variants.<!-- excluding ring-/module-variants or equivalent search/decision versions -->

<script
  type="text/javascript"
  src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"
></script>
<script type="text/javascript" src="/../graph/data.js"></script>
<script>
  const nodes = new vis.DataSet(assumptions);
  // define variants as nodes that are visible (to exclude invisible nodes to group assumption families)
  let variants = nodes.get({
    filter: function (node) {
      return node.hidden !== true;
    }
  });

  let variantsCount = variants.length;
  document.getElementById('variants-count').innerText = variantsCount;
</script>

### Tags Explained
<span class="status-badge status-standard">standard</span> tags mark standard assumptions and assumptions with a known reduction from a standard assumption that does not impose unusually strict conditions on the parameters.<br>
<span class="status-badge status-broken">broken</span> tags mark assumptions that have been compromised by known attacks.

### List of Catalogued Assumptions

{% assign grouped_by_family = site.assumptions | group_by: "family" %}

<ul>
{% for family in grouped_by_family %}
<li>{{ family.name }}-based Assumptions</li>

{% assign grouped_by_subfamily = family.items | group_by: "subfamily" %}
<ul>
{% for subfamily in grouped_by_subfamily %}
{% if subfamily.name == "" or subfamily.name == nil %}
  {% for assumption in subfamily.items %}
  <li>
    <a href="{{ assumption.url }}">{{ assumption.title }}
      {% if assumption.assumption_status %}
      <span class="status-badge status-{{ assumption.assumption_status | downcase }}">
        {{ assumption.assumption_status }}
      </span>
      {% endif %}
    </a>
  </li>
  {% endfor %}
{% else %}
<li>{{ subfamily.name }}</li>
  <ul>
  {% for assumption in subfamily.items %}
  <li>
    <a href="{{ assumption.url }}">{{ assumption.title }}
    {% if assumption.assumption_status %}
      <span class="status-badge status-{{ assumption.assumption_status | downcase }}">
        {{ assumption.assumption_status }}
      </span>
      {% endif %}
    </a>
  </li>
  {% endfor %}
{% endif %}
{% endfor %}
</ul>

{% endfor %}
</ul>