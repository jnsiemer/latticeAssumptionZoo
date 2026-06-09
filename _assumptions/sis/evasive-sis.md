---
title: "Evasive SIS"
seo_title: "Evasive SIS"
family: "SIS"
graph_id: "Evasive-SIS"

last_modified_at: 2026-06-08
redirect_from:
  - /evasive_sis/
  - /evasivesis/
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

Evasive SIS was informally introduced by Wee in 2022 {% cite EC:Wee22 %} (in conjunction with the public-coin [Evasive LWE](/TODO/) assumption) and envisioned as a tool for analysing the plausibility of SIS-based hinted lattice assumptions. However, the assumption was first formalised by Dubois, Klooß, Lai, and Woo in 2025 {% cite PKC:DKLW25 %} to propose a family of proof-friendly signatures based on [Vanishing SIS](/TODO/) and Evasive SIS.
$$\newcommand{\aux}{\mathsf{aux}} \newcommand{\Samp}{\mathsf{Samp}}$$

## Definition

Define two experiments: $$\mathsf{Pre}$$ and $$\mathsf{Post}$$.

| $$\mathsf{Pre}_\adv\left(1^\lambda\right)$$ | $$\mathsf{Post}_\bdv\left(1^\lambda\right)$$ |
| --- | --- |
| $$(\mat{P}, \mat{A}, \aux) \gets \Samp\left(1^\lambda\right)$$ | $$(\mat{P}, \mat{A}, \aux) \gets \Samp\left(1^\lambda\right)$$ |
| $$\mat{B} \sample \mathcal{R}_q^{n \times m}$$ | $$\mat{B} \sample \mathcal{R}_q^{n \times m}$$ |
| | $$\mat{U} \sample D_{\mathcal{R},s}^{m \times m_P}$$ conditioned on $$\mat{B} \cdot \mat{U} = \mat{P}$$ |
| $$\vec{u}^* \gets \adv(\mat{B}, \mat{P}, \mat{A}, \aux)$$ | $$\vec{u}^* \gets \bdv(\mat{B}, \mat{P}, \mat{A}, \mat{U}, \aux)$$ |
| $$b_0 = \left( \begin{bmatrix} \mat{B} &\mat{P} &\mat{A} \end{bmatrix} \cdot \vec{u}^* = \vec{0} \right)$$ | $$b_0 = \left( \begin{bmatrix} \mat{B} &\mat{A} \end{bmatrix} \cdot \vec{u}^* = \vec{0} \right)$$ |
| $$b_1 = \left( 0 < \norm{\vec{u}^*} \leq \beta_0 \right)$$ | $$b_1 = \left( 0 < \norm{\vec{u}^*} \leq \beta_1 \right)$$ |
| **return** $$b_0 \land b_1$$ | **return** $$b_0 \land b_1$$ |
{: .no-lines }

### Evasive SIS$$_{\mathcal{R},q,n,m,m_P,m_A,s,\beta_0,\beta_1}$$ {#evasive-sis}
_Let $$\mathcal{R}$$ be a ring admitting an embedding as a lattice in $$\RR^\varphi$$ for some $$\varphi \in \NN$$ and $$s, \beta_0, \beta_1 > 0$$. Let $$\Samp$$ be a ppt algorithm which, on input $$1^\lambda$$, outputs $$(\mat{P}, \mat{A}, \aux)$$ $$\in$$ $$\mathcal{R}_q^{n\times m_P} \times \mathcal{R}_q^{n \times m_A} \times \set{0,1}^*$$, where $$\aux$$ contains all coin tosses used by $$\Samp$$. The Evasive SIS assumption states that for any ppt $$\Samp$$ and $$\bdv$$ there exists a ppt $$\adv$$ such that_

$$ \Pr\left[\mathsf{Pre}_\adv\left(1^\lambda\right) = 1 \right] \geq \Pr\left[\mathsf{Post}_\bdv\left(1^\lambda\right) = 1\right]/\poly{\lambda} - \negl{\lambda}. $$

Intuitively, the evasive SIS assumption states that "if SIS is hard for the matrix $$\begin{bmatrix} \mat{B} &\mat{P} &\mat{A} \end{bmatrix}$$, then SIS is hard for $$\begin{bmatrix} \mat{B} &\mat{A} \end{bmatrix}$$ even given short preimages $$\mat{U}$$ s.t. $$\mat{B} \cdot \mat{U} = \mat{P}$$". This stems from the intuition that, there seems no alternative meaningful use of $$\mat{U}$$, other than multiplying with $$\mat{B}$$ to obtain $$\mat{P}$$ and solve (the potentially easier) SIS problem for $$\begin{bmatrix} \mat{B} &\mat{P} &\mat{A} \end{bmatrix}$$ jointly.

The presented definition is public-coin, i.e. $$\Samp$$ has to output all its random coins, which avoids most known obfuscation-based counterexamples against private-coin evasive LWE {% cite AC:BrzUnaWoo24 %}{% cite C:DJMMV25 %}{% cite CiC:HuaHunYam26 %}. Shortly after this paper was published, {% cite TCC:AMYY25 %} provided counterexamples against public-coin Evasive LWE in an unnatural parameter regime and a small refinement of the assumption.

## Hardness

In Section 2.3 of {% cite PKC:DKLW25 %}, the authors note that Evasive SIS is heuristically at least as hard as public-coin Evasive LWE by following a common heuristic that solving decision-LWE is no easier than solving SIS (which is quantumly true for random matrices {% cite AC:SSTX09 %}).

## Constructions built from Evasive SIS {#constructions}

- Proof-friendly signatures {% cite PKC:DKLW25 %}

## Related Assumptions

- [Evasive LWE](/TODO/) is the LWE version of Evasive SIS.
