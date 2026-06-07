---
title: "Sparse Matrix LWE"
seo_title: "Sparse Matrix LWE"
family: "LWE"
subfamily: "LWE with Distributional Constraints"
graph_id: "Sparse-Matrix-LWE"
assumption_status: "implied"

last_modified_at: 2026-05-20
redirect_from:
  - /sparsematrixlwe/
  - /sparse_matrix_lwe/
---

Sparse Matrix LWE was introduced in 2024 by Jain, Lin, and Saha {% cite C:JaiLinSah24 %} and describes the LWE assumption defined for a _sparse matrix_ $$\mat{A}$$, where each row has a fixed sparsity. They utilise the assumption to build a linearly homomorphic encryption scheme.

Please note that this assumption was originally introduced as _Sparse LWE_. However, another assumption called _Sparse LWE_ with sparse secrets/errors emerged and gained more traction in the community. Therefore, we explicitly use _Sparse **Matrix** LWE_ to refer to the assumption described below.

## Definition

### $$k$$-sparse Distribution $$\mathcal{S}^\textsf{sparse}_{n,k,q}$$ {#k-sparse-distribution}

The idea is to construct a vector of size $$n$$ where $$k-n$$ coordinates are set to $$0$$, the others are chosen uniformly at random from $$\mathbb{Z}_q$$. In this setup, the output vector has at most $$k$$ non-zero coordinates. 

- Sample a set $$S \subset [n]$$ with $$\vert S \vert = k$$
- Sample $$\vec{v} \xleftarrow{\$} \mathbb{Z}_q^n$$ and set $$v_i = 0$$ for all $$i \notin S$$
- Return $$\vec{v}$$

### Sparse Matrix LWE$$_{n,m,q,\chi_\mathbf{e},k}$$ {#sparse-matrix-lwe}

_Let $$\mat{A} = \begin{bmatrix} \vec{a}_1 & \dots & \vec{a}_m \end{bmatrix}$$ where $$\vec{a}_i \sample \mathcal{S}^\textsf{sparse}_{n,k,q}$$. Sample the secret vector $$\vec{s} \in \ZZ_q^n$$ uniformly at random and the noise vector $$\vec{e} \in \ZZ_q^m$$ from the error distribution $$\chi_\mathbf{e}$$. An adversary is asked to distinguish between the Sparse Matrix LWE distribution $$(\mat{A}, \vec{b} = \vec{s}^T \cdot \mat{A} + \vec{e}^T \bmod q)$$ and elements sampled from $${(\mathcal{S}^\textsf{sparse}_{n,k,q})}^m \times \mathcal{U}(\ZZ_q^m)$$._

## Hardness

Jain, Lin, and Saha {% cite C:JaiLinSah24 %} reduce LWE$$_{k,m,q,\mathcal{U}(\ZZ_q),\chi_\mathbf{e}}$$ to Sparse Matrix LWE$$_{n,m,q,\chi_\mathbf{e},k}$$ for prime $$q$$ and $$m < q$$.

The idea of the proof is to translate the matrix $$\mat{A} \in \ZZ_q^{k \times m}$$ into a $$k$$-sparse matrix $$\mat{A}'$$ such that $$\mat{C}\mat{A}' = \mat{A}$$ for a specific choice of a Vandermonde matrix $$\mat{C} \in \ZZ_q^{k \times n}$$. They construct the following Sparse Matrix LWE instance $$(\mat{A}',\vec{b}' = \vec{r}^T\mat{A}' + \vec{b}^T)$$, where $$\vec{r} \sample \ZZ_q^n$$ to ensure the uniformity of the secret vector as the secret is distributed as $$\vec{s}^T \mat{C}$$ otherwise.

The authors also provided some interesting analysis for different choices of $$k$$: choosing $$k =O(1)$$ or $$O(\log n)$$, the associated LWE instance is easy to solve. If $$k = \Theta(n)$$ i.e. too large, then Sparse Matrix LWE is not that truely sparse. 
There are further cryptanalytic attempts for other parameter regimes that might be useful in practice. In Section 7 of {% cite C:JaiLinSah24 %}, the authors analyse some attacks exploiting the sparsity in order to better understand the assumption. 

## Constructions built from Sparse Matrix LWE {#constructions}

- Linear homomorphic encryption {% cite C:JaiLinSah24 %}

## Related Assumptions

- [Sparse LWE](/TODO/) describes a variant of LWE with sparse secret and/or error terms. Its frequent use around homomorphic encryption schemes has received considerable cryptanalytical attention.
