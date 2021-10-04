---
title: 'Development Updates September 2021'
date: 'Pending'
authors:
  - 'Valastiri'
  - 'Holland'
  - 'Davy'
  - 'Bouveng'
category: 'UPDATE'
metaImage: '/img/a380x.jpg'
metaAlt: 'FlyByWire Simulations'
---
  
## Overview

We hope you are enjoying our latest [Stable Release v0.7.0](https://docs.flybywiresim.com/release-notes/v070/). Work on our custom FMS proceeds apace and we hope to include it into our development version as soon as we iron out all the leftover bugs. We have some exciting features planned ahead for everyone and would also like to share some insight into the inner workings of our development process. Read on below!

- Development Process
- Improved Autopilot Speed/Mach Mode
- EFIS Filters and FIX INFO
- TCAS
- ARINC 429
- New New Flight Plan Manager
- State of Hydraulics
- Exterior Lighting Overhaul
- A380X Progress- A380X Progress

---

## Our Development Process

### Philosophy

For more than a year now over 170 contributors, including our growing core team, have given their free time to create complex systems integrations and realistic features entirely from scratch. Our core principle is to maintain professional standards and adhere to industry-wide best practices delivering high-quality, rigorously-tested products. We always strive to simulate a working feature to the maximum extent possible. Unlike most other addons you can take a deep dive into our code on GitHub and see for yourself - and maybe stick around, help us out, or even start your own project!

Once on our GitHub you can see our code base and more importantly our "pull requests" which are essentially features, fixes, or changes to the A32NX. Before any feature is ever available to the public we ensure it follows this general process:

- Has documentation and is available on the IRL A320neo
- Code review
- Pilot or engineer feedback (if applicable)
- Rounds of QA testing to identify issues

### Parallel Development

We often see questions on why we release updates or progress on certain features instead of a feature that many of you are excited about.

Everyone at FlyByWire Simulations is a volunteer. With parallel development, we can have different people working on various features simultaneously. Simply put, we can have someone who is great at working with lights or sounds complete their work ahead of the people working hard on systems such as LNAV/VNAV. When it comes to developing such a complex aircraft parallel development comes naturally, leading to accelerated development and the inclusion of many new features.

### Quality Assurance Teams

While possibly unknown to some of our user base we actually have a team of dedicated QA testers also working in their free time to test every feature before they are released to the public on our Stable or Development branches. We are immeasurably grateful to these people for giving their time to following our testing instructions and providing feedback to our developers.

If you'd like to know more about our QA process we have a handy guide on our documentation site. Who knows, you may even be interested in joining our QA ranks.

[Quality Assurance Documentation](https://docs.flybywiresim.com/dev-corner/qa-process/)

---

## Development Updates

### Improved Autopilot Speed/Mach Mode

The new Speed/Mach law on the experimental and development versions introduces improved pitching behaviour, more realistic flight characteristics in turbulent weather as well as smoother speed and altitude changes during climb and descent through more accurate energy angle estimation.

In Open Climb Mode (OP CLB on the FMA) or Open Descend Mode (OP DES on the FMA), the A320neo performs energy angle control. Energy angle describes the distribution between kinetic and potential energy. The plane’s energy is distributed such that the ratio between kinetic energy and potential energy remains constant during speed changes in climb or descent. During climb, the aircraft uses its total energy both for climbing and acceleration or deceleration. During descent, the aircraft would continue to descend while decelerating at the same time. In the following video, you can take a closer look at the behaviour.

[See it in Action!](https://streamable.com/cwmh09)

### EFIS Filters and FIX INFO

Our custom ND now features EFIS filters, bringing it ever closer to its real-life counterpart. Included is a proper word transmission limit implementation, causing the ND to display a `MAP PARTLY DISPLAYED` message when the amount of data being transmitted and displayed has reached the limit. Furthermore, it can now draw runway symbols following technical specifications.

We have also added the FIX INFO feature, a long-awaited functionality which allows users to input fix radials or radii on the LAT REV page of the MCDU flight plan display and displays the appropriate markers for those elements on the ND.

Sample FIX INFO image showcasing a 33NM radius ring from CROWY providing a visual aid to assist with TOD planning from FL370 to FL260.
![fix info](/img/notam-images/sept/fixinfo.jpg)

### TCAS

Another anticipated feature is TCAS (Traffic Collision Avoidance System). We have implemented TCAS 7.1, a first among all Airbus simulation addons. This includes a new TA/RA voice and XYZ plz add features here kthxbye.

...TCAS images bruhegg....

Our implementation will eventually also include AUTO TCAS - allowing the plane's autopilot to obey resolution advisories for the pilot if no intervention happens, through a new TCAS vertical mode. However, we are not quite ready to show this off yet, as it requires a new law in our autopilot model. More news on that soon!

### ARINC 429

We often talk about going to great lengths to bring realism to the A32NX. This does not just apply to surface-level details - making a high-fidelity aircraft requires simulating details that are not documented in pilot training references.

Part of this is the initial version of our ARINC 429 implementation on the development version. For those unaware, [ARINC 429](https://en.wikipedia.org/wiki/ARINC_429) is a data transfer standard used in many airliners which takes care of identifying, transporting and delivering data from and to various systems in the aircraft. It also ties in deeply with failure states on the A32NX - indeed, a lot of the logic involved in displaying the unavailability of information or detecting equipment faults relies on this protocol showing the correct failure indications on data labels.

The A32NX now comes with ARINC 429 communications between some of its systems. While this is not tied to any visible effects for now, it lays a solid foundation for the work to come on abnormal operations and accurate display symbology in failure states.

### New New Flight Plan Manager

As you all know, we have introduced a new FMS in our experimental branch, which is partly based on the Working Title flight plan manager. While this brings a big improvement on its own, it's only the first step in achieving a system that has the same behaviour and systems design as the real deal. Our current version of the custom FMS does an additional layer of mapping to leg-form flight plans on top of the WT system, which works with waypoint-form flight plans. This is not how the real aircraft works, so we teamed up with [Synaptic Simulations](https://synapticsim.com/) to develop a completely custom flight plan manager layer that works directly with leg-form flight plans.

This new system is already in use in the A380X previews we showed you earlier last month, so you can check out part of its capabilities here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/f-AaNFihJAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/roI7vTbCH1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This code is going to be ported both to the A320 and A220 by Synaptic. It will eventually enable the following features:

- Support for all leg types (including holding patterns, intercepts).
- Support for realistic DIR TO revisions (DF legs, W/ ABEAM, RADIAL IN/OUT).
- Highly accurate flight path computation, using exclusive in-depth information and insight into the A320 FMS.

### State of Hydraulics

So, what’s up with hydraulics?

You may notice something new when opening the cargo door. It may seem like a simple animation update, but it certainly belies what is going on under the hood.

Remember how we showed that the door is now a free-moving body in a demo video of the A32NX flying with an open door? We have since added fully-simulated hydraulic actuators that can move the heavy door using hydraulic pressure.

#### How is this done?

First, we built the actuator according to real-life dimensions:

![hydraulic 1](/img/notam-images/sept/hydraulics-1.png)

This enabled us to compute not only the exact relation between force and pressure, but also fluid reservoir variations between the extended and retracted positions due to internal volume asymmetry. In fact, when the gears are retracted in flight, you will see how much green hydraulic fluid is missing on the reservoir level indicator on the ECAM screen! Then, the actuator is connected to the free-moving body using real-life positions of the anchor point to the plane’s structure and control arm of the moving body.

![hydraulic 2](/img/notam-images/sept/hydraulics-2.png)

Now that all the parts are connected, the fun begins! Pressure in the hydraulic system provides force and system pumps provide hydraulic flow. This intricate dance between pressure and flow gives you the power to move the control surfaces. That cargo door oscillation you saw in our previous NOTAM is not a hard-coded animation - it is the hydraulics coming to life, as fast pressure changes from the control valves opening cause flow oscillations in the system.

It does not end here. Soon, you will get to see the main gear oscillating when retracting… or use gravity extension to save the day!

#### What’s next?

We are overhauling the core hydraulic system, which will see separate hydraulic sections communicating with check valves. Of course, we will also be able to simulate the hydraulic systems of a certain 4-engine plane.

- Electric pumps will feature real-time electric current regulation, so we hope you will hear the difference. Oh, and we almost forgot: don’t burn the circuit breaker.
- We will replace the current simple flow model of the Power Transfer Unit (PTU) with a physical model incorporating real-time physics that will replicate those well-known dog barks, as well as the crazy growling sounds of a slow constant PTU rotation during gear or flap extensions with limited pump capacities.
- We will improve the current RAT model so that it provides hydraulic flow to a fully simulated emergency generator.
- Finally, all control surfaces will eventually be connected to the system and exhibit true-to-life behaviour.

In normal situations, you will not notice any difference. Here’s the exciting part, though: with all these little things simulated in the background, it is going to shine when it comes to failures. Watch this space.

### Exterior Lighting Overhaul

Exterior lights are an important aspect of aviation providing the ability to see, to be seen and alert ground crew about aircraft movements. We have improved the visual aspects of the lights, added correct behavior and fixed a few issues.

Working with lights in MSFS SDK is very inconvenient due to legacy api's, no good tools, and foremost that the lights are not "real" lights. They do not bounce, cast shadows or even accept geometry as a blocker. They only allow an illuminated surface to reflect other geometry.

This means that lights, and how they look, needs to be handcrafted within those limits the SDK offers and allows.

![beacon](/img/notam-images/sept/beacon.jpg)

One example of this is the beacon lights, the red ones at the top and bottom of the fuselage. The complete visual appearance is no less than 14 individual lights in order to cast light realistically. For the landing lights, despite only consisting of two lights in real life, 11 individual ones are used to create a convincing effect.

The strobes are also now synced with the beacon light according to the correct pattern. This was out of sync before and did not work as in real life. Another bonus with regard to strobe lights, is that they are now visible from all wing views, including custom ones, and even from the cockpit.

![lights-illustration](/img/notam-images/sept/lights-illustration.jpg)
<sub>Copyright © 2021 Collins Aerospace, UTC Aerospace Systems</sub>

The landing lights are now independent of each other, animate at the correct deployment speed and the light is not activated until landing light is fully deployed. Their range is increased and has a correct downward angle, to assist in illuminating the runway on approach.

Nav lights now project at the correct angles and can only be seen within those angles. This is how you determine the travel direction of an airplane at night. Watch out for one red and one green at the same time, you might be in trouble!

Lights will for sure be evolved in the future, when the SDK is expanded and perhaps include proper raytracing, a feature for DX12.

#### Previews from the Simulator

<iframe width="560" height="315" src="https://www.youtube.com/embed/Y2TqF6kyzLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![lights-front](/img/notam-images/sept/lights-front.jpg)
![lights-wing1](/img/notam-images/sept/lights-wing1.jpg)
![lights-wing2](/img/notam-images/sept/lights-wing2.jpg)
![lights-window](/img/notam-images/sept/lights-window.jpg)
![lights-to](/img/notam-images/sept/lights-to.jpg)
![lights-logo](/img/notam-images/sept/lights-logo.jpg)

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
