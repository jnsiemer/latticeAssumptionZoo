---
title: "Leaky Learning with Errors"
seo_title: "Leaky-LWE"
family: "LWE"
subfamily: "LWE with Hints"
graph_id: "Leaky-LWE"
assumption_status: "standard"

last_modified_at: 2026-04-29
redirect_from:
  - /leakylwe/
  - /leaky-lwe/
  - /leakymlwe/
  - /leakylwe/
---

Following new works on relaxed versions of [LWE](/lwe/), Lai, Swarnakar, and Woo in {% cite CiC:LaiSwaWoo25 %} introduced the Leaky-LWE assumption with the idea of generalising the classical [LWE](/lwe/) assumption with additional linear information over the secret and/or the error with fewer restrictions than the standard [Hint-MLWE](/hint-mlwe/) and the [Error-Leakage](/hint-mlwe/#). This Leaky-LWE definition encompasses both the previous assumptions.


## Definition

### (Decision) Leaky-MLWE$^{\ell,\chi\_\mathbf{y}, \Gamma}_{n,m,q,\chi\_\mathbf{s},\chi\_\mathbf{e},\mathcal{R}}$

We recall the standard [MLWE](/lwe/#module-lwe_nmqchimathcalr) parameters $n, m, q> 0$ with a distribution $\chi$ over $\mathcal{R}^{m+n}$. 
We consider $\ell > 0$ hints each with an associated distribution $\chi\_\mathbf{y}$ over $\\mathcal{R}^{m+n}$ and a set of hint-matrices $\Gamma := \\{ \mat{H} = (\mat{H}\_\mathbf{s},\mat{H}\_\mathbf{e}) \in \mathcal{R}^{\ell \times  n} \times \mathcal{R}^{\ell \times  m}: \\|\mat{H}^\top \mat{H}\\| \leq \beta\\}$.

Consider the original [MLWE](/lwe/#module-lwe_nmqchimathcalr) construction for a random matrix $\mat{A} \leftarrow \mathcal{U}(\mathcal{R}_q^{m\times n})$ and $\mathbf{r} := \begin{bmatrix}\mathbf{s} \\\\ \mathbf{e}\end{bmatrix}$ where $\mathbf{s} \leftarrow \chi\_\mathbf{s}$ and $\mathbf{e} \leftarrow \chi\_\mathbf{e}$. An adversary can select $\ell$ hint-matrices $\mat{H}_i$ knowing $ \mat{A}$, in order to generate $\ell$ hints as $\mathbf{z}_i = \mat{H}_i \mathbf{r} + \mathbf{y}_i$, where $\mathbf{y}_i\leftarrow \chi\_\mathbf{y}$. 

Finally, the adversary is asked to distinguish between the LWE distribution $(\mat{A}, \vec{b} = \mat{A}\vec{s} + \vec{e} \bmod q)$ and a uniformly random distribution over $\mathcal{R}\_q^{m \times n} \times \mathcal{R}\_q^m$ given $\ell$ honest hints $\mat{z}\_i$ and the involved hint-matrices $\mat{H}_i$.

<!-- ## Variants -->

## Hardness

The hardness of Leaky-MLWE was proven by the initial authors for two parameters regimes encompassing both [Hint-MLWE](/hint-mlwe/) and [Error-Leakage](/hint-mlwe/#). Their proofs are more permissive and enable the choice of better parameters.  

We analyse the two regimes for Leaky-MLWE$^{\ell,\chi\_\mathbf{y}, \Gamma}\_{n,m,q,\chi\_\mathbf{s},\chi\_\mathbf{e},\mathcal{R}}$ that have been proven secure in {% cite CiC:LaiSwaWoo25 %}.

#### Condition 1: Leakage over the secret and the error{#condition-1}

- For Leaky-LWE, three positive definite matrices $\mat{\Sigma\_\mathbf{y}} \in \mathbb{R}^{d\ell \times d\ell},\mat{\Sigma\_\mathbf{s}} \in \mathbb{R}^{dn \times dn},\mat{\Sigma\_\mathbf{e}} \in \mathbb{R}^{dm \times dm},$
- and distributions $\chi\_\mathbf{y} = \mathcal{D}\_{\mathcal{R}^\ell, \sqrt{\mat{\Sigma\_\mathbf{y}}}}, \chi\_\mathbf{s}= \mathcal{D}\_{\mathcal{R}^n, \sqrt{\mat{\Sigma\_\mathbf{s}}}}, \chi\_\mathbf{e}= \mathcal{D}\_{\mathcal{R}^m, \sqrt{\mat{\Sigma\_\mathbf{e}}}},$
- For the LWE assumption reduced from, two positive definite matrices $\mat{\Sigma'\_\mathbf{s}} \in \mathbb{R}^{dn \times dn},\mat{\Sigma'\_\mathbf{e}} \in \mathbb{R}^{dm \times dm},$
- and distributions $\chi'\_\mathbf{s}= \mathcal{D}\_{\mathcal{R}^n, \sqrt{\mat{\Sigma'\_\mathbf{s}}}}, \chi'\_\mathbf{e}= \mathcal{D}\_{\mathcal{R}^m, \sqrt{\mat{\Sigma'\_\mathbf{e}}}}$
- $s\_\\textsf{min}\\left(\begin{bmatrix}\mat{\Sigma'\_\mathbf{s}} & \mat{0} \\\\ \mat{0} & \mat{\Sigma'\_\mathbf{e}} \end{bmatrix}\\right) \geq 2 \eta\_\varepsilon(\mathcal{R}^{n+m})^2,$
- $\Gamma := \\{ \mat{H} = (\mat{H}\_\mathbf{s},\mat{H}\_\mathbf{e}) \in \mathcal{R}^{\ell \times  n} \times \mathcal{R}^{\ell \times  m}: \\|\mat{H}^\top \mat{H}\\| \leq \beta\\}$ where $\beta = s\_\\textsf{min}\\left(\mat{\Sigma\_y}\\right)\\left(2 \eta\_\varepsilon(\mathcal{R}^{n+m})^2 + s\_\\textsf{max}\\left(\begin{bmatrix}\mat{\Sigma'\_\mathbf{s}} & \mat{0} \\\\ \mat{0} & \mat{\Sigma'\_\mathbf{e}} \end{bmatrix}\\right)^{-1} - s\_\\textsf{min}\\left(\begin{bmatrix}\mat{\Sigma\_\mathbf{s}} & \mat{0} \\\\ \mat{0} & \mat{\Sigma\_\mathbf{e}} \end{bmatrix}\\right)^{-1}\\right).$

#### Condition 2: Leakage over the error {#condition-2} 

- In this setup, $\chi_\mathbf{s} = \chi_\mathbf{s'}$ is any distribution over $\mathcal{R}^n,$
- For Leaky-LWE, three positive definite matrices $\mat{\Sigma\_\mathbf{y}} \in \mathbb{R}^{d\ell \times d\ell},\mat{\Sigma\_\mathbf{e}} \in \mathbb{R}^{dm \times dm},$
- and distributions $\chi\_\mathbf{y} = \mathcal{D}\_{\mathcal{R}^\ell, \sqrt{\mat{\Sigma\_\mathbf{y}}}}, \chi\_\mathbf{e}= \mathcal{D}\_{\mathcal{R}^m, \sqrt{\mat{\Sigma\_\mathbf{e}}}},$
- For the LWE assumption reduced from, two positive definite matrices $\mat{\Sigma'\_\mathbf{e}} \in \mathbb{R}^{dm \times dm},$
- and a distribution $\chi'\_\mathbf{e}= \mathcal{D}\_{\mathcal{R}^m, \sqrt{\mat{\Sigma'\_\mathbf{e}}}}$
- $s\_\\textsf{min}\\left(\begin{bmatrix}\mat{\Sigma'\_\mathbf{s}} & \mat{0} \\\\ \mat{0} & \mat{\Sigma'\_\mathbf{e}} \end{bmatrix}\\right) \geq 2 \eta\_\varepsilon(\mathcal{R}^{n+m})^2,$
- $\Gamma := \\{ \mat{H} = (\cdot,\mat{H}\_\mathbf{e}) \in \emptyset \times \mathcal{R}^{\ell \times  m}: \\|\mat{H}^\top \mat{H}\\| \leq \beta\\}$ where $\beta = s\_\\textsf{min}\\left(\mat{\Sigma\_y}\\right)\\left(2 \eta\_\varepsilon(\mathcal{R}^{n+m})^2 + s\_\\textsf{max}\\left(\mat{\Sigma'\_\mathbf{e}}\\right)^{-1} - s\_\\textsf{min}\\left(\mat{\Sigma\_\mathbf{e}}\\right)^{-1}\\right).$

There is a reduction from MLWE$\_{n,m,q,\chi\_\mathbf{s'},\chi\_\mathbf{e'},\mathcal{R}}$ to Leaky-MLWE$^{\ell,\chi\_\mathbf{y}, \Gamma}\_{n,m,q,\chi\_\mathbf{s},\chi\_\mathbf{e},\mathcal{R}}$ if the parameters satisfy any of the conditions above

*The idea follows the original proof from [Hint-MLWE](/hint-mlwe/) with an additional analysis about the statistical closeness of the constructed hints. The proof also differs in that it is a direct reduction from LWE rather than the Normal Form of LWE.*

<!-- ## Constructions built from Leaky-MLWE -->

## Related Assumptions

- As presented before, [Hint-MLWE](/hint-mlwe/) is a special instance of LeakyLWE: $\\textsf{Hint-MLWE}^\{\ell,(\chi\_\mathbf{y})\_{i \in [\ell]}, \mathcal{U}(\mathcal{\Gamma})\}\_\{n,m,q,\chi^{n+m}\} := \\textsf{Leaky-MLWE}^{\ell,\chi\_\mathbf{y}, \mathcal{\Gamma}}_{n,m,q,\chi^n,\chi^m}$. ([condition 1](#condition-1))

<!-- ## Further Reading Suggestions (Optional)

If there are any specific sections in papers, lecture notes, or well-written websites, which provide more insights on this assumption or immediately related topics, can be listed here, e.g.
- [Lecture notes](https://people.csail.mit.edu/vinodv/CS294/){:target="_blank"} by Vinod Vaikuntanathan
  - Lecture 3 on _Smoothing Parameter and Worst-case to Average-case Reduction for SIS_
  - Lecture 10 on _Ideal Lattices and Ring Learning with Errors_ -->
