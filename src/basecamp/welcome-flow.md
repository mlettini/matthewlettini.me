---
layout: layouts/basecamp-post.njk
released: August 2019
title: Improved Welcome Flow
---

First impressions matter. A person’s first minutes in Harvest can form some of their most sticky opinions about what Harvest is and the value it provides. In August 2019, I was tasked with leading a cycle team to deliver ([in 6 weeks](https://basecamp.com/shapeup/0.3-chapter-01#six-week-cycles)) an improved multi-step welcome flow for new Harvest trials. At the time, the then-current welcome flow had a few core issues:

* It included a number of inconsequential steps and a loading screen that made Harvest feel slow and antiquated.
* It did not lead people towards success in their new trial.

**Our goal was to improve our trial-to-paid rate by re-imagining the welcome flow.** We approached the redesign with 3 core principles:

1. Create a welcoming atmosphere that rewards people for their progress.
2. Help people set up their account to be customized and useful for them.
3. Remove blockers that prevent people from trying Harvest’s features.

## Determining the new steps

The pitch-writer did a good bit of work determining which steps should be included in the welcome flow. The pitch called for the inclusion of at least these functions:

* **Quickly add a first project and/or sample data.** Time cannot be tracked in Harvest without a project, and creating a full project in Harvest can often be overkill for a customer just testing the waters. Remove this blocker.
* **Determine if the trial is for a team.** Around this time, Harvest was developing a new vision and mission that included a focus on teams over freelancers. Knowing that someone is trialing Harvest for their team is vital to our internal reporting.
* **If for a team, invite team members.** Along with the above, research and data tells us that people who invite their team during the trial are more likely to convert to paying customers. We want to support this insight by making it easier to do earlier.

But the pitch included a caveat: “None of these are final. Everything can change in the cycle.” This particular pitch was written without going through the [Risks and Rabbit Holes](https://basecamp.com/shapeup/1.4-chapter-05) step in the *Shape Up* methodology, so our team started the cycle by revisiting and finalizing the welcome flow’s steps.

*(Note: The images below were created in <a href="https://whimsical.com">Whimsical</a>, a visual wireframing and diagramming tool. Whimsical allows me to sketch ideas quickly without needing to jump into design software, and I often start my design thinking here or pen & paper.)*

<figure>
  <a href="/images/basecamp/wf-image-1.png"><img src="/images/basecamp/wf-image-1.png" alt=""></a>
  <a href="/images/basecamp/wf-image-2.png"><img src="/images/basecamp/wf-image-2.png" alt=""></a>
  <figcaption>
    A few early explorations, encorporating functions from Sign Up. Including these would turn out to be too technically tricky.<br>
    Click any image to view full size.
  </figcaption>
</figure>

One additional function I initially wanted to include in the welcome flow was asking for the customer’s Company Name. I believe the first of multiple onboarding steps should be both easy to answer and personal to the customer, and their Company Name sits right at that nexus.

Unfortunately, Company Name is asked for on the sign up form, and needed for multiple moving pieces in the routing code between sign up and new trial. A bit of technical exploration, I quickly decided changes to the sign up form were out of scope.

We explored a few more options, but ultimately pulled back and pared down to the pitch’s original outline. Our final steps (after sign up) would be:

* Step 1: Determine if the trial is for a team.
* Step 2: Help the customer create a project or add sample data.
* Step 3: Invite a team member. (Optional: Only shown to teams)
* Step 4: Capture necessary marketing needs.
* Step 5: Land in Harvest with a success confirmation.

<figure>
  <a href="/images/basecamp/wf-image-3.png"><img src="/images/basecamp/wf-image-3.png" alt=""></a>
  <figcaption>
    A more realistic outline. We'd only touch the Welcome Steps and remove the loading Interstitial.
  </figcaption>
</figure>

We were able to keep the steps down to a minimum, and asking if the new trial is for personal use or a team of people satisfied our desire to make the first step easy to answer and personal.

## Designing the new welcome flow

While finalizing steps, I was also considering what they will look like on screen.

The previous welcome flow was a series of dialogs over our initial welcome page. This design cleverly felt lightweight, but had a specific flaw: Seeing the Harvest application behind the dialog was an enticing distraction ([example of what this looks like](/images/basecamp/wf-image-13.png)). Data showed many customers skipped the welcome flow or closed it, so they can get into the app faster. The steps themselves felt like blockers to using the product.

I originally started with this same design…

<figure>
  <a href="/images/basecamp/wf-image-5.png"><img src="/images/basecamp/wf-image-5.png" alt=""></a>
  <figcaption>
    Early explorations of new onboarding steps, designed as modal dialogs to be placed over Harvest's welcome page.
  </figcaption>
</figure>

…but quickly realized that flaw would persist. Customers could still be distracted by Harvest in the background, and might dismiss the welcome flow dialog or speed through it. So I experimented with one-question-at-a-time, full-page steps.

<figure>
  <a href="/images/basecamp/wf-image-6.png"><img src="/images/basecamp/wf-image-6.png" alt=""></a>
  <figcaption>
    Very quick (and fairly messy) explorations of the new steps as full-page forms.
  </figcaption>
</figure>

This direction would be a tradeoff. It might take more clicks for a person to get into their new Harvest trial, but each step would be given more focus and deliberation by design. Considering our priorities were to maximize customer success and not speed, this was a tradeoff our team was willing to make. We wanted customers to interact with these steps, not automatically skip them.

So I proceeded in this direction. But how do I make it all look cohesive? After a few more experiments in design, I made two big decisions.

The first was bringing in Welcome illustration with some friendly copy. This was one of our stated principles, and our illustrations achieve this with some style and flair (compare the screens below to the ones above).

The second was formatting the page in a side-by-side 2-column grid, with the static welcome on the left and the dynamic form steps on the right. This was beneficial in a few ways. The illustration was quite tall and different steps in the flow would be different sizes. A one-column page would require frequent scrolling even on desktop. And I wanted to continue making the welcome flow *feel* like an easy lift. The static left side contributed to the flow not feeling burdensome, or like you’re trawling through multiple pages just to get into the app.

<figure>
  <a href="/images/basecamp/wf-image-7.png"><img src="/images/basecamp/wf-image-7.png" alt=""></a>
  <figcaption>
    Now we're getting somewhere! A 2-up design and friendly illustration makes the flow more inviting and lightweight.
  </figcaption>
</figure>

A few more technical design decisions cropped up during this time to simplify the flow and keep the customer’s forward momentum:

* **No skipping.** Our team stated that we want customers to interact with these steps, not skip them. This might be a risky move if we discover that this new welcome flow pushes people away, but there’s also a good chance people who bounce might not have had strong intentions of converting in the first place. We decided to ship without skip, but keep the option in our back pocket to revisit if needed.
* **No back button.** Per our stated principles, our design would focus on forward momentum and progress. The browser’s back button should work if the customer needs to go back a step.
* **Include the progress bar.** Shedding light on the end of the tunnel helps people understand where they are in a multi-step flow, and removes any feelings of being lost. The previous welcome flow had a bar to help show what step you were on, and I kept a version of that.

The last design decisions to make were for each individual step, how they should read, their form interaction, etc. I don’t want to make this post too long by enumerating every last thing, but briefly:

* The first step needed to be required, and I simplified how we ask for “solo” vs “team” for their trial purpose.
* The absolute minimum project attributes we needed were client name and project name. I removed all other complexity.
* Adding a person, though, needed all of first name, last name, and email. This is a lot to fill out at this stage in the person’s trial journey. I decided to design this step around inviting just one other team member for now, as a “trial buddy” for figuring out Harvest.

<figure>
  <a href="/images/basecamp/wf-image-8.png"><img src="/images/basecamp/wf-image-8.png" alt=""></a>
  <figcaption>
    Examples of design exploration for each step.
  </figcaption>
</figure>

Now that I had an outline of how we’d design and build the welcome flow, I pulled images out of Whimsical and built an interactive prototype with [Marvel](https://marvelapp.com/prototype/562c1g0/screen/59600932). I tested this prototype internally with my team and other members of the Customer Experience team.

**[Click here to try the prototype yourself &rarr;](https://marvelapp.com/prototype/562c1g0/screen/59600932)**

After solid feedback and a few minor iterations, it was time to build it.

## Shipping the new welcome flow

The welcome flow was built as a single file of code, and navigating through the steps is done with javascript. I was paired with a fantastic front-end developer that handled all the JS, while I wrote the HTML and CSS. Using our base styles and components automatically took the design sketched in Whimsical and made it *feel* like Harvest.

<figure>
  <a href="/images/basecamp/wf-image-9.png"><img src="/images/basecamp/wf-image-9.png" alt="Final step 1 of the welcome flow"></a>
</figure>

There were a few more iterations after we could use it for real—the progress bar was moved next to the button, we added Harvest's signature orange nav bar, error states and validation were designed, copy was finalized, and we made the flow accessible to screen readers.

There isn’t much else to talk about in this section. Our team simply set about executing the plan we built above within the last few weeks of the cycle. I was able to make use of the newer `display: flex` property in order to easily build the page for two-columns on desktop and one-column on mobile, and the developer handled that unnecessary loading screen I mentioned earlier.

The last thing we added was Step 5, landing in Harvest with a success confirmation. This had always been planned as a dialog within Harvest, so it just needed copy. Since there were a myriad of optional things the person can do in the welcome flow, this copy needed to handle all permutations of creating a first project, adding sample data, and/or inviting a team member.

Step 1 is shown above, and here's what the rest of the steps looked like when we shipped:

<figure>
  <a href="/images/basecamp/wf-image-10.png"><img src="/images/basecamp/wf-image-10.png" alt="Final step 1 of the welcome flow"></a>
  <a href="/images/basecamp/wf-image-11.png"><img src="/images/basecamp/wf-image-11.png" alt="Final step 2 of the welcome flow"></a>
  <a href="/images/basecamp/wf-image-11.png"><img src="/images/basecamp/wf-image-12.png" alt="Final step 3 of the welcome flow"></a>
  <a href="/images/basecamp/wf-image-13.png"><img src="/images/basecamp/wf-image-13.png" alt="Final step 4 of the welcome flow"></a>
</figure>

## Hitting our goal

Our average desktop trial-to-paid rate in the previous year with the previous welcome flow clocked in <11%. With the new welcome flow, we’re now averaging ~12%. A modest gain, but things look even better when we breakout the metrics to just look at teams.

Previously, the trial-to-paid rate for `personal` trials hovered <9% and `team` trials <13%. With our changes, while `personal` trials still average ~9%, **`team` trials jumped to average ~18%**. All of these averages also include unusual down months within the pandemic. Further, this change also saw gains in other key results, like time-to-first-time-entry and success of trials that invited a team member.

Overall, our Customer Experience team was happy with the result. Besides the key result gains, the flow to get into a new Harvest trial now feels inviting instead of hindering. We now feel like we’re putting our best foot forward with our potential customers.

## Future improvements

No project is perfect, and I noted ways to continuously improve the welcome flow in the future.

* While many new trials now create a project in the welcome flow, sample data usage dropped off significantly. Combining these options into an either-or decision and favoring project creation led customers to skip over sample data entirely. This was rectified in August 2020, when another team I lead split those options into distinct welcome flow steps.
* Asking customers about their industry was added back in around March 2020, after research teams determined they missed that information.
* One future idea is to customize project creation based on their industry. E.g. If they’re an architecture firm, we can offer “Building Proposal” as a sample project, and even set up the project with applicable tasks and billing preferences for that kind of project.
* Future enhancements to the team invite step include inviting with email only, inviting multiple people at this step, and customizing the invitation with a personal note.

---

## Project details

<dl>
  <dd>Role</dd>
    <dt>Project management, design, front-end development</dt>
  <dd>Team</dd>
    <dt>Myself, 2 engineers, and 1 partner each from the QA, product, and customer support teams</dt>
  <dd>Released</dd>
    <dt>{{ released }}</dt>
  <dd>Interact</dd>
    <dt>To see and use the latest version of the welcome flow, simply <a href="http://getharvest.com/signup">sign up for a free Harvest trial</a> (no credit card required)</dt>
</dl>
