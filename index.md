---
title: Lattice Assumption Zoo
---

This wiki catalogues average-case lattice assumptions, helping cryptographers track novel assumptions, quickly evaluate their hardness and applications, and stay informed on the latest cryptanalysis.

## 🧭 Explore the Lattice Assumption Graph
This interactive graph visualises the landscape of lattice-based assumptions, illustrating relationships such as reductions and generalizations. You can tailor the view to your needs -- filtering by cryptographic primitive, historical timeline, or specific assumption variants.

<div style="position: relative; width: 100%; aspect-ratio: 4 / 3; max-height: 600px;">
  <iframe src="/graph/index.html" 
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
If you prefer a list as a structured format, you can find a searchable index of all catalogued assumptions on the following page.

[Catalogued Assumptions](/catalogue/){: .btn .btn--info}

## 📣 [Latest News](/news/){: style="text-decoration: none; color: inherit;"}

{% assign news_posts = site.categories.news | sort: 'date' | reverse %}
{% for post in news_posts limit:3 %}
  {% include news-snippet.html type="list" %}
{% endfor %}

[Read all news](/news/){: .btn .btn--info}
[<i class="fas fa-rss"></i> Subscribe via RSS-Feed](/feed.xml){: .btn .btn--info}

## ✏️ Contribute
This wiki relies on the expertise of the cryptographic community. Anyone can contribute -- whether it is adding a novel assumption, updating a hardness estimates, providing further details, or linking a new construction.

Spot a missing link or an outdated result? [Propose a change on GitHub](https://github.com/jnsiemer/latticeassumptionzoo){:target="_blank"}.