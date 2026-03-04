---
title: "Randomised One-More-ISIS (rOM-ISIS)"
seo_title: "Randomised One-More-ISIS"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "rOM-ISIS"

last_modified_at: 2026-02-27
redirect_from:
  - /randomised-one-more-isis/
  - /romisis/
  - /randomised_one_more_isis/
---

The Randomised One-More-ISIS (rOM-ISIS) assumption was introduced in 2024 by Baldimtsi, Cheng, Goyal and Yadav {% cite AC:BCGY24 %}. Randomised One-More-ISIS differs only slightly from [One-More-ISIS](/om-isis/), but the authors claim that the randomised variant is more robust.

## Definition

### Randomised One-More-ISIS$_{n,m,q,\beta,s}$
_Let matrix $\mat{A}, \mat{B} \in \ZZ_q^{n \times m}$, and $T \subset \ZZ_q^n$ be chosen uniformly at random. Given the challenge matrices $\mat{A}$ and $\mat{B}$, and the set of target vectors $T$, an adversary can query a preimage oracle $O\_\text{pre}$ adaptively, which on input $\hat{\vec{t}} \in \ZZ_q^n$ outputs a tuple $(\hat{\vec{s}}, \hat{\vec{u}})$ containing a preimage $\hat{\vec{s}} \sample \mat{A}\_s^{-1}(\hat{\vec{s}} - \mat{B} \cdot \hat{\vec{u}})$ and a uniformly chosen vector $\hat{\vec{u}} \sample \bin^m$. Let $k \in \NN_0$ denote the number of times $O\_\text{pre}$ was queried. Then, an adversary is asked to output a set $\set{(\vec{s}_i, \vec{u}_i)}\_{i \in [k+1]}$ of $k+1$ short preimages of target vectors in $T$ satisfying_
\\[\forall i \in [k+1]: \mat{A} \cdot \vec{s}_i + \mat{B} \cdot \vec{u}_i \in T \land \norm{\vec{s}_i} \leq \beta \land \vec{u}_i \in \set{-1,1}^m.\\]

**Context.** Compared to One-More-ISIS, the randomised variant essentially imposes the restriction $\vec{u}\_i \in \set{-1,1}^m$ for half of the preimage vector. Ultimately, the restriction on $\vec{u}\_i$ to the set $\set{-1,1}^m$ can be seen as an introduction of the generalised knapsack problem to make the assumption more robust than One-More-ISIS.

## Hardness

Baldimtsi et al. {% cite AC:BCGY24 %} dedicate Section 6.1 towards cryptanalysis of their assumption, where they recall and generalise the cryptanalytic approaches from {% cite CCS:AKSY22 %} mounted on One-More-ISIS, and essentially show that the restriction $\vec{u}_i \in \set{-1,1}^m$ renders these attacks impractical. This leads them to their claim that Randomised One-More-ISIS is more robust than One-More-ISIS and more importantly, that they can pick parameters with significantly more freedom than for One-More-ISIS.

In Theorem 5.3 of {% cite EPRINT:2026/291 %}, Nguyen and Siemer show that One-More-ISIS is at least as hard as Randomised One-More-ISIS. Furthermore, they analyse a binary version of rOM-ISIS switching the restriction from $\vec{u}\_i \in \set{-1,1}^m$ to $\vec{u}\_i \in \bin^m$ and show their equivalence in Lemma D.1.

## Constructions built from rOM-ISIS

- Non-interactive blind signature {% cite AC:BCGY24 %}

## Related Assumptions

- [One-More-ISIS](/om-isis/) inspired Randomised One-More-ISIS
- One-More-RSA {% cite JC:BNPS03 %} inspired One-More-ISIS
- [Interactive ISIS$\_f$](/isisf/#interactiveisis_f) for $f = \operatorname{bin}$ shares several similarities with rOM-ISIS
- [Interactive GenISIS$\_f$](/genisisf/#interactive-genisis_f) for $f = \operatorname{bin}$ shares several similarities with rOM-ISIS
