---
title: Harvest Timesheet Reminders
subtitle: Prompts to help customers build a habit with time keeping.
description: Prompts to help customers build a habit with time keeping.
order: 2
# date: 2021-04-08
date: 2022-01-02
---

<div class="inner">

Harvest is team-based time tracking software. It’s built specifically to help teams not only get paid for their time but to also understand their team better. It helps answer questions like “Who is over-loaded and why?” and "Which projects are going over-budget and why?”, so having your team track time diligently is vital to getting value out of Harvest.

During a research initiative in 2018, one learning was that many customers had trouble getting everyone on their team to track time *on time*. There’s sometimes “a few bad apples” that wouldn’t track until much later. That can be a problem for our customers and us—if insights from time tracking don’t seem trustworthy and realistic, that can cause a customer to churn or a trial to not sign up.

This led our product team to study how habits are formed, and if we could make time tracking something automatic for users. We took a class on behavior design taught by <a href="https://www.bjfogg.com" target="_blank" rel="noopener">BJ Fogg</a>, and learned quite a bit! In summary for portfolio purposes: Behavior (B) happens when Motivation (M), Ability (A), and a Prompt (P) come together at the same moment. And when you’re looking to create or change a behavior, the first step is to make sure you have the right prompt.

So to prompt people to track time with Harvest, we built two separate reminder notification systems. I was the designer and project manager for both, leading teams that consisted of a product manager and a few front-end engineers.

## Personal Reminders

Our first system for timesheet reminders was a prompt individuals could set up for themselves. Since people have different preferences in how they track, we built it to be fully customizable. People could decide what days and times they wanted to be reminded to track time, as well as how they preferred to be reminded: by email or desktop notification.

Reminders are then only sent on the days they chose when they haven’t tracked by the time they chose. Ultimately pretty simple.

</div>

<figure class="side-by-side">
  <div>
    <div class="bordered">
      <img src="/images/work/reminders-personal-email-notification.png" alt="" data-zoomable>
    </div>
    <figcaption>Email reminder</figcaption>
  </div>
  <div>
    <div class="bordered">
      <img src="/images/work/reminders-personal-desktop-notification.png" alt="" data-zoomable>
    </div>
    <figcaption>Desktop notification reminder</figcaption>
  </div>
</figure>

<div class="inner">

Creating the browser-based desktop notification was a fun challenge. Since some browsers implement desktop notifications differently, we only had enough resources to support our most popular browsers. Browser notifications are also an opt-in feature. These two realities created a few error states we had to support and communicate to the user. However, they also allowed us to offer desktop notifications to our desktop application users, which was an added benefit and delight.

</div>

<figure>
  <div class="side-by-side" style="grid-template-columns: 38rem 1fr">
    <div class="bordered">
      <img src="/images/work/reminders-personal-settings.png" alt="" class="shadowed" data-zoomable>
    </div>
    <div>
      <div class="bordered">
        <img src="/images/work/reminders-personal-settings-error1.png" alt="" data-zoomable>
      </div>
      <div class="bordered">
        <img src="/images/work/reminders-personal-settings-error2.png" alt="" data-zoomable>
      </div>
    </div>
  </div>
  <figcaption>Opting in to browser-based desktop notifications and examples of potential error states</figcaption>
</figure>

<div class="inner">

In addition to your typical settings preference, we also built a dialog wizard to help individuals discover this feature and guide them through setup. It would pop up for new users after they tracked a bit of time, and was designed to help them set up reminders based on how they prefer to track. This also gave us an opportunity to recommend daily tracking, which data shows is more beneficial to both them and their team.

The screenshots below highlight a bit of my design process. I often start scribbling in a tool like <a href="https://whimsical.com" target="_blank" rel="noopener">Whimsical</a> so I can quickly get ideas and flows down on screen without having to worry yet about specific styles. Wireframing and sketching like this helps me focus more on the edges of the user experience.

</div>

