---
title: 'Systems Development Update'
date: 'TBD'
authors:
    - 'AGuther'
    - 'BehEh'
    - 'IbrahimK42'
category: 'UPDATE'
metaImage: '/img/a32nxwing.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

**Rewrite Required**

---

### FBW / AP / ATHR Improvements

To provide you with a more realistic flight simulation experience, the FlyByWire team has performed various tests in a full flight simulator regarding fly-by-wire (FBW), autopilot (AP) as well as autothrust (ATHR). The results of these tests were used for a detailed adjustment of the AP, FBW and ATHR. The adjustments have also been verified from real A320 pilots and they resulted in significant improvements.

#### Fly-By-Wire System

For the fly-by-wire system we only adjusted the pitch law, only the pitch law was adjusted, as the roll and yaw laws were already close to the full flight simulator results.

To be closer to the behaviour in the full flight simulator, the achievable pitch rate at lower speeds has been increased. As a result, pitch law is now more sensitive in these scenarios. The recommended sensitivity for the pitch axis is now +/- 30% which also better mimics the increased force that is needed to hold the real sidestick full back or forward (to be noted the real sidestick has a 2-step force curve).

Additionally, the pitch law has been adapted to compensate for speed changes and speed brakes more realistically. In theory, the aircraft would completely compensate for speed changes, but this is actually not the case.

Real pilots gave positive feedback after these adjustments. During landing, about 1/3 sidestick pull is necessary during the flare mode (see the video below).

(Youtube Video FBW A32NX | Flare Mode)

#### Autopilot

The autopilot system has been improved in mode initiation and laws.

Several changes have been made around the arming and engaging of ALT and ALT*. The conditions when ALT is arming and engaging have been reworked. ALT* is now inhibited 3 s after changing the FCU altitude, and overshoots of the target altitude are now also covered realistically.

The target load factors used to guide the aircraft have now been separated for every law and situation. For example, the V/S mode usually uses a load factor target of 0.05 g but in case of level off request, it uses 0.1 g (i.e. you push the V/S knob on the FCU).

The improved Speed/Mach law is already presented in the NOTAM of September. The Speed/Mach law has been extended with other edge cases. The minimum vertical speed limitations in the case of Open Descend (OP DES) or Open Climb (OP CLB) have been adjusted. For example, if the ATHR is turned off and manual full thrust is given, then the aircraft would continue to descend at a minimal rate but still accelerate.

It turned out that on a rejected take-off when putting thrust levers to idle, the modes SRS and RWY do not automatically disengage. Both flight directors need to be turned off and on again to disengage them. The HDG / TRK law has been improved in terms of bank angle limit for changes up to 10° in course.

Finally, the LOC ALIGN, FLARE and ROLL OUT laws have been tuned and improved for Autoland. For the FLARE law, a new filter has been designed and implemented that improves detection of vertical speed relative to the ground using the radio altimeter. Such a filter is needed to ensure good performance on sloped runways. The result is that the A32NX can now approach on runways with pre-threshold terrain profiles that can induce abnormal landing system performance. A special operational test and evaluation program is required before approving any CAT III operations for real aircraft on these types of runways. One very prominent example is KSEA 16R.

(Youtube Video FBW A32NX | Autoland - KSEA 16R)
(Youtube Video FBW A32NX | Autoland - EDDM 26L)

##### Background on FLARE law

In the following, we want to give some insights on the flare law.

The flare law has the task to reduce the vertical speed of the plane from approach to touchdown. This needs to work for different weights, center of gravity, wind and (sloped) runways. In the following, we discuss shortly how to handle sloped runways.

The two figures below show the radar altimeter signal during an Autoland for EDDM 26L and KSEA 16R. The signal for EDDM 26L is much more stable and smooth and does not contain any disruption. In contrast, the KSEA 16R shows a typical noise of a radio altimeter signal (in the orange box). Remember that every object on the ground, like trees or houses, is detected. Besides this we can also see the wall (red arrow) just before the 16R runway begins.

[![ata-22-eddm-26L-H_RA](/img/notam-images/feb2022-series/systems/EDDM_26L_H_RA.svg)](/img/notam-images/feb2022-series/systems/EDDM_26L_H_RA.svg)
*EDDM 26L*

---

[![ata-22-ksea-16R-H_RA](/img/notam-images/feb2022-series/systems/KSEA_16R_H_RA.svg)](/img/notam-images/feb2022-series/systems/KSEA_16R_H_RA.svg)
*KSEA 16R Radio Altimeter*

---

[![ata-22-ksea-16R-H_RA](/img/notam-images/feb2022-series/systems/KSEA_16R_Wall.png)](/img/notam-images/feb2022-series/systems/KSEA_16R_Wall.png)
*KSEA 16R Terrain Profile around Runway threshold*

---

[![ata-22-ksea-16R-H_RA](/img/notam-images/feb2022-series/systems/KSEA_16R_Slope.png)](/img/notam-images/feb2022-series/systems/KSEA_16R_Slope.png)
*KSEA 16R Runway Slope*

