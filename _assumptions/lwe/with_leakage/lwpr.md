---
title: "Learning with Physical Rounding (LWPR)"
seo_title: "Learning with Physical Rounding"
family: "LWE"
subfamily: "LWE with Leakage"
graph_id: "LWPR"

last_modified_at: 2026-06-30
redirect_from:
  - /learning-with-physical-rounding/
  - /learning_with_physical_rounding/
  - /learningwithphysicalrounding/
---

Learning with Physical Rounding (LWPR) was introduced by Duval, Méaux, Momin, and Standaert in 2021 {% cite TCHES:DMMS21 %}. The assumption is motivated by the security and efficiency of fresh re-keying, which is a countermeasure against side-channel analysis. The LWPR problem attempts to formalise this security in a practically-relevant model where the adversary can observe noise-free leakages. It can be viewed as a physical version of the [Learning With Rounding](/lwr/) problem, where the rounding is performed by a leakage function.

## Definition

### LWPR$$_{n,m,p,\mathsf{L}_g}$$ {#lwpr}
_Let $$p$$ be prime and $$\mathsf{L}_g: \ZZ_p^m \rightarrow \RR^d$$ define a physical rounding function. Fix some $$\mat{K} \in \ZZ_p^{m \times (n+1)}$$ and sample $$\vec{r} \sample \ZZ_p^n$$. An adversary is asked to recover $$\mat{K}$$ given samples from the distribution_

$$ \left( \vec{r}, \mathsf{L}_g \left( \mat{K} \cdot \begin{bmatrix} \vec{r} \\ 1 \end{bmatrix} \right)  \right). $$

## Hardness

The work of Duval et al. {% cite TCHES:DMMS21 %} analyses LWPR for the specific case of Hamming weight leakage. They provide a few insecure choices and propose a first cryptanalysis target. Subsequent work by Hoffmann, Méaux, Momin, Rotella, Standaert, and Udvarhelyi {% cite C:HMMRSU23 %} generalise the security of LWPR beyond Hamming weight leakage functions by showing that security against algebraic cryptanalysis is preserved in the practical context of linear leakage functions (i.e., functions that can be expressed as a weighted sum of the bits manipulated by an implementation). These works contain several further findings that we omit here.

## Constructions built from LWPR {#constructions}

Not explicitely, but fresh re-keying in key-homomorphic primitives should be among the candidates.

## Related Assumptions

- [Learning with Alternating Moduli](/lwam/) is also motivated by crypto dark matter.
