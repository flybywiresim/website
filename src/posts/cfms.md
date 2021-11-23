---
title: 'Custom Flight Management System'
date: '2021-11-22'
authors:
  - 'Holland'
  - 'Valastiri'
  - 'Kevin'
category: 'UPDATE'
metaImage: '/img/rear_a32nx.jpg'
metaAlt: 'FlyByWire Simulations'
---

## Overview

After a lot of hard work, we have finally completed the first version of our custom FMS. We'd like to extend credit to the Working Title team as their code was the basis for cFMS version 1. 

This update brings significantly more stable flight plan editing capabilities, support for RF and VM legs, entirely custom LNAV path prediction and guidance loops, as well as a completely re-worked, 100% from scratch ND using extremely accurate data and references, going as far as replicating real-life symbol data limits and error messages.

This exciting update is only the beginning of what is to come. We are already doing heavy development of the second version of this system, which includes support for very long awaited features. More previews on this will come soon.

**Please note:** users currently on Stable or Development releases might notice some changes that affect how they interact with the FMS. We have prepared a documentation page for easing the transition, as well as a known issues page for this new system.

- [Custom Flight Management System](https://docs.flybywiresim.com/fbw-a32nx/feature-guides/cFMS/)
- [Known Issues](https://docs.flybywiresim.com/fbw-a32nx/feature-guides/cFMS/#known-issues)

This effectively brings over the Experimental branch to the Development version, which means we recommend users to switch to the Development version as bug fixes and improvements towards this functionality will only happen there.

A huge thank you to the developers below for all the work put into this.

- 2hwk
- AGuther
- Aaryan
- BehEh
- DerL30N
- Grinde
- Holland
- Iceman
- Saschl
- lukecologne
- pareil6
- tracernz
- tyler58546

### WX/TER/TCAS

It is important to note that the weather and terrain radars, as well as TCAS, are not available yet with cFMS v1. Our current focus is to deliver a more realistic flight planning and navigation experience while maintaining performance and reliability. However, we are not satisfied with how the default code performs together with our custom systems.

We believe the benefits that cFMS provides outweigh the temporary lack of WX/TERR/TCAS functionality on the development version. We are already hard at work developing our TCAS system and we will provide more details on it as soon as we can. Weather and terrain still prove to be a challenge due to the lack of a native SDK API. We have posted about it on the MSFS forums, where it currently sits at the top of the wishlist and Asobo are investigating how to best improve their API.

[Read more about weather and terrain API](https://forums.flightsimulator.com/t/implement-weather-and-terrain-api-s-for-aircraft-developers-to-implement-accurate-radar-predictive-windshear-egpws-and-metar-wind-uplink/442016).

### Additional Information

The experimental branch is on hold until the next major feature is ready for testing. We ask our users to switch to the development version to continue receiving the latest updates and fixes. 

Our latest Stable Version 0.7.3 will be the last stable release with the default FMS from Asobo. If you require the default FMS for third-party compatibility please continue to use Stable v0.7.3. 

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