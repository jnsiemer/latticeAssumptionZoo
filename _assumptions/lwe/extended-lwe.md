---
title: "Extended LWE"
seo_title: "Extended LWE"
family: "LWE"
subfamily: "LWE with Hints"
graph_id: "Extended-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-13
redirect_from:
  - /extended_lwe/
  - /extendedlwe/
---

Extended LWE was proposed by O'Neill, Peikert, and Waters in 2011 {% cite C:ONePeiWat11 %}. Since then, the assumption has been given in several flavours with the same core idea of providing a hint on the LWE error. This idea and assumption has since been generalised by [Error-Leakage LWE](/ellwe/), [Hint-MLWE](/hint-mlwe/), and [Leaky LWE](/leaky-lwe/). However, the assumption itself was utilised to provide optimised zero-knowledge proofs, advanced public-key encryption and functional encryption.

## Definition

### Extended LWE$$_{n,m,k,q,\chi,\chi'}$$ {#extended-lwe}
_Let $$\chi,\chi'$$ be distributions over $$\ZZ$$ and $$\adv = (\adv_0, \adv_1)$$ be a two-stage adversary. Sample $$\mat{A} \sample \ZZ_q^{m \times n}$$, $$\vec{s}_i \sample \ZZ_q^n$$, $$\vec{e}_i \sample \chi^m$$, $$e'_i \sample \chi'$$, $$\vec{z} \leftarrow \adv_0(1^m)$$ and $$\vec{u}_i \sample \ZZ_q^m$$ for $$i \in [k]$$. The adversary $$\adv_1$$ is then asked distinguish between the distributions_

$$ \left( \mat{A}, (\mat{A} \cdot \vec{s}_i + \vec{e}_i)_{i \in [k]}, \vec{z}, (\langle \vec{z}, \vec{e}_i \rangle + e'_i)_{i \in [k]} \right) \text{ and } \left( \mat{A}, \vec{u}_i, \vec{z}, (\langle \vec{z}, \vec{e}_i \rangle + e'_i)_{i \in [k]} \right). $$

Extended LWE provides a single hint on the LWE error. Please note that almost every paper introduces a slightly different definition of Extended LWE and the above captures most of them. We abuse notation by setting $$\adv_0$$ to some distribution to define sampling $$\vec{z}$$ from the specified distribution.

For example, the paper that originally introduced Extended LWE {% cite C:ONePeiWat11 %} sets $$k:=1$$, $$\adv_0 := D_{\ZZ^m, r}$$, $$\chi := D_{\ZZ,s}$$ and $$\chi' := D_{\ZZ,s'}$$. Other papers such as {% cite C:AgrLibSte16 %} only defines $$k=1$$, $$\chi := D_{\ZZ,s}$$ and removes the error term $$e'$$ in the hint, which we'll formalise as $$\chi' := \set{0}$$. Furthermore, several papers {% cite EPRINT:AlpApo16 %}{% cite CTRSA:BJRW21 %}{% cite PKC:LyuNguSei21 %}{% cite C:LyuNguPla22 %} utilise and analyse the module-version of (Multi-Hint) Extended-LWE. Finally, the papers {% cite PKC:LyuNguSei21 %}{% cite C:LyuNguPla22 %} introduce one or multiple scalars in the hint-term and only output the sign of each entry.

## Variants

### Multi-Hint Extended-LWE$$_{n,m,q,\chi,\chi',t}$$ {#multi-hint-extended-lwe}
_Let $$\chi,\chi'$$ be distributions over $$\ZZ$$ and $$\adv = (\adv_0, \adv_1)$$ be a two-stage adversary. Sample $$\mat{A} \sample \ZZ_q^{m \times n}$$, $$\vec{s} \sample \ZZ_q^n$$, $$\vec{e} \sample \chi^m$$, $$\vec{e}' \sample \chi'$$, $$\mat{Z} \leftarrow \adv_0(1^t, 1^m)$$ and $$\vec{u} \sample \ZZ_q^m$$. The adversary $$\adv_1$$ is then asked distinguish between the distributions_

$$ \left( \mat{A}, \mat{A} \cdot \vec{s} + \vec{e}, \vec{z}, \mat{Z} \cdot \vec{e} + \vec{e}' \right) \text{ and } \left( \mat{A}, \vec{u}, \vec{z}, \mat{Z} \cdot \vec{e} + \vec{e}' \right). $$

The Multi-Hint Extended-LWE assumption is introduced in {% cite C:AgrLibSte16 %} with $$\chi := D_{\ZZ,s}$$, no error term on the hint $$\chi' := \set{0}$$, and arbitrary distribution $$\adv_0 := \tau$$. They provide a reduction from LWE to Multi-Hint Extended LWE in Theorem 4.

## Hardness

Due to the varying definitions of Extended LWE, we group the results by definition.

- $$\chi' = \set{0}$$: Lemma 4.7 and 4.8 of {% cite STOC:BLPRS13 %} provide reductions from a [First-is-errorless variant of LWE](/TODO/) to Extended LWE. First-is-errorless LWE is previously shown as at least as hard as LWE in Lemma 4.3.
- $$k=1$$, $$\chi' = D_{\ZZ,s'}$$ and $$\adv_0 = \tau$$: Section 3 of {% cite PKC:AlpPei12 %} provides a brief description of an efficient attack on Extended LWE if too many-hints are given out and $$\tau$$ is Subgaussian. Further, they provide a reduction from LWE to Extended LWE in Theorem 3.1.
- $$k=1$$, $$\chi = D_{\ZZ,s}$$ and $$\chi' = D_{\ZZ, s'}$$: In Section 6.2.4 of {% cite C:ONePeiWat11 %}, the authors hint at a straightforward reduction from LWE to Extended LWE.
- Lyubashevsky, Nguyen and Seiler's module-definition {% cite PKC:LyuNguSei21 %} includes additional scalars and they give a reduction from non-algebraic LWE to non-algebraic Extended LWE in Appendix D.
- Extended Module-LWE with $$\adv_0 = \tau$$ and $$\chi' = \set{0}$$: The authors of {% cite CTRSA:BJRW21 %} utilises [First-t-are-errorless variant of LWE](/TODO/) as an intermediate step in the reduction from M-LWE to Extended LWE, which itself is an intermediate result to reduce to [Binary-Secret Module-LWE](/TODO/).
- Extended Multi-Hint Module-LWE with $$k=1$$, $$\chi = D_{\ZZ,s}$$ and it only hands out the trace of each hint: Lemma 3.8 of {% cite EPRINT:AlpApo16 %} formalises a reduction from M-LWE to Extended M-LWE, which also uses the [First-t-are-errorless LWE](/TODO/) as an intermediate step and yields an intermediate step in a reduction from M-LWE to [M-LWR](/lwr/) itself.

## Constructions built from Extended LWE {#constructions}

- Zero-Knowledge Proofs {% cite PKC:LyuNguSei21 %}{% cite C:LyuNguPla22 %}
- Public-Key Encryption {% cite C:ONePeiWat11 %}
- Functional Encryption for inner products {% cite PKC:AlpPei12 %}{% cite C:AgrLibSte16 %}

## Related Assumptions

- [LWE with Error-Leakage](/ellwe/) is a direct generalisation of Extended LWE and closely related to Multi-Hint Extended LWE.
- [Hint-MLWE](/hint-mlwe/) can accomodate for some leakage of the LWE error.
- [Leaky LWE](/leaky-lwe/) generalises (Multi-Hint) Extended LWE and additionally allows for some leakage of the LWE secret.