As mentioned, one of the challenges for the flare is the slope of the runway. Due to this potential slope, it's not enough to bring the vertical speed in relation to the air to the target value. Important is to get the vertical speed relative to the ground to the target landing rate. The only way to do this reliably is to use a radio altimeter. This is also the reason why this device is so essential for an Autoland.

The signal from the radio altimeter is not a speed; it's a height. Therefore the signal needs to be derived. Derivation of a noise signal is a challenge. Therefore, filtering the radio altimeter signal needs to be balanced between reactivity and smoothness and a wall just before the runway start is a challenge for the filter parameters.

The following filter is being used for the radio altitude:
<img src="/img/notam-images/feb2022-series/systems/H_RA_Filter.svg" width="200" height="100">

The following figure shows the Autoland in EDDM 26L. The blue line shows the vertical speed relative to the air, and the orange line shows the vertical speed relative to the ground (based on the filtered radio altimeter signal). It can be seen that both lines are very close together because EDDM 26L has a clean terrain profile in front of the runway and the runway has no slope:
[![ata-22-eddm-26L-Hdot](/img/notam-images/feb2022-series/systems/EDDM_26L_Hdot.svg)](/img/notam-images/feb2022-series/systems/EDDM_26L_Hdot.svg)

In contrast, the following two figures for KSEA 16R and KLAS 01L show a discrepancy between vertical speed relative to air and ground. The runway slope can also be seen because there is a difference even after the touchdown.

[![ata-22-ksea-16R-Hdot](/img/notam-images/feb2022-series/systems/KSEA_16R_Hdot.svg)](/img/notam-images/feb2022-series/systems/KSEA_16R_Hdot.svg)
*KSEA 16R*

---

[![ata-22-klas-01L-Hdot](/img/notam-images/feb2022-series/systems/KLAS_01L_Hdot.svg)](/img/notam-images/feb2022-series/systems/KLAS_01L_Hdot.svg)
*KLAS 01L*

The flare law uses the vertical speed relative to the ground as an input for a vertical speed tracker to bring the landing rate to an appropriate level for the touchdown.

#### Autothrust

In relation to the autopilot system, the thrust transitions in case of (OP) CLB / DES have been improved. The SPEED / MACH law of the Autothrust system has been improved so that engines react more quickly to better ensure speed is kept in a range of -5 kn to + 10 kn of target speed.

In relation to the engines, the thrust limits have been improved. This applies to thrust limits itself but also to the interaction with CLB limit in case of take offs performed with a FLEX temperature being set. Furthermore, the N1 base loop controller has been improved to better achieve N1 target although this does not work out in all cases. For this reason, the engine model and thrust limits will get further accuracy improvements which are in work already.

Last but not least, it turned out that ATHR arming is related to SRS engagement. In case of SRS not engaging on take off, the ATHR will not be armed. Keep this in mind when you take off with a V2 speed not being set.

The gains of the ATHR Speed/Mach law have been adjusted to achieve better speed control performance during acceleration or deceleration. The time to reach the target speed is decreased. You can see one example in following video.

(Youtube Video FBW A32NX | Autothrust Adjustment)

### New Flight Warning System

As the work on our aircraft systems has progressed, one part that hasn’t changed a lot since the early days has been our rudimentary ECAM. Our new Electrical and Hydraulic systems can only really showcase their depth when failures and knock-on effects cause accurate aural warnings and ECAM actions to appear; for this, we need our new Flight Warning System (FWS).

Over the past months we’ve been building a simulation of the Flight Warning Computers (FWCs) from the ground up. These devices are a crucial component of the FWS in the real aircraft and are capable of redundantly monitoring thousands of signals across most aircraft systems to help pilots prioritize and respond to failures. While there is a lot of groundwork to be built before we can hook up the systems we already have today, a large portion of this groundwork has already been completed.We are in the process of wrapping up the first version of the system, capable of monitoring the most critical systems and emitting voice callouts and some other special sounds.

This first version will include a reworked altitude alert (also known as the “C Chord”), the altitude callouts (“Five Hundred”) now triggered at more accurate heights, and a little-known feature called “intermediate callouts” where the FWCs call out the precise height over ground when too much time has passed since the last call (“One Hundred and Twenty”). It will also feature the “Stall” callout together with the infamous “cricket” noise, but you might find it is very hard to trigger in the normal law supported by our FBW systems today. However, just like in reality the FWCs will be watching and if you ever manage to trick our FBW protections and end up with an unusual angle of attack you will get the appropriate warning.

While those features may sound simple, we have modeled them at an insane level of accuracy, reproducing exact logic found in the real aircraft. This is backed by hundreds of hours of research, countless tests in the real aircraft and study of undocumented behaviours. Nothing is left on the table, and it provides a solid framework for the following versions; we will, following this update, turn our attention to the textual ECAM warnings themselves and the status page.

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

*Editors: Kevin, Valastiri*