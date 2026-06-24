---
title: "Partial Vandermonde SIS (PV-SIS)"
seo_title: "Partial Vandermonde SIS"
family: "SIS"
subfamily: "Structured SIS"
graph_id: "PV-SIS"

last_modified_at: 2026-06-24
redirect_from:
  - /pv_sis/
  - /pvsis/
  - /partial-vandermonde-sis/
  - /partial_vandermonde_sis/
  - /partialvandermondesis/
---

Partial Vandermonde SIS (PV-SIS) was proposed by Hoffstein, Pipher, Schanck, Silverman, and Whyte in 2014 under the name _Vandermonde SIS_ {% cite ACNS:HPSSW14 %}. The problem is a homogeneous version of the Partial Vandermonde Knapsack problem (also referred to as _Partial Fourier Recovery Problem_) {% cite ACNS:HPSSW14 %}{% cite ACISP:LuZhaAu18 %}{% cite DCC:BouSakSte22 %}.

## Definition

Before we can define PV-SIS, we need to define some preliminaries.

### Partial Vandermonde Transform$$_{n,q,\nu}$$
_Let $$\set{\omega_j}_{j \in [n]}$$ be the set of primitive $$\nu$$-th roots of unity in $$\ZZ_q$$. We divide the set $$\set{\omega_j}_{j \in [n]}$$ into two disjoint subsets $$\Omega$$ and $$\Omega^c$$ of size $$\abs{\Omega} = t$$ and $$\abs{\Omega^c} = n - t$$. The partial Vandermonde transform matrix $$\bar{\mat{V}}_\Omega \in \ZZ_q^{t \times n}$$ and its complement $$\bar{\mat{V}}_{\Omega^c} \in \ZZ_q^{(n-t) \times n}$$ are given by_

$$ \bar{\mat{V}}_\Omega = 
\begin{bmatrix}
  1 &\omega_{i_1} &\dots &\omega_{i_1}^{n-1} \\
  \vdots &\vdots & &\vdots \\
  1 &\omega_{i_t} &\dots &\omega_{i_t}^{n-1} \\
\end{bmatrix} \text{ and } \bar{\mat{V}}_{\Omega^c} = 
\begin{bmatrix}
  1 &\omega_{i_{t+1}} &\dots &\omega_{i_{t+1}}^{n-1} \\
  \vdots &\vdots & &\vdots \\
  1 &\omega_{i_n} &\dots &\omega_{i_n}^{n-1} \\
\end{bmatrix},
$$

_where $$\omega_{i_j} \in \Omega$$ for $$j \in [t]$$ and $$\omega_{i_{t+k}} \in \Omega^c$$ for $$k \in [n-t]$$._

Define the set $$\mathcal{P}_t := \set{\Omega \subset \set{\omega_j}_{j \in [n]} : \abs{\Omega} = t}$$ of all subsets of primitive $$\nu$$-th roots of unity in $$\ZZ_q$$ of size $$t$$.

### PV-SIS$$_{n,q,\beta,\nu,t}$$ {#pv-sis}
_Sample $$\Omega \sample \mathcal{U}(\mathcal{P}_t)$$. Given $$\bar{\mat{V}}_\Omega$$, an adversary is asked to find a short non-zero vector $$\vec{a} \in \ZZ_q^n$$ s.t._

$$ \bar{\mat{V}}_\Omega \cdot \vec{a} = \vec{0} \land 0 < \norm{a}_2 \leq \beta. $$

## Variants

### PNTT-PSIS$$_{n,q,\beta,\nu,t}$$ {#pntt-psis}
_Sample $$\Omega \sample \mathcal{U}(\mathcal{P}_t)$$ and $$\vec{b} \sample \mathcal{R}_q$$. Given $$\bar{\mat{V}}_\Omega$$, an adversary is asked to find $$(\vec{z}_1,\vec{z}_2) \in \mathcal{R}$$ s.t._

$$ \bar{\mat{V}}_\Omega \cdot \left( \vec{z}_1 + \vec{b} \cdot \vec{z}_2 \right) = \vec{0} \land 0 < \norm{(\vec{z}_1, \vec{z}_2)}_2 \leq \beta, $$

_where $$\vec{z}_1 + \vec{b} \cdot \vec{z}_2 = \vec{0} \bmod \mathcal{I}_{\Omega,q}$$ with $$\mathcal{I}_{\Omega, q} = \prod_{\omega_j \in \Omega} \langle q, x-\omega_j \rangle$$._

Partial-NTT Polynomial-SIS (PNTT-PSIS) is a relaxation of [Ring-SIS](/sis/#ring-sis) (known as Polynomial-SIS), which instead of requiring $$\vec{z}_1 + \vec{b} \cdot \vec{z}_2$$ to be $$\vec{0}$$ in $$\mathcal{R}_q$$, it only requires $$t$$ out of $$n$$ NTT coefficients to be zero. According to Lemma 9 of {% cite DCC:BouSakSte22 %}, PNTT-PSIS is hard if PV-SIS and [NTRU](/ntru/) are hard.

## Hardness

Lemma 8 of {% cite DCC:BouSakSte22 %} states that PV-SIS is at least as hard as [PV-LWE](/pv-lwe/).

As a specialisation of the Partial Vandermonde Knapsack problem (w.r.t. the Euclidean norm), PV-SIS can at most be as hard as PV-Knapsack. 
However, Boudgoust, Gachon, and Pellet-Mary {% cite C:BouGacPel22 %} present an efficient distinguisher for some proposed sets of parameters and a polynomial-time distinguisher for the decisional PV-Knapsack problem, which works for random instances of $$\Omega$$ with non-negligible probability. Further, they reduce the bit-security of parameter sets drastically. Subsequent work {% cite EC:DasJou24 %} provides a key recovery attack, i.e. a polynomial-time algorithm to find $$\vec{a}$$, for a non-negligible (but efficiently identifiable) number of weak keys.

## Constructions built from PV-SIS {#constructions}

- Signatures {% cite ACNS:HPSSW14 %}{% cite ACISP:LuZhaAu18 %}
- Aggregate Signature {% cite EPRINT:DHSS20 %}

## Related Assumptions

- Partial Vandermonde Knapsack (also known as _Partial Fourier Recovery Problem_) {% cite ACNS:HPSSW14 %}{% cite ACISP:LuZhaAu18 %} is the inhomogeneous version of PV-SIS.
- [Partial Vandermonde LWE](/pv-lwe/) is the LWE version of PV-SIS.
