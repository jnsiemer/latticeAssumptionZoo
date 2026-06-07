---
title: "SelfTargetMSIS"
seo_title: "SelfTargetMSIS"
family: "SIS"
graph_id: "SelfTargetMSIS"
assumption_status: "implied"

last_modified_at: 2026-05-26
redirect_from:
  - /self-target-msis/
  - /self_target_msis/
---

SelfTargetMSIS was introduced by Ducas, Kiltz, Lepoint, Lyubashevsky, Schwabe, Seiler, and Stehlé {% cite TCHES:DKLLSSS18 %} accompanying the proposal of Dilithium, which was standardised by NIST as ML-DSA since. The assumption embeds a hash function and thus, yields a natural assumption to utilise for Fiat-Shamir with Abort-style signature schemes.

## Definition

First, we require an unusual definition of a _ball:_ Let $$B_h$$ denote the set of elements in $$\mathcal{R}$$ that have $$h$$ coefficients from $$\set{-1,1}$$ and all other coefficients are $$0$$. Then, $$\abs{B_h} = 2^h \cdot \binom{n}{h}$$. For Dilithium, the authors are explicitly using a hash function $$\mathsf{H}$$ mapping to $$B_{60}$$. We keep the definition slightly more general and define $$h$$ as a parameter.

### SelfTargetMSIS$$_{n,m,q,\beta,\mathsf{H},h,\mathcal{R}}$$ {#selftargetmsis}
_Let $$\mathsf{H}: \set{0,1}^* \rightarrow B_h$$ be a cryptographic hash function and matrix $$\mat{A} \in \mathcal{R}_q^{n \times m}$$ be chosen uniformly at random. Given $$\mat{A}$$ and access to the hash function $$\mathsf{H}$$, an adversary is asked to find a tuple $$(\vec{y} = \begin{bmatrix} \vec{r}^T &c \end{bmatrix}^T, M) \in \mathcal{R}^{m+n} \times \{0,1\}^* $$ s.t._

$$ \mathsf{H}\left( \begin{bmatrix} \mat{I}_n &\mat{A} \end{bmatrix} \cdot \vec{y} \space \| \space M \right) = c \land 0 < \norm{\vec{y}}_\infty \leq \gamma. $$

The SelfTargetMSIS problem essentially asks an adversary to find a preimage of $$c \in \mathcal{R}$$ and requires the adversary to embed $$c$$ at a specific position of the preimage. However, it is important to note that the adversary can choose $$c$$ freely and the problem therefore doesn't directly correspond to the preimage resistance of $$\mathsf{H}$$. Further, parts of the input to the hash function $$\mathsf{H}$$ are essentially preprocessed by [normal form SIS](/sis/#normal-form-sis).

## Hardness

The authors {% cite TCHES:DKLLSSS18 %} provide a rough description how to reduce [M-SIS](/sis/#module-sis) to SelfTargetMSIS if $$\mathsf{H}$$ is modelled as a random oracle:
Let $$\mathsf{H}$$ be a hash function whose structure is completely independent of the algebraic structure of its inputs. Thus, choosing $$M$$ strategically can not help. So, the problem would be equally hard if $$M$$ was fixed. Then, again relying on the independence of $$\mathsf{H}$$ and the algebraic structure of its inputs, the only approach for obtaining a solution appears to be picking some $$\vec{w}$$, computing $$\mathsf{H}( \vec{w} \| M ) = c$$, and then finding a short vector $$\vec{r}$$ such that $$\begin{bmatrix} \mat{I}_n &\mat{A}_{[1:m-1]} \end{bmatrix} \cdot \vec{r} = \vec{w} - c \cdot \vec{a}_m$$. This problem is equivalent to solving Module-ISIS.

## Constructions built from SelfTargetMSIS {#constructions}

- Lyubashevsky-/Lattice-based Fiat-Shamir-style signature (CRYSTALS-Dilithium and now referred to as ML-DSA) {% cite TCHES:DKLLSSS18 %}

## Related Assumptions

- [Module-ISIS](/sis/#module-sis) in combination with $$\mathsf{H}$$ chosen as a random oracle implies that SelfTargetMSIS is hard.
