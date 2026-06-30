---
title: "Fixed-Matrix Shifted LWE"
seo_title: "Fixed-Matrix Shifted LWE"
family: "LWE"
subfamily: "LWE with Leakage"
graph_id: "FMS-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-30
redirect_from:
  - /fixed-matrix-shifted-lwe/
  - /fixed_matrix_shifted_lwe/
  - /fixedmatrixshiftedlwe/
  - /fms_lwe/
  - /fmslwe/
---

Fixed-Matrix Shifted LWE (FMS-LWE) was introduced by Micciancio and Suhl in 2024 {% cite CiC:MicSuh24 %}. It fixes a square matrix $$\mat{A} \in \ZZ_q^{n \times n}$$ and provides samples from the distribution $$\vec{s}\mat{A} + \vec{e}$$ with secret and error term sampled from shifted centers $$\vec{c}$$ and $$\vec{d}$$, which are provided to the adversary.

## Definition

### Fixed-Matrix Shifted LWE$$_{n,q,\sigma,\Phi}$$ {#fms-lwe}
_Let $$\Phi$$ be a distribution over $$\ZZ^n$$. Fix a matrix $$\mat{A} \sample \ZZ_q^{n \times n}$$ and sample $$\vec{c},\vec{d} \sample \Phi$$, $$\vec{s} \sample D_{\ZZ^n, \vec{c},\sigma}$$, and $$\vec{e} \sample D_{\ZZ^n, \vec{d},\sigma}$$. Given the matrix $$\mat{A}$$, an adversary is asked to distinguish between samples from the distribution_

$$ (\vec{s} \mat{A} + \vec{e}, \vec{c}, \vec{d}) \text{ and } \left( \mathcal{U}\left(\ZZ_q^n\right), \vec{c}, \vec{d} \right). $$

## Hardness

Micciancio and Suhl {% cite CiC:MicSuh24 %} provisionally define _Matrix LWE_ as FMS-LWE specialised to $$\vec{s}$$ and $$\vec{e}$$ sampled from zero-centered discrete Gaussians. They claim that this variant is at least as hard as LWE by a hybrid argument and provide a reduction from Matrix LWE$$_{n,q,\sigma,\Phi}$$ to FMS-LWE$$_{n,q,\sigma,\sqrt{\sigma^2 + \eta_\epsilon(\ZZ^n)^2}}$$ in Lemma 10 of {% cite CiC:MicSuh24 %}.

## Constructions built from Fixed-Matrix Shifted LWE {#constructions}

- Public-Key Encryption {% cite CiC:MicSuh24 %}
- Threshold Public-Key Encryption {% cite CiC:MicSuh24 %}

## Related Assumptions

- [Learning with Errors](/lwe/)
