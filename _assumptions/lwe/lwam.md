---
title: "Learning with Alternating Moduli (LWAM)"
seo_title: "Learning with Alternating Moduli"
family: "LWE"
graph_id: "LWAM"
assumption_status: "implied"

last_modified_at: 2026-06-12
redirect_from:
  - /learning-with-alternating-moduli/
  - /learning_with_alternating_moduli/
  - /learningwithalternatingmoduli/
---

The Learning with Alternating Moduli (LWAM) problem was introduced by Chen, Ji, and Li in 2025 {% cite EPRINT:CheJiLi25 %}. It formalises an assumption with similarity to [LWE](/lwe/) and [Learning with Rounding](/lwr/) that was previously utilised in (oblivious) pseudo-random functions {% cite TCC:BIPSW18 %}{% cite EC:ADDG24 %}.

## Definition

### Search LWAM$$_{n,m,q_0,q_1}$$ {#search-lwam}
_Let $$q_0 > q_1 \geq 2$$ and $$\mathsf{gcd}(q_0,q_1) = 1$$. Let $$\vec{s} \in \ZZ_{q_0}^n$$ and $$\mat{A} \sample \ZZ_{q_0}^{m \times n}$$. Given $$\mat{A}$$ and $$(\mat{A} \cdot \vec{s} \bmod q_0) \bmod q_1$$, an adversary is asked to find the secret vector $$\vec{s}$$.

### Decisional LWAM$$_{n,m,q_0,q_1}$$ {#decision-lwam}
_Let $$q_0 > q_1 \geq 2$$ and $$\mathsf{gcd}(q_0,q_1) = 1$$. Let $$\vec{s} \in \ZZ_{q_0}^n$$ and $$\mat{A} \sample \ZZ_{q_0}^{m \times n}$$. An adversary is asked to distinguish between the distributions_

$$\left(\mat{A}, (\mat{A} \cdot \vec{s} \bmod q_0) \bmod q_1 \right) \text{ and } \mathcal{U}\left( \ZZ_{q_0}^{n \times m} \right) \times \left( \mathcal{U}\left(\ZZ_{q_0}^m \right) \bmod q_1 \right).$$

## Hardness

Chen, Ji, and Li {% cite EPRINT:CheJiLi25 %} provide provable results as well as cryptanalytic results for LWAM assumptions. For LAM over constant moduli, they provide polynomial-time attacks on LWAM with constant prime-power moduli and certain non-prime-power moduli and evidence of the sub-exponential hardness of LAM with other moduli by analyzing the effect of typical attacks.

For "certain large" moduli, they provide the following reductions from LWE:

Theorem 22 of {% cite EPRINT:CheJiLi25 %} states that Search LWAM$$_{n,m,q_0,q_1}$$ is at least as hard as Search LWE$$_{n,m,q_0,D_B}$$ if $$q_0 > 2Bmq_1$$ if $$D_B$$ is a $$B$$-bounded and balanced distribution for an arbitrary distribution of secret vector $$\vec{s}$$ over $$\ZZ_{q_0}^n$$.

For $$q_0 \in \poly{n}$$ and uniform choice of $$\vec{s} \sample \ZZ_{q_0}^n$$, Theorem 23 of {% cite EPRINT:CheJiLi25 %} establishes that decisional LWAM$$_{n,m,q_0,q_1}$$ is at least as hard as decisional LWE$$_{n/\log q_0 - c_0 \log n,m,q_0,D_\alpha}$$ for $$c_0,c_1>0$$ if $$m > 2n$$, $$2\alpha\sqrt{n}mq_1 < q_0 < \poly{n}$$, $$\alpha \geq \sqrt{c_1 \log n}$$, and $$D_\alpha$$ denotes the discrete Gaussian distribution.
In Theorem 24, they lift the constraint to sample $$\vec{s}$$ uniformly but require $$q_0 / (2Bmq_1)$$ to be super-polynomial in $$n$$.

Another Search LWAM to Search LWE reduction is given in Theorem 29 of {% cite EPRINT:CheJiLi25 %} for more specific parameter sets. Finally, their Theorem 17 provides a search to decision reduction for LWAM with binary secrets. For further details, we refer to Section 3 of {% cite EPRINT:CheJiLi25 %}.

## Constructions built from LWAM {#constructions}

To avoid confusion, we only list constructions built from the formalised LWAM assumption.
- Weak pseudo-random functions {% cite EPRINT:CheJiLi25 %}

## Related Assumptions

- [Learning with Rounding](/lwr/) applies another rounding operation before applying the second modulus.
- [Learning with Physical Rounding](/lwpr/) is also motivated by crypto dark matter.
