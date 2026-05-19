---
title: "H-ISIS"
seo_title: "H-ISIS"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "H-ISIS"

last_modified_at: 2026-05-15
redirect_from:
  - /h-isis/
  - /h_isis/
---

$$\newcommand{\Dist}{\mathsf{Dist}}$$
The H-ISIS assumption was introduced by Albrecht, Lai and Postlethwaite in 2026 {% cite EPRINT:2026/187 %}. The assumption provides a polynomial number of preimages of $$\vec{0}$$ along with an [ISIS](/isis/) challenge matrix and asks for a preimage of a random target.

There is a reduction from the _space-time hardness of SIS_: the assumption that SIS is not solvable in $$2^{\bigO{m}}$ time and polynomial memory. If further $m \in o(n \log n)$ then this conjecture is implied by the conjectured space-time hardness of worst-case lattice problems, previously considered in the literature and explicitly conjectured by Lombardi and Vaikuntanathan {% cite C:LomVai20 %}.

TODO: Rough idea of primitives built from the assumption so far

## Definition

### H-ISIS$$_{n,m,q,\beta,k,\Dist}$$ {#h-isis}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ and vector $$\vec{t} \in \ZZ_q^n$$ be chosen uniformly at random and $$\Dist$$ be a distribution mapping $$\mat{A}$$ to $$\Lambda_q^\perp(\mat{A})^k$$. Sample $$k$$ hints $$\set{\vec{u}_i}_{i \leq k}$$ from $$\Dist(\mat{A})$$. Given $$\mat{A}$$, $$\vec{t}$$, and $$\set{\vec{u}_i}_{i \leq k}$$, an adversary is asked to find a short vector $$\vec{u}^* \in \ZZ^m$$ s.t._

$$ \mat{A} \cdot \vec{u}^* = \vec{t} \bmod q \land \norm{\vec{u}^*} \leq \beta. $$

### Conjecture: Space-time hardness of SIS {#space-time-hardness}
_If $$m \in o(n \log n), \beta \in \poly{n}$$, and $$q \geq 8n\sqrt{m}\beta$$ then there is no algorithm solving SIS$$_{n,m,q,\beta}$$ using only $$\poly{m}$$ memory with runtime $$2^{\bigO{m}}$$._

## Variants

### H-SIGS$$_{n,m,q,\beta,k,\Dist}$$ {#h-sigs}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ be chosen uniformly at random and $$\Dist$$ be a distribution mapping $$\mat{A}$$ to $$\Lambda_q^\perp(\mat{A})^k$$. Sample $$k$$ hints $$\set{\vec{u}_i}_{i \leq k}$$ from $$\Dist(\mat{A})$$. Given $$\mat{A}$$ and $$\set{\vec{u}_i}_{i \leq k}$$, an adversary is asked to find a short generating set $$\mat{U}^* \in \ZZ^{m \times n}$$ of $$\Lambda_q^\perp(\mat{A})$$ s.t._

$$ \mat{A} \cdot \mat{U}^* = \mat{0} \bmod q \land \norm{\mat{U}^*} \leq \beta \land \Lambda(\mat{U}^*) = \Lambda_q^\perp(\mat{A}). $$

### H-SIS$$_{n,m,q,\beta,k,\Dist}$$ {#h-sis}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ be chosen uniformly at random and $$\Dist$$ be a distribution mapping $$\mat{A}$$ to $$\Lambda_q^\perp(\mat{A})^k$$. Sample $$k$$ hints $$\set{\vec{u}_i}_{i \leq k}$$ from $$\Dist(\mat{A})$$. Given $$\mat{A}$$ and $$\set{\vec{u}_i}_{i \leq k}$$, an adversary is asked to find a short non-zero vector $$\vec{u}^* \in \ZZ^m$$ s.t._

$$ \mat{A} \cdot \vec{u}^* = \vec{0} \bmod q \land 0 < \norm{\vec{u}^*} \leq \beta. $$

## Hardness

In all cases, the hardness of the problems above depends critically on the relation of the norm bound $$\beta$$ and the norm of the hints. If the ration of these two quantities is $O(1)$ and if $m = O(n)$ then there is a reduction for some $$\beta$$ from the space-time hardness of approximate SVP to H-ISIS. Each of these conditions can be relaxed slightly conditioned on the overall cost staying below $$2^{o(n \log n)}$$, since for $$2^{\Theta(n \log n)}$$ algorithms are known in polynomial memory (enumeration).

For the H-SIS and H-SIGS variant, the problem is considered hard if $$\beta$$ is smaller than the norms of the hints. This can be formally established for some parameters if the H-SIS or H-SIGS solutions are well-distributed, e.g. Gaussian. When $$\beta$$ is larger than the norms of the hints, the H-SIS problem is still non-trivial provided the H-SIS solver is entropic: calling it many times will produce many different outputs.

Any reductions or cryptanalytic results providing confidence in the hardness of this assumption belong in this section. If possible, describe a brief description of the reduction(s) and/or cryptanalysis. Please refer to specific lemmas/theorems/sections in the paper(s) s.t. readers can find them quickly.

The reduction from worst-case approximate SVP first reduces to SIS. Then, a H-ISIS solver is turned into an entropic H-SIS solver with $$\beta$$ bigger than the norm of the hints in polynomial time. As a next step, the reduction turns such an entropic solver into another H-SI(G)S solver for $\beta$ smaller than the norms of the hints. Recursively feeding the outputs of this algorithm to an H-ISIS solver that expects hints with smaller norms but outputs solutions for a smaller $$\beta$$ then allows to solve SIS with tight norm bounds.

Any reductions in this section should be reflected as an edge in the [`graph`](/graph/).

## Constructions built from H-ISIS {#constructions}

## Related Assumptions

- [One-More-ISIS](/om-isis/) TODO: one sentence about relationship.

## Further Reading Suggestions (Optional)

If there are any specific sections in papers, lecture notes, or well-written websites, which provide more insights on this assumption or immediately related topics, can be listed here, e.g.
- [In case there will be any blog articles written about it etc.](/TODO/){:target="_blank"}
