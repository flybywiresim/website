---
title: 'ATSU VDL3 Simulation'
date: 'TBD'
authors:
  - 'Sven [de en]'
category: 'UPDATE'
metaImage: '/img/notam-images/may2022/vld3header.png'
metaAlt: 'FlyByWire Simulations'
---

## What's New About the Datalink?

Over the past few months, we have been hard at work implementing the Air Traffic Service Unit (ATSU), which is responsible for aircraft communications.
ATC and AOC communications are managed within the ATSU, where it then prioritises voice and datalink transmissions.

The ATSU manages different kinds of data and voice communications, like Very-High Frequency (VHF),
High Frequency (HF) and SATellite COMmunication (SATCOM).

## Future Air Navigation System - FANS

Airbus have introduced different systems for the communication between flight crew and air traffic control (ATC).
The global standard is called the Future Air Navigation System, and the specific Airbus implementations are named FANS-A/A+,
FANS-B/B+ and FANS-C. The '+' variants are extensions of the corresponding standards.

Most of the world uses FANS-A, while Europe uses FANS-B.
[This Airbus safety report](https://safetyfirst.airbus.com/app/themes/mh_newsdesk/documents/archives/the-future-air-navigation-system-fans-b.pdf) gives a good overview of which 
areas in the world use which system.

Some aircraft only support FANS-A/A+ or FANS-B/B+ - Atlantic crossings require FANS-A/A+, for example.
Therefore, Airbus developed a system that allows communication through all three types of FANS standards, with the aircraft selecting the correct system based on the connection to the ground station.

We decided to follow this implementation and simulate FANS-A+ and FANS-B+ in the A32NX with automatic mode selection.
The mode selection is implemented via the ATC station which accepted the aircraft's logon request, with the FANS-A+ and FANS-B+ being comparable to real world coverage.

## Very-High Frequency Digital Link Mode 3 - VDL3

VHF communication can be simulated through a simple Line-of-Sight (LoS) simulation between air and ground-stations.
Line of Sight means exactly that - if the path is unimpeded by terrain, communication between the two stations is possible.

[![Line-of-sight calculation](/img/notam-images/may2022/LoS.png)](/img/notam-images/may2022/LoS.png)

Our simulation assumes that all international airports can provide datalink communication via SITA or ARINC, which are
the most popular system providers for data exchange between ground and air-stations.

Based on the current status of the A32NX, we have chosen to simulate all international airports being capable of the maximum datarate.
The datarate is mainly based on distance and the theoretical maximum datarate of 31.5 kilobits per second.

The VDL standard provides several sub-standards, and we decided to implement VDL3. While it is never used in the real world, it is comparable to currently used standards, and allows an easier and faster simulation over the other standards.

The VDL defines different chunks for the different transmission times per second.
We follow the 1V3D pattern per 120 milliseconds. It means that the first chunk is used for voice communication and the following
three are used for datapacket transmissions. These chunks are equally assigned to all active communication partners.

The following image illustrates the TDMA slot system with the different nodes.
The yellow slots describe voice slots that are exclusivly used to transmit voice messages and
green slots describe the slots that are used to exchange Up- and Downlink messages.
The red slot is defined as a management slot that defines if the last block is used either for voice or data transmissions.

[![VDL3 message slots](/img/notam-images/may2022/VDL3-Slots.png)](/img/notam-images/may2022/VDL3-Slots.png)

We assume that all air and ground stations require one data-slot for the communication, in order to avoid the complex handshaking protocol as is required in the real world.
This handshaking cannot be simulated due to missing knowledge about required data slots of remote-stations.
Based on all aircraft and ground stations in the vicinity of the A32NX, it is possible to calculate the number of required slots until
every station has had the chance to send one chunk. The time between all available chunks defines the delay required for a chunk size of 496 bits, from which the datarate is 
then derived.

Due to the half-duplex nature of VHF communication transmissions, the system manages the chunks for ground-to-air and air-to-ground communication in separate blocks.
This allows a realistic simulation for simultaneous transmissions from two different stations.
Multiple messages in the same direction are handled in a first come, first served manner.

This chunk estimation is updated every thirty seconds, allowing a realistic simulation based on the aircraft around the A32NX and reachable ground stations. Due to SATCOM and HF communications not being fully simulated, we are limited to running a minimal data rate and it is currently not possible to lose datalink communication.

## Future development

Later versions will simulate realistic SATCOM and HF datalink communications, with the ATSU automatically selecting the type of communications to be used.

We are also looking to improve line-of-sight estimation as soon as we can access terrain data. At the moment, the system ignores terrain effects due to a lack of data. Having access to this data will allow us to calculate whether either terrain or buildings are interfering with the communication between the A32NX and any ground stations.

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

