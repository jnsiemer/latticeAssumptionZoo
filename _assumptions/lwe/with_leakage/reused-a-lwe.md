---
title: "Reused-A LWE"
seo_title: "Reused-A LWE"
family: "LWE"
subfamily: "LWE with Leakage"
graph_id: "Reused-A-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-29
redirect_from:
  - /reused_a_lwe/
  - /reusedalwe/
---

Reused-$$\mat{A}$$ LWE was introduced by Micciancio and Suhl in 2024 {% cite CiC:MicSuh24 %}. This LWE-based assumption essentially provides two LWE samples for the same matrix $$\mat{A}$$, i.e. a Reused-A LWE sample is defined by $$(\mat{A}, \mat{A} \vec{s} + \vec{e}_1, \mat{A} \vec{s} + \vec{e}_2)$$.

## Definition

### Reused-$$\mat{A}$$ LWE$$_{n,m,q,\sigma_1,\sigma_2}$$ {#reused-a-lwe}
_Let $$\chi$$ be a distribution over $$\ZZ$$. Sample $$\mat{A} \sample \ZZ_q^{m \times n}$$, $$\vec{s} \sample \ZZ_q^n$$, $$\vec{e}_1 \sample \mathcal{N}_{\sigma_1}^m$$, $$\vec{e}_2 \sample \mathcal{N}_{\sigma_2}^m$$, $$\vec{b}' \sample \ZZ_q^m$$, and $$\vec{c} \sample \mathcal{N}_\sqrt{\sigma_1^2 + \sigma_2^2}^m$$. An adversary is asked to distinguish between the distribution_

$$ (\mat{A}, \mat{A} \cdot \vec{s} + \vec{e}_1, \mat{A} \cdot \vec{s} + \vec{e}_2) \text{ and } \left( \mat{A}, \vec{b}', \vec{b}' + \vec{c} \right). $$

Note that the definition given in {% cite CiC:MicSuh24 %} uses a continuous Gaussian error term. Considering Reused-A LWE a special case of [Hint-LWE](/hint-lwe/), there are (hard) variants using a discrete Gaussian error term.

## Hardness

Lemma 8 of {% cite CiC:MicSuh24 %} states that Reused-A LWE is at least as hard as LWE with Gaussian noise of width $$1/\sqrt{\sigma_1^2 + \sigma_2^2}$$. However, they also state that their result is not new and that more general version (adjacent to Hint-LWE) prove the same result for more general versions (with discrete Gaussian error).

Further, they provide a conrete attack for Reused-A LWE where the error is chosen uniformly random in a small interval centered around zero.

## Constructions built from Reused-$$\mat{A}$$ LWE {#constructions}

- Public-Key Encryption {% cite CiC:MicSuh24 %}
- Threshold Public-Key Encryption {% cite CiC:MicSuh24 %}

## Related Assumptions

- [Hint LWE](/hint-lwe/) generalises the Reused-A LWE assumption.
