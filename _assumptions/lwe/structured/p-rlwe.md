---
title: "Power Ring-LWE (P-RLWE)"
seo_title: "Power Ring-LWE"
family: "LWE"
subfamily: "Structured LWE"
graph_id: "P-RLWE"

last_modified_at: 2026-06-14
redirect_from:
  - /p_rlwe/
  - /prlwe/
  - /power-ring-lwe/
  - /power_ring_lwe/
  - /powerringlwe/
---

The Power Ring-LWE (P-RLWE) assumption was introduced by Abram, Roy, and Scholl in 2024 {% cite EC:AbrRoySch24 %}. Inspired by Power-DDH , the assumption states that a modified version of LWE -- which exponentiates a single element $$a$$ across all samples and only introduces randomness through freshly sampled errors -- remains hard to solve. They introduce this assumption to provide a construction for succinct homomorphic secret sharing.

## Definition

### P-RLWE$$_{q,\chi,m,\mathcal{R}}$$ {#p-rlwe}
_Let $$\mathcal{R}_q = \ZZ_q[X] / I\langle f(X) \rangle$$, where $$f$$ is a monic polynomial and let $$\Gamma$$ and $$\chi$$ be distributions over $$\mathcal{R}_q$$. Sample $$a \sample \Gamma$$, $$w \sample \mathcal{R}_q$$, $$e_i \sample \chi$$, and $$v_i \sample \mathcal{R}_q$$ for $$i \in \set{0,\dots,m}$$. An adversary is asked to distinguish between the distribution_

$$ \left( a, \set{a^i \cdot w + e_i}_{i \in \set{0,\dots,m}} \right) \text{ and } \left( a, \set{v_i}_{i \in \set{0,\dots,m}} \right). $$

Please note that the assumption described above follows the original definition from {% cite EC:AbrRoySch24 %}. Other papers {% cite C:IshLiLin25 %}{% cite AC:LXYYZ25 %} claim to specialise this assumption, call it Power Ring-LWE, and define a circular version of it. However, their assumption does not capture the nature of Abram, Roy, and Scholl's definition and is closer to [Secret-Power Ring-LWE](/sp-rlwe/). Thus, we list them on the [Secret-Power Ring-LWE page](/sp-rlwe/) as variants.

## Hardness

The hardness of this assumption is not discussed in any papers.

## Constructions built from P-RLWE {#constructions}

- Public-Key Bilinear Homomorphic Secret Sharing {% cite EC:AbrRoySch24 %}

## Related Assumptions

- [Secret-Power Ring-LWE](/sp-rlwe/) exponentiates the secret rather than the term $$a$$.
