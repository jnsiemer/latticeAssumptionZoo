---
title: "Catalogued Assumptions"
permalink: /catalogue/
layout: catalogue
---

The Lattice Assumption Zoo currently catalogues {{ site.assumptions.size }} assumptions; <span id="variants-count">couting...</span> counting non-trivial variants.<!-- excluding ring-/module-variants or equivalent search/decision versions -->

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
<span class="status-badge status-standard">standard</span> tags mark assumptions that can be reduced to long-standing, open problems and have undergone significant cryptanalytic effort.<br>
<span class="status-badge status-implied">implied</span> tags mark assumptions with a reduction from a standard assumption that does not impose unusually strict conditions on parameter choices.<br>
<span class="status-badge status-broken">broken</span> tags mark assumptions that have been compromised by known attacks.
