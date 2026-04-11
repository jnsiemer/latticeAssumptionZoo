---
title: "Learning with Rounding (LWR)"
seo_title: "Learning with Rounding"
family: "LWE"
graph_id: "LWR"
assumption_status: "standard"

last_modified_at: 2026-04-11
redirect_from:
  - /learning_with_rounding/
  - /learning-with-rounding/
---

The Learning with Rounding (LWR) problem was introduced by Banerjee, Peikert, and Rosen {% cite EC:BanPeiRos12 %} as a derandomized alternative to [Learning with Errors](/lwe/). Instead of hiding the linear structure of the underlying lattice by adding random noise, LWR obfuscates it by deterministically rounding the product from a larger modulus $q$ to a smaller modulus $p$.

By avoiding the requirement to sample discrete Gaussian noise (which is hard to implement in a side-channel secure way), LWR yields a solid foundation to build efficient cryptographic primitives such as PRFs or PKE.

## Definition

First, we need to define a _rounding_ function $\lfloor \cdot \rceil_p: \ZZ_p \rightarrow \ZZ_q$ for $q \geq p \geq 2$ in the following way.

$$ \lfloor x \rceil_p = \left\lfloor \frac{p}{q} \cdot (x \bmod q) \right\rceil \bmod p $$

Applying this function to a vector or matrix denotes the component-wise application of the function. Furthermore, the function naturally adapts to other rounding methods like $\lfloor \cdot \rfloor$ or $\lceil \cdot \rceil$. Notice that $\lfloor \cdot \rfloor_p$ is equivalent to dropping the least-significant digits in base $b$ if $q$ and $p$ are both powers of the same base $b$.

### Search LWR$_{n,m,q,p}$
_Let matrix $\mat{A} \in \ZZ_q^{m \times n}$ and secret vector $\vec{s} \in \ZZ_q^n$ be chosen uniformly at random. Given the matrix $\mat{A}$ and the vector $\lfloor \vec{b} \rceil_p = \lfloor \mat{A} \cdot \vec{s} \rceil_p \in \ZZ_p^m$, an adversary is asked to find the secret vector $\vec{s}$._

By rounding to the nearest integer modulo $p$, the challenger implicitly introduces a noise vector whose norm depends on $q$ and $p$.

### Decision LWR$_{n,m,q,p}$
_Let matrix $\mat{A} \in \ZZ_q^{m \times n}$ and secret vector $\vec{s} \in \ZZ_q^n$ be chosen uniformly at random. An adversary is asked to distinguish between the LWR distribution $(\mat{A}, \lfloor \vec{b} \rceil_p = \lfloor \mat{A} \cdot \vec{s} \rceil_p)$ and a uniformly random distribution over $\ZZ_q^{m \times n} \times \ZZ_p^m$._

In {% cite EC:BanPeiRos12 %}, they define a ring-version of LWR and build a PSF from it. Similarly, there exists a module-version defined in {% cite AFRICACRYPT:DKRV18 %}.

## Hardness

There are several papers providing a reduction from LWE to LWR. The first one required the modulus $q$ and the modulus-to-error ratio to grow super-polynomial {% cite EC:BanPeiRos12 %}. These requirement could be improved in {% cite C:AKPW13 %} to polynomially sized moduli and modulus-to-error ratios. Further follow-up work has since improved on the provable security of LWR {% cite TCC:BGMRR16 %}.

Note that the reductions presented above were not generalised to the ring- or module-setting. An attempt to prove Ring-LWR secure was made in {% cite AC:CheZhaZha18 %} by giving a reduction from Ring-LWE to a modified version of R-LWR.

## Constructions built from LWR

- Pseudorandom Functions {% cite EC:BanPeiRos12 %}
- Key Exchange Mechanism {% cite AFRICACRYPT:DKRV18 %}
- Public-Key Encryption {% cite AFRICACRYPT:DKRV18 %}

## Related Assumptions

- [Learning with Errors](/lwe/) uses random noise rather than deterministic rounding compared to LWR.
