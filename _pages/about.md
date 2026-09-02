---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

I am a first-year Ph.D. student in the Department of Statistics at the University of Illinois Urbana-Champaign. I earned two Bachelor of Arts degrees, in Mathematics and Statistics, from the University of California, Berkeley.

My research interests include machine learning, applied mathematics, and scientific computing. My recent work spans efficient large language models, randomized linear algebra, and photonic computing. At UIUC, I am exploring new research directions and welcome research opportunities and collaborations in these areas.

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
