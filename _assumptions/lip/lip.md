---
title: "Lattice Isomorphism Problem (LIP)"
seo_title: "LIP"
family: "LIP"
graph_id: "LIP"

last_modified_at: 2026-03-31
redirect_from:
  - /lattice-isomorphism-problem/
  - /lattice_isomorphism_problem/
---

The Lattice Isomorphism Problem (LIP) is a computational problem that asks whether two given lattices are isomorphic in the sense that they are identical up to an orthonormal transformation.

While quadratic forms have been studied for centuries, it has only emerged in 2022 as an assumption for post-quantum cryptography. Relying on LIP entails the opportunity to utilise specific lattices with exceptionally good geometric properties (e.g. where the closest vector problem is easy to solve) by hiding their structure behind a random isomorphism.

## Definition

We ease notation by giving the following preliminaries. Two lattices $\mathcal{L}\_0, \mathcal{L}\_1$ are _isomorphic_ if there is an orthonormal transformation $\mat{O} \in O_n(\RR)$ s.t. $\mat{O} \cdot \mathcal{L}\_0 = \mathcal{L}\_1$. Equivalently, for bases $\mat{B}\_0, \mat{B}\_1$ of $\mathcal{L}\_0, \mathcal{L}\_1$, then $\mathcal{L}\_0$ is isomorphic to $\mathcal{L}\_1$ if there is an orthonormal transformation $\mat{O} \in O_n(\RR)$ and a unimodular transformation $\mat{U} \in \text{GL}\_n(\ZZ)$ s.t. $\mat{O} \cdot \mat{B}\_0 \cdot \mat{U} = \mat{B}\_1$.<br>
We can remove the orthonormal transformation by considering the quadratic forms $\mat{Q} = \mat{B}\_0^T \cdot \mat{B}\_0$ and $\mat{P} = \mat{B}\_1^T \cdot \mat{B}\_1$. Then, $\mathcal{L}\_0$ is isomorphic to $\mathcal{L}\_1$ if and only if there exists a unimodular $\mat{U} \in \text{GL}\_n(\ZZ)$ s.t. $\mat{U}^T \cdot \mat{Q} \cdot \mat{U} = \mat{P}$.<br>
This forms an equivalence relation: Two quadratic forms $\mat{Q}$ and $\mat{P}$ are _equivalent_, i.e. $\mat{Q} \equiv \mat{P}$, if there exists a unimodular $\mat{U} \in \text{GL}\_n(\ZZ)$ s.t. $\mat{U}^T \cdot \mat{Q} \cdot \mat{U} = \mat{P}$. Naturally, this defines the equivalence class $[\mat{Q}] := \set{\mat{P} : \mat{P} \equiv \mat{Q}}$.

Below, we define (mostly) average-case versions of LIP whose average-case distribution within the equivalence class $[\mat{Q}]$ is defined via a sampling algorithm $\mathcal{D}\_s(\mat{Q}) \in \text{GL}\_n(\ZZ)$ with $s>0$ {% cite SODA:HavReg14 %}{% cite EC:DucWoe22 %}.

### Average-Case Search LIP$_{n,s,\mathcal{D},\mat{Q}}$ {#average-case-search-lip}
_Let $\mat{Q} \in \mathcal{S}\_n^{>0}$ be a quadratic form, $s>0$, and a unimodular matrix sampled as $\mat{U} \gets \mathcal{D}\_s([\mat{Q}]) \in \text{GL}_n(\ZZ)$. Given the quadratic form $\mat{P} = \mat{U}^T \cdot \mat{Q} \cdot \mat{U}$, an adversary is asked to find a unimodular matrix $\mat{V} \in \text{GL}_n(\ZZ)$ s.t. $\mat{P} = \mat{V}^T \cdot \mat{Q} \cdot \mat{V}$._

The quadratic form $\mat{Q}$ is public knowledge and static for an instance. The hardness of this problem implies that the geometric structure of the underlying lattice is successfully hidden via the described transform. This implication is more explicitly captured in the decisional version of LIP.

### Decision LIP$_{n,\mat{Q}, \mat{P}}$ {#decision-lip}
_Given two quadratic forms $\mat{Q}, \mat{P} \in \mathcal{S}\_n^{>0}$, an adversary is asked to determine whether $\mat{Q} \equiv \mat{P}$._

