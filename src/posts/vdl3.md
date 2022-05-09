---
title: 'ATSU VDL3 Simulation (Working Title)'
date: 'TBD'
authors:
  - 'Sven [de en]'
category: 'UPDATE'
metaImage: '/img/notam-images/march2022/dcdu-dep-req.png'
metaAlt: 'FlyByWire Simulations'
---

## What's all about the datalink?

We've implemented in the last few months the Air Traffic Service Unit (ATSU).
This system is responsible for the communication in the aircraft.
The ATC and AOC communication are managed inside the ATSU and it prioritizes voice and datalink transmissions.

It manages all different kinds of data and voice communication, like Very-High Frequency (VHF),
High Frequency (HF) or the SATellite COMmunication (SATCOM).

## Future Air Navigation System - FANS

Airbus introduced different systems for the communication between the flight crew and the Air Traffic Controllers (ATC).
The global standard is named Future Air Navigation System and the specific Airbus implementations are named as FANS-A/A+,
FANS-B/B+ and FANS-C. The '+'-variants are extensions of the corresponding standards.

Most areas in the world use the standard corresponding to FANS-A, but Europe uses FANS-B.
An Airbus [safety report](https://safetyfirst.airbus.com/app/themes/mh_newsdesk/documents/archives/the-future-air-navigation-system-fans-b.pdf) gives a good overview which areas in the world use which system.

Some aircrafts support only FANS-A/A+ or FANS-B/B+. It is for example required to support FANS-A/A+ as soon as the Atlantic will be crossed.
Therefore, Airbus developed a system that allows to communicate via all three types of FANS communication and selects the correct system based on the connection to the ground station.

We've decided to follow the current Airbus implementations and implemented FANS-A+ and FANS-B+ with an automatic mode selection.
The mode selection is implemented via the ATC station which accepted the aircraft's logon request.
Based on the ATC IDs are the FANS-B+ and FANS-A+ comparable to the current real world coverage.

## Very-High Frequency Digital Link Mode 3 - VDL3

The VHF based communication is can be simulated via a simple line-of-sight (LoS) simulation between air- and ground-stations.
LoS means that a line between the sender and receiver is defined and a communication is possible if no obstacle intersects the line.

[![Line-of-sight calculation](/img/notam-images/may2022/LoS.png)](img/notam-images/may2022/LoS.png)

We simulate that all international airports have the capability to provide datalink communication via SITA or ARINC which are
the most popular system providers for data exchange between ground- and air-stations.

Based on the current position of the A32NX and all reachable international airports is the maximum datarate simulated.
The datarate is mainly based on the distance and the theoretical maximum datarate of 31.5 kilobit per second.

The VDL standard provides several standards, and we decided to implement VDL3. It is never used in the real world,
but is comparable to currently used standards and allows an easier and faster simulation than other standards.

The VDL defines different chunks for the different transmission times per second.
We follow the 1V3D pattern per 120 milliseconds. It means that the first chunk is used for voice communication and the following
three are used for datapacket transmissions. These chunks are equally assigned to all active communication partners.

[![VDL3 message slots](/img/notam-images/may2022/VDL3-Slots.png)](img/notam-images/may2022/VDL3-Slots.png)

We assume that all air- and ground- stations require one data-slot for the communication to avoid a complex handshaking simulation as it is done in the real world.
This handshaking cannot be simulated due to missing knowledge about required data slots of remote-stations.
Based on all aircraft and ground-stations in the area of the A32NX is it possible to calculate the number of required slots until
every station had the chance to send one chunk. This time between to available chunks defines the delay in with a chunk size of 496 bits is it possible to calculate the datarate.

Due to the half-duplex characteristic of the VHF communication are we managing the chunks for ground-to-air- and air-to-ground-communication in seperate blocks.
This allows a realistic simulation for simultaneous transmissions from two different stations.
But multiple messages in the same direction are handled in a first-come-first-serve manner.

This chunk-estimation is updated every thirty seconds. This simulation allows a realistic simulation based on aircraft around the A32NX and reachable ground-stations. Due to a missing SATCOM- or HF-simulation is the minimal datarate currently limited, and it is impossible to lose the datalink communication.

## Future development

Later versions will simulate a realistic SATCOM- and HF-datalink-communication which allows a realistic ATSU implementation.
The real ATSU selects automatically which type of communication is used.

An other improvement will be the LoS estimation as soon as terrain maps are available. At the moment are mountains, etc.
ignored due to a lack of data. With terrain data is it possible to analyse if mountains or high buildings are interfering
the communication between the A32NX and the ground stations.
