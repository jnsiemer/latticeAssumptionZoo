---
title: "$$k$$-SIS"
seo_title: "k-SIS"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "k-SIS"
assumption_status: "implied"

last_modified_at: 2026-02-26
redirect_from:
  - /k-sis/
  - /k_sis/
---

The $$k$$-SIS assumption was introduced in 2011 by Boneh and Freeman {% cite PKC:BonFre11 %}. The assumption hands out $$k$$ hints additionally to the [SIS](/sis/) challenge matrix, removing any linear combination of these hints from the solution space.

## Definition

### $$k$$-SIS$$_{n,m,q,\beta,s,\mathcal{R}}$$ {#k-sis}
_Let matrix $$\mat{A} \in \mathcal{R}_q^{n \times m}$$ be chosen uniformly at random and $$k$$ hint vectors $$\vec{s}_i$$ from $$D_{\Lambda_q^\perp(\mat{A}), s}$$ with $$\norm{\vec{s}_i} \leq \beta$$. Given $$\mat{A}$$ and $$\set{\vec{s}_i}_{i \in [k]}$$, an adversary is asked to find a new short non-zero vector $$\vec{s}^* \in \mathcal{R}^m$$ satisfying_

$$ \mat{A} \cdot \vec{s}^* = \vec{0} \bmod q \land \norm{\vec{s}^*} \leq \beta \land \vec{s}^* \notin \mathcal{K}\text{-span}\left( \set{\vec{s}_i}_{i \in [k]} \right). $$

The provided definition is the module-variant, which was defined by Albrecht et al. {% cite C:ACLMT22 %}. The original version can be recovered by setting $$\mathcal{R} = \ZZ$$ and $$\mathcal{K} = \QQ$$.

Intuitively, $$k$$-SIS asks for a SIS solution that is not a linear combination of the provided hints.
The condition $$\vec{s}^* \notin \mathcal{K}\text{-span}\left( \set{\vec{s}_i}_{i \in [k]} \right)$$ can be dropped when $$k < m^{1/4}$$ as then the probability that there is an additional short vector in the $$k$$-dimensional sublattice spanned by $$\set{\vec{s}_i}_{i \in [k]}$$ is negligible {% cite PKC:BonFre11 %}.

## Hardness

$$k$$-SIS$$_{n,m,q,\beta,s,\ZZ}$$ is at least as hard as SIS$$_{n,m-k,q,\beta',\ZZ}$$. Boneh and Freeman {% cite PKC:BonFre11 %} proved this result for constant $$k \in \bigO{1}$$ and Ling et al. {% cite C:LPSS14 %} improved this result to $$k \in \bigO{m}$$.

The initial proof {% cite PKC:BonFre11 %} relies on the following observation. Let $$\mat{A} \in \ZZ_q^{n \times m}$$, $$\vec{e} \sample D_{\ZZ^{m-1},s}$$, and $$e_m$$ a short $$\ZZ_q$$-invertible entry. Define $$\mat{A}' = \begin{bmatrix} \mat{A} &-\mat{A} \cdot \vec{e} \cdot e_m^{-1} \end{bmatrix}$$ and $$\vec{e}' = (\vec{e}, e_m)$$. Then, $$\mat{A}' \cdot \vec{e}' = \mat{A} \cdot \vec{e} - \mat{A} \cdot \vec{e} \cdot e_m^{-1} \cdot e_m = \vec{0}$$. In this way, the proof embeds a hint for each added column to the challenge matrix. Embedding multiple hints and recovering a SIS solution requires several technical details, which we omit here.

A proof for the module-variant was provided in {% cite EC:AFLLW26 %}.

## Constructions built from $$k$$-SIS {#constructions}

- Linearly homomorphic signatures {% cite PKC:BonFre11 %}
- Standard model $$k$$-time GPV-signature {% cite PKC:BonFre11 %}
- Threshold Preimage Sampleable Function {% cite AC:ALLW25 %}
- Threshold GPV-based Signature {% cite AC:ALLW25 %}

## Related Assumptions

- [k-LWE](/klwe/) can be seen as the dual or rather LWE version of $$k$$-SIS.
