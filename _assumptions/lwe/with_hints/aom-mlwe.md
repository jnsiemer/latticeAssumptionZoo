---
title: "Algebraic One-More-MLWE (AOM-MLWE)"
seo_title: "Algebraic One-More-MLWE"
family: "LWE"
subfamily: "LWE with Hints"
graph_id: "AOM-MLWE"
assumption_status: "implied"

last_modified_at: 2026-06-23
redirect_from:
  - /algebraic-one-more-mlwe/
  - /algebraic_one_more_mlwe/
  - /algebraiconemoremlwe/
  - /algebraic-one-more-lwe/
  - /algebraic_one_more_lwe/
  - /algebraiconemorelwe/
  - /aom-lwe/
  - /aom_lwe/
  - /aomlwe/
  - /aom-mlwe/
  - /aom_mlwe/
  - /aommlwe/
---

Algebraic One-More-MLWE (AOM-MLWE) was introduced in 2024 by Espitau, Katsumata, and Takemure {% cite JC:EspKatTak25 %}. Given [M-LWE](/lwe/#module-lwe) samples (for $$Q$$ secrets) and access to an oracle that on input a vector $$\vec{b} \in \mathcal{R}^Q$$ responds with a linear combination of its secret and error terms, the assumption states that it remains hard to find a short secret and error that the matrix $$\mat{A}$$ maps to a bounded linear combination of the given samples; excluding trivially induced solutions by the queries.

The non-algebraic version One-More MLWE is not known to be hard, however this algebraic variant has been reduced from [Module-SIS](/sis/#module-sis) and [Module-LWE](/lwe/#module-lwe) recently by Zhu, and Tessaro {% cite C:ZhuTes25 %}.

## Definition

### Algebraic One-More-MLWE$$_{n,m,q,\mathcal{R},Q,(\sigma_{i})_{i\in[Q]}, \beta_w,\beta_s,\beta_e,\beta_b}$$ {#aom-mlwe}

_Let $$q$$ be an odd prime, $$\mathcal{R} = \ZZ[X] / (X^N + 1)$$, $$\mathcal{R}_q = \ZZ_q[X] / (X^N + 1)$$ and consider the distributions $$D_{\sigma_i}$$ over $$\mathcal{R}$$. Sample $$\bar{\mat{A}} \sample \mathcal{R}_q^{n \times m-n}$$ and $$[Q]$$ vectors $$\vec{s}_i \sample D_{\sigma_i}^m$$. Define $$\mat{A} := \begin{bmatrix} \bar{\mat{A}} &\mat{I}_n \end{bmatrix} \in \mathcal{R}_q^{n \times m}$$ and $$\vec{t}_i := \mat{A} \cdot \vec{s}_i$$._

_Given $$\mat{A}$$ and $$\set{\vec{t}_i}_{i \in [Q]}$$, the adversary can adaptively query an oracle $$Q-1$$ times with input $$\vec{b}_i \in \mathcal{R}^Q$$, which returns $$\sum_{i \in [Q]} b_i \cdot \vec{s}_i$$. Then, the adversary is asked to output a tuple $$(\hat{\vec{b}}, \hat{\vec{s}_1}, \dots, \hat{\vec{s}_Q})$$ that satisfies the following conditions:_

1. $$\forall i \in [Q]:$$ $$0 < \norm{\hat{b}_i} \leq \beta_b$$ $$\land$$ $$\hat{b}_i \cdot \vec{t}_i = \mat{A} \cdot \hat{\vec{s}}_i$$,
2. _the secret and error terms are short:_ $$ \norm{(\hat{s}_{1,[m-n]}, \dots, \hat{s}_{Q,[m-n]})} \leq \beta_s $$, $$ \norm{(\hat{s}_{1,[(m-n+1)..m]},\dots, \hat{s}_{Q,[(m-n+1)..m]})} \leq \beta_e $$,
3. _parse $$\begin{bmatrix} \vec{b}_1 &\dots &\vec{b}_{Q-1} \end{bmatrix}$$ as $$\begin{bmatrix} \vec{v}^T \\ \mat{D} \end{bmatrix}$$ and check if $$\mat{D} \in \text{GL}(\mathcal{R}_q)$$, and_
4. define $$\vec{w} := \left(\vec{w}^T \cdot \mat{D}^{-1}\right)^T$$, then $$\forall i \in [Q]: \norm{w_i} \leq \beta_w$$.

Note that we follow the (slightly stronger) definition of AOM-MLWE provided in {% cite C:ZhuTes25 %}.

## Variants

### Selective Algebraic One-More-MLWE$$_{n,m,q,\mathcal{R},Q,(\sigma_i)_{i\in[Q]}, \beta_w,\beta_\vec{s},\beta_\vec{e},\beta_b}$$ {#saom-mlwe}

The definition is equivalent to AOM-MLWE except that the adversary chooses the vectors $$\vec{b}_j$$ only given matrix $$\mat{A}$$ (removing knowledge of the M-LWE samples $$\set{\vec{t}_i}_{i \in [Q]}$$).

### Algebraic One-More Uniform-MLWE$$_{n,m,q,\mathcal{R},Q,(\sigma_i)_{i\in[Q]}, \beta_w,\beta_\vec{s},\beta_\vec{e},\beta_b}$$ {#aom-umlwe}

The definition only differs from AOM-MLWE by sampling $$\vec{s}_i$$ uniformly from $$\mathcal{R}^n_q$$. In this setup, there is no need to check the bound $$\beta_s$$. 

## Hardness

In order to gain confidence in the assumption, Espitau, Katsumata, and Takemure {% cite JC:EspKatTak25 %} reduce the hardness of _Selective_ AOM-Uniform MLWE from M-SIS and M-LWE in Section 4.4. This result only holds if secrets and errors are sampled from discrete Gaussian distributions. Further, the authors reduce AOM-Uniform MLWE to AOM-MLWE in their adaptive and selective versions in Section 4.2.2. Overall, they provide an extensive discussion of the assumption in Section 4 of {% cite JC:EspKatTak25 %}, which also includes trivially insecure examples and constraints on parameters.

The hardness of AOM-MLWE was later reduced to its dual assumption, called [Algebraic-One-More-MISIS](/aom-misis/), by Tessaro and Zhu in Lemma 7 of {% cite C:ZhuTes25 %}. They improve the previously conjectured parameters by their reduction from both [M-SIS](/sis/#module-sis) and [M-LWE](/lwe/#module-lwe).

## Constructions built from Algebraic One-More-MLWE {#constructions}

- Threshold signatures {% cite JC:EspKatTak25 %}{% cite C:ZhuTes25 %}{% cite EPRINT:2026/419 %}

## Related Assumptions

- [Algebraic One-More-ISIS](/aom-misis/) defined the dual version of the assumption over the Inhomegeneous SIS.
- [One-More-ISIS](/om-isis/) defined the (non-algebraic) dual version of the assumption over the Inhomegeneous SIS.
- Algebraic One-More Discrete Logarithm {% cite C:NicRufSeu21 %} inspired Algebraic One-More-MLWE.
