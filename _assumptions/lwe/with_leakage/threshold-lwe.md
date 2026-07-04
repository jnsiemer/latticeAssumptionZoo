---
title: "Threshold LWE"
seo_title: "Threshold LWE"
family: "LWE"
subfamily: "LWE with Leakage"
graph_id: "Threshold-LWE"
assumption_status: "implied"

last_modified_at: 2026-07-04
redirect_from:
  - /threshold_lwe/
  - /thresholdlwe/
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

Threshold LWE was introduced by Cini, Lai, and Woo in 2025 {% cite AC:CinLaiWoo25 %}. The assumption roughly states that LWE-vector $$\vec{b}$$ remains pseudorandom even when given additional information of $$(\vec{x}_j, (\vec{b}_{k,j})_{k \in I_j})_j$$, where $$\vec{x}_j$$ are short vectors and $$\vec{b}_{k,j}^T \approx \vec{s}_k^T \mat{A} \vec{x}_j$$ are LWE samples under secret $$\vec{s}_k$$, the $$k$$-th Shamir's secret share of the original LWE secret $$\vec{r}$$ with evaluation points chosen from suitable subtractive sets.

## Definition

| $$\mathsf{Real-thLWE}_{\adv,\mathcal{S}}\left(1^\lambda\right)$$ | $$\mathsf{Ideal-thLWE}_{\adv,\mathcal{S}}\left(1^\lambda\right)$$ |
| --- | --- |
| $$L_\mathsf{LWE}[\cdot] = \emptyset, L_\mathsf{SIS}[\cdot] = \emptyset$$ | $$L_\mathsf{LWE}[\cdot] = \emptyset, L_\mathsf{SIS}[\cdot] = \emptyset$$ |
| $$\mat{A} \sample \mathcal{R}_q^{n \times m}$$ | $$\mat{A} \sample \mathcal{R}_q^{n \times m}$$ |
| $$\mathcal{C} \gets \adv(\mat{A});$$ **assert** $$\abs{\mathcal{C}} < t$$ | $$\mathcal{C} \gets \adv(\mat{A});$$ **assert** $$\abs{\mathcal{C}} < t$$ |
| $$\mat{R} = (\vec{r}_i^T)_{i \in [t]} \sample \mathcal{R}_q^{t \times n}$$ | |
| $$\mat{S}_\mathcal{S} = \mat{V}_\mathcal{S} \cdot \mat{R} \in \mathcal{R}_q^{\abs{\mathcal{C}} \times n}$$ | $$\mat{S}_\mathcal{S} = \mathcal{R}_q^{\abs{\mathcal{C}} \times n}$$ |
| $$\vec{r} = \vec{v}_0^T \mat{R}; \vec{e} \sample D_{\mathcal{R},\chi}^m$$ | |
| $$\vec{b}^T = \vec{r}^T \mat{A} + \vec{e}^T$$ | $$\vec{b}^T \sample \mathcal{R}_q^m$$ |
| | $$\mathsf{st} \gets \mathcal{S}_\mathsf{Init}(\mat{A}, \vec{b}, \mat{S}_\mathcal{C})$$ // State of simulator $$\mathcal{S}$$ |
| $$b' \gets \adv^{\mathsf{GenISIS, GenLWE, ShareISIS, ShareLWE}}(\vec{b}, \mat{S}_\mathcal{C})$$ | $$b' \gets \adv^{\mathsf{GenISIS, GenLWE, ShareISIS, ShareLWE}}(\vec{b}, \mat{S}_\mathcal{C})$$ |
| **return** $$b'$$ | **return** $$b'$$ |
{: .no-lines }

