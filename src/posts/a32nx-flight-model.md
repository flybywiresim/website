---
title: 'A32NX Flight Model'
date: '2022-12-23'
authors:
  - 'donbikes'
  - 'Valastiri'
category: 'UPDATE'
metaImage: '/img/flight-model-feature.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

We have gone to great lengths to ensure that the A32NX flight model is as realistic as it gets. Collaborating with our own A320 pilot staff at FlyByWire Simulations and testing each change 
meticulously, we have adjusted the flight model to data and other information obtained from the A320NEO Airplane Flight Manual, Flight Crew Operating Manual, Flight Crew Techniques Manual, 
Quick Reference Handbook, FlySmart electronic flight bag, and our A320NEO piloting team.

If you are a more data-oriented reader, below you can find comparisons between the reference data and our tests in MSFS. We have included a plethora of tables and charts for you.

Credits:

- donbikes for the flight model work,
- Taz for the engine modelling,
- Davy for the simulation of the autobrake system.

**Note:** Some of the smaller, more data-heavy images can be clicked on so you can view the data in full.

---

## Work In Progress Tuning

Constant improvement with realistic and often very recent data points from our pilot staff is where we believe the A32NX shines. Recent updates to our aircraft fix issues with inadequate 
takeoff climb performance after an engine failure at heavy gross weights. You can now practice those V1 engine cuts at 2nd segment climb-limited TOGW. Be sure when doing so to not delay gear 
retraction, lower your pitch rate and pitch target, and apply appropriate rudder to minimize control and sideslip drag! (**Note:** This capability is currently only available in the Development 
and Experimental versions of the A32NX).

We are currently fine-tuning the landing gear drag to better match climb, cruise, and descent data for gear down operations. The results of our WIP tuning are included in the tables below. We 
expect to add these changes to the A32NX soon - first in the Experimental version, followed by the Development version, and then our Stable releases.

We hope to continue bringing the best and most accurate flight model of the A320neo to Microsoft Flight Simulator.

### Climb Performance - Gear Down

[![climb performance gear down](/img/notam-images/flight-model/cbp-gear-down.png)](/img/notam-images/flight-model/cbp-gear-down.png)

### Cruise Checks - Gear Down

[![cruise checks gear down](/img/notam-images/flight-model/cc-gear-down.png)](/img/notam-images/flight-model/cc-gear-down.png)

### Descent Performance - Gear Down

[![descent performance - gear down](/img/notam-images/flight-model/dp-gear-down.png)](/img/notam-images/flight-model/dp-gear-down.png)

The small discrepancies in gear down performance (for example, climb performance at higher altitudes) are likely due to MSFS modelling of the gear down drag increment as a constant drag 
coefficient increment. In actuality, the gear drag coefficient increment varies inversely with lift coefficient.

---

## Flight Model Data

### Pitch Angle Verification ("Targets are from QRH")

[![pitch angle table](/img/notam-images/flight-model/pitch-angle-table.png)](/img/notam-images/flight-model/pitch-angle-table.png)

The following table represents pitch angle/N1 values at 3000 feet. These values are valid for both our Stable and Development versions.

[![pitch angle 3000ft](/img/notam-images/flight-model/pitch-3000.png)](/img/notam-images/flight-model/pitch-3000.png)

### Cruise Check Data

![cruise checks](/img/notam-images/flight-model/cruise-checks_1.png)

### Maximum Altitude Capability Checks

![max alt checks](/img/notam-images/flight-model/maximum-alt-checks.png)

### Climb Data 1

[![climb data 1](/img/notam-images/flight-model/climb1.png)](/img/notam-images/flight-model/climb1.png)

### Climb Data 2

[![climb data 2](/img/notam-images/flight-model/climb2.png)](/img/notam-images/flight-model/climb2.png)

### Descent Time / Distance / Fuel Compared to FCOM

[![descent time](/img/notam-images/flight-model/des.png)](/img/notam-images/flight-model/des.png)

### Emergency Descent Time / Distance Compared to FCOM

[![emergency descent](/img/notam-images/flight-model/em-des.png)](/img/notam-images/flight-model/em-des.png)

### Decel Check for CONF 3 Approach (Data from FBW IRL A320NEO Pilot)

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

##### Max Manual

![eham f maxman](/img/notam-images/flight-model/EHAM-F-Maxman.png)

![eham 3 maxman](/img/notam-images/flight-model/EHAM-3-Maxman.png)

##### Autobrake Medium

![eham f med](/img/notam-images/flight-model/EHAM-F-Med.png)

![eham 3 med](/img/notam-images/flight-model/EHAM-3-Med.png)

#### EDDW (Bremen Airport) 27, ISA, No Wind, CG=27%

![eddw full](/img/notam-images/flight-model/EDDW-F.png)

![eddw 3](/img/notam-images/flight-model/EDDW-3.png)
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

Feature Image Courtesy of Maphol - FBW Media Team