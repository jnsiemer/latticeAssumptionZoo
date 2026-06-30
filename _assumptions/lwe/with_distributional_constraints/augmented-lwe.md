---
title: "Augmented LWE"
seo_title: "Augmented LWE"
family: "LWE"
subfamily: "LWE with Distributional Constraints"
graph_id: "Augmented-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-28
redirect_from:
  - /augmented_lwe/
  - /augmentedlwe/
---

Augmented LWE was introduced by Bansarkhani, Dagdelen, and Buchmann in 2015 {% cite FC:BanDagBuc15 %}. It augments the error-term of LWE with information about a message $$\vec{m}$$ given as input.

## Definition

### Augmented LWE$$_{n,m_1,m_2,q,s}$$ {#augmented-lwe}
_Let $$k=\log q$$, $$m = m_1 + m_2$$ where $$k | m_2$$ and $$H: \ZZ_q^n \times \ZZ_q^{m_1} \rightarrow \set{0,1}^{m_2}$$ be a function. On input $$\vec{m} \in \set{0,1}^{m_2}$$, sample $$\mat{A} \sample \ZZ_q^{n \times m}$$, $$\vec{s} \sample \ZZ_q^n$$, and $$\vec{e}_1 \sample D_{\ZZ^m, s}$$. Define $$\vec{v} = \mathsf{encode}(H(\vec{s}, \vec{e}_1) \oplus \vec{m}) \in \ZZ_q^{m_2/k}$$ and sample $$\vec{e}_2 \sample D_{\Lambda_q^{\vec{v}}(\mat{G}), s}$$. Define $$\vec{e} = (\vec{e}_1, \vec{e}_2)$$. An adversary is asked to distinguish between samples from the distribution_

$$ (\mat{A}, \vec{s}^T \mat{A} + \vec{e}^T) \text{ and } \mathcal{U}\left( \ZZ_q^{n \times m} \times \ZZ_q^{1\times m} \right). $$

We provide the decisional definition of Augmented LWE. Due to the introduction of a message $$\vec{m}$$, the authors {% cite FC:BanDagBuc15 %} provide a decisional, a search-secret, and a search-message version, where $$\vec{m} \sample \set{0,1}^{m_2}$$.

## Hardness

Theorem 1 and Theorem 2 of {% cite FC:BanDagBuc15 %} state that Augmented LWE$$_{n,m_1,m_2,q,s}$$ is at least as hard as LWE$$_{n,m,q,D_{\ZZ,s}}$$ if $$H$$ is a random oracle and $$s \geq \eta_\epsilon(\Lambda_q^\perp(\mat{G}))$$ for $$\epsilon = \negl{\lambda}$$.

## Constructions built from Augmented LWE {#constructions}

- Public-Key Encryption {% cite FC:BanDagBuc15 %}{% cite FC:Bansarkhani19 %}
- Private Stream Aggregation {% cite NDSS:BecGuaZim18 %}{% cite SCN:OttKoc24 %}
- Private Weighted Sum Aggregation {% cite TCNS:AlePap22 %}

## Related Assumptions

- [Learning with Errors](/lwe/) can be reduced to Augmented LWE.
