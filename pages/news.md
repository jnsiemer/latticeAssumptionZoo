---
title: "News"
permalink: /news/
---

<style>.page__title { display: none; }</style> <!-- Makes automatic title disappear -->

<div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #eaeaea; padding-bottom: 0.5em; margin-bottom: 1.5em;">
  
  <h1 style="margin: 0;">News 📣</h1>
  
  <a href="/feed.xml" class="btn btn--warning btn--small" style="margin: 0; text-decoration: none;">
    <i class="fas fa-rss"></i> Subscribe via RSS-Feed
  </a>

</div>

<div class="news-feed">
  {% assign news_posts = site.categories.news | sort: 'date' | reverse %}
  
  {% for post in news_posts %}
    {% include news-snippet.html %}
  {% endfor %}
</div>

<hr>
<p style="text-align: center;">
  <a href="/" class="btn btn--primary">Back to Home</a>
</p>
