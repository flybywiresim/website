---
title: 'Development Updates June 2021'
date: '2021-06-20'
authors:
  - 'Valastiri'
  - 'Falcon'
  - 'Davy'
  - 'Boris'
category: 'DEVELOPMENT UPDATE'
metaImage: '/img/a32nxwing.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

It has been an amazing journey over these past ten months here at FlyByWire Simulations. We have some exciting things that are released on our development branch! In this NOTAM we are going to provide you with an overview of changes we have implemented towards the following:

- flyPadOS v2! Brand new UI and features available.
- Sound implementation + upcoming planned audio effects
- Hydraulics implementation and state

---

## Development Updates

### flyPadOS v2

The latest version of our flyPad has the following main features:

- Navigraph charts integration
- Landing performance calculator
- New layout and design
- More options in the settings page

You heard it right! We’re excited to deliver Navigraph charts usable with the efb. It is very simple to get started. All you need to do is:

- Select the Charts tab in the EFB
- Scan the QR code displayed

And you're set! We've tried to design our UI to look similar to the standard navigraph UI while still maintaining that 'FlyByWire' look.

As briefly touched on before, we have done a major redesign to the look and feel of the EFB. We have tried to maximise its usability and appearance for our users.

While exploring the EFB you may have noticed that the settings page is now no longer greyed out. We have moved all the settings from the MCDU into the EFB.

[Credit to the developers who worked on FPOSv2] 

### Latest Sound Implementation and Plans

We recently merged major improvements to our sounds module in the A32NX. 

Available now:

- New avionics fans audio for a more immersive power up and shutdown.
- Enhanced engine spool up
- Reworked engine sounds from idle to TOGA (heard externally and internally)
- Yellow and blue electric pumps sounds added (audible in the cabin mostly)
- Sound of the ground service bus (everytime you load in you will hear a clunk and a small whine)

Not only have we pushed noticeable changes that you can hear, but we’ve added in events that allow our developers to implement the logic at a later time.

Events added without logic:

- TCAS wwise events
- ROPS wwise events

### Hydraulic Implementation

Last hydraulic update connected the brakes to the FS2020 physics, and will now only stop the plane if hydraulic pressure is available. Still, the default autobrake system was still there and could bypass our implementation. Thus, current priority is on a custom auto brake system, aiming to match all the conditions and dynamic deceleration targets of the real A320 Neo.

There are so many other hydraulic topics to implement that we can’t have an exhaustive list, but some of the next steps will be:

- Tuning of brake forces to match real plane performances
- Modeling of the blue hydraulic/electric emergency generator
- Accurate RAT modeling
- Physical model of the PTU
- All actuators modeled and connected one by one

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

Thanks for tuning in!
Safe skies and happy flying!
