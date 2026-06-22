---
title: "Large Vector Problem (LVP)"
seo_title: "Large Vector Problem"
family: "Standalone"
graph_id: "LVP"

last_modified_at: 2026-06-13
redirect_from:
  - /large-vector-problem/
  - /large_vector_problem/
  - /largevectorproblem/
---

The Large Vector Problem (LVP) was proposed by Cong, Cozzo, Maram, and Smart in 2021 {% cite AC:CCMS21 %} to propose a hybrid public-key encryption scheme. The problem requires an adversary to find a short vector, which multiplied by a ([LWE](/lwe/)-style) hidden matrix drawn from a discrete Gaussian distribution has large (infinity) norm.

## Definition

### LVP$$_{n,q,\sigma,c}$$ {#lvp}
_Sample $$\mat{A}_0 \sample \ZZ_q^{n \times n}$$ and $$\mat{R}_0, \mat{R}_1 \sample D_{\ZZ,\sigma}^{n \times n}$$. Define $$\mat{A}_1 = \mat{A}_0 \cdot \mat{R}_0 + \mat{R}_1 \bmod q$$. Given $$\mat{A}_0$$, $$\mat{A}_1$$, an adverary is asked to find a short vector $$\vec{m} \in [-1/2,1/2]^n$$ s.t._

$$ \norm{\mat{R}_0 \cdot \vec{m}}_\infty \geq c \cdot \sigma \cdot \sqrt{n}/2. $$

Intuitively, the LPV assumption states that for a given LWE key $$(\mat{A}, \mat{A} \cdot \mat{R}_0 + \mat{R}_1)$$, it is hard to find a small vector $$\vec{m}$$ such that $$\mat{R}_0 \cdot \vec{m}$$ is relatively big.

## Hardness

The following summarises the discussion of LVP in Section 5 of {% cite AC:CCMS21 %}.

The probability that there are no solutions at all to the problem is roughly $$1 - n \cdot \mathsf{erfc}(c)$$, where $$\mathsf{erfc}(c) \approx 2^{-\epsilon}$$ and $$\epsilon = 128$$ for $$c = 9.3$$. Thus, the probability that there are any solutions (information theoretically) is very small for large enough $$c$$.

If Search-LWE could be solved efficiently for the pair $$(\mat{A}_0, \mat{A}_1)$$ then finding a solution vector $$\vec{m}$$ could potentially be trivial (if such a solution exists). If Search-LWE is hard then $$\mat{R}_0$$ is hidden and thus, the adversary can only guess a message.

Based on this assumption, Cong et al. {% cite AC:CCMS21 %} analyse the problem assuming that $$\mat{R}_1$$ is hidden and its variance to conclude that an adversary should not be able to exceed the advantage $$n \cdot \mathsf{erfc}(c)^2$$, which they formalise in Conjecture 5.1.

## Constructions built from LVP {#constructions}

- Hybrid Public-Key Encryption {% cite AC:CCMS21 %}

## Related Assumptions

- [LWE](/lwe/) provides similar information to the adversary but asks for some output satisfying a different condition.
