---
title: "Decomposed SIS"
seo_title: "Decomposed SIS"
family: "SIS"
subfamily: "Structured SIS"
graph_id: "Decomposed-SIS"

last_modified_at: 2026-06-12
redirect_from:
  - /decomposed_sis/
  - /decomposedsis/
---

Decomposed SIS was introduced as the natural SIS analogue of [Decomposed LWE](/decomposed-lwe/) by Abram, Malavolta, and Roy in 2026 {% cite EPRINT:AbrMalRoy26 %} to present a family of correlation intractable hash functions.

## Definition

### Decomposed SIS$$_{n,m,t,q,\beta,\sigma,s}$$ {#decomposed-sis}
_Let $$\mat{W} = \begin{bmatrix} \mat{W}_1^T &\dots &\mat{W}_t^T \end{bmatrix}^T \in \ZZ_q^{nt \times m}$$, where every $$\mat{W}_i \sample \ZZ_q^{n \times m}$$. Sample $$\mat{B} \sample D_{\ZZ,\sigma}^{m \times \hat{m}}$$ with $$\hat{m} = n \log q$$ and define $$\mat{A} := \begin{bmatrix} \mat{W}_1 \cdot \mat{B} - \vec{e}_1^T \otimes \mat{G} &\dots &\mat{W}_t \cdot \mat{B} - \vec{e}_t^T \otimes \mat{G} \end{bmatrix}$$, where $$\vec{e}_i$$ denotes the $$i$$-th unit-vector. Given $$1^\lambda, 1^s, \mat{W}, \mat{B}$$, and $$\mat{A}$$, an adversary is asked to find a short non-zero vector $$\vec{s} \in \ZZ^{\hat{m}t}$$ s.t._

$$ \mat{A} \cdot \vec{s} = \vec{0} \land 0 < \norm{\vec{s}}_\infty \leq \beta. $$

## Variants

### Extended Decomposed SIS$$_{n,m,r,t,q,\beta,\sigma,s}$$ {#extended-decomposed-sis}
_Let $$\mat{W}, \mat{B}, \mat{A}$$ be defined as above. Sample $$\mat{M} \sample \ZZ_q^{n \times r}$$. Given $$1^\lambda, 1^s, \mat{W}, \mat{B}, \mat{A}$$, and $$\mat{M}$$, an adversary is asked to find a short non-zero vector $$\vec{s} \in \ZZ^{\hat{m}t+r}$$ s.t._

$$ \begin{bmatrix} \mat{A} &\mat{M} \end{bmatrix} \cdot \vec{s} = \vec{0} \land 0 < \norm{\vec{s}}_\infty \leq \beta. $$

Extended Decomposed SIS extends the challenge matrix $$\mat{A}$$ by $$r$$ random columns. According to Theorem 3 in {% cite EPRINT:AbrMalRoy26 %}, Extended Decomposed SIS is at least as hard as Decomposed SIS if $$m \log(\sigma - 1) \geq k \log q + 2\kappa(\lambda)$$ for some arbitrary function $$\kappa$$.

## Hardness

Decomposed SIS is at least as hard as Decomposed LWE according to Theorem 2 in {% cite EPRINT:AbrMalRoy26 %} if $$q$$ is prime.

## Constructions built from Decomposed SIS {#constructions}

- Correlation intractable hash functions {% cite EPRINT:AbrMalRoy26 %}

## Related Assumptions

- [Decomposed LWE](/decomposed-lwe/) is the LWE version of Decomposed SIS.
