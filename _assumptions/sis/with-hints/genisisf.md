---
title: "Generalised ISIS$_f$ (GenISIS$_f$)"
seo_title: "Generalised ISIS-f"
family: "SIS"
subfamily: "SIS with Hints"

last_modified_at: 2026-02-27
redirect_from:
  - /genisis-f/
  - /genisis_f/
  - /generalised_isis_f/
  - /generalised_isis-f/
  - /generalised_isisf/
  - /generalised-isis_f/
  - /generalised-isis-f/
  - /generalised-isisf/
---

The Generalised ISIS$\_f$ assumption (GenISIS$\_f$) was introduced by Dubois, Klooß, Lai, and Woo in 2025 {% cite PKC:DKLW25 %}. As the name suggests, it is a generalisation of the [ISIS$\_f$ assumption](/isisf/) introduced in {% cite C:BLNS23 %}. It removes two restrictions imposed by ISIS$\_f$, which enables reducing to GenISIS$\_f$. Furthermore, GenISIS$\_f$ inherits the ISIS$\_f$ framework to generically generate constructions for several primitives.

## Definition

### GenISIS$_{f}$
_Let $(n,m,q,\beta,k,s,\mathcal{R})$ be public parameters, matrix $\mat{A} \in \mathcal{R}_q^{n \times m}$ be chosen uniformly at random, $f$ be a keyed function $f: \mathcal{K} \times D \rightarrow \mathcal{R}_q^n$, and $\chi$ be a distribution over $D$. The challenger chooses a key $\kappa \sample \mathcal{K}$ uniformly and generates $k$ hints $(x_i, \vec{s}_i)$ in the following way._
- $x_i \sample \chi$
- $\vec{s}\_i \sample \mat{A}\_s^{-1}(f(\kappa, x\_i))$

_Given the matrix $\mat{A}$, the key $\kappa$, and the set of hints $\set{(x_i, \vec{s}_i)}\_{i \in [k]}$, the adversary is asked to find a new tuple $(x^{\*}, \vec{s}^{\*}) \in D \times \mathcal{R}^m$ satisfying_
\\[\mat{A} \cdot \vec{s}^{\*} = f(\kappa, x^{\*}) \bmod q \land \norm{\vec{s}^{\*}} \leq \beta \land (x^{\*}, \vec{s}^{\*}) \notin \set{(x\_i, \vec{s}\_i)}\_{i \in [k]}.\\]

The provided definition {% cite EPRINT:2026/291 %} simplifies notation and removes the condition $\vec{s}^{\*} \neq \vec{0}$ compared to {% cite PKC:DKLW25 %}.

