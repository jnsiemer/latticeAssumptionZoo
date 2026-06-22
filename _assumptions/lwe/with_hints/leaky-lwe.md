---
title: "Leaky LWE"
seo_title: "Leaky LWE"
family: "LWE"
subfamily: "LWE with Hints"
graph_id: "Leaky-LWE"
assumption_status: "implied"

last_modified_at: 2026-04-30
redirect_from:
  - /leakylwe/
  - /leaky-lwe/
  - /leakymlwe/
  - /leakylwe/
---

Following new works on relaxed versions of [LWE](/lwe/), Lai, Swarnakar, and Woo introduced the Leaky LWE assumption in 2025 {% cite CiC:LaiSwaWoo25 %}. This assumption follows the idea of generalising the classical [LWE](/lwe/) assumption with additional linear information over the secret and/or the error with fewer restrictions than the standard [Hint-MLWE](/hint-mlwe/) and the [Error-Leakage LWE](/ellwe/) assumptions. This Leaky LWE definition encompasses both the previous assumptions.

The key points of Leaky LWE compared to the previous assumptions is that it only requires the leaked variables to follow discrete Gaussian distributions rather than both, together with giving the ability to the adversary to choose the hint-matrices.

## Definition

### Leaky MLWE$$_{n,m,q,\chi_{\mathbf{s}},\chi_\mathbf{e},\mathcal{R}}^{\ell,\chi_{\mathbf{y}}, \Gamma}$$ {#leaky-mlwe}
_Consider $$\ell > 0$$ hints each with an associated distribution $$\chi_\mathbf{y}$$ over $$\mathcal{R}^{m+n}$$ and a set of hint-matrices $$\Gamma := \{ \mat{H} = (\mat{H}_\mathbf{s},\mat{H}_\mathbf{e}) \in \mathcal{R}^{\ell \times  n} \times \mathcal{R}^{\ell \times  m}: \|\mat{H}^\top \mat{H}\| \leq \beta\}$$._

_Consider the original [M-LWE](/lwe/#module-lwe) construction for a random matrix $$\mat{A} \leftarrow \mathcal{U}(\mathcal{R}_q^{m\times n})$$ and $$\mathbf{r} := \begin{bmatrix}\mathbf{s} \\ \mathbf{e}\end{bmatrix}$$ where $$\mathbf{s} \leftarrow \chi_\mathbf{s}$$ and $$\mathbf{e} \leftarrow \chi_\mathbf{e}$$. An adversary can select $$\ell$$ hint-matrices $$\mat{H}_i$$ knowing $$ \mat{A}$$, in order to generate $$\ell$$ hints as $$\mathbf{z}_i = \mat{H}_i \mathbf{r} + \mathbf{y}_i$$, where $$\mathbf{y}_i\leftarrow \chi_\mathbf{y}$$._

_Finally, the adversary is asked to distinguish between the LWE distribution $$(\mat{A}, \vec{b} = \mat{A}\vec{s} + \vec{e} \bmod q)$$ and a uniformly random distribution over $$\mathcal{R}_q^{m \times n} \times \mathcal{R}_q^m$$ given $$\ell$$ honest hints $$\mat{z}_i$$ and the involved hint-matrices $$\mat{H}_i$$._

## Hardness

The hardness of Leaky MLWE was proven by Lai, Swarnakar, and Woo {% cite CiC:LaiSwaWoo25 %} for two parameter regimes encompassing both [Hint-MLWE](/hint-mlwe/) and [Error-Leakage LWE](/ellwe/). Their proofs are more permissive and enable the choice of better parameters.

More concretely, there is a reduction from MLWE$$_{n,m,q,\chi_\mathbf{s'},\chi_\mathbf{e'},\mathcal{R}}$$ to Leaky MLWE$$^{\ell,\chi_\mathbf{y}, \Gamma}_{n,m,q,\chi_\mathbf{s},\chi_\mathbf{e},\mathcal{R}}$$ if the parameters satisfy any of the conditions below.

#### Condition 1: Leakage over the secret and the error {#condition-1}

This condition encompasses linear leakages over both the LWE secret $$\vec{s}$$ and the LWE error $$\vec{e}$$. In this setup, any distribution has to be discrete Gaussian but they can be distinct and non-spherical.

<!-- - For Leaky-LWE, three positive definite matrices $$\mat{\Sigma_\mathbf{y}} \in \mathbb{R}^{d\ell \times d\ell},\mat{\Sigma_\mathbf{s}} \in \mathbb{R}^{dn \times dn},\mat{\Sigma_\mathbf{e}} \in \mathbb{R}^{dm \times dm},$$
- and distributions $$\chi_\mathbf{y} = \mathcal{D}_{\mathcal{R}^\ell, \sqrt{\mat{\Sigma_\mathbf{y}}}}, \chi_\mathbf{s}= \mathcal{D}_{\mathcal{R}^n, \sqrt{\mat{\Sigma_\mathbf{s}}}}, \chi_\mathbf{e}= \mathcal{D}_{\mathcal{R}^m, \sqrt{\mat{\Sigma_\mathbf{e}}}},$$
- For the LWE assumption reduced from, two positive definite matrices $$\mat{\Sigma'_\mathbf{s}} \in \mathbb{R}^{dn \times dn},\mat{\Sigma'_\mathbf{e}} \in \mathbb{R}^{dm \times dm},$$
- and distributions $$\chi'_\mathbf{s}= \mathcal{D}_{\mathcal{R}^n, \sqrt{\mat{\Sigma'_\mathbf{s}}}}, \chi'_\mathbf{e}= \mathcal{D}_{\mathcal{R}^m, \sqrt{\mat{\Sigma'_\mathbf{e}}}}$$
- $$s_\textsf{min}\left(\begin{bmatrix}\mat{\Sigma'_\mathbf{s}} & \mat{0} \\ \mat{0} & \mat{\Sigma'_\mathbf{e}} \end{bmatrix}\right) \geq 2 \eta_\varepsilon(\mathcal{R}^{n+m})^2$$,
- $$\Gamma := \{ \mat{H} = (\mat{H}_\mathbf{s},\mat{H}_\mathbf{e}) \in \mathcal{R}^{\ell \times  n} \times \mathcal{R}^{\ell \times  m}: \|\mat{H}^\top \mat{H}\| \leq \beta\}$$ where $$\beta = s_\textsf{min}\left(\mat{\Sigma_y}\right)\left(2 \eta_\varepsilon(\mathcal{R}^{n+m})^2 + s_\textsf{max}\left(\begin{bmatrix}\mat{\Sigma'_\mathbf{s}} & \mat{0} \\ \mat{0} & \mat{\Sigma'_\mathbf{e}} \end{bmatrix}\right)^{-1} - s_\textsf{min}\left(\begin{bmatrix}\mat{\Sigma_\mathbf{s}} & \mat{0} \\ \mat{0} & \mat{\Sigma_\mathbf{e}} \end{bmatrix}\right)^{-1}\right).$$ -->

