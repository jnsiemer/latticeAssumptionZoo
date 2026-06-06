---
title: "Split SIS"
seo_title: "Split SIS"
family: "SIS"
graph_id: "Split-SIS"
assumption_status: "implied"

last_modified_at: 2026-06-01
redirect_from:
  - /splitsis/
  - /split_sis/
---

Split-SIS was first introduced in 2015 by Nguyen, Zhang, and Zhang {% cite PKC:NguZhaZha15 %} to build more efficient group signatures in terms of public-key and signature sizes.

## Definition

### Split-SIS$$_{n,m,q,\beta,N}$$ {#split-sis}
_Let matrices $$\mat{A}_0 \in \ZZ_q^{n \times m}$$ and $$\mat{A}_1 \in \ZZ_q^{n \times m}$$ be chosen uniformly at random. An adversary is asked to output a tuple $$(\vec{s} = (\vec{s}_0, \vec{s}_1), h) \in \ZZ^{2m} \times [N]$$ satisfying_

$$\mat{A}_0 \vec{s}_0 + h \mat{A}_1 \vec{s}_1 = \vec{0} \land (\vec{s}_0 \neq \vec{0} \lor h\vec{s}_1 \neq \vec{0}) \land \norm{\vec{s}} \leq \beta \land h \in [N]. $$

Compared to SIS, Split-SIS allows the adversary to scale parts of the challenge matrix by a scalar $$h \in [N]$$.

## Variants

### Extended Split-SIS$$_{n,m,q,\beta,N}$$ {#extended-split-sis}
_Let matrices $$\mat{A}_0, \mat{A}_1, \mat{A}_2 \in \ZZ_q^{n \times m}$$ be chosen uniformly at random. An adversary is asked to find a vector $$\vec{s} = (\vec{s}_0, \dots, \vec{s}_N) \in \ZZ^{(N+1)m}$$ satisfying_

$$ \mat{A}_0 \vec{s}_0 + \sum_{j \in [N]} \left(\mat{A}_1 + j\mat{A}_2\right) \vec{s}_j = \vec{0} \land j\vec{s}_j\neq \vec{0} \bmod q \land 0 < \vec{s} \leq \beta. $$

Extended Split-SIS is utilised in {% cite JoCUoPaT:WYBJ16 %} and {% cite CJoE:GHWCW19 %}. It fixes the scalars to $$j$$, which denotes the index / position of the vector in the solution vector $$\vec{s}$$.

According to Theorem 1 in {% cite JoCUoPaT:WYBJ16 %}, the problem is at least as hard as SIS$$_{n,3m,q,N\beta}$$ if $$q \geq \beta \omega(\sqrt{n \log n}) > (N^2 + N)/2$$.

## Hardness

According to Theorem 1 in {% cite PKC:NguZhaZha15 %}, Split-SIS$$_{n,m,q,\beta,N}$$ is at least as hard as SIS$$_{n,2m,q,\beta}$$ if $$q \geq \beta \cdot \omega(\sqrt{n \log n}) > N$$.
Roughly outlined, the reduction algorithm guesses $$h$$ and scales the first part of the challenge matrix corresponding to $$\mat{A}_0$$ in advance. If $$h$$ was picked correctly, the Split-SIS solution should also be a SIS solution.

## Constructions built from Split-SIS {#constructions}

- Group signature {% cite PKC:NguZhaZha15 %}
- Ring signature {% cite JoCUoPaT:WYBJ16 %}{% cite CJoE:GHWCW19 %}

## Related Assumptions

- [Short Integer Solution](/sis/) is the standard assumption that this problem can be reduced from.
