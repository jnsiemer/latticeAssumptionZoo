---
title: "Tensor LWE"
seo_title: "Tensor LWE"
family: "LWE"
subfamily: "Structured LWE"
graph_id: "Tensor-LWE"

last_modified_at: 2026-06-11
redirect_from:
  - /tensor_lwe/
  - /tensorlwe/
---

Tensor LWE was introduced in 2022 by Wee {% cite EC:Wee22 %} to build broadcast encryption and ciphertext-policy attribute-based encryption schemes based on the hardness of Tensor LWE and [Evasive LWE](/TODO/).

## Definition

### Tensor LWE$$_{n,m,q,\ell,Q,s_e,s_r}$$ {#tensor-lwe}
_Let $$\vec{x}_i \in \set{0,1}^\ell$$ denote binary vectors and sample $$\mat{A} \sample \ZZ_q^{n \times \ell m}$$, $$\vec{s} \sample \ZZ_q^{nm}$$, $$\vec{e}_i \sample D_{\ZZ,s_e}^{\ell m}$$, $$\vec{r}_i \sample D_{\ZZ,s_r}^m$$, and $$\vec{c}_i \sample \ZZ_q^{\ell m}$$ for $$i \in [Q]$$. An adversary is asked to distinguish between the distributions_

$$ \left( \mat{A}, \set{\vec{s}^T \cdot \left( \mat{I}_n \otimes \vec{r}_i \right) \cdot \left( \mat{A} - \vec{x}_i^T \otimes \mat{G} \right) + \vec{e}_i^T, \vec{r}_i}_{i \in [Q]} \right) \text{ and } \left( \mat{A}, \set{\vec{c}_i^T, \vec{r}_i}_{i \in [Q]} \right). $$

## Variants

### Strong Tensor LWE$$_{n,m,q,\ell,k,Q,s_e,s_r}$$ {#strong-tensor-lwe}
_Let $$\vec{x}_{j_1,\dots,j_k} \in \set{0,1}^\ell$$ denote binary vectors indexed by $$j_1,\dots,j_k \in [Q]$$. Sample $$\mat{A} \sample \ZZ_q^{n \times \ell m}$$, $$\vec{s} \sample \ZZ_q^{nm^k}$$, $$\vec{e}_{j_1,\dots,j_k} \sample D_{\ZZ,s_e}^{\ell m}$$, $$\vec{r}_{i,j_i} \sample D_{\ZZ,s_r}^m$$, and $$\vec{c}_{i, j_i} \sample \ZZ_q^{\ell m}$$ for $$i \in [k], j_1,\dots,j_k \in [Q]$$. An adversary is asked to distinguish between the Strong Tensor LWE distribution_

$$ \left( \mat{A}, \set{\vec{s}^T \cdot \left( \mat{I}_n \otimes \vec{r}_{1,j_1} \otimes \dots \otimes \vec{r}_{k,j_k} \right) \cdot \left( \mat{A} - \vec{x}_{j_1,\dots,j_k}^T \otimes \mat{G} \right) + \vec{e}_{j_1,\dots,j_k}^T, \vec{r}_{i,j_i}}_{i \in [k], j_1,\dots,j_k\in [Q]} \right) $$

_and the distribution_

$$ \left( \mat{A}, \set{\vec{c}_{i,j_i}^T, \vec{r}_{i,j_i}}_{i \in [k], j_1,\dots,j_k \in [Q]} \right). $$

Agrawal, Rossi, Yadav, and Yamada {% cite C:ARYY23 %} propose this generalised and stronger (some may say extended) version of Tensor LWE to provide a construction of constant-input attribute-based encryption. The reductions given for Tensor LWE have not been generalised to Strong Tensor LWE. Thus, the only known reductions exist for the special case $$k=1$$, where Strong Tensor LWE is equivalent to Tensor LWE.

### Circular Tensor LWE {#circular-tensor-lwe}
In Section 4.2 of {% cite C:AgrKumYam24 %}, Agrawal, Kumari, and Yamada introduce a circular version of Tensor LWE to provide an attribute-based encryption scheme for Turing machines. As the name suggests, this assumption combines the ideas of [Circular LWE](/TODO/) and Tensor LWE.

## Hardness

Wee {% cite EC:Wee22 %} shows that a modified version of Tensor LWE is at least as hard LWE, where the matrix $$\mat{A}$$ is chosen discrete Gaussian and the gadget matrix $$\mat{G}$$ is replaced by the identity matrix $$\mat{I}_n$$. This statement is formalised in Lemma 3.6 of {% cite C:ARYY23 %} and Agrawal et al. provide another Lemma (3.7) proving that the hardness of LWE implies the hardness of Tensor LWE if $$\vec{x}_i = \vec{0}$$ for all $$i \in [Q]$$ or all $$\vec{x}_i$$ are equal (Corollary 3.8).

For further details, we refer to Section 3.2 and 3.3 in {% cite C:ARYY23 %}.

## Constructions built from Tensor LWE {#constructions}

- Broadcast Encryption {% cite EC:Wee22 %}
- Ciphertext-Policy Attribute-Based Encryption {% cite EC:Wee22 %}
- Multi-Party Attribute-Based Encryption {% cite CiC:CinLaiWoo24 %}
- Attribute-Based Encryption for Turing Machines {% cite C:AgrKumYam24 %}

## Related Assumptions

- [Decomposed LWE](/decomposed-lwe/) also adds some structure to LWE but does not utilise tensor products.
