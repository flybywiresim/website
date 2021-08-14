---
title: 'Development Updates August 2021'
date: 'Placeholder'
authors:
  - 'Valastiri'
  - 'Davy'
  - 'BlueBerry'
category: 'UPDATE'
metaImage: '/img/a32nxwing.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

Sim Update 5 has been a rocky journey but we are still committed to bringing the best A320neo experience to MSFS. This NOTAM provides some insight into amazing features our developers have implemented this past month and a short word on our custom VNAV and LNAV.

- Hydraulic actuator physical based simulation.
- Rewritten ISIS.
- Progress on VNAV and LNAV.

---

## Development Updates

### Hydraulic Actuator

Recently we showcased some fun flying with an open cargo door, but the actual point was to make a full simulation of moving parts, from rigid body physics to hydraulic actuator behaviour.

In the following short video you can see our first try at a full physical based hydraulic simulation, using cargo door as our beloved guinea pig.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KgzKziUz5bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can first observe the unlock of the door by the ground crew, with actuators fighting the weight of the door. Then hydraulics powers the door, which is oscillating a bit with flow oscillations after initial pressure transient.

We hope to port that initial implementation to all other moving part of the plane, so it can finally be alive!

### Rewritten ISIS

The Integrated Standby Instrument System (ISIS) has now been rewritten in React!

As fly-by-wire aircraft are the most well equipped on the market, the ISIS now features a metric altimeter reading, as well as the barometric setting in both hPa and inHg providing the correct information for pilots all across the world! The baro knob can also be pushed to quickly convert to the STD pressure setting.

The bugs page is also fully featured on the A32NX, allowing pilots to set relevant speeds and altitudes.

Interestingly enough, airlines do not recommend setting bugs on the ISIS. This is because speed bugs previously set to take-off speeds would cause confusion on approach if the pilots were looking for characteristic approach speeds.

For full transparency, it's worth noting that the ISIS does not yet properly account for a loss of air data from the ADIRS. However, this will be accounted for in the future.

We hope you don't have to stare at the ISIS too much because that would mean something has gone horribly wrong, but enjoy the capabilities of the little companion nonetheless!

[add image here]

### Custom VNAV Progress

[Iceman Copy Here]

### Custom LNAV Progress

Our custom FMS and LNAV modules have entered into more widespread testing. In fact, we are working with our QA team, IRL pilots and some content creators to test the new system in the field. It is very important to us for this system to not cause any major issues with the A32NX.

The following limitations are to be expected for now:

- Only TF (termination to fix), RF (radius to fix) and VM (heading to manual termination) leg types are supported for now, as well as Type I transitions. This is however already much more than the default LNAV can handle.
- The globe-map flight planner integrated in MSFS is not supported for now.
- Some path predictions, especially in approach segments, might have "fish-birding" when computed during cruise. This results in distorted / impossible paths being drawn on the ND. This is mainly caused by the LNAV path computation not taking predicted TAS into account, as well as Type II transitions not being supported. Future work will resolve this, and flying should not be affected once those paths are reached.

---

## General Information

Stay up to date with information from FlyByWire Simulations by following our social media!

- [Twitter](https://twitter.com/FlyByWireSim)
- [Facebook](https://www.facebook.com/FlyByWireSimulations/)

If you require support or would like to submit a bug report please see the links below:

- [Discord Support](https://discord.gg/flybywire)
- [GitHub Issues](https://github.com/flybywiresim/a32nx/issues/new/choose)

When submitting an issue or asking for support to do the following:

- Visit our [Reported Issues Documentation](https://docs.flybywiresim.com/start/reported-issues/) for common problems and workarounds.
- Ensure that your issue has not already been reported on our GitHub.

Download the latest version of the A32NX:

- [Installer](https://api.flybywiresim.com/installer)
- [Standalone Versions](https://flybywiresim.com/a32nx/#download)

---

Safe skies and happy flying!
