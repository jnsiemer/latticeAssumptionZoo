---
title: "Adaptive LWE"
seo_title: "Adaptive LWE"
family: "LWE"
graph_id: "Adaptive-LWE"

last_modified_at: 2026-06-15
redirect_from:
  - /adaptive_lwe/
  - /adaptivelwe/
---

Adaptive LWE was proposed by Quach, Wee, and Wichs in 2018 {% cite FOCS:QuaWeeWic18 %}. Adaptive LWE enables the adversary to define which LWE samples should provide additional structure by adding a gadget matrix to $$\set{\mat{A}_i + x_i \cdot \mat{G}}_{i \in [k]}$$ after seeing $$\set{\mat{A}_i}_{i \in [k]}$$.

## Definition

### Adaptive LWE$$_{n,m',k,q,\chi}$$ {#adaptive-lwe}
_Let $$\chi$$ be a distribution over $$\ZZ$$, $$m = n \ceil{\log q}$$, and $$\adv = (\adv_0,\adv_1)$$ be a two-stage adversary. Sample $$\mat{A}_i \sample \ZZ_q^{n \times m}$$, $$\vec{s} \sample \ZZ_q^n$$, and $$\vec{e}_i\sample \chi^m$$ for $$i \in [k]$$. Further, sample $$\mat{A}_{k+1} \sample \ZZ_q^{n \times m'}$$ and $$\vec{e}_{k+1} \sample \chi^{m'}$$. Given $$(\mat{A}_i)_{i \in [k]}$$, the first stage of the adversary picks $$\vec{x} \in \set{0,1}^k$$. Then, the adversary is asked to distinguish between the distribution_

$$ \left( \set{ \left(\mat{A}_i, \vec{s}^T \cdot \left(\mat{A}_i  + x_i \cdot \mat{G}\right) + \vec{e}_i^T \right)}_{i \in [k]}, \left(\mat{A}_{k+1}, \vec{s}^T \cdot \mat{A}_{k+1} + \vec{e}_{k+1}^T\right) \right) $$

_and the distribution_

$$ \set{\mathcal{U}\left(\ZZ_q^{n \times m}\right) \times \mathcal{U}\left(\ZZ_q^{1 \times m}\right)}_{i \in [k]} \times \mathcal{U}\left(\ZZ_q^{n \times m'}\right) \times \mathcal{U}\left(\ZZ_q^{1 \times m'}\right). $$

## Hardness

Quach et al. {% cite FOCS:QuaWeeWic18 %} note that the hardness of Adaptive LWE would immediately follow from [LWE](/lwe/) if the adversary would be forced to choose $$\vec{x}$$ before seeing $$\set{\mat{A}_i}_{i \in [k]}$$. Alternatively, they argue about the hardness of the assumption by providing a reduction with exponential loss-factor $$2^{k}$$ assuming the subexponential hardness of LWE, where the reduction guesses the choice of $$\vec{x}$$ in advance. Then, they present a more optimistic choice of parameters.

In Section 7 of {% cite STOC:AbrMalRoy25 %}, Abram, Malavolta, and Roy provide an attack on the aforementioned optimistic choice of parameters. They exploit the fact that $$\vec{x}$$ can be chosen after $$\adv$$.

## Constructions built from Adaptive LWE {#constructions}

- Laconic Function Evaluation {% cite FOCS:QuaWeeWic18 %}, which has applications in MPC
- Secret-Sharing for Boolean Formulae {% cite TCC:LiLinLuo22 %}
- Key-Policy and Ciphertext-Policy Attribute-Based Encryption for Boolean Formulae {% cite TCC:LiLinLuo22 %}

## Related Assumptions

- [Decomposed LWE](/decomposed-lwe/) also adds structure to LWE by adding a gadget matrix to $$\mat{A}$$. However, not adaptively.