<figure>
  <div class="side-by-side" style="grid-template-columns: 11rem 1fr 1fr">
    <div class="bordered whimsical">
      <img src="/images/work/reminders-personal-whimsical3.png" alt="" data-zoomable>
    </div>
    <div class="bordered whimsical">
      <img src="/images/work/reminders-personal-whimsical1.png" alt="" data-zoomable>
    </div>
    <div class="bordered whimsical">
      <img src="/images/work/reminders-personal-whimsical2.png" alt="" data-zoomable>
    </div>
  </div>
  <figcaption>Early in-progress shots from designing the discovery wizard in <a href="https://whimsical.com">Whimsical</a></figcaption>
</figure>

<figure>
  <div class="side-by-side">
    <div class="bordered">
      <img src="/images/work/reminders-personal-discovery-prompt.png" alt="" class="shadowed" data-zoomable>
    </div>
    <img src="/images/work/reminders-personal-discovery-step1.png" alt="" data-zoomable>
    <img src="/images/work/reminders-personal-discovery-step2.png" alt="" data-zoomable>
    <img src="/images/work/reminders-personal-discovery-step3.png" alt="" data-zoomable>
  </div>
  <figcaption>Continued in-progress shots after a few design iterations and with Harvest styles</figcaption>
</figure>

<div class="inner">

After our 2019 launch, we heard many positive reviews and the data showed the feature helped people track time better. Unfortunately, not many users turned them on. While the wizard seemed helpful, it wasn’t in the right place to market the feature, and was later removed. This taught myself and the team a lesson in product marketing and looking for the best opportunities to highlight new and helpful features.

Setting up personal reminders has since made its way to other areas of onboarding, however, they’ve also been slightly over-shadowed by…

## Team Reminders

Our second system for timesheet reminders put the control in the hands of team administrators. We learned that usually the people who turned on personal reminders were already decent time trackers, not the “bad apples” who needed help the most. So we built something specifically designed for teams.

This system has an administrator tell us when timesheets are due each week, and we remind their team that the deadline is approaching. In addition, if a team member *still* misses the deadline, Harvest will automatically notify them again shortly afterwards.

</div>

<figure class="side-by-side">
  <div>
    <div class="bordered">
      <img src="/images/work/reminders-team-before-email.png" alt="" data-zoomable>
    </div>
    <figcaption>Before deadline email reminder</figcaption>
  </div>
  <div>
    <div class="bordered">
      <img src="/images/work/reminders-team-after-email.png" alt="" data-zoomable>
    </div>
    <figcaption>After deadline email reminder</figcaption>
  </div>
</figure>

<div class="inner">

Reminders are designed to only notify when needed. Administrators can set how early before and how long after the deadline to notify people, and in addition, how Harvest should decide who needs to be notified.

<figure>
  <div class="bordered">
    <img src="/images/work/reminders-team-settings.png" alt="" data-zoomable>
  </div>
  <figcaption>Team reminder settings</figcaption>
</figure>

In addition to your typical settings preference, we once again built a more clear way to help people discover team reminders. This time we took what we learned from personal reminders and simplified our approach, moving the setup to a more contextual place: when a new trial is about to add their team.

</div>

<figure>
  <div class="bordered">
    <img src="/images/work/reminders-team-discovery-prompt.png" alt="" class="shadowed" data-zoomable>
  </div>
  <figcaption>Introducing team reminders when people would first invite their team</figcaption>
</figure>

<div class="inner">

Teams love this feature because an automated reminder removes awkward IRL “Hey, you need to get your time in!” conversations between managers and their team members. Those aren’t enjoyable for anyone involved. This feature also led to a significant increase in trials that track time, one of our primary metrics.

To learn more, read the launch announcement of timesheet reminders I posted on <a href="https://www.getharvest.com/blog/2021/04/timesheet-reminders" target="_blank" rel="noopener">the official Harvest Blog</a>.

These two reminder features may just be simple email notification systems on the surface, but they both presented unique design challenges. They taught me lessons in product marketing, settings UX, and behavior design. Since these prompts help individuals and teams track time better, we also highlighted them when we updated our [welcome flow](/work/harvest/welcome-flow).

</div>
