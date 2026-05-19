---
title: "ISIS$$_f$$"
seo_title: "ISIS-f"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "ISISf"

last_modified_at: 2026-02-27
redirect_from:
  - /isis-f/
  - /isis_f/
---

The ISIS$$_f$$ assumption was introduced by Bootle, Lyubashevsky, Nguyen, and Sorniotti in 2023 {% cite C:BLNS23 %}. It introduces a function $$f$$ that removes the requirement of a static target vector and passes additional hints to the adversary.

## Definition

### ISIS$$_f$$
_Let $$(n,m,q,\beta,k,s,\mathcal{R})$$ be public parameters, matrix $$\mat{A} \in \mathcal{R}_q^{n \times m}$$ be chosen uniformly at random, and $$f$$ be a specified function $$f: [N] \rightarrow \mathcal{R}_q^n$$. The challenger generates $$k$$ hints $$(x_i, \vec{s}_i)$$ in the following way:_
- $$x_i \sample [N]$$,
- $$\vec{s}_i \sample \mat{A}_s^{-1}(f(x_i))$$.

_Given the matrix $$\mat{A}$$ and the set of hints $$\set{(x_i, \vec{s}_i)}_{i \in [k]}$$, the adversary is asked to find a new tuple $$(x^{*}, \vec{s}^{*}) \in [N] \times \mathcal{R}^m$$ satisfying_

$$ \mat{A} \cdot \vec{s}^{*} = f(x^{*}) \bmod q \land 0 < \norm{\vec{s}^{*}} \leq \beta \land (x^{*}, \vec{s}^{*}) \notin \set{(x_i, \vec{s}_i)}_{i \in [k]}. $$

**Intuition.** ISIS$$_f$$ essentially expects the adversary to either successfully solve [ISIS](/sis/#inhomogeneous-sis) or compute a preimage of the function $$f$$. Thus, the hardness of ISIS$$_f$$ depends on the choice of $$f$$. We list few examples for insecure choices of $$f$$.
- Additively homomorphic functions imply trivial solutions by adding or subtracting two hints.
- Any efficiently invertible function using public information enables choosing $$\vec{s}^{*} \in \mathcal{R}^m$$ short and finding a preimage of $$\mat{A} \cdot \vec{s}^{*}$$.
- Assume $$f$$ is a linear function and the domain of $$f$$ was mapped to $$\ZZ_N$$. Then, any hint $$(x_i, \vec{s}_i)$$ can be used to generate a valid ISIS$$_f$$ solution $$(-x_i, \vec{s}_i)$$.

### Interactive ISIS$$_f$$
_Let $$(n,m,\ell_m,\ell_r,q,\beta_s,\beta_m,s,\mathcal{R})$$ be public parameters, matrices $$\mat{A} \in \mathcal{R}_q^{n \times m}$$, $$\mat{C} \in \mathcal{R}_q^{n \times (\ell_m + \ell_r)}$$ be chosen uniformly at random, $$f$$ be a specified function $$f: [N] \rightarrow \mathcal{R}_q^n$$, and $$\mathcal{M} = \emptyset$$. Given the matrices $$\mat{A}$$ and $$\mat{C}$$, an adversary is able to query an oracle $$O_\text{pre}$$ adaptively, which on input $$(\vec{m}, \vec{r}) \in \mathcal{R}^{(\ell_m + \ell_r)}$$ proceeds as follows._
1. if $$\norm{(\vec{m}, \vec{r})} > \beta_m$$ then return $$\perp$$
2. $$x \sample [N]$$,
3. $$\vec{s} \sample \mat{A}_s^{-1}(f(x) + \mat{C} \cdot (\vec{m}, \vec{r}))$$,
4. $$\mathcal{M} \leftarrow \mathcal{M} \cup \set{\vec{m}}$$,
5. return $$(x, \vec{s})$$

_An adversary is asked to find a new tuple $$(x^{*}, \vec{s}^{*}, \vec{m}^{*}, \vec{r}^{*})$$ satisfying_

$$ \vec{m}^{*} \notin \mathcal{M} \land \mat{A} \cdot \vec{s}^{*} = f(x^{*}) + \mat{C} \cdot (\vec{m}^{*}, \vec{r}^{*}) \land 0 < \norm{\vec{s}^{*}} \leq \beta_s \land \norm{(\vec{m}^{*}, \vec{r}^{*})} \leq \beta_m. $$

**Intuition.** The interactive version extends ISIS$$_f$$ by an Ajtai commitment and enables adaptive queries, where an adversary controls the input to the Ajtai commitment. Notice that the adversary is not capable of influencing the choice of $$x \in [N]$$, which can be thought of as salt in the context of a signature whereas $$\vec{s} \in \mathcal{R}^m$$ is the signature.

## Hardness

If $$f$$ is a random oracle then the ISIS$$_f$$ instance, is at least as hard as SIS {% cite STOC:GenPeiVai08 %}.

Bootle et al. {% cite C:BLNS23 %} set $$f$$ to be $$f(x) = \mat{B} \cdot \operatorname{bin}(x)$$, where $$\operatorname{bin}: [N] \rightarrow \ZZ^{\ceil{\log N}}$$ outputs the binary encoding of $$x \in [N]$$. They call this problem ISIS$$_{\operatorname{bin}}$$. The authors analyse direct lattice reduction as well as exploiting relations on the image space for ISIS$$_{\operatorname{bin}}$$.

In Theorem 3.3, Bootle et al. {% cite C:BLNS23 %} show that interactive ISIS$$_f$$ is at least as hard as ISIS$$_f$$. The reduction uses $$\mat{C} = \mat{A} \cdot \mat{R}$$ for a uniformly chosen $$\mat{R} \in \bin^{m \times (\ell_m + \ell_r)}$$, rejection sampling, the entropy that $$x \sample [N]$$ and $$\vec{s} \sample D_{\Lambda_q^{f(x)}, s}$$ are sampled with and introduces a polynomial loss factor depending on the number of allowed queries to $$O_\text{pre}$$. This polynomial loss-factor is removed in a tight reduction given in Theorem 4.3 of {% cite EPRINT:2026/291 %} for [Generalised ISIS$$_f$$](/genisisf/).

## Constructions built from ISIS$$_f$$ {#constructions}

Bootle et al. {% cite C:BLNS23 %} provide a framework to generically build the following constructions from any interactive ISIS$$_f$$ instance.
- Signatures {% cite C:BLNS23 %}
- Group signatures {% cite C:BLNS23 %}
- Blind signatures {% cite C:BLNS23 %}{% cite CCS:LyuSeiSte24 %}
- Anonymous credentials {% cite C:BLNS23 %}{% cite CCS:LyuSeiSte24 %}

## Related Assumptions

- [Generalised ISIS$$_f$$](/genisisf/) is a strict generalisation of ISIS$$_f$$
- [One-More-ISIS](/om-isis/) shares similar interaction capabilities with IntISIS$$_f$$
- [Randomised One-More-ISIS](/rom-isis/) shares several similarities with IntISIS$$_\operatorname{bin}$$
