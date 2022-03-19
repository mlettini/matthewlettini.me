---
title: Chosen
subtitle: Javascript plugin to make long select boxes more user-friendly.
order: 30
# date: 2011-06-22
date: 2022-01-30
---

<div class="inner">

Many Harvest customers have long lists of clients, projects, tasks, or other they need to sift through when trying to start a timer, run a report, create an invoice, or whatever else they’re trying to do in the product. However, really long select boxes are unfortunately rather unwieldy and not very user-friendly.

When we were revamping our reports in 2011, [Patrick Filler](https://patrickfiller.com), an engineer (and friend) at Harvest, came up with an idea. Could we behind-the-scenes continue to code these as regular HTML select boxes, then leverage javascript to progressively enhance the user experience? The answer was yes.

He built [Chosen](https://harvesthq.github.io/chosen) originally as a jQuery plugin, and over the years it’s since been ported to other libraries. I paired with him on the initial design and the CSS, and continued to help maintain it over the years.

</div>

<figure class="side-by-side">
  <div>
    <div class="bordered">
      <img src="/images/work/chosen-standard.png" alt="" data-zoomable>
    </div>
    <figcaption>Standard Select Chosen</figcaption>
  </div>
  <div>
    <div class="bordered">
      <img src="/images/work/chosen-multi.png" alt="" data-zoomable>
    </div>
    <figcaption>Multiple Select Chosen</figcaption>
  </div>
</figure>

<div class="inner">

Chosen comes in two flavors: Standard Select and Multiple Select.

* Standard Chosen enhances the HTML `<select>` element. It primarily adds a more visible search function, with highlighted results.
* Multiple Chosen enhances the HTML `<select multiple>` element. It not only adds a more visible search function, but also always displays which items you’ve selected, even if they’re scrolled out of view.

For the initial design of Chosen (above), I stuck with neutral styling in an attempt to balance looking good whether viewed on a Mac and Windows computer. However, we did “modernize” the design a few years later:

</div>

<figure class="side-by-side">
  <div>
    <div class="bordered">
      <img src="/images/work/chosen-standard2.png" alt="" data-zoomable>
    </div>
    <figcaption>Standard Select Chosen</figcaption>
  </div>
  <div>
    <div class="bordered">
      <img src="/images/work/chosen-multi2.png" alt="" data-zoomable>
    </div>
    <figcaption>Multiple Select Chosen</figcaption>
  </div>
</figure>

<div class="inner">

You can try Chosen for yourself at its [library demonstration page](https://harvesthq.github.io/chosen). Or you can watch this ruby installation demo by <a href="https://www.driftingruby.com/episodes/javascript-select-form-fields-with-chosen">David Kimura</a>:

</div>

<figure>
  <video controls poster="/images/blackposter.gif">
    <source src="/images/work/chosen-demo.mp4" type="video/mp4">
  </video>
  <figcaption>Chosen demo by <a href="https://www.driftingruby.com/episodes/javascript-select-form-fields-with-chosen">Drifting Ruby</a> (© David Kimura circa 2017)</figcaption>
</figure>

<div class="inner">

Chosen is now deprecated and no longer under active development, but the idea and concept lives on. It’s been forked into [Select2](https://select2.org) and the concept adopted by many other libraries and plugins.

</div>
