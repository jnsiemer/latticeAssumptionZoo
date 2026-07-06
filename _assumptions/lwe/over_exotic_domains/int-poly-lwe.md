---
title: "Integer Polynomial LWE"
seo_title: "Integer Polynomial LWE"
family: "LWE"
subfamily: "LWE over Exotic Domains"
graph_id: "I-PLWE"

last_modified_at: 2026-07-06
redirect_from:
  - /int_poly_lwe/
  - /intpolylwe/
  - /integer-polynomial-lwe/
  - /integer_polynomial_lwe/
  - /integerpolynomiallwe/
  - /iplwe/
---

The Integer Polynomial LWE (I-PLWE) problem was introduced by Gu in 2017 {% cite SocialSec:Gu19 %} as an integer-version of the [Polynomial LWE](/lwe/#ring-lwe) assumption, today often referred to as Ring LWE.

## Definition

First, we define the representatives range for $$\ZZ_{f(q)}$$. Let $$q > 2$$ and $$f \in \ZZ[X]$$ monic of degree $$m>0$$. Then, define

$$I_{f,q} = \begin{cases} 
  \left(\frac{q}{2}\frac{q^m-1}{q-1} - f(q), \frac{q}{2}\frac{q^m-1}{q-1}\right] &\text{if } q \text{ even and } q\frac{q^m-1}{q-1}\geq f(w) \geq q^m, \\
  \left(-\frac{q-2}{2}\frac{q^m-1}{q-1}, f(q)-\frac{q-2}{2}\frac{q^m-1}{q-1}\right] &\text{if } q \text{ even and } q^m > f(q) > (q-2)\frac{q^m-1}{q-1}, \\
  \left(-f(q)/2, f(q)/2\right] &\text{otherwise.}
\end{cases}$$

Whenever we consider an element $$\bar{a}$$ of $$\ZZ_{f(q)}$$ and want to choose a representative $$a \in \ZZ$$ for it, we will choose it such that $$a \in I_{f,q}$$.

### I-PLWE$$_{q,f,\sigma,\sigma',t}$$ {#i-plwe}
_Let $$q>2$$,$$\sigma > \sigma' > 0$$,$$f\in \ZZ[X]$$ monic of degree $$m>0$$, and $$\sigma>0$$. Define $$D_{\ZZ_{f(q)},\sigma,q}$$ as the distribution obtained by sampling $$E \sample D_{\ZZ^{<m+1}[X],\sigma,q}$$, setting $$e = E(q)$$ and rejecting if it does not belong to $$I_{f,q}$$. Sample $$s \sample D_{\ZZ_{f(q)},\sigma',q}$$, $$\vec{a} \sample \ZZ_{f(q)}^t$$, and $$e \sample D_{\ZZ_{f(q)},\sigma,q}^\ell$$. Given $$(\vec{a}, \vec{a} \cdot s + \vec{e}) \in \ZZ_{f(q)}^t \times \ZZ_{f(q)}^t$$, an adversary is asked to find the secret $$s$$._

Similarly, one can define an integer version of [Module-LWE](/lwe/#module-lwe).

## Hardness

Gu {% cite SocialSec:Gu19 %} shows that I-PLWE is asymptotically equivalent to Polynomial LWE. Concrete equivalence results (with polynomial-time reduction algorithms) for the search variant of I-PLWE was provided in {% cite PKC:DSSS21 %}. Their results apply to a large class of defining polynomials $$f$$.

## Constructions built from I-PLWE {#constructions}

- Public-Key Encryption {% cite SocialSec:Gu19 %}{% cite PKC:DSSS21 %}
- Key Exchange Mechanism {% cite NISTPQC:Hamburg19 %}

## Related Assumptions

- [Ring-LWE](/lwe/#ring-lwe), historically referred to as Polynomial LWE.
