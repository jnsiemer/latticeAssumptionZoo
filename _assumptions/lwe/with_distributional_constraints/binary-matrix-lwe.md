---
title: "Binary-Matrix LWE"
seo_title: "Binary-Matrix LWE"
family: "LWE"
subfamily: "LWE with Distributional Constraints"
graph_id: "Binary-Matrix-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-06
redirect_from:
  - /binary_matrix_lwe/
  - /binarymatrixlwe/
---

In 2013, Galbraith introduced LWE with a binary matrix, which he referred to as _Compact LWE_ and is also known as _Galbraith's LWE_ {% cite SELF:Galbraith13 %}.
He originally introduced the assumption to suggest a more space-efficient PKE scheme for devices with relatively small storage.

## Definition

### Binary-Matrix LWE$$_{n,m,q,\chi}$$ {#binary-matrix-lwe}
_Let **binary** matrix $$\mat{A} \in \set{0,1}^{m \times n}$$ and secret vector $$\vec{s} \in \ZZ_q^n$$ be chosen uniformly at random. Let $$\vec{e} \in \ZZ_q^m$$ be sampled from the error distribution $$\chi$$. Given the matrix $$\mat{A}$$ and the vector $$\vec{b} = \mat{A} \cdot \vec{s} + \vec{e} \bmod q$$, an adversary is asked to find the secret vector $$\vec{s}$$._

## Hardness
Binary-Matrix LWE is as hard as LWE {% cite SELF:Galbraith13 %}. For simplicity, let $$q$$ be a power of 2 and $$\mat{G} = \mat{I}_n \otimes \begin{bmatrix} 1 &2 &\dots &2^{\log q - 1} \end{bmatrix}$$ be a gadget matrix. Then, the LWE-challenge matrix $$\mat{A} \in \ZZ_q^{m \times n}$$ can be transformed to a binary challenge matrix by performing the elementwise binary decomposition $$\mat{G}^{-1}(\mat{A})$$. The reduction implies that the dimension of the binary matrix $$\mat{G}^{-1}(\mat{A})$$ grows multiplicatively by $$\log q$$.

Some cryptanalysis of Binary-Matrix LWE was given in {% cite SELF:Galbraith13 %} and it was further analysed in {% cite PKC:HerMay17 %}. The parameters suggested in {% cite SELF:Galbraith13 %} mostly ignore the logarithmic growth in dimension of $$\mat{A}$$, which was suggested in the reduction. The authors of {% cite SELF:Galbraith13 %} manage to break Binary-Matrix LWE for parameters suggested in {% cite PKC:HerMay17 %} and thus show that the factor $$\log q$$ has significant impact on the hardness of the assumption.

## Constructions built from Binary-Matrix LWE {#constructions}

- Space-efficient Public-Key Encryption {% cite SELF:Galbraith13 %}

## Related Assumptions

- [Learning with Errors](/lwe/)