**Intuition.** GenISIS$\_f$ essentially expects the adversary to either successfully solve [ISIS](/sis/#inhomogeneous-sis_nmqbeta) or compute a preimage of the function $f(\kappa, \cdot)$. Thus, the hardness of GenISIS$\_f$ depends on the choice of $f$. We list few examples for insecure choices of $f$.
- Additively homomorphic functions imply trivial solutions by adding or subtracting two hints.
- Any efficiently invertible function using public information enables choosing $\vec{s}^{\*} \in \mathcal{R}^m$ short and finding a preimage of $\mat{A} \cdot \vec{s}^{\*}$.
- Assume $f$ is a linear function and $D = \ZZ_q$. Then, any hint $(x\_i, \vec{s}\_i)$ can be used to generate a valid GenISIS$\_f$ solution $(-x\_i, \vec{s}\_i)$.

Compared to ISIS$\_f$, GenISIS$\_f$ allows hints to be chosen from any distribution $\chi$ over $D$ instead of them needing to uniformly distributed over $[N]$. Otherwise, GenISIS$\_f$ does not rely on a statically chosen function $f$, but a keyed function -- or a family of functions, of which a specific function is chosen at runtime.

### Interactive GenISIS$_f$
_Let $(n,m,\ell,q,\beta\_s,\beta\_m,s,\mathcal{R})$ be public parameters, matrices $\mat{A} \in \mathcal{R}\_q^{n \times m}$, $\mat{C} \in \mathcal{R}\_q^{n \times \ell}$ be chosen uniformly at random, $f$ be a keyed function $f: \mathcal{K} \times D \rightarrow \mathcal{R}\_q^n$, $\chi$ be a distribution over $D$, $\mathcal{H} = \emptyset$, and a uniformly chosen key $\kappa \in \mathcal{K}$. Given the matrices $\mat{A}$, $\mat{C}$, and the key $\kappa$, an adversary is able to query an oracle $O\_\text{pre}$ adaptively, which on input $\vec{m} \in \mathcal{R}^\ell$ proceeds as follows._
1. if $\norm{\vec{m}} > \beta\_m$ then return $\perp$
2. $x \sample \chi$
3. $\vec{s} \sample \mat{A}_s^{-1}(f(x) + \mat{C} \cdot \vec{m})$
4. $\mathcal{H} \leftarrow \mathcal{H} \cup \set{x,\vec{s},\vec{m}}$
5. return $(x, \vec{s})$

_An adversary is asked to find a new tuple $(x^{\*}, \vec{s}^{\*}, \vec{m}^{\*})$ satisfying_
\\[ (x^{\*}, \vec{s}^{\*}, \vec{m}^{\*}) \notin \mathcal{H} \land \mat{A} \cdot \vec{s}^{\*} = f(x^{\*}) + \mat{C} \cdot \vec{m}^{\*} \land \norm{\vec{s}^{\*}} \leq \beta\_s \land \norm{\vec{m}^{\*}} \leq \beta\_m. \\]

**Intuition.** The interactive version extends GenISIS$\_f$ by an Ajtai commitment and enables adaptive queries, where an adversary controls the input to the Ajtai commitment. Notice that the adversary is not capable of influencing the choice of $x \in D$, which can be thought of as salt in the context of a signature whereas $\vec{s} \in \mathcal{R}^m$ is the signature.

Compared to the interactive version of ISIS$\_f$, interactive GenISIS$\_f$ introduces a "strong unforgeability" flavour.

## Hardness

If $f$ is a random oracle then the GenISIS$\_f$ instance, is at least as hard as SIS {% cite STOC:GenPeiVai08 %}. Furthermore, Lemma C.1 in {% cite EPRINT:2026/291 %} shows that the standard-model signature given in {% cite EC:MicPei12 %} can be adapted to GenISIS$\_f$ s.t. the adapted GenISIS$\_f$ instance is at least as hard as SIS in the standard model.

Dubois et al. {% cite PKC:DKLW25 %} provide a translation of Theorem 3.3 from {% cite C:BLNS23 %} to GenISIS$\_f$, which states that interactive GenISIS$\_f$ is at least as hard as GenISIS$\_f$. This reduction comes with a polynomial loss factor within the size of queries to $O\_\text{pre}$. This polynomial loss-factor is removed in a tight reduction given in Theorem 4.3 of {% cite EPRINT:2026/291 %}.

Otherwise, the authors {% cite PKC:DKLW25 %} show in Theorem 7 that GenISIS$\_f$ is equivalent to the sEUF-RMA experiment for signatures based on vanishing SIS, which are introduced in the same work.

## Constructions built from GenISIS$\_f$

Bootle et al. {% cite C:BLNS23 %} provide a framework to generically build the following constructions from any interactive ISIS$\_f$ instance. As any ISIS$\_f$ instance is also a GenISIS$\_f$ instance, GenISIS$\_f$ inherits this framework.
- Signatures {% cite C:BLNS23 %}
- Group signatures {% cite C:BLNS23 %}
- Blind signatures {% cite C:BLNS23 %}{% cite CCS:LyuSeiSte24 %}
- Anonymous credentials {% cite C:BLNS23 %}{% cite CCS:LyuSeiSte24 %}

## Related Assumptions

- [ISIS$\_f$](/isisf/) is a specialised version of GenISIS$\_f$
- [One-More-ISIS](/om-isis/) shares similar interaction capabilities with IntGenISIS$\_f$
- [Randomised One-More-ISIS](/rom-isis/) shares several similarities with IntISIS$\_\operatorname{bin}$
- [Vanishing SIS](/TODO/)
