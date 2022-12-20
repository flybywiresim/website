---
title: 'A32NX Flight Model'
date: '2022-12-20'
authors:
  - 'donbikes'
  - 'Valastiri'
category: 'UPDATE'
metaImage: '/img/flight-model-feature.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

We have gone to great lengths to ensure that the A32NX flight model is as realistic as it gets. Collaborating with our own A320 pilot staff at FlyByWire Simulations and testing each change 
meticulously, the flight model is based on matching the data and other information obtained from the A320NEO Airplane Flight Manual, Flight Crew Operating Manual, Flight Crew Techniques Manual, 
Quick Reference Handbook, FlySmart electronic flight bag, and our A320NEO piloting team.

If you are a more data oriented reader, below you can find comparisons between the reference data and our tests in MSFS. We have included a plethora of tables and charts for you. Please note that 
speedbrake drag is based on matching FCOM emergency descent data.

## Work In Progress Tuning

Constant improvements with realistic and often very recent data points from our pilot staff is where we believe the A32NX shines. We plan on further tweaking how the flight model performs in 
regard to flaps up induced drag as well as including performance data for gear down operations (in climb, cruise, and descent).

We hope to continue bringing the best and most accurate flight model of the A320neo to Microsoft Flight Simulator. 

---

Credits:

- donbikes for the flight model work,
- Taz for the engine modelling,
- Davy for the simulation of the autobrake system.

**Note:** Some of the smaller more data heavy images can be clicked on so you can view the data in full.

---

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

![conf full chart mm](/img/notam-images/flight-model/conf-f-mm.png)

![conf 3 chart mm](/img/notam-images/flight-model/conf-3-mm.png)

##### Autobrake Medium

![conf full chart abm](/img/notam-images/flight-model/conf-f-abm.png)

![conf 3 chart abm](/img/notam-images/flight-model/conf-3-abm.png)


#### EDDW (Bremen Airport) 27, ISA, No Wind, CG=27%


![conf full chart EDDW](/img/notam-images/flight-model/conffull-eddw.png)

![conf 3 chart EDDW](/img/notam-images/flight-model/conf3-eddw.png)

### Landing Gear

[![flight-characteristics](/img/notam-images/flight-model/aircraft-characteristics.png)](/img/notam-images/flight-model/aircraft-characteristics.png)

The position C1 was used for the nosegear suspension travel, and BF1 was used for the main gear suspension travel. The difference between the heights at C1 and BF1 at MRW and at 41T at the respective CG positions was used to set the spring constant exponential value. Comparison of A32NX after this PR to the Airbus document:

[![gear comparison](/img/notam-images/flight-model/gear-comparision.png)](/img/notam-images/flight-model/gear-comparision.png)

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