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

We hope you are enjoying our latest [Stable Release v0.7.0](https://docs.flybywiresim.com/release-notes/v070/). Work on our custom FMS proceeds apace and we hope to roll the feature into development as soon as we iron out all the leftover bugs. We have some exciting features planned ahead for everyone and would also like to share some insight into the inner workings of our development process. Read on below!

- Development Process
- EFIS Filters and FIX INFO
- TCAS
- ARINC 429
- New New Flight Plan Manager
- State of Hydraulics

---

## Our Development Process

### Philosophy

For close to a year now our growing core team and over 170 contributors have given their free time to create complex systems integrations and realistic features entirely from scratch. Our core principle is to maintain professional standards and industry-wide best practices delivering high-quality, tested products. We don't believe in intermediary measures in relation to our custom systems and strive to provide a complete interpretation of a working feature. Unlike other aircraft or products you can take a deep dive into our code on GitHub and see for yourself - and maybe stick around, help us out, or even start your own project!

Once on our GitHub you can see our code base and more importantly our "pull requests" which are essentially features, fixes, or changes to the A32NX. Each pull request is created by a core member or an outside contributor interested in creating something for our addon. Before any pull request is ever available to the public we ensure it follows this general process:

- Has documentation and is available on the IRL A320neo.
- Code review.
- Any pilot or engineer feedback.
- Rounds of QA testing to identify issues.

### Quality Assurance Teams

While possibly unknown to a lot of our user base we actually have dedicated QA testers also working in their free time to test every feature before they are released to the public on our Stable or Development branches. We are immeasurably grateful to these folk for giving their time to following our testing instructions and providing feedback to our developers.

If you'd like to know more about our QA process we have a handy guide on our documentation site and just maybe you'd be interested in joining our QA ranks.

[Quality Assurance Documentation](https://docs.flybywiresim.com/dev-corner/qa-process/)

---

## Development Updates

### EFIS Filters and FIX INFO

### TCAS

### ARINC 429

We often talk about going to new lengths to bring extreme realism to the aircraft. This does not only apply to surface-level details, far from it; making a high-fidelity aircraft requires in-depth systems with simulation of details that are not documented in pilot training.

Part of this is our initial version of the ARINC 429 implementation. For those unaware, [ARINC 429](https://en.wikipedia.org/wiki/ARINC_429) is a data trasnfer standard used in many airliners. It takes care of identifying, transporting and delivering data from and to various systems in the aircraft. It also ties in deeply with failure states on the A320 - indeed, a lot of the logic involved in displaying the unavailability of information or detecting faults in equipment relies on this protocol showing the correct failure indications on data labels.

The A32NX now comes with ARINC 429 communications between some of its systems. While this is not tied to any visible effects for now, it lays a solid foundation for the work to come on abnormal operations and accurate display symbology in failure states.

### New New Flight Plan Manager

As you all know, we have introduced in our experimental branch a new FMS based partly on the Working Title flight plan manager. While this brings a big improvement on its own, it's only the first step in achieveing a system that has the same behaviour and design as the real deal. Our current version of the custom FMS does an additional layer of mapping to leg-form flight plans on top of the WT system, which works with waypoint-form flight plans. This is not how the real aircraft works, so we have decided to team up with [Synaptic Simulations]() to develop a completely custom flight plan manager layer that works directly with leg-form flight plans.

This new system is already in use in the A380X previews we showed you earlier this month, so you can check out part of its capabilities here:

https://www.youtube.com/watch?v=f-AaNFihJAw

https://www.youtube.com/watch?v=roI7vTbCH1I

This code is going to be ported both to the A320 and A220 by Synaptic. It will eventually enable the following features:

- Support for all leg types (including holding patterns, intercepts).
- Support for realistic DIR TO revisions (DF legs, W/ ABEAM, RADIAL IN/OUT).
- Extremely accurate flight path computation, using exclusive knowledge and insight into the A320 FMS.

### State of Hydraulics

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
