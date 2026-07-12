---
title: "Evasive LWE"
seo_title: "Evasive LWE"
family: "LWE"
graph_id: "Evasive-LWE"

last_modified_at: 2026-07-03
redirect_from:
  - /evasive_lwe/
  - /evasivelwe/
---

<style>
table.no-lines {
  margin: 0 auto 2em auto;
  width: max-content;
  max-width: 100%;
  display: block;
  overflow-x: auto;

  tbody tr:not(:last-child) td {
    border-bottom: none !important;
  }

  th, td {
    padding: 0.5em 1.5em !important;
  }
}
</style>

$$\newcommand{\aux}{\mathsf{aux}} \newcommand{\Samp}{\mathsf{Samp}} \newcommand{\tr}{\mathsf{T}}$$

Evasive LWE was first proposed by Wee in 2022 {% cite EC:Wee22 %}. The assumption intends to relate the hardness of two LWE problems with and without preimages. 

**Intuition**: Given a Gaussian preimage matrix $$\mat{U}$$ satisfying $$\mat{A} \cdot \mat{U} = \mat{P} \bmod q$$ for some target matrix $$\mat{P}$$ and some challenge $$\vec{c}^\tr$$ which is either LWE samples $$\vec{s}^\tr \cdot \mat{A} + \vec{e}^\tr \bmod q$$ or uniformly random, the assumption asserts that the only meaningful use of $$\mat{U}$$ is to right-multiply it to $$\vec{c}^\tr$$, obtaining $$\vec{s}^\tr \cdot \mat{P} + \text{error} \bmod q$$, and attempt to distinguish the LWE problem together with the latter. 

Formally, this is captured by a pair of $$\mathsf{Pre}$$ and $$\mathsf{Post}$$ experiments, where $$\mathsf{Post}$$ represents the LWE-with-preimages problem, and $$\mathsf{Pre}$$ represents an LWE problem induced by the said right-multiplication operation, which is without preimages and models the resulting product as fresh LWE samples. 

## Definition {% cite EC:Wee22 %}

Define two experiments: $$\mathsf{Pre}$$ and $$\mathsf{Post}$$.

| $$\mathsf{Pre}_\adv\left(1^\lambda\right)$$ | $$\mathsf{Post}_\bdv\left(1^\lambda\right)$$ |
| --- | --- |
| $$(\mat{P}, \mat{B}, \aux) \gets \Samp\left(1^\lambda\right)$$ | $$(\mat{P}, \mat{B}, \aux) \gets \Samp\left(1^\lambda\right)$$ |
| $$\mat{A} \sample \ZZ_q^{n \times m}$$ | $$\mat{A} \sample \ZZ_q^{n \times m}$$ |
| $$\vec{s} \sample \ZZ_q^{n}$$ | $$\vec{s} \sample \ZZ_q^{n}$$ |
| **if** $$b=0$$ **then** | **if** $$b=0$$ **then** |
| $$\quad \vec{e}_A \sample D_{\ZZ,\chi_A}^{m}, \vec{e}_B \sample D_{\ZZ,\chi_B}^{m_B}, \vec{e}_P \sample D_{\ZZ,\chi_P}^{m_P}$$ | $$\quad \vec{e}_A \sample D_{\ZZ,\chi_A}^{m}, \vec{e}_B \sample D_{\ZZ,\chi_B}^{m_B}$$ |
| $$\quad \vec{c}_A^\tr = \vec{s}^\tr \mat{A} + \vec{e}_A^\tr \bmod q$$ | $$\quad \vec{c}_A^\tr = \vec{s}^\tr \mat{A} + \vec{e}_A^\tr \bmod q$$ |
| $$\quad \vec{c}_B^\tr = \vec{s}^\tr \mat{B} + \vec{e}_B^\tr \bmod q$$ | $$\quad \vec{c}_B^\tr = \vec{s}^\tr \mat{B} + \vec{e}_B^\tr \bmod q$$ |
| $$\quad \vec{c}_P^\tr = \vec{s}^\tr \mat{P} + \vec{e}_P^\tr \bmod q$$ | $$\quad \mat{U} \sample D_{\Lambda_q^{\mat{P}}(\mat{A}), \sigma}$$ |
| **if** $$b=1$$ **then** | **if** $$b=1$$ **then** |
| $$\quad \vec{c}_A \sample \ZZ_q^{m}$$ | $$\quad \vec{c}_A \sample \ZZ_q^{m}$$ |
| $$\quad \vec{c}_B \sample \ZZ_q^{m_B}$$ | $$\quad \vec{c}_B \sample \ZZ_q^{m_B}$$ |
| $$\quad \vec{c}_P \sample \ZZ_q^{m_P}$$ | $$\quad \mat{U} \sample D_{\Lambda_q^{\mat{P}}(\mat{A}), \sigma}$$ |
| **return** $$b = \adv(\mat{A}, \mat{B}, \mat{P}, \vec{c}_A, \vec{c}_B, \vec{c}_P, \aux)$$ | **return** $$b = \bdv(\mat{A}, \mat{B}, \mat{P}, \vec{c}_A, \vec{c}_B, \mat{U}, \aux)$$ |
{: .no-lines }

