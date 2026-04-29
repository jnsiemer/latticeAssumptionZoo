---
title: "Approximate SIS"
seo_title: "Approximate SIS"
family: "SIS"
graph_id: "ApproxSIS"
assumption_status: "standard"

last_modified_at: 2026-02-26
redirect_from:
  - /approx-sis/
  - /approx_sis/
  - /approximatesis/
  - /approximate-sis/
  - /approximate_sis/
---

Approximate SIS is an assumption introduced in 2019 by Chen, Genise, and Mukherjee {% cite AC:CheGenMuk19 %}. It relaxes the conditions of [SIS](/sis/) on the target vector by allowing a range of target vectors close to $\vec{0}$.

## Definition

### ApproximateSIS$_{n,m,q,\alpha,\beta}$
_Let matrix $\mat{A} \in \ZZ_q^{n \times m}$ be chosen uniformly at random. An adversary is asked to find a short non-zero vector $\vec{s} \in \ZZ^m$ satisfying_
\\[\mat{A} \cdot \vec{s} = \vec{t} \bmod q \land 0 < \norm{\vec{s}} \leq \beta \land \norm{\vec{t}} \leq \alpha.\\]

Approximate SIS intuitively states that it is hard to find a short preimage of $\mat{A}$ of a ball of target vectors surrounding $\vec{0}$. Therefore, Approximate SIS can be seen as a specific multi-instance of [ISIS](/sis/#inhomogeneous-sis), where the target vectors form a ball around $\vec{0}$.

## Variants

Chen, Genise, and Mukherjee introduce Approximate Inhomogeneous SIS and Approximate Normal Form ISIS in their paper and provide reductions to ISIS {% cite AC:CheGenMuk19 %}. We omit the definitions and reductions as they are combinations of [variants of SIS](/sis/#variants) and reduction techniques described in the linked article.

## Hardness

Approximate SIS is at least as hard as normal form SIS. Any [normal form SIS](/sis/#normal-form-sis) instance $\begin{bmatrix} \mat{I}_n &\bar{\mat{A}} \end{bmatrix}$ provides an approximate SIS instance $\bar{\mat{A}}$. Any solution $(\vec{s}, \vec{t}) \in \ZZ^{m-n} \times \ZZ_q^n$ to the approximate SIS instance is a solution to the normal form SIS instance $(-\vec{t}, \vec{s}) \in \ZZ^m$ of norm at most $\alpha + \beta$.

Chen et al. {% cite AC:CheGenMuk19 %} provide further reductions for the inhomogeneous version and its normal form from standard assumptions such as ISIS as well as [LWE](/lwe/).

## Applications

Approximate SIS was introduced in the context of approximate trapdoors. To reduce the dimensions of the gadget matrix $\mat{G} = \mat{I}_n \oplus \vec{g}^T$ introduced by Micciancio and Peikert in 2012 {% cite EC:MicPei12 %}, the smaller entries of the gadget vector $\vec{g}^T = \begin{bmatrix} 1 &2 &4 &\dots &2^{\ceil{\log q}} \end{bmatrix}$ can be pruned. This removes the possibility to generate a preimage of all exact targets, but still allows preimage sampling for vectors close to the target vector. Thus, almost any construction based on SIS can be adapted using Approximate SIS and using an approximate trapdoor is a common technique to optimise the efficiency of existing constructions.

## Related Assumptions

- [Short Integer Solution](/sis/)
