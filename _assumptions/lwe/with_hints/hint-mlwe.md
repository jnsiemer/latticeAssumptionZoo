---
title: "Hint-LWE"
seo_title: "Hint-LWE"
family: "LWE"
subfamily: "LWE with Hints"
graph_id: "Hint-LWE"
assumption_status: "standard"

last_modified_at: 2026-04-29
redirect_from:
  - /hint-mlwe/
  - /hint-lwe/
  - /hintmlwe/
  - /hintlwe/
---

The assumption was first introduced by Mera, Karmakar, Marc, and Soleimanian {% cite PKC:MKMS22 %}, but only in the ring setting. Their work was later extended in 2023 by Kim, Lee, Seo, and Song {% cite C:KLSS23b %}, to formalise the well-known Hint-MLWE assumption. This assumption extends the [short secret LWE](/lwe/#short-secret-lwe) assumption (where the secret $$\mathbf{s}$$ and error $$\mathbf{e}$$ follow the same distribution) by incorporating additional linear information about the secret and/or the error.

It is important to note that this assumption has been generalised as the [Leaky-LWE](/leaky-lwe/) assumption. However, since this assumption is frequently used in practice, we provide an independent instance in this Zoo.

## Definition

We provide a description of the decisional version for each assumption.

### Hint-LWE$$^{\ell,(\chi_{i})_{i \in [\ell]}, \mathcal{\mathcal{H}}}_{n,m,q,\chi}$$ {#hint-lwe}

We recall the standard [LWE](/lwe/) parameters $$n, q, m> 0$$ with a distribution $$\chi$$ over $$\ZZ^{m+n}$$. 
We consider $$\ell > 0$$ hints each with an associated distribution $$\chi_1, \dots, \chi_\ell$$ over $$\ZZ^{m+n}$$ and a set of hint-matrices $$\mathcal{H}$$ over $$\ZZ^{(m+n) \times (m+n)}$$.

Consider the original [LWE](/lwe/) construction for a random matrix $$\mat{A} \leftarrow \mathcal{U}(\ZZ_q^{m\times n})$$ and $$\mathbf{r} := \begin{bmatrix}\mathbf{s} \\ \mathbf{e}\end{bmatrix} \leftarrow \chi$$.
We construct $$\ell$$ hints as $$\mathbf{z}_i = \mat{H}_i \mathbf{r} + \mathbf{y}_i$$, where $$\mat{H}_i \in \mathcal{H}$$ and $$\mathbf{y}_i\leftarrow \chi_i$$. 

An adversary is asked to distinguish between the LWE distribution $$(\mat{A}, \vec{b} = \mat{A}\vec{s} + \vec{e} \bmod q)$$ and a uniformly random distribution over $$\ZZ_q^{m \times n} \times \ZZ_q^m$$ given $$\ell$$ honest hints $$\mat{z}_i$$ and the involved hint-matrices $$\mat{H}_i$$.

### Hint-RLWE$$^{\ell,(\chi_{i})_{i \in [\ell]}, \mathcal{\mathcal{H}}}_{m,q,\chi,\mathcal{R}}$$ {#hint-rlwe}

We recall the standard [R-LWE](/lwe/#ring-lwe) parameters $$n, q, m> 0$$ and $$\mathcal{R}$$ with a distribution $$\chi$$ over $$\mathcal{R}^{1+m}$$.
We consider $$\ell > 0$$ hints each with an associated distribution $$\chi_1, \dots, \chi_\ell$$ over $$\mathcal{R}^{1+m}$$ and a set of hint-matrices $$\mathcal{H}$$ over $$\mathcal{R}^{(1+m) \times (1+m)}$$.

Consider the original [R-LWE](/lwe/#ring-lwe) construction for a random polynomial $$\vec{a} \leftarrow \mathcal{U}(\mathcal{R}_q^{m})$$ and $$\mathbf{r} := \begin{bmatrix}s \\ \mathbf{e}\end{bmatrix} \leftarrow \chi$$.
We construct $$\ell$$ hints as $$\mathbf{z}_i = \mat{H}_i \mathbf{r} + \mathbf{y}_i$$, where $$\mat{H}_i \in \mathcal{H}$$ and $$\mathbf{y}_i\leftarrow \chi_i$$. 

An adversary is asked to distinguish between the LWE distribution $$(\mat{a}, \vec{b} = s\cdot\vec{a} + \vec{e} \bmod q)$$ and a uniformly random distribution over $$\mathcal{R}_q^{m} \times \mathcal{R}_q^m$$ given $$\ell$$ honest hints $$\mat{z}_i$$ and the involved hint-matrices $$\mat{H}_i$$.

### Hint-MLWE$$^{\ell,(\chi_{i})_{i \in [\ell]}, \mathcal{H}}_{n,m,q,\chi,\mathcal{R}}$$ {#hint-mlwe}

We recall the standard [M-LWE](/lwe/#module-lwe) parameters $$n, q, m> 0$$ and $$\mathcal{R}$$ with a distribution $$\chi$$ over $$\mathcal{R}^{m+n}$$. 
We consider $$\ell > 0$$ hints each with an associated distribution $$\chi_1, \dots, \chi_\ell$$ over $$\mathcal{R}^{m+n}$$ and a set of hint-matrices $$\mathcal{H}$$ over $$\mathcal{R}^{(m+n) \times (m+n)}$$.

Consider the original [M-LWE](/lwe/#module-lwe) construction for a random matrix $$\mat{A} \leftarrow \mathcal{U}(\mathcal{R}_q^{m\times n})$$ and $$\mathbf{r} := \begin{bmatrix}\mathbf{s} \\ \mathbf{e}\end{bmatrix} \leftarrow \chi$$.
We construct $$\ell$$ hints as $$\mathbf{z}_i = \mat{H}_i \mathbf{r} + \mathbf{y}_i$$, where $$\mat{H}_i \in \mathcal{H}$$ and $$\mathbf{y}_i\leftarrow \chi_i$$. 

An adversary is asked to distinguish between the LWE distribution $$(\mat{A}, \vec{b} = \mat{A}\vec{s} + \vec{e} \bmod q)$$ and a uniformly random distribution over $$\mathcal{R}_q^{m \times n} \times \mathcal{R}_q^m$$ given $$\ell$$ honest hints $$\mat{z}_i$$ and the involved hint-matrices $$\mat{H}_i$$.

## Variants

### Coset-Hint-MLWE$$^{\ell,(\vec{r}_i)_{i \in [\ell]}, \sigma, \beta}_{n,m,q,\chi,\mathcal{R}}$$ {#coset-hint-mlwe}

Lapiha and Prest {% cite AC:LapPre25 %} presented this variant of Hint-MLWE, where the error of the hints are sampled from a lattice coset.

Let $$\textsf{Decomp}_\beta$$ be the signed decomposition in base $$\beta$$. They consider a special instance of Hint-MLWE$$^{\ell,(\chi_{i})_{i \in [\ell]}, \mathcal{H}_\beta}_{n,m,q,\chi,\mathcal{R}}$$ where $$\mathcal{H}_\beta := \set{ h_0 \| (h_0,h_1) \leftarrow \textsf{Decomp}_\beta(x) \text{ for } x \in \mathcal{R}_q }$$.
<!-- , elements of $$\mathcal{H}_\beta$$ are indeed bounded and a reduction to MLWE can be provided. -->

Consider the original [M-LWE](/lwe/#module-lwe) construction for a random matrix $$\mat{A} \leftarrow \mathcal{U}(\mathcal{R}_q^{m\times n})$$ and secrets
$$\begin{bmatrix}\mat{S} \\ \mat{E}\end{bmatrix} \leftarrow \chi^m$$. Let

$$\mat{R} = \begin{bmatrix}\mat{E} & \mat{I}_m \\ \mat{0} & \mat{S} \\ \mat{0} & \mat{I}_m\end{bmatrix}.$$

Let $$\mat{A}_1 = \begin{bmatrix} \mat{I}_m \| \mat{A} \| \beta\mat{I}_m - \mat{B} \end{bmatrix}$$, and sample a pseudorandom matrix $$\mat{A}_2$$ along with a $$\mat{0}$$ trapdoor $$\mat{T_{A_2}}$$ i.e. $$\mat{A_2}\mat{T_{A_2}} = \mathbf{0}$$, then construct $$\ell$$ hints of the form:

- Sample a random element $$\mathbf{u}_i$$ in $$\mathcal{R}_q^m$$ and compute $$\vec{c}_i \leftarrow \textsf{Decomp}_\beta(\vec{u}_i)$$,
- Sample $$(\vec{y}_i,\vec{x}_i) \leftarrow \mathcal{D}_{\Lambda_q^{\vec{r}_i - \mat{A}_1\mathbf{R} \mathbf{c}_i}([\mat{A}_1 \| \mathbf{A}_2]), \sigma}$$,
- Finally construct $$\mathbf{z}_i = (\mathbf{R}\vec{c}_i + \mathbf{y}_i,\vec{x}_i) $$.

An adversary is asked to distinguish between the LWE distribution $$(\mat{A}, \vec{B} = \mat{A}\vec{S} + \vec{E} \bmod q)$$ and a uniformly random distribution over $$\mathcal{R}_q^{m \times n} \times \mathcal{R}_q^{m\times m}$$ given $$\ell$$ honest hints $$\mat{z}_i$$ and the public elements involved $$\mat{A}_2, \vec{c}_i$$.

Lapiha and Prest {% cite AC:LapPre25 %} showed a reduction from Hint-MLWE$$^{\ell,(\mathcal{D}_\sigma)_{i \in [\ell]}, \mathcal{H}_\beta}_{n,m,q,\chi,\mathcal{R}}$$ to Coset-Hint-MLWE$$^{\ell,(\vec{r}_i)_{i \in [\ell]}, \sigma, \beta}_{n,m,q,\chi,\mathcal{R}}$$ which works for $$m$$ secrets. The core idea of this assumption is to sample the hint-errors from a lattice coset, depending on the hint $$\vec{c}_i$$ and the initial randomness $$\vec{u}_i$$. The definition is not generic but it may be useful for constructing advanced primitives, where the error might be dependant on the hint-matrix chosen.

## Hardness

Originally, the initial proof was given in {% cite C:KLSS23b %} but it was later modified to broaden the range of possible applications by {% cite C:EspNioPre24 %}{% cite EC:PKMMPS24%}. In this setting, we consider that the matrices $$\mat{H}_i$$ are uniformly sampled from $$\mathcal{H}$$, not chosen by the adversary. The reduction also only works for secrets and noise that follow Discrete Gaussian Distribution with judiciously chosen standard deviations. 

**Theorem** from {% cite C:EspNioPre24 %}: this also holds for [LWE](/lwe/#decision-lwe) ($$d=1$$) and [R-LWE](/lwe/#ring-lwe) ($$n=1$$).

The parameters are the same than the original [short secret MLWE](/lwe/#short-secret-lwe) assumption. We recall that $$\mathcal{R}$$ is a polynomial ring of degree $$d$$. 
Since the security relies on the distributions, we define those involved in the reduction. We restrict ourselves to positive definite matrices $$\mathbf{\Sigma}$$ and $$\mathbf{\Sigma}_i \in \mathbb{R}^{d(n+m) \times d(n+m)}$$ together with "gaussian centers" $$\mathbf{c},(\mathbf{c}_i)_{i \in [\ell]}$$. Consider that $$\beta_i = s_\textsf{max}(\mat{H}_i^\top\mat{H}_i)$$ for $$\mat{H}_i \leftarrow \mathcal{H}$$. Let $$\sigma \in \mathbb{R}^+$$ such that $$\frac{1}{\sigma^2} = 2\left(s_\textsf{max}(\mathbf{\Sigma}^{-1}) + \sum_{i\in [\ell]} \beta_is_\textsf{max}(\mathbf{\Sigma}_{i}^{-1}) \right)$$ and $$\sigma \geq \sqrt{2}\eta_\varepsilon(\ZZ^{d(n+m)})$$ for $$\varepsilon \in ]0,\frac{1}{2}]$$, then there is a PPT reduction from [short secret M-LWE](/lwe/#module-lwe)$$_{n,m,q,\mathcal{D}_\sigma,\mathcal{R}}$$ to Hint-MLWE$$^{\ell,(\mathcal{D}_{\mathbf{c}_i,\mathbf{\Sigma}_i})_{i \in [\ell]}, \mathcal{\mathcal{H}}}_{n,m,q,\mathcal{D}_{\mathbf{c},\mathbf{\Sigma}}}$$ that reduces the advantage by at most $$2\varepsilon$$.


The idea of the proof is to construct $$\ell$$ honest hints associated with a new secret $$\mathbf{s}'$$. By choosing the parameters appropriately, the set of the generated hints is close to the one generated based on the original MLWE secret $$\mathbf{s}$$ plus a "sampleable" perturbation $$\mathbf{t}$$. At the end of the reduction, upon receiving $$(\mat{A},\vec{b})$$ the challenger uses the Hint-MLWE solving algorithm on input $$(\mat{A},\vec{b} + [\mat{A} \| \mat{I}_{m-n}]\mat{t},\mathbf{H}_i,\mathbf{z}_i)$$.

## Constructions built from Hint-MLWE {#constructions}

- NIZK and commit-and-prove protocols {% cite C:KLSS23b %}{% cite INDOCRYPT:DouRou25 %},
- Signature: Racoon {% cite C:PKPR24 %}, Plover {% cite EC:EENPSS24 %},
- Threshold signatures (with additionnal properties) {% cite C:EspNioPre24 %}{% cite EC:PKMMPS24 %}{% cite C:KatReiTak24 %}{% cite C:PKNRT25 %},
- Polynomial commitment schemes {% cite C:HwaSeoSon24 %},
- KEM (with properties): Katana {% cite EC:DJKPS25 %}, {% cite AC:LapPre25 %}.


## Related Assumptions

The adaptive case has been studied in {% cite PQC:BouKel25 %} {% cite CiC:LaiSwaWoo25 %} and fully generalised as the [Leaky-LWE](/leaky-lwe/) assumption. This generalisation extends the notion of linear leakages over the secret/error pair and allows for a wider range of hints.
