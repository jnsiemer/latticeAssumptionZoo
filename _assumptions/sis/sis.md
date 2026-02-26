---
title: "Short Integer Solution (SIS)"
seo_title: "SIS"
family: "SIS"

last_modified_at: 2026-02-25
redirect_from:
  - /short_integer_solution/
  - /short-integer-solution/
---

Short Integer Solution (SIS) is an average-case problem, which was introduced in 1996 by Miklós Ajtai {% cite STOC:Ajtai96 %}. He introduced a family of one-way functions based on SIS and showed that SIS is hard to solve on average if a version of the [shortest vector problem](https://en.wikipedia.org/wiki/Lattice_problem#Shortest_vector_problem_.28SVP.29) is hard in a worst-case scenario.

## Definition

### SIS$_{n,m,q,\beta}$
_Let matrix $\mat{A} \in \ZZ_q^{n \times m}$ be chosen uniformly at random. An adversary is asked to find a short non-zero vector $\vec{s} \in \ZZ_q^m$ satisfying $\mat{A} \cdot \vec{s} = \vec{0} \bmod q \land 0 < \norm{\vec{s}} \leq \beta$._

SIS intuitively states that it is hard to find a short vector in the kernel of matrix $\mat{A}$.
A solution to SIS without the condition $\norm{\vec{s}} \leq \beta$ can be found using [Gaussian elimination](https://en.wikipedia.org/wiki/Gaussian_elimination). Thus, the condition $\beta < q$ is required as otherwise $(q, 0, \dots, 0) \in \ZZ^m$ yields a trivial solution.

### Ring-SIS$_{m,q,\beta,\mathcal{R}}$
_Let matrix $\vec{a} \in \mathcal{R}_q^{n \times m}$ be chosen uniformly at random. An adversary is asked to find a short non-zero vector $\vec{s} \in \mathcal{R}^{n \times m}$ satisfying $\vec{a}^T \cdot \vec{s} = \vec{0} \bmod q \land 0 < \norm{\vec{s}} \leq \beta$._

Let $\mathcal{R}$ denote a polynomial ring $\ZZ_q[X]/(f(X))$. The function $f(X)$ is usually chosen as $(X^d + 1)$ with special interest in $d$ being a power of $2$ {% cite EC:LyuPeiReg10 %}. However, the Ring SIS (R-SIS) problem has also been studied for other choices such as $f(X) = (X^d - 1)$ {% cite FOCS:Micciancio02 %}{% cite TCC:PeiRos06 %}{% cite ICALP:LyuMic06 %}.

### Module-SIS$_{n,m,q,\beta,\mathcal{R}}$
_Let matrix $\mat{A} \in \mathcal{R}_q^{n \times m}$ be chosen uniformly at random. An adversary is asked to find a short non-zero vector $\vec{s} \in \mathcal{R}^m$ satisfying $\mat{A} \cdot \vec{s} = \vec{0} \bmod q \land 0 < \norm{\vec{s}} \leq \beta$._

While M-SIS is a less compact variant of SIS than R-SIS, the M-SIS problem is asymptotically at least as hard as R-SIS and therefore gives a tighter bound on the hardness assumption of SIS. This makes assuming the hardness of M-SIS a safer, but less efficient underlying assumption when compared to R-SIS {% cite DCC:LanSte15 %}.

## Variants

### Inhomogeneous SIS$_{n,m,q,\beta}$
_Let matrix $\mat{A} \in \ZZ_q^{n \times m}$ and target vector $\vec{t} \in \ZZ_q^n$ be chosen uniformly at random. An adversary is asked to find a short vector $\vec{s} \in \ZZ^m$ satisfying $\mat{A} \cdot \vec{s} = \vec{t} \bmod q \land \norm{\vec{s}} \leq \beta$._

The inhomogeneous version of SIS (ISIS) introduces a target vector $\vec{t} \in \ZZ_q^n$, which is chosen uniformly at random. The probability of ending up in the homogeneous case with $\vec{t} = \vec{0}$ happens with probability $q^{-n}$, which allows removing the condition $\vec{s} \neq \vec{0}$.

ISIS is as hard as SIS. A SIS instance can be reduced to ISIS using the last column of $\mat{A}$ as target vector for ISIS. Any solution $\vec{s} \in \ZZ^{m-1}$ of the ISIS instance with challenge matrix $\mat{A}_{[1:m-1]}$ and target vector $\vec{a}_m$ yields a valid SIS solution $(\vec{s}, 1) \in \ZZ^m$ of slightly larger norm. The reduction from ISIS to SIS requires index guessing a non-zero entry in the SIS solution and embedding the target vector at this position in the challenge matrix $\mat{A}$.

### Normal Form SIS$_{n,m,q,\beta}$
_Let matrix $\bar{\mat{A}} \in \ZZ_q^{n \times (m-n)}$ be chosen uniformly at random and define $\mat{A} = \begin{bmatrix} \mat{I}_n &\bar{\mat{A}} \end{bmatrix}$. An adversary is asked to find a short non-zero vector $\vec{s} \in \ZZ^m$ satisfying $\mat{A} \cdot \vec{s} = \vec{0} \bmod q \land 0 < \norm{\vec{s}} \leq \beta$._

Normal Form SIS (NFSIS) is related to the Hermite normal form of a uniformly random matrix $\mat{A} \in \ZZ_q^{n \times m}$. The normal form version of SIS is often used to reduce public key sizes by size $n$ as the static part of the matrix, the identity matrix $\mat{I}_n$, can be omitted for data transmission.

A SIS instance can be reduced to a NFSIS instance if the first $n$ columns of its challenge matrix $\mat{A}$ are invertible over $\ZZ_q$. Assuming this is the case, denote the first $n$ columns of 
$\mat{A}$ by $\mat{A}_0$ and define the NFSIS challenge matrix by $\mat{A}_0^{-1} \cdot \mat{A}$. Then, any solution of the NFSIS instance is a solution of the SIS instance and vice versa.

### Further Variants
- SIS with infinity norm {% cite EC:Lyubashevsky12 %}
- Decision SIS {% cite EC:Lyubashevsky12 %}, which can be seen as a version of the leftover hash lemma.

## Hardness

The initial hardness results of Ajtai {% cite STOC:Ajtai96 %} in 1996 were later refined by a series of works {% cite FOCS:MicReg04 %}{% cite STOC:GenPeiVai08 %}{% cite CRYPTO:MicPei13 %}. All results follow are instances of the following theorem.

**Theorem** {% cite FTTCS:Peikert16 %} For any $m = \poly{n}$, any $\beta > 0$, and any sufficiently large $q \geq \beta \cdot \poly{n}$, solving SIS$\_{n,m,q,\beta}$ with non-negligible probability is at least as hard as solving the decisional approximate shortest vector problem GapSVP$\_\gamma$ and the approximate shortest independent vectors problems SIVP$\_\gamma$ (among others) on arbitrary n-dimensional lattices (i.e., in the worst case) with overwhelming probability, for some $\gamma = \beta \cdot \poly{n}$.

Similar reductions exist for R-SIS and M-SIS but their hardness relies on the worst-case hardness of SIVP over ideal and module lattices respectively {% cite EC:LyuPeiReg10 %}{% cite DCC:LanSte15 %}. R-SIS as defined above is broken for cyclic lattices, i.e. $\mathcal{R} = \ZZ[X]/(X^d - 1)$, but there are refined versions for cyclic lattices with worst-case to average-case reductions {% cite FOCS:Micciancio02 %}{% cite TCC:PeiRos06 %}{% cite ICALP:LyuMic06 %}.

## Constructions built from SIS

This is a non-exhaustive list of constructions, whose security is or can be based on SIS (or R-SIS and M-SIS).
- One-way function {% cite STOC:Ajtai96 %}
- Collision-resistant hash function
- Preimage Sampleable Function {% cite STOC:GenPeiVai08 %}
- Signatures {% cite EC:Lyubashevsky12 %}{% cite STOC:GenPeiVai08 %}{% cite PKC:Boyen10 %}
- Commitments {% cite SCN:BDLOP18 %}{% cite CRYPTO:LyuNguPla22 %}
- Vector and functional commitments {% cite TCC:PeiPepSha21 %}

## Related Assumptions

- [Approximate SIS](/approxsis/)
- [Learning with Errors](/lwe/) 

## Further Reading Suggestions

- [Section 4.1](https://eprint.iacr.org/2015/939.pdf#page=20) in _A decade of lattice cryptography_ {% cite FTTCS:Peikert16 %}
- [Lecture notes](https://people.csail.mit.edu/vinodv/CS294/) by Vinod Vaikuntanathan
  - Lecture 3 on _Smoothing Parameter and Worst-case to Average-case Reduction for SIS_
  - Lecture 10 on _Ideal Lattices and Ring Learning with Errors_

