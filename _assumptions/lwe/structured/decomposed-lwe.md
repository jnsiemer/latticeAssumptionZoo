---
title: "Decomposed LWE"
seo_title: "Decomposed LWE"
family: "LWE"
subfamily: "Structured LWE"
graph_id: "Decomposed-LWE"

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

We recall the definition of a gadget matrix $$\mat{G}_n = \mat{I}_n \otimes \vec{g}^\intercal$$, where $$\vec{g}^\intercal = \begin{bmatrix} 1 & 2 & \cdots & b^{\lceil \log q \rceil- 1}\end{bmatrix}$$.

### Decomposed LWE$$_{n,m,\hat{m},q,\ell,\sigma_\mat{B},\sigma_{\vec{e}}}$$ {#decomposed-lwe}

_Let $$\ell$$ matrices $$\mat{W}_i \sample \ZZ_q^{n \times m}, \mat{B}_j \sample D_{\sigma_\mat{B}}^{m \times \hat{m}}$$ and construct $$\mat{A}_{i,j} = \mat{W}_i\mat{B}_j + \delta_{i,j} \cdot \mat{G}$$. Let $$\vec{s} \in \ZZ_q^n$$ be chosen uniformly at random and noise errors $$\vec{e}_{i,j} \sample D_{\sigma_\vec{e}}^{\hat{m}}$$. An adversary is asked to distinguish between the distribution $$\{\mat{W}_i,\mat{B}_j,\vec{b}_{i,j} = \vec{s}^\intercal\mat{A}_{i,j} + \vec{e}_{i,j}\}_{i,j \in [\ell]}$$ and a tuple sampled from $$\mathcal{U}(\ZZ_q^{n \times m})^\ell \times (D_{\sigma_\mat{B}}^{m \times \hat{m}})^\ell \times \mathcal{U}(\ZZ_q^{m})^{\ell^2}$$._

The Decomposed LWE assumption can also be viewed as an instance similar to [$$\ell$$-succinct LWE](/l-succinct-lwe/), as presented by Wee {% cite EC:Wee25 %} where $$\textsf{vec}$$ denotes the concatenation of the columns of a matrix. In this setup, let $$\mat{W} \sample \ZZ_q^{n \times \ell m}$$ and $$\mat{B} \sample D_{\sigma_\mat{B}}^{m \times \ell\hat{m}}$$ and consider $$\mat{A}$$ constructed as

$$\mat{A} = \mat{W} \cdot (\mat{I}_\ell \otimes \mat{B}) + \textsf{vec}(\mat{I}_\ell) \otimes \mathbf{G}.$$

## Variants

### Small-Secret Extended Decomposed LWE$$_{n,m,\hat{m},q,\ell,\sigma_\mat{B},\sigma_{\vec{s}},\sigma_{\mat{E}},t}$$ {#sse-decomposed-lwe}

_Let matrices $$\mat{W} \sample \ZZ_q^{(n\cdot \ell) \times m}$$, $$\mat{B} \sample D_{\sigma_\mat{B}}^{m \times (\hat{m}\cdot \ell)}$$, $$\mat{Q} \sample \mathsf{GL}_n(\ZZ_q)$$, $$\mat{M} \sample \ZZ_q^{n \times t}$$ and construct $$\mat{A} = \mat{W}\cdot\mat{B} + \mat{I}_\ell \otimes (\mat{Q} \cdot \mat{G})$$. Let $$\vec{s} \sample D_{\sigma_{\vec{s}}}^n$$ and errors $$\vec{e} \sample D_{\sigma_{\vec{s}}}^t$$, $$\mat{E} \sample D_{\sigma_{\mat{E}}}^{\ell \times (\hat{m} \cdot \ell)}$$. An adversary is asked to distinguish the distributions_

