---
title: 'Development Updates June 2021'
date: '2021-06-20'
authors:
  - 'Valastiri'
  - 'Falcon'
  - 'Davy'
  - 'Boris'
  - 'Kevin'
category: 'DEVELOPMENT UPDATE'
metaImage: '/img/notam-images/efb-featured.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

It has been an amazing journey over these past ten months here at FlyByWire Simulations. We have some exciting things that are on our development branch! In this NOTAM we are going to give you an overview of changes that have been implemented:

- flyPadOS v2! Brand new UI and features available.
- Sound implementation + upcoming planned audio effects.
- Hydraulics implementation and state.

---

## Development Updates

### flyPadOS v2

The latest update of our flyPad has received:

- Landing performance calculator.
- New user interface design.
- More options in the settings page.
- Navigraph charts integration.

You heard it right! We’re excited to deliver Navigraph charts functionality in the EFB. Getting started is simple - all you need to do is to:

1. Select the Charts tab on the EFB.
2. Scan the QR code to authenticate.

NOTE: The use of Navigraph charts requires an active Ultimate subscription with Navigraph. You can check the current price at [Navigraph Subscriptions](https://navigraph.com/products/subscriptions).

We are also planning to add Chartfox integration to the EFB at a later date.

As briefly touched on before, we have done a major redesign to the look and feel of the entire EFB for a more refined appearance and improved usability.

While exploring the EFB you may have noticed that the settings page is now no longer greyed out. We have moved all the settings from the MCDU into the EFB. On a final note, the default keybinds no longer trigger when using an input while using the EFB natively, meaning you no longer have to “pop-out” the EFB window to type.


[Credit to the developers who worked on FPOSv2] 

### Latest Sound Implementation and Plans

We recently merged major improvements to our sounds module in the A32NX. 

Available now:

- New avionics fans audio for a more immersive power up and shutdown.
- Enhanced engine spool up.
- Reworked engine sounds from idle to TOGA (heard externally and internally).
- Yellow and blue electric pumps sounds added (audible in the cabin mostly).
- Sound of the ground service bus (everytime you load in you will hear a clunk and a small whine).

Not only have we pushed noticeable changes that you can hear, but we’ve added in events that allow developers to implement the logic at a later time.

Events added without logic:

- TCAS wwise events.
- ROPS wwise events.

### Hydraulic Implementation

The last hydraulics update connected the brakes to MSFS physics engine, so the brakes will now only stop the plane if there is hydraulic pressure. However, the A32NX still uses the default autobrake system, which can bypass our implementation. Thus, our current priority is to develop a custom autobrake system to match all the conditions and dynamic deceleration targets of the real A320neo. 

There are so many aspects of the hydraulic system to implement that we can’t cover them all here, but some of the next steps are:

- Tuning brake forces to match real plane performance figures.
- Modelling the blue hydraulic/electric emergency generator.
- Modelling the RAT accurately.
- Creating a physical model of the PTU.
- Connecting and modelling all actuators one by one.

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
