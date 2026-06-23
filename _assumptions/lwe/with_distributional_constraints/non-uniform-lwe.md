---
title: "Non-Uniform LWE"
seo_title: "Non-Uniform LWE"
family: "LWE"
subfamily: "LWE with Distributional Constraints"
graph_id: "Non-Uniform-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-23
redirect_from:
  - /non_uniform_lwe/
  - /nonuniformlwe/
---

Non-Uniform Learning with Errors was introduced by Boneh, Lewi, Montgomery, and Raghunathan in 2013 {% cite C:BLMR13 %}. The problem diverges from [LWE](/lwe/) in the distribution of the challenge matrix, which can be distributed according to some distribution $$\eta$$. As such, the problem generalises Binary-Matrix LWE (also known as Galbraith's LWE) and Subspace LWE.

## Definition

### Non-Uniform LWE$$_{n,m,q,\chi,\eta}$$ {#non-uniform-lwe}
_Let $$\chi$$ be a distribution over $$\ZZ_q$$ and $$\eta$$ be a distribution over $$\ZZ_q^n$$. Sample $$\mat{A} \sample \eta^m \in \ZZ_q^{n \times m}$$, $$\vec{s} \sample \ZZ_q^n$$, $$\vec{e} \sample \chi^m$$, and $$\vec{u} \sample \ZZ_q^m$$. An adversary is asked to distinguish between the distribution_

$$ (\mat{A}, \mat{A}^{T} \cdot \vec{s} + \vec{e}) \text{ and } (\mat{A}, \vec{u}). $$

## Variants

### Binary-Matrix LWE$$_{n,m,q,\chi}$$ {#binary-matrix-lwe}
_Sample **binary** matrix $$\mat{A} \sample \set{0,1}^{n \times m}$$, secret vector $$\vec{s} \sample \ZZ_q^n$$, and $$\vec{u} \sample \ZZ^m$$. Let $$\vec{e} \in \ZZ_q^m$$ be sampled from the error distribution $$\chi$$. An adversary is asked to distinguish between the distribution_

$$ (\mat{A}, \mat{A}^{T} \cdot \vec{s} + \vec{e}) \text{ and } (\mat{A}, \vec{u}). $$

Simultaneously to the introduction of Non-Uniform LWE, Galbraith introduced LWE with a binary matrix {% cite SELF:Galbraith13 %}. He referred to this problem as _Compact LWE_ and today, it is also referred to as _Galbraith's LWE_. Galbraith originally used the assumption to build a space-efficient PKE scheme for devices with relatively small storage.

Binary-Matrix LWE is as hard as LWE {% cite SELF:Galbraith13 %}{% cite C:BLMR13 %}. For simplicity, let $$q$$ be a power of 2 and $$\mat{G} = \mat{I}_n \otimes \begin{bmatrix} 1 &2 &\dots &2^{\log q - 1} \end{bmatrix}$$ be a gadget matrix. Then, the LWE-challenge matrix $$\mat{A} \in \ZZ_q^{m \times n}$$ can be transformed to a binary challenge matrix by performing the elementwise binary decomposition $$\mat{G}^{-1}(\mat{A})$$. The reduction implies that the dimension of the binary matrix $$\mat{G}^{-1}(\mat{A})$$ grows multiplicatively by $$\log q$$.

Some cryptanalysis of Binary-Matrix LWE was given in {% cite SELF:Galbraith13 %} and it was further analysed in {% cite PKC:HerMay17 %}. The parameters suggested in {% cite SELF:Galbraith13 %} mostly ignore the logarithmic growth in dimension of $$\mat{A}$$, which was suggested in the reduction. The authors of {% cite SELF:Galbraith13 %} manage to break Binary-Matrix LWE for parameters suggested in {% cite PKC:HerMay17 %} and thus show that the factor $$\log q$$ has significant impact on the hardness of the assumption.

### LWE with Low Norm$$_{n,m,q,\chi,s}$$ {#lwe-with-low-norm}
_Sample matrix $$\mat{A} \sample D_{\ZZ,s}^{n \times m}$$ from a **discrete Gaussian**, secret vector $$\vec{s} \sample \ZZ_q^n$$, and $$\vec{u} \sample \ZZ_q^m$$. Let $$\vec{e} \in \ZZ^m$$ be sampled from the error distribution $$\chi$$. An adversary is asked to distinguish between the distribution_

$$ (\mat{A}, \mat{A}^{T} \cdot \vec{s} + \vec{e}) \text{ and } (\mat{A}, \vec{u}). $$

This variant of Non-Uniform LWE with $$\eta = D_{\ZZ^n,s}$$ is often referred to _LWE with Low Norm_. It is at least as hard as LWE according to Corollary 4.6 of {% cite C:BLMR13 %}.

### Subspace LWE$$_{n,m,q,\chi,V}$$ {#subspace-lwe}
_Sample matrix $$\mat{A} \sample \mathcal{U}(V)$$ from a linear subspace $$V \subset \ZZ_q^n$$, secret vector $$\vec{s} \sample \ZZ_q^n$$, and $$\vec{u} \sample \ZZ_q^m$$. Let $$\vec{e} \in \ZZ^m$$ be sampled from the error distribution $$\chi$$. An adversary is asked to distinguish between the distribution_

$$ (\mat{A}, \mat{A}^{T} \cdot \vec{s} + \vec{e}) \text{ and } (\mat{A}, \vec{u}). $$

Subspace LWE (or Non-Uniform LWE with $$\eta = \mathcal{U}(V)$$) was introduced by Pietrzak in 2012 {% cite TCC:Pietrzak12 %}. Similar to Corollary 4.7 in {% cite C:BLMR13 %}, he shows that Subspace LWE is at least as hard as LWE.

## Hardness

Boneh et al. discuss the hardness of Non-Uniform LWE in Section 4 of {% cite C:BLMR13 %}. They provide a generic reduction from LWE to Non-Uniform LWE if $$\eta$$ follows a _Coset Sampleable Distribution_ in Theorem 4.3 and then they provide three examples for Coset Sampleable Distributions, namely the three ones described above. The notion of a Coset Sampleable Distribution is closely related to Preimage Sampleable Functions. Additionally, they discuss how the given reductions can adapted to the [small-secret LWE](/lwe/#small-secret-lwe) case. Further details can be found in Section 4 of {% cite C:BLMR13 %}.

## Constructions built from Non-Uniform LWE {#constructions}

- Key-Homomorphic Preimage Sampleable Function {% cite C:BLMR13 %}
- Space-efficient Public-Key Encryption {% cite SELF:Galbraith13 %}
- Attribute-Based Encryption {% cite C:ARYY23 %}

## Related Assumptions

- [Learning with Errors](/lwe/)
