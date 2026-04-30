---
title: "$$k$$-LWE"
seo_title: "k-LWE"
family: "LWE"
subfamily: "LWE with Hints"
graph_id: "k-LWE"
assumption_status: "standard"

last_modified_at: 2026-04-30
redirect_from:
  - /k-lwe/
  - /k_lwe/
---

The $$k$$-LWE assumption was in 2014 by Ling, Phan, Stehlé, and Steinfeld {% cite C:LPSS14 %} as the LWE version of [$$k$$-SIS](/ksis/).
Its utilisation in constructions is currently limited to traitor tracing schemes {% cite C:LPSS14 %}.

## Definition

### $$k$$-LWE$$_{n,m,q,\mat{S},\mat{C},\alpha}$$ {#k-lwe}
_Let $$k\leq m$$, $$\mat{S} \in \RR^{m \times m}$$ invertible, and $$\mat{C}=\begin{bmatrix} \vec{c}_1 &\dots &\vec{c}_k \end{bmatrix} \in \RR^{m \times k}$$. Let matrix $$\mat{A} \in \ZZ_q^{m \times n}$$ and vector $$\vec{u} \in \ZZ_q^n$$ be chosen uniformly at random and hint vectors $$\vec{x}_i \sample D_{\Lambda^{-\vec{u}}(\mat{A}), \mat{S},\vec{c}_i}$$ for $$i \leq k$$. Given $$\mat{A}, \vec{u},$$ and $$(\vec{x}_i)_{i \leq k}$$, an adversary is asked to distinguish between the two distributions_

$$ U\left( \text{im}\left( \begin{bmatrix} \vec{u}^T \\ \mat{A} \end{bmatrix} \right) \right) + D_{\ZZ, \alpha}^{m+1} \text{ and } U\left( \text{span}_{i\leq k}\left( \begin{bmatrix} 1 \\ \vec{x}_i \end{bmatrix}^\bot \right) \right) + D_{\ZZ, \alpha}^{m+1}. $$

The classical [LWE](/lwe/) problem consists in distinguishing the left distribution from uniform (without hint vectors). The introduction of the hint vectors $$\vec{x}_i \in \Lambda^{-\vec{u}}$$ disallows the naive utilisation of the uniform distribution due to the following dependency. Let $$\vec{y} \in \ZZ^{m+1}$$ be a challenge sample from the left distribution, then

$$ \exists \vec{z} \in \ZZ^n: \begin{bmatrix} \vec{u}^T \\ \mat{A} \end{bmatrix} \cdot \vec{z} \approx \vec{y} \Rightarrow \vec{x}_i^T \cdot \vec{y} \approx \vec{x}_i^T \cdot \begin{bmatrix} \vec{u}^T \\ \mat{A} \end{bmatrix} \cdot \vec{z} = \vec{0} \bmod q. $$

In other words, the short values $$\langle \vec{x}_i, \vec{y} \rangle$$ from the left distribution would be easily distinguishable from uniform values. $$k$$-LWE handles this issue by replacing $$U(\ZZ_q^{m+1})$$ by $$U\left( \text{span}_{i\leq k}\left( \begin{bmatrix} 1 \\ \vec{x}_i \end{bmatrix}^\bot \right) \right)$$.

Please find the module version of $$k$$-LWE in Definition 2.22 of {% cite EPRINT:2025/1852 %}.

## Hardness

Ling et al. {% cite C:LPSS14 %} proved that $$k$$-LWE is at least as hard as LWE for $$k \in \bigO{m}$$. This result was extended to the module-version of $$k$$-LWE in Section 7 of {% cite EPRINT:2025/1852 %}.

## Constructions built from $$k$$-LWE {#constructions}

- Bounded-collusion public-key traitor tracing {% cite C:LPSS14 %}

## Related Assumptions

- [k-SIS](/ksis/) can be seen as the dual or rather SIS version of $$k$$-LWE.
