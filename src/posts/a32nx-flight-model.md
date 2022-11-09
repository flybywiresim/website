---
title: 'A32NX Flight Model'
date: 'tbd'
authors:
  - 'donbike'
category: 'UPDATE'
metaImage: '/img/notam-images/flypados3/flypad-hero.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

We have gone to great lengths to ensure that the A32NX flight model is as realistic as it gets. Collaborating with our own A320 pilot staff at FlyByWire Simulations and testing each change religiously the flight model is based on matching the following:

1.	A320NEO drag polar used in creating the Leap 1A-26 engine model;
2.	Pitch angles and N1 values from the QRH unreliable airspeeds chart as well as one additional full flaps condition provided by a project pilot;
3.	N1 values from FCOM cruise check data;
4.	Maximum altitude capability checks;
5.	Climb and descent time and distance data from the FCOM;
6.	A320 stall speeds (to the extent possible while satisfying item 2 as a higher priority);
7.	A deceleration condition for a CONF 3 approach provided by the same project pilot as for item 2;
8.	Pitch up on retraction from 1+F to clean and pitch down on extension from 1 to 2;
9.	Elevator trim elasticity table used to prevent premature rotation and match pitch trim value at some cruise conditions provided by an FBW team pilot;
10.	Pitch and roll stability and gyro stability set to provide more accurate control response “feel” and reaction to turbulence/gusts;
11.	Parameters adjusted to provide more accurate pitch and roll sensitivity based on FBW team pilots’ evaluations; and
12.	Landing gear adjusted to provide more gear suspension travel and to match the amount of travel for the real airplane between empty weight and maximum ramp weight.

If you are a more data oriented reader below you can find comparisons between the reference data and the sim. Please note that speedbrake drag is based on matching FCOM emergency descent data.

### Pitch Angle Verification ("Targets are from QRH)

[ insert tables here ]

### Cruise Check Data

[ insert tables here ]

### Maximum Altitude Capability Checks

[ insert tables here ]

### Climb Time / Distance / Fuel compared to FCOM (250/300/M0.78), ISA+10C

[ insert tables here ]

### Climb Time / Distance / Fuel compared to FCOM (250/300/M0.78), ISA+20C

[ insert tables here ]

### Descent Time / Distance / Fuel compared to FCOM (M0.78/300/250), ISA

[ insert tables here ]

### Emergency Descent Time / Distance compared to FCOM

[ insert tables here ]

### Decel Check for CONF 3 Approach (Data form FBW IRL A320NEO Pilot)

**Conditions:**

- CONF 3, 
- Gear down, 
- -3 degrees flight path angle, 
- 51 T, 
- 23 seconds decel time from 160 KCAS to 140 KCAS. 

**Test Procedure:** 

Set up at a high enough speed above 160 KCAS to be at flight idle at 160 KCAS, decel to a speed far enough below 140 KCAS to remain in flight idle through 140 KCAS. Record decel time from 160 to 140 KCAS.

Real World Target: 23 seconds

**A32NX Result: 23 seconds**

### Stopping Distance

Stopping distance comparisons were made using FlySmart landing distance data. The ground roll stopping distance was derived from that landing distance data using the same methods by which the landing distance data was calculated. Stopping distances were measured during flight tests of the A32NX to compare to the stopping distances derived from the FlySmart landing distance data.

#### EHAM (Amsterdam Schiphol Airport) 18R, ISA, No Wind, CG<25%

[ insert table here ]

#### EDDW (Bremen Airport) 27, ISA, No Wind, CG=27%

[ inerset table here ]

### Landing Gear

![flight-characteristics](/img/notam-images/flight-model/aircraft-characteristics.png)

The position C1 was used for the nosegear suspension travel, and BF1 was used for the main gear suspension travel. The difference between the heights at C1 and BF1 at MRW and at 41T at the respective CG positions was used to set the spring constant exponential value. Comparison of A32NX after this PR to the Airbus document:

[ insert table here ]

---

## Pilot Comments on Pitch and Roll Response

> "Massive improvement"
> 
> "Roll is amazing"
> 
> “The deadband at around 10º is exactly like irl”
> 
> Pitch is "nearly perfect"

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

Editors: *Valastiri*