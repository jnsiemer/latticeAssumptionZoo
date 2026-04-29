---
title: "Knowledge k-M-ISIS"
seo_title: "Knowledge k-M-ISIS"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "Knowledge-k-M-ISIS"
assumption_status: "broken"

last_modified_at: 2026-04-29
redirect_from:
  - /knowledge-k-m-isis/
  - /knowledge_k_m_isis/
  - /knowledge-krisis/
  - /knowledge_krisis/
  - /knowledge-k-r-isis/
  - /knowledge_k_r_isis/
---

Albrecht, Cini, Lai, Malavolta, and Thyagarajan {% cite C:ACLMT22 %} provide a _knowledge_ variant of $k$-M-ISIS.
They utilise this assumption to build a succinct non-interactive argument of knowledge (SNARK).
Wee and Wu invalidated this assumption (at least morally) in {% cite AC:WeeW23b %}.

## Definition

The knowledge $k$-M-ISIS assumption captures the intuition that if the images are restricted to scalar multiples of $\vec{t}$, then the only way to produce preimages of them, is via a linear combination of the given preimages with small coefficients.

### Knowledge $k$-M-ISIS$\_{n,q,\beta,\beta^{\*},m,N,w,s}$
_Adopt the notation from [$k$-M-ISIS](/kmisis/#k-M-ISIS). Let $\alpha^{\*} \geq 1$. Let $\mathcal{T}$ contain elements $\vec{t} \in \mathcal{R}\_q^n$ s.t. $\abs{\text{span}(\vec{t})} / \abs{\mathcal{R}\_q^n} = \negl{\lambda}$. If a ppt adversary $\adv$ outputs $(c, \vec{u}\_c)$ satisfying the following condition_

$$ \mat{A} \cdot \vec{u}_c = c \cdot \vec{t} \bmod q \land 0 < \norm{\vec{u}_c} \leq \beta^{*}, $$

_then there exists a ppt extractor $\mathcal{E}\_{\adv}$ that -- with access to the adversary's randomness -- outputs short $\set{c\_g}$ s.t._

$$ c = \sum_{g \in \mathcal{G}} c_g \cdot g(\vec{v}) \bmod q \land \norm{(c_g)_{g \in \mathcal{G}}} \leq \alpha^*. $$

In other words, the assumption states that no adversary $\adv$ can compute $(c, \vec{u}\_c)$ where $c$ is not just a short linear combination of the given hints.


## Hardness
The assumption is invalidated – at least "morally" – in {% cite AC:WeeW23b %}. Roughly speaking, the attack uses that the preimages of $g(\vec{v}) \cdot \vec{t}$ span a short basis of the submodule spanned by $\vec{t}$: essentially an Ajtai-style trapdoor. Then, sampling an arbitrary, not-necessarily short, preimage of some $c \cdot \vec{t}$, Babai rounding can be applied to obtain a short preimage of some other, random $\bar{c} \cdot \vec{t}$.

An implementation of the attack in SageMath is available [here](https://gist.github.com/malb/7c8b86520c675560be62eda98dab2a6f){:target="_blank"}.

## Constructions built from Knowledge $k$-M-ISIS {#constructions}

- Succinct non-interactive argument of knowledge (SNARK) {% cite C:ACLMT22 %}

## Related Assumptions

- [$k$-M-ISIS](/kmisis/) yields the underlying assumption of Knowledge $k$-M-ISIS.
