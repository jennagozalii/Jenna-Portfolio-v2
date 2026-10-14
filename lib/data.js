export const profile = {
  name: "Jenna Gozali",
  role: "Data Analyst moving into Business Analysis and Product",
  email: "jennagozali95@gmail.com",
  linkedin: "https://www.linkedin.com/in/jennagozali",
  github: "https://github.com/jennagozalii",
  location: "Kuala Lumpur, Malaysia",
  // Your CV lives in public/docs/. To update it, replace that file and keep the same name,
  // or change the path here.
  cv: "/docs/Jenna_Gozali_Resume_2026.pdf",
  photo: "/images/jenna.jpg",
};

export const categories = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "requirements", label: "Requirements" },
  { id: "delivery", label: "Project delivery" },
  { id: "testing", label: "Testing and QA" },
  { id: "design", label: "UX design" },
  { id: "data", label: "Data analysis" },
];

// HOW FEATURING WORKS
// Projects with `featured: 1`, `featured: 2` or `featured: 3` show in the Top 3 section, in that order.
// Every other project shows under "Other projects". To swap one into the Top 3,
// move the `featured` number from one project to another.

export const projects = [
  {
    slug: "shopee-live-instant-checkout",
    featured: 1,
    title: "Shopee Live Instant Checkout: from a 51% checkout failure to a delivery plan",
    kind: "bootcamp",
    context: "dibimbing BA and Product Strategy Bootcamp, Mini Projects 1 to 4",
    format: "User research, MVP design and full project execution plan",
    tags: ["product", "delivery", "data"],
    shows: ["Business analysis", "Product management", "Project management"],
    credit: "Individual project. I played the Project Manager / Product Owner in the case.",
    tools: ["Jira", "WBS and critical path", "Bottom-up costing", "Quality gates", "Risk heat map", "Staged rollout"],
    thumb: "/images/shopee-cover.jpg",
    short:
      "Half of simulated checkouts on Shopee Live failed because stock ran out while the buyer was still paying. I researched it, designed a fix, and then planned how a team would actually ship it: schedule, budget, quality gates and risks.",
    margin:
      "My first schedule overbooked two people on review days. Checking workload per person per day, not per epic, caught it.",
    summary:
      "For four mini projects in the bootcamp I stayed on one problem from start to finish: Shopee Live checkout. Mini Projects 1 and 2 were research, Mini Project 3 was a prototype, and Mini Project 4 asked the harder question: how would a team actually deliver this? This is a case study, not a real Shopee project.",
    sections: [
      {
        h: "The problem: buyers lose the race for stock",
        p: [
          "Live shopping creates urgency, but the checkout doesn't keep up. It takes 7 to 9 taps and doesn't hold the item while you pay, so the longer it takes, the more likely someone else buys the last unit.",
        ],
        list: [
          "51.1% of my 45 simulated checkouts failed because stock ran out mid-payment.",
          "70% of buyers dropped off on the payment page, and checkout conversion on Shopee Live sat at 1.8%.",
          "Gen Z buyers, who make up 54% of monthly users, converted at 0% in my research.",
        ],
        images: [{ src: "/images/shopee-problem.jpg", alt: "Slide: buyers lose the race for stock, with the four key numbers" }],
      },
      {
        h: "What I designed",
        p: ["One MVP with four parts, each answering something the research showed:"],
        list: [
          "Stock reservation: one unit is held for 5 minutes the moment a buyer taps Buy Now, and released automatically if they don't pay.",
          "A checkout overlay: 2 to 3 taps without leaving the live stream, with address, voucher and courier prefilled but editable.",
          "PIN confirmation before payment, locked after 3 wrong attempts, so nobody buys by accident.",
          "A 2-minute grace period: free cancellation right after paying, with the stock going straight back to the live session.",
        ],
        after: [
          "In Mini Project 3 the prototype checkout took 10 seconds and 3 taps, against 98 seconds and 8 taps on the current flow. That was with two test users, so I treat it as a direction, not proof. The delivery plan budgets a proper usability test with 12 users before design sign-off.",
        ],
        images: [{ src: "/images/shopee-solution.jpg", alt: "Slide: one MVP, four building blocks" }],
      },
      {
        h: "What success looks like",
        table: {
          head: ["Goal", "From", "To"],
          rows: [
            ["Checkout conversion rate", "1.8%", "5.4%"],
            ["Checkouts lost to stock running out", "51.1%", "under 10%"],
            ["Steps to complete checkout", "7 to 9 taps", "2 to 3 taps plus PIN"],
            ["Refunds from accidental purchases", "n/a", "0.5% of orders or less"],
            ["Delivery against the plan", "n/a", "within 10% on schedule and cost"],
          ],
        },
      },
      {
        h: "Planning the delivery in Jira",
        p: [
          "I built the whole work breakdown in Jira: 7 epics (one per phase), 30 stories and tasks, 85 subtasks each with an owner and dates, and 36 finish-to-start dependencies. Every ticket starts with its WBS number, so the board and the plan document match one to one.",
          "Before estimating anything, I put the campaign dates and holidays in. 11.11 and 12.12 mean code freezes, and year-end and Lebaran take people out. Only once those were in Jira did the real schedule show up: 23 weeks with six milestones where the sponsor makes a go or no-go call.",
        ],
        table: {
          head: ["Milestone", "Date"],
          rows: [
            ["M1 · Project plan approved", "13 Nov 2026"],
            ["M2 · Design sign-off after a 12-user usability test", "11 Dec 2026"],
            ["M3 · Development complete on staging", "29 Jan 2027"],
            ["M4 · UAT sign-off and go-live approval", "19 Feb 2027"],
            ["M5 · Rolled out to 100% of users", "5 Mar 2027"],
            ["M6 · Evaluation and project closure", "9 Apr 2027"],
          ],
        },
        images: [
          { src: "/images/shopee-wbs.jpg", alt: "Slide: work breakdown in Jira, 7 epics, 30 stories, 85 subtasks" },
          { src: "/images/shopee-schedule.jpg", alt: "Slide: 23-week schedule with six milestones" },
        ],
        layout: "grid2",
      },
      {
        h: "Team and budget",
        p: [
          "Eight people and 292 person-days, worked out bottom-up from each Jira subtask and then levelled so nobody is booked above 100% on any day. The budget comes from effort per subtask times the daily rate for each role, plus vendors, tools and cloud costs.",
        ],
        table: {
          head: ["Cost item", "Amount", "Share"],
          rows: [
            ["Team (8 people)", "Rp 328.8M", "58%"],
            ["Pentest vendor, tools, cloud and incentives", "Rp 142.1M", "25%"],
            ["Overhead (10%)", "Rp 47.1M", "8%"],
            ["Contingency reserve (10%)", "Rp 51.8M", "9%"],
            ["Total, under the Rp 600M cap", "Rp 569.8M", "100%"],
          ],
        },
        after: [
          "QA and testing is the biggest phase on purpose. The feature touches money and stock in real time, so the pentest and load testing stay in. The total is about 1.3% of the estimated loss from one month of failed checkouts.",
        ],
        images: [{ src: "/images/shopee-budget.jpg", alt: "Slide: Rp 569.8M budget broken down by phase" }],
      },
      {
        h: "Quality gates",
        p: ["Nothing gets released while any of these is red:"],
        list: [
          "Zero oversold units, in load testing and in production.",
          "The reservation API answers in 200 ms or less (p95) at 3 times peak traffic.",
          "No open Critical or High bugs, and no open pentest findings, at go-live.",
          "At least 99.8% crash-free sessions and a median checkout time of 35 seconds or less, PIN included.",
        ],
        images: [{ src: "/images/shopee-quality.jpg", alt: "Slide: quality gates" }],
      },
      {
        h: "Risks",
        p: [
          "I logged 15 risks, scored each by probability and impact, and gave every one an owner and a response. The top four:",
        ],
        table: {
          head: ["Risk", "Score", "Response"],
          rows: [
            ["A traffic spike takes the reservation service down", "20", "Load test at 3x peak, autoscaling and rate limits. A kill switch sends buyers back to the regular checkout."],
            ["Users or bots hoard stock with holds", "16", "One active hold per user per item, three per account, bot detection, and a shorter hold if more than 40% are released unpaid."],
            ["Two buyers both get the last unit", "15", "Atomic reserve operations, concurrency tests on the last unit, and stock reconciliation every 5 minutes."],
            ["Paid but no order, or charged twice", "15", "Idempotency keys, a reconciliation job and an agreed callback SLA with the payments team."],
          ],
        },
        after: [
          "The Rp 51.8M contingency reserve backs this log: it can only be released for risks on it, and only with the sponsor's approval.",
        ],
        images: [{ src: "/images/shopee-risk.jpg", alt: "Slide: 15 risks on a heat map" }],
      },
      {
        h: "Rolling out in steps",
        p: [
          "The launch goes 5% (Gen Z buyers in Jakarta first), then 25%, 50% and 100%. Each step only goes up if the guardrails hold: error rate under 0.5%, zero oversell, accidental-purchase refunds at 0.5% or less, and no more than 30% of holds released unpaid. A feature flag lets the team step back without shipping a new app version.",
        ],
        images: [{ src: "/images/shopee-rollout.jpg", alt: "Slide: staged rollout from 5% to 100%" }],
      },
    ],
    note: {
      title: "What planning it end to end taught me",
      p: [
        "My first draft of the schedule looked fine at epic level, but when I checked allocation per person per day, the designer and the tech lead were both overbooked on review days. I only saw it because every subtask had an owner and dates.",
        "The other surprise was cost. If you only count salaries, the plan looks cheap. For a feature that touches money, security and performance testing came to about a quarter of the budget, and that's the part that's easiest to forget.",
      ],
    },
    next: [
      "Run the 12-user usability test the plan budgets for, and check the 5.4% conversion target against what it shows.",
      "Put a money figure on the top risks (probability times cost) so the size of the contingency reserve has a number behind it.",
    ],
    links: [{ label: "Read the full plan (PDF)", href: "/docs/shopee-live-instant-checkout-plan.pdf" }],
  },
  {
    slug: "omnichannel-retail-launch",
    featured: 2,
    title: "Omnichannel retail launch: keeping the date without shipping what isn't ready",
    kind: "bootcamp",
    format: "Project quality review and risk assessment matrix",
    tags: ["delivery"],
    shows: ["Project management", "Stakeholder management", "Business case"],
    credit:
      "Group project with Restu Hasan Permadi and Vina Sabrina. I wrote the Benefits and Customers section and the Risks, Constraints and Assumptions section, then we built the risk matrix together.",
    tools: ["Quality planning", "Cost-benefit analysis", "Risk register", "Likelihood x impact scoring", "Heat map"],
    thumb: "/images/omni-risk-overview.jpg",
    short:
      "A retailer's omnichannel launch was 80% done, a week out, with failing payments and pickup areas still under renovation. We kept the date by launching in phases, then mapped 25 risks that could still break it.",
    margin:
      "A missing complaint SOP scored as high as a broken payment system: both 20 out of 25. A working app won't save the launch if nobody can handle the first wave of complaints.",
    summary:
      "Over two sessions we played the Project Management Team for a local retailer launching an omnichannel experience: check stock in real time, buy in the app, pay digitally and pick up in store. The first session was a quality review a week before launch. The second was a full risk assessment of the same launch.",
    sections: [
      {
        h: "The situation",
        p: ["The project was 80% complete, but 80% of the work done isn't 80% of the product ready for customers."],
        list: [
          "Payments were failing on some transactions, and app stock didn't match store stock.",
          "Testing was only 60% done.",
          "Pickup areas were still under renovation.",
          "The launch campaign had already gone public, so the date couldn't move.",
        ],
        table: {
          head: ["Stakeholder", "What they wanted"],
          rows: [
            ["CEO (sponsor)", "Keep the launch date"],
            ["Finance", "No extra spend"],
            ["Marketing", "Every feature live"],
            ["Store Operations", "Worried about complaints at the counter"],
            ["Customer Service", "No process yet for online issues"],
          ],
        },
      },
      {
        h: "Our call: a phased launch",
        p: [
          "We kept the date but released only what passed agreed quality checks. In-store pickup would open first at the stores that were truly ready, and everything else would follow in a second phase. Scope could flex. Quality could not.",
          "To make that decision stick, the launch goals were written in measurable terms before anything else: stock accuracy across channels of 95% or higher at launch, 30% fewer complaints about stock, price or order status within 3 months, and schedule and cost within 10% of plan.",
        ],
      },
      {
        h: "My part: is it worth it, and what could go wrong?",
        p: [
          "The case gave no numbers, so I built the benefit estimate from stated assumptions: 200 online orders a day, an average order of IDR 250,000, a 25% margin and 40% of orders picked up in store. It came to about IDR 300M in the first 30 days, against a project cost of IDR 205M.",
          "I kept it conservative on purpose. I counted margin instead of revenue, and I put compliance at IDR 0 because I couldn't measure it honestly, even though it clearly matters.",
        ],
        table: {
          head: ["Type of benefit", "Basis", "Estimate"],
          rows: [
            ["Revenue", "Margin on online and click-and-collect orders", "IDR 124.5M"],
            ["Other costs avoided", "Campaign spend not wasted, vendor SLA penalties", "IDR 75.0M"],
            ["Less maintenance", "Fixing defects before launch, not after", "IDR 64.0M"],
            ["Cost savings", "Fewer refunds, chargebacks and rework", "IDR 20.3M"],
            ["Better decisions", "Real-time inventory dashboard", "IDR 10.0M"],
            ["Productivity", "Faster pickup handover and complaint handling", "IDR 7.0M"],
            ["Compliance", "Certified payment gateway, PDP Law", "Not quantified"],
          ],
        },
        after: [
          "I also mapped 9 key risks for the launch, each with what it would do to customers, a prevention step and a backup plan. For example, if payments still fail on launch day, the faulty methods are switched off and customers can order in the app and pay in store.",
        ],
        images: [{ src: "/images/omni-benefits.jpg", alt: "Benefits and Customers section of the quality review" }],
      },
      {
        h: "Then we asked what could still break it",
        p: [
          "In the next session we built a full risk assessment matrix for the same launch: 25 risks across IT, store operations, finance, marketing, customer service and stakeholders. Each one was scored by likelihood times impact, plotted on a heat map, and given a root cause, an owner, a mitigation plan and a deadline. Six came out critical.",
        ],
        table: {
          head: ["Critical risk", "Score", "Owner"],
          rows: [
            ["Payment failures at launch", "20", "IT Lead"],
            ["No SOP for online transaction complaints", "20", "Customer Service Lead"],
            ["App stock doesn't match in-store stock", "16", "IT Lead"],
            ["Defects missed because testing is incomplete", "16", "QA Lead"],
            ["Pickup areas and store staff not ready", "16", "Store Operations Lead"],
            ["App slows down or goes offline under high traffic", "15", "IT Infrastructure Lead"],
          ],
        },
        images: [{ src: "/images/omni-risk-overview.jpg", alt: "Risk assessment matrix overview with the heat map" }],
        layout: "single",
      },
    ],
    note: {
      title: "The riskiest problems weren't technical",
      p: [
        "Not one existing control in the matrix was rated effective. Eleven were ineffective or didn't exist at all. Everything looked fine on the plan until we asked what was actually protecting us right now.",
        "Some risks only show up after the project ends. Nobody had been assigned to own the service once the project closed, which means the project could succeed while the business fails. As a data analyst my first instinct is to ask what the data says. This case reminded me that the harder skill is making a clear decision you can defend when the deadline, the budget and five stakeholders all want different things.",
      ],
    },
    next: [
      "Put a money figure (probability times cost impact) on the critical risks, so the contingency request to Finance has a number behind it.",
    ],
    links: [
      { label: "Read the risk matrix (PDF)", href: "/docs/omnichannel-risk-assessment-matrix.pdf" },
      { label: "Read the quality review (PDF)", href: "/docs/omnichannel-project-quality-review.pdf" },
    ],
  },
  {
    slug: "tokopedia-retention-program",
    title: "Keeping Tokopedia buyers past their 3rd order",
    kind: "bootcamp",
    format: "Lean PRD and clickable prototype",
    tags: ["product"],
    credit: "Individual project",
    tools: ["Lean PRD", "Lovable", "GitHub Pages"],
    thumb: "/images/retention-1.png",
    short:
      "Most buyers who finish three orders never place a fourth. I wrote a one-page PRD for a small rewards flow that catches them at that moment, then built a prototype from it.",
    margin:
      "The prototype had to guess things my PRD never said, like how long Tier 1 lasts. I wrote those gaps down instead of pretending they weren't there.",
    summary:
      "This was the PRD module of the bootcamp. The case: a large share of Tokopedia buyers stop after their third purchase, usually right after their welcome promo runs out. I had to define the problem, pick a narrow target user, decide what to build first, and set a metric I could actually measure.",
    sections: [
      {
        h: "The problem",
        p: [
          "Out of buyers who complete three orders, roughly 88% never come back for a fourth (illustrative numbers for the exercise). Most of them came in through an onboarding voucher. Once it expires, the app treats them exactly like a brand new user, so there's no reason to keep choosing Tokopedia over another marketplace.",
          "I kept the target user narrow on purpose: promo-driven buyers who have just finished their 3rd order and haven't bought since. Not everyone on the platform, just the people sitting at the drop-off point.",
        ],
      },
      {
        h: "What I proposed",
        p: [
          "A four-step flow that starts the moment the 3rd order completes. The screens below are from the prototype I built in Lovable straight from the PRD.",
        ],
        list: [
          "Milestone unlock: the system spots the 3rd purchase and enrolls the buyer in Rewards Tier 1 automatically.",
          "A personal voucher: free shipping in the category they buy from most, valid for 14 days, instead of a random discount.",
          "A habit nudge on day 7 if the voucher is still unused, sent at the time of day that person usually shops, with a progress bar toward Tier 2.",
          "4th purchase: the voucher is redeemed, the habit is logged and Tier 2 is previewed.",
        ],
        images: [
          { src: "/images/retention-1.png", alt: "Prototype screen: order completed, Tier 1 unlocked" },
          { src: "/images/retention-2.png", alt: "Prototype screen: personalized free shipping voucher" },
          { src: "/images/retention-3.png", alt: "Prototype screen: day 7 reminder with progress bar" },
          { src: "/images/retention-4.png", alt: "Prototype screen: 4th order placed, Tier 2 preview" },
        ],
        layout: "grid2",
      },
      {
        h: "How I'd measure it",
        table: {
          head: ["Metric", "Target"],
          rows: [
            ["4th-purchase rate among promo-driven buyers, within 90 days of their 3rd order", "12% to 20%"],
            ["Enrolled users who open or click the tier notification in their first 14 days", "30%"],
          ],
        },
        after: [
          "I also wrote down what this release would not do: no points catalog, nothing on the seller side, no changes to the existing new-user promos, and Indonesia only. Early flash-sale access went to v2.",
        ],
      },
    ],
    note: {
      title: "What the prototype decided that my PRD didn't",
      p: [
        "When I pasted the PRD into Lovable, the tool had to fill in blanks: what the badge looks like, how 'favorite category' is calculated, what happens if someone never opens the notification, and how long Tier 1 status lasts. None of that was in my document. I listed those gaps as the PRD's clarity debt, because in a real team an engineer or designer would have had to guess the same things.",
        "I also tightened the metric while putting this page together. My first draft measured everyone who completed a 3rd order, but the target user is only promo-driven buyers. The metric now matches the user.",
      ],
    },
    next: [
      "Answer the clarity-debt questions in the PRD itself, starting with how 'favorite category' is calculated.",
      "Decide what happens to a buyer who never opens the day-7 nudge.",
    ],
    links: [{ label: "Open the live prototype", href: "https://jennagozalii.github.io/Tokopedia-Rewards/" }],
  },
  {
    slug: "tokopedia-wishlist-brd-fsd",
    featured: 3,
    title: "A Wishlist feature for Tokopedia, from BRD to FSD",
    kind: "bootcamp",
    format: "BRD and FSD",
    tags: ["requirements"],
    shows: ["Business analysis", "Requirements", "Traceability"],
    credit: "Individual project",
    tools: ["BRD", "FSD", "API design"],
    thumb: "/images/wishlist-brd.jpg",
    short:
      "I wrote both sides of the handoff: the business case for a Wishlist, and the technical spec engineers would build from. Then I checked one against the other.",
    margin:
      "My first FSD quietly included things the BRD had ruled out, like sharing the Wishlist. A requirement-by-requirement check caught it.",
    summary:
      "34% of shoppers leave a Tokopedia product page without doing anything, and more than 40% of them search for the same product again within a week. There's nowhere to save a product without adding it to the cart. I wrote a BRD for a Wishlist feature and then the FSD that turns it into something engineers can build.",
    sections: [
      {
        h: "The business side (BRD)",
        p: [
          "The BRD covers why this is worth building and what's in and out of scope. Shopee and Lazada already have a wishlist, and without one people either screenshot products or dump them in the cart, which makes cart data a weaker signal of buying intent.",
        ],
        list: [
          "Raise repeat purchase rate by 15% within 3 months of launch.",
          "Bring the exit-without-action rate on product pages from 34% down to 20%.",
          "In scope: heart icon on product and search pages, a Wishlist page, price and promo alerts, removing items, sync across app and web.",
          "Out of scope: sharing, folders, AI recommendations, and tying it to the loyalty program.",
        ],
      },
      {
        h: "The technical side (FSD)",
        p: [
          "The FSD turns each business requirement into functional requirements, measurable non-functional requirements, a data model, a Redis cache for the heart icon state, API contracts and error handling. Price alerts are triggered by price-change events from the Product Service instead of polling on a schedule.",
        ],
        images: [
          { src: "/images/wishlist-brd.jpg", alt: "First page of the BRD" },
          { src: "/images/wishlist-fsd.jpg", alt: "First page of the FSD v1.1" },
        ],
        layout: "grid2",
      },
      {
        h: "Every BRD requirement, traced",
        table: {
          head: ["BRD requirement", "Priority", "Covered in the FSD by"],
          rows: [
            ["Save to Wishlist button", "High", "FR-01, FR-08, add endpoint, Redis cache"],
            ["Wishlist page", "High", "FR-02, FR-03, list and remove endpoints"],
            ["Cross-device sync", "High", "FR-04, NFR-01"],
            ["Price and promo alerts", "Medium", "FR-05, NFR-05, event flow"],
            ["Out-of-stock label", "Medium", "FR-06, stock_status field"],
            ["Quick add-to-cart", "Low", "FR-07, existing cart endpoint"],
          ],
        },
      },
    ],
    note: {
      title: "Where my own FSD drifted from my own BRD",
      p: [
        "In the first version of the FSD, a few things slipped in that the BRD never asked for. It had a share-your-wishlist endpoint (out of scope), it deleted out-of-stock items instead of labelling them, and it stored wishlists without checking login even though sync was meant for logged-in users only. The non-functional requirements also said things like 'must be fast'.",
        "Version 1.1 fixes all of that and adds the traceability table above, so every requirement has a home and nothing extra gets built. This is the part of BA work I find most useful: making sure 'why we're building it' and 'how it gets built' still describe the same thing.",
      ],
    },
    next: [
      "Confirm open questions with the PM and design lead: an item limit per wishlist, notification preferences, and what size of price drop is worth an alert.",
    ],
    links: [
      { label: "Read the BRD (PDF)", href: "/docs/tokopedia-wishlist-brd.pdf" },
      { label: "Read the FSD v1.1 (PDF)", href: "/docs/tokopedia-wishlist-fsd-v1.1.pdf" },
    ],
  },
  {
    slug: "uat-plan-change-phone-number",
    title: "A UAT plan for changing your phone number with OTP",
    kind: "bootcamp",
    format: "User Acceptance Testing plan",
    tags: ["testing", "requirements"],
    credit:
      "Group project with Akbar Maulana Setiawan, Zeni Fauziatun Nafisah and An-Nur Jibril Awwalul Muharram Al-Prasad.",
    tools: ["UAT planning", "Given / When / Then", "Defect triage", "Go / no-go criteria"],
    thumb: "/images/uat-cover.jpg",
    short:
      "Some buyers never got their OTP because their number was different in different systems. We wrote the UAT plan that decides whether the fix is ready to release.",
    margin:
      "The most important test wasn't on the screen the buyer sees. It was checking the new number matched in the user database, the OTP service and the CRM.",
    summary:
      "Our group acted as the Product and Business Analyst team preparing UAT for a new e-commerce feature: buyers change their phone number from Profile or the Activation flow, verified by OTP on the old and the new number. Every part of the plan answers one question: are we confident enough to release?",
    sections: [
      {
        h: "The problem behind the feature",
        p: [
          "One buyer could have three different numbers on file: a current one in the user database, an outdated one in the OTP service and another in the CRM. When the OTP service holds the old number, login, checkout and verification all fail, and the buyer ends up at Customer Service.",
        ],
        images: [{ src: "/images/uat-problem.jpg", alt: "Slide: one buyer, three numbers across systems" }],
      },
      {
        h: "Deciding what goes into UAT",
        p: [
          "We used one rule for scope: if a failure here would delay the release, it belongs in UAT. That put the Profile and Activation flows, wrong and expired OTPs, the resend limit, new-number validation and data sync to all three systems in scope. Load testing, security testing, carrier SMS problems and buyers who've lost their old SIM stayed out, each for a stated reason.",
          "From the user story we wrote 7 scenarios covering happy paths, negative paths, an edge case, a permission check and backend sync, then took three of them down to full test cases with Given / When / Then criteria and the evidence a tester has to attach.",
        ],
        images: [
          { src: "/images/uat-scenarios.jpg", alt: "Slide: seven UAT scenarios" },
          { src: "/images/uat-testcases.jpg", alt: "Slide: three detailed test cases" },
        ],
        layout: "grid2",
      },
      {
        h: "Severity is not priority",
        p: [
          "Severity is the impact, priority is the urgency. Any S1 or S2 defect is automatically P0 and blocks the release. The exception we wrote down: wrong legal or consent text is low severity, but it can still be P0 because it blocks compliance sign-off. Every defect carries 12 fields so an engineer can reproduce it without asking the tester.",
        ],
      },
      {
        h: "When we'd say go",
        list: [
          "All 3 test cases pass, and the key test passes on both Android and iOS.",
          "At least 90% of scenario runs pass, with no open S1 or S2 defects.",
          "Customer Service confirms the new number shows up in the CRM.",
        ],
        after: [
          "Any one of these is an automatic no-go: an OTP still going to the old number, a buyer getting locked out, or a number changing without a valid OTP. The final call sits with the Product Manager for Account and Security.",
        ],
        images: [{ src: "/images/uat-gonogo.jpg", alt: "Slide: go / no-go criteria" }],
      },
    ],
    note: {
      title: "Test where the problem lives",
      p: [
        "It would have been easy to focus on the screens: the success page, the error messages, the OTP input. But the original problem was data, so the key test (TC-003) checks that after a change, the next OTP reaches the new number and the user database, OTP service and CRM all match. The tester attaches an SMS screenshot plus a query or log for all three systems.",
      ],
    },
    next: [
      "Get the full list of services that store a phone number from engineering, so the key test doesn't miss a fourth system.",
    ],
    links: [{ label: "See the full deck (PDF)", href: "/docs/uat-plan-change-phone-number.pdf" }],
  },
  {
    slug: "jira-emoney-wallet-setup",
    title: "Setting up Jira for an e-money wallet before the first sprint",
    kind: "bootcamp",
    format: "Jira project setup, workflow and backlog",
    tags: ["delivery", "product"],
    credit: "Individual exercise, with the product backlog provided by the mentor.",
    tools: ["Jira", "Scrum", "Workflow design", "User stories", "Custom fields"],
    thumb: "/images/jira-cover.jpg",
    short:
      "An e-money app with four epics and twenty work items. My job was to set up Jira the way a Project Manager would, before any development starts.",
    margin:
      "I removed the shortcut that let tickets jump straight to Done. Now nothing reaches Done without passing QA.",
    summary:
      "Our mentor handed us a full product backlog for a digital wallet: user onboarding and KYC, wallet balance and ledger, top-up, and P2P transfer with QRIS payments. Four epics, twenty work items, each with acceptance criteria and subtasks for design, engineering, data and QA. I set up the Jira space around it.",
    sections: [
      {
        h: "Picking the right setup",
        p: [
          "I used the Scrum template because the team works in sprints, and a team-managed space so the team can change its own workflow and fields. A company-managed space makes more sense when an organisation needs the same workflows and reporting across many teams.",
        ],
        images: [{ src: "/images/jira-epics.jpg", alt: "The four epics of the e-money app in Jira" }],
      },
      {
        h: "A workflow that can't skip testing",
        p: [
          "I added an In Testing status between In Progress and Done, and removed the transition that let any ticket jump straight to Done. A ticket that fails QA goes back to In Progress. I also mapped the new status to its own column so the team can see what's waiting on QA.",
        ],
        images: [{ src: "/images/jira-workflow.jpg", alt: "Jira workflow with the In Testing status" }],
      },
      {
        h: "A backlog you can plan from",
        p: [
          "I broke the User Authentication and KYC epic into 5 user stories, each with acceptance criteria, a priority and labels like MVP and Security. Then I added a custom Value Score field next to Story Point Estimate, so effort and business value sit side by side during refinement and sprint planning.",
        ],
        images: [
          { src: "/images/jira-backlog.jpg", alt: "Backlog with user stories under the authentication epic" },
          { src: "/images/jira-ticket.jpg", alt: "A filled-in ticket with Value Score and story points" },
        ],
        layout: "grid2",
      },
    ],
    note: {
      title: "The rules behind the board",
      p: [
        "The part that clicked for me was that the rules behind the board matter as much as the tickets on it. Coming from data analytics, I spend a lot of time thinking about data quality, and a well set-up Jira project turned out to be the same idea, applied to how a team works.",
      ],
    },
    next: ["Run a Scrum simulation in the same space and see whether Value Score actually changes what gets pulled into a sprint."],
    links: [{ label: "See my Jira notes (PDF)", href: "/docs/jira-emoney-setup-notes.pdf" }],
  },
  {
    slug: "leadership-bootcamp-cost-management",
    title: "Budgeting a leadership bootcamp that couldn't move its date",
    kind: "bootcamp",
    format: "Schedule and cost management case study",
    tags: ["delivery"],
    credit: "Group project with Akbar Maulana Setiawan and Billy Akbar Arsyaputra",
    tools: ["WBS", "Cost-benefit analysis", "Earned Value Management"],
    thumb: "/images/clb-evm.jpg",
    short:
      "A 3-day program for 100 employees, IDR 120M budget, 8 weeks to prepare and a fixed date. We planned the work, weighed two budget options and read the week-4 numbers.",
    margin:
      "The week-4 numbers said we were badly over budget. Before cutting anything, we asked how much of that spend was down payments for later work.",
    summary:
      "The company was running a three-day Leadership Bootcamp for 100 employees as part of its succession planning. The budget cap was IDR 120M, preparation time was 8 weeks and the event date could not be postponed. We acted as the project managers.",
    sections: [
      {
        h: "Planning the work",
        p: [
          "We broke the program into five work packages: project management, program design, resources and logistics, participant management, and execution and evaluation. Program design was the most complex because management, HR, trainers and participants all want different things. Resources and logistics carried the highest risk: with a fixed date, if the right trainer isn't available there's no room to reschedule.",
          "The key dependency chain runs from training needs analysis to curriculum design, then trainer sourcing, then materials. Trainers can only be picked once the curriculum is set, and materials only once trainers are confirmed. The venue has to be booked early for the same reason.",
        ],
        images: [{ src: "/images/clb-wbs.jpg", alt: "Work breakdown structure with five work packages" }],
      },
      {
        h: "Where the money goes",
        p: [
          "We classified every cost item as direct or indirect, then looked at which ones matter most. Trainer fees drive quality. Catering and transport are the hardest to control because they move with the final headcount and last-minute changes.",
          "Then we compared a Standard program at IDR 90M with a Premium one that uses the full IDR 120M and leaves nothing for surprises. We recommended a middle option we called Standard+: the standard structure at about IDR 100 to 105M, with part of the savings put back into trainer quality and roughly IDR 10M kept as contingency inside the 120M cap.",
        ],
        images: [{ src: "/images/clb-recommendation.jpg", alt: "Standard+ recommendation slide" }],
      },
      {
        h: "Reading the week-4 numbers",
        p: [
          "At the end of week 4, against the Option A baseline of IDR 90M, the numbers looked alarming.",
        ],
        table: {
          head: ["Metric", "Value", "What it says"],
          rows: [
            ["Planned value", "IDR 45.0M", "50% of work should be done"],
            ["Earned value", "IDR 40.5M", "45% is actually done"],
            ["Actual cost", "IDR 80.0M", "Cash spent so far"],
            ["CPI", "0.506", "Getting about half a rupiah of work per rupiah spent"],
            ["SPI", "0.90", "Slightly behind, not dramatically"],
            ["EAC", "IDR 177.8M", "Projected final cost at this rate"],
            ["TCPI", "4.95", "Efficiency needed to finish on budget"],
          ],
        },
        images: [{ src: "/images/clb-evm.jpg", alt: "EVM status slide at the end of week 4" }],
      },
    ],
    note: {
      title: "Audit first, then cut",
      p: [
        "A CPI of 0.506 looks like a disaster, but events pay a lot upfront: venue, trainer and catering deposits cover the whole program, not just the first four weeks. So our first recommendation was to check how much of the IDR 80M is committed down payments before touching the budget. It also matters for the next step. If the venue deposit is already paid, switching to an internal venue to save money could just lose the deposit.",
        "After that: protect the trainer fee, renegotiate catering, move to digital materials, lock in the participant list early, and review the budget weekly. If Standard+ is approved, the EVM baseline gets reset to about IDR 105M so we're measuring against the plan we actually chose.",
      ],
    },
    next: [
      "Build an actual 8-week schedule with durations, so the dependency chain becomes a proper critical path.",
    ],
    links: [{ label: "See the full deck (PDF)", href: "/docs/corporate-leadership-bootcamp-plan.pdf" }],
  },
  {
    slug: "request-refund-ux",
    title: "Designing a Request Refund flow for an e-commerce app",
    kind: "bootcamp",
    format: "User flow, information architecture and wireframes",
    tags: ["design"],
    credit:
      "Group project. Billy Akbar Arsyaputra mapped the user flow, Mochamad Rizky Aulia built the IA, and I designed the wireframes.",
    tools: ["FigJam", "Figma"],
    thumb: "/images/refund-hifi.png",
    short:
      "Customer service asked for a way to request refunds in the app. I designed the two screens that matter most, at three levels of detail.",
    margin:
      "Nobody should fill in five fields just to be told they're not eligible, so eligibility shows up before the form does.",
    summary:
      "The brief: as the PM of a marketplace like Tokopedia or Shopee, design a Request Refund feature for damaged or missing orders. The rule was simple. Up to 3 days after the order is received, you can request a refund. After that, you can't.",
    sections: [
      {
        h: "The flow and structure",
        p: [
          "The team mapped the path from Order History to a submitted refund, with the eligibility check placed before the form. Both endings are designed on purpose: a refund sent, or a clear message that it isn't available.",
        ],
        images: [
          { src: "/images/refund-userflow.png", alt: "User flow for the refund request" },
          { src: "/images/refund-ia.png", alt: "Information architecture of the refund feature" },
        ],
        layout: "flowia",
      },
      {
        h: "Two decisions I made in the wireframes",
        list: [
          "Eligibility shows directly on each order card. An order received 2 days ago has a Request Refund button, one from 9 days ago says the refund is unavailable, and an order still on its way has no refund option at all. You shouldn't have to tap into an order to find out.",
          "The form confirms eligibility at the top before asking for anything, so nobody fills in a reason, uploads photos and describes the problem only to be rejected at the end.",
        ],
        after: [
          "The IA includes an order detail page, but I put the refund button on the order card itself. It's one less tap, and it fits the first decision.",
        ],
      },
      {
        h: "Lo-fi, mid-fi, hi-fi",
        p: [
          "I did both screens at all three fidelity levels. The lo-fi sketches were for layout only. The mid-fi Figma version is what we presented to the group. The hi-fi version adds colour and hierarchy. A few things got better between versions: the upload box's file types now match its 'photo or video' label, required fields are marked, and uploads are capped at 3 files.",
        ],
        images: [
          { src: "/images/refund-lofi-orders.png", alt: "Lo-fi order history wireframe", caption: "Lo-fi" },
          { src: "/images/refund-midfi-orders.png", alt: "Mid-fi order history wireframe in Figma", caption: "Mid-fi (Figma)" },
          { src: "/images/refund-lofi-form.png", alt: "Lo-fi refund form wireframe", caption: "Lo-fi" },
          { src: "/images/refund-midfi-form.png", alt: "Mid-fi refund form wireframe in Figma", caption: "Mid-fi (Figma)" },
        ],
        layout: "phones4",
      },
      {
        images: [{ src: "/images/refund-hifi.png", alt: "Hi-fi version of both screens", caption: "Hi-fi" }],
        layout: "single-narrow",
      },
    ],
    note: {
      title: "What I'd change next",
      p: [
        "The 'Refund unavailable' button tells you no, but not why. I'd change it to 'Return window closed (3 days)' and add '1 day left to request' on orders that are still eligible. Same idea as the first decision, just finished properly.",
      ],
    },
    next: [],
    links: [{ label: "Read the group brief (PDF, Bahasa Indonesia)", href: "/docs/request-refund-brief.pdf" }],
  },
  {
    slug: "sehatkerja-scrum-plan",
    title: "SehatKerja: planning a workplace wellness app in Scrum",
    kind: "bootcamp",
    format: "Product goal, backlog and sprint plan",
    tags: ["delivery", "product"],
    credit: "Bootcamp team exercise",
    tools: ["Scrum", "User stories", "Story points"],
    thumb: "/images/sehatkerja-backlog.jpg",
    short:
      "Employees at PT Sukses Terus were tired, sitting all day and losing motivation. We planned a simple app in three two-week sprints, each one usable on its own.",
    margin: "The HR dashboard waits until Sprint 2, because it only means something once Sprint 1 has collected data.",
    summary:
      "HR at PT Sukses Terus wanted a simple digital way to help employees build healthier habits. The complaints were fatigue, sitting in front of a screen all day, and falling motivation. We acted as the Scrum team.",
    sections: [
      {
        h: "Product goal",
        p: [
          "Help employees build healthy daily habits at work through reminders, light activity, healthier eating and peer support, and raise their energy levels within three months.",
        ],
        list: [
          "At least 60% of employees use the app every week.",
          "Average daily energy score rises 20% compared with the first month.",
          "At least 40% of employees join a team challenge.",
        ],
      },
      {
        h: "Backlog and sprints",
        p: [
          "14 user stories, estimated in story points, with a team capacity of about 20 points per two-week sprint. The sprints are grouped by effort and dependency rather than strictly by impact.",
        ],
        table: {
          head: ["Sprint", "Goal", "Points"],
          rows: [
            ["1", "Basic desk habits: water and break reminders, stretching guides, a one-tap energy check-in and a streak", "19"],
            ["2", "Team challenges, a leaderboard, healthy canteen menus and an HR dashboard of energy trends", "21"],
            ["3", "Invite colleagues, HR wellness events, reward points and smartwatch sync", "21"],
          ],
        },
        images: [
          { src: "/images/sehatkerja-backlog.jpg", alt: "Product backlog page" },
          { src: "/images/sehatkerja-sprints.jpg", alt: "Sprint plan page" },
        ],
        layout: "grid2",
      },
      {
        h: "Acceptance criteria for the top stories",
        p: ["Adding these made the Definition of Done testable."],
        table: {
          head: ["Story", "Done when"],
          rows: [
            [
              "PB-03: a break reminder every 60 minutes",
              "The reminder fires after 60 minutes of working time, can be snoozed once for 10 minutes, and doesn't fire outside the user's set working hours.",
            ],
            [
              "PB-05: a one-tap daily energy check-in",
              "The user rates energy from 1 to 5 in one tap, can check in once a day and edit it that day, and the score is saved for the HR trend view.",
            ],
          ],
        },
      },
    ],
    note: {
      title: "Why the order matters",
      p: [
        "A sprint goal is one outcome, not a to-do list. Sprint 1 goes straight at fatigue and sitting all day with the simplest features, so the app is usable after two weeks and starts collecting energy data. The HR dashboard only makes sense once that data exists, so it waits for Sprint 2. Rewards and smartwatch sync need budget or technical work, so they go last and can be reprioritised after the first two sprint reviews.",
      ],
    },
    next: ["Write acceptance criteria for every story, not just the top ones."],
    links: [{ label: "Read the plan (PDF)", href: "/docs/sehatkerja-scrum-plan.pdf" }],
  },
  {
    slug: "midtrans-snap-api",
    title: "Planning a payment gateway integration with Midtrans Snap",
    kind: "bootcamp",
    format: "API documentation and integration plan",
    tags: ["requirements"],
    credit: "Group project with Muhammad Abid Arrofi and Sayyidatunisa",
    tools: ["Postman", "Sequence diagrams", "REST APIs"],
    thumb: "/images/midtrans-sequence.jpg",
    short:
      "Acting as the product team of an e-commerce startup, we planned how to add Midtrans Snap payments, and tested the API in the sandbox instead of just reading about it.",
    margin: "Payments break at the edges: duplicate notifications, late webhooks, one status field trusted too much.",
    summary:
      "The question wasn't only 'does the API work?' but 'can a team build, launch and look after this?' We documented how Snap works, tested it, and turned it into a plan with risks, people and a timeline.",
    sections: [
      {
        h: "How a payment flows",
        p: [
          "The customer confirms an order, the platform asks Midtrans for a Snap token, and the customer pays on the Snap page. Midtrans then sends a webhook, and the platform verifies the signature before updating the order status.",
        ],
        images: [{ src: "/images/midtrans-sequence.jpg", alt: "Sequence diagram of the Snap payment flow" }],
      },
      {
        h: "Testing it ourselves",
        p: [
          "We sent a real request to the Midtrans sandbox in Postman: a POST with a unique order ID and amount, using Basic Auth with the server key. It came back 201 Created with a Snap token and a redirect URL. Doing it ourselves made the flow much clearer than the documentation alone.",
        ],
        images: [{ src: "/images/midtrans-postman.jpg", alt: "Postman request and 201 response from the Midtrans sandbox" }],
      },
      {
        h: "Risks and the rollout plan",
        table: {
          head: ["Risk", "What we'd do"],
          rows: [
            ["The server key gets exposed", "Keep it on the backend only"],
            ["Webhooks arrive late or twice", "Make the handler idempotent, log everything, and use the Get Status API as a fallback"],
            ["Order status goes wrong if one field is trusted", "Check transaction_status together with fraud_status"],
            ["Hard to troubleshoot errors", "Store request and response logs"],
          ],
        },
        after: [
          "The rollout runs from registration and sandbox keys (2 to 3 days) through backend and frontend work (1 to 2 weeks), testing (3 to 5 days) and business verification (3 to 5 days) to go-live. It needs backend, frontend and QA on the technical side, plus a PM, a BA to map payment statuses to order statuses, customer support and compliance.",
        ],
      },
    ],
    note: {
      title: "API documentation is a business document too",
      p: [
        "Who owns the server key, how long go-live takes, what customer support tells a buyer whose payment is 'pending': none of those are purely technical questions. Turning the technical detail into owners, timelines and risks is the part a BA or PM adds.",
      ],
    },
    next: [
      "Tidy the sequence diagram: the separate webhook lane is never used, and step 4 needs an arrow showing the payment page opening for the customer.",
    ],
    links: [{ label: "See the full deck (PDF)", href: "/docs/midtrans-snap-api-documentation.pdf" }],
  },
  {
    slug: "traveloka-metrics-okr",
    title: "Metrics and OKRs for Traveloka",
    kind: "bootcamp",
    format: "Success metrics and OKRs",
    tags: ["product"],
    credit: "Group project",
    tools: ["OKRs", "Pirate metrics (AARRR)"],
    thumb: "/images/traveloka-cover.jpg",
    short:
      "Traveloka gets used around trips, then forgotten. We set retention and engagement OKRs to make it the app people come back to.",
    margin: "One of our targets didn't add up: DAU/MAU was listed as 9%, but 1.6M daily users out of 49M monthly is about 3.3%.",
    summary:
      "Starting from Traveloka's vision and mission, we picked the metrics that matter most for a travel app people only open when they're booking, and wrote OKRs around them. The baselines are estimates from public sources.",
    sections: [
      {
        h: "The OKRs",
        table: {
          head: ["Objective", "Metric", "Key result"],
          rows: [
            ["Be the travel app people trust for every trip", "Repeat booking within 90 days", "28% to 38%"],
            ["", "Churn 30 days after first purchase", "60% to 45%"],
            ["", "Still active after 12 months", "28% to 40%"],
            ["Get people using the app beyond booking", "App opens per month", "2 to 4"],
            ["", "Monthly active users", "Up 15% a month for one quarter"],
            ["", "DAU/MAU", "About 3.3% to 5%"],
          ],
        },
        after: [
          "Each key result is tied to something we'd build: a personal message after a trip ends, a tiered points program, and a destination inspiration feed to give people a reason to open the app when they aren't booking.",
        ],
      },
    ],
    note: {
      title: "Checking the maths",
      p: [
        "Our first draft set DAU/MAU at 9%, taken from 144,000 out of 1.6M. But 1.6M is the daily number, so 9% of it isn't a DAU/MAU ratio. With 1.6M daily and 49M monthly users the real ratio is about 3.3%, so the target became 5%. The MAU goal is also very aggressive: 15% growth a month means about 52% in one quarter for an app that already has 49M users.",
      ],
    },
    next: ["Pick one North Star Metric to tie the OKRs together, for example completed trips booked per month."],
    links: [],
  },
  {
    slug: "daily-grind-excel-dashboard",
    title: "Daily Grind Coffee: from 4,150 transactions to three decisions",
    kind: "bootcamp",
    format: "Excel PivotTable dashboard",
    tags: ["data"],
    credit: "Individual project",
    tools: ["Excel", "PivotTables", "Slicers", "SUMIFS / COUNTIFS"],
    thumb: "/images/dailygrind-dashboard.jpg",
    short:
      "Four months of sales from a four-branch coffee chain. I built an interactive dashboard and turned it into three recommendations for management.",
    margin: "The sheet has 6,054 rows but only 4,150 transactions. Mixing the two gives the wrong average spend.",
    summary:
      "A fictional coffee chain with branches in Senopati, Bintaro, Gandaria and Kemang, January to April 2026. Total net sales were Rp253.9M from 4,150 transactions. I built the dashboard with PivotTables, PivotCharts and slicers, then wrote up what I'd tell management.",
    sections: [
      {
        images: [{ src: "/images/dailygrind-dashboard.jpg", alt: "Daily Grind Coffee sales dashboard" }],
      },
      {
        h: "What the data says",
        list: [
          "Non-members bring in 61.6% of net sales (Rp156.3M) and 61.5% of transactions. They spend about the same per visit as members, roughly Rp61K, so the opportunity is turning walk-in customers into members, not getting people to spend more.",
          "Senopati makes 34.0% of sales (Rp86.4M) and Kemang only 16.3% (Rp41.3M), a 52% gap with the same menu and the same period. That's too big to put down to product mix.",
          "Morning is the weakest time slot at 21.4% of sales, which is odd for a coffee business, even with a 20% morning discount running.",
        ],
      },
      {
        h: "What I recommended",
        list: [
          "Ask non-members to sign up at the till, replace 'Member Monday' with a first-purchase sign-up offer, and track member conversion every month.",
          "Review Kemang's staffing, opening hours and foot traffic, test a local promotion there, and use Senopati as the internal benchmark.",
          "Since a discount alone isn't pulling people in for mornings, test a coffee and pastry bundle instead.",
        ],
      },
    ],
    note: {
      title: "Rows are not transactions",
      p: [
        "One transaction can have several products, so the data has 6,054 rows for 4,150 transactions. My first write-up worked out average spend per row (about Rp42K) and called it spend per transaction. Per transaction it's about Rp61K for both groups. The conclusion held, but the number was wrong. The same mix-up made the morning promotion look like the least used one, when by transactions it's actually used slightly more than the weekend offer.",
      ],
    },
    next: ["Label the 'Avg.' card properly and add a title to the promotion chart."],
    links: [],
  },
  {
    slug: "amazon-sales-power-bi",
    title: "Amazon India sales in Power BI",
    kind: "bootcamp",
    format: "Power BI dashboard and insights",
    tags: ["data"],
    credit: "Group project with Restu Hasan Permadi",
    tools: ["Power BI", "Power Query", "DAX", "Data modelling"],
    thumb: "/images/amazon-category.jpg",
    short:
      "We took a raw Amazon India sales dataset from normalisation to a Power BI dashboard, looking for where revenue really comes from.",
    margin: "The monthly trend looked too tidy. Every 'quiet' month had almost exactly the same sales.",
    summary:
      "A real-world Amazon India clothing sales dataset: about ₹78.6M in sales across 120K orders and 116K units. We cleaned and modelled the data, built DAX measures and a dashboard, and wrote recommendations.",
    sections: [
      {
        h: "What we found",
        list: [
          "Set and Kurta sell almost the same number of units (38.8% and 38.6%), but Set brings in nearly twice the revenue (49.9% against 27.1%). Kurta has the volume but not the value per unit, which makes it the obvious place for bundling and upselling.",
          "Sales are concentrated. Maharashtra alone is ₹13M, about 1.3 times Karnataka in second place. Bengaluru, Hyderabad, Mumbai, New Delhi and Chennai lead the cities, and the ranking is almost the same by value and by units.",
          "14.3% of orders are cancelled, almost 1 in 7. That's revenue leaking somewhere, most likely in fulfilment and shipping.",
        ],
        images: [{ src: "/images/amazon-category.jpg", alt: "Sales and units by category" }],
      },
      {
        h: "What we recommended",
        list: [
          "Find the root cause of the cancellations first, since it's the biggest leak.",
          "Push bundles and upselling in the Kurta category.",
          "Look at regional fulfilment hubs in Maharashtra and Karnataka, and test local promotions in runner-up cities like Pune and Kolkata.",
        ],
      },
    ],
    note: {
      title: "A pattern I'd check before trusting",
      p: [
        "Our monthly chart showed a huge April to June spike, with every other month sitting at almost exactly the same level. That flatness is suspicious. This dataset usually covers only a few months of 2022, and a pattern like this is what you get when some dates are read as month/day instead of day/month, which spreads the early days of each real month across the rest of the calendar. Before presenting the seasonal spike as a finding, I'd check the date range in Power Query.",
      ],
    },
    next: ["Re-check date parsing and rebuild the monthly trend.", "Break the cancel rate down by fulfilment type and region."],
    links: [],
  },
  {
    slug: "stock-market-predictor",
    title: "Stock Market Predictor v2",
    kind: "side",
    format: "Python and Streamlit web app",
    tags: ["data"],
    credit: "Personal project",
    tools: ["Python", "TensorFlow / Keras", "Streamlit", "yfinance"],
    thumb: "/images/stock-backtest.png",
    short:
      "An LSTM model that predicts the next day's closing price for any Yahoo Finance ticker. Version 2 fixes what I got wrong in version 1.",
    margin: "",
    summary:
      "I built the first version in 2024. It only really understood one stock, and a scaling bug made it look more accurate than it was. Version 2 is my rebuild after feedback.",
    sections: [
      {
        h: "What changed in v2",
        list: [
          "Trained on 34 tickers across tech, finance, healthcare, energy and consumer goods, so it isn't tied to one company's price range.",
          "Each 100-day window is scaled by its own min and max, so the model learns the shape of price movement instead of an absolute price level.",
          "Fixed the v1 scaling bug that let test data leak into training and inflated accuracy.",
          "Added RMSE and MAPE so accuracy is a number, not just a chart, plus a real next-day forecast.",
          "Added caching, closed chart figures properly, and a clear message for invalid tickers instead of a crash.",
        ],
        images: [
          { src: "/images/stock-app.png", alt: "The Streamlit app showing GOOG data" },
          { src: "/images/stock-backtest.png", alt: "Predicted against actual closing price" },
        ],
        layout: "grid2",
      },
      {
        h: "What it's for",
        p: [
          "It's a quick way to read a stock's trend and get a data-driven reference point, with the model's own accuracy shown next to it. The app says clearly that it only sees past prices, not news or earnings, so it's a talking point and not a trading signal.",
        ],
      },
    ],
    note: {
      title: "What I'd improve next",
      p: [
        "The backtest still uses data the model was trained on for tickers in the training basket, so the RMSE shown is optimistic. The fix is to train only on data before a cutoff date and backtest after it. I also want to compare against the simplest possible baseline, 'tomorrow's close equals today's', to show honestly how much the LSTM adds.",
      ],
    },
    next: [],
    links: [
      { label: "Try the app", href: "https://stock-market-predictor-v2.streamlit.app/" },
      { label: "See the code on GitHub", href: "https://github.com/jennagozalii/Stock-Market-Predictor-v2" },
    ],
  },
];

