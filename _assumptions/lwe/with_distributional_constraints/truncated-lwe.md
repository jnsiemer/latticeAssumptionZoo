---
title: "Truncated LWE"
seo_title: "Truncated LWE"
family: "LWE"
subfamily: "LWE with Distributional Constraints"
graph_id: "Truncated-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-30
redirect_from:
  - /truncated_lwe/
  - /truncatedlwe/
  - /truncated-mlwe/
  - /truncated_mlwe/
  - /truncatedmlwe/
---

Truncated (Module-)LWE was first defined by Boudgoust and Keller in 2025 {% cite PQC:BouKel25 %}. The assumption _truncates_ the lower-order bits of the LWE challenge matrix $$\mat{A}$$ to optimise storage, computation, and bandwidth. They note that Truncated MLWE can be seen as a special case of (Module-)LWE with semiuniform distribution {% cite IET-IFS:JiaZhaWan23 %}.

## Definition

### Truncated LWE$$_{\mathcal{R},n,m,q,\chi_s,\chi_e,c}$$ {#truncated-lwe}
_Let $$\chi_s$$ and $$\chi_e$$ be distributions over $$\mathcal{R}$$. Let $$\mathsf{Trunc}(\cdot, c)$$ denote the operation of deleting the $$c$$ lowest-order bits of each coefficient. Sample $$\bar{\mat{A}} \sample \mathcal{R}_q^{m \times n}$$, $$\vec{s} \sample \chi_s^n$$, $$\vec{e} \sample \chi_e^m$$, and $$\vec{b} \sample \mathcal{R}_q^m$$. Obtain $$\mat{A} \leftarrow \mathsf{Trunc}(\bar{\mat{A}}, c)$$. An adversary is asked to distinguish between the distribution_

$$ (\mat{A}, \mat{A} \vec{s} + \vec{e}) \text{ and } (\mat{A}, \vec{b}). $$

We define module-version of Truncated LWE given in {% cite PQC:BouKel25 %}. If $$c=0$$ then we recover [Module-LWE](/lwe/#module-lwe) and if $$\mathcal{R} = \ZZ$$, we recover [LWE](/lwe/).

## Hardness

Jia et al. {% cite IET-IFS:JiaZhaWan23 %} give a reduction from the module-variant of NTRU to the search variant of Truncated MLWE (with entropic secret).

Boudgoust and Keller {% cite PQC:BouKel25 %} provide reductions from Module-LWE and [Hint-MLWE](/hint-lwe/):
- In Theorem 2, they reduce Search-MLWE to the search version of Truncated MLWE using Rénji divergence. This reduction is vacuous in certain contexts, as the Rényi divergence between truncated and non-truncated matrices is exponentially large in their dimensions.
- In Theorem 3, they reduce Hint-MLWE to Truncated LWE for both, search and decision, variants of the problems.

## Constructions built from Truncated LWE {#constructions}

None explicitly.

## Related Assumptions

- [Hint-LWE](/hint-lwe/)
- [Module-LWE](/lwe/#module-lwe)
- [NTRU](/ntru/)
