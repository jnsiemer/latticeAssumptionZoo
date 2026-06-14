---
title: "Secret-Power Ring-LWE (SP-RLWE)"
seo_title: "Secret-Power Ring-LWE"
family: "LWE"
graph_id: "SP-RLWE"

last_modified_at: 2026-06-13
redirect_from:
  - /sp_rlwe/
  - /sprlwe/
  - /secret-power-ring-lwe/
  - /secret_power_ring_lwe/
  - /secretpowerringlwe/
---

The Secret-Power Ring-LWE (SP-RLWE) assumption was introduced by Agrawal, Bhushan, Couteau, and Riahinia in 2026 {% cite EPRINT:ABCR26 %}. It states that a modified version of LWE -- which exponentiates the secret across samples and only introduces randomness through freshly sampled errors -- remains hard to solve. They introduce this assumption to provide a public-key pseudorandom correlation function for oblivious transfer.

## Definition

### SP-RLWE$$_{q,\chi_\mu,\chi_e,m,\mathcal{R}}$$ {#sp-rlwe}
_Let $$\chi_\mu$$ and $$\chi_e$$ be distributions over $$\mathcal{R}$$. Sample an invertible element $$\mu \sample \chi_\mu$$, elements $$M, \mathcal{M}, \mathcal{M}_i \sample \mathcal{R}_q$$, and $$e, e_i \sample \chi_e$$ for all $$i \in [m]$$. An adversary is asked to distinguish between the distribution_

$$ \left( M, M \cdot \mu + e, \set{M \cdot (1/\mu)^i + e_i}_{i \in [m]} \right) \text{ and } \left( M, \mathcal{M}, \set{\mathcal{M}_i}_{i \in [m]} \right). $$

## Variants

### Weak SP-RLWE$$_{q,\chi_\mu,\chi_e,m,\mathcal{R}}$$ {#wsp-rlwe}
_Let $$\chi_\mu$$ and $$\chi_e$$ be distributions over $$\mathcal{R}$$. Sample an invertible element $$\mu \sample \chi_\mu$$, elements $$M \sample \mathcal{R}_q$$, and $$e, e_i \sample \chi_e$$ for all $$i \in [m]$$. Given $$\set{M \cdot (1/\mu)^i + e_i}_{i \in [m]}$$, an adversary is asked to distinguish between the distribution_

$$ (M \cdot \mu + e) \text{ and } \mathcal{U}\left( \mathcal{R}_q \right). $$

The construction in {% cite EPRINT:ABCR26 %} relies on a slightly weaker assumption, which does not assume that the terms $$M \cdot (1/\mu)^i + e_i$$ are computationally indistinguishable from uniform.

## Hardness

The authors of {% cite EPRINT:ABCR26 %} describe their cryptanalytic attempts to break the assumption in Section 4. They state that "aside from low norm linear dependencies, we do not know any other attacks from the literature that exploit correlations between secrets" and that they could not achieve any non-trivial attacks. In their parameter set, the modulus $$q$$ is superpolynomial but they state that they believe "the assumption to plausibly hold in any parameter setting where the standard ring-LWE assumption holds (perhaps up to a tiny speedup of $$\sqrt{m}$$, $$m$$ being the maximum degree of $$\mu−1$$,
by adapting the generic attack of {% cite EC:Cheon06 %} on power-DDH to the ring-LWE setting)".

## Constructions built from SP-RLWE {#constructions}

- Public-key pseudorandom correlation function {% cite EPRINT:ABCR26 %}

## Related Assumptions

- [Power Ring-LWE](/TODO/) exponentiates the term $$M$$ rather than the secret.
