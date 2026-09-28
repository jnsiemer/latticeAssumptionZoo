---
title: "Middle-Product LWE (MP-LWE)"
seo_title: "Middle-Product LWE"
family: "LWE"
subfamily: "Structured LWE"
graph_id: "MP-LWE"
assumption_status: "implied"

last_modified_at: 2026-09-28
redirect_from:
  - /mp_lwe/
  - /mplwe/
  - /middle-product-lwe/
  - /middle_product_lwe/
  - /middleproductlwe/
  - /middle-product-learning-with-errors/
  - /middle_product_learning_with_errors/
  - /middleproductlearningwitherrors/
  - /mp-lwr/
  - /mp_lwr/
  - /mplwr/
  - /mp-clwr/
  - /mp_clwr/
  - /mpclwr/
---

Middle-Product LWE (MP-LWE) was introduced by Roşca, Sakzad, Stehlé, and Steinfeld in 2017 {% cite C:RSSS17 %} as the LWE counterpart of Lyubashevsky's $$\mathcal{R}^{<n}$$-SIS problem {% cite AC:Lyubashevsky16 %}. Instead of multiplying polynomials modulo a fixed polynomial $$f$$ as in [Ring-LWE](/lwe/#ring-lwe) (or rather its polynomial version, Polynomial-LWE), MP-LWE multiplies polynomials over $$\ZZ_q$$ and only keeps the _middle_ coefficients of the product. As the problem is not parametrized by any defining polynomial $$f$$, it is at least as hard as Polynomial-LWE (and Ring-LWE) for every $$f$$ within an exponentially large family of polynomials. Thus, MP-LWE hedges against the risk that a specific ring turns out to be weak, while still enabling constructions with quasi linear key sizes and runtimes such as public key encryption, signatures, and identity-based encryption.

## Definition

We denote by $$\ZZ_q^{<k}[x]$$ the set of polynomials of degree $$< k$$ with coefficients in $$\ZZ_q$$ (similarly for other rings) and write $$\RR_q := \RR / q\ZZ$$.

### Middle-Product$$_d$$ {#middle-product}
_Let $$d_a, d_b, d, k$$ be integers such that $$d_a + d_b - 1 = d + 2k$$. The middle-product $$\odot_d: \ZZ^{<d_a}[x] \times \ZZ^{<d_b}[x] \rightarrow \ZZ^{<d}[x]$$ is the map_

$$ (a, b) \mapsto a \odot_d b = \left\lfloor \frac{(a \cdot b) \bmod x^{k+d}}{x^k} \right\rfloor. $$

In other words, the middle-product multiplies $$a$$ and $$b$$, deletes the $$k$$ lowest and the $$k$$ highest coefficients of $$a \cdot b$$, and keeps the $$d$$ coefficients in the middle. It originates from computer algebra, where it is used to accelerate polynomial arithmetic {% cite AAECC:HanQueZim04 %}. The middle-product is additively homomorphic in each argument and satisfies the following associativity property (Lemma 3.3 of {% cite C:RSSS17 %}), which ensures the correctness of MP-LWE-based encryption schemes: For any $$r \in \ZZ^{<k+1}[x]$$, $$a \in \ZZ^{<n}[x]$$, and $$s \in \ZZ^{<n+d+k-1}[x]$$, it holds that

$$ r \odot_d (a \odot_{d+k} s) = (r \cdot a) \odot_d s. $$

### Search MP-LWE$$_{n,d,m,q,\chi}$$ {#search-mp-lwe}
_Let $$\chi$$ be a distribution over $$\RR^{<d}[x]$$. Sample the secret $$s \sample \ZZ_q^{<n+d-1}[x]$$ uniformly at random, as well as $$a_i \sample \ZZ_q^{<n}[x]$$ and $$e_i \sample \chi$$ for $$i \in [m]$$. Given the samples $$\set{(a_i, b_i = a_i \odot_d s + e_i)}_{i \in [m]}$$, an adversary is asked to find the secret $$s$$._

### Decision MP-LWE$$_{n,d,m,q,\chi}$$ {#decision-mp-lwe}
_Let $$\chi$$ be a distribution over $$\RR^{<d}[x]$$. Sample the secret $$s \sample \ZZ_q^{<n+d-1}[x]$$ uniformly at random, as well as $$a_i \sample \ZZ_q^{<n}[x]$$ and $$e_i \sample \chi$$ for $$i \in [m]$$. An adversary is asked to distinguish between the MP-LWE distribution_

