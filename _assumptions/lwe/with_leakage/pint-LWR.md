---
title: "Pint-LWR"
seo_title: "Pint LWR"
family: "LWE"
subfamily: "LWR with Leakage"
graph_id: "Pint-LWR"
assumption_status: "implied"

last_modified_at: 2026-07-28
published: true
redirect_from:
  - /pintlwr/
  - /pint-lwr/
  - /pintmlwr/
  - /pint-mlwr/
---

The paper of Belaid, Benadjila, Devevey, Guerreau, Legavre, Martinelli, Ricosset, Rivain, and Rossi introduces the _Permuted Hint Module Learning with Rounding_ assumption, written $$\pi\mathrm{nt}\text{-}\mathrm{MLWR}$$, to argue security of the SUCRE countermeasure for masked ML-DSA rejection sampling {% cite TCHES:BBDGLMRRR26 %}.

Informally, the assumption starts from a standard rounded module-LWE sample and additionally reveals permutation information on rejected values produced during signing. The claim is that this extra leakage should still not help distinguish the rounded sample from uniform.

## Definition

### $$\pi\mathrm{nt}\text{-}\mathrm{MLWR}_{n,q,p,k,\ell,\gamma,\mathcal{S},\tau}$$ {#pint-mlwr}
_Recall the standard [MLWR](/lwr/) setting over $$\mathcal{R}_q$$ with a random matrix $$\mat{A} \leftarrow \mathcal{U}(\mathcal{R}_q^{k \times \ell})$$ and a short vector $$\vec{y}$$._

_Let $$\vec{s}_1,\vec{s}_2$$ be short secrets, let $$c$$ be a challenge, and let $$e(\cdot)$$ denote the rounding error._

_The adversary is asked to distinguish the rounded sample $$\lfloor \mat{A}\vec{y} \rceil_p$$ from uniform, while also receiving leakage on the rejected values:_

$$
\left(\mat{A}, \lfloor \mat{A}\vec{y} \rceil_p, \pi(\vec{y}+c\vec{s}_1 \bmod 2\gamma), \pi(e(\mat{A}\vec{y}-c\vec{s}_2)), (\vec{s}_1,\vec{s}_2), c\right)
$$

_versus_

$$
\left(\mat{A}, \lfloor \vec{u} \rceil_p, \pi(\vec{y}+c\vec{s}_1 \bmod 2\gamma), \pi(e(\mat{A}\vec{y}-c\vec{s}_2)), (\vec{s}_1,\vec{s}_2), c\right),
$$

_where $$\vec{u}$$ is uniform. Here $$\pi$$ forgets the original order of coefficients; equivalently, it captures a randomly permuted view of the leaked vectors._

## Hardness

The paper does not give a reduction from $$\pi\mathrm{nt}\text{-}\mathrm{MLWR}$$ to standard [MLWR](/lwr/). Instead, Section 4.2 of {% cite TCHES:BBDGLMRRR26 %} performs an exploratory cryptanalysis of the search variant.

Two attack routes are discussed. The first tries to recover the hidden permutation through algorithms for the Permuted Kernel Problem. The second treats the leaked multisets of coefficients as side information in a lattice attack, in the spirit of LWE with hints. For the ML-DSA parameter sets considered in the paper, both approaches appear to incur only a very small loss compared with the underlying MLWR instance, heuristically around one bit of security.

At present, Pint-LWR should therefore be viewed as a conjectural leakage-augmented MLWR assumption motivated by the SUCRE security proof.

## Constructions built from Pint-LWR {#constructions}

- SUCRE rejection-sampling countermeasure for masked ML-DSA {% cite TCHES:BBDGLMRRR26 %}

## Related Assumptions

- [Learning with Rounding](/lwr/) is the underlying rounded problem; Pint-LWR augments it with permutation-invariant leakage on rejected values.
- [Hint-LWE](/hint-lwe/) and [Leaky LWE](/leaky-lwe/) also add side information to LWE-type samples, but there the leakage is linear rather than a permuted view of the coefficients.
