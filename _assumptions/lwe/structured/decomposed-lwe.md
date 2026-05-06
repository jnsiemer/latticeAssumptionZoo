---
title: $$\ell$$-Decomposed LWE
seo_title: "l-Decomposed LWE"
family: "LWE"
subfamily: "Structured LWE"
graph_id: "l-Decomposed-LWE"

last_modified_at: 2026-05-06
redirect_from:
  - /decomposedlwe/
  - /decomposed-lwe/
  - /decomposed_lwe/
  - /l_decomposed_lwe/
  - /l-decomposed-lwe/
  - /ldecomposedlwe/
---

Decomposed LWE was proposed by Abram, Malavolta, and Roy in 2025 {% cite C:AbrMalRoy25 %} to secure the execution of RAM programs over encrypted data, based on the following primitives: Key-Homomorphic PKE, ABE, and Succinct Randomised Encodings.

## Definition

We recall the definition of gadget matrix $$\mat{G}_{n,q} := \mat{I}_n \otimes \begin{bmatrix} 1 & 2 & \cdots & b^{\lceil \log q \rceil- 1}\end{bmatrix}$$.

### $$\ell$$-Decomposed LWE$$_{n,m,\hat{m},q,\sigma_\mat{B},\sigma_{\vec{e}}}$$ {#decomposed-lwe}

_Let $$\ell$$ matrices $$\mat{W}_i \xleftarrow{\$} \ZZ_q^{n \times m}, \mat{B}_j \leftarrow \mathcal{D}_{\sigma_\mat{B}}^{m \times \hat{m}}$$ and construct $$\mat{A}_{i,j} = \mat{W}_i\mat{B}_j + \mat{G}\cdot \delta_{i,j}$$. Let $$\vec{s} \in \ZZ_q^n$$ be chosen uniformly at random and noise errors $$\vec{e}_{i,j} \leftarrow \mathcal{D}_{\sigma_\vec{e}}^{\hat{m}}$$. An adversary is asked to distinguish between the distributions $$\{\mat{W}_i,\mat{B}_j,\vec{b}_{i,j} = \vec{s}^\intercal\mat{A}_{i,j} + \vec{e}_{i,j} \bmod q\}_{i,j \in [\ell]}$$ and a tuple sampled from $$\mathcal{U}(\ZZ_q^{m \times n})^\ell \times (\mathcal{D}_{\sigma_\mat{B}}^{m \times \hat{m}})^\ell \times \mathcal{U}(\ZZ_q^{m})^{\ell^2}$$._

The Decomposed LWE assumption can also be viewed as an instance similar to [$$\ell$$-succinct LWE](/l-succinct-lwe/), as presented by Wee {% cite EC:Wee25 %} where $$\textsf{vec}$$ denotes the concatenation of the columns of a matrix. In this setup, let $$\mat{W} \xleftarrow{\$} \ZZ_q^{n \times \ell m}$$ and $$\mat{B} \leftarrow \mathcal{D}_{\sigma_\mat{B}}^{m \times \ell\hat{m}}$$ and consider $$\mat{A}$$ constructed as

$$\mat{A} = \mat{W} \cdot (\mat{I}_\ell \otimes \mat{B}) + \textsf{vec}(\mat{I}_\ell) \otimes \mathbf{G}$$

<!-- 

The variants are not presented yet.
## Variants

### Small-Secret Extended $$\ell$$-Decomposed LWE$$_{n,m,\hat{m},q,\sigma_\mat{B},\sigma_{\vec{e}}}$$ {#sse-decomposed-lwe}

[TODO]

### Small-Secret Circular $$\ell$$-Decomposed LWE$$_{n,m,\hat{m},q,\sigma_\mat{B},\sigma_{\vec{e}}}$$ {#sse-decomposed-lwe}

[TODO] -->

## Hardness

Let $$\hat{m} = n \log q$$ and $$q$$ be prime. For a polynomial $$\ell$$, Abram, Malavolta, and Roy reduced the hardness of the assumption [$$\ell$$-succinct LWE](/l-succinct-lwe/)$$_{n,m,\hat{m},q,\sigma_\mat{B},\sigma_{\vec{e}}}$$ to $$\ell$$-Decomposed LWE$$_{n,m,\hat{m},q,\sigma_\mat{B},\sigma_{\vec{e}}}$$ where $$m \geq 2 \hat{m}$$ and with a polynomial noise ratio $$\frac{\sigma_{\vec{e}}}{\sigma_\mat{B}}$$.

The reduction is done by transforming the $$\ell$$-succinct LWE instance $$(\mat{A}, \vec{b}, \mat{W}, \mat{T})$$. Consider 

$$\mat{T} = \begin{bmatrix} \mat{T}_{0,0} & \cdots & \mat{T}_{0,t-1} \\ \vdots & \ddots & \vdots \\ \mat{T}_{t-1,0} & \cdots & \mat{T}_{t-1,t-1} \\ \mat{B}_0 & \cdots & \mat{B}_{t-1} \end{bmatrix}.$$

The trapdoor $$\mat{T}$$ is a Gaussian preimage such that $$\mat{AT}_{i,j} = \mat{G}\cdot \delta_{i,j} - \mat{W}_i\mat{B}_j$$.
The targets of the Decomposed instance are constructed as $$\vec{b}_{i,j}' = \vec{b}\mat{T}_{i,j} + \vec{e}_{i,j}$$ where $$\vec{e}_{i,j} \leftarrow \mathcal{D}_{\sigma_\vec{e}}^m$$. With an appropriate choice of Gaussian parameters, $$\vec{e}_{i,j}$$ will flood the noise of $$\vec{b}$$ (multiplied by $$\mat{T}_{i,j}$$). Finally, the $$\ell$$-Decomposed LWE instance is defined as $$\{-\mat{W}_i, \mat{B}_j,\vec{b}_{i,j}'\}_{i,j \in [\ell]}$$.

## Constructions built from Decomposed LWE {#constructions}

- Succinct Randomised Encodings {% cite C:AbrMalRoy25 %}
- Attribute-based Encryption (ABE) with additional properties {% cite C:AbrMalRoy25 %}{% cite EC:Wee25 %}
- Constrained PRF {% cite EPRINT:2026/741 %}
- Broadcast Encryption {% cite EPRINT:2026/741 %}{% cite EPRINT:2026/862 %}

## Related Assumptions

As mention in the definition section, one can find similarities with the [$$\ell$$-succinct LWE](/l-succinct-lwe/) assumption.

## Further Suggestions

- [Workshop session from Simons Institute](https://simons.berkeley.edu/talks/david-wu-ut-austin-2025-06-24) by David Wu.
