---
title: "Assumption Template - title may contain math, long form and abbreviation"
seo_title: "Concise title without math"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "ID-in-graph"
assumption_status: "standard|implied|broken|remove-this-attribute"

last_modified_at: 2026-04-02
published: false
redirect_from:
  - /assumption_template/
---

A brief introduction and classification of the assumption with some citation {% cite STOC:Regev05 %}. Please add new references to `_bibliography/references.bib` with keys of the form known from [cryptobib](https://cryptobib.di.ens.fr/) and preferably bibtex records from [dblp](https://dblp.org/) or [eprint](https://eprint.iacr.org/) with `doi` and/or `url`-fields s.t. everyone can reach the paper within one click.

If you are referring to other problems or websites, please [link](/sis/) to them.

## Definition

### Abbreviation$$_{\mathsf{params}}$$ {#abbreviation}
_A formal definition of the assumption using math with math delimiters $$a = b$$, \\(b = c\\), or \\[c = d.\\]_
Centered math with important formulas requires a newline before and after the math delimiter:

$$ \mat{A} \cdot \vec{s} = \vec{0} \bmod q$$

## Variants (Optional)

If there are any variants of this assumption, define them formally. Below, you can provide some intution on this problem and briefly describe why this variant is as hard as the main assumption (giving an intuition on the reduction or describing the techniques used in the reduction).

## Hardness

Any reductions or cryptanalytic results providing confidence in the hardness of this assumption belong in this section. If possible, describe a brief description of the reduction(s) and/or cryptanalysis. Please refer to specific lemmas/theorems/sections in the paper(s) s.t. readers can find them quickly.

Any reductions in this section should be reflected as an edge in the [`graph`](/graph/).

## Constructions built from AssumptionName (Optional) {#constructions}

A list of constructions whose security is based on the assumption or described variants of it with references, e.g.
- One-way functions {% cite STOC:Ajtai96 %}
- Public-key encryption {% cite STOC:Regev05 %}

## Related Assumptions (Optional)

If there are any immediately related assumptions, list them here (potentially with a brief description of their relationship or key differences), e.g.
- [Randomised One-More-ISIS](/rom-isis/) doubles the length of matrix $$\mathbf{A}$$ and requires the vector multiplied by the second part to be binary (compared to One-More-ISIS).

## Further Reading Suggestions (Optional)

If there are any specific sections in papers, lecture notes, or well-written websites, which provide more insights on this assumption or immediately related topics, can be listed here, e.g.
- [Lecture notes](https://people.csail.mit.edu/vinodv/CS294/){:target="_blank"} by Vinod Vaikuntanathan
  - Lecture 3 on _Smoothing Parameter and Worst-case to Average-case Reduction for SIS_
  - Lecture 10 on _Ideal Lattices and Ring Learning with Errors_
