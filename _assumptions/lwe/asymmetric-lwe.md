---
title: "Asymmetric LWE"
seo_title: "Asymmetric LWE"
family: "LWE"
graph_id: "Asymmetric-LWE"
assumption_status: "implied"

last_modified_at: 2026-06-10
redirect_from:
  - /asymmetric_lwe/
  - /asymmetriclwe/
---

Asymmetric LWE was introduced in 2020 by Zhang, Yu, Fan, Zhang, and Yang {% cite PKC:ZYFZY20 %} to describe an optimised Key Encapsulation Mechanism (KEM) by purposefully allowing for some asymmetry between secret and error distribution.

## Definition

### Asymmetric LWE$$_{n,m,q,\chi,\alpha_s,\alpha_e}$$ {#asymmetric-lwe}
_Let matrix $$\mat{A} \in \ZZ_q^{m \times n}$$ be chosen uniformly at random. Sample secret vector $$\vec{s} \sample \chi_{\alpha_s}^n$$ and error vector $$\vec{e} \sample \chi_{\alpha_e}^m$$. An adversary is asked to distinguish between the following distributions_

$$(\mat{A}, \vec{b} = \mat{A} \cdot \vec{s} + \vec{e}) \text{ and } \mathcal{U}\left(\ZZ_q^{m \times n} \times \ZZ_q^m\right).$$

Asymmetric LWE allows the secret vector and error vector to be drawn from differently parameterised distributions. In {% cite PKC:ZYFZY20 %}, they rely on the module-version of Asymmetric LWE.

## Hardness

In {% cite PKC:ZYFZY20 %}, they claim that Asymmetric LWE$$_{n,m,q,\chi,\alpha_s,\alpha_e}$$ is at least as hard as [LWE](/lwe/)$$_{n,m,q,\chi_{\min(\alpha_s,\alpha_e)}}$$ and at most as hard as LWE$$_{n,m,q,\chi_{\max(\alpha_s,\alpha_e)}}$$ w.r.t. "all known solving algorithms despite the absence of a general proof".

The reduction from [Short Secret LWE](/lwe/#short-secret-lwe)$$_{n,m,q,\chi_{\min(\alpha_s,\alpha_e)}}$$ to Asymmetric LWE$$_{n,m,q,\chi,\alpha_s,\alpha_e}$$ holds for discrete Gaussian and (centered) binomial distributions. These hold due to the fact that
- $$D_{\Lambda_0, s_0} + D_{\Lambda_1, s_1}$$ is statistically close to $$D_{\Lambda_0 + \Lambda_1, \sqrt{s_0^2 + s_1^2}}$$ according to Lemma 4.12 in {% cite PKC:BonFre11 %}
- $$\mathsf{Bin}(x, p) + \mathsf{Bin}(y, p) = \mathsf{Bin}(x+y, p)$$, which is a [well-known fact](https://en.wikipedia.org/wiki/Binomial_distribution#Sums_of_binomials){:target="_blank"}.

However, a reduction from LWE would introduce a loss in LWE samples $$m$$ and for several distributions, it is unclear whether a reduction exists. Therefore, the authors of {% cite PKC:ZYFZY20 %} describe further cryptanalytic approaches against Asymmetric LWE in Section 5.


## Constructions built from Asymmetric LWE {#constructions}

- Optimised signature {% cite PKC:ZYFZY20 %}{% cite PKC:JinJiaQu26 %}
- Optimised Key Encapsulation Mechanism {% cite PKC:ZYFZY20 %}

## Related Assumptions

- [Asymmetric SIS](/asymmetric-sis/) is the SIS version of Asymmetric LWE.
