---
title: "Vanishing SIS"
seo_title: "Vanishing SIS"
family: "SIS"
graph_id: "vSIS"

last_modified_at: 2026-05-03
redirect_from:
  - /v-sis/
  - /v_sis/
  - /vanishing-sis/
  - /vanishing_sis/
---

The Vanishing SIS (vSIS) problem was introduced by Cini, Lai, and Malavolta in 2023 {% cite C:CinLaiMal23 %}. It requires the adversary to find a polynomial with short coefficients which vanishes at the given point(s). So far, it has been utilised to construct SNARKs, proof-friendly signatures and homomorphic signatures for low-degree polynomials.

## Definition

### vSIS$$_{\mathcal{R},n,k,q,\beta,\mathcal{F}}$$ {#vsis}
_Let $$\mathcal{F}$$ be a set of $$k$$-variate functions over $$\mathcal{R}$$ and the matrix $$\mat{A} \in \mathcal{R}_q^{n \times k}$$ be sampled uniformly at random. Given $$\mat{A}$$, an adversary is asked to find a short non-zero vector $$\vec{u}^* \in \mathcal{R}^k$$ s.t._

$$ \mathcal{F}(\mat{A}) \cdot \vec{u}^* = \vec{0} \bmod q \land 0 < \norm{\vec{u}^*} \leq \beta. $$

TODO: Potentially roughly outline intuition, motivation for behind it

## Hinted Variants

Let $$s$$ denote a Gaussian parameter, $$\mathcal{F}, \mathcal{G}, \mathcal{H}$$ be $$k$$-variate rational functions over $$\mathcal{R}_q$$ s.t. $$Q \leq \abs{\mathcal{H}}$$, and $$\mathcal{P}$$ is a predicate over sets of $$k$$-variate rational functions.

### Hint-vSIS$$_{\mathcal{R},n,k,q,Q,\beta,s,\mathcal{F},\mathcal{G},\mathcal{H},\mathcal{P}}$$ {#hint-vsis}
_Let adversary $$\adv$$ output $$(\mathcal{Q},g^*)$$ with $$\mathcal{Q} \subseteq_Q \mathcal{H}$$ and $$g^* \in \mathcal{G} \setminus \mathcal{Q}$$ first.Sample matrix $$\mat{A} \in \mathcal{R}_q^{n\times k}$$ uniformly at random and vectors $$\vec{u}_i \sample D_{\Lambda_q^{\vec{v}_i}(\mathcal{F}(\mat{A})),s}$$ for all $$i \in [Q]$$. Set $$\mat{V} = \mathcal{Q}(\mat{A}) \bmod q$$. Given $$\mat{A}$$ and hints $$\set{\vec{u}_i}_{i \in [Q]}$$, an adversary is asked to find a short non-zero vector $$\vec{u}^*$$ s.t._

$$ \mathcal{F}(\mat{A}) \cdot \vec{u}^* = g^*(\mat{A}) \bmod q \land 0 < \norm{\vec{u}^*} \leq \beta \land \mathcal{P}(\mathcal{F} \cup \mathcal{Q} \cup (\set{g^*} \setminus \set{0})) = 1. $$

TODO: Explain relationship to main version, motivation behind it, and reductions specific to this variant

### s-Hint-vSIS$$_{\mathcal{R},n,k,q,Q,\beta,s,\mathcal{F},\mathcal{G},\mathcal{H},\mathcal{P}}$$ {#s-hint-vsis}
_Let adversary $$\adv$$ output $$\mathcal{Q}$$ with $$\mathcal{Q} \subseteq_Q \mathcal{H}$$ first. Sample matrix $$\mat{A} \in \mathcal{R}_q^{n\times k}$$ uniformly at random and vectors $$\vec{u}_i \sample D_{\Lambda_q^{\vec{v}_i}(\mathcal{F}(\mat{A})),s}$$ for all $$i \in [Q]$$. Set $$\mat{V} = \mathcal{Q}(\mat{A}) \bmod q$$. Given $$\mat{A}$$ and hints $$\set{\vec{u}_i}_{i \in [Q]}$$, an adversary is asked to find $$(g^*, \vec{u}^*)$$ with $$g^* \in \mathcal{G} \setminus \mathcal{Q}$$ s.t._

$$ \mathcal{F}(\mat{A}) \cdot \vec{u}^* = g^*(\mat{A}) \bmod q \land 0 < \norm{\vec{u}^*} \leq \beta \land \mathcal{P}(\mathcal{F} \cup \mathcal{Q} \cup (\set{g^*} \setminus \set{0})) = 1. $$

TODO: Explain relationship to main version, motivation behind it, and reductions specific to this variant

### s-$Hint-vSIS$$_{\mathcal{R},n,k,q,Q,\beta,s,\mathcal{F},\mathcal{G},\mathcal{H},\mathcal{P}}$$ {#s-random-hint-vsis}
_The strong random hinted vSIS assumption is identical to the strong hinted vSIS assumption, except that $$\mathcal{Q}$$ is sampled as a uniformly random $$Q$$-subset of $$\mathcal{H}$$, i.e. it is not chosen by $$\adv$$._

TODO: Explain relationship to main version, motivation behind it, and reductions specific to this variant

## Hardness

TODO

Any reductions or cryptanalytic results providing confidence in the hardness of this assumption belong in this section. If possible, describe a brief description of the reduction(s) and/or cryptanalysis. Please refer to specific lemmas/theorems/sections in the paper(s) s.t. readers can find them quickly.

Any reductions in this section should be reflected as an edge in the [`graph`](/graph/).

## Constructions built from vSIS {#constructions}

- Succinct non-interactive argument of knowledge (SNARK) {% cite C:CinLaiMal23 %}
- Proof-friendly signatures {% cite PKC:DKLW25 %}
- Homomorphic Signatures for Low-Degree Polynomials {% cite PKC:JyrLai25 %}

## Related Assumptions

TODO

If there are any immediately related assumptions, list them here (potentially with a brief description of their relationship or key differences), e.g.
- [Randomised One-More-ISIS](/rom-isis/) doubles the length of matrix $$\mathbf{A}$$ and requires the vector multiplied by the second part to be binary (compared to One-More-ISIS).
- [GenISIS$$_f$$](/genisisf/)

## Further Reading Suggestions (Optional)

TODO

If there are any specific sections in papers, lecture notes, or well-written websites, which provide more insights on this assumption or immediately related topics, can be listed here, e.g.
- [Lecture notes](https://people.csail.mit.edu/vinodv/CS294/){:target="_blank"} by Vinod Vaikuntanathan
  - Lecture 3 on _Smoothing Parameter and Worst-case to Average-case Reduction for SIS_
  - Lecture 10 on _Ideal Lattices and Ring Learning with Errors_
