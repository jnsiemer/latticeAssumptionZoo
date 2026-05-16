---
title: $$\ell$$-succinct LWE
seo_title: "l-succinct LWE"
family: "LWE"
subfamily: "LWE with External Information"
graph_id: "l-succinct-LWE"

last_modified_at: 2026-04-30
redirect_from:
  - /lsuccinctlwe/
  - /l_succinct_lwe/
---

$$\ell$$-succinct LWE was introduced in 2024 by Wee {% cite C:Wee24 %} dual to [$$\ell$$-succinct SIS](/l-succinct-sis/) and inspired by [BASIS$$_\text{struct}$$](/basis/#BASIS_struct).
So far, the assumption has been utilised to build Distributed Broadcast Encryption and Registered ABE schemes.

## Definition

### $$\ell$$-succinct LWE$$_{n,m,\hat{m},q,\chi,\sigma}$$ {#l-succinct-lwe}
_Let matrices $$\mat{A} \in \ZZ_q^{n \times m}$$ and $$\mat{W} \in \ZZ_q^{\ell n \times \hat{m}}$$ as well as vectors $$\vec{s} \in \ZZ_q^n$$ and $$\vec{c} \in \ZZ_q^m$$ be chosen uniformly at random. Sample $$\vec{e} \sample D_{\ZZ, \chi}^m$$ discrete Gaussian and define $$\mat{B} := \begin{bmatrix} \mat{I}_\ell \otimes \mat{A} &\mat{W} \end{bmatrix}$$ to generate a short trapdoor $$\mat{T} \gets \mat{B}_\sigma^{-1}(\mat{I}_\ell \otimes \mat{G}_n)$$. An adversary is asked to distinguish between the distributions_

$$ (\mat{A}, \vec{s} \cdot \mat{A} + \vec{e}, \mat{W}, \mat{T}) \text{ and } (\mat{A}, \vec{c}, \mat{W}, \mat{T}). $$

Intuitively, the assumption states that [Decision LWE](/lwe/#decision-lwe) is hard even if the adversary has access to a trapdoor $$\mat{T}$$ for matrix $$\mat{B}$$, which is related to the LWE challenge matrix $$\mat{A}$$.

## Hardness
Wee proved that $$\ell$$-succinct LWE is at least as hard as [public-coin evasive LWE](/TODO/) in Lemma 3 of {% cite C:Wee24 %}.

Trivially, LWE implies $$\ell$$-succinct LWE$$_{n, m, \ell m, q, \chi, \poly{\lambda, \ell, m}}$$ and 1-succinct LWE by following the trapdoor delegation approach {% cite EC:CHKP10 %} and sampling $$\mat{W}$$ along with a trapdoor to derive a trapdoor for $$\mat{B}$$.

## Constructions built from $$\ell$$-succinct LWE {#constructions}

- Distributed Broadcast Encryption {% cite TCC:ChaWu24 %}{% cite C:WeeWu25 %}
- Registered Attribute-Based Encryption {% cite C:WeeWu25 %}

## Related Assumptions

- [$$\ell$$-succinct SIS](/l-succinct-sis/) is the SIS version of $$\ell$$-succinct LWE.
- [Public-coin evasive LWE](/TODO/) implies $$\ell$$-succinct LWE.
- [BASIS$$_\text{struct}$$](/basis/#BASIS_struct) inspired $$\ell$$-succinct LWE.
