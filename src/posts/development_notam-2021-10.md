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

Everyone at FlyByWire Simulations is a volunteer. With parallel development, we can have different people working on various features simultaneously. Simply put, we can have someone who is great at working with lights or sounds complete their work ahead of the people working hard on systems such as LNAV/VNAV. When it comes to developing such a complex aircraft parallel development comes naturally, leading to accelerated development and the inclusion of many new features.

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

Sample FIX INFO image showcasing a 33NM radius ring from CROWY providing a visual aide for TOD from FL370 to FL260.
![fix info](/img/notam-images/sept/fixinfo.jpg)

### TCAS

Another anticipated feature is TCAS (Traffic Collision Avoidance System). We have implemented TCAS 7.1, a first among all Airbus simulation addons. This includes a new TA/RA voice and XYZ plz add features here kthxbye.

...TCAS images bruhegg....

Our implementation will eventually also include AUTO TCAS - allowing the plane's autopilot to obey resolution advisories for the pilot if no intervention happens, through a new TCAS vertical mode. However, we are not quite ready to show this off yet, as it requires a new law in our autopilot model. More news on that soon!

### ARINC 429

We often talk about going to new lengths to bring extreme realism to the aircraft. This does not only apply to surface-level details, far from it; making a high-fidelity aircraft requires in-depth systems with simulation of details that are not documented in pilot training.

Part of this is our initial version of the ARINC 429 implementation. For those unaware, [ARINC 429](https://en.wikipedia.org/wiki/ARINC_429) is a data transfer standard used in many airliners. It takes care of identifying, transporting and delivering data from and to various systems in the aircraft. It also ties in deeply with failure states on the A320 - indeed, a lot of the logic involved in displaying the unavailability of information or detecting faults in equipment relies on this protocol showing the correct failure indications on data labels.

The A32NX now comes with ARINC 429 communications between some of its systems. While this is not tied to any visible effects for now, it lays a solid foundation for the work to come on abnormal operations and accurate display symbology in failure states.

### New New Flight Plan Manager

As you all know, we have introduced in our experimental branch a new FMS based partly on the Working Title flight plan manager. While this brings a big improvement on its own, it's only the first step in achieving a system that has the same behaviour and design as the real deal. Our current version of the custom FMS does an additional layer of mapping to leg-form flight plans on top of the WT system, which works with waypoint-form flight plans. This is not how the real aircraft works, so we have decided to team up with [Synaptic Simulations](https://www.synapticsim.com/) to develop a completely custom flight plan manager layer that works directly with leg-form flight plans.

This new system is already in use in the A380X previews we showed you earlier this month, so you can check out part of its capabilities here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/f-AaNFihJAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/roI7vTbCH1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This code is going to be ported both to the A320 and A220 by Synaptic. It will eventually enable the following features:

- Support for all leg types (including holding patterns, intercepts).
- Support for realistic DIR TO revisions (DF legs, W/ ABEAM, RADIAL IN/OUT).
- Extremely accurate flight path computation, using exclusive knowledge and insight into the A320 FMS.

### State of Hydraulics

What’s up with hydraulics!?

Maybe you noticed something new when opening cargo door? The default animation was not really satisfying. While it may seem we updated the animation with a more realistic one, this is not really what’s going on under the hood.

In fact, the door is now a physical body that is free to move as you probably saw in a previous demo video flying with the opened door. We now added fully simulated hydraulic actuators, that can move those heavy loads using hydraulic pressure.

#### How is this done?

We first build the actuator using real life dimensions:

![hydraulic 1](/img/notam-images/sept/hydraulics-1.png)

This will enable us to compute the exact force vs pressure relation, but also the fluid reservoir variations due to internal volume asymmetry from extended to retracted position. In fact, when gears are retracted in flight, you’ll see how much green hydraulic fluid is missing on that reservoir level on ECAM screen! 

Then actuator is connected to the free moving body using the real-life positions of the anchor point to plane structure, and control arm of the moving body.

![hydraulic 2](/img/notam-images/sept/hydraulics-2.png)

Now that all parts are connected, the fun begins!  Pressure in the hydraulic system will provide force, and the pumps of the system will provide hydraulic flow. The final power you get to move all those control surfaces is nothing but the constant dance between pressure and flow. When you see that cargo door oscillating when it’s opening, there’s no animation: it’s just hydraulics coming to life, while fast pressure changes from control valves opening cause flow oscillations in the system.

This is just a cargo door, but keep in mind the same things are happening in a gear system or aileron control. Soon you’ll love to see that main gear oscillating when retracting…. Or being able to use gravity to save the day!

[INSERT GEAR SWING SCRIPT ANIMATION]

#### What’s next?

A big overhaul step is being done right now on the core hydraulic system. This will bring separate hydraulic sections communicating with check valves. And will be able to simulate hydraulic systems of a certain famous 4-engine plane.

- Electric pumps will get a physical electric current real time regulation, so we hope you’ll hear the difference. Let’s hope we don’t burn the circuit breaker.
- Power Transfer Unit current simple flow model will get a physical model with real time physics that will replicate those well known dog barks, but also the crazy growling sounds of a slow constant PTU rotation during gear or flap activations with limited pump capacities.
- Current RAT simple model will get improvements and will provide hydraulic flow to a fully simulated emergency generator.
- Finally, all control surfaces will eventually be connected to the system and provide true to life behaviour.

If everything is done the right way you should not see any difference!
After everything comes together with all these little things simulated in the background, when it comes to failures, the difference should be massive and play with your nerves!

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
