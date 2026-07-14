---
title: "One-More-ISIS (OM-ISIS)"
seo_title: "One-More-ISIS"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "OM-ISIS"

last_modified_at: 2026-02-27
redirect_from:
  - /one-more-isis/
  - /omisis/
  - /one_more_isis/
---

One-More-ISIS (OM-ISIS) was introduced in 2022 by Agrawal, Kirshanova, Stehlé, and Yadav {% cite CCS:AKSY22 %}. The assumption states that, given an [ISIS](/sis/#inhomogeneous-sis) solver, it remains hard to compute an additional preimage for a polynomial number of possible ISIS targets.

## Definition

### One-More-ISIS$$_{n,m,q,\beta,s}$$ {#one-more-isis}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ and $$T \subset \ZZ_q^n$$ be chosen uniformly at random. Given the challenge matrix $$\mat{A}$$ and the set of target vectors $$T$$, an adversary can query a preimage oracle $$O_\text{pre}$$ adaptively, which on input $$\hat{\vec{t}} \in \ZZ_q^n$$ outputs a preimage $$\hat{\vec{s}} \sample \mat{A}_s^{-1}(\hat{\vec{t}})$$. Let $$k \in \NN_0$$ denote the number of times $$O_\text{pre}$$ was queried. Then, an adversary is asked to output a set $$\set{\vec{s}_i}_{i \in [k+1]}$$ of $$k+1$$ short preimages of target vectors in $$T$$ satisfying_

$$ \forall i \in [k+1]: \mat{A}\cdot \vec{s}_i \in T \land \norm{\vec{s}_i} \leq \beta. $$

## Hardness

The hardness of One-More-ISIS is analysed using direct cryptanalysis in the original paper {% cite CCS:AKSY22 %}. The authors give a combinatorial attack and a lattice attack.

**Combinatorial Attack.** The adversary requests $$n \cdot q$$ preimages for all $$\set{a \cdot \vec{e}_i : a \in \ZZ_q}_{i \in [n]}$$. Then, the adversary can compute preimages for any image by adding up at most n preimages. As the length of the preimages returned by the challenger is $$s \sqrt{m}$$, it allows to solve the One-more-ISIS  problem if $$s \cdot \sqrt{n \cdot m} \leq \beta$$. The attack can be adapted to smaller and larger sets of preimages, increasing and decreasing the output norm, respectively.

**Lattice Attack.** The adversary requests more than $$m$$ preimages of zero. Then, the adversary can produce a short basis trapdoor for $$\mat{A}$$. This trapdoor is of degraded quality relative to the trapdoor used by the challenger. They explore further options to improve the quality of the short basis trapdoor.

## Constructions built from One-More-ISIS {#constructions}

- Blind signature {% cite CCS:AKSY22 %}
- Non-interactive blind signature constructed in {% cite AC:BCGY24 %} based on the reduction in Theorem 5.3 of {% cite PKC:NguSie26 %}

## Related Assumptions

- [Randomised One-More-ISIS](/rom-isis/) imposes additional constraints on the preimages $$\vec{s}_i$$ in that some components are required to be in $$\set{-1,1}$$.
- One-More-RSA {% cite JC:BNPS03 %} inspired One-More-ISIS
- [Interactive ISIS$$_f$$](/isisf/#interactive-isis_f) shares similar interaction capabilities with One-More-ISIS
- [Interactive GenISIS$$_f$$](/genisisf/#interactive-genisis_f) shares similar interaction capabilities with One-More-ISIS
- [H-ISIS](/h-isis/) provides SIS hints and asks for an ISIS solution

## Further Reading Suggestions

- [Blog article](https://martinralbrecht.wordpress.com/2022/06/01/the-one-more-isis-problem/){:target="_blank"} on the cryptanalytic target One-More-ISIS
