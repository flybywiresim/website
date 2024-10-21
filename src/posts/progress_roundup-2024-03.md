---
title: 'Progress Roundup - March 2024'
date: '2024-03-08'
authors:
  - 'Valastiri'
category: 'PROGRESS'
metaImage: '/img/notam-images/infrastructure/cockpit-header.png'
metaAlt: 'FlyByWire Simulations'
---

# Overview

We typically see a lot of progress happen in the background that we don't always get to share with you through our other platforms. While these progress updates always 
happen first on our Discord, we'd like to introduce a new NOTAM series that records our these updates in a singular format to keep the rest of our community informed.

While those of you already on Discord have seen these, feel free to join us there if you haven't already. For your convenience we have included the dates when each update was 
announced on Discord and hope to commit to a regular schedule of collating our progress into this new NOTAM series.

[Join FBW Discord](https://discord.gg/flybywire)

## METAR Source Updates - EFB

*October 27, 2023*

NOAA recently gave aviationweather.gov a huge overhaul and with that added a new API. We've now been able to add NOAA as a METAR source for FBW aircraft, providing worldwide 
coverage. The option is selectable on the flyPad ATSU/AOC settings page in the dev version. Additionally the NOAA TAF source has been fixed in line with the new API, and a couple of other no-longer working options are removed.

NOAA TAFs are also fixed for stable edition users.

## Model Improvements - EFB

*December 22, 2023*

The flyPad is now bigger and oriented to the pilot eyepoint. 

This nice little quality of life improvement is available in the dev version now, alongside all the other model improvements.

## GSX Integration Improvements - EFB

*January 25, 2024*

We made some changes to the A32NX Development Version for better integration with GSX Pro (thanks to Fragtality and Chaoz).

- When the ramp agent inserts the bypass pin, nose wheel steering is disabled and the associated message is shown in the upper ECAM.
- GSX chocks and cones are no longer used. You can now use the A32NX's own chocks and cones and leave the parking brake off, when at the gate.
    - To do so, you have to activate the chocks and cones in the EFB settings again (Settings > Sim Options). Remember to set the parking brake before the tug will be connected though.
- We changed the refueling process with GSX so that the aircraft gets fueled as soon as the service personnel connects the hose.

![flypad-settings-sim-options.jpg](/img/notam-images/2024/march-24/flypad-settings-sim-options.jpg)

## PERF Page Changes - MCDU

*October 28, 2023*

We've made various changes to the PERF pages in the MCDU. The changes include:

- Implemented an option to preselect a managed descent speed.
- Implemented the CHECK SPEED MODE message on the PFD.
- Only allow preselecting a selected CLB speed in CAS.
- Allow preselecting a cruise speed as CAS or Mach.
- Show cruise speed as CAS below FL250 and as Mach above FL250.
- Implemented an option to modify PRED TO altitude on PERF CLB and PERF DES pages.
- Added altitude predictions in selected modes on the PERF DES page.

![Climb Example](/img/notam-images/2024/march-24/perf-3.png)
![Descend Example](/img/notam-images/2024/march-24/perf-2.png)
![Cruise Example](/img/notam-images/2024/march-24/perf-1.png)

## Ground Air Start - New Feature!

*November 08, 2023*

Building on the great work by BlueberryKing you are now able to simulate an INOP APU.
Using the newly implemented air starter unit (ASU) to start the first engine you can set the conditions for a crossbleed engine start of the second engine to complete that scenario!

We have also created additional documentation which now fully describes the procedure to perform a ground air start followed by a crossbleed engine start.

[Ground Air Start Documentation](https://docs.flybywiresim.com/pilots-corner/advanced-guides/engines/asu-start/)

## Improved Realistic Flare Law

*February 08, 2024*

We have just implemented a more realistic flare law in manual flight. Here is a description from Airbus:
[A320 Prevention of Tailstrikes](https://safetyfirst.airbus.com/app/themes/mh_newsdesk/documents/archives/a320-prevention-of-tailstrikes.pdf)

This new flare law is more in line with the real airplane and allows good control of pitch attitude on landing. It will take some adjustment and practice to get used to it.

In addition to the new flare law, the autopilot has also been slightly improved. The performance during a late go-around is better and the landing in crosswinds has been further improved.

### Flare Law Behavior

*February 11, 2024*

After the release of our updated flare law we received multiple reports of strange behavior in connection with it.

We have looked into the issue and it had been determined that there has been a bug in the structure of the controller. This has now been fixed and has already been brought to the 
development version.

For a preview of the Autoland in crosswind see the video below:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5T3Pr_EeQfM?si=8tPqk7FkIaSgTMNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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