---
title: 'A380X: Full Speed Ahead'
date: '2024-10-22'
authors:
  - 'Valastiri, 2cas, floridude, Tarek'
category: 'ANNOUNCEMENTS'
metaImage: '/img/notam-images/a380x/a380x-a32nx.png'
metaAlt: 'A380X: Full Speed Ahead'
---

## Introduction

FlyByWire Simulations was created with the goal of elevating the default A320 experience in Microsoft Flight Simulator (MSFS) 2020. Over the past four years, we’ve grown into a community of over 170 dedicated contributors for our first project: the A32NX. Our open-source project has allowed our team to develop essential knowledge in programming, sound design and aircraft modelling.

We have also set our sights on something bigger - the A380X. Announced four years ago, this project has evolved alongside our continuous updates to the A32NX, bringing our advanced systems, refined sounds, and an intricately detailed interior and exterior model to the simulator.

This NOTAM aims to set clear expectations for our end-users and contributors regarding what to expect from the A380X. We wish to be as transparent as possible to ensure that everyone is fully informed on this release’s capabilities, limitations, and opportunities.

## Expectations for End-Users

To be crystal clear: the upcoming A380X “developer preview” release - **will be in an open alpha stage**. While some features will be operational and we can under most circumstances guarantee a decent A to B flight on VATSIM, many systems are still in active development. Features that are currently inoperative will be added over time in order to achieve our primary goal to simulate all features from the real aircraft.

Our goal with this release is to enable access to outside contributors/developers, and to provide you with an early look at the aircraft. In the meantime, much like the A32NX, we will continue to build toward a more complete experience. This is extremely similar to the previous process of the A32NX’s development through Years 1-2 (2021/2022).

Regarding performance and system requirements in this open alpha period, please note that the current 3D model and system code is not yet fully optimised, and we are pushing the limitations of the MSFS 2020 Engine in both graphical fidelity and system depth. Expect performance to be on average 25% lower than in the A32NX across the board as a point of reference.

Here are the preliminary system requirements for the first alpha release in MSFS 2020.

**Minimum (1080p30 Low)**
- CPU: Intel i5-4460 or Ryzen 3 1400
- GPU: Nvidia GTX 1060 6GB or AMD RX 480 8GB
- Memory: 8GB
- Storage: 28GB* free space (HDD or SSD)

**At least 4-8GB needed for pagefile* (virtual memory)

**Recommended (1440p30 High)**
- CPU: Intel i5-8400 or Ryzen 5 3600
- GPU: Nvidia RTX 3060 12GB or AMD RX 6600 XT 8GB
- Memory: 16GB
- Storage: 20GB free space (SSD)

**Flying By Wire (1440p/4K DLSS 60 High/Ultra)**
- CPU: Ryzen 7 7800X3D
- GPU: RTX 4080 Super 16GB or 7900 XTX 24GB
- Memory: 32GB
- Storage: 20GB free space (SSD)


Expect future updates to roll out frequently with new features and improvements as we obtain feedback and garner more interest in the project from a developer standpoint.

> Please note this will not be a finished/polished product. The plane will not be unflyable or broken, however during further development, bugs will appear that may require some temporary workaround or procedure to mitigate.
If you attempt to break the plane deliberately, you will likely succeed i.e. exceeding normal law protections, locking the A/P in an invalid state, or otherwise exiting normal flight limits. In this regard, it will be fragile when compared to the current state of the A32NX -  as a reference.

## Developer and Contributor Expectations

For our developer community, we have been excited to open up the A380X project to external contributors through our GitHub repository. If you are a developer eager to make an impact, this is your chance to join the FlyByWire team in shaping the future of this iconic aircraft. We welcome contributions, bug fixes, and system enhancements, and will provide guidelines on how to collaborate effectively.

All are welcome, and we are always willing to share knowledge and experience to those who are willing and eager to learn and get involved.

## A380X Features and Capabilities

With the above in mind, we shall detail the current functionality of the A380X alpha preview release. Our developers have worked hard to implement a number of core systems to allow for an immersive flight.

#### Flight Management and Navigation Systems

Custom flight management system (FMS), based on the updated fms-v2 implementation. All ARINC424 leg types are supported, with an aim for precise and accurate drawing of all procedures, robust sequencing of waypoints and accurate MFD F-PLN pages, including support for holdings.

#### Flight Displays and Electronic Checklists

Accurate representations of the Primary Flight Display (PFD), Navigation Display (ND), Engine and Warning Display (EWD), and System Display (SD) featuring precise MEMOs for numerous systems. We’ve also implemented electronic checklists for both normal procedures and some abnormal procedures, along with QNH pre-selection in the Flight Control Unit (FCU).

#### Core Aircraft Systems and Failure Simulations

Systems including electrical, pneumatic, environmental (air conditioning, ventilation, and pressurization), APU, and fire protection are fully modelled, including their inner components, logic, and communication protocols. Over 140 failures are available via the EFB, though, as with everything else, full simulation is not always guaranteed.

#### Flight Control Surfaces and Wing Flex Simulation

Flap load relief systems (FLRS) and auto extension/retraction (AES/ARS) have been accurately modelled with hydraulic and electrical actuation of flight control surfaces, though flaps and slats are still to be completed. The triple aileron simulation on each wing creates the “Valse Des Ailerons” (VDA/Aileron Dance). Additionally, a custom physics-based flex system for wings, rudder, and elevator has been implemented. The wings, simulated as soft bodies, react to fuel load, wing loading during take-off, and feature accurate and responsive dynamic wing flex.

#### Protection Features and Enhanced Awareness

Brake to Vacate (BTV) plays a crucial role in automatically managing braking to reach a runway exit preselected by the flight crew. It also enhances pilot awareness of braking distances before and during landing.

