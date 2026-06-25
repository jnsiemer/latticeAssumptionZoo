---
title: $$\ell$$-succinct SIS
seo_title: "l-succinct SIS"
family: "SIS"
subfamily: "SIS with External Information"
graph_id: "l-succinct-SIS"

last_modified_at: 2026-04-30
redirect_from:
  - /lsuccinctsis/
  - /l_succinct_sis/
---

$$\ell$$-succinct SIS was introduced in 2024 by Wee {% cite C:Wee24 %} dual to [$$\ell$$-succinct LWE](/l-succinct-lwe/).
It can be seen as a slightly less-structured version of [BASIS$$_{\text{struct}}$$](/basis/#BASIS_struct).
Both assumptions follow a similar idea and therefore, provide similar capabilities for constructions, which are currently limited to succinct functional commitments {% cite AC:WeeWu23b %}.

## Definition

### $$\ell$$-succinct SIS$$_{n,m,q,\beta,\sigma}$$ {#l-succinct-sis}
_Let matrices $$\mat{A} \in \ZZ_q^{n \times m}$$ and $$\mat{W} \in \ZZ_q^{\ell n \times m}$$ be chosen uniformly at random. Let $$\mat{B} := \begin{bmatrix} \mat{I}_\ell \otimes \mat{A} &\mat{W} \end{bmatrix}$$ and a short trapdoor $$\mat{T} \gets \mat{B}_\sigma^{-1}(\mat{I}_\ell \otimes \mat{G}_n)$$. Given matrices $$\mat{B}$$ and $$\mat{T}$$, an adversary is asked to find a short non-zero vector $$\vec{s} \in \ZZ^{m}$$ s.t._

$$ \mat{A} \cdot \vec{s} = \vec{0} \bmod q \land 0 < \norm{\vec{s}} \leq \beta. $$

Intuitively, the assumption states that it is hard to solve [SIS](/sis/) w.r.t. matrix $$\mat{A}$$, given a trapdoor for the related matrix $$\mat{B}$$. Naively, one could state that $$\ell$$-succinct SIS is BASIS$$_{\text{struct}}$$ where the matrices $$\mat{W}$$ and $$\mat{G}_n$$ switched their positions.

## Hardness
Wee proved that $$\ell$$-succinct SIS is at least as hard as [BASIS$$_{\text{struct}}$$](/basis/#BASIS_struct) for the same choice of $$\ell$$ in Lemma 2 of {% cite C:Wee24 %}.

Furthermore, [$$\ell$$-succinct LWE](/l-succinct-lwe/) trivially implies $$\ell$$-succinct SIS {% cite C:Wee24 %}. As $$\ell$$-succinct LWE was shown to be at least as hard as Evasive LWE according to Lemma 3 in {% cite C:Wee24 %}, this might suggest that a similar reduction from [Evasive SIS](/evasive-sis/) to $$\ell$$-succinct SIS exists.

## Constructions built from $$\ell$$-succinct SIS {#constructions}

- Succinct functional commitments {% cite AC:WeeWu23b %}

## Related Assumptions

- [$$\ell$$-succinct LWE](/l-succinct-lwe/) is the LWE version of $$\ell$$-succinct SIS.
- [BASIS$$_\text{struct}$$](/basis/#BASIS_struct) is closely related to $$\ell$$-succinct SIS.
- [$$k$$-M-ISIS](/kmisis/) provides similar capabilities for constructions but provides weaker hardness guarantees.
