---
title: "Binary-Secret LWE"
seo_title: "Binary-Secret LWE"
family: "LWE"
subfamily: "LWE with Distributional Constraints"
graph_id: "Binary-Secret-LWE"
assumption_status: "implied"

last_modified_at: 2026-07-15
redirect_from:
  - /binary_secret_lwe/
  - /binarysecretlwe/
---

Binary-Secret LWE was introduced in 2010 by Goldwasser, Kalai, Peikert, and Vaikuntanathan {% cite  ICS:GKPV10 %}, and was later proven in {% cite STOC:BLPRS13 %}. The name of the assumption is descriptive as Binary-Secret LWE literally restricts LWE to choosing its secret as a binary vector. 

The definition can naively be extended to both the ring and the module setting but hardness is only provided for the classical [LWE](/lwe/) and a special regime of [MLWE](/lwe/#module-lwe) (which leaves unproven the hardness for the ring variant).



## Definition

### Binary-Secret LWE$$_{n,m,q,\sigma}$$ {#binary-secret-lwe}
_Let matrix $$\mat{A} \in \ZZ_q^{m \times n}$$ and secret vector $$\vec{s} \in \set{-1,1}^n$$ be chosen uniformly at random. Sample $$\vec{e} \sample D_{\ZZ, \sigma}^m$$. An adversary is asked to distinguish between the distribution_

$$(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e} \bmod q) \text{ and } \mathcal{U}\left(\ZZ_q^{m \times n}\right) \times \mathcal{U}\left(\ZZ_q^m\right).$$

Note that we define Binary-Secret LWE w.r.t. a secret in $$\set{-1,1}^n$$. This definition is also referred to as _Fixed-Norm LWE_ {% cite FOCS:GupVafVai22 %} as the norm of the secret is fixed. Binary-Secret LWE with secret in $$\set{0,1}^n$$ is equivalent to Fixed-Norm LWE via the public transform $$\vec{s} \mapsto (2\vec{s} - \vec{1})$$. The alternative name was brought up by Gupte, Vafa, and Vaikuntanathan in 2022 {% cite FOCS:GupVafVai22 %}, where they formalise the statement that Fixed-Norm LWE is at least as hard as Binary-Matrix LWE in Theorem 7.

## Hardness

A first version was provided by the original authors but not efficient due to a severe blow-up in the noise rate. The hardness was proven by Brakerski, Langlois, Peikert, Regev and Stéhlé {% cite STOC:BLPRS13 %} (Theorem 4.1), proving that Binary-Secret LWE is at least as hard as [Decision LWE](/lwe/#decision-lwe) throught a hybrid argument with intermediate problems [first-is-errorless LWE](/first-are-errorless-lwe/) and [Extended-LWE](/extended-lwe/) (both reduced to the standard [LWE](/lwe/)).

Later in 2018, the proof was shortened and simplified by Micciancio {% cite ToC:Micciancio18 %} (Corollary 1), with same range of parameters (just a lower growth of the noise than {% cite STOC:BLPRS13 %}). The gain is due to the definition of the secret over $$\set{-1,1}^n$$ instead of $$\set{0,1}^n$$.

Furthermore, Boudgoust, Jeudy, Roux-Langlois, and Wen provided a reduction from [Module-LWE](/lwe/#module-lwe) with intermediate problems [first-is-errorless LWE](/first-are-errorless-lwe/) and [Extended-LWE](/extended-lwe/) to Module LWE with binary secret in Lemma 18 of {% cite CTRSA:BJRW21 %}. This proof has an impact on the choice of dimension, which leaves the question of the difficulty of the ring variant unsolved. 

Note that there is a paper claiming a more efficient attack on Binary-Secret LWE using machine learning {% cite CCS:LSWMGCL23 %}. However, the evidence presented in {% cite EC:KKNPPVV26 %} shows that there is no benefit of using machine learning over existing approaches.

## Constructions built from Binary-Secret LWE {#constructions}

- Public-Key Encryption {% cite ECCC:BNHR22 %}

## Related Assumptions

- [LWE](/lwe/) can be reduced to Binary-Secret LWE.
- [Continuous LWE](/continuous-lwe/) is at least as hard as Fixed-Norm LWE.
