---
title: 'Development Updates August 2021'
date: 'Placeholder'
authors:
  - 'Valastiri'
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

![ISIS-turn](/img/notam-images/isis.turn.png)