$$ \left\{\mat{W},\mat{B},\mat{Q},\mat{M},\vec{s}^\intercal\cdot \mat{M} + \vec{e}^\intercal,(\mat{I}_\ell \otimes \vec{s}^\intercal)\cdot\mat{A} + \mat{E}\right\}, $$

$$ \mathcal{U}\left(\ZZ_q^{(n\cdot \ell) \times m}\right) \times D_{\sigma_\mat{B}}^{m \times (\hat{m} \cdot \ell)} \times \mathsf{GL}_n(\ZZ_q) \times \mathcal{U}\left(\ZZ_q^{n \times t}\right) \times \mathcal{U}\left(\ZZ_q^{1 \times t}\right) \times \mathcal{U}\left(\ZZ_q^{\ell \times (\hat{m} \cdot \ell)}\right). $$

As the name suggests, this version utilises a small-secret. Additionally, it extends the assumption via an invertible matrix $$\mat{Q}$$ and $$t$$ additional LWE samples with respect to the matrix $$\mat{M}$$. According to Theorem 4.4 in {% cite C:AbrMalRoy25 %}, Small-Secret Extended Decomposed LWE is at least as hard as Decomposed LWE if $$\sigma_{\vec{s}} / (\sigma_{\mat{B}} \cdot \sigma_{\mat{E}}) \in \lambda^{\omega(1)}$$ and $$\ell \in \poly{\lambda}$$.

### Small-Secret Circular Decomposed LWE$$_{n,m,\hat{m},q,\ell,\sigma_\mat{B},\sigma_{\vec{s}},\sigma_{\mat{E}},\sigma_{\bar{\vec{e}}},t}$$ {#ssc-decomposed-lwe}

_Let matrices $$\mat{W} \sample \ZZ_q^{(n\cdot \ell) \times m}$$, $$\mat{B} \sample D_{\sigma_\mat{B}}^{m \times (\hat{m}\cdot \ell)}$$, $$\mat{Q} \sample \mathsf{GL}_n(\ZZ_q)$$, $$\mat{M} \sample \ZZ_q^{n \times t}$$, $$\mat{K} \sample \ZZ_q^{n \times \hat{m}\cdot(\hat{m} + \log q)}$$, and construct $$\mat{A} = \mat{W}\cdot\mat{B} + \mat{I}_\ell \otimes (\mat{Q} \cdot \mat{G})$$. Let $$\vec{s} \sample D_{\sigma_{\vec{s}}}^n$$ and errors $$\vec{e} \sample D_{\sigma_{\vec{s}}}^t$$, $$\bar{\vec{e}} \sample D_{\sigma_{\bar{\vec{e}}}}^{\hat{m}\cdot(\hat{m} + \log q)}$$, $$\mat{E} \sample D_{\sigma_{\mat{E}}}^{\ell \times (\hat{m} \cdot \ell)}$$. An adversary is asked to distinguish the distributions_

$$ \left\{\mat{W},\mat{B},\mat{Q},\mat{M},\vec{s}^\intercal\cdot \mat{M} + \vec{e}^\intercal,(\mat{I}_\ell \otimes \vec{s}^\intercal)\cdot\mat{A} + \mat{E}, \begin{bmatrix} \mat{K}\\ \vec{s}^\intercal \mat{K} + \bar{\vec{e}}^\intercal \end{bmatrix} - \mathsf{Bits}(\vec{s})^\intercal \otimes \mat{I}_{n+1} \otimes \vec{g}^\intercal \right\}, $$

$$ \mathcal{U}\left(\ZZ_q^{(n\cdot \ell) \times m}\right) \times D_{\sigma_\mat{B}}^{m \times (\hat{m} \cdot \ell)} \times \mathsf{GL}_n(\ZZ_q) \times \mathcal{U}\left(\ZZ_q^{n \times t}\right) \times \mathcal{U}\left(\ZZ_q^{1 \times t}\right) \times \mathcal{U}\left(\ZZ_q^{\ell \times (\hat{m} \cdot \ell)}\right) \times \mathcal{U}\left(\ZZ_q^{(n+1) \times \hat{m}\cdot (\hat{m} + \log q)}\right). $$

