---
title: "Twin k-M-ISIS"
seo_title: "Twin k-M-ISIS"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "Twin-k-M-ISIS"

last_modified_at: 2026-04-29
redirect_from:
  - /twin-k-m-isis/
  - /twin_k_m_isis/
  - /twin-krisis/
  - /twin_krisis/
  - /twin-k-r-isis/
  - /twin_k_r_isis/
---

Balbás, Catalano, Fiore, and Lai {% cite TCC:BCFL23 %} introduced a twin-version of the [$k$-M-ISIS](/kmisis/) assumption in 2023 to build chainable functional commitments for unbounded depth circuits from it.

## Definition

Please find a definition of [$k$-M-admissible](/kmisis/#k-m-admissible) in the [$k$-M-ISIS](/kmisis/) article. 

### Twin $k$-M-ISIS$\_{n,q,\beta,\beta^{\*},m,N,w,s}$
_Let $q \in \ZZ$ be a prime and $\mathcal{R} = \ZZ[X] / (X^N + 1)$. Let $\vec{u} = \begin{bmatrix} 1 &0 &\dots &0 \end{bmatrix}^t \in \mathcal{R}\_q^n$. Let $\mathcal{G}\_{\mat{A}}, \mathcal{G}\_{\mat{B}} \subset \mathcal{R}(\mathbf{X})$ be a set of $w$-variate Laurent monomial. Let $(\mathcal{G}\_{\mat{A}} \cup \mathcal{G}\_{\mat{B}})$ be $k$-M-admissible. Let $\mat{A} \sample \mathcal{R}\_q^{n \times m}, \mat{B} \sample \mathcal{R}\_q^{n \times m}, \vec{v} \sample (\mathcal{R}\_q^\times)^w$. Compute for all $g\_{\mat{A}} \in \mathcal{G}\_{\mat{A}}$ a short vector $\vec{z}\_{g\_{\mat{A}}} \sample \mat{A}\_s^{-1}\left(g\_{\mat{A}}(\vec{v}) \cdot \vec{u}\right)$ with $\norm{\vec{z}\_{g\_{\mat{A}}}} \leq \beta$. Compute for all $g\_{\mat{B}} \in \mathcal{G}\_{\mat{B}}$ a short vector $\vec{z}\_{g\_{\mat{B}}} \sample \mat{B}\_s^{-1}\left( g\_{\mat{B}}(\vec{v}) \cdot \vec{u} \right)$ with $\norm{\vec{z}\_{g\_{\mat{A}}}} \leq \beta$. Given $\mat{A}, \mat{B}, \vec{v}, \vec{u}, \set{ \vec{z}\_{g\_{\mat{A}}} : {g\_{\mat{A}} \in \mathcal{G}\_{\mat{A}}} }$, and $\set{ \vec{z}\_{g\_{\mat{B}}} : {g\_{\mat{B}} \in \mathcal{G}\_{\mat{B}}} }$, an adversary is asked to find $\left(\vec{z}\_{\mat{A}}, \vec{z}\_{\mat{B}}\right)$ such that the following holds_

$$ \mat{A} \cdot \vec{z}_{\mat{A}} + \mat{B} \cdot \vec{z}_{\mat{B}} = \vec{0} \mod q \land 0 < \norm{\begin{bmatrix} \vec{z}_{\mat{A}} &\vec{z}_{\mat{B}} \end{bmatrix}} \leq \beta^{*}. $$

When $n = 1$, we denote the problem by Twin $k$-R-ISIS.
This definition is a specific version of Twin $k$-M-ISIS, as we specify the ring $\mathcal{R}$ and $\vec{u}^t = \begin{bmatrix} 1 &0 &\dots &0 \end{bmatrix}$.
The original definition can be found in {% cite TCC:BCFL23 %}.

## Hardness

Twin $k$-M-ISIS is at least as hard as solving $2k$-M-ISIS problem according to Theorem A.7 in {% cite EC:AFLN24 %}.
This reduction is based on a re-randomization technique utilising a [NTRU](/ntru/) trapdoor.

## Constructions built from Twin $k$-M-ISIS {#constructions}

- Chainable functional commitments {% cite TCC:BCFL23 %}

## Related Assumptions

- [$k$-M-ISIS](/kmisis/) is the corresponding single version of Twin $k$-M-ISIS.