The average-case form is avoided to reduce technical overhead as a sensible definition requires sampling a quadratic form $\mat{P} \in \mathcal{S}\_n^{>0}$ uniformly relative to the mass of all automorphisms over a genus. Details can be found Section 2.1 of {% cite AC:Woerden24 %}. Furthermore, the decisional version of LIP is currently less frequently utilised for constructions. These rather use the distinguishing version of LIP, which is a promise version in that $\mat{P}$ is promised to belong either to $[\mat{Q}_0]$ or $[\mat{Q}_1]$, which makes it potentially easier.

### Average-Case Distinguish LIP$_{n,s,\mathcal{D},\mat{Q}_0,\mat{Q}_1}$ {#average-case-distinguish-lip}
_Let $\mat{Q}_0,\mat{Q}_1 \in \mathcal{S}\_n^{>0}$ be two quadratic forms, $s>0$, and a unimodular matrix sampled as $\mat{U} \gets \mathcal{D}\_s([\mat{Q}]) \in \text{GL}_n(\ZZ)$. Let $b \gets \set{0,1}$ be chosen uniformly and $\mat{P} = \mat{U}^T \cdot \mat{Q}_b \cdot \mat{U}$. Given $\mat{P}$, an adversary is asked to output $b$._

In {% cite AC:DPPW22 %}, the authors introduce a slightly specialised module-version of LIP, which uses Hermitian forms, unitary matrices, and the special linear group over $\KK$.<br>
Hermitian forms $\mathcal{H}\_n(\KK)$ are all matrices $\mat{Q} \in \KK^{n \times n}$ s.t. $\mat{Q}^* = \mat{Q}$ and $\text{Tr}(\vec{v}^* \mat{Q} \vec{v}) > 0$ for all $\vec{v} \in \KK^n \setminus \set{\vec{0}}$.

### Average-Case Search Module LIP$_{n,s,\mathcal{D},\KK,\mat{Q}}$ {#average-case-search-module-lip}
_Let $\KK$ be some power of two cyclotomic, $\mat{Q} \in \mathcal{H}\_2^{>0}(\KK)$ be a Hermitian form, $s>0$, and a matrix sampled as $\mat{U} \gets \mathcal{D}\_s([\mat{Q}]) \in \text{SL}_2(\KK)$. Given the Hermitian form $\mat{P} = \mat{U}^T \cdot \mat{Q} \cdot \mat{U}$, an adversary is asked to find a unitary matrix $\mat{V} \in \text{SL}_2(\KK)$ s.t. $\mat{P} = \mat{V}^T \cdot \mat{Q} \cdot \mat{V}$._

## Hardness

The hardness of an average-case assumption depends on the choice of the sampling algorithm $\mathcal{D}$, i.e. the quadratic form equivalent of how to obfuscate the geometric properties of the lattice. Haviv and Regev {% cite SODA:HavReg14 %} implicitly defined a distribution that is "as bad as possible", which was formalised in {% cite EC:DucWoe22 %}.
Further, for $s \geq 2^{n/2} \cdot \sqrt{\max\left( \norm{\mat{Q}_0}, \norm{\mat{Q}_1} \right)}$ this yields a distribution that is as hard as the worst-case distribution {% cite EC:DucWoe22 %}.

Cryptanalytic attempts picture LIP as the lattice variant of the code equivalence problem, whose hardness is drastically reduced by hull-based attacks. Ducas and Gibbons pursue a similar attack vector in {% cite PKC:DucGib23 %} and show that an adapted attack reduces the prior conjectured hardness results, but only by a constant factor of 2 in the exponent. Further notes on the spinor genus can be found in {% cite AC:LinLiuMen24 %}.

## Constructions built from LIP {#constructions}

- Identification scheme {% cite EC:DucWoe22 %}
- Signatures {% cite EC:DucWoe22 %} such as [HAWK](https://hawk-sign.info/)
- Key exchange mechanism {% cite EC:DucWoe22 %}
- Public-key encryption {% cite WCC:AckRouWal24 %}{% cite EPRINT:2026/465 %}
- Identity-based encryption {% cite EPRINT:2026/465 %}
- Fully-homomorphic encryption {% cite EPRINT:2026/465 %}
