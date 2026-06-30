---
title: "Yet-Another LWE"
seo_title: "Yet-Another LWE"
family: "LWE"
subfamily: "LWE with Leakage"
graph_id: "Yet-Another-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-30
redirect_from:
  - /yet_another_lwe/
  - /yetanotherlwe/
---

Yet-Another LWE was introduced by Passelègue and Stehlé in 2024 {% cite AC:PasSte24 %}. The assumption is a natural combination of [Known-Norm LWE](/known-norm-lwe/) and [Reused-A LWE](/reused-a-lwe/).

## Definition

### Yet-Another LWE$$_{n,m,q,\sigma_1,\sigma_2,\chi}$$ {#yet-another-lwe}
_Let $$\chi$$ denote a distribution over $$\ZZ^n$$. Sample $$\mat{A} \sample \ZZ_q^{m \times n}$$, $$\vec{s} \sample \chi^n$$, $$\vec{e}_1 \sample D_{\ZZ^m, \sigma_1}$$, $$\vec{e}_2 \sample D_{\ZZ^m, \sigma_2}$$, $$\vec{u} \sample \ZZ_q^m$$, and $$\vec{h} \sample D_{\ZZ^m, \sqrt{\sigma_1^2 + \sigma_2^2}}$$. An adversary is asked to distinguish between the distribution_

$$ (\mat{A}, \mat{A}\vec{s} + \vec{e}_1, \mat{A}\vec{s} + \vec{e}_2, \norm{\vec{s}}) \text{ and } \left( \mat{A}, \vec{u}, \vec{u} + \vec{h}, \norm{\vec{s}} \right). $$

## Variants

### (Yet-Another)<sup>2</sup> LWE$$_{n,m,q,\sigma,w,B,\chi}$$ {#yet-another2-lwe}
_Let $$\chi$$ denote a distribution over $$\ZZ^n$$ and $$\Phi$$ denote the distribution $$\sum_{i=1}^w \mathcal{U}([-B,\dots,B])$$. Sample $$\mat{A} \sample \ZZ_q^{m \times n}$$, $$\vec{s} \sample \chi^n$$, $$\vec{e}_1 \sample D_{\ZZ^m, \sigma}$$, $$\vec{e}_2 \sample \Phi_{w,B}$$, $$\vec{u} \sample \ZZ_q^m$$, and $$\vec{h} \sample D_{\ZZ^m, \sigma} + \Phi_{w,B}$$. An adversary is asked to distinguish between the distribution_

$$ (\mat{A}, \mat{A}\vec{s} + \vec{e}_1, \mat{A}\vec{s} + \vec{e}_2, \norm{\vec{s}}) \text{ and } \left( \mat{A}, \vec{u}, \vec{u} + \vec{h}, \norm{\vec{s}} \right). $$

(Yet-Another)<sup>2</sup> LWE {% cite CiC:SmaWal25 %} changes the error distribution of the second LWE sample to $$\Phi = \sum_{i=1}^w \mathcal{U}([-B,\dots,B])$$. Smart and Walter argue that the attack on [Reused-A LWE](/reused-a-lwe/) for both error vectors chosen from a small uniform distribution {% cite CiC:MicSuh24 %} fails, state that the distribution of $$\Phi$$ approaches the discrete Gaussian for growing $$w$$, and conjecture the hardness of their assumption.

## Hardness

Lemma 2.6 of {% cite AC:PasSte24 %} states that Yet-Another LWE is at least as hard as [small-secret LWE](/lwe/#small-secret-lwe) if $$\chi = D_{\ZZ^n, \sigma_s}$$, $$\sigma_s \leq \poly{\lambda}$$ and $$(1/\sigma_s^2 + 1/(\sigma_i - \sigma_s)^2)^{-1/2} > \eta_\epsilon(\ZZ^m)$$ for $$i \in \set{1,2}$$ and negligible $$\epsilon$$.

## Constructions built from Yet-Another LWE {#constructions}

- Threshold Fully Homomorphic Encryption {% cite AC:PasSte24 %}

## Related Assumptions

- [Reused-A LWE](/reused-a-lwe/)
- [Known-Norm LWE](/known-norm-lwe/)
