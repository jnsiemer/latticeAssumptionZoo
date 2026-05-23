---
title: "$$t$$-M-ISIS"
seo_title: "t-M-ISIS"
family: "SIS"
graph_id: "t-M-ISIS"
assumption_status: "implied"

last_modified_at: 2026-05-23
redirect_from:
  - /t-m-isis/
  - /t_m_isis/
  - /tmisis/
  - /t_misis/
---

$$t$$-Module-ISIS was introduced in 2024 by Gajland, Janneck, and Kiltz {% cite EPRINT:GajJanKil24 %}. It yields a natural extension of [Inhomogeneous SIS](/sis/#inhomogeneous-sis), which provides multiple target vectors and the adversary can choose which one it provides a preimage of.
The authors utilise the specialised NTRU-based ring-version of this $$t$$-Module-ISIS to reduce reduce to the Falcon signature scheme.

## Definition

### $$t$$-M-ISIS$$_{n,m,q,\beta,\mathcal{R}}$$ {#t-m-isis}
_Let matrix $$\mat{A} \in \mathcal{R}_q^{n \times m}$$ and a set of $$t$$ target vectors $$\mathcal{T} \subsetneq \mathcal{R}_q^n$$ be chosen uniformly at random with $$\abs{\mathcal{T}} = t$$. Given $$\mat{A}$$ and $$\mathcal{T}$$, an adversary is asked to find a short vector $$\vec{s} \in \mathcal{R}^m$$ satisfying_

$$ \mat{A} \cdot \vec{s} \in \mathcal{T} \bmod q \land \norm{\vec{s}} \leq \beta. $$

Gajland, Janneck, and Kiltz {% cite EPRINT:GajJanKil24 %} originally introduce a NTRU-based ring version of $$t$$-M-ISIS, i.e. $$n=1$$, which they denote as $$t$$-R-ISIS.

The multi-target approach roughly outlines the intuition that $$t$$-M-ISIS can at most offer a multiplicative advantage factor over ISIS. Alongside a preimage oracle, this intuition has also been captured in [One-More-ISIS](/om-isis/).

## Variants

### $$t$$-M-SPISIS$$_{n,m,q,\beta,\mathcal{R}}$$ {#t-m-spisis}
_Let matrix $$\mat{A} \in \mathcal{R}_q^{n \times m}$$ and a set of $$t$$ target vectors $$\mathcal{T} \subsetneq \mathcal{R}_q^n$$ be chosen uniformly at random with $$\abs{\mathcal{T}} = t$$ and $$\vec{s}_i \sample D_{\Lambda_q^{\vec{t}_i}(\mat{A}), \sigma}$$ for all $$\vec{t}_i \in \mathcal{T}$$. Given $$\mat{A}$$, $$\mathcal{T}$$, and $$\set{\vec{s}_i}_i$$, an adversary is asked to find a short vector $$\vec{s} \in \mathcal{R}^m$$ satisfying_

$$ \mat{A} \cdot \vec{s} \in \mathcal{T} \bmod q \land \vec{s} \notin \set{\vec{s}_i}_i \land \norm{\vec{s}} \leq \beta. $$

This variant appeals to the second-preimage resistance property of the [SIS](/sis/) hash function with multiple potential target vectors, given a single preimage for each of them. It's reduction from SIS is essentially identical to the one presented below for $$t$$-M-ISIS, simplifying the proof that the SIS solution is non-zero through the condition $$\vec{s} \notin \set{\vec{s}_i}_i$$.

Gajland, Janneck, and Kiltz {% cite EPRINT:GajJanKil24 %} originally introduce a NTRU-based ring version of $$t$$-M-SPISIS, i.e. $$n=1$$, which they denote as $$t$$-R-SPISIS.

## Hardness

[M-SIS](/sis/#module-sis)$$_{n,m,q,2\beta,\mathcal{R}}$$ can be reduced to $$t$$-M-ISIS$$_{n,m,q,\beta,\mathcal{R}}$$ by sampling $$t$$ discrete Gaussian vectors $$\vec{s}_i \sample D_{\mathcal{R}^m, s}$$. Then, the target vectors $$\vec{t}_i = \mat{A} \cdot \vec{s}_i \in \mathcal{T}$$ are dstributed statistcally close to uniform over $$\mathcal{R}_q^n$$ and the reduction algorithm can recover a M-SIS solution from any $$t$$-M-ISIS solution $$\vec{s}$$ for target vector $$j$$ by outputting $$\vec{s} - \vec{s}_j$$.

We refer to the original paper {% cite EPRINT:GajJanKil24 %} regarding statements about the hardness of $$t$$-R-ISIS based on NTRU.

## Constructions built from $$t$$-M-ISIS {#constructions}

- Signature (specifically Falcon) {% cite EPRINT:GajJanKil24 %}

## Related Assumptions

- [Inhomogeneous SIS](/sis/#inhomogeneous-sis) is the single target version of $$t$$-M-ISIS.
- [One-More-ISIS](/om-isis/) also captures the multi-target aspect alongside a preimage oracle.
