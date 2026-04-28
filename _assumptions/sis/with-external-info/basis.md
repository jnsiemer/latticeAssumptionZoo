---
title: "Basis-Augmented SIS (BASIS)"
seo_title: "BASIS"
family: "SIS"
subfamily: "SIS with External Information"
graph_id: "BASIS"

last_modified_at: 2026-04-29
redirect_from:
  - /basis-augmented-sis/
  - /basis_augmented_sis/
---

$\newcommand{\rand}{\text{rand}}\newcommand{\struct}{\text{struct}}\newcommand{\power}{\text{power}}$
The Basis-Augmented SIS (BASIS) problem was introduced in 2023 by Wee and Wu {% cite EC:WeeWu23a %}.
They consider several instantiations of their proposed framework and utilise it to construct vector commitments, functional commitments, aggregatable commitments, and combinations thereof.

## Definition

### BASIS$_{n, q, \beta, m, n', m', \ell, s, \mathsf{Samp}}$
_Let $\mathsf{Samp}$ be an efficient sampling algorithm that takes a matrix $\mat{A} \in \ZZ_q^{n \times m}$ as input and outputs a matrix $\mat{B} \in \ZZ_q^{n' \times m'}$ with auxiliary information $\text{aux}$. Choose a matrix $\mat{A} \in \ZZ_q^{n \times m}$ uniform at random and run $(\mat{B}, \text{aux}) \gets \mathsf{Samp}(\mat{A})$. Compute a trapdoor $\mat{T} \sample \mat{B}^{-1}(\mat{G}\_{n'})$ for the matrix $\mat{B}$. Given $\mat{A}, \mat{B}, \mat{T},$ and $\text{aux}$, the adversary is asked to find a vector $\vec{z} \in \ZZ^m$ s.t._
\\[ \mat{A} \cdot \vec{z} = \vec{0} \bmod q \land 0 < \norm{\vec{z}} \leq \beta. \\]

Intuitively, the BASIS assumption states that it is hard to solve [SIS](/sis/) for $\mat{A}$, given a trapdoor for a matrix $\mat{B}$ related to $\mat{A}$.
The trapdoor allows the adversary to sample preimages of $\mat{B}$ and thus, it is easy to break the assumption if $\mat{B}$ contains too much information about $\mat{A}$, e.g. when $\mat{B} = \mat{A}$ according to Section 3 of {% cite JC:FenMogNgu24 %}.

## Variants
There are three concrete instantiations of the sampling algorithm $\mathsf{Samp}$.

### BASIS$_\text{rand}$ <a href="#" class="status-badge status-standard" data-tooltip="This is a standard assumption or there is a reduction from a standard assumption that does not impose unusually strict conditions on the parameters.">standard</a> {#BASIS_rand}
_The sampling algorithm $\mathsf{Samp}(\mat{A})$ samples $i^{\*} \sample [\ell], \mat{A}\_i \sample \ZZ_q^{(n+1) \times m}$ for all $i \neq i^{\*}, \vec{a} \sample \ZZ_q^m$, sets $\mat{A}\_{i^{\*}}^T = \begin{bmatrix} \vec{a} & \mat{A}^T \end{bmatrix}$, and outputs_

$$ \mat{B} = \left[ \begin{array}{ccc|c}
	\mat{A}_1	&	&	&-\mat{G}_{n+1} \\
		&\ddots		&	&\vdots \\
		&	&\mat{A}_\ell&-\mat{G}_{n+1}
\end{array} \right] \text{ and } \text{aux} = i^*.$$

This instantiation was proposed by Wee and Wu {% cite EC:WeeWu23a %}.
They proved BASIS$_\rand$ to be as hard as SIS in Lemmas 3.5 to 3.7 of {% cite EC:WeeWu23a %}. We briefly elaborate on this equivalence.

$$ \mat{B} \cdot \begin{bmatrix} \vec{z}_1 \\ \vdots \\ \vec{z}_\ell \\ \vec{z}_{\mat{G}} \end{bmatrix} = \vec{0} \Leftrightarrow \mat{A}_i \cdot \vec{z}_i =  \mat{G}_{n+1} \cdot \vec{z}_{\mat{G}} \text{ for all } i \in [\ell]$$

We can sample $\vec{z}\_{i^{\*}} \in \ZZ^m$ s.t. $\mat{A}\_{i^{\*}} \cdot \vec{z}\_{i^{\*}}$ is close to uniform.
Then, use the gadget structure of $\mat{G}\_{n+1}$ to find a short $\vec{z}\_{\mat{G}}$ so that $\mat{A}\_{i^{\*}} \cdot \vec{z}\_{i^{\*}} = \mat{G}\_{n+1} \cdot \vec{z}\_{\mat{G}}$.
All other matrices $\mat{A}\_i$ with $i \neq i^{\*}$ are chosen with a trapdoor.
Using these trapdoors, we can find short $\vec{z}\_i$ s.t. $\mat{A}\_i \cdot \vec{z}\_i = \mat{G}\_{n+1} \cdot \vec{z}\_{\mat{G}}$ holds for all $i \neq i^{\*}$.

In Section 7.2 of {% cite TCC:BCFL23 %}, a reduction from a modified ring-version of BASIS$_\rand$ to [Twin k-M-ISIS](/todo/) is sketched.
Nevertheless, a formal connection to standard assumptions like [R-SIS](/sis/#ring-sis_mqbetamathcalr) or [M-SIS](/sis/#module-sis_nmqbetamathcalr) is missing.

### BASIS$_{\text{struct}}$ {#BASIS_struct}
_The sampling algorithm $\mathsf{Samp}(\mat{A})$ samples $\mat{W}\_i \sample \ZZ_q^{n \times n}$ for all $i \in [\ell]$ and outputs_

$$ \mat{B} = \left[ \begin{array}{ccc|c}
	\mat{W}_1 \mat{A}	&	&	&-\mat{G}_{n} \\
	&\ddots		&	&\vdots \\
	&	&\mat{W}_\ell\mat{A}	&-\mat{G}_{n}
\end{array} \right] \text{ and } \text{aux} = (\mat{W}_1, \dots, \mat{W}_\ell). $$

This instantiation was also introduced by Wee and Wu {% cite EC:WeeWu23a %}.
They compare this instance to [k-M-ISIS](/todo/) by comparing the approach of publishing a full trapdoor for BASIS$\_\text{struct}$ with the approach of publishing short preimages.
The authors provide a reduction from k-M-ISIS to BASIS$\_\struct$ in Section 6 of {% cite EC:WeeWu23a %}.
The BASIS$\_\text{struct}$ instance solved in the reduction is of size $\ell < m/k$ for a k-M-ISIS challenge.

Wee and Wu utilise the hardness assumption of this problem for another application, namely a succinct vector commitment scheme that is secure if BASIS$_\struct$ is hard to solve according to Corollary 4.8 in {% cite EC:WeeWu23a %}.

### BASIS$_{\text{power}}$ {#BASIS_power}
_The sampling algorithm $\mathsf{Samp}(\mat{A})$ samples a vector $\vec{a} \sample \ZZ_q^m$ and an invertible matrix $\mat{W} \sample \ZZ_q^{(n+1) \times (n+1)}$. Set $\mat{A^{\*}}^T = \begin{bmatrix} \vec{a} & \mat{A}^T \end{bmatrix}$ and output_

$$ \mat{B} = \left[ \begin{array}{ccc|c}
	\mat{W}^0 \mat{A^*}	&	&	&-\mat{G}_{n} \\
	&\ddots		&	&\vdots \\
	&	&\mat{W}^{\ell -1}\mat{A^*}	&-\mat{G}_{n}
\end{array} \right] \text{ and } \text{aux} = \mat{W}. $$

As BASIS$\_\power$ is more structured than BASIS$\_\struct$, we might expect hardness results to translate to BASIS$\_\struct$. It turns out the additional structure allows to prove a small regime of parameters as hard as M-SIS.

This instantiation was first proposed by Fenzi et al. {% cite JC:FenMogNgu24 %}.
The authors utilise the BASIS$\_\text{power}$ assumption to prove the binding property of a commitment scheme.

The ring version of BASIS$\_\text{power}$, called Power Ring-BASIS (PRISIS), was also introduced in {% cite JC:FenMogNgu24 %}.
The authors show that PRISIS is at least as hard as M-SIS for $\ell = 2$ in Lemma 3.6 of {% cite JC:FenMogNgu24 %}.

## Hardness
For the general BASIS assumption, there are no known hardness results as its hardness depends crucially on the choice of the sampling algorithm $\mathsf{Samp}$. However, there are several (partial) reductions for the variants described above. Please find the reductions in the corresponding sections.

## Constructions built from BASIS {#constructions}
- Vector commitment {% cite EC:WeeWu23a %}
- Succinct functional commitment {% cite EC:WeeWu23a %}
- Polynomial commitment {% cite EC:WeeWu23a %}
- Aggregatable functional commitment {% cite EC:WeeWu23a %}

## Related Assumptions
- [k-M-ISIS](/kmisis/) is related to BASIS$\_\struct$ and was utilised for build similar construction.
- [$h$-BASIS](/h-basis/) is a multi-instance of BASIS.
- [$\ell$-Succinct SIS](/todo/) was inspired by BASIS$\_\struct$ and provides a similar structure.
