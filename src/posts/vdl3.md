---
title: 'ATSU VDL3 Simulation'
date: 'TBD'
authors:
  - 'Sven [de en]'
category: 'UPDATE'
metaImage: '/img/notam-images/march2022/dcdu-dep-req.png'
metaAlt: 'FlyByWire Simulations'
---

## What's New About the Datalink?

In the past few months, we've implemented the Air Traffic Service Unit (ATSU), which is responsible for aircraft communications.
The ATC and AOC communications are managed inside the ATSU, where it then prioritizes voice and datalink transmissions.

The ATSU manages different kinds of data and voice communications, like Very-High Frequency (VHF),
High Frequency (HF) and SATellite COMmunication (SATCOM).

## Future Air Navigation System - FANS

Airbus have introduced different systems for the communication between the flight crew and Air Traffic Controllers (ATC).
The global standard is called the Future Air Navigation System, and the specific Airbus implementations are named FANS-A/A+,
FANS-B/B+ and FANS-C. The '+' variants are extensions of the corresponding standards.

In most areas around the world FANS-A is used, with Europe using the FANS-B standard.
An [Airbus Safety Report](https://safetyfirst.airbus.com/app/themes/mh_newsdesk/documents/archives/the-future-air-navigation-system-fans-b.pdf) gives a good overview of which areas in the world use which system.

Some aircraft only support FANS-A/A+ or FANS-B/B+ - Atlantic crossings require FANS-A/A+, for example.
Therefore, Airbus developed a system that allows communication through all three types of FANS standards. with the aircraft selecting the correct system based on the connection to the ground station.

We've decided to follow the current Airbus implementation, and have implemented FANS-A+ and FANS-B+ in the A32NX with an automatic mode selection.
The mode selection is implemented via the ATC station which accepted the aircraft's logon request, with the FANS-A+ and FANS-B+ being comparable to real world coverage.

## Very-High Frequency Digital Link Mode 3 - VDL3

VHF communication can be simulated through a simple Line-of-Sight (LoS) simulation between air and ground-stations.
Line of Sight means exactly that - if the path is unimpeded by terrain, communication between the two stations is possible.

[![Line-of-sight calculation](/img/notam-images/may2022/LoS.png)](/img/notam-images/may2022/LoS.png)

We simulate that all international airports have the capability to provide datalink communication via SITA or ARINC, which are
the most popular system providers for data exchange between ground and air-stations.

Based on the current status of the A32NX, we've chosen to simulate that all international airports are capable of the maximum datarate.
The datarate is mainly based on distance and the theoretical maximum datarate of 31.5 kilobit per second.

The VDL standard provides several sub-standards, and we decided to implement VDL3. While it is never used in the real world, it is comparable to currently used standards, and allows an easier and faster simulation over the other standards.

The VDL defines different chunks for the different transmission times per second.
We follow the 1V3D pattern per 120 milliseconds. It means that the first chunk is used for voice communication and the following
three are used for datapacket transmissions. These chunks are equally assigned to all active communication partners.

[![VDL3 message slots](/img/notam-images/may2022/VDL3-Slots.png)](/img/notam-images/may2022/VDL3-Slots.png)

We assume that all air and ground stations require one data-slot for the communication, in order to avoid the complex handshaking protocol as is required in the real world.
This handshaking cannot be simulated due to missing knowledge about required data slots of remote-stations.
Based on all aircraft and ground-stations in the area of the A32NX it is possible to calculate the number of required slots until
every station had the chance to send one chunk. The time between all available chunks defines the delay required for a chunk size of 496 bits, where the datarate is then derived from.

Due to the half-duplex transmission of VHF communications, we are managing the chunks for ground-to-air and air-to-ground communication in seperate blocks.
This allows a realistic simulation for simultaneous transmissions from two different stations.
Multiple messages in the same direction are handled in a first come, first served manner.

This chunk estimation is updated every thirty seconds. This allows a realistic simulation based on the aircraft around the A32NX and reachable ground-stations. Due to SATCOM and HF communications not being simulated fully, we are limited to running a minimal datarate, and it is currently not possible to lose datalink communication.

## Future development

Later versions will simulate realistic SATCOM and HF datalink communications, with the ATSU automatically selecting the type of communications to be used.

We are also looking to improve the Line of Sight estimation, as soon as terrain maps are made available. At the moment terrain is ignored due to a lack of data. Having access to this data will allow us to calculate if either terrain or buildings are interfering with the communication between the A32NX and any ground stations.

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

*Editor: Valastiri, DirtyFormal*

