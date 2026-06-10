---
title: "Asymmetric SIS"
seo_title: "Asymmetric SIS"
family: "SIS"
graph_id: "Asymmetric-SIS"
assumption_status: "implied"

last_modified_at: 2026-06-10
redirect_from:
  - /asymmetric_sis/
  - /asymmetricsis/
---

Asymmetric SIS was introduced in 2020 by Zhang, Yu, Fan, Zhang, and Yang {% cite PKC:ZYFZY20 %} to provide an optimised Fiat-Shamir with Abort signature by purposefully allowing for some asymmetry in the norm of the SIS solution.

## Definition

### Asymmetric SIS$$_{n,m_0,m_1,q,\beta_0,\beta_1}$$ {#asymmetric-sis}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ be chosen uniformly at random. Given $$\mat{A}$$, an adversary is asked to find a short non-zero vector $$\vec{s} := \begin{bmatrix} \vec{s}_0^T &\vec{s}_1^T \end{bmatrix}^T \in \ZZ^{m_0} \times \ZZ^{m_1}$$ satisfying_ 

$$ \mat{A} \cdot \vec{s} = \vec{0} \bmod q \land \norm{\vec{s}_0} \leq \beta_0 \land \norm{\vec{s}_1} \leq \beta_0. $$

Asymmetric SIS splits the SIS solution vector $$\mathsf{s}$$ into two parts with different norm bounds. In {% cite PKC:ZYFZY20 %} and {% cite PKC:JinJiaQu26 %}, they define an inhomogeneous version and module- / ring-versions of this assumption corresponding to [ISIS](/sis/#inhomogeneous-sis), [Ring-SIS](/sis/#ring-sis), and [Module-SIS](/sis/#module-sis). Further, they provide an asymmetric version of [SelfTargetMSIS](/selftargetmsis/).

## Hardness

Asymmetric SIS$$_{n,m_0,m_1,q,\beta_0,\beta_1}^\infty$$ is at least as hard as SIS$$_{n,m_0+m_1,q,\max(\beta_0,\beta_1)}^{\infty}$$ and at most as hard as SIS$$_{n,m_0+m_1,q,\min(\beta_0,\beta_1)}^\infty$$ {% cite PKC:ZYFZY20 %}, where $$\infty$$ denotes that these problems use the infinity norm. For the Euclidean norm, the reduction same reduction to Asymmetric SIS applies for $$\beta = \sqrt{\beta_0^2 + \beta_1^2}$$. The authors of {% cite PKC:ZYFZY20 %} describe further cryptanalytic approaches against Asymmetric SIS in Section 5.

## Constructions built from Asymmetric SIS {#constructions}

- Optimised Signatures {% cite PKC:ZYFZY20 %}{% cite PKC:JinJiaQu26 %}

## Related Assumptions

- [Asymmetric LWE](/asymmetric-lwe/) is the LWE version of Asymmetric SIS.
- [Split SIS](/split-sis/) splits the SIS solution in a similar way with the additional opportunity to linearly scale one part of the solution.
