---
title: Blog Test Post
date: 2020-04-05
tags: post
---

<div class="inner">

I’m not sure how much I’ll actually write on here, but I’m creating this blog post as a way to test the design while I figure out Eleventy. This post should contain everything I’ll need for a future blog post, including headers, lists, blockquotes, code, photos, etc.

*Here’s an italicised sentence.* **Here’s a bolded sentence.** [Here’s a link.]() `Here’s some inline code`. Isn’t this fun?

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

### Secondary header

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

* Lorem ipsum dolor sit amet.
* Consectetuer adipiscing elit.
* Donec odio.
* Quisque volutpat mattis eros.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

1. Lorem ipsum dolor sit amet.
2. Consectetuer adipiscing elit.
3. Donec odio.
4. Quisque volutpat mattis eros.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

> Blockquotes are not supported yet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

</div>

<figure>
  <img src="/images/posts/test1.jpg" alt="" data-zoomable>
  <img src="/images/posts/test2.jpg" alt="" data-zoomable>
  <figcaption>This is a single figure with multiple images</figcaption>
</figure>

<div class="inner">

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

</div>

<figure>
  <img src="/images/posts/test4.jpg" alt="" data-zoomable>
  <figcaption>This is a wider horizontal image</figcaption>
</figure>

<div class="inner">

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

</div>

<figure>
  <img src="/images/posts/test3.jpg" alt="" data-zoomable>
  <figcaption>This is a taller vertical image that gets cut</figcaption>
</figure>

<div class="inner">

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

</div>

```yaml
name: Eleventy Build

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: ’10.x’

      - run: npm ci

      - run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: {% raw %}${{ secrets.ACTIONS_DEPLOY_KEY }}{% endraw %}
          publish_dir: ./dist
```

<div class="inner">

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

</div>
