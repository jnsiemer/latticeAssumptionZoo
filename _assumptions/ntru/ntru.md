---
title: "NTRU"
family: "NTRU"
graph_id: "NTRU"
assumption_status: "standard"

last_modified_at: 2026-03-27
---

NTRU is a computational problem introduced in 1996 by Hoffstein, Pipher, and Silverman {% cite ANTS:HofPipSil98 %}. Predating [Learning with Errors](/lwe/) by nearly a decade, NTRU relies on the hardness of finding short vectors in a specific class of structured ideal lattices known as "NTRU lattices".
It serves as computational hardness assumption for key exchange mechanisms, public-key encryption schemes, and unforgeable signatures.

## Definition

The NTRU problem comes in two versions: Search and Decision.

### Search NTRU$_{q, \chi, \mathcal{R}}$ {#search-ntru}
_Let $\mathcal{R}_q$ be the polynomial ring $\ZZ_q[X]/(f(X))$ and let $f,g \in \mathcal{R}$ be short polynomials sampled from some distribution $\chi$, subject to $f$ being invertible in $\mathcal{R}_q$. Define $h=g/f \in \mathcal{R}_q$. Given $h$, an adversary is asked to find $f$ and $g$ (or another pair of short polynomials $f', g'$ satisfying $h= g'/f'$)._

The distribution $\chi$ is usually chosen as the uniform tertiary distribution $U(\set{-1,0,1})$.
Classical NTRU picks the function $f$ as $f(X) = X^d - 1$ with prime $d$ and $q$ being a power of two {% cite ANTS:HofPipSil98 %}.
Similar to [R-LWE](/lwe/#ring-lwe), several modern papers rather choose $f(X) = X^d + 1$ with $d$ a power of two and prime modulus $q \in 1 + 2d\ZZ$ to enable the [NTT](https://en.wikipedia.org/wiki/Discrete_Fourier_transform_over_a_ring#Number-theoretic_transform){:target="_blank"} fast matrix multiplication.
Furthermore, there exists parameter choices of NTRU such as NTRU Prime {% cite SAC:BCLV17 %} with $\mathcal{R} = \ZZ[X] / (X^d - X - 1)$ to reduce specific attack surfaces.

### Decision NTRU$_{q, \chi, \mathcal{R}}$ {#decision-ntru}
_Let $\mathcal{R}_q$ be the polynomial ring $\ZZ_q[X]/(f(X))$ and let $f,g \in \mathcal{R}$ be short polynomials sampled from some distribution $\chi$, subject to $f$ being invertible in $\mathcal{R}_q$. An adversary is asked to distinguish between the NTRU distribution $h = g/f \in \mathcal{R}_q$ and a uniform distribution over $\mathcal{R}_q$._

The decisional version of NTRU is also referred to as Decisional Small Polynomial Ratio (DSPR) assumption {% cite STOC:LopTroVai12 %}.

## Modern Utilisation

NTRU is frequently utilised either in combination with or as a highly efficient replacement for [SIS](/sis/) or [LWE](/lwe/) assumptions. This approach typically offers more efficient parameter sets as a trade-off for relying on the more structured cryptographic assumption NTRU. Notable examples of this include:
- [Falcon](https://falcon-sign.info/): The signature scheme is built upon the GPV framework, which is proven secure based on SIS. Falcon specifically instantiates the framework over NTRU lattices for smaller parameters.
- NTRU-ISIS$_f$: An assumption utilised to construct efficient anonymous credentials (as detailed in Section 7 of {% cite C:BLNS23 %}). By relying on this NTRU-instantiated variant rather than ISIS$_f$ itself, the authors are able to achieve better concrete parameters.

**Note:** Specific "derived" or "hybrid" assumptions such as NTRU-ISIS$_f$ are currently considered out of scope for entries in the Lattice Assumption Zoo to keep the focus on the fundamental ideas behind new assumptions and prevent artificial expansion.

## Hardness

Compared to lattices utilised in SIS and LWE assumptions, NTRU lattices contain an unusually short vector as well as all vectors corresponding to rotations of $(f,g)$ and their linear combinations. Thus, NTRU lattices contain an unusually dense sublattice.

For $\chi$ chosen as a discrete Gaussian distribution $D_{\ZZ^d, \sigma}$, $s > \sqrt{q} \cdot \poly{n}$, and $f(X) = X^d + 1$ with $d$ a power of two, the NTRU distribution is statistially close to uniform over all invertible elements in $\mathcal{R}_q$ and this variant of decision NTRU is hard -- even for unbounded adversaries {% cite EC:SteSte11 %}. This result was extended to all cyclotomic rings in {% cite SAC:WanWan18 %}.

Nevertheless, the reduction sketched out in Section 4.4.4 of {% cite FTTCS:Peikert16 %} shows that [R-LWE](/lwe/#ring-lwe) is at least as hard as NTRU, providing an _upper bound_ to the hardness of NTRU.

After all, the hardness of NTRU crucially relies on the choice of $\chi$, $\mathcal{R}$ and $q$ as well as the specified wiggle room for the NTRU solution. There are several partial reductions to and from NTRU for specific choices of parameters as well as 25 years of cryptanalysis. Their results are decently summarised (and partially provided) in the following two papers:
- [On the hardness of NTRU](https://ia.cr/2021/821) {% cite AC:PelSte21 %}
- [Lattice attacks on NTRU and LWE: a history of refinements](https://ia.cr/2021/799) {% cite EPRINT:2021/799 %}

Any reductions in this section should be reflected as an edge in the [`graph`](/graph/).

## Constructions built from NTRU {#constructions}

- Signatures {% cite CTRSA:HHPSW03 %}{% cite DCC:WKHLKLP26 %} or [Falcon](https://falcon-sign.info/)
- Public-key encryption {% cite ANTS:HofPipSil98 %} or [NTRU](https://ntru.org/), [NTRU Prime](https://ntruprime.cr.yp.to/)
- Fully Homomorphic Encryption {% cite STOC:LopTroVai12 %}

## Related Assumptions

- [Ring-LWE](/lwe/#ring-lwe) provides similar capabilities and operates on more general lattices.