$$ \set{\left( a_i, b_i = a_i \odot_d s + e_i \right)}_{i \in [m]} \text{ and } \mathcal{U}\left( \ZZ_q^{<n}[x] \times \RR_q^{<d}[x] \right)^m. $$

Roşca et al. {% cite C:RSSS17 %} define MP-LWE for arbitrarily many samples, typically with $$d \leq n$$, and a continuous Gaussian error distribution $$\chi = D_{\alpha q}$$ over the coefficients. Subsequent works mostly use discrete error distributions over $$\ZZ^{<d}[x]$$ such as discrete Gaussian or centered binomial distributions {% cite DCC:SteSakZha19 %}{% cite PKC:BDHRSSSZ20 %}.

MP-LWE can also be viewed as a variant of [LWE](/lwe/) with correlated samples. Let $$\mathsf{Toep}^{d,n}(a) \in \ZZ_q^{d \times (n+d-1)}$$ denote the Toeplitz matrix whose $$i$$-th row contains the coefficients of $$x^{i-1} \cdot a$$ and let $$\overline{\vec{v}}$$ denote the reversed coefficient vector of a polynomial $$v$$. By Lemma 3.2 of {% cite C:RSSS17 %}, each MP-LWE sample can be written as

$$ \overline{\vec{b}}_i = \mathsf{Toep}^{d,n}(a_i) \cdot \overline{\vec{s}} + \overline{\vec{e}}_i, $$

i.e. a single sample provides $$d$$ LWE samples w.r.t. a secret of dimension $$n+d-1$$, whose structured matrix is described by only $$n$$ elements of $$\ZZ_q$$.

## Variants

### Small-Secret MP-LWE$$_{n,d,m,q,\chi_s,\chi_e}$$ {#small-secret-mp-lwe}
_Let $$\chi_s$$ and $$\chi_e$$ be distributions over $$\ZZ^{<n+d-1}[x]$$ and $$\ZZ^{<d}[x]$$, respectively. Sample the **short** secret $$s \sample \chi_s$$, as well as $$a_i \sample \ZZ_q^{<n}[x]$$ and $$e_i \sample \chi_e$$ for $$i \in [m]$$. An adversary is asked to distinguish between the distribution_

$$ \set{\left( a_i, a_i \odot_d s + e_i \right)}_{i \in [m]} \text{ and } \mathcal{U}\left( \ZZ_q^{<n}[x] \times \ZZ_q^{<d}[x] \right)^m. $$

