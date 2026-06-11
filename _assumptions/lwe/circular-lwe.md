---
title: "Circular LWE"
seo_title: "Circular LWE"
family: "LWE"
graph_id: "Circular-LWE"

last_modified_at: 2026-06-11
redirect_from:
  - /circular_lwe/
  - /circularlwe/
---

Although circular security has been utilised in e.g. fully-homomorphic encryption to enable bootstrapping {% cite STOC:Gentry09 %}{% cite FOCS:BraVai11 %}, the first paper to formalise a concrete circular security notion for LWE, namely _Circular LWE_, was published by Hsieh, Lin, and Luo in 2023 {% cite FOCS:HsiLinLuo23 %}. They utilise this assumption to construct Attribute-Based Encryption for circuits of unbounded depth.

## Definition

### Circular LWE$$_{n,m,m',q,s,s'}$$ {#circular-lwe}
_Sample $$\mat{A} \sample \ZZ_q^{n \times m}$$, $$\mat{A}' \sample \ZZ_q^{n\times m'}$$, $$\vec{r} \sample D_{\ZZ,s}^n$$, $$\vec{e} \sample D_{\ZZ,s}^m$$, $$\vec{e}' \sample D_{\ZZ,s'}^{m'}$$, $$\mat{R} \sample \set{0,1}^{m \times (n+1)\ceil{\log q}m}$$, $$\delta \sample \ZZ_q^m$$, $$\delta' \sample \ZZ_q^{m'}$$, and $$\Delta \sample \ZZ_q^{(n+1) \times (n+1)\ceil{\log q}m}$$. Define $$\vec{s} = (\vec{r}, -1)$$. An adversary is asked to distinguish the circular LWE distribution_

$$ \set{ 1^\lambda, \begin{bmatrix} \mat{A} \\ \vec{r}^T \mat{A} + \vec{e}^T \end{bmatrix}, \begin{bmatrix} \mat{A} \\ \vec{r}^T \mat{A} + \vec{e}^T \end{bmatrix} \cdot \mat{R} - \mathsf{bits}(\vec{s}) \otimes \mat{G}, \mat{A}', \vec{r}^T \mat{A}' + (\vec{e}')^T }_{\lambda \in \NN} $$

_and the distribution_

$$ \set{ 1^\lambda, \begin{bmatrix} \mat{A} \\ \delta^T \end{bmatrix}, \Delta, \mat{A}', (\delta')^T }_{\lambda \in \NN}. $$

The second and third elements contain the circular terms.

## Hardness

In Lemma 3 of {% cite FOCS:HsiLinLuo23 %}, they state several (trivial) reductions between Circular LWE, [short-secret LWE](/lwe/#short-secret-lwe), and [LWE](/lwe/). However, these reductions only provide uppper bounds on the hardness of Circular LWE.

## Constructions built from Circular LWE {#constructions}

To avoid confusion, we only list constructions built from the formalised Circular LWE assumption.
- Attribute-Based Encryption for Circuits of Unbounded Depth {% cite FOCS:HsiLinLuo23 %}
- Attribute-Based Encryption for Turing Machines {% cite C:AgrKumYam24 %}

## Related Assumptions

- [Tensor LWE](/tensor-lwe/): There is an assumption combining the ideas from Circular LWE and Tensor LWE to enable ABE for Turing machines.
- [Evasive LWE](/TODO/): Similarly, Hsieh et al. {% cite FOCS:HsiLinLuo23 %} propose a circular version of Evasive LWE. Agrawal et al. {% cite EPRINT:AMYY25 %} provided an attack against Circular Evasive LWE (including the sampler used in the original work).
