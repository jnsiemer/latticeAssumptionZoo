---
title: "H-ISIS"
seo_title: "H-ISIS"
family: "SIS"
subfamily: "SIS with Hints"
graph_id: "H-ISIS"

last_modified_at: 2026-05-19
redirect_from:
  - /h-isis/
  - /h_isis/
---

The H-ISIS assumption was introduced by Albrecht, Lai, and Postlethwaite in 2026 {% cite EPRINT:2026/187 %}. The assumption provides a polynomial number of preimages of $$\vec{0}$$ along with an [ISIS](/sis/#inhomogeneous-sis) challenge matrix and asks for a preimage of a random target.

There is a reduction from the [_space-time hardness of SIS_](#space-time-hardness): the assumption that SIS is not solvable in $$2^{\bigO{m}}$$ time and polynomial memory. If further $$m \in o(n \log n)$$ then this conjecture is implied by the conjectured space-time hardness of worst-case lattice problems, previously considered in the literature and explicitly conjectured by Lombardi and Vaikuntanathan {% cite C:LomVai20 %}.

H-ISIS suggests that the salt utilised in GPV-style signatures, e.g. Falcon, could be omitted for sufficiently tight norm bounds. Further, the security of a proof-friendly [ISIS$$_\mathsf{bin}$$](/isisf/#hardness)-style signature relies on [H-SIS](#h-sis). This proof-friendly signature can be utilised in the [GenISIS$$_f$$](/genisisf/) framework to generically derive advanced privacy preserving primitives such as blind signatures and anonymous credentials.
$$\newcommand{\Dist}{\mathsf{Dist}}$$

## Definition

### H-ISIS$$_{n,m,q,\beta,k,\mathsf{Dist}}$$ {#h-isis}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ and vector $$\vec{t} \in \ZZ_q^n$$ be chosen uniformly at random and $$\Dist$$ be a distribution mapping $$\mat{A}$$ to $$\Lambda_q^\perp(\mat{A})^k$$. Sample $$k$$ hints $$\set{\vec{u}_i}_{i \leq k}$$ from $$\Dist(\mat{A})$$. Given $$\mat{A}$$, $$\vec{t}$$, and $$\set{\vec{u}_i}_{i \leq k}$$, an adversary is asked to find a short vector $$\vec{u}^* \in \ZZ^m$$ s.t._

$$ \mat{A} \cdot \vec{u}^* = \vec{t} \bmod q \land \norm{\vec{u}^*} \leq \beta. $$

Usually $$\Dist$$ is defined as $$D_{\Lambda_q^\perp(\mat{A}), \sigma}$$. Therefore, H-ISIS intuitively asks for a ISIS solution given SIS hints. Naturally, the norm bound $$\beta$$ is upper bounded by $$\beta < \sqrt{m}\norm{\vec{u}_i}$$ as the SIS hints build a short basis trapdoor, which can be utilised to sample preimages of length $$\sqrt{m} \norm{\vec{u}_i}$$ in arbitrary cosets (target vectors).

The hardness of the H-ISIS assumption crucially relies on the following conjecture.

### Conjecture: Space-time hardness of SIS {#space-time-hardness}
_If $$m \in o(n \log n), \beta \in \poly{n}$$, and $$q \geq 8n\sqrt{m}\beta$$ then there is no algorithm solving SIS$$_{n,m,q,\beta}$$ using only $$\poly{m}$$ memory with runtime $$2^{\bigO{m}}$$._

## Variants

In addition to H-ISIS, Albrecht, Lai, and Postlethwaite introduce two further assumptions, which can be utilised as building blocks in the framework to reduce H-ISIS to the space-time hardness of SIS.

### H-SIS$$_{n,m,q,\beta,k,\mathsf{Dist}}$$ {#h-sis}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ be chosen uniformly at random and $$\Dist$$ be a distribution mapping $$\mat{A}$$ to $$\Lambda_q^\perp(\mat{A})^k$$. Sample $$k$$ hints $$\set{\vec{u}_i}_{i \leq k}$$ from $$\Dist(\mat{A})$$. Given $$\mat{A}$$ and $$\set{\vec{u}_i}_{i \leq k}$$, an adversary is asked to find a short non-zero vector $$\vec{u}^* \in \ZZ^m$$ s.t._

$$ \mat{A} \cdot \vec{u}^* = \vec{0} \bmod q \land 0 < \norm{\vec{u}^*} \leq \beta. $$

Rather than asking for a ISIS solution, H-SIS asks for a SIS solution, given SIS hints. Therefore, H-SIS can only be hard if $$\beta < \norm{\vec{u}_i}$$ or if the adversary's output is entropic, i.e. calling it many times results in many different outputs.

### H-SIGS$$_{n,m,q,\beta,k,\mathsf{Dist}}$$ {#h-sigs}
_Let matrix $$\mat{A} \in \ZZ_q^{n \times m}$$ be chosen uniformly at random and $$\Dist$$ be a distribution mapping $$\mat{A}$$ to $$\Lambda_q^\perp(\mat{A})^k$$. Sample $$k$$ hints $$\set{\vec{u}_i}_{i \leq k}$$ from $$\Dist(\mat{A})$$. Given $$\mat{A}$$ and $$\set{\vec{u}_i}_{i \leq k}$$, an adversary is asked to find a short generating set $$\mat{U}^* \in \ZZ^{m \times n}$$ of $$\Lambda_q^\perp(\mat{A})$$ s.t._

$$ \mat{A} \cdot \mat{U}^* = \mat{0} \bmod q \land \norm{\mat{U}^*} \leq \beta \land \Lambda(\mat{U}^*) = \Lambda_q^\perp(\mat{A}). $$

The `G` in H-SIGS specifies that the solution must be a generating set of $$\Lambda_q^\perp(\mat{A})$$. The H-SIGS problem ensures that the hints are always generated over the same lattice in the framework described below.

## Hardness

In all cases, the hardness of the problems above depends critically on the relation of the norm bound $$\beta$$ and the norm of the hints $$\norm{\vec{u}_i}$$. If the ration of these two quantities is $$\bigO{1}$$ and if $$m = \bigO{n}$$ then there is a reduction for some $$\beta$$ from the space-time hardness of approximate SVP to H-ISIS. Each of these conditions can be relaxed slightly conditioned on the overall cost staying below $$2^{o(n \log n)}$$, since for $$2^{\Theta(n \log n)}$$ algorithms are known in polynomial memory (enumeration).

For the H-SIS and H-SIGS variant, the problem is considered hard if $$\beta$$ is smaller than the norms of the hints. This can be formally established for some parameters if the H-SIS or H-SIGS solutions are well-distributed, e.g. Gaussian. When $$\beta$$ is larger than the norms of the hints, the H-SIS problem is still non-trivial provided the H-SIS solver is entropic: calling it many times will produce many different outputs.

The reduction from worst-case approximate SVP first reduces to SIS. Then, a H-ISIS solver is turned into an entropic H-SIS solver with $$\beta$$ bigger than the norm of the hints in polynomial time. As a next step, the reduction turns such an entropic solver into another H-SI(G)S solver for $$\beta$$ smaller than the norms of the hints. Recursively feeding the outputs of this algorithm to an H-ISIS solver that expects hints with smaller norms but outputs solutions for a smaller $$\beta$$ then allows to solve SIS with tight norm bounds.

Further, the authors {% cite EPRINT:2026/187 %} essentially provide a lower bound on the hardness of H-ISIS by reducing [One-More-ISIS](/om-isis/) to H-ISIS.

## Constructions built from H-ISIS {#constructions}

- H-ISIS suggests that double-signing for GPV-style signatures with tight norm bound and without any salt should be secure 

## Related Assumptions

- [One-More-ISIS](/om-isis/) provides an adaptive ISIS-solver but expects one more solution than queries made to the ISIS-solver.
- [$$k$$-SIS](/ksis/) provides a small number of SIS hints and restricts the space of solutions to non-linear combinations of the given hints.

## Further Reading Suggestions

- [Blog article](https://martinralbrecht.wordpress.com/2026/06/12/hardness-of-hinted-isis-from-the-space-time-hardness-of-lattice-problems/) by Martin Albrecht on the hardness of hinted ISIS
