---
title: "Learning with Errors (LWE)"
seo_title: "LWE"
family: "LWE"
graph_id: "LWE"
assumption_status: "standard"

last_modified_at: 2026-04-11
redirect_from:
  - /learning_with_errors/
  - /learning-with-errors/
---

Learning with errors (LWE) is a computational, average-case problem introduced in 2005 by Oded Regev {% cite STOC:Regev05 %}, which is a generalisation of the [Learning Parity with Noise](/lpn/) problem. Regev showed that solving LWE is hard to solve on average if a version of the [shortest vector problem](https://en.wikipedia.org/wiki/Lattice_problem#Shortest_vector_problem_.28SVP.29){:target="_blank"} is hard in its worst-case.
LWE serves as the foundational pillar for a vast majority of modern lattice-based cryptography, including constructions for any primitive in cryptomania {% cite SCT:Impagliazzo95 %} such as public-key encryption, identity-based encryption, and fully homomorphic encryption.

## Definition
The LWE problem comes in two versions: Search and Decision. Both rely on a secret vector $\vec{s}$, a uniformly random matrix $\mat{A}$, and a short error vector $\vec{e}$ sampled from an error distribution $\chi$ (typically discrete Gaussian).

### Search LWE$_{n,m,q,\chi}$ {#search-lwe}
_Let matrix $\mat{A} \in \ZZ_q^{m \times n}$ and secret vector $\vec{s} \in \ZZ_q^n$ be chosen uniformly at random. Let $\vec{e} \in \ZZ_q^m$ be sampled from the error distribution $\chi$. Given the matrix $\mat{A}$ and the vector $\vec{b} = \mat{A} \cdot \vec{s} + \vec{e} \bmod q$, an adversary is asked to find the secret vector $\vec{s}$._

Without the error vector $\vec{e}$, finding $\vec{s}$ would require solving a system of linear equations, efficiently solvable using [Gaussian elimination](https://en.wikipedia.org/wiki/Gaussian_elimination){:target="_blank"}. The error $\vec{e}$ is supposed to _blur_ the structure of the underlying lattice.

### Decision LWE$_{n,m,q,\chi}$ {#decision-lwe}
_Let matrix $\mat{A} \in \ZZ_q^{m \times n}$ and secret vector $\vec{s} \in \ZZ_q^n$ be chosen uniformly at random. Let $\vec{e} \in \ZZ_q^m$ be sampled from the error distribution $\chi$. An adversary is asked to distinguish between the LWE distribution $(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e} \bmod q)$ and a uniformly random distribution over $\ZZ_q^{m \times n} \times \ZZ_q^m$._

For cryptographic constructions, Decision LWE is often more directly applicable (e.g., for achieving indistinguishability in encryption schemes). Search and Decision LWE are polynomially equivalent for typical parameter choices {% cite STOC:Regev05 %}. Thus, we only give the decision version of LWE below.

### Ring-LWE$_{m,q,\chi,\mathcal{R}}$ {#ring-lwe}
_Let $\mathcal{R}_q$ be the polynomial ring $\ZZ_q[X]/(f(X))$. Let $\vec{a} \in \mathcal{R}_q^m$ and $s \in \mathcal{R}_q$ be chosen uniformly at random, and let $\vec{e} \in \mathcal{R}_q^m$ be drawn from the error distribution $\chi$. The adversary is asked to distinguish the LWE distribution $(\vec{a}, \vec{b} = \vec{a} \cdot s + \vec{e})$ from a uniformly random distribution over $\mathcal{R}_q^m \times \mathcal{R}_q^m$ ._

Ring-LWE (R-LWE) {% cite EC:LyuPeiReg10 %} adds more structure to LWE by replacing matrix-vector multiplications with polynomial multiplications. In applications, this results in reduced key sizes and accelerated execution times (using the [NTT](https://en.wikipedia.org/wiki/Discrete_Fourier_transform_over_a_ring#Number-theoretic_transform){:target="_blank"}).
The polynomial $f(X)$ is typically a [cyclotomic polynomial](https://en.wikipedia.org/wiki/Cyclotomic_polynomial){:target="_blank"}, such as $X^d + 1$ where $d$ is a power of 2.

### Module-LWE$_{n,m,q,\chi,\mathcal{R}}$ {#module-lwe}
_Let $\mat{A} \in \mathcal{R}_q^{m \times n}$ be a uniformly random matrix and $\vec{s} \in \mathcal{R}_q^n$ be a random secret vector. Let $\vec{e} \in \mathcal{R}_q^m$ be sampled from the error distribution $\chi$. The adversary is asked to distinguish the LWE distribution $(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e})$ from a uniformly random distribution over $\mathcal{R}_q^{m \times n} \times \mathcal{R}_q^m$._

By using vectors/matrices over the ring $\mathcal{R}_q$, Module-LWE (M-LWE) {% cite DCC:LanSte15 %} can be seen as a generalisation of LWE and R-LWE whose definitions can be recovered by setting $\mathcal{R} = \ZZ$ and $n=1$ respectively.

## Variants

### Short Secret LWE$_{n,m,q,\chi}$ {#short-secret-lwe}
_Let matrix $\mat{A} \in \ZZ_q^{m \times n}$ be chosen uniformly at random. Let the **short** secret vector $\vec{s} \in \ZZ_q^n$ and $\vec{e} \in \ZZ_q^m$ be sampled from the error distribution $\chi$. An adversary is asked to distinguish between the LWE distribution $(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e} \bmod q)$ and a uniformly random distribution over $\ZZ_q^{m \times n} \times \ZZ_q^m$._

Short secret LWE (ssLWE) is also known as normal-form LWE and often referred to as LWE itself due to its frequent usage.

Applebaum et al. {% cite C:ACPS09 %} showed that ssLWE is at least as hard as standard LWE. The reduction utilises an invertible submatrix $\mat{A}_0$ from the LWE challenge matrix $\mat{A} = \begin{bmatrix} \mat{A}_0^T &\mat{A}_1^T \end{bmatrix}^T$. It defines the ssLWE challenge as $(-\mat{A}_1 \cdot \mat{A}_0^{-1}, \vec{b}_1 - \mat{A}_1 \cdot \mat{A}_0^{-1} \cdot \vec{b}_0)$ s.t. the resulting distribution

$$\begin{align}\vec{b}_1 - \mat{A}_1 \cdot \mat{A}_0^{-1} \cdot \vec{b}_0 &= \mat{A}_1 \cdot \vec{s} + \vec{e}_1 - \mat{A}_1 \cdot \mat{A}_0^{-1} \cdot \left( \mat{A}_0 \cdot \vec{s} + \vec{e}_0 \right) \\
&= - \mat{A}_1 \cdot \mat{A}_0^{-1} \cdot \vec{e}_0 + \vec{e}_1\end{align}$$

uses a short secret $\vec{e}_0$ sampled from the error distribution $\chi$ by splitting $\vec{b} = \begin{bmatrix} \vec{b}_0^T &\vec{b}_1^T \end{bmatrix}^T$ and $\vec{e} = \begin{bmatrix} \vec{e}_0^T &\vec{e}_1^T \end{bmatrix}^T$.

## Hardness

Regev {% cite STOC:Regev05 %} proved a worst-case hardness theorem for LWE.

**Theorem** _For any $m=\poly{n}$, any modulus $q \leq 2^{\poly{n}}$, and any (discretised) Gaussian error distribution $\chi$ of parameter $\alpha q \geq 2\sqrt{n}$ where $0 < \alpha < 1$, solving the decision-LWE$\_{n,m,q,\chi}$ problem is at least as hard as quantumly solving GapSVP$\_\gamma$ and SIVP$\_\gamma$ on arbitrary $n$-dimensional lattices, for some $\gamma = \bigO{n/\alpha}$._

Later, a completely _classical_ reduction to LWE was established {% cite STOC:Peikert09 %} and a dimension-modulus trade-off in the classical reduction established {% cite STOC:BLPRS13 %}.

Similar reductions exist for R-LWE and M-LWE for cyclotomic rings but their hardness relies on the worst-case hardness of GapSVP and SIVP over ideal and module lattices respectively {% cite EC:LyuPeiReg10 %}{% cite DCC:LanSte15 %}. Furthermore, R-LWE is at least as hard as [NTRU](/ntru/) as sketched in Section 4.4.4 of {% cite FTTCS:Peikert16 %}.

Cryptanalytically there are two families of strategies to solve LWE, which can be outlined in the following way:
- _Primal Attack:_ Transform an LWE challenge $(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e})$ into a (unique) shortest vector problem. We know the $q$-ary lattice defined by $$\mat{B} = \begin{bmatrix} \mat{A}^T &\vec{0} \\ \vec{b}^T &1 \end{bmatrix}$$ contains an unusually short vector since $\begin{bmatrix} -\vec{s}^T &1 \end{bmatrix} \cdot \mat{B} = \begin{bmatrix} \vec{e}^T &1 \end{bmatrix}$. Assuming an adversary recovers this short vector from the uSVP instance (using [basis reduction algorithms](https://en.wikipedia.org/wiki/Lattice_reduction){:target="_blank"}), it recovered the error vector, which enables recovery of the secret vector $\vec{s}$ using [Gaussian elimination](https://en.wikipedia.org/wiki/Gaussian_elimination){:target="_blank"} with $\mat{A}$ and $\vec{b} - \vec{e}$.
- _Dual Attack:_ To build a distinguisher for decision LWE, an adversary tries to solve the (scaled) dual [SIS](/sis/) challenge. Assuming it succeeds in finding a short non-zero SIS solution $\vec{u}^T$ s.t. $\vec{u}^T \cdot \mat{A} = \vec{0}$. If the challenger handed out the LWE challenge $(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e})$ then $\langle \vec{u}, \vec{b} \rangle = \langle \vec{u}, \vec{e} \rangle$ remains short. Otherwise, the result is uniformly distributed in $\ZZ_q$.

## Constructions built from LWE {#constructions}

This is a non-exhaustive list of constructions, whose security is or can be based on LWE (or R-LWE and M-LWE).
- Public-key encryption {% cite STOC:Regev05 %}{% cite STOC:GenPeiReg08 %}{% cite CTRSA:LinPei11 %}
- Key Encapsulation Mechanisms, including [ML-KEM](https://doi.org/10.6028/NIST.FIPS.203){:target="_blank"} ([Kyber](https://pq-crystals.org/kyber/){:target="_blank"})
- Fully Homomorphic Encryption {% cite FOCS:BraVai11 %}{% cite ITCS:BraGenVai12 %}
- Oblivious Transfer {% cite C:PeiVaiWat08 %}
- Identity-Based Encryption {% cite STOC:GenPeiVai08 %}{% cite EC:AgrBonBoy10 %}

## Related Assumptions

- [Short Integer Solution](/sis/) can be seen as a dual of LWE.
- [Learning Parity with Noise](/lpn/) yields a specialisation of LWE.
- [Learning with Rounding](/lwr/) replaces the randomised noise vector by a deterministic rounding operation compared to LWE.

## Further Reading Suggestions

- [Section 4.2](https://eprint.iacr.org/2015/939.pdf#page=24){:target="_blank"} in _A decade of lattice cryptography_ {% cite FTTCS:Peikert16 %}
- [Lecture notes](https://people.csail.mit.edu/vinodv/CS294/){:target="_blank"} by Vinod Vaikuntanathan
  - Lecture 1 on _SIS and LWE and applications_
  - Lecture 3 on _Reductions for LWE_
  - Lecture 10 on _Ideal lattices and ring learning with errors_
