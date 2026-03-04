## Description of Changes



## Type of Contribution
- [ ] 🐣 **Adding a New Assumption**
- [ ] ⚠️ **Documentation of Major Cryptanalytic Break**
- [ ] ✏️ **Making a Revision** (Editorial changes, parameter updates, new intuitions, partial breaks, or counterexamples)

---

## Contribution Checklist

### Universal Requirements (All PRs)
- [ ] I have added new literature.
  - [ ] I have verified that any new papers cited are added to `_bibliography/references.bib` following the [Managing Citations guide](../CONTRIBUTING.md#-important-managing-citations).

- [ ] I have edited a `Hardness` or `Constructions` section.
  - [ ] All changes made are reflected in the current version of the graph.
- [ ] I have [hosted the site locally](../README.md#hosting-locally) and verified that my changes are formatted in the intended way.

### 🐣 For New Assumptions & Major Revisions
- [ ] The assumption markdown file contains accurate metadata.
- [ ] I have added/updated the node in `graph/data.js` (matching the `graph_id`).
- [ ] I have added/updated the relevant reductions or generalisations in `graph/data.js`.
- [ ] I have ensured the `primitives` array in the graph data accurately reflects known constructions.
- [ ] I have drafted a news post.

### ⚠️ For Major Cryptanalytic Breaks
- [ ] I have updated the `assumption_status` to `"broken"` in the metadata.
- [ ] I have clearly cited the breaking paper and specific lemma/section in the Hardness section.
- [ ] I have updated `graph/data.js` if this break invalidates previous reductions.
- [ ] I have drafted a news post.
