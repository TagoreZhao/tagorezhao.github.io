---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

I am Songlin Zhao, currently affiliated with the University of Illinois Urbana-Champaign. Before joining UIUC, I studied mathematics and statistics at the University of California, Berkeley.

I am broadly interested in machine learning, applied mathematics, and scientific computing. My recent work spans efficient large language models, randomized linear algebra, photonic computing, trustworthy AI, and computational biology. As I begin at UIUC, I am exploring new research directions and welcome research opportunities and collaborations across these areas.

## Recent Works

{% assign recent_works = site.publications | sort: "date" | reverse %}
<div class="recent-works">
{% for post in recent_works limit: 4 %}
  <article class="recent-work">
    <h3><a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a></h3>
    <p class="recent-work__meta"><i>{{ post.venue }}</i>, {{ post.date | date: "%Y" }}</p>
    {% include publication-links.html publication=post compact=true %}
  </article>
{% endfor %}
</div>

[View all publications]({{ base_path }}/publications/)
