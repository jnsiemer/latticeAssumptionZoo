---
title: "Common Notation"
permalink: /common-notation/
layout: single
last_updated: 2026-07-01

scholar:
  style: association-for-computing-machinery
  source: ./_bibliography
  bibliography: references.bib
  bibliography_list_tag: ul
---

This glossary collects standard notation and conventions used in lattice-based cryptography, giving students searchable terms for common symbols. We assume a foundational background in linear algebra and complexity theory.

As authors deviate from these conventions for several reasons, some pages in this Zoo may use alternative notation. When in doubt, refer to the formal definitions provided in the cited literature.

## Conventions

| Notation | Definition |
| --- | --- |
| $$\vec{b}$$ | Bold lower-case letters usually denote (column) vectors. The $$i$$-th entry of a vector $$\vec{b}$$ may be written as $$b_i$$. |
| $$\mat{A}$$ | Bold upper-case letters usually denote matrices. The $$i$$-th column vector of $$\mat{A}$$ may be denoted by $$\vec{a}_i$$. |
| $$\mat{A}^T$$ or $$\vec{b}^T$$ | Transposed of a matrix or vector. |
| $$\mat{0}_n$$ | Zero matrix of dimension $$n$$. |
| $$\vec{0}$$ | Zero vector of appropriate dimension. |
| $$\mat{I}_n$$ | Identity matrix $$\mat{I}_n \in \set{0,1}^{n \times n}$$ of dimension $$n$$. |
| $$\vec{e}_i$$ | Denotes the $$i$$-th unit vector. |
| $$\vec{e}_i \oplus \mat{I}_n$$ | The Tensor product (also [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product){:target="_blank"}). Frequently used to construct block matrices. |
| $$\mat{G}$$ | Defines the gadget matrix $$\mat{I}_n \otimes \vec{g}^T$$, where $$\vec{g}^T = \begin{bmatrix} 1 &2 &4 &\dots &2^{\ceil{\log q} - 1} \end{bmatrix}$$. Note that base-2 is standard, but one can deviate to reduce the number of columns of $$\mat{G}$$. |

## Algebraic Structures and Lattices

| Notation | Definition |
| --- | --- |
| $$\ZZ_q$$ | The ring of integers $$\ZZ/q\ZZ$$ often represented by $$\set{0,\dots,q-1}$$. If $$q$$ is prime, it becomes a field, i.e. $$\ZZ_q=\FF_q$$. For centered error distributions, we sometimes pivot to representatives from $$(-q/2, q/2]$$. |
| $$[m]$$ | The set of elements $$[1,m] \cap \ZZ = \set{1,\dots,m}$$.|
| $$\mathcal{R}$$ | Usually represents a ring of polynomials, i.e. $$\mathcal{R} = \ZZ[X]/f(X)$$ for some polynomial $$f$$. If $$f(X) = (X^d + 1)$$ is a power-of-two cyclotomic polynomial, the ring provides several nice properties. |
| $$\mathcal{R}_q$$ | Describes the ring modulo $$q$$, i.e. $$\mathcal{R}_q = \ZZ_q[X]/f(X)$$. |
| $$\Lambda_q^\perp(\mat{A})$$ | Lattice defined by $$\set{\vec{b} \in \ZZ^m : \mat{A} \cdot \vec{b} = \vec{0} \bmod q}$$. |
| $$\Lambda_q^{\vec{t}}(\mat{A})$$ | Lattice coset defined by $$\set{\vec{b} \in \ZZ^m : \mat{A} \cdot \vec{b} = \vec{t} \bmod q}$$. |
| $$\Lambda^*$$ | The dual lattice of $$\Lambda$$ defined by $$\Lambda^* = \set{\vec{x} \in \RR^n : \forall \vec{v} \in \Lambda, \langle \vec{x}, \vec{v} \rangle \in \ZZ}$$. |

## Distributions

| Notation | Definition |
| --- | --- |
| $$\mathcal{U}(S)$$ or $$a \sample S$$ | Uniform distribution over the set $$S$$. |
| $$D_{\Lambda,s,\vec{c}}$$ or $$\mathcal{D}_{\Lambda,s,\vec{c}}$$ | Discrete Gaussian distribution over the lattice $$\Lambda$$ centered around $$\vec{c}$$ with Gaussian parameter $$s$$ determining the width of the distribution. A definition can be found in Section 2.3 of {% cite FTTCS:Peikert16 %}. |
| $$\mathcal{N}_{s,c}$$ or $$\mathcal{N}(c,s)$$ | Continuous [Normal / Gaussian distribution](https://en.wikipedia.org/wiki/Normal_distribution){:target="_blank"} centered around $$c$$ with parameter $$s=\sqrt{2\pi}\sigma$$ determining the width of the distribution. |
| $$\mathsf{Ber}(p)$$ | Bernoulli distribution with probability $$p$$ of outputting $$1$$. |
| $$\mathsf{Bin}(n,p)$$ | Binomial distribution with $$n$$ independent Bernoulli experiments, each with probability $$p$$ of outputting $$1$$. |

## Asymptotic Notation

| Notation | Definition |
| --- | --- |
| $$\lambda$$ | Security parameter, usually every other parameter is implicitly a function of the security paramter, i.e. $$n = n(\lambda)$$ |
| $$a \leftarrow \adv^{O}(A)$$ | Algorithm $$\adv$$ outputs some value $$a$$ on input $$A$$ with oracle access to some oracle $$O$$. |
| $$m = \poly{n}$$ | Denotes $$m \in \poly{n}$$, i.e. $$m$$ is an arbitrary polynomial function of $$n$$, e.g. $$m = n^3 + 2n$$. Authors frequently abuse equality, writing e.g. $$m = \mathcal{O}(n)$$ to denote $$m \in \mathcal{O}(n)$$. |
| $$\epsilon = \negl{n}$$ | Denotes $$\epsilon \in \negl{n}$$, i.e. $$\epsilon$$ is an arbitrary negligible function of $$n$$, e.g. $$\epsilon = 2^{-n}$$. |
| $$a$$ is superpolynomial in $$n$$ | There exists no constant $$c > 0$$ s.t. $$a \in \mathcal{O}(n^c)$$. |
| $$a$$ is subexponential in $$n$$ | $$a$$ grows slower than an exponential function of $$n$$, e.g. $$a = 2^{\sqrt{n}}$$. |
| $$\eta_\epsilon(\Lambda)$$ | Denotes the smoothing parameter of the lattice $$\Lambda$$. An explanation can be found in Section 2.3 of {% cite FTTCS:Peikert16 %}. |


## References

{% bibliography --cited %}
