---
title: "Learning with Errors with Output Dependencies (LWE-OD)"
seo_title: "Learning with Errors with Output Dependencies"
family: "LWE"
subfamily: "LWE with Distributional Constraints"
graph_id: "LWE-OD"

last_modified_at: 2026-06-13
redirect_from:
  - /lwe_od/
  - /lweod/
  - /learning-with-errors-with-output-dependencies/
  - /learning_with_errors_with_output_dependencies/
---

The Learning with Errors with Output Dependencies (LWE-OD) problem was introduced by Hoffmann, Méaux, Rossi, and Standaert in 2026 {% cite PQCrypto:HMRS26 %}. It allows the error distribution to depend on the inner product of the secret vector $$\vec{s}$$ and $$\vec{a}_i$$.

## Definition

### LWE-OD$$_{n,m,q,\chi_0,\dots,\chi_{q-1}}$$ {#lwe-od}
_Let $$\vec{s} \in \ZZ_q^n$$ and let $$\chi_0, \dots, \chi_{q-1}$$ denote distributions over $$\ZZ$$. Sample $$\mat{A} \sample \ZZ_q^{n \times m}$$ and $$\vec{e} \sample \chi_{\langle \vec{s}, \vec{a}_1 \rangle} \times \dots \times \chi_{\langle \vec{s}, \vec{a}_m \rangle}$$. An adversary is asked to distinguish between the distributions_

$$ \left( \mat{A}, \vec{s}^T \cdot \mat{A} + \vec{e}^T \right) \text{ and } \mathcal{U}\left( \ZZ_q^{n \times m} \right) \times \mathcal{U}\left( \ZZ_q^{1 \times m} \right). $$

The LWE-OD problem allows the distribution of the error to depend on the output of $$\vec{s}^T \cdot \mat{A}$$ for each LWE sample. Writing down the definition in a more fine-grained manner shows that $$\vec{e}_i$$ is sampled from $$\chi_{b_i}$$, where $$b_i = \langle \vec{s}, \vec{a}_i \rangle$$ and $$\vec{a}_i$$ denotes the $$i$$-th column vector of matrix $$\mat{A}$$. Thus, LWE-OD is a generalisation of LWE and LWR.

## Hardness

Theorem 3 of {% cite PQCrypto:HMRS26 %} provides a reduction from LWE to LWE-OD under a very detailed set of conditions.

## Constructions built from LWE-OD {#constructions}

As LWE-OD generalises LWE and LWR, this list could theoretically be a combination of the constructions built from these two assumptions. However, there were no constructions built from LWE-OD explicitly yet.

## Related Assumptions

- [Learning with Errors](/lwe/) is a special case of LWE-OD, where $$\chi_i = \chi$$ for all $$i$$.
- [Learning with Rounding](/lwr/) is a special case of LWE-OD, where $$\chi_i$$ always outputs $$\mathsf{round}_p(i)-i$$.
