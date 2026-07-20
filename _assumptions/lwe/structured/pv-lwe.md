---
title: "Partial Vandermonde LWE (PV-LWE)"
seo_title: "Partial Vandermonde LWE"
family: "LWE"
subfamily: "Structured LWE"
graph_id: "PV-LWE"

last_modified_at: 2026-06-24
redirect_from:
  - /pv_lwe/
  - /pvlwe/
  - /partial-vandermonde-lwe/
  - /partial_vandermonde_lwe/
  - /partialvandermondelwe/
---

Partial Vandermonde LWE (PV-LWE) was proposed by Boudgoust, Sakzad, and Steinfeld in 2022 {% cite DCC:BouSakSte22 %} as an LWE alternative to the Partial Vandermonde Knapsack problem (also referred to as _Partial Fourier Recovery Problem_) {% cite ACNS:HPSSW14 %}{% cite ACISP:LuZhaAu18 %}.

## Definition

Before we can define PV-LWE, we need to define some preliminaries.

### Partial Vandermonde Transform$$_{\nu,n,q}$$
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

### PV-LWE$$_{n,q,\beta,\nu,t,\chi}$$ {#pv-lwe}
_Let $$\chi$$ be a distribution over $$\ZZ^n$$. Sample $$\Omega \sample \mathcal{U}(\mathcal{P}_t)$$, $$\vec{s} \sample \ZZ_q^t$$, $$\vec{e} \sample \chi$$, and $$\vec{u} \sample \ZZ_q^n$$. An adversary is asked to distinguish between the distribution_

$$ \left( \bar{\mat{V}}_\Omega, \bar{\mat{V}}_\Omega^T \cdot \vec{s} + \vec{e} \right) \text{ and } \left( \bar{\mat{V}}_\Omega, \vec{u} \right). $$

## Variants

### PNTT-PLWE$$_{n,q,\beta,\nu,t,\chi}$$ {#pntt-plwe}
_Let $$\chi$$ denote a distribution over $$\RR$$. Sample $$\Omega \sample \mathcal{U}(\mathcal{P}_t)$$, $$\vec{s} \sample \ZZ_q^t$$, $$\vec{b} \sample \mathcal{R}_q$$, $$\vec{e}_1, \vec{e}_2 \sample \chi^n$$, and $$\vec{y}_1, \vec{y}_2 \sample \mathcal{R}_q$$. An adverary is asked to distinguish between the distribution_

$$ \left( \bar{\mat{V}}_\Omega, \vec{b}, \bar{\mat{V}}_\Omega^T \cdot \vec{s} + \vec{e}_1, \mathsf{rot}(\vec{b}) \cdot \bar{\mat{V}}_\Omega^T \cdot \vec{s} + \vec{e}_2 \right) \text{ and } \left( \bar{\mat{V}}_\Omega, \vec{b}, \vec{y}_1, \vec{y}_2 \right). $$

Partial-NTT Polynomial-LWE (PNTT-PLWE) is a relaxed version of [Ring-LWE](/lwe/#ring-lwe) (referred to as _Polynomial LWE_ in the corresponding paper), which is dual to [PNTT-PSIS](/pv-sis/#pntt-psis). Moreover, the search version of PNTT-PLWE is at least as hard as PNTT-PSIS according to Lemma 10 of {% cite DCC:BouSakSte22 %}.

### Hybrid-PV-P$$_{n,q,\beta,\nu,t,\chi_r,\chi_e}$$ {#hybrid-pv-p}
_Let $$n$$ be a power of two and $$q$$ be a prime s.t. $$q = 1 \bmod 2n$$, defining $$\mathcal{R}_q := \ZZ_q[X] / (X^n + 1)$$. Let $$\chi_r$$, $$\chi_e$$ be distributions over $$\ZZ$$. Sample $$\Omega \sample \mathcal{U}(\mathcal{P}_t)$$, $$\vec{b} \sample \mathcal{R}_q$$, $$\vec{r} \sample \chi_r^n$$, $$\vec{e} \sample \chi_e^n$$, $$\vec{u} \sample \ZZ_q^t$$, and $$\vec{v} \sample \mathcal{R}_q$$. Define $$\tilde{\vec{r}} = (r_0, -r_{n-1}, \dots, -r_1)^T$$. An adversary is asked to distinguish between the distribution_

$$ \left( \bar{\mat{V}}_\Omega, \vec{b}, \bar{\mat{V}}_\Omega \cdot \vec{r}, \vec{b} \cdot \tilde{\vec{r}} + \vec{e} \right) \text{ and } \left( \bar{\mat{V}}_\Omega, \vec{b}, \vec{u}, \vec{v} \right). $$

Hybrid-PV-P is a combination of [Ring-LWE](/lwe/#ring-lwe) and PV-LWE, where the underlying secrets of both instances are related. According to Lemma 11 in {% cite DCC:BouSakSte22 %}, Hybrid-PV-P is at least as hard as [PNTT-PLWE](#pntt-plwe).

## Hardness

Boudgoust et al. show that PV-LWE is equivalent to the decision version of PV-Knapsack in Lemma 6 and 7 of {% cite DCC:BouSakSte22 %}.
In subsequent work, Boudgoust, Gachon, and Pellet-Mary {% cite C:BouGacPel22 %} present an efficient distinguisher for some proposed sets of parameters and a polynomial-time distinguisher for the decisional PV-Knapsack problem, which works for random instances of $$\Omega$$ with non-negligible probability. Further, they reduce the bit-security of parameter sets drastically. Further, Das and Joux {% cite EC:DasJou24 %} provide a key recovery attack for a non-negligible (but efficiently identifiable) number of weak keys.
These attacks are devestating in the case of adversarially chosen $$\Omega$$ and therefore, choosing the set $$\Omega$$ at random is crucial.

## Constructions built from PV-LWE {#constructions}

- Signatures {% cite ACNS:HPSSW14 %}{% cite ACISP:LuZhaAu18 %}
- Aggregate Signature {% cite EPRINT:DHSS20 %}
- Public-Key Encryption {% cite DCC:BouSakSte22 %}

## Related Assumptions

- Partial Vandermonde Knapsack (also known as _Partial Fourier Recovery Problem_) {% cite ACNS:HPSSW14 %}{% cite ACISP:LuZhaAu18 %} is equivalent to PV-LWE.
- [Partial Vandermonde SIS](/pv-sis/) is the SIS version of PV-LWE.
