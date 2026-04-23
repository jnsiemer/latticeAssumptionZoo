---
title: "Hint-Learning with Errors"
seo_title: "Hint-LWE"
family: "LWE"
subfamily: "LWE with Hints"
graph_id: "Hint-LWE"
assumption_status: "standard"

last_modified_at: 2026-04-22
redirect_from:
  - /hint-mlwe/
  - /hint-lwe/
  - /hintmlwe/
  - /hintlwe/
---

The Hint-LWE assumption was first introduced in 2023 by Kim, Lee, Seo and Song  {% cite C:KLSS23b %}. The assumption is defined upon the classical [LWE](/lwe/) assumption with an additional linear information over the secret and/or the error. 

## Definition

### (Decision) Hint-LWE$^{\ell,(\chi_{i})\_{i \in [\ell]}, \mathcal{\Gamma}}_{n,q,m,\chi_s,\chi_e}$

We consider the standard [LWE](/lwe/) parameters $n, m, q> 0$ with distributions $\chi\_\mathbf{s}$ over $\ZZ^n$ and $\chi\_\mathbf{e}$ over $\ZZ^m$. 
Altogether consider $\ell > 0$ hints for each with an associated distribution $\chi\_1, \dots, \chi\_\ell$ over $\ZZ^{m+n}$ and an overall distribution $\Gamma$ over $\ZZ^{(m+n) \times (m+n)}$.

Consider the original [LWE](/lwe/) construction for a random matrix $\mat{A} \leftarrow \mathcal{U}(\ZZ_q^{m\times n})$, $\mathbf{r} := \begin{bmatrix}\mathbf{s} \\\\ \mathbf{e}\end{bmatrix}$ with $\mathbf{s}\leftarrow \chi\_\mathbf{s}$ and $\mathbf{e} \leftarrow \chi\_\mathbf{e}$.
Consider $\ell$ hints as $\mathbf{z}_i = \mat{H}_i \mathbf{r} + \mathbf{y}_i$, with $\mat{H}_i \leftarrow \Gamma$ and $\mathbf{y}_i\leftarrow \chi\_i$. 

An adversary is asked to distinguish between the LWE distribution $(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e} \bmod q)$ and a uniformly random distribution over $\ZZ\_q^{m \times n} \times \ZZ\_q^m$ with knowledge of the $\ell$ honest hints $\mat{z}\_i$ and the involved hint-matrices $\mat{H}_i$.

### (Decision) Hint-RLWE$^{\ell,(\chi_{i})\_{i \in [\ell]}, \mathcal{\Gamma}}_{m,q,\chi_s,\chi_e,R}$

