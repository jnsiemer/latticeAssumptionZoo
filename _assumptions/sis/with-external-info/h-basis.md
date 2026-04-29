---
title: "$h$-BASIS"
seo_title: "h-BASIS"
family: "SIS"
subfamily: "SIS with External Information"
graph_id: "h-BASIS"

last_modified_at: 2026-04-29
redirect_from:
  - /h-basis-augmented-sis/
  - /h_basis_augmented_sis/
  - /hbasis/
---

In 2023, Albrecht, Fenzi, Lapiha, and Nguyen {% cite EC:AFLN24 %} introduced a multi-instance of [Basis-Augmented SIS (BASIS)](/basis/), called $h$-BASIS, to make partial reductions of BASIS assumptions more viable for applications.
They utilise $h$-BASIS to build a succinct non-interactive extractable polynomial commitment scheme.

## Definition

### $h$-BASIS$_{n, q, \beta, m, n', m', \ell, s, \mathsf{Samp}}$
_Let $\text{Samp}$ be an efficient sampling algorithm that takes a matrix $\mat{A} \in \ZZ_q^{n \times m}$ as input and outputs a matrix $\mat{B} \in \ZZ_q^{n' \times m'}$ with auxiliary information $\text{aux}$. For all $i \in [h]$, choose a matrix $\mat{A}_i \in \ZZ_q^{n \times m}$ uniform at random and run $(\mat{B}_i, \text{aux}_i) \gets \text{Samp}(\mat{A}_i)$. Compute a trapdoor $\mat{T}_i \sample \mat{B}_i^{-1}(\mat{G}\_{n'})$ for the matrix $\mat{B}\_i$. Given $\mat{A}\_i, \mat{B}\_i, \mat{T}\_i,$ and $\text{aux}\_i$ for all $i \in [h]$, an adversary is asked to find a vector $\vec{z} \in \ZZ^{hm}$ s.t._

$$ \begin{bmatrix} \mat{A}_1 &\dots &\mat{A}_h \end{bmatrix} \cdot \vec{z} = \vec{0} \land 0 < \norm{\vec{z}} \leq \beta. $$

Intuitively, the $h$-BASIS assumption follows the BASIS assumption, which states that it is hard to solve [SIS](/sis/) for $\mat{A}$, given a trapdoor for a matrix $\mat{B}\_i$ related to $\mat{A}\_i$. In the case of $h$-BASIS, it's this intuition applies to $h$ instances simultaneously.
In the same manner, it is easy to break the assumption if $\mat{B}\_i$ contains too much information about $\mat{A}\_i$, i.e. the hardness of $h$-BASIS crucially relies on the choice of the sampling algorithm $\text{Samp}$.

## Variants
Only one concrete instantiations of the sampling algorithm $\mathsf{Samp}$ is considered in literature so far.

### $h$-PRISIS
_The sampling algorithm $\mathsf{Samp}(\mat{A})$ samples a vector $\vec{a} \sample \RR_q^m$ and an invertible polynomial $w \sample \RR_q^{\times}$. Set $\mat{A^{\*}}^T = \begin{bmatrix} \vec{a} & \mat{A}^T \end{bmatrix}$ and output_

$$ \mat{B} = \left[ \begin{array}{ccc|c}
	w^0 \mat{A^*}	&	&	&-\mat{G}_{n} \\
	&\ddots		&	&\vdots \\
	&	&w^{\ell -1}\mat{A^*}	&-\mat{G}_{n}
\end{array} \right] \text{ and } \text{aux} = w. $$

In Theorem 5.10 of {% cite EC:AFLN24 %}, the $h$-PRISIS assumption is utilised to prove the binding property of a polynomial commitment scheme with $\ell = 2$.

## Hardness
For $h$-PRISIS, the authors of {% cite EC:AFLN24 %} reduce [M-SIS](/sis/#module-sis) to $h$-PRISIS for $\ell=2$ in their Theorem 3.3.
Furthermore, they provide a reduction from a single instance [PRISIS](/basis/#BASIS_power) to $h$-PRISIS for constant $\ell \in \bigO{1}$ in Theorem 3.5 of {% cite EC:AFLN24 %}.

## Constructions built from BASIS {#constructions}
- Succinct polynomial commitment {% cite EC:AFLN24 %}

## Related Assumptions
- [BASIS](/basis/) is the foundation and single instance version of $h$-BASIS.