- $$\mathsf{GenISIS}$$: Sample a short vector $$\vec{x}$$, compute $$\vec{y} = \mat{A}\vec{x}$$ and return $$(\vec{x}, \vec{y})$$. Internally, for each $$k \in [K]$$, generate the LWE samples $$c_k = \vec{s}_k^T\vec{y} + e_k$$, where $$\vec{s}_k$$ is the $$k$$-th share of the main LWE secret $$\vec{r}$$ and store them in the table entry $$L_\mathsf{ISIS}[\vec{y}]$$.
- $$\mathsf{GenLWE}$$: Sample a uniformly random $$\vec{y} \sample \mathcal{R}_q^n$$, generate an LWE sample $$z = \vec{r}^T\vec{y} + e$$ (using the main LWE secret $$\vec{r}$$) and return $$(\vec{y},z)$$. Internally, generate the LWE samples $$d_k = \vec{s}_i^T\vec{y} + e_k$$ and store them in the table entry $$L_\mathsf{LWE}[\vec{y}]$$.
- $$\mathsf{SimISIS}$$: Generate and return $$(\vec{x}, \vec{y})$$ as in $$\mathsf{GenISIS}$$. Internally, run the simulator $$\mathcal{S}$$ on $$\vec{x}$$ to simulate the table entry $$L_\mathsf{ISIS}[\vec{y}]$$.
- $$\mathsf{SimLWE}$$: Generate and return $$(\vec{y}, z)$$ as in $$\mathsf{GenLWE}$$. Internally, for each $$k \in [K]$$, run the simulator $$\mathcal{S}$$ on $$\vec{y}$$ to simulate the table entry $$L_\mathsf{LWE}[\vec{y}]$$.
- $$\mathsf{ShareISIS}$$: On input $$(\vec{y}, k)$$, return the value $$c_k$$ stored in $$L_\mathsf{ISIS}[\vec{y}]$$.
- $$\mathsf{ShareLWE}$$: On input $$(\vec{y}, k)$$, return the value $$d_k$$ stored in $$L_\mathsf{LWE}[\vec{y}]$$.

### Threshold LWE$$_{\mathcal{R},n,m,q,\mathcal{D}_x,\chi,t,K,\Xi}$$ {#threshold-lwe}
_Let $$\mathcal{D}_x$$ and $$\chi$$ be distributions over $$\mathcal{R}^m$$ and $$\mathcal{R}$$ respectively. $$t\leq K$$ are threshold parameters and $$\Xi$$ is a size-$$K$$ subtractive set. The Treshold LWE assumption holds if there exists a ppt simulator $$\mathcal{S} = (\mathcal{S}_\mathsf{Init},\mathcal{S}_\mathsf{ISIS},\mathcal{S}_\mathsf{LWE})$$, s.t. for any ppt $$\adv$$, for $$\set{\mathsf{Real, Ideal}}-\mathsf{thLWE}_{\adv,\mathcal{S}}^b(1^\lambda)$$ defined above, it holds that_

$$ \abs{\Pr[\mathsf{Real-thLWE}_{\adv,\mathcal{S}}(1^\lambda)=1] - \Pr[\mathsf{Ideal-thLWE}_{\adv,\mathcal{S}}(1^\lambda)=1]} \leq \negl{\lambda}. $$

The authors further define minor versions of Threshold LWE, which they denote $$\mathsf{th-$-LWE}$$ and Bounded $$\mathsf{th-$-LWE}$$ following their naming scheme for Threshold LWE as $$\mathsf{thLWE}$$. Please check their minor differences in the paper.

## Hardness

Theorem 2 in {% cite AC:CinLaiWoo25 %} state that $$\mathsf{th-$-LWE}$$ is at least as hard as LWE with modulus $$q \leq \sqrt{Q} \cdot K^t \cdot \poly{\lambda}$$, i.e. the result assumes that $$q$$ is super-polynomial in the security parameter in applications. In Theorem 1, they consider the assumption with an a priori bounded number of queries $$Q_\mathsf{ISIS}, Q_\mathsf{LWE} = \poly{\lambda}$$ to the $$\mathsf{GenISIS}$$/$$\mathsf{SimISIS}$$ and $$\mathsf{GenLWE}$$/$$\mathsf{SimLWE}$$ oracles to obtain a reduction from LWE to $$Q_\mathsf{ISIS}, Q_\mathsf{LWE}$$-bounded $$\mathsf{th-$-LWE}$$ with polynomial size modulus $$q$$.

## Constructions built from Threshold LWE {#constructions}

- Distributed Pseudorandom Function {% cite AC:CinLaiWoo25 %}
- Threshold Public-Key Encryption {% cite AC:CinLaiWoo25 %}

## Related Assumptions

- [Learning with Errors](/lwe/)