We consider the standard [RLWE](/lwe/#ring-lwe_mqchimathcalr) parameters $n, m, q> 0$ and $\mathcal{R}$ with distributions $\chi\_\mathbf{s}$ over $\mathcal{R}^n$ and $\chi\_\mathbf{e}$ over $\mathcal{R}^m$. 
Altogether consider $\ell > 0$ hints for each with an associated distribution $\chi\_1, \dots, \chi\_\ell$ over $\mathcal{R}^{m+n}$ and an overall distribution $\Gamma$ over $\mathcal{R}^{(m+n) \times (m+n)}$.

Consider the original [RLWE](/lwe/#ring-lwe_mqchimathcalr) construction for a random matrix $\vec{a} \leftarrow \mathcal{U}(\mathcal{R}_q^{m})$, $\mathbf{r} := \begin{bmatrix}\mathbf{s} \\\\ \mathbf{e}\end{bmatrix}$ with $\mathbf{s}\leftarrow \chi\_\mathbf{s}$ and $\mathbf{e} \leftarrow \chi\_\mathbf{e}$.
Consider $\ell$ hints as $\mathbf{z}_i = \mat{H}_i \mathbf{r} + \mathbf{y}_i$, with $\mat{H}_i \leftarrow \Gamma$ and $\mathbf{y}_i\leftarrow \chi\_i$. 

An adversary is asked to distinguish between the LWE distribution $(\mat{A}, \vec{b} = \vec{a} \cdot \vec{s} + \vec{e} \bmod q)$ and a uniformly random distribution over $\mathcal{R}\_q^{m} \times \mathcal{R}\_q^m$ with knowledge of the $\ell$ honest hints $\mat{z}\_i$ and the involved hint-matrices $\mat{H}_i$.

### (Decision) Hint-MLWE$^{\ell,(\chi_{i})\_{i \in [\ell]}, \Gamma}_{n,m,q,\chi_s,\chi_e,R}$

We consider the standard [MLWE](/lwe/#module-lwe_nmqchimathcalr) parameters $n, m, q> 0$ and $\mathcal{R}$ with distributions $\chi\_\mathbf{s}$ over $\mathcal{R}^n$ and $\chi\_\mathbf{e}$ over $\mathcal{R}^m$. 
Altogether consider $\ell > 0$ hints for each with an associated distribution $\chi\_1, \dots, \chi\_\ell$ over $\mathcal{R}^{m+n}$ and an overall distribution $\Gamma$ over $\mathcal{R}^{(m+n) \times (m+n)}$.

Consider the original [MLWE](/lwe/#module-lwe_nmqchimathcalr) construction for a random matrix $\mat{A} \leftarrow \mathcal{U}(\mathcal{R}_q^{m\times n})$, $\mathbf{r} := \begin{bmatrix}\mathbf{s} \\\\ \mathbf{e}\end{bmatrix}$ with $\mathbf{s}\leftarrow \chi\_\mathbf{s}$ and $\mathbf{e} \leftarrow \chi\_\mathbf{e}$.
Consider $\ell$ hints as $\mathbf{z}_i = \mat{H}_i \mathbf{r} + \mathbf{y}_i$, with $\mat{H}_i \leftarrow \Gamma$ and $\mathbf{y}_i\leftarrow \chi\_i$. 

An adversary is asked to distinguish between the LWE distribution $(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e} \bmod q)$ and a uniformly random distribution over $\mathcal{R}\_q^{m \times n} \times \mathcal{R}\_q^m$ with knowledge of the $\ell$ honest hints $\mat{z}\_i$ and the involved hint-matrices $\mat{H}_i$.

## Variants (Optional)



## Hardness

Originally, the initial proof was given in {% cite C:KLSS23b %} but was later modified to enlarge the possible uses by {% cite C:EspNioPre24 %}{% cite EC:PKMMPS24%}. 

[LWE](/lwe/) to Hint-MLWE when secrets and errors follow Discrete Gaussians Distribution. 

## Constructions built from Hint-MLWE

- Threshold signatures (with properties) {% cite C:EspNioPre24 %}{% cite EC:PKMMPS24%}{% cite C:KatReiTak24 %}{% cite C:PKNRT25%}
- Signature: Racoon {% cite C:PKPR24 %}, Plover {% cite EC:EENPSS24 %}
- NIZK and commit-and-prove protocols {% cite C:KLSS23b %} {% cite INDOCRYPT:DouRou25 %}
- Polynomial commitment {% cite C:HwaSeoSon24 %}
- Ratcheting KEM: Katana {% cite EC:DJKPS25 %}


## Related Assumptions (Optional)

- [LeakyLWE](/leaky-lwe/) generalises the notion of linear leakages over the secret/error couple. In their version, they also enhance the possibilites of the choice of the hints. 

<!-- ## Further Reading Suggestions (Optional)

If there are any specific sections in papers, lecture notes, or well-written websites, which provide more insights on this assumption or immediately related topics, can be listed here, e.g.
- [Lecture notes](https://people.csail.mit.edu/vinodv/CS294/){:target="_blank"} by Vinod Vaikuntanathan
  - Lecture 3 on _Smoothing Parameter and Worst-case to Average-case Reduction for SIS_
  - Lecture 10 on _Ideal Lattices and Ring Learning with Errors_ -->
