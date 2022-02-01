---
title: 'Flight Management System and VNAV'
date: 'tbd'
authors:
    - 'BlueberryKing'
    - 'Holland'
    - 'Tracernz'
category: 'UPDATE'
metaImage: '/img/rear_a32nx.jpg'
metaAlt: 'FlyByWire Simulations'
---

## Overview

2021 was a busy year at FlyByWire Simulations. Looking back at where we started and how far we have come, we are immensely thankful for the journey, as well as the support all of you have given to the project. We love that the hard work our teams put into bringing you a realistic A320neo experience in MSFS has resulted in thousands of flights tracked on our website daily.

We would like to take a moment to thank our development, marketing and QA teams, as well as the many outside contributions that have been made to all parts of the project that have helped make this project into what it is. We are also grateful for every type rated A320 pilot who stands by us to make sure we bring a quality product to the table.

We have a lot in store for 2022 and over the course of a few weeks we’ll be releasing a series of NOTAMs to bring everyone up to speed. Today’s NOTAM will focus on updates to our custom flight management system and vertical navigation.

---

## Custom Flight Management System

### Detailed info on cFMS v1.5
After launching the first version of our custom FMS back, we have been hard at work developing a large-scale update to many parts of the flight management system - this update, which we call cFMS v1.5, is currently on the experimental branch for users to check out.

#### System Architecture
One focus of this update was to bring the system’s architecture closer to how a real A320 structures FMS data and interaction. This meant, in part, removing the ND’s ability to read the flight plan - and instead provide the FMS computer full authority on drawing. This improves performance and more closely reflects how the FMS and DMC interact in the real aircraft, which is crucial for later simulation of complex failures.

We have also done work to support decoupled FMS operations, which will allow future implementation of fully independent FMGCs

#### Lateral navigation
We have done a lot of work overhauling the way lateral (horizontal) paths are generated in this version. First, we have added the ability for LNAV to predict and generate paths for eight more (verfiythis) procedure leg types. In simpler terms, the software is now able to create flight paths that are significantly more accurate to real-life lateral SID/STAR constraints seen on charts and encoded in the navdata.

Second, we have improved the turn prediction algorithm to support five more turn cases, not only to comply with the aforementioned leg types, but also provide more robust prediction in case of overshooting or high speed turns. This new algorithm is not trying to be perfect either - some of the real life bugs and quirks of the Honeywell H3 FMS are accurately (and intentionally!) represented, such as sharp leg intercepts and unguided capture turns.

Third, we have spent a lot of time optimising and improving the guidance algorithm to reduce cross track error and provide incredibly precise navigation; as well as to minimise performance impact by recomputing less parts of the geometry.

### Detailed info on cFMS v2
While cFMS v1.5 is a big update on its own, we are already thinking ahead and moving forward with the development of cFMS v2, another major improvement to our custom flight management system. This time, the focus is on flight planning and route stringing. This means that the FMS will have much better logic to connect flight plan segments, such as SIDs and enroute airways, together.

Notable improvements include:
- Full support for missed approach procedures
- Support for alternate and secondary flight plans
- Better stringing algorithm, which removes discontinuities where they should not be and adds them where the old system should have


## VNAV

The progress we have made on the LNAV and flight plan management system has enabled us to ramp up development of the aircraft’s vertical navigation (VNAV) system. This highly anticipated feature relies heavily on accurate lateral path prediction in order to plan an accurate vertical profile along a track.

Not only will this allow the FMS to predict a complete altitude profile, it will also include the computation of a speed profile following all applicable altitude constraints and speed limits. These, in turn, are essential for improving lateral path prediction, which is strongly dependent on ground speed.

Similar to LNAV predictions, VNAV predictions are recomputed regularly during flight to account for changes in atmospheric conditions such as pressure, temperature and wind, as well as deviations in real aircraft performance from the predictions, to provide accurate information to the pilots throughout the flight. This tight interaction between the two systems represents a development challenge as it requires iterative computation to find a suitable solution.

![ata-22-vnav](/img/notam-images/feb2022-series/ATA-22-VNAV.jpg)

### Challenges

An example would be predicting an aircraft’s climb capability given a certain lateral distance. For accurate engine performance predictions, we need to know the pressure and temperature throughout a particular segment/portion of the flight, which are both altitude-dependent. As an approximation, we can use the midway altitude along this step. However, we do not know the midway altitude before running the prediction. We can resolve this by using an initial guess for the midway altitude and the starting altitude to run the predictions, then using the midway altitude in the prediction as a new guess.

Similarly, if we want to compute a descent profile obeying all speed and altitude constraints as it is done on the Airbus, there are a few considerations. We would like to know at which point along the track to start our computation, ideally the top of descent, but we do not know where the top of descent is before computing how much distance is required for the descent. In essence, we would have to compute the profile backwards. We start at the destination runway and compute descent segments up to the cruising altitude. However, there is still an issue. We do not have a reliable aircraft weight prediction at the destination airport because we do not know how much fuel will be burnt during the descent. Again, we solve this by using an initial guess of the destination fuel, running predictions, and then updating this based on the predicted fuel burn. This is repeated until we converge to an accurate fuel prediction.

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

