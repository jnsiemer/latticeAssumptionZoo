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

Evasive LWE was first proposed by Wee in 2022 {% cite EC:Wee22 %}. TODO: Whatever seems to be a good, short introduction.
$$\newcommand{\aux}{\mathsf{aux}} \newcommand{\Samp}{\mathsf{Samp}}$$

## Definition

Define two experiments: $$\mathsf{Pre}$$ and $$\mathsf{Post}$$.

| $$\mathsf{Pre}_\adv\left(1^\lambda\right)$$ | $$\mathsf{Post}_\bdv\left(1^\lambda\right)$$ |
| --- | --- |
| $$(\mat{P}, \mat{A}, \aux) \gets \Samp\left(1^\lambda\right)$$ | $$(\mat{P}, \mat{A}, \aux) \gets \Samp\left(1^\lambda\right)$$ |
| $$\mat{B} \sample \mathcal{R}_q^{n \times m}$$ | $$\mat{B} \sample \mathcal{R}_q^{n \times m}$$ |
| **assert** $$\mat{P} \in \mat{B}\mathcal{R}_q^{m \times m_P}$$ | **assert** $$\mat{P} \in \mat{B}\mathcal{R}_q^{m \times m_P}$$ |
| $$(\mat{S},\mat{S}_A) \sample \mathcal{S}$$ | $$(\mat{S},\mat{S}_A) \sample \mathcal{S}$$ |
| **if** $$b=0$$ **then** | **if** $$b=0$$ **then** |
| $$\quad \mat{E}_A \sample \chi_A, \mat{E}_B \sample \chi_B, \mat{E}_P \sample \chi_P$$ | $$\quad \mat{E}_A \sample \chi_A, \mat{E}_B \sample \chi_B, \mat{E}_P \sample \chi_P$$ |
| $$\quad \mat{C}_A = \mat{S}_A \mat{A} + \mat{E}_A$$ | $$\quad \mat{C}_A = \mat{S}_A \mat{A} + \mat{E}_A$$ |
| $$\quad \mat{C}_B = \mat{S} \mat{B} + \mat{E}_B$$ | $$\quad \mat{C}_B = \mat{S} \mat{B} + \mat{E}_B$$ |
| $$\quad \mat{C}_P = \mat{S} \mat{P} + \mat{E}_P$$ | $$\quad \mat{U} \sample D_{\Lambda_q^{\mat{P}}(\mat{B}), \Sigma}$$ |
| **if** $$b=1$$ **then** | **if** $$b=1$$ **then** |
| $$\quad \mat{C}_A \sample \mathcal{R}_q^{t_A \times m_A}$$ | $$\quad \mat{C}_A \sample \mathcal{R}_q^{t_A \times m_A}$$ |
| $$\quad \mat{C}_B \sample \mathcal{R}_q^{t \times m}$$ | $$\quad \mat{C}_B \sample \mathcal{R}_q^{t \times m}$$ |
| $$\quad \mat{C}_P \sample \mathcal{R}_q^{t \times m_P}$$ | $$\quad \mat{U} \sample D_{\Lambda_q^{\mat{P}}(\mat{B}), \Sigma}$$ |
| **return** $$b = \adv(\mat{A}, \mat{B}, \mat{P}, \aux, \mat{C}_A, \mat{C}_B, \mat{C}_P)$$ | **return** $$b = \bdv(\mat{A}, \mat{B}, \mat{P}, \aux, \mat{C}_A, \mat{C}_B, \mat{U})$$ |
{: .no-lines }

### Evasive LWE$$_{\mathcal{R},q,n,n_A,m,m_P,m_A,t,t_A,\mathcal{S},\chi_B,\chi_P,\chi_A,\Sigma}$$ {#evasive-lwe}
_Let $$\mathcal{R}$$ be a ring admitting an embedding as a lattice in $$\RR^\varphi$$ for some $$\varphi \in \NN$$. Let $$\Samp$$ be a ppt algorithm which, on input $$1^\lambda$$, outputs $$(\mat{P}, \mat{A}, \aux)$$ $$\in$$ $$\mathcal{R}_q^{n \times m_P} \times \mathcal{R}_q^{n_A \times m_A} \times \set{0,1}^*$$, where $$\aux$$ contains all coin tosses used by $$\Samp$$. Let $$\mathcal{S}$$, $$\chi_B$$, $$\chi_P$$, and $$\chi_A$$ be distributions over $$\mathcal{R}_q^{t \times n} \times \mathcal{R}_q^{t_A\times n_A}$$, $$\mathcal{R}_q^{t \times m}$$, $$\mathcal{R}_q^{t \times m_P}$$, and $$\mathcal{R}_q^{t_A \times m_A}$$ respectively with positive semidefinite matrix $$\Sigma$$. The Evasive LWE assumption states that for any ppt $$\Samp$$ and $$\bdv$$ there exists a ppt $$\adv$$ such that_

$$ \mathsf{Adv}_\adv^\mathsf{Pre}(\lambda) \geq \mathsf{Adv}_\bdv^\mathsf{Post}(\lambda) / \poly{\lambda} - \negl{\lambda}. $$

Note that the above definition is the original definition by Wee {% cite EC:Wee22 %}. Due to the large number of variants, this assumption is also referred to as _Public-Coin Evasive LWE_ as it outputs all random coins computed in $$\Samp$$.

TODO: Intuition

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