The circular variant is supposed to correspond to Small-Secret Extended Decomposed LWE, where the distinguisher is provided an additional GSW encryption {% cite C:GenSahWat13 %}. However, this intution is provided in {% cite C:AbrMalRoy25 %} without any formal arguments.

## Hardness

Let $$\hat{m} = n \log q$$ and $$q$$ be prime. For a polynomial $$\ell$$, Abram, Malavolta, and Roy reduced the hardness of the assumption [$$\ell$$-succinct LWE](/l-succinct-lwe/)$$_{n,m,\hat{m},q,\sigma_\mat{B},\sigma_{\vec{e}}}$$ to Decomposed LWE$$_{n,m,\hat{m},q,\ell,\sigma_\mat{B},\sigma_{\vec{e}}}$$ where $$m \geq 2 \hat{m}$$ and with a polynomial noise ratio $$\frac{\sigma_{\vec{e}}}{\sigma_\mat{B}}$$.

The reduction is done by transforming the $$\ell$$-succinct LWE instance $$(\mat{A}, \vec{b}, \mat{W}, \mat{T})$$. Consider 

$$\mat{T} = \begin{bmatrix} \mat{T}_{0,0} & \cdots & \mat{T}_{0,t-1} \\ \vdots & \ddots & \vdots \\ \mat{T}_{t-1,0} & \cdots & \mat{T}_{t-1,t-1} \\ \mat{B}_0 & \cdots & \mat{B}_{t-1} \end{bmatrix}.$$

The trapdoor $$\mat{T}$$ is a Gaussian preimage such that $$\mat{AT}_{i,j} = \delta_{i,j} \cdot \mat{G} - \mat{W}_i\mat{B}_j$$.
The targets of the Decomposed instance are constructed as $$\vec{b}_{i,j}' = \vec{b}\mat{T}_{i,j} + \vec{e}_{i,j}$$ where $$\vec{e}_{i,j} \sample D_{\sigma_\vec{e}}^m$$. With an appropriate choice of Gaussian parameters, $$\vec{e}_{i,j}$$ will flood the noise of $$\vec{b}$$ (multiplied by $$\mat{T}_{i,j}$$). Finally, the Decomposed LWE instance is defined as $$\{-\mat{W}_i, \mat{B}_j,\vec{b}_{i,j}'\}_{i,j \in [\ell]}$$.

## Open Questions

- Can we find concrete hardness results when the width of $$\mat{W}$$ is $$\omega(1)$$ and $$\bigO{\ell n \log q}$$?
- Can we find a $$\poly{\ell}$$ improvement in attack algorithms over a generic SIS / LWE algorithm?
- What is the hardness of SIS / LWE w.r.t. $$\mat{A}$$ and can we establish it from some worst-case lattice problem?
<!-- List of open questions given in a talk by David Wu --> 

## Constructions built from Decomposed LWE {#constructions}

- Succinct Randomised Encodings {% cite C:AbrMalRoy25 %}
- Attribute-based Encryption (ABE) with additional properties {% cite C:AbrMalRoy25 %}{% cite EC:Wee25 %}
- Constrained PRF {% cite EPRINT:2026/741 %}
- Broadcast Encryption {% cite EPRINT:2026/741 %}{% cite EPRINT:2026/862 %}
- Distributed Monotone-Policy Encryption {% cite EC:ChaWu26 %}

## Related Assumptions

- [Decomposed SIS](/decomposed-sis/) is the SIS version of Decomposed LWE.
- [$$\ell$$-succinct LWE](/l-succinct-lwe/) shows similarities to Decomposed LWE.

## Further Reading Suggestions

- [Workshop session from Simons Institute](https://simons.berkeley.edu/talks/david-wu-ut-austin-2025-06-24) by David Wu.
