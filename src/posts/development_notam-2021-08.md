---
title: 'Development Updates September 2021'
date: '2021-09-01'
authors:
  - 'Valastiri'
  - 'Davy'
  - 'BlueBerry'
  - 'Holland'
  - 'Iceman'
category: 'UPDATE'
metaImage: '/img/a32nxwing.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

Sim Update 5 has been a rocky journey but we are still committed to bringing the best A320neo experience to MSFS. This NOTAM provides some insight into amazing features our developers have implemented this past month and a short word on our custom VNAV and LNAV.

- Hydraulic actuator physical based simulation.
- Rewritten ISIS.
- Progress on LNAV and Experimental Version.
- Progress on VNAV.

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

In the spirit of making the A32NX the most well-equipped simulated aircraft, the ISIS now features a metric altimeter reading, as well as the barometric setting in both hPa and inHg providing the correct information for pilots all across the world! The baro knob can also be pushed to quickly convert to the STD pressure setting.

The bugs page is also fully featured on the A32NX, allowing pilots to set relevant speeds and altitudes.

Interestingly enough, airlines do not recommend setting bugs on the ISIS. This is because speed bugs previously set to take-off speeds would cause confusion on approach if the pilots were looking for characteristic approach speeds.

We hope you don't have to stare at the ISIS too much because that would mean something has gone horribly wrong, but enjoy the capabilities of the little companion nonetheless!

![ISIS Combined](/img/notam-images/isis-combined.jpg)

### Custom LNAV Progress

Our custom FMS and LNAV modules have entered into more widespread testing. In fact, we are working with our QA team, IRL pilots and some content creators to test the new system in the field. It is very important to us for these systems to not cause any major issues with the A32NX.

The above systems bring advanced flight plan editing, flight path vectorization and LNAV capabilities to the aircraft. This replaces the old waypoint-to-waypoint fixed system present in many aircraft including the old A32NX. We have introduced a dynamic leg-based system that recomputes path elements **according to real-world A320 FMS behavior** in real-time, while the aircraft's situation is changing.

We believe this system will culminate in the most advanced LNAV implementation available on any Airbus addon to date, as we are modelling the path computation algorithms down to very precise details. You can expect advanced features to be made possible in the future, such as offsets and holds, thanks to this system.

Now, of course, this system is in its early age, and therefore the following limitations are to be expected for now:

- Only TF (termination to fix), RF (radius to fix) and VM (heading to manual termination) leg types are supported for now, as well as Type I transitions. This is however already much more than the default LNAV can handle.
- The globe-map flight planner integrated in MSFS is not supported for now.
- Some path predictions, especially in approach segments, might have "fish-birding" when computed during cruise. This results in distorted / impossible paths being drawn on the ND. This is mainly caused by the LNAV path computation not taking predicted TAS into account, as well as Type II transitions not being supported. Future work will resolve this, and flying should not be affected once those paths are reached.

### Experimental Version

We have also integrated the aforementioned LNAV system into our `experimental` branch, available both through our installer and as a direct download from our website.

This version is updated semi-regularly, with updates to both match the current dev version and fixes to the LNAV.

**Please keep in mind that we do not provide support for this version on the `#support` channel of our Discord server. Rather, we ask you use the "Bugs and Issues" thread of the `#ata-22-fms` to provide *properly researched bug reports.***

More information on the experimental version is available [in our documentation](https://docs.flybywiresim.com/fbw-a32nx/support/exp/).

#### Sample RNP Procedure

Below is a samples of an RNP departure procedure drawn appropriately on the navigation display and respective waypoint information on the MCDU.

**ND + MCDU**
![MCDU+ND](/img/notam-images/NZQN-RNP-SID.jpg)

**Associated Navigraph Chart**
![navigraph chart](/img/notam-images/NZAN-RNP-chart.jpg)
<sub>Copyright © 2021 Navigraph / Jeppesen
"Navigraph Charts are intended for flight simulation use only, not for navigational use."</sub>

#### Manual Legs and Discontinuities

The custom FMS and LNAV can now handle manual legs for vectors into final and draw the flight plan accordingly.

**ND + MCDU**
![LSGG-arrival](/img/notam-images/LSGG-arrival.jpg)

**Associated Navigraph Chart**
![LSGG-chart](/img/notam-images/LSGG-chart.jpg)
<sub>Copyright © 2021 Navigraph / Jeppesen
"Navigraph Charts are intended for flight simulation use only, not for navigational use."</sub>

### Custom VNAV Progress

VNAV work has been steadily progressing, and builds upon the foundation set in place by our new custom FMS. Once completed, VNAV will introduce many long-awaited features to the A32NX, including accurate descent profile calculation, pseudo-waypoints (e.g. top of climb and top of descent), and accurate econ speed derivation.

Furthermore, since we are modeling the Honeywell Release H3 FMS, we are able to model a unique feature no other Airbus addon is doing: CDAs, or continuous descent approaches. Rather than using level-altitude segments for deceleration during an approach, the Honeywell FMS instead builds the approach profile to decelerate WHILE descending, resulting in greater fuel savings. This will introduce two new pseudo-waypoints: FLAPS 1 and FLAPS 2. Here's a visualization (© Airbus Safety First 2021):

![CDA approach visualization](https://europe.content.twixlmedia.com/twixl-preview/e37527c12cbd8fc4effad5ac269b712b/content/0360d4fcb7711304863074260074fba8/44/images/FIG.20.jpg?r=0.1224069083950936)

Following the completion of this core functionality (as well as testing and approval from our real-life A320 pilots), we will expand VNAV to add support for step climbs and step descents, required time of arrival (RTA), equitime points, and full RNAV and FLS approach capabilities.

VNAV is an incredibly complex system, and it requires accurate performance data from the aircraft's flight and engine model, as well as ARINC 424 leg data from our custom FMS. With recent breakthroughs in these areas, we were finally able to amass the prerequisite data necessary for this system to be accurately implemented. We are working hard on this system, and hope to bring it to you soon and as accurate as possible.

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
