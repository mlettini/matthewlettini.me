---
title: In Defense of Rem Units
date: 2013-02-01
tags:
  - post
  - development
---

> This post was originally written for [Harvest’s Tech Time developer blog](http://techtime.getharvest.com/blog/in-defense-of-rem-units) back in 2013. Some of what’s written here hasn’t aged well, but I still use rem units and you should too!

Over the past couple weeks, I’ve had the opportunity to design and build [Harvest’s 2012 Year In Work](http://getharvest.com/2012-year-in-work?utm_source=techtime), which afforded me a chance to try out something new: the **rem unit** of measurement.

You’re probably already familiar with [em units](http://www.w3.org/TR/css3-values/#em-unit) – they’ve been a common feature of CSS for the past decade – but a crash course: elements specified using em units are sized relative to the `font-size` of their parent element. For example, if a paragraph has a specified `font-size`
of 2em, and the div it’s inside of has a `font-size` of 10px, then the effective `font-size` of the paragraph is 10px × 2em, which is 20px.

```css
html {
  font-size: 16px; }
.parent {
  font-size: 10px; }
.parent p.child {
  font-size: 2em; } /* outputs to 20px */
```

“Rem” stands for “root em”. Similar to em units, they calculate size based on an ancestor element’s `font-size`, except rem units always calculate against the html/root element’s base size. So if the html element has a `font-size` of 16px, then a paragraph with `font-size` of 2rem will always be 32px, regardless of the parent div or any other element.

```css
html {
  font-size: 16px; }
.parent {
  font-size: 10px; }
.parent p.child {
  font-size: 2rem; } /* outputs to 32px */
```

This is incredibly compelling, particularly because…

### I try to avoid em units

Em units are useful for a variety of reasons, the most important being that they’re [flexible](http://trentwalton.com/2013/01/07/flexible-foundations/) and [scalable](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/). You can set the highest parent element, html, to have a relative `font-size` specified with an em value or a percentage, and it will calculate a specific value based on the browser’s default `font-size`. This is great for printed documents (the typical default browser print size is 12px vs. 16px for screen display), and it allows your site to scale with the user’s preference, especially in older browsers that have a harder time with page/text zoom.

However, em units have their drawbacks as well, particularly for web-apps or teams where many people touch the CSS. Consider Harvest, a web-app with thousands of lines of CSS code. We use modularized CSS for various designs and extensions used in various places throughout the app (like our calendar pop-over). If any of our styles were set in ems, then there’s a possibility that the pop-over would get added to too many different parent elements in too many different places with various `font-size`s, causing it to look different each time and ruining the consistency.

As both a product designer and an HTML/CSS developer accustomed to decently-sized dev teams, I’ve learned to avoid em units for the bulk of app development. On smaller and less complicated sites, these issues are less apparent, but still necessary to keep in mind and design around.

### Enter the rem unit

I first heard about rem units [a few years ago](http://snook.ca/archives/html_and_css/font-size-with-rem), but haven’t seen much talk or use since. I’m not sure why, though, as they have always seemed incredibly well-suited for web design – they behave much more predictably like pixels, but retain the flexibility of ems. If an element is always supposed to have a `font-size` of 16px at base size, regardless of the parent element, then rems make more sense than ems. It’s much easier to convert design comps into code without worrying about parent elements. The same goes for `width`, `height`, `padding`, `margin`, and all other style attributes that specify size.

I decided to try rem units for Harvest’s 2012 Year In Work to learn their strengths and weaknesses first-hand in a real world environment. I found them to be very useful, and a joy to use for a variety of reasons.

Here’s what you should know about rem units:

### 1. They’re great for responsive design

Since all rem units are relative to a single number – the html `font-size` – you need only set the breakpoints on this number for a simple responsive layout. Here’s the actual code used in the Year In Work’s [Sass](http://sass-lang.com/) file:

```scss
html
  font-size: 16px
  @media screen and (min-width: 1600px)  // Large Monitors
    font-size: 18px
  @media screen and (min-width: 1400px)  // Small Laptops
    font-size: 14px
  @media screen and (min-width: 1100px)  // Tablet Landscape
    font-size: 13px
  @media screen and (min-width: 800px)   // Tablet Portrait
    font-size: 12px
  @media screen and (min-width: 500px)   // Mobile Landscape
    font-size: 7px
  @media screen and (min-width: 400px)   // Mobile Portrait
    font-size: 5px
```

While this isn’t appropriate for every design, being able to set a base size for your entire layout for every breakpoint can be incredibly useful.

*Note: While I used pixel values, you could use % values as well.*

### 2. They’re great for rapid prototyping

I’ve signed on to the theory of prototyping a design directly in HTML/CSS, and avoiding Photoshop altogether (sometimes). When experimenting with a design right within the browser, the last thing you want to worry about is getting the sizes exactly right.

Set the html `font-size` to 16px, or whatever you want, and then quickly estimate the sizes for everything else and run with them. The h1 is probably 2.5x that size, h2 probably 2x, h3 probably 1.75x… etc. It’s fast. While you can use em units for this as well, using rem units avoids the issue of having to resize the h3 after putting it inside a div with a `font-size` on it – which is more likely as you tend to move things around quickly during rapid prototyping.

This is how I designed the Year In Work actually… there were no layout PSDs.

*Note: Just like with ems, you’ll find you need to use fractions like 2.25 for some values. I always stuck to .25, .5, or .75 when not using a whole number, since my base size is 16px. However, as you can see in the screenshot above, the base size can change to 13px, which at 2.25rem is 29.25px. Since you can’t have a quarter pixel, some browsers render this as 29px, others as 30px. I found this to be a minor trade-off (but something to keep in mind) for the ease of the responsive layout that I explained above.*

### 3. All sizes should be in rem units

Some developers prefer a mix of pixels, percentages, and ems for different styles on different elements, all within the same page. Personally, I think this makes development confusing, but it can work.

This doesn’t work well when using rem units, though. Using rems on only some styles doesn’t offer any advantage – you might as well just use pixels. You have to commit to replacing all pixel values with rem units if you want the responsive advantages.

*Note: You can use ems and rems together, though. Check out [the h3 on slide 3](http://cl.ly/image/2R0j181Y3W3r) of The Year In Work – I didn’t feel like calculating the size of the “21”, so I gave it a font-size of 1.25em.*

### 4. They can influence your design style

Sometimes you need an element to be only 3px – this translates to 0.1875rem… not very conducive to simplified design code. However, you can allow this to influence your design, and decide to just use 0.2rem (or 0.25rem, like I mentioned above). Often the difference isn’t important.

Or, if that 3px is a border-radius, maybe you decide to remove it entirely. Those are design decisions you have to make. I increasingly found that I prefer numbers to end in 0 or 5, or at least an even number. If an element was 9rem wide, I would just make it 10rem and see how that felt. The majority of the time it worked out just fine, and psychologically I felt like my code and design was clearer, cleaner, and easier to work with.

It’s because of this reason that rem units probably aren’t the best for sophisticated web-apps. They worked great for the Year In Work, but I don’t see us using them in Harvest anytime soon – that would probably slow down development rather than speed it up. There are just too many small pixel sizes in various places for rem units to be useful.

However, if you put the last two points together, and you fully use rems from the start while allowing yourself to design around the strengths and weaknesses of rem units, you could end up with a nice web-app that scales nicely between browser and tablet sizes and page zooms.

### 5. They do not work in IE8

This may be the biggest reason why we don’t hear about rem units too often currently, as many sites (especially web-apps) still need to support IE8. Luckily, that was not a requirement for the Year In Work, which we decided should be a showcase of some forward-thinking design and techniques.

If you’re working on a personal or small site, I doubt this will be a big issue for you.


### Final thoughts

Rem units aren’t great for every occasion, but for some sites they can be a great tool. They are worth trying regardless of what you’re normally comfortable with:

* If you’re coming from a background that always uses pixels, rems are virtually the same thing, but they add the responsiveness that was missing in your old designs.
* If you’re coming from a background that always uses ems, rems can solve your issues of elements-within-elements becoming inconsistent and having to add multiple definitions in your stylesheet.

Either way, I hope to see more rem usage in the future. I don’t feel like it’s been fully explored yet, and think there’s still some use cases that haven’t been discovered.
