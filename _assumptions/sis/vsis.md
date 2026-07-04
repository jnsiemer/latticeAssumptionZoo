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

The SIS problem can be interpreted in the following way: Find a linear function with short coefficients which vanishes at the given points. From this perspective, the Vanishing SIS (vSIS) problem, introduced by Cini, Lai, and Malavolta in 2023 {% cite C:CinLaiMal23 %}, generalises the SIS problem by allowing other classes of admissible functions. A typical instantiation requires the adversary to find a polynomial with short coefficients which vanishes at the given point(s). So far, vSIS has been utilised to construct succinct arguments and signatures and homomorphic signatures for low-degree polynomials. Its hinted variants are used to construct proof-friendly signatures.

## Definition

### vSIS$$_{\mathcal{R},n,k,q,\beta,\mathcal{F}}$$ {#vsis}

_Let $$\mathcal{F} = \{f_1, \ldots, f_m\}$$ be a set of functions from $$\mathcal{R}_q^k$$ to $$\mathcal{R}_q$$. Given uniformly random $$\vec{a}_1, \ldots, \vec{a}_n \in \mathcal{R}_q^k$$, find a short non-zero vector $$\vec{u}^* = (u^*_1, \ldots, u^*_m) \in \mathcal{R}^m$$ s.t. $$f = \sum_{i=1}^m u^*_i f_i$$ satisfies $$f(\vec{a}_i) = 0 \bmod q$$ for all $$i \in [n]$$ and $$0 < \norm{\vec{u}^*} \leq \beta $$._

Alternatively, the $$\mathsf{vSIS}_{\mathcal{R},n,k,q,\beta,\mathcal{F}}$$ problem can also be defined equivalently as follows, which emphasises its positioning as a structured SIS problem. 

_Let $$\mathcal{F} = \{f_1, \ldots, f_m\}$$ be a set of functions from $$\mathcal{R}_q^k$$ to $$\mathcal{R}_q$$. Let the matrix $$\mat{A} \in \mathcal{R}_q^{n \times k}$$ be sampled uniformly at random. Given $$\mat{A}$$ with rows given by $$\vec{a}_1, \ldots, \vec{a}_n$$, find a short non-zero vector $$\vec{u}^* \in \mathcal{R}^m$$ s.t._

$$ \mathcal{F}(\mat{A}) \cdot \vec{u}^* = \vec{0} \bmod q \land 0 < \norm{\vec{u}^*} \leq \beta $$

_where $$\mathcal{F}(\mat{A}) = \begin{bmatrix} f_1(\vec{a}_1) & \cdots & f_m(\vec{a}_1) \\ \vdots & \ddots & \vdots \\ f_1(\vec{a}_n) & \cdots & f_m(\vec{a}_n) \end{bmatrix}$$._

## Instantiations of $$\mathcal{F}$$

The vSIS problem is a family of problems parametrised by the set of functions $$\mathcal{F}$$. When $$k = m$$ and $$f_i(X_1,\ldots,X_k) = X_i$$ for all $$i \in [m]$$, $$\mathsf{vSIS}_{\mathcal{R},n,k,q,\beta,\mathcal{F}} = \mathsf{SIS}_{\mathcal{R},n,m,q,\beta}$$, recovering the standard SIS problem. Some other notable instantiations are as follows.

| $$\mathcal{F}$$ | Description |
| --- | --- |
| $$\{1,X,\ldots,X^{m-1}\}$$ | univariate monomials |
| $$\{X^{-d+1}, \ldots, X^{-1}, 1,X,\ldots,X^{d-1}\}$$ | Laurent monomials |
| $$\{1,X_1,X_2,\ldots,X_\mu,X_1 X_2, X_1 X_3, \ldots, X_1 X_2 \cdots X_\mu\}$$ | multilinear monomials |

Instantiations of $$\mathcal{F}$$ for which $$\mathcal{F}(\mat{A})$$ can be expressed as a row-tensor product, i.e. 

$$ \mathcal{F}(\mat{A}) = \mat{F}_1 \bullet \cdots \bullet \mat{F}_\mu. $$

are particularly useful for constructing succinct arguments {% cite AC:KLNO24 %}{% cite AC:KLNO25 %}. For example,

$$  \begin{bmatrix} 1 & a_1 & a_1^2 & a_1^3 & a_1^4 & a_1^5 & a_1^6 & a_1^7 \\ 1 & a_2 & a_2^2 & a_2^3 & a_2^4 & a_2^5 & a_2^6 & a_2^7 \\ 1 & a_3 & a_3^2 & a_3^3 & a_3^4 & a_3^5 & a_3^6 & a_3^7 \end{bmatrix} = \begin{bmatrix} 1 & a_1^4 \\ 1 & a_2^4 \\ 1 & a_3^4 \end{bmatrix} \bullet \begin{bmatrix} 1 & a_1^2 \\ 1 & a_2^2 \\ 1 & a_3^2 \end{bmatrix} \bullet \begin{bmatrix} 1 & a_1 \\ 1 & a_2 \\ 1 & a_3 \end{bmatrix}. $$


## Hardness

There are clear pathological examples of $$\mathcal{F}$$ for which vSIS is not hard, e.g. when $$\mathcal{F}$$ consists of constant functions. The strong linear independent criteria (Definition 6 of {% cite PKC:DKLW25 %}) is designed to rule out choices of $$\mathcal{F}$$ for which vSIS is easy. Roughly, $$\mathcal{F}$$ is said to be strongly linearly independent if the probability of any fixed non-zero function in the linear span of $$\mathcal{F}$$ vanishing at a random point is negligible. 

For "reasonable" choices of $$\mathcal{F}$$ where $$\abs{\mathcal{F}} = m$$, the hardness of $$\mathsf{vSIS}_{\mathcal{R},n,k,q,\beta,\mathcal{F}}$$ is currently {% cite AC:KLNO24 %}{% cite AC:KLNO25 %} heuristically measured by $$\mathsf{SIS}_{\mathcal{R},n,m,q,\beta}$$, i.e. assuming that the structure of $$\mathcal{F}(\mat{A})$$ does not make solving SIS easier.

Reductions from more established problems to vSIS are currently rare. For the special case where $$n=1$$ and $$\mathcal{F}$$ consists of low-degree univariate monomials, Section 3 of {% cite PKC:JyrLai25 %} shows a reduction of vSIS from IdHSVP. However, beside the restrictions vSIS in parameters, the reduction is only worst-case to worst-case and is restricted to IdHSVP instances of a specific form.

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


## Constructions built from vSIS {#constructions}

- Succinct non-interactive argument of knowledge (SNARK) {% cite C:CinLaiMal23 %}{% cite AC:KLNO24 %}{% cite AC:KLNO25 %}
- Proof-friendly signatures {% cite PKC:DKLW25 %}
- Homomorphic Signatures for Low-Degree Polynomials {% cite PKC:JyrLai25 %}

## Related Assumptions

TODO

If there are any immediately related assumptions, list them here (potentially with a brief description of their relationship or key differences), e.g.
- [Randomised One-More-ISIS](/rom-isis/) doubles the length of matrix $$\mathbf{A}$$ and requires the vector multiplied by the second part to be binary (compared to One-More-ISIS).
- [GenISIS$$_f$$](/genisisf/)
- The LWE analogue
