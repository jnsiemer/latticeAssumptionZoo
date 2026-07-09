---
title: Lattice Assumption Zoo
layout: single
last_updated_at: 2026-07-09
---

<script>
  const assumptionUrls = [
    {% for assumption in site.assumptions %}
      "{{ assumption.url | relative_url }}"{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  function goToRandomAssumption(event) {
    event.preventDefault(); // Prevents the page from jumping to the top
    window.location.href = assumptionUrls[Math.floor(Math.random() * assumptionUrls.length)];
  }
</script>

This comprehensive wiki catalogues average-case lattice assumptions so that cryptography-affine readers can quickly build an intuition for each assumption, understand the rationale behind its hardness, and explore its applications. Additionally, it serves as a centralised repository for essential literature related to novel assumptions, and provides a platform for publishing relevant cryptanalysis.

Furthermore, this resource is built with two additional goals in mind:
- For **designers**: This website encourages reusing existing assumptions rather than introducing new, ad-hoc ones by simplifying the process of finding and understanding existing assumptions. It also makes tracking novel assumptions effortless via our [RSS feed](/feed.xml).
- For **cryptanalysts**: This repository serves as an organised index of targets, simplifying the identification of compelling assumptions to analyse.

## 🧭 Explore the Lattice Assumption Graph
This interactive graph visualises the landscape of lattice-based assumptions, illustrating relationships such as reductions and generalizations. You can tailor the view to your needs -- filtering by cryptographic primitive, historical timeline, or specific assumption variants.

<div style="position: relative; width: 100%; aspect-ratio: 2 / 1; max-height: 600px;">
  <iframe src="/graph/index.html" 
          loading="lazy"
          style="width: 100%; height: 100%; border: 1px solid #ccc; border-radius: 5px;" 
          title="Lattice Assumption Graph">
  </iframe>
  
  <a href="/graph/" 
     target="_blank" 
     style="position: absolute; bottom: 15px; right: 15px;"
     class="btn btn--info">
    View Full Graph & Filters
  </a>
</div>

## 📋 List of Catalogued Assumptions
If you prefer a list as a structured format, you can find a searchable index of all catalogued assumptions on the following page, or let chance decide where you start.

[Catalogued Assumptions](/catalogue/){: .btn .btn--info} or discover a [Random Assumption](#){: .btn .btn--info onclick="goToRandomAssumption(event)" }

## 📣 [Latest News](/news/){: style="text-decoration: none; color: inherit;"}

{% assign news_posts = site.categories.news | sort: 'date' | reverse %}
{% for post in news_posts limit:3 %}
  {% include news-snippet.html type="list" %}
{% endfor %}

[Read all news](/news/){: .btn .btn--info}
[<i class="fas fa-rss"></i> Subscribe via RSS-Feed](/feed.xml){: .btn .btn--info}

## 🚧 Under Construction
Please note that this wiki does not cover all lattice-based assumptions yet.
We maintain a [list of assumptions](https://github.com/jnsiemer/latticeAssumptionZoo/issues/1) that will be added to the zoo.
Of course, contributions of any kind are welcome!

## ✏️ Contribute
This wiki relies on the expertise of the cryptographic community. Anyone can [contribute](https://github.com/jnsiemer/latticeassumptionzoo/tree/main/CONTRIBUTING.md) -- whether it is adding a novel assumption, updating hardness estimates, providing further details, or linking a new construction.

Spotted a missing link or an outdated result? [Propose a change on GitHub](https://github.com/jnsiemer/latticeassumptionzoo){:target="_blank"}.