Bai et al. {% cite PKC:BDHRSSSZ20 %} introduced small-secret MP-LWE to construct the Fiat-Shamir-with-aborts signature scheme MPSign, since this paradigm requires short secret keys. Unlike for [small-secret LWE](/lwe/#small-secret-lwe), the normal-form technique of Applebaum et al. {% cite C:ACPS09 %} does not easily extend to the middle-product setting. In fact, an earlier MP-LWE-based signature scheme {% cite ProvSec:Hiromasa18 %} assumed that the hardness result of {% cite C:RSSS17 %} covers secrets distributed like the noise, which is a misinterpretation as pointed out in {% cite PKC:BDHRSSSZ20 %}.

Instead, Theorem 2 of {% cite PKC:BDHRSSSZ20 %} directly reduces PLWE$$^{(f)}$$ with discrete Gaussian secret and error of parameter $$\alpha q$$ to small-secret MP-LWE with discrete Gaussian secret of parameter $$\alpha' q$$ and discrete Gaussian error of parameter $$\alpha'' q$$, where $$\alpha' = \alpha n \sqrt{2n} \cdot \mathsf{EF}(f)^2$$ and $$\alpha'' = \alpha \sqrt{2d} \cdot \mathsf{EF}(f)$$. The reduction holds for any monic $$f$$ with $$\deg(f) \in [d,n]$$ and constant coefficient coprime to $$q$$, whose Hankel matrix $$\mat{M}_f$$ (see [Hardness](#hardness)) has smallest singular value at least $$T$$, if $$\alpha \geq 2 \sqrt{n} / (qT)$$. Corollary 1 of {% cite PKC:BDHRSSSZ20 %} provides an exponentially large family of such polynomials. Conversely, small-secret MP-LWE trivially reduces to MP-LWE by re-randomising the secret, i.e. by adding $$a_i \odot_d t$$ for a uniformly random $$t \sample \ZZ_q^{<n+d-1}[x]$$ to each sample.

### Degree Parametrized MP-LWE$$_{n,\vec{d},q,\chi}$$ {#degree-parametrized-mp-lwe}
_Let $$\vec{d} = (d_1, \dots, d_m) \in [n/2]^m$$ be a vector of fixed degrees and let $$\chi$$ be a distribution over $$\RR$$. Sample the secret $$s \sample \ZZ_q^{<n-1}[x]$$ uniformly at random, as well as $$a_i \sample \ZZ_q^{<n-d_i}[x]$$ and $$e_i \sample \chi^{d_i}$$ (interpreted as a polynomial of degree $$< d_i$$) for $$i \in [m]$$. An adversary is asked to distinguish between the distribution_

$$ \set{\left( a_i, a_i \odot_{d_i} s + e_i \right)}_{i \in [m]} \text{ and } \prod_{i \in [m]} \mathcal{U}\left( \ZZ_q^{<n-d_i}[x] \times \RR_q^{<d_i}[x] \right). $$

Lombardi, Vaikuntanathan, and Vuong {% cite TCC:LomVaiVuo19 %} introduced this variant, where the size $$d_i$$ of the middle-product may differ between samples (but is specified in advance), as the public polynomials of their dual-Regev encryption and identity-based encryption schemes have different degrees. Setting all $$d_i = d$$ recovers MP-LWE (with parameters $$n-d$$ and $$d$$). Theorem 2 of {% cite TCC:LomVaiVuo19 %} adapts the reduction of {% cite C:RSSS17 %} and shows that degree parametrized MP-LWE with Gaussian error of parameter $$\alpha' q$$, where $$\alpha' = \alpha \sqrt{n/2} \cdot S$$, is at least as hard as PLWE$$^{(f)}$$ with Gaussian error of parameter $$\alpha q$$ for any monic $$f$$ with constant coefficient coprime to $$q$$, $$\deg(f) \in \bigcap_{i \in [m]} [d_i, n-d_i]$$, and $$\mathsf{EF}(f) < S$$.

### Middle-Product Computational LWR$$_{n,d,t,p,q}$$ {#mp-clwr}
Let $$\round{\cdot}_p$$ denote the rounding function from [Learning with Rounding](/lwr/), applied coefficient-wise, and let $$\left( \ZZ_q^{<n+d-1}[x] \right)^\times$$ denote the set of polynomials whose associated $$d \times n$$ Hankel matrix has full rank $$d$$.

_Sample $$s \sample \left( \ZZ_q^{<n+d-1}[x] \right)^\times$$. Let $$X_s$$ be the distribution of $$\left( a, \round{a \odot_d s}_p \right)$$ with $$a \sample \ZZ_q^{<n}[x]$$, and let $$U$$ be the distribution of $$\left( a, \round{b}_p \right)$$ with $$a \sample \ZZ_q^{<n}[x]$$ and $$b \sample \ZZ_q^{<d}[x]$$. Consider two experiments, in which a challenger $$\cdv$$ receives $$t$$ samples from $$X_s$$ (first experiment) or from $$U$$ (second experiment) together with some independent auxiliary input, and uses them to compute an input for an adversary $$\adv$$ as well as a target. The adversary $$\adv$$ wins if its output matches the target. The MP-CLWR assumption states that for any challenger $$\cdv$$, if the success probability of any adversary $$\adv$$ in the second experiment is negligible, then so is its success probability in the first experiment._

Middle-Product Computational Learning with Rounding (MP-CLWR) was introduced by Bai, Boudgoust, Das, Roux-Langlois, Wen, and Zhang {% cite AC:BBDRWZ19 %} as the middle-product analogue of the computational Ring-LWR assumption {% cite AC:CheZhaZha18 %}. It enables a deterministic variant of the encryption scheme of {% cite C:RSSS17 %}, which avoids Gaussian sampling while achieving the same asymptotic key and ciphertext sizes. Theorem 2 of {% cite AC:BBDRWZ19 %} shows that MP-CLWR is at least as hard as decision MP-LWE for a number of samples $$t$$ fixed in advance, a balanced and $$B$$-bounded error distribution, and $$q > 2pBdt$$. The proof relies on the Rényi divergence and on new results about the rank of random Hankel matrices.

### Further Variants
- _Skew Middle-Product LWE_ {% cite IMACC:LinMen23 %} extends the middle-product to skew polynomials. Ling and Mendelsohn reduce a family of skew polynomial LWE problems, which are connected to LWE over cyclic division algebras, to Skew Middle-Product LWE and build an IND-CPA-secure encryption scheme from it.
- _Universal Product LWE_ (UP-LWE) {% cite TCS:YanHua22 %} axiomatises the properties of the middle-product that are essential for MP-LWE. MP-LWE is an instance of UP-LWE, which further captures asymmetric middle-products allowing for more flexible parameter choices.
- Peikert and Pepin {% cite JC:PeiPep24 %} define MP-LWE over orders $$\mathcal{O}$$ of number fields $$K \neq \QQ$$ (Remark 5.4).

## Hardness

Roşca et al. {% cite C:RSSS17 %} gave a reduction from decision Polynomial-LWE, i.e. [Ring-LWE](/lwe/#ring-lwe) over $$\ZZ_q[x]/f$$ (denoted PLWE$$^{(f)}$$), to decision MP-LWE, which works for a whole family of polynomials $$f$$ at once. Its noise growth is linear in the _expansion factor_ $$\mathsf{EF}(f) = \max \set{\norm{g \bmod f}_\infty / \norm{g}_\infty : g \in \ZZ^{<2 \deg(f) - 1}[x] \setminus \set{0}}$$ of $$f$$ {% cite ICALP:LyuMic06 %}.

**Theorem** (Theorem 3.6 of {% cite C:RSSS17 %}) _Let $$n, d > 0$$, $$q \geq 2$$, $$\alpha \in (0,1)$$, and $$S > 0$$. Let $$\mathcal{F}(S,d,n)$$ denote the set of monic polynomials $$f \in \ZZ[x]$$ with constant coefficient coprime to $$q$$, $$\deg(f) \in [d, n]$$, and $$\mathsf{EF}(f) < S$$. Then there exists a ppt reduction from PLWE$$^{(f)}_{q,D_{\alpha q}}$$ for any $$f \in \mathcal{F}(S,d,n)$$ to MP-LWE$$_{n,d,m,q,D_{\alpha' q}}$$ with $$\alpha' = \alpha d S$$._

For instance, for a suitable $$S = \poly{n}$$, this family contains all polynomials $$f = x^{\deg(f)} + g$$ with $$\deg(g) \leq \deg(f)/2$$, $$\norm{g}_\infty \leq \poly{n}$$, and constant coefficient coprime to $$q$$, which is a family of exponential size in $$n$$.

The core observation of the reduction is that the first $$d$$ rows of the multiplication matrix of $$a$$ modulo $$f$$ factor as $$\mathsf{Rot}_f^d(a) = \mathsf{Toep}^{d,n}(a) \cdot \mathsf{Rot}_f^{n+d-1}(1)$$, where the $$i$$-th row of $$\mathsf{Rot}_f^k(a)$$ is the coefficient vector of $$x^{i-1} \cdot a \bmod f$$ (Lemma 2.6 of {% cite C:RSSS17 %}). Hence, the dependency on $$f$$ can be moved into the secret: A PLWE sample $$(a, b = a \cdot s + e)$$ is mapped to $$(a + f \cdot r, \mat{M}_f^d \cdot \vec{b})$$ for a uniform $$r \in \ZZ_q^{<n - \deg(f)}[x]$$, where $$\mat{M}_f^d$$ denotes the first $$d$$ rows of the Hankel matrix $$\mat{M}_f$$ whose $$(i,j)$$-th entry is the constant coefficient of $$x^{i+j-2} \bmod f$$. Up to reversing coefficient vectors, this results in an MP-LWE sample w.r.t. the secret $$\mathsf{Rot}_f^{n+d-1}(1) \cdot \mat{M}_f \cdot \vec{s}$$ (which is re-randomised to be uniform) and the skewed error $$\mat{M}_f^d \cdot \vec{e}$$. Finally, the error is made spherical and independent of $$f$$ by adding a compensating Gaussian, which causes a noise growth by $$\norm{\mat{M}_f} \leq \deg(f) \cdot \mathsf{EF}(f)$$. The reduction can be adapted to the search variants.

Combined with the reductions between Ring-LWE and Polynomial-LWE by Roşca, Stehlé, and Wallet {% cite EC:RosSteWal18 %}, MP-LWE is at least as hard as Ring-LWE over exponentially many number fields and thereby inherits the worst-case hardness of [Ring-LWE](/lwe/#ring-lwe) over any of these fields. Hence, MP-LWE remains hard as long as Ring-LWE is hard for at least one of them. Several works improved the tightness of these reductions and the families of polynomials covered by them:
- Lombardi et al. {% cite TCC:LomVaiVuo19 %} improve the bound on the noise growth to $$\norm{\mat{M}_f^d} \leq \sqrt{d} \cdot \mathsf{EF}(f)$$ (Lemma 9).
- Steinfeld, Sakzad, and Zhao {% cite DCC:SteSakZha19 %} identify the _geometric factor_ $$\norm{\mat{M}_f^d}$$ as the relevant quantity and show that it equals $$1$$ for the exponentially large family of polynomials $$f = x^{\deg(f)} + \sum_{i \leq \ell} f_i x^i$$ with $$\ell = \min(\deg(f)/2 + 1, \deg(f) + 1 - d)$$ and $$f_0 \in \set{-1,1}$$ (Section 4.1). For this family, the reduction from PLWE$$^{(f)}$$ to MP-LWE is tight and even preserves the error distribution, e.g. centered binomial errors.
- Peikert and Pepin {% cite JC:PeiPep24 %} show that MP-LWE is an instance of [Generalised-LWE](/generalised-lwe/) w.r.t. the order-three _Hankel tensor_ $$M$$ with $$M_{ij\ell} = 1$$ if $$i = j + \ell$$ and $$M_{ij\ell} = 0$$ otherwise (Definition 5.1). They give a direct reduction from [Order-LWE](/generalised-lwe/#order-lwe) over any order with a power basis, and thereby from Ring-LWE, to MP-LWE, where a spherical Gaussian error only grows by the spectral norm of that power basis (Theorem 5.3 and Corollary 5.5). This reduction is simpler and tighter than the chain of reductions via Polynomial-LWE.
- Njah Nchiwo and Pellet-Mary {% cite PKC:NjaPel26 %} refine the analysis of the reduction chain via Polynomial-LWE {% cite EC:RosSteWal18 %}{% cite C:RSSS17 %} by analysing both distortions of the error jointly, as they largely compensate each other. Their reduction covers all polynomials $$f$$ with $$D(f) \leq \deg(f)$$ for a quantity $$D(f) \approx \norm{\mat{V}_f^{-1} \mat{M}_f}$$, where $$\mat{V}_f$$ denotes the Vandermonde matrix of the roots of $$f$$ (Corollary 5.5). Experimentally, this condition holds for at least 90% of all polynomials of fixed degree with polynomially bounded coefficients, but there are families (e.g. Bugeaud-Mignotte polynomials) for which $$D(f)$$ grows exponentially.
- Pellet-Mary and Xia {% cite EPRINT:PelXia26 %} unify both approaches in a reduction parametrized by a pair of field elements $$(y_a, y_s) \in K^2$$. Optimising this choice yields the first reduction from Ring-LWE to MP-LWE that holds for _all_ number fields $$K = \QQ[X]/f(X)$$ defined by a monic irreducible polynomial $$f$$ with coefficients bounded by $$B = \poly{\deg(f)}$$ and discriminant coprime to $$q$$. The error parameter grows by at most a factor $$16 \deg(f)^8 B^5$$ (Corollary 5.4).
- Cheng, Zhao, Luo, Pan, and Sun {% cite EPRINT:CZLPS26 %} analyse the trace reduction of Peikert and Pepin for monic irreducible polynomials $$f$$ with coefficients bounded by a fixed $$B$$. If the prime modulus $$q$$ does not divide the index $$[\mathcal{O}_K : \ZZ[\theta]]$$ for a root $$\theta$$ of $$f$$, they prove the existence of multipliers, which serve as polynomial-size advice for a non-uniform reduction, with primal noise growth $$\bigO{n \sqrt{\log n / \log \log n}}$$ and dual noise growth $$\bigO{n^2}$$ for $$n = \deg(f)$$. Further, they show that the trace reduction can match the noise bounds of {% cite PKC:NjaPel26 %}.

MP-LWE is usually treated as an instance of LWE: Due to the Toeplitz representation above, $$t$$ MP-LWE samples yield an LWE instance with $$td$$ equations and a secret of dimension $$n+d-1$$, to which the primal and dual attacks on [LWE](/lwe/) apply {% cite AC:BBDRWZ19 %}{% cite DCC:SteSakZha19 %}. As this secret dimension is larger than the dimension of the PLWE secret in the above reductions, MP-LWE could a priori be much harder than PLWE$$^{(f)}$$. However, dropping the lowest coefficients of each sample yields an MP-LWE instance with smaller $$d^*$$ whose secret consists of the top $$n+d^*-1$$ coefficients of $$s$$ (Proposition 2 of {% cite DCC:SteSakZha19 %}), i.e. MP-LWE becomes no easier as $$d$$ decreases {% cite JC:PeiPep24 %}. Steinfeld et al. {% cite DCC:SteSakZha19 %} exploit this sparse block-Toeplitz structure to optimise the primal attack. This closes the gap in the secret dimension and only leaves a gap factor of $$q^{1/t}$$ in the uSVP approximation factor compared to attacking PLWE$$^{(f)}$$ (Section 4.3).

## Open Questions

- Can the remaining gap factor $$q^{1/t}$$ between the best known attacks on MP-LWE with $$t$$ samples and on PLWE$$^{(f)}$$ be closed {% cite DCC:SteSakZha19 %}?
- Is there a reduction from decision MP-LWE to decision MP-LWR for polynomial moduli, or a search-to-decision reduction for MP-LWR {% cite AC:BBDRWZ19 %}?

## Constructions built from MP-LWE {#constructions}

This is a non-exhaustive list of constructions, whose security is based on MP-LWE or one of its variants.
- Public-Key Encryption {% cite C:RSSS17 %}{% cite AC:BBDRWZ19 %}
- Key Encapsulation Mechanism Titanium {% cite DCC:SteSakZha19 %}, which was submitted to the NIST post-quantum standardisation process
- Signatures {% cite PKC:BDHRSSSZ20 %}, whereas the proof of an earlier scheme {% cite ProvSec:Hiromasa18 %} was shown to be flawed in {% cite PKC:BDHRSSSZ20 %}
- (Linkable) Ring Signatures {% cite AFRICACRYPT:DasAuZha19 %}
- Identity-Based Encryption {% cite TCC:LomVaiVuo19 %}{% cite ACISP:FanLuAu23 %} as well as Hierarchical {% cite ACNS:LDSP20 %} and Revocable Identity-Based Encryption {% cite ACISP:NisTak25 %}
- Attribute-Based Encryption for Circuits and Inner-Product Predicate Encryption {% cite ACISP:NisTak26 %}

## Related Assumptions

- [Ring-LWE](/lwe/#ring-lwe) (or rather Polynomial-LWE) reduces to MP-LWE for exponentially many defining polynomials $$f$$, whereas MP-LWE itself does not depend on any $$f$$.
- [Generalised-LWE](/generalised-lwe/) captures MP-LWE via the order-three Hankel tensor.
- $$\mathcal{R}^{<n}$$-SIS {% cite AC:Lyubashevsky16 %} is the SIS counterpart that inspired MP-LWE and is at least as hard as Polynomial-SIS for exponentially many $$f$$. MP-LWE (with uniform or small secrets) reduces to $$\mathcal{R}^{<n}$$-SIS, whereas the converse is unknown {% cite PKC:BDHRSSSZ20 %}.
- [Learning with Rounding](/lwr/) replaces the random noise of LWE by deterministic rounding, which [MP-CLWR](#mp-clwr) adapts to the middle-product setting.

## Further Reading Suggestions

- [A Survey on Middle-Product Learning with Errors Cryptography](https://doi.org/10.1007/978-981-96-1218-5_13){:target="_blank"} {% cite MFI:TezTan25 %}
- [Section 5](https://eprint.iacr.org/2019/878.pdf#page=26){:target="_blank"} in _Algebraically Structured LWE, Revisited_ {% cite JC:PeiPep24 %} on MP-LWE as an instance of Generalised-LWE
- [Section 4](https://eprint.iacr.org/2019/1179.pdf#page=11){:target="_blank"} in _Practical MP-LWE-based encryption balancing security-risk vs. efficiency_ {% cite DCC:SteSakZha19 %} on the concrete security of MP-LWE
