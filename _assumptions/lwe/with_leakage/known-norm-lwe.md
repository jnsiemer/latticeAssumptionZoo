---
title: "Known-Norm LWE"
seo_title: "Known-Norm LWE"
family: "LWE"
subfamily: "LWE with Leakage"
graph_id: "Known-Norm-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-29
redirect_from:
  - /known_norm_lwe/
  - /knownnormlwe/
---

Known-Norm LWE was introduced by Micciancio and Suhl in 2024 {% cite CiC:MicSuh24 %}. It describes [LWE](/lwe/) with leakage of $$\norm{\vec{s}}^2 + \norm{\vec{e}}^2$$.

## Definition

### Known-Norm LWE$$_{n,m,q,\chi}$$ {#known-norm-lwe}
_Let $$\chi$$ be a distribution over $$\ZZ$$. Sample $$\mat{A} \sample \ZZ_q^{m \times n}$$, $$\vec{s} \sample \chi^n$$, and $$\vec{e} \sample \chi^m$$. An adversary is asked to distinguish between the distribution_

$$ (\mat{A}, \mat{A} \cdot \vec{s} + \vec{e}, \norm{\vec{s}}^2 + \norm{\vec{e}}^2) \text{ and } \left( \mat{A}, \mathcal{U}(\ZZ_q^m), \norm{\vec{s}}^2 + \norm{\vec{e}}^2 \right). $$

## Variants

### Known-Covariance RLWE$$_{\mathcal{R},m,q,\chi}$$ {#known-covariance-rlwe}
_Let $$\mathcal{R}_q = \ZZ[X]/(X^n + 1)$$ be a power-of-two cyclotomic ring. Let $$\chi$$ be a distribution over $$\mathcal{R}$$. Sample $$\vec{a} \sample \mathcal{R}_q^m$$, $$s \sample \chi$$, and $$\vec{e} \sample \chi^m$$. An adversary is asked to distinguish between the distribution_

$$ (\vec{a}, \vec{a} \cdot \vec{s} + \vec{e}, s\bar{s} + \sum_{i=1}^m e_i \bar{e}_i) \text{ and } \left( \vec{a}, \mathcal{U}(\mathcal{R}_q^m), s\bar{s} + \sum_{i=1}^m e_i \bar{e}_i \right). $$

Known-Covariance RLWE {% cite CiC:MicSuh24 %} is a natural generalisation of Known-Norm LWE to rings.

## Hardness

Lemma 9 of {% cite CiC:MicSuh24 %} states that Known-Norm LWE is as hard as [small-secret LWE](/lwe/#small-secret-lwe) up to a polynomial factor in the advantage. This proof does not directly carry over to the ring setting. However, a general result by Boudgoust, Jeudy, Tairi, and Wen {% cite PKC:BJTW26 %} can be applied to account for the leakage of Known-Covariance RLWE. They summarise the explicit application to Known-Covariance RLWE in Appendix A of their paper.

## Constructions built from Known-Norm LWE {#constructions}

- Public-Key Encryption {% cite CiC:MicSuh24 %}
- Threshold Public-Key Encryption {% cite CiC:MicSuh24 %}

## Related Assumptions

- [Yet-Another LWE](/yet-another-lwe/) combines Known-Norm LWE with [Reused-A LWE](/reused-a-lwe/).
