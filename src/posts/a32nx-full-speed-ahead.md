---
title: 'A32NX: Full Speed Ahead'
date: '2021-07-15'
authors:
  - 'Iceman'
category: 'ANNOUNCEMENTS'
metaImage: '/img/a32nxwing.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

We’re just shy of a year since MSFS was released (and FlyByWire was founded). We have some exciting developments on our A380X that will be previewed next month, but in the meantime, I want to focus this update on the A32NX.

Our team has made some incredible progress on the custom flight plan manager, LNAV (lateral navigation) logic, and custom navigation display that we hope to have ready for an experimental branch soon. VNAV is also in the works, but is at a far earlier stage, as we have some blocking issues we need to work around.

In order for us to remain competitive in the evolving MSFS ecosystem, we’re looking to onboard more developers and get some more attention focused on specific systems and features that are critical to the A32NX’s future.

Here’s a quick rundown on the status of them, and where you can help out. (If you wish to help, ping an admin on our Discord or send an email to contact@flybywiresim.com).

---

## Systems

### CUSTOM FPM, LNAV, and ND

**Status**: In Progress

Currently in late development. Most core functionality already implemented (support for all ARINC leg types, albeit reduced to TF legs and Type I transitions), with the remaining work focused on completing the custom Navigation Display, and ironing out remaining bugs in the flight plan manager, and tuning LNAV, as it is overshooting slightly in some scenarios. There are significant performance improvements and elimination of almost all stuttering in this branch.


### VNAV (Descent profile, ToC, ToD, etc.)

**Status**: Developers Needed

Currently in the early stages of development. Loosely based on WT’s CJ4 VNAV, but will support all A320-specific VNAV functionality, including REPRESSURIZATION, IDLE, and GEOMETRIC segments, as well as all applicable pseudo-waypoints (T/C, T/D, SPD LIM, DECEL, and path intercept icons on ND). The main blocking issue we have at the moment is lack of VPATH law in custom AP/ATHR. We currently need a developer with Matlab/Simulink experience to work on this (controls and systems experience is a plus).


### TCAS

**Status**: Developers Needed

Currently in late development, and on hold until completion of custom ND. Almost all core functionality regarding TA & RA generation and logic is complete. We are looking to expand upon this and implement AutoTCAS (autopilot/FD following TCAS RA commands), however this requires work on the custom AP side, in order to command a vertical speed with a specified acceleration (0.3g). As with VPATH law, we need a developer with Matlab/Simulink experience to take this on. 


### Custom AP/ATHR

**Status**: Developers Needed

One of our most prominent developers and the chief architect of our excellent custom fly-by-wire and autopilot systems, Andreas, has taken a step back from the project after several hard months of working on it. We are looking for any developers with experience using Matlab/Simulink, basic SimConnect familiarity, and (not required but recommended) some experience with controls/systems. Please reach out if you are able to work on this.


### Hydraulic System

**Status**: Developers Needed

Davy has been working hard on our hydraulic system over the past several months, implementing a lot of the base logic. However, his time has been limited recently, so we are looking for anyone willing to help out - specifically with working on actuators in the hydraulic system (cargo doors, flaps, gear, control surfaces). Familiarity with Matlab syntax and basic knowledge of physics (e.g. force, torque, etc.) is recommended. The hydraulics system is coded in Rust. (Developers needed)


### Pneumatic/Bleed System

**Status**: Developers Needed

We currently do not have any developers working on this, so if you are interested, please reach out to us. It will also be coded in Rust.

### Additional Systems In Progress

- Pressurization System
- ADIRS & GPS System
- FWS/FWC (Flight Warning System)

### A32NX 3D Model

We still need people with modeling experience to assist in our effort to model the A320neo (and afterwards, A320ceo) from scratch. Please fill out the Google form here if interested, and make sure you include your full Discord name, as we've had many people forget the numbers following their name, and we can't get back to them.

[Modelling Application Form](https://forms.gle/PUJ64rsaf9yZYMhs7)

Again, if you're able to help out in any of the areas above, please reach out to us via Discord or by sending an email to contact@flybywiresim.com.