Runway Overrun Warning/Protection (ROW/ROP), which helps minimise the risk of runway overrun at landing. The ROW and ROP are available as soon as the autobrake mode is armed and can be used independently from the BTV.

**ROP**
[![a380-notam-media-1.png](/img/notam-images/a380x/a380-notam-media-1.png)](/img/notam-images/a380x/a380-notam-media-1.png)

Onboard Airport Navigation System (OANS), which enhances the flight crew's situational awareness by displaying a moving map of the airport. Additionally, we implemented Radio Altimeters (RAs) simulated as three independent units, the Ground Proximity Warning System (GPWS) with messages on the Primary Flight Display (PFD), and the Terrain Display featuring A380-specific animations.

**OANS on the Ground**
[![a380-notam-media-4.png](/img/notam-images/a380x/a380-notam-media-4.png)](/img/notam-images/a380x/a380-notam-media-4.png)

**OANS in the Air**
[![a380-notam-media-2.png](/img/notam-images/a380x/a380-notam-media-2.png)](/img/notam-images/a380x/a380-notam-media-2.png)

#### Landing Gear and Taxi Systems

Tilting landing gear, with realistic NWS (Nose Wheel Steering) and BWS (Body Wheel Steering), with high-detail modelling and textures, powered by 5000 PSI Hydraulic lines, valves and actuators which are fully and realistically simulated. 

We have also managed to implement HCF (Heading Control Function) which assists taxi operations by countering any crosswind or ground slope without any pilot input.

[![a380-notam-media-3.png](/img/notam-images/a380x/a380-notam-media-3.png)](/img/notam-images/a380x/a380-notam-media-3.png)

#### FlyPadOS v3 and Aircraft Configuration

FlyPadOS v3 remixed with A380X features such as the throttle calibration for 4 throttles/2 throttle/1 throttle hardware configurations, payload weight and balance page with  Main and Upper Deck divided into 4 Class configuration: Economy, Premium Economy, Business and First Class Suites and with the corresponding refuelling page.
Support for default ground services, and preliminary support for GSX included either in the initial release or soon after.

And much, much more.

### A Word on Textures and Models

Our modelling and texture team has invested thousands of hours into crafting an experience that feels as realistic as possible, both inside and outside the cockpit. Repsol has led the way in creating a custom-built model in conjunction with Mike who has textured with photorealism using the latest Adobe Substance Painter tools. We have leveraged actual photos as the base texture and the associated roughness maps using clever techniques learned over time from experimentation within the simulator and how it “looks” in sim versus real life.

These insane textures are a result from Mike’s experience in real life flying aircraft, as well as the constant positive feedback from our modelling team for the past 3 years of development.

**Note:** Using clear skies in MSFS 2020 comes with a skybox texture which ends up washing out our textures.

The modelling team hopes that you enjoy the visual work that brings to life the A380X in the simulator from their thousands of hours of volunteer time.

### INOP Systems

The A380X is rated as capable for point A to point B on VATSIM but the development team would like to point out that much like in the past with the A32NX development process some systems may not be operable from the start.

The full list of INOP systems will be available in our documentation at a later time. We will be updating this list as we progress through the development of the A380X.

## Tutorials and Documentation

To assist users in flying, our beginner's guide will be released alongside the aircraft. Our documentation team will be working with type-rated A380 pilots to ensure that every stage of flight is covered to get you from point A to point B.

This project will evolve with time, releasing new features and adding more functionality to the A380X.

## MSFS 2024 Compatibility

While we know many are eagerly awaiting the release of MSFS 2024, it is important to note that a 2024-specific version of the A380X will not immediately launch with it. It has been revealed that MSFS 2024 does include built-in backwards compatibility with MSFS 2020 addons, and while the 2020 version of the A380X may be loaded into the new simulator on day 1, we cannot guarantee that the functionality that exists in MSFS 2020 will translate to MSFS 2024.

Adapting the A380X for MSFS 2024 will require some significant effort due to differences in system requirements and optimizations needed for the 3D model. Although we plan to make this transition as smooth as possible, it could take a few weeks or months depending on the required changes.
Importantly, since Career mode will not be supported outside the marketplace and we have no plans to join the marketplace (as outlined in our [Marketplace Announcement NOTAM](https://flybywiresim.com/notams/marketplace-announcement/)), this remains a hard limitation for the foreseeable future.

Regarding how long compatibility development will take, we will be sticking with no timelines, no stated delivery date approach and we thank you for your patience and understanding.

## Conclusion

It has been a long and exciting journey for us, but this is merely the beginning for the A380X.
We would like to extend a heartfelt thank you to all our contributors and the flight sim community from all of us at FlyByWire, for your ongoing support and feedback, patience and understanding. See you all in the skies above!

---

## General Information

Stay up to date with information from FlyByWire Simulations by following our social media!

- [Twitter](https://twitter.com/FlyByWireSim)
- [Facebook](https://www.facebook.com/FlyByWireSimulations/)

If you require support or would like to submit a bug report please see the links below:

- [Support Guide](https://docs.flybywiresim.com/aircraft/support/)
- [Discord Support](https://discord.gg/flybywire)
- [GitHub Issues](https://github.com/flybywiresim/a32nx/issues/new/choose)

When submitting an issue or asking for support to do the following:

- Visit our [Reported Issues Documentation](https://docs.flybywiresim.com/aircraft/support/known-issues/) for common problems and workarounds.
- Ensure that your issue has not already been reported on our GitHub.

Download the latest version of the A32NX & A380X:

- [Installer](https://api.flybywiresim.com/installer)
- [Standalone Versions](https://flybywiresim.com/downloads/)

---

*Media in this article were provided by floridude, Tarek. They retain the exclusive rights.*

*Editors: Commander Ga, Bernardo, Davy, RogePete*
