---
title: "Oracle MLWE"
seo_title: "Oracle MLWE"
family: "LWE"
subfamily: "LWE with Leakage"
graph_id: "Oracle-MLWE"

last_modified_at: 2026-07-06
redirect_from:
  - /oracle_mlwe/
  - /oraclemlwe/
  - /oracle-lwe/
  - /oracle_lwe/
  - /oraclelwe/
---

Oracle MLWE was introduced by Liu, Sotiraki, Tromer, and Wang in 2025 {% cite AC:LSTW25 %}. The assumption is inspired by the _static Diffie-Hellman with oracle_ problem {% cite EPRINT:BroGal04 %}. It adds a masked hint and the output of a random oracle to the challenge samples, where the input to the random oracle depends on the previously mentioned mask.

## Definition

### Oracle MLWE$$_{n,N,q,\mathcal{D},\chi_\sigma,p}$$ {#oracle-mlwe}
_Let $$\mathcal{R} = \ZZ[X]/(X^N + 1)$$ be a power-of-two cyclotomic ring and $$H: \mathcal{R}_p \rightarrow \mathcal{K}$$ be a random oracle. Let $$\mathcal{D}$$ and $$\chi_\sigma$$ denote distributions over $$\mathcal{R}_q$$. Sample $$\mat{A}_1\sample \mathcal{R}_q^{w_1 \times n}$$, $$\mat{A}_2\sample \mathcal{R}_q^{w_2 \times n}$$, $$\mat{A}_\adv\gets \adv(\mat{A}_1, \mat{A}_2) \in \mathcal{R}_q^{w_\adv \times n}$$, $$\vec{s} \sample \mathcal{D}^n$$, $$\vec{e}_1 \sample \chi_\sigma^{\omega_1}$$, $$\vec{e}_2 \sample \chi_\sigma^{\omega_2}$$, $$\vec{e}_\adv \sample \chi_\sigma^{\omega_\adv}$$, $$\vec{r}_2 \sample \mathcal{R}_q^{w_2}$$, $$\vec{u}_2 \sample \mathcal{R}_q^{w_2}$$, and $$\vec{u}_\adv \sample \mathcal{R}_q^{w_\adv}$$. An adversary $$\adv$$ is asked to distinguish between the distribution_

$$ \begin{align*}
&\left(\mat{A}_2, {\color{blue}\mat{A}_2\vec{s} + \vec{e}_2 + \vec{u}_2}, (H(\floor{p \cdot \vec{u}_{2,i} / q}))_{i \in [w_2]}\right) \\
&(\mat{A}_1, \mat{A}_1\vec{s} + \vec{e}_1) \\
&\left(\mat{A}_\adv, \mat{A}_\adv\vec{s} + \vec{e}_\adv + \vec{u}_\adv, (H(\floor{p \cdot \vec{u}_{\adv,i} / q}))_{i \in [w_\adv]}\right)
\end{align*}$$

_and the distribution_

$$ \begin{align*}
&\left(\mat{A}_2, {\color{blue}\vec{r}_2}, (H(\floor{p \cdot \vec{u}_{2,i} / q}))_{i \in [w_2]}\right) \\
&(\mat{A}_1, \mat{A}_1\vec{s} + \vec{e}_1) \\
&\left(\mat{A}_\adv, \mat{A}_\adv\vec{s} + \vec{e}_\adv + \vec{u}_\adv, (H(\floor{p \cdot \vec{u}_{\adv,i} / q}))_{i \in [w_\adv]}\right)
\end{align*}.$$

## Hardness

In Section 7 of {% cite AC:LSTW25 %}, the authors provide two parameter regimes in which Oracle MLWE is broken. Their Lemma 7.2 states that Oracle MLWE$$_{n,N,q,\mathcal{D},\chi,p}$$ is at least as hard as (entropic) [Module-LWE](/lwe/#module-lwe)$$_{n,N,q,\mathcal{D},\chi_\sigma}$$ if $$\chi_\sigma$$ is a Gaussian distribution with $$1/\sigma^N = \negl{\lambda}$$ and $$p=q$$. Then, they define sets of parameters used in their constructions, which are not covered by the reduction. This set of parameters was broken by Wang, Esgin, Steinfeld, Saarinen, and Yiu in {% cite CiC:WESSY26 %} via an attack that they call _neighborhood search attack_. They propose new sets of parameters, which omit this attack.

## Constructions built from Oracle MLWE {#constructions}

- Multi-Message Multi-Recipient Public-Key Encryption {% cite AC:LSTW25 %}

## Related Assumptions

- [Hint-MLWE](/hint-lwe/) also leaks some information in a masked way.
- [Module-LWE](/lwe/#module-lwe)
