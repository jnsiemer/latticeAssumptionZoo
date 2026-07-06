---
title: "Variety LWE"
seo_title: "Variety LWE"
family: "LWE"
subfamily: "LWE over Exotic Domains"
graph_id: "Variety-LWE"

last_modified_at: 2026-06-27
redirect_from:
  - /variety_lwe/
  - /varietylwe/
---

Variety LWE was proposed by Zhao in 2025 {% cite ARXIV:Zhao25 %}. Its key distinction from [Ring-LWE](/lwe/#ring-lwe) and [Module-LWE](/lwe/#module-lwe) is that the defining polynomials do not contain mixed variables, which implies that multiplication works coordinate-wise.

## Definition

Let $$\ZZ[X_1,\dots,X_n]$$ be the polynomial ring over the integers. Consider an algebraic variety $$\mathcal{V}$$ defined by a set of polynomials $$\set{f_1(X_1),\dots,f_n(X_n)} \subset \ZZ[X_1,\dots,X_n]$$, where each defining polynomial $$f_i(X_i)$$ only depends on a single variable $$X_i$$ ensuring the absence of mixed terms. The associated quotient ring is given by

$$\mathcal{R} = \ZZ[X_1,\dots,X_n] / \langle f_1(X_1),\dots,f_n(X_n) \rangle.$$

For prime modulus $$q$$, we define the modular quotient ring $$\mathcal{R}_q = \ZZ_q[X_1,\dots,X_n] / \langle f_1(X_1),\dots,f_n(X_n) \rangle$$.

Since each polynomial $$f_i(X_i)$$ only constrains a single variable, the resulting algebraic structure remains coordinate-wise separable.

### Variety LWE$$_{\mathcal{R},m,q,\mathcal{S},\chi}$$ {#variety-lwe}
_Let $$\mathcal{S}$$ and $$\chi$$ be distributions over $$\mathcal{R}$$ constrained to lie within the variety the variety $$\mathcal{V}$$. Sample $$\vec{a} \sample \mathcal{U}\left( \mathcal{R}_q^m \right)$$ uniformly at random, $$s \sample \mathcal{S}$$, $$\vec{e} \sample \chi^m$$. An adversary is asked to distinguish between the distribution_

$$ (\vec{a}, \vec{a} \cdot s + \vec{e}) \text{ and } \mathcal{U}\left( \mathcal{R}_q^m \right) \times \mathcal{U}\left( \mathcal{R}_q^m \right). $$

## Hardness

Zhao {% cite ARXIV:Zhao25 %} provides a reduction from Variety-Ideal-SVP to solving multiple independent Ideal-SVP instances in Lemma 1 and then provides a reduction from (worst-case) Variety-Ideal-SVP to (average-case) Variety LWE in Theorem 1. The author further analyses the computational complexity of Variety LWE and Variety-Ideal-SVP in Section 4.

## Constructions built from Variety LWE {#constructions}

- Vector Homomorphic Encryption {% cite ARXIV:Zhao25 %}

## Related Assumptions

- [Ring-LWE](/lwe/#ring-lwe) is the closest linkable assumption due to its worst-case to average-case reduction from Ideal-SVP.
