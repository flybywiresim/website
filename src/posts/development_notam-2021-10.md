---
title: 'Development Updates September 2021'
date: 'Pending'
authors:
  - 'Valastiri'
category: 'UPDATE'
metaImage: '/img/a32nxwing.png'
metaAlt: 'FlyByWire Simulations'
---
  
## Overview

We hope you are enjoying our latest [Stable Release v0.7.0](https://docs.flybywiresim.com/release-notes/v070/). Work on our custom FMS proceeds apace and we hope to include it into our development version as soon as we iron out all the leftover bugs. We have some exciting features planned ahead for everyone and would also like to share some insight into the inner workings of our development process. Read on below!

- Development Process
- EFIS Filters and FIX INFO
- TCAS
- ARINC 429
- New New Flight Plan Manager
- State of Hydraulics
- Exterior Lighting Overhaul
- A380X Progress

---

## Our Development Process

### Philosophy

For close to a year now our growing core team and over 170 contributors have given their free time to create complex systems integrations and realistic features entirely from scratch. Our core principle is to maintain professional standards and industry-wide best practices delivering high-quality, tested products. We always strive to provide a complete interpretation of a working feature. Unlike most other addons you can take a deep dive into our code on GitHub and see for yourself - and maybe stick around, help us out, or even start your own project!

Once on our GitHub you can see our code base and more importantly our "pull requests" which are essentially features, fixes, or changes to the A32NX. Before any feature is ever available to the public we ensure it follows this general process:

- Has documentation and is available on the IRL A320neo.
- Code review.
- Any pilot or engineer feedback.
- Rounds of QA testing to identify issues.

### Parallel Development

We sometimes see questions on why we release updates or progress on certain features instead of a feature that many of you are excited about. 

Everyone at FlyByWire Simulations is a volunteer. With parallel development we can have different people working on various features simultaneously. Simply put, we can have someone who is great at working with lights or sounds complete their work ahead of the people working hard on systems such as LNAV/VNAV. When it comes to developing such a complex aircraft parallel development comes naturally, leading to accelerated development and the inclusion of many new features.

### Quality Assurance Teams

While possibly unknown to a lot of our user base we actually have a team of dedicated QA testers also working in their free time to test every feature before they are released to the public on our Stable or Development branches. We are immeasurably grateful to these folk for giving their time to following our testing instructions and providing feedback to our developers.

If you'd like to know more about our QA process we have a handy guide on our documentation site and just maybe you'd be interested in joining our QA ranks.

[Quality Assurance Documentation](https://docs.flybywiresim.com/dev-corner/qa-process/)

---

## Development Updates

### EFIS Filters and FIX INFO

Our custom ND has received one of the last missing features compared to the development version - EFIS filters!

This feature is now accurately modelled, with proper word transmission limit resulting in a `MAP PARTLY DISPLAYED` message when the maximum amount of data is transmitted. We can also now draw runway symbols closer to technical specifications.

One new feature also introduces itself - FIX INFO! This long-awaited functionality allows users to input fix radials or radii on the LAT REV page of the MCDU flight plan display, and displays the appropriate markers for those elements on the ND.

...fix info image...

### TCAS

Another anticipated feature is TCAS (Traffic Collision Avoidance System). We have implemented TCAS 7.1, a first among all Airbus simulation addons. This includes a new TA/RA voice and XYZ plz add features here kthxbye.

...TCAS images bruhegg....

Our implementation will eventually also include AUTO TCAS - allowing the plane's autopilot to obey resolution advisories for the pilot if no intervention happens, through a new TCAS vertical mode. However, we are not quite ready to show this off yet, as it requires a new law in our autopilot model. More news on that soon!

### ARINC 429

We often talk about going to new lengths to bring extreme realism to the aircraft. This does not only apply to surface-level details, far from it; making a high-fidelity aircraft requires in-depth systems with simulation of details that are not documented in pilot training.

Part of this is our initial version of the ARINC 429 implementation. For those unaware, [ARINC 429](https://en.wikipedia.org/wiki/ARINC_429) is a data transfer standard used in many airliners. It takes care of identifying, transporting and delivering data from and to various systems in the aircraft. It also ties in deeply with failure states on the A320 - indeed, a lot of the logic involved in displaying the unavailability of information or detecting faults in equipment relies on this protocol showing the correct failure indications on data labels.

The A32NX now comes with ARINC 429 communications between some of its systems. While this is not tied to any visible effects for now, it lays a solid foundation for the work to come on abnormal operations and accurate display symbology in failure states.

### New New Flight Plan Manager

As you all know, we have introduced in our experimental branch a new FMS based partly on the Working Title flight plan manager. While this brings a big improvement on its own, it's only the first step in achieving a system that has the same behaviour and design as the real deal. Our current version of the custom FMS does an additional layer of mapping to leg-form flight plans on top of the WT system, which works with waypoint-form flight plans. This is not how the real aircraft works, so we have decided to team up with [Synaptic Simulations]() to develop a completely custom flight plan manager layer that works directly with leg-form flight plans.

This new system is already in use in the A380X previews we showed you earlier this month, so you can check out part of its capabilities here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/f-AaNFihJAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/roI7vTbCH1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This code is going to be ported both to the A320 and A220 by Synaptic. It will eventually enable the following features:

- Support for all leg types (including holding patterns, intercepts).
- Support for realistic DIR TO revisions (DF legs, W/ ABEAM, RADIAL IN/OUT).
- Extremely accurate flight path computation, using exclusive knowledge and insight into the A320 FMS.

### State of Hydraulics

Awaiting Davy Blurb

### Exterior Lighting Overhaul

--Awaiting Bouveng Blurb--

--images to be added by Val and video pending #marketing--

### A380X

We know you are all waiting patiently on our A380X release, and while we cannot give timelines at the moment, we are very satisfied with the progress being made.

We are aiming to release an aircraft with entirely custom systems, with no reliance whatsoever on a default FMC. You can expect a lot of the same accuracy we are developing in the A32NX to transfer over to the A380X, with of course a correct implementation for the unique characteristics of the largest passenger aircraft in the world.

This includes an entirely re-written FMS, with support for every possible path type, RNP procedures, FLS, RNAV and vertical predictions/guidance.

---

## General Information

Stay up to date with information from FlyByWire Simulations by following our social media!

- [Twitter](https://twitter.com/FlyByWireSim)
- [Facebook](https://www.facebook.com/FlyByWireSimulations/)

If you require support or would like to submit a bug report please see the links below:

- [Support Guide](https://docs.flybywiresim.com/fbw-a32nx/support/)
- [Discord Support](https://discord.gg/flybywire)
- [GitHub Issues](https://github.com/flybywiresim/a32nx/issues/new/choose)

When submitting an issue or asking for support to do the following:

- Visit our [Reported Issues Documentation](https://docs.flybywiresim.com/fbw-a32nx/support/reported-issues/) for common problems and workarounds.
- Ensure that your issue has not already been reported on our GitHub.

Download the latest version of the A32NX:

- [Installer](https://api.flybywiresim.com/installer)
- [Standalone Versions](https://flybywiresim.com/a32nx/#download)

---

Safe skies and happy flying!
