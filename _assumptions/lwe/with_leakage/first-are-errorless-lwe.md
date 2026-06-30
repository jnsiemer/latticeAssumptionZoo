---
title: "First-Are-Errorless LWE (FAE-LWE)"
seo_title: "First-Are-Errorless LWE"
family: "LWE"
subfamily: "LWE with Leakage"
graph_id: "FAE-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-18
redirect_from:
  - /first_are_errorless_lwe/
  - /firstareerrorlesslwe/
  - /first-is-errorless-lwe/
  - /first_is_errorless_lwe/
  - /firstiserrorlesslwe/
  - /some-are-errorless-lwe/
  - /some_are_errorless_lwe/
  - /someareerrorlesslwe/
  - /fae-lwe/
  - /fae_lwe/
  - /faelwe/
  - /fie-lwe/
  - /fie_lwe/
  - /fielwe/
  - /sae-lwe/
  - /sae_lwe/
  - /saelwe/
---

The _first-is-errorless LWE_ problem was introduced by Brakerski, Langlois, Peikert, Regev, and Stehlé in 2013 {% cite STOC:BLPRS13 %}. They utilise the problem as an intermediate reduction step towards [Extended LWE](/extended-lwe/) and [Binary-Secret LWE](/binary-secret-lwe/). In subsequent work, the assumption was generalised to _first-are-errorless LWE_ and its module version {% cite C:AgrLibSte16 %}{% cite CTRSA:BJRW21 %}.

## Definition

### FAE-LWE$$_{n,m,k,q,\chi,\mathcal{R}}$$ {#fae-lwe}
_Let $$\chi$$ be a distribution over $$\mathcal{R}$$. Sample matrix $$\mat{A} \sample \mathcal{R}_q^{m \times n}$$, $$\vec{s} \sample \mathcal{R}_q^n$$, and $$\vec{e}' \sample \chi^{m-k}$$. Define $$\vec{e} := (0^k, \vec{e}')$$. An adversary is asked to distinguish between the distribution_

$$ \left( \mat{A}, \mat{A} \cdot \vec{s} + \vec{e} \right) \text{ and } \mathcal{U}\left(\mathcal{R}_q^{n \times m}\right) \times \mathcal{U}\left(\ZZ_q^{1 \times m}\right). $$

We provide the module-version of FAE-LWE as defined in {% cite C:AgrLibSte16 %} to also cover the module-version of the assumption given in {% cite CTRSA:BJRW21 %}. The classical version can be recovered by defining $$\mathcal{R} := \ZZ$$. Further, this assumption is utilised and referred to as _First-is-errorless LWE_ in {% cite STOC:BLPRS13 %}{% cite EPRINT:AlpApo16 %}{% cite CTRSA:BJRW21 %}, i.e. $$k = 1$$. Finally, the same assumption is called _Some-are-errorless LWE_ in in {% cite AppSci:ZhuHua21 %}.

## Hardness

The first reduction from LWE to first-is-errorless LWE is provided in Lemma 4.3 of {% cite STOC:BLPRS13 %}. This reduction was generalised by Agrawal et al. {% cite C:AgrLibSte16 %} to the case, where a constant number of LWE samples is provided without a hint. Reductions for the module version adapt the first proof strategy in Lemma 3.6 of {% cite EPRINT:AlpApo16 %} and Lemma 14 of {% cite CTRSA:BJRW21 %}.

## Constructions built from FAE-LWE {#constructions}

- (Fully) Homomorphic Encryption {% cite ICPADS:LMDO16 %}{% cite AppSci:ZhuHua21 %}

## Related Assumptions

- [Extended LWE](/extended-lwe/) provides a hint in the form of an inner product on the LWE error.
