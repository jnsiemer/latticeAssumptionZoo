---
title: "H-SIS"
seo_title: "H-SIS"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "H-SIS"

last_modified_at: 2026-05-01
redirect_from:
  - /h-sis/
  - /h_sis/
---

$$\newcommand{\Dist}{\mathsf{Dist}}$$
The H-SIS assumption was introduced by Albrecht, Lai, and Postlethwaite in 2026 {% cite EPRINT:2026/187 %}. The assumption provides a polynomial number of preimages of $$\vec{0}$$ along with the [SIS](/sis/) challenge matrix and asks for a shorter non-zero preimage of $$\vec{0}$$ as a solution. However, there are other versions with different winning conditions.

This assumption crucially relies on the _space-time hardness of SIS_, which describes the assumption that SIS is not solvable in single exponential runtime and polynomial memory. As sieving algorithms require at least $$2^{\Omega(m)}$$ entries in memory to be effective, the H-SIS assumption relies on the assumption that no enumeration algorithm achieves a runtime lower than $$2^{\bigO{m}}$$ -- an assumption previously conjectured by Lombardi and Vaikuntanathan {% cite C:LomVai20 %}.

TODO: Rough idea of primitives built from the assumption so far

## Definition

### H-SIS$$_{n,m,q,\beta,k,\Dist}$$ {#h-sis}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ be chosen uniformly at random and $$\Dist$$ be a distribution mapping $$\mat{A}$$ to $$\Lambda_q^\perp(\mat{A})^k$$. Sample $$k$$ hints $$\set{\vec{u}_i}_{i \leq k}$$ from $$\Dist(\mat{A})$$. Given $$\mat{A}$$ and $$\set{\vec{u}_i}_{i \leq k}$$, an adversary is asked to find a short non-zero vector $$\vec{u}^* \in \ZZ^m$$ s.t._

$$ \mat{A} \cdot \vec{u}^* = \vec{0} \bmod q \land 0 < \norm{\vec{u}^*} \leq \beta. $$

TODO: Briefly elaborate on assumption (intuition, typical choices, implications, ...)

### Conjecture: Space-time hardness of SIS {#space-time-hardness}
_If $$m \in o(n \log n), \beta \in \poly{n}$$, and $$q \geq 8n\sqrt{m}\beta$$ then there is no algorithm solving SIS$$_{n,m,q,\beta}$$ utilising $$\poly{m}$$ memory and runtime $$2^{\bigO{m}}$$._

## Variants

### H-ISIS$$_{n,m,q,\beta,k,\Dist}$$ {#h-isis}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ and vector $$\vec{t} \in \ZZ_q^n$$ be chosen uniformly at random and $$\Dist$$ be a distribution mapping $$\mat{A}$$ to $$\Lambda_q^\perp(\mat{A})^k$$. Sample $$k$$ hints $$\set{\vec{u}_i}_{i \leq k}$$ from $$\Dist(\mat{A})$$. Given $$\mat{A}$$, $$\vec{t}$$, and $$\set{\vec{u}_i}_{i \leq k}$$, an adversary is asked to find a short vector $$\vec{u}^* \in \ZZ^m$$ s.t._

$$ \mat{A} \cdot \vec{u}^* = \vec{t} \bmod q \land \norm{\vec{u}^*} \leq \beta. $$

TODO: Intution for the variant and relations to other variants / directly related assumptions.

### H-SIGS$$_{n,m,q,\beta,k,\Dist}$$ {#h-sigs}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ be chosen uniformly at random and $$\Dist$$ be a distribution mapping $$\mat{A}$$ to $$\Lambda_q^\perp(\mat{A})^k$$. Sample $$k$$ hints $$\set{\vec{u}_i}_{i \leq k}$$ from $$\Dist(\mat{A})$$. Given $$\mat{A}$$ and $$\set{\vec{u}_i}_{i \leq k}$$, an adversary is asked to find a short generating set $$\mat{U}^* \in \ZZ^{m \times n}$$ of $$\Lambda_q^\perp(\mat{A})$$ s.t._

$$ \mat{A} \cdot \mat{U}^* = \mat{0} \bmod q \land \norm{\mat{U}^*} \leq \beta \land \Lambda(\mat{U}^*) = \Lambda_q^\perp(\mat{A}). $$

## Hardness

Any reductions or cryptanalytic results providing confidence in the hardness of this assumption belong in this section. If possible, describe a brief description of the reduction(s) and/or cryptanalysis. Please refer to specific lemmas/theorems/sections in the paper(s) s.t. readers can find them quickly.

Any reductions in this section should be reflected as an edge in the [`graph`](/graph/).

## Constructions built from H-SIS {#constructions}

The H-ISIS assumption suggests that GPV-based signatures such as Falcon are secure without salts {% cite EPRINT:2026/187 %}.

## Related Assumptions

- [One-More-ISIS](/om-isis/) TODO: one sentence about relationship.

## Further Reading Suggestions (Optional)

If there are any specific sections in papers, lecture notes, or well-written websites, which provide more insights on this assumption or immediately related topics, can be listed here, e.g.
- [In case there will be any blog articles written about it etc.](/TODO/){:target="_blank"}
