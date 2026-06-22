---
title: "qLWE"
seo_title: "qLWE"
family: "LWE"
graph_id: "qLWE"
assumption_status: "implied"

last_modified_at: 2026-06-19
redirect_from:
  - /q-lwe/
  - /q_lwe/
---

qLWE was introduced by Hoffmann, Méaux, Rossi, and Standaert in 2025 {% cite PQCrypto:HMRS26 %} as a multi-LWE instance with potentially different error distributions. So far, this assumption is only utilised as an intermediate step to give a partial reduction from [LWE](/lwe/) to [LWE with Output Dependencies](/lwe-od/).

## Definition

### qLWE$$_{n,m,q}$$ {#qlwe}
_Let $$\vec{s} \in (\ZZ_q^n)^*$$ be a fixed secret vector and let $$\chi_0,\dots,\chi_{q-1}$$ be distributions over $$\ZZ_q$$. Sample $$\mat{A} \sample \ZZ_q^{mq \times n}$$ and $$\vec{e} \sample \left(\chi_0 \times \dots\times \chi_{q-1}\right)^m \in \ZZ_q^{mq}$$. An adversary is asked to distinguish between the distribution_

$$ \left( \mat{A}, \mat{A} \cdot \vec{s} + \vec{e} \right) \text{ and } \mathcal{U}\left( \ZZ_q^{mq \times n} \right) \times \mathcal{U}\left( \ZZ_q^{mq} \right). $$

## Hardness

Theorem 2 of {% cite PQCrypto:HMRS26 %} states that qLWE is at least as hard as LWE for $$q \in \poly{n}$$ and several conditions on the error distributions. The core idea is that qLWE is at least as hard as the LWE instance with the weakest error distribution by carefully adding error-terms to the samples.

## Constructions built from qLWE {#constructions}

As qLWE is a multi-LWE instance, i.e. this list could theoretically contain all of the constructions built from LWE. However, there were no constructions built from qLWE explicitly yet.

## Related Assumptions

- [LWE with Output Dependencies](/lwe-od/) is a reduction target for qLWE.
