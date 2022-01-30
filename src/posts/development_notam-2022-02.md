---
title: 'FlyByWire 2022'
date: 'TBD'
authors:
    - 'AGuther'
    - 'BehEh'
    - 'BenW'
    - 'BlueberryKing'
    - 'holland'
    - 'IbrahimK42'
    - 'Kevin'
    - 'Valastiri'
category: 'UPDATE'
metaImage: '/img/a32nxwing.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

2021 was a busy year at FlyByWire Simulations. Looking back at where we started and how far we have come we are immensely thankful for the support and journey all of you have participated in flying the A32NX. We love that the hard work our teams put into bringing you a realistic A320neo experience in MSFS culminates in thousands of flights tracked on our website daily.

We’d like to take a moment to provide thanks and appreciation to all of our volunteer developers, marketing team, quality assurance testers, and the many outside contributions made to all aspects of the A32NX that have helped make this project into what it is. We are also entirely grateful for every type rated A320 pilot that stands by us to make sure we bring a quality product to the table.

We have a lot in store for 2022 and this NOTAM is tailored to bring everyone up to speed with our latest development.

---

## Development Updates

### Detailed Info on cFMS v1.5

#### System Architecture

#### Lateral Navigation

### Detailed Info on cFMS v2

### VNAV

### FBW / AP / ATHR Improvements

To provide you with a more realistic flight simulation experience, the FlyByWire team has performed various tests in a full flight simulator regarding fly-by-wire (FBW), autopilot (AP) as well as autothrust (ATHR). The results of these tests were used for a detailed adjustment of the AP, FBW and ATHR. The adjustments have also been verified from real A320 pilots and they resulted in significant improvements.

#### Fly-By-Wire System

For the fly-by-wire system we only adjusted the pitch law, only the pitch law was adjusted, as the roll and yaw laws were already close to the full flight simulator results.

To be closer to the behavior in the full flight simulator, the achievable pitch rate at lower speeds has been increased. As a result, pitch law is now more sensitive in these scenarios. The recommended sensitivity for the pitch axis is now +/- 30% which also better mimics the increased force that is needed to hold the real sidestick full back or forward (to be noted the real sidestick has a 2-step force curve).

Additionally, the pitch law has been adapted to compensate for speed changes and speed brakes more realistically. In theory, the aircraft would completely compensate for speed changes, but this is actually not the case.

Real pilots gave positive feedback after these adjustments. During landing, about 1/3 sidestick pull is necessary during the flare mode (see the video below).

[Video Here Requires Youtube]

#### Autopilot

The autopilot system has been improved in mode initiation and laws.

Several changes have been made around the arming and engaging of ALT and ALT*. The conditions when ALT is arming or engaging have been reworked, ALT* is now inhibited 3 s after changing the FCU altitude and overshoots of the target altitude are now also covered in a realistic way.

The target load factors that are used to guide the aircraft have now been separated for every law and situation. As an example, the V/S mode usually uses a load factor target of 0.05 g but in case of level off request it uses now 0.1 g.

The improved Speed/Mach law is already presented in the NOTAM of September. The video in the NOTAM showed what would happen when there is no longer a sufficient thrust energy for a climb. In this case, the aircraft would descend and maintain speed. The Speed/Mach law has been extended with further edge cases. Further, the minimum vertical speed limitations in case of Open Descend (OP DES) or Open Climb (OP CLB) have been adjusted. For example, if the ATHR is turned off and manual full thrust is given, then the aircraft would continue to descend at a minimal rate, but still accelerate.

It turned out that on a rejected take-off when putting thrust levers to idle, the modes SRS and RWY do not automatically disengage. To disengage them, both flight directors need to be turned off and on again. The HDG / TRK law has been improved in terms of bank angle limit for changes up to 10° in course. Finally, for Autoland the LOC ALIGN and ROLL OUT laws have been tuned and improved.

#### Autothrust

In relation to the autopilot system, the thrust transitions in case of (OP) CLB / DES have been improved.

We have improved theIn relation to the engines, the thrust limits have been improved. This applies to thrust limits itself but also to the interaction with CLB limit in case of take offs performed with a FLEX temperature being set. Furthermore, the N1 base loop controller has been improved to better achieve N1 target although this does not work out in all cases. For this reason, the engine model and thrust limits will get further accuracy improvements which are in work already.

Last but not least, it turned out that ATHR arming is related to SRS engagement. In case of SRS not engaging on take off, the ATHR will not be armed. Keep this in mind when you take off with a V2 speed not being set.


### New Flight Warning System

### Display Typeface Development

### MCDU Web Interface

We’ve recently launched a new feature that has seen incredible popularity amongst our users; the MCDU web interface. It provides a convenient and easy to use web connection to run the MCDU over a web browser on any computer located on your local network.

You can read up on this new functionality here:
[MCDU Web Interface Guide](https://docs.flybywiresim.com/fbw-a32nx/feature-guides/web-mcdu/)

We have used this first development as a means of evaluating our strategy regarding custom instruments. We are currently working on developing custom high-speed protocols for offloading instrument rendering onto other programs or even other devices, over a network, to offer better possibilities for home cockpit integration.

### Nose Wheel Tiller

### Stored Waypoints

### Other Projects

#### Discord Bot

The FBW Discord bot is undergoing huge improvements with the upgrade to discord.js v13. While the Bot Development team works on the upgrade, it would be beneficial for more people to join the team so we can keep up with the regular workload of adding and updating commands to be used across the Discord server! If you are interested in helping out, please let us know in the #discord-bot channel, or contact the following users directly:

- BenW#8484
- █▀█ █▄█ ▀█▀#2123
- oim#0001

#### Documentation

If you aren’t already aware we have a great documentation site for all of our projects that provides a wealth of knowledge for support, technical issues, A32NX feature guides, aircraft information, and systems information.

The site is continuously updated and we fact check information with our pilots and developers for accuracy and to ensure we publish useful and education information. Our pilots corner section contains the [Beginners Guide](https://docs.flybywiresim.com/pilots-corner/beginner-guide/overview/) which should not be mistaken for only novice pilots as it contains relevant information on all of our implemented systems with the A32NX. We also have our [Interactive Flight Deck](https://docs.flybywiresim.com/pilots-corner/a32nx-briefing/flight-deck/) where you can click on any panel on board the aircraft and read more about a specific system.

We hope you find our documentation site a great resource for all your flights with us at FBW. You can visit the website or learn how to contribute below.

- [Documentation Site](https://docs.flybywiresim.com/)
- [Contributing](https://docs.flybywiresim.com/dev-corner/development-projects/documentation/)

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