export const experience = [
  {
    role: "Data Analyst",
    org: "Chubb Insurance",
    when: "Feb 2025 to now",
    where: "Kuala Lumpur",
    points: [
      "Part of the insurance digital transformation, moving legacy systems onto cloud data platforms so data is easier to reach and reports are more reliable.",
      "Designed and automated Power BI dashboards and KPI frameworks, cutting recurring manual reporting work by 30%.",
      "Found data quality gaps that were hurting report accuracy and added validation and reconciliation checks, improving data reliability by 20%.",
      "Turn business requirements from underwriting, claims, operations and finance into reporting solutions, shortening decision cycles by 25%.",
      "Built self-service reporting for senior management that removed 20+ hours of manual reporting a month.",
    ],
    skills: ["SQL", "Python", "Power BI", "Snowflake", "Databricks"],
  },
  {
    role: "Data Scientist",
    org: "Juris Technologies",
    when: "Aug 2022 to Jan 2025",
    where: "Kuala Lumpur",
    points: [
      "Delivered data science and analytics work for fintech and banking clients, across credit risk, revenue and product decisions.",
      "Improved credit scoring model accuracy by 16% through feature engineering, tuning and statistical validation.",
      "Built and optimised data warehouses and ETL pipelines, cutting batch job runtime by 30%.",
      "Helped build a GenAI chatbot that turns plain-English business questions into SQL, cutting ad-hoc analysis turnaround by 70%.",
      "Worked in Scrum teams: sprint planning, daily stand-ups and progress tracking.",
    ],
    skills: ["SQL", "Python", "Scikit-learn", "TensorFlow", "BigQuery", "Tableau"],
  },
  {
    role: "Data Analyst",
    org: "iMoney Group (under Juris Technologies)",
    when: "Aug 2022 to Jan 2025",
    where: "Kuala Lumpur",
    points: [
      "Built Business Development dashboards tracking marketing spend against incoming leads, which helped lift revenue by 20% through better spend allocation.",
      "Built segmentation and paid ads dashboards that cut ineffective ad spend by 47%.",
      "Analysis for the call centre and telesales team added about 200 submitted leads a day and cut turnaround time by 27%.",
      "Segmented personal loan customers and moved up to 88% of marketing spend toward the best-performing segments.",
    ],
    skills: ["SQL", "Looker Studio", "Tableau", "Excel"],
  },
  {
    role: "Business Analyst Intern",
    org: "Juris Technologies",
    when: "Apr 2022 to Jul 2022",
    where: "Kuala Lumpur",
    points: [
      "Analysed banking processes and configured systems with clients, reducing turnaround time by 20%.",
      "Turned business and user requirements into functional documents and workflow diagrams, cutting delivery time by 10%.",
      "Ran UAT sessions with banks, reducing potential post-release issues by 35%.",
    ],
    skills: ["JIRA", "Confluence", "BPMN", "Lucidchart", "SQL"],
  },
];

