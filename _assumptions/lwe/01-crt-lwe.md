---
title: "{0,1}-CRT-LWE"
seo_title: "{0,1}-CRT-LWE"
family: "LWE"
graph_id: "{0,1}-CRT-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-29
redirect_from:
  - /crt-lwe/
  - /crt_lwe/
  - /crtlwe/
  - /01_crt_lwe/
  - /01crtlwe/
---

{0,1}-CRT-LWE was introduced by Okada, Player, Pohmann, and Weinert in 2025 {% cite EC:OPPW25 %}. The assumption crucially relies on the existence and additional algebraic structure of a double-[CRT](https://en.wikipedia.org/wiki/Chinese_remainder_theorem){:target="_blank"} isomorphism, which they exploit in their constructions of algebraic homomorphic encryption and efficient PIR.

## Definition

Let $$\mathcal{R} := \ZZ[X]/(X^n + 1)$$ be a power-of-two cyclotomic number ring and $$\zeta \in \ZZ_q$$ a primitive $$n$$-th root of unity. If $$p = 1 \bmod 2n$$ for all $$p \mid q$$, we get the double-CRT isomorphism

$$ \iota: \mathcal{R}_q \stackrel{\sim}{\rightarrow} \bigoplus_{i \in (\ZZ/2n\ZZ)^*}  \bigoplus_{p | q} \FF_p, a \mapsto (a \bmod (p, X - \zeta^i))_{i,p}. $$

Consider the set

$$\mathcal{B} := \iota^{-1}\left( \set{0,1}^{n \times \text{divisors}(q)} \right) = \set{b \in \mathcal{R}_q \mid b \mod (p, X - \zeta^i) \in \set{0,1} \text{ for all } p \mid q, i \in (\ZZ/2n\ZZ)^*}.$$

### {0,1}-CRT-LWE$$_{\mathcal{R},m,q,s}$$ {#crt-lwe}
_Sample $$s \sample \mathcal{R}_q$$, $$\vec{b} \sample \mathcal{B}^m$$ and $$\vec{e} \sample D_{\mathcal{R},s}^m$$. An adversary is asked to distinguish between the distribution_

$$ ( \vec{a} = s^{-1}\cdot (\vec{b} - \vec{e}), \vec{b} ) \text{ and } \mathcal{U}\left( \mathcal{R}_q^m \times S^m \right). $$

The authors {% cite EC:OPPW25 %} note in Remark 2.7 that {0,1}-CRT-LWE can be thought of as lying [Ring-LWE](/lwe/#ring-lwe) and [NTRU](/ntru/).

## Variants

### Stronger {0,1}-CRT-LWE$$_{\mathcal{R},m,q,s}$$ {#scrt-lwe}
_On input a message $$\vec{m} \in \mathcal{R}_q^m$$. Sample $$s \sample \mathcal{R}_q$$, $$\vec{b} \sample \mathcal{B}^m$$ and $$\vec{e} \sample D_{\mathcal{R},s}^m$$. An adversary is asked to distinguish between the distribution_

$$ ( \vec{a} = s^{-1}\cdot (\vec{b} - \vec{e} - \vec{m}), \vec{b} ) \text{ and } \mathcal{U}\left( \mathcal{R}_q^m \times \mathcal{R}_q^m \right). $$

In order to prove the security of their BV-style construction, Okada et al. {% cite EC:OPPW25 %} require a slightly stronger assumption to hide message(s) $$\vec{m} \in \mathcal{R}_q^m$$ due to the fact that $$\mathcal{U}(\mathcal{B})$$ is not $$\mathcal{U}(\mathcal{R}_q)$$.

## Hardness

Theorem 7.1 of {% cite EC:OPPW25 %} states that {0,1}-CRT-LWE is at least as hard as [Ring-LWE](/lwe/#ring-lwe) if the R-LWE error is of size $$q/\poly{n}$$ then the {0,1}-CRT-LWE instance is only increased by a constant additive factor.

Furthermore, Okada et al. present some cryptanalysis of {0,1}-CRT-LWE by considering existing (geometric, combinatorial, and algebraic) attacks. They were only capable of improving the combinatorial attack slightly based on the additional structure of the problem but their findings do not alter the concrete security.

## Constructions built from {0,1}-CRT-LWE {#constructions}

- Algebraic Homomorphic Encryption {% cite EC:OPPW25 %}
- Private Information Retrieval {% cite EC:OPPW25 %}

## Related Assumptions

- [Ring-LWE](/lwe/#ring-lwe)
- [NTRU](/ntru/)
