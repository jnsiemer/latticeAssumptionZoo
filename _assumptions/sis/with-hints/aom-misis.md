---
title: "Algebraic One-More-MISIS (AOM-MISIS)"
seo_title: "Algebraic One-More-MISIS"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "AOM-MISIS"
assumption_status: "implied"

last_modified_at: 2026-06-23
redirect_from:
  - /algebraic-one-more-isis/
  - /algebraic_one_more_isis/
  - /algebraiconemoreisis/
  - /aomisis/
  - /aom-isis/
  - /aom_isis/
  - /aommisis/
  - /aom-misis/
  - /aom_misis/
  - /algebraic-one-more-module-isis/
  - /algebraic_one_more_module_isis/
  - /algebraiconemoremoduleisis/
---

Algebraic One-More Module-ISIS (AOM-MISIS) was introduced in 2025 by Zhu, and Tessaro {% cite C:ZhuTes25 %}, extending the notion of Algebraic One-More Preimage Resistance {% cite EC:TesZhu23 %} for (lattice-based) hash-functions. Given a [normal-form M-SIS](/sis/#normal-form-sis) challenge matrix, $$Q$$ target vectors $$\vec{t}_i := \mat{A} \cdot \vec{s}_i$$, and access to an oracle that on input a vector $$\vec{b} \in \mathcal{R}^Q$$ responds with a linear combination of its secrets $$\sum_{i \in [Q]} b_i \cdot \vec{s}_i$$, the assumption states that it remains hard to find a short preimage for a bounded linear combination of the target vectors, excluding trivial induced solutions.

## Definition

### Algebraic One-More-MISIS$$_{n,m,q,\mathcal{R},Q,(\sigma_i)_{i\in[Q]}, \beta_u,\beta_s,\beta_b}$$ {#aom-misis}

_Let $$q$$ be an odd prime, $$\mathcal{R} = \ZZ[X] / (X^N + 1)$$, $$\mathcal{R}_q = \ZZ_q[X] / (X^N + 1)$$ and consider the distributions $$D_{\sigma_{i}}$$ over $$\mathcal{R}$$. Sample $$\bar{\mat{A}} \sample \mathcal{R}_q^{n \times m-n}$$ and $$[Q]$$ vectors $$\vec{s}_i \sample D_{\sigma_i}^m$$. Define an empty set $$B:=\emptyset$$, a matrix $$\mat{A} := \begin{bmatrix} \bar{\mat{A}} &\mat{I}_n \end{bmatrix} \in \mathcal{R}_q^{n \times m}$$ and vectors $$\vec{t}_i := \mat{A} \cdot \vec{s}_i$$._

_Given $$\mat{A}$$ and $$\set{\vec{t}_i}_{i \in [Q]}$$, the adversary can adaptively query an oracle with input $$\vec{b} \in \mathcal{R}^Q$$, which adds $$\vec{b}$$ to the set $$B$$ and returns $$\sum_{i \in [Q]} b_i \cdot \vec{s}_i$$. Then, the adversary is asked to output a tuple $$(\hat{\vec{s}}, \hat{\vec{b}}, \vec{u})$$ that satisfies the following conditions:_

1. _$$\hat{\vec{s}}$$ is a preimage of a combination of target vectors $$\vec{t}_i$$ under the matrix $$\mat{A}$$, i.e._ $$\sum_{i \in [Q]} \hat{b}_i \cdot \vec{t}_i = \mat{A} \cdot \hat{\vec{s}}$$,
2. _certain vectors have to be short:_ $$\norm{\hat{\vec{s}}} \leq \beta_s$$, $$\norm{(\hat{b}_1 \cdot \sigma_1, \dots, \hat{b}_Q \cdot \sigma_Q)} \leq \beta_b$$, $$ \norm{(u_1/\sigma_1, \dots, u_Q/\sigma_Q)} \leq \beta_u $$_, and_
3. _$$\vec{u}$$ is orthogonal to all previously queried vectors $$\vec{b}$$, i.e. $$\forall \vec{b} \in B: \vec{b}^T \cdot \vec{u} = 0$$._

## Hardness

The hardness of AOM-MISIS was proven in Theorem 1 by Tessaro, and Zhu {% cite C:ZhuTes25 %} and reduced from the hardness of [MSIS](/sis/#module-sis) and [MLWE](/lwe/#module-lwe) for a judicious choice of parameters. Due to the definition, this result only holds for secrets sampled from discrete Gaussian distributions.

## Constructions built from Algebraic One-More-ISIS {#constructions}

- Threshold signatures {% cite AC:ChaTesZhu24 %}{% cite C:EspKatTak24 %}{% cite C:ZhuTes25 %}{% cite EPRINT:2026/419 %}

## Related Assumptions

- [Algebraic One-More-MLWE](/aom-mlwe/) defined the dual version of the assumption over the Module LWE.
- [One-More-ISIS](/om-isis/) defined the (non-algebraic) version of the assumption.
- Algebraic One-More Discrete Logarithm {% cite C:NicRufSeu21 %} inspired Algebraic One-More-MSIS.