#### Condition 2: Leakage over the error {#condition-2} 

If the leakage is only revealing information over the LWE error $$\vec{e}$$, then the reduction requires the secret distributions to be discrete Gaussian and spherical. The distributions $$\chi_\mathbf{e},\chi_\mathbf{e'}$$, and the noise $$\chi_\mathbf{y}$$ can follow (distinct) non-spherical discrete Gaussians.

<!-- - In this setup, $$\chi_\mathbf{s} = \chi_\mathbf{s'}$$ is any distribution over $$\mathcal{R}^n,$$
- For Leaky-LWE, three positive definite matrices $$\mat{\Sigma_\mathbf{y}} \in \mathbb{R}^{d\ell \times d\ell},\mat{\Sigma_\mathbf{e}} \in \mathbb{R}^{dm \times dm},$$
- and distributions $$\chi_\mathbf{y} = \mathcal{D}_{\mathcal{R}^\ell, \sqrt{\mat{\Sigma_\mathbf{y}}}}, \chi_\mathbf{e}= \mathcal{D}_{\mathcal{R}^m, \sqrt{\mat{\Sigma_\mathbf{e}}}},$$
- For the LWE assumption reduced from, two positive definite matrices $$\mat{\Sigma'_\mathbf{e}} \in \mathbb{R}^{dm \times dm},$$
- and a distribution $$\chi'_\mathbf{e}= \mathcal{D}_{\mathcal{R}^m, \sqrt{\mat{\Sigma'_\mathbf{e}}}}$$
- $$s_\textsf{min}\left(\begin{bmatrix}\mat{\Sigma'_\mathbf{s}} & \mat{0} \\ \mat{0} & \mat{\Sigma'_\mathbf{e}} \end{bmatrix}\right) \geq 2 \eta_\varepsilon(\mathcal{R}^{n+m})^2$$,
- $$\Gamma := \{ \mat{H} = (\cdot,\mat{H}_\mathbf{e}) \in \emptyset \times \mathcal{R}^{\ell \times  m}: \|\mat{H}^\top \mat{H}\| \leq \beta\}$$ where $$\beta = s_\textsf{min}\left(\mat{\Sigma_y}\right)\left(2 \eta_\varepsilon(\mathcal{R}^{n+m})^2 + s_\textsf{max}\left(\mat{\Sigma'_\mathbf{e}}\right)^{-1} - s_\textsf{min}\left(\mat{\Sigma_\mathbf{e}}\right)^{-1}\right).$$ -->

The value of the bound $$\beta$$ depends on the chosen standard deviations. Please find further details in Section 4.1 of {% cite CiC:LaiSwaWoo25 %}.

The idea of the proofs follows the original proof from [Hint-MLWE](/hint-mlwe/) with an additional analysis of the statistical closeness of the constructed hints. The proof also differs in that it is a direct reduction from [M-LWE](/lwe/#module-lwe) rather than small secret M-LWE.

## Constructions built from Leaky MLWE {#constructions}

- Threshold PKE {% cite AC:CinLaiWoo25 %}
- Registration-Based Encryption {% cite EPRINT:2026/717 %}

## Related Assumptions

- [Hint-MLWE](/hint-mlwe/) is a specialised instance of Leaky LWE, i.e. $$\textsf{Hint-MLWE}^{\ell,(\chi_\mathbf{y})_{i \in [\ell]}, \mathcal{U}(\mathcal{\Gamma})}_{n,m,q,\chi^{n+m}} := \textsf{Leaky-MLWE}^{\ell,\chi_\mathbf{y}, \mathcal{\Gamma}}_{n,m,q,\chi^n,\chi^m}$$ according to [Condition 1](#condition-1).
- [Error-Leakage LWE](/ellwe/) is a specialised instance Leaky LWE (in the [Condition 2](#condition-2) regime), which only allow error leakages.
