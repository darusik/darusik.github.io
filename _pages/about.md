---
layout: about
title: Home
permalink: /

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info:


selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---


I am a PhD student at Vienna University of Technology, advised by [Andreas Rauber](http://ifs.tuwien.ac.at/~andi/), working on machine learning security, with a focus on the interplay between security and model compression.

I'm also conducting research on model stealing, which was the main topic of my master’s thesis. Alongside my doctoral research, I work as a security ML researcher at [CDL AsTRa](https://cdl-astra.at/) at University of Vienna and [SBA Research](https://www.sba-research.org/). 




## Highlights

{% assign highlights_posts = site.posts | where_exp: "post", "post.categories contains 'highlights'" %}
<ul class="highlights-list clean-list">
  {% for post in highlights_posts limit: 6 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="item-year">{{ post.date | date: "%Y" }}</span>
    </li>
  {% endfor %}
</ul>

## Selected Publications

<div class="publications">
{% bibliography %}
</div>
