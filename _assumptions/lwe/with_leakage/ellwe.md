---
title: "LWE with Error-Leakage"
seo_title: "LWE with Error-Leakage"
family: "LWE"
subfamily: "LWE with Leakage"
graph_id: "elLWE"
assumption_status: "implied"

last_modified_at: 2026-06-07
redirect_from:
  - /el-lwe/
  - /el_lwe/
  - /lwe_with_error_leakage/
  - /lwe-with-error-leakage/
  - /error_leakage_lwe/
  - /error-leakage-lwe/
---

The _LWE with Error-Leakage_ or _Error-Leakage LWE (elLWE)_ assumption was introduced by Döttling, Kolonelos, Lai, Lin, Malavolta, and Rahimi in 2023 {% cite EC:DKLLMR23 %}. It enables some partial leakage of the error vector in LWE in a pre-defined form. They utilise this assumption to construct Laconic Encryption and Registration-Based Encryption schemes.

## Definition

### elLWE$$_{\mathcal{R},n,m,k,q,\chi,\bar{\chi},\mathcal{L}}$$ {#el-lwe}
_Let $$\mathcal{L}$$ be an efficiently decidable set and $$\adv = (\adv_0, \adv_1)$$ be a two-stage adversary. Given a uniformly chosen matrix $$\mat{A} \in \mathcal{R}_q^{n \times m}$$, the adversary $$\adv_0$$ outputs a matrix $$\mat{Z} \in \mathcal{L}$$. For $$\vec{s} \sample \mathcal{R}_q^n$$, $$\vec{e} \sample \chi^m$$, $$\bar{\vec{e}} \sample \bar{\chi}^k$$, $$\vec{x} \sample \mathcal{R}_q^m$$, the adversary $$\adv_1$$ is asked to distinguish the following distribution_

$$ (\mat{A}, \vec{y}^T = \vec{s}^T \cdot \mat{A} + \vec{e}^T, \vec{l}^T = \vec{e}^T \cdot \mat{Z} + \bar{\vec{e}}^T) \text{ from } (\mat{A}, \vec{x}^T, \vec{l}^T). $$

## Variants

### Noisy Error-Leakage LWE {#noisy-el-lwe}
_Noisy Error-Leakage LWE is a special case of elLWE, where $$\mat{Z} = \mat{I}_m$$._

The specialisation was introduced by Yin, Zhang, Dong, Wojtczak, and Lim in 2026 {% cite EPRINT:YZDWL26 %}. They describe the assumption as a special case of [Leaky LWE](/leaky-lwe/), which is itself a generalisation of elLWE and [Hint-LWE](/hint-lwe/) with tighter reductions.

## Hardness

LWE with Error-Leakage is at least as hard as [LWE](/lwe/) for discrete Gaussian error distributions and small losses in parameter choices according to Theorem 3 in {% cite EC:DKLLMR23 %}.

## Constructions built from elLWE {#constructions}

- Laconic and Registration-Based Encryption {% cite EC:DKLLMR23 %}
- Proxy Re-Encryption {% cite EPRINT:YZDWL26 %}

## Related Assumptions

- [Leaky LWE](/leaky-lwe/) generalises elLWE and provides a tighter reduction from LWE.
- [Hint MLWE](/hint-lwe/) also supports error-leakage in LWE instances.