export const education = [
  {
    title: "Business Analyst and Product Strategy Bootcamp, Batch 20",
    org: "dibimbing.id",
    when: "Jun 2026 to Dec 2026",
    detail: "BRD, FSD and PRD writing, metrics and OKRs, UX, Scrum, schedule and cost management, SQL and BI.",
  },
  {
    title: "Bachelor of Computer Science (Hons), AI and Mobile Computing",
    org: "Taylor's University, dual award with the University of the West of England",
    when: "2019 to 2022",
    detail: "CGPA 3.94 out of 4.00, Dean's List every semester.",
  },
];

export const certificateGroups = [
  {
    group: "Business analysis and product",
    items: [
      { name: "Business Analyst and Product Strategy Bootcamp", issuer: "dibimbing.id", when: "Dec 2026 (in progress)" },
      {
        name: "Business Analysis \"A to Z\" Masterclass",
        issuer: "Udemy",
        when: "Jun 2026",
        href: "https://ude.my/UC-14258a22-2f71-4e3f-be99-dfdda2c5bcc9",
      },
    ],
  },
  {
    group: "Data and analytics",
    items: [
      {
        name: "IBM Data Analyst Professional Certificate",
        issuer: "IBM on Coursera",
        when: "Mar 2026",
        href: "https://coursera.org/verify/professional-cert/5ZFU4L2N7NRS",
      },
      {
        name: "Business Statistics and Analysis Specialization",
        issuer: "Rice University on Coursera",
        when: "Jun 2026",
        href: "https://coursera.org/verify/specialization/GXTX1TGOT3JY",
      },
      { name: "Google Analytics 4 Certification", issuer: "Google" },
      { name: "Lightning Experience Reports and Dashboards Specialist", issuer: "Salesforce" },
      { name: "Oracle Cloud Platform Enterprise Analytics 2021 Specialist", issuer: "Oracle" },
      { name: "Oracle Machine Learning using Autonomous Database 2021 Specialist", issuer: "Oracle" },
    ],
  },
  {
    group: "Data science",
    items: [{ name: "Advanced Data Science and Python Programming Professional", issuer: "CASUGOL" }],
  },
];

export const extras = [
  { title: "1st place, Tableau Student to Hero Viz Challenge", when: "2022", href: "https://public.tableau.com/app/profile/ann3330/viz/Covid-19FromDarknesstoLightinOurDwellings/Story" },
  { title: "3rd place, DataConnect Data Viz Competition (Women in Analytics)", when: "2022", href: "https://www.youtube.com/watch?v=l--FmU1yomI" },
  { title: "Top 12 national finalist, Alibaba GET Global Challenge", when: "2020" },
  { title: "Malaysia Ambassador, QS Quacquarelli Symonds", when: "2022" },
  { title: "Head of Sponsorship, Taylor's Animal Welfare Society", when: "2022" },
  { title: "Project co-lead, VolunFlex", when: "2021 to 2022" },
];
