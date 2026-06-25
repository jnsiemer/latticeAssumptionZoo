---
title: "Continuous LWE"
seo_title: "Continuous LWE"
family: "LWE"
graph_id: "Continuous-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-25
redirect_from:
  - /continuous_lwe/
  - /continuouslwe/
---

Continuous LWE (CLWE) was introduced as the continuous analogue of [LWE](/lwe/) in 2021 by Bruna, Regev, Song, and Tang {% cite STOC:B0ST21 %}. The problem samples $$\mat{A}$$ from a normal distribution $$\mathcal{N}(0,1)$$, restricts the secret $$\vec{s}$$ to be a unit-vector in $$\RR^n$$ and usually samples the error $$\vec{e}$$ from another normal distribution.

## Definition

Let $$S^{n-1}$$ be the $$n-1$$ unit sphere, i.e. all unit vectors in $$\RR^n$$, and let $$\mathcal{N}(0,\alpha)$$ denote the continuous normal / Gaussian distribution centered around $$0$$ with Gaussian parameter $$\alpha$$.

### Continuous LWE$$_{n,m,\beta,\gamma}$$ {#clwe}
_Sample $$\mat{A} \sample \mathcal{N}(0, 1)^{m \times n}$$, $$\vec{s} \sample S^{n-1}$$, $$\vec{e} \sample \mathcal{N}(0, \beta^2)^m$$, and $$\vec{u} \sample \mathcal{U}([0,1))^m$$. An adversary is asked to distinguish between the distribution_

$$ \left( \mat{A}, \gamma \cdot \mat{A} \cdot \vec{s} + \vec{e} \bmod 1 \right) \text{ and } \left( \mat{A}, \vec{u} \right). $$

Note that we follow the definition given in {% cite ECCC:BNHR22 %}.

## Variants

### Homogeneous Continuous LWE$$_{n,m,\beta,\gamma}$$ {#hclwe}
_Sample $$\vec{k} \in \ZZ^{m}$$ with each entry sampled with probability proportional to $$\exp(-k^2/2\gamma^2 + 2\beta^2)$$. Sample $$\vec{s} \sample S^{n-1}$$, and $$\vec{e} \sample \mathcal{N}(0, (\beta^2 / (\gamma^2 + \beta^2))^2)^m$$. Further, sample $$\mat{A} \sample \mathcal{N}(0, 1)^{n \times m}$$ conditioned on each column $$\vec{a}_i \perp \vec{s}$$ being orthogonal to $$\vec{s}$$. An adversary is asked to distinguish between the distribution_

$$ \mat{A} + \vec{s} \cdot \left( \frac{(\gamma^2 + \beta^2)}{\gamma} \cdot \vec{k}^T + \vec{e}^T \right) \bmod 1 \text{ and } \mathcal{N}(0,1)^{n \times m}. $$

Homogeneous Continuous LWE (HCLWE) was introduced alongside CLWE in {% cite STOC:B0ST21 %}. The authors provide a polynomial-time quantum reduction from the Bounded Distance Decoding problem to HCLWE in Corollary 4.2. Further, they introduce a multi-version of HCLWE with a multitude of orthonormal secrets, which they call _m-Homogeneous Continuous LWE_, in Section 9 of {% cite STOC:B0ST21 %}, as well as a truncated version of the problem called _Truncated Homogeneous Continuous LWE_.

## Hardness

Bruna et al. provide a ppt (classical) reduction from the Bounded Distance Decoding problem to CLWE in Lemma 3.3 of {% cite STOC:B0ST21 %}. Further, Gupte, Vafa, and Vaikuntanathan show that CLWE is at least as hard as LWE in Corollary 5 of {% cite FOCS:GupVafVai22 %}. They utilise a version of LWE with fixed norm of the secret as an intermediate step, which they call fixed-norm LWE (Theorem 6 and Theorem 7). Furthermore, the authors provide a reduction from _discrete-secret_ CLWE to LWE as well as a search-to-decision reduction for _discrete-secret_ CLWE. The latter reduction is provided for the original, non-discrete version of CLWE in {% cite EPRINT:Prince26 %}.

## Constructions built from Continuous LWE {#constructions}

- Public-Key Encryption {% cite ECCC:BNHR22 %}

## Related Assumptions

- [Learning with Errors](/lwe/)
