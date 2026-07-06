---
title: "Generalised-LWE"
seo_title: "Generalised-LWE"
family: "LWE"
subfamily: "LWE over Exotic Domains"
graph_id: "Generalised-LWE"

last_modified_at: 2026-07-06
redirect_from:
  - /generalised_lwe/
  - /generalisedlwe/
  - /order-lwe/
  - /order_lwe/
  - /orderlwe/
---

Generalised-LWE was introduced by Peikert and Pepin in 2019 {% cite JC:PeiPep24 %}. It yields a general framework that captures all variants of Learning With Errors (over commutative rings).

## Definition

A generalised LWE distribution is parameterised by:
1. an order $$\mathcal{O}$$ in a number field $$K$$ and an $$\mathcal{O}$$-ideal $$\mathcal{Q}$$,
2. suitable fractional $$\mathcal{O}$$-ideals $$\mathcal{S}, \mathcal{A}, \mathcal{B}=\mathcal{SA}$$,
3. dimensions $$k_s,k_a,k_b$$ and an order three tensor $$T \in \mathcal{O}_\mathcal{Q}^{k_s \times k_a \times k_b}$$, which induces an $$\mathcal{O}_\mathcal{Q}$$-bilinear map $$T: \mathcal{S}_\mathcal{Q}^{k_s} \times \mathcal{A}_\mathcal{Q}^{k_a} \rightarrow \mathcal{B}_\mathcal{Q}^{k_b}$$ defined as $$T(\vec{s}, \vec{a})_\ell = \sum_{i,j} T_{ij\ell} s_i a_j$$, and
4. an error distribution $$\psi$$ over $$K_\RR^{k_b}$$.

### Generalised-LWE {#generalised-lwe}
_Adopt the above notation. Sample $$\vec{s} \sample \mathcal{S}_\mathcal{Q}^{k_s}$$ among $$\ell$$ independently sampled $$\vec{a}_i \sample \mathcal{A}_\mathcal{Q}^{k_a}$$, and $$\vec{e}_i \sample \psi$$. An adversary is asked to distinguish between the distributions_

$$ (\vec{a}_i, T(\vec{s}, \vec{a}) + \vec{e} \bmod (\mathcal{Q}\mathcal{B})^{k_b})_{i \in [\ell]} \text{ and } \mathcal{U}\left( \mathcal{A}_\mathcal{Q}^{k_a} \times (K_\RR / \mathcal{QB})^{k_b} \right).$$

To simplify notation, Peikert and Pepin define a specialisation of Generalised-LWE (which still encompasses all prior algebraic LWE problems over number fields) called $$\mathcal{L}$$-LWE, which is parameterises the assumption by a single lattice.

### $$\mathcal{L}$$-LWE {#l-lwe}
_Let $$\mathcal{L}$$ be a lattice in a number field $$K$$, $$\mathcal{O} = \mathcal{O}^\mathcal{L}$$ be the coefficient ring of $$\mathcal{L}$$ (and of $$\mathcal{L}^\vee$$), $$\psi$$ be a distribution over $$K_\RR$$, $$\mathcal{Q}$$ be an $$\mathcal{O}$$-ideal and $$k$$ be a positive integer. Let $$T \in \mathcal{O}_\mathcal{Q}^{k \times k \times 1}$$ be the order-three tensor whose single $$k \times k$$ layer is the identity matrix. The $$\mathcal{L}$$-LWE$$_{k,\mathcal{Q},\psi, \ell}$$ problem is then the Generalised-LWE$$_{T,\Lambda^\vee, \mathcal{O}, \psi, \ell}$$ problem with $$\mathcal{A}=\mathcal{O}$$ and $$\mathcal{S}=\mathcal{B}=\Lambda^\vee$$._

## Variants

### Order-LWE
_Order-LWE is a specialisation of $$\mathcal{L}$$-LWE, where $$\mathcal{L} = \mathcal{O}$$ for some arbitrary order $$\mathcal{O}$$ of $$K$$._

Order LWE was introduced by Bolboceanu, Brakerski, Perlman, and Sharma in 2019 {% cite AC:BBPS19 %}. The authors provide a worst-case to average-case reduction from lattice problems over invertible $$\mathcal{O}$$-ideals in Theorems 3.7 and 3.8. In Corollary 4.5, they relay this worst-case to average-case reduction to Polynomial-LWE. 

### Further Variants
- Ring-LWE was historically defined as a specialisation of $$\mathcal{L}$$-LWE, where $$\mathcal{L} = \mathcal{O}_K$$ is the full ring of integers of $$K$$.
- [Polynomial-LWE](/lwe/#ring-lwe) is nowadays often referred to as Ring LWE and a specialisation of $$\mathcal{L}$$-LWE, where $$\mathcal{L} = \ZZ[\alpha]^\vee$$ for some $$\alpha \in \mathcal{O}_K$$.
- [LWE](/lwe/) uses the $$\ZZ_q$$-bilinear inner-product map $$\langle \cdot,\cdot \rangle : \ZZ_q^n \times \ZZ_q^n \rightarrow \ZZ_q$$, where the secret mulltipliers, and products all are associated with the ideal $$\mathcal{I} = \ZZ$$ of the unique order $$\mathcal{O} = \ZZ$$ in the rational number field $$K = \QQ$$, and $$q$$ is an integer modulus.
- [Module-LWE](/lwe/#module-lwe) interpolates between LWE and Ring-LWE, using the $$\mathcal{R}_q$$-bilinear inner-product map $$(\mathcal{R}_q^\vee)^d \times \mathcal{R}_q^d \rightarrow \mathcal{R}_q^\vee$$.

## Hardness

Peikert and Pepin {% cite JC:PeiPep24 %} provide a reduction between $$\mathcal{L}'$$-LWE and $$\mathcal{L}$$-LWE for any lattices $$\mathcal{L} \subseteq \mathcal{L}'$$ of $$K$$ for which $$\mathcal{O} = \mathcal{O}^\mathcal{L} \subseteq \mathcal{O}' = \mathcal{O}^{\mathcal{L}'}$$, and the conductor $$\mathcal{O}$$-ideal is coprime with the modulus $$\mathcal{Q}$$ of the target problem. Further details about reductions between Generalised-LWE instances can be found in Section 4 of {% cite JC:PeiPep24 %}.

## Constructions built from Generalised-LWE {#constructions}

None explicitly. Note that GLWE or Generalised-LWE seems to be utilised as a synonym for Module-LWE in the FHE community.

## Related Assumptions

- [Middle-Product LWE](/TODO/)
- [Learning with Errors](/lwe/)
