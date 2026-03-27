---
title: "Learning Parity with Noise (LPN)"
seo_title: "LPN"
family: "LPN"
graph_id: "LPN"
assumption_status: "standard"

last_modified_at: 2026-02-27
redirect_from:
  - /learning-parity-with-noise/
  - /learning_parity_with_noise/
---

Learning Parity with Noise (LPN) is a computational problem adjacent to code-based cryptography that can be viewed as a direct predecessor and a special case of [Learning with Errors](/lwe/) restricted to the binary field $\ZZ_2$. LPN is equivalent to the problem of decoding random linear codes, a well-known NP-complete problem in coding theory {% cite TIT:BerMcETil78 %}.
Because it relies on simple bitwise operations, LPN yields a solid foundation to design lightweight constructions.

## Definition
The LPN problem comes in two versions: Search and Decision. Both rely on a Bernoulli distribution $\mathsf{Ber}(\tau)$, where an error bit is $1$ with probability $\tau \in (0, 1/2)$ and $0$ otherwise.

### Search LPN$_{n,m,\tau}$
_Let matrix $\mat{A} \in \ZZ_2^{m \times n}$ and secret vector $\vec{s} \in \ZZ_2^n$ be chosen uniformly at random. Let $\vec{e} \in \ZZ_2^m$ be sampled from $\text{Ber}(\tau)$. Given the matrix $\mat{A}$ and the vector $\vec{b} = \mat{A} \cdot \vec{s} + \vec{e} \bmod 2$, an adversary is asked to find the secret vector $\vec{s}$._

Without the error vector $\vec{e}$, recovering $\vec{s}$ would be a trivial matter of solving a system of linear equations over $\ZZ_2$ using [Gaussian elimination](https://en.wikipedia.org/wiki/Gaussian_elimination){:target="_blank"}. The introduction of random bit-flips, referred to as error or noise, makes the system computationally hard to solve.

### Decision LPN$_{n,m,\tau}$
_Let matrix $\mat{A} \in \ZZ_2^{m \times n}$ and secret vector $\vec{s} \in \ZZ_2^n$ be chosen uniformly at random. Let $\vec{e} \in \ZZ_2^m$ be sampled from $\text{Ber}(\tau)$. An adversary is asked to distinguish between the LPN distribution $(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e} \bmod 2)$ and a uniformly random distribution over $\ZZ_2^{m \times n} \times \ZZ_2^m$._

For cryptographic constructions, Decision LPN is often more directly applicable (e.g., for achieving indistinguishability for pseudorandom generators). Search and Decision LPN are polynomially equivalent for typical parameter choices {% cite SOFSEM:Pietrzak12 %}. Thus, we only give the decision version below.

### Ring-LPN$_{m,\tau,\mathcal{R}}$
_Let $\mathcal{R}_2$ be the polynomial ring $\ZZ_2[X]/(f(X))$. Let $\vec{a} \in \mathcal{R}_2^m$ and $s \in \mathcal{R}_2$ be chosen uniformly at random, and let $\vec{e} \in \mathcal{R}_2^m$ be drawn such that its coefficients follow $\text{Ber}(\tau)$. The adversary is asked to distinguish the distribution $(\vec{a}, \vec{b} = \vec{a} \cdot s + \vec{e} \bmod 2)$ from a uniformly random distribution over $\mathcal{R}_2^m \times \mathcal{R}_2^m$._

Ring-LPN {% cite FSE:HKLPP12 %}, inspired by [Ring-LWE](/lwe/#ring-lwe_mqchimathcalr) {% cite EC:LyuPeiReg10 %}, adds algebraic structure by working over polynomial rings instead of binary matrices, which enables more efficient matrix multiplication via [NTT](https://en.wikipedia.org/wiki/Discrete_Fourier_transform_over_a_ring#Number-theoretic_transform){:target="_blank"}.
The polynomial $f(X)$ is typically an [irreducible polynomial](https://en.wikipedia.org/wiki/Cyclotomic_polynomial){:target="_blank"} over $\FF_2$ s.t. $\FF_2[X]/f(X)$ is a field.

## Hardness

The close connection of LPN to the NP-hard problem of decoding random linear codes {% cite TIT:BerMcETil78 %} is an indicator of its hardness.
Furthermore, we can assess against the best known algorithms to solve LPN. A famous algorithm for solving LPN is the BKW algorithm {% cite STOC:BluKalWas00 %} requiring $2^{\bigO{n / \log n}}$ operations and $m=2^{\bigO{n / \log n}}$ samples. This approach was later refined in {% cite SCN:LevFou06 %} and {% cite IMACC:DelEssMay19 %}. If given only polynomially many samples $m=\poly(n)$, the running time of the best algorithm goes up to $2^{\bigO{n / \log \log n}}$ {% cite APPROX:Lyubashevsky05 %}.

## Constructions built from LPN

- One-Way Functions {% cite SOFSEM:Pietrzak12 %}, generically implying
  - Pseudorandom Generators (PRG)
  - Pseudorandom Function (PRF)
  - Pseudorandom Permutations (PRP)
- Secret-key Encryption {% cite ICALP:GilRobSeu08 %}
- Secret-key Identification and Authentication {% cite AC:HopBlu01 %}{% cite C:JueWei05 %}{% cite EC:KatShi06 %}
- Commitments {% cite EPRINT:2012/513 %}
- Zero-Knowledge Proof of Knowledge {% cite EPRINT:2012/513 %}

## Related Assumptions

- [Learning with Errors](/lwe/) is a generalisation of LPN from $\ZZ_2$ to $\ZZ_q$.
- [Syndrome Decoding Problem](https://en.wikipedia.org/wiki/Decoding_methods#Syndrome_decoding)

## Further Reading Suggestions

- [Cryptography from Learning Parity with Noise](https://doi.org/10.1007/978-3-642-27660-6_9) summarising the state of research (in 2012)