### Evasive LWE$$_{q,n,m,m_B,m_P,\chi_A,\chi_B,\chi_P,\sigma}$$ {#evasive-lwe}
_Let $$\Samp$$ be a ppt algorithm which, on input $$1^\lambda$$, outputs $$(\mat{P}, \mat{B}, \aux)$$ $$\in$$ $$\ZZ_q^{n \times m_P} \times \ZZ_q^{n \times m_B} \times \set{0,1}^*$$, where $$\aux$$ contains all coin tosses used by $$\Samp$$. Let $$\chi_A$$, $$\chi_P$$, $$\chi_B$$, and $$\sigma$$ be positive Gaussian widths. The Evasive LWE assumption states that for any ppt $$\Samp$$ and $$\bdv$$ there exists a ppt $$\adv$$, a polynomial $$\poly{\cdot}$$ and a negligible function $$\negl{\cdot}$$, such that_

$$ \mathsf{Adv}_\adv^\mathsf{Pre}(\lambda) \geq \mathsf{Adv}_\bdv^\mathsf{Post}(\lambda) / \poly{\lambda} - \negl{\lambda}. $$

**Note 1**: The above definition is adapted from {% cite EC:Wee22 %} with the following changes: (1) each of the error vector $$\vec{e}$$ and the preimage matrix $$\mat{U}$$ is equipped with its own Gaussian width parameter, and (2) the distinguishers $$\mathcal{A}$$ and $$\mathcal{B}$$ are explicitly given $$\mat{P}$$ as input.
The first is to allow for more general parameter settings, for the potential of more fine-grained analyses on different settings. The latter is only for clarity and does not change the assumption, since $$\mat{P}$$ is recoverable from the coin tosses of $$\Samp$$, the latter included in $$\aux$$. 
There are also minor presentation and notational changes, which does not affect the actual assumption and are there to increase consistency with other contents in this Zoo.

**Note 2**: In Remark 2 of {% cite EC:Wee22 %}, it is noted that the Gaussian widths of the errors and preimages influence the assumption strength, in that larger error and preimage widths in $$\mathsf{Post}$$, and/or smaller error widths in $$\mathsf{Pre}$$, lead to a weaker assumption. In {% cite TCC:AMYY25 %} it is shown that if the error width $$\chi_P$$ in $$\mathsf{Pre}$$ is super-polynomially larger than the error and preimage widths $$\chi_A,\sigma$$ in $$\mathsf{Post}$$, then there are simple counterexamples to the statement. This counterexample crucially relies on the contrive parameter choices and does not apply otherwise.

IW: Below is WIP.

Due to the large number of variants, this assumption is also referred to as _Public-Coin Evasive LWE_ as it outputs all random coins computed in $$\Samp$$.

IW: I'd argue against called it "Public-Coin Evasive LWE'', since there are many different versions of "public-coin evasive LWE'' in the literature. There are also many that does not have a name but just called "evasive LWE'' by the paper which introduced them. I wonder if it is necessary to give each assumption and its variant a name. For example, what do you think if a variant is named just by the paper which introduced them? E.g. the one above would be called ``Evasive LWE (Wee22)'' or something in this direction.

JNS: I'd argue that we state all of the results regarding hardness, counterexamples / attacks directly below each variant on this page to keep the information grouped at one spot.

## Variants

### Circular Evasive LWE <a href="#" class="status-badge status-broken" data-tooltip="This assumption has been compromised by known attacks.">broken</a> {#circular-evasive-lwe}
_Brief informal description of this assumption or the differences to the above one. Whatever is shorter._
Collection of references that I'm aware of: {% cite TCC:AMYY25 %}

### Private-Coin Evasive LWE {#private-coin-evasive-lwe}
_Brief informal description of this assumption or the differences to one of the above one. Whatever is shorter._

Collection of references that I'm aware of: 2024 {% cite AC:BrzUnaWoo24 %}{% cite C:DJMMV25 %} These two might be the same: 2025 {% cite TCC:AMYY25 %}{% cite EPRINT:AMYY25 %} 2026: {% cite CiC:HuaHunYam26 %}

JNS: Define as many variants as you see fit / seems useful. Just copy the broken-badge wherever needed.

## Constructions built from Evasive LWE {#constructions}

- Broadcast Encryption {% cite EC:Wee22 %}
- Witness Encryption {% cite C:Tsabary22 %}{% cite AC:VaiWeeWic22 %}
- Zero-Knowledge SNARKS for UP {% cite C:MatPetVai24 %}
- SNARGs for NP {% cite STOC:JKLM25 %}
- Pseduorandom Obfuscation {% cite C:BDJMMPV25 %}
- Pseudorandom Functional Encryption {% cite EPRINT:AgrKumYam24b %}{% cite EPRINT:AgrKumYam24c %}
- Multi-Authority ABE {% cite TCC:WatWeeWu22 %}
- ABE for Turing Machines {% cite C:AgrKumYam24 %}
- Constant-Input ABE {% cite C:ARYY23 %}
- Unbounded Depth ABE {% cite FOCS:HsiLinLuo23 %}

## Related Assumptions (Optional)

- [Evasive SIS](/evasive-sis/) is the SIS version of Evasive LWE.
- [$$\ell$$-Succinct LWE](/l-succinct-lwe/) seems to be a more conservative successor assumption of Evasive LWE.

## Further Reading Suggestions

- [Workshop session from Simons Institute](https://simons.berkeley.edu/talks/optimal-broadcast-encryption-more-evasive-lwe) by Hoeteck Wee.
