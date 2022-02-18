---
title: 'Hydraulics Development Update'
date: 'TBD'
authors:
  - 'Davy'
category: 'UPDATE'
metaImage: '/img/a32nxwing.png'
metaAlt: 'FlyByWire Simulations'
---

## Implemented Features

What’s up in the hydraulics department? Maybe you did not notice, but lately some items already made their way in into the development version.

### Bleed System Interaction

Now that we have a first iteration of the custom bleed system, hydraulics have been modified so they interact with air pressure. In fact, each hydraulic reservoir is air pressurized, so the pumps can work at their best efficiency. The bleed system will provide this air pressure, and any failure to do so will trigger a pump low air pressure fault, and the pumps will realistically lose their efficiency. Up to the point where it will not pump much.

If this kind of air pressure fault appears at cruise level, you’ll lose a lot of hydraulic power. Get the plane to a lower altitude and you will see the hydraulics getting in better shape the more you descend. This is already implemented and you can play with these scenarios using the new hydraulic failures available in the EFB menu.

### Emergency Generator

The blue circuit emergency generator is now simulated and will spin at a valve regulated 12000 rpm to provide electrical power from hydraulic flow. RAT is providing that flow in case of an electrical failure, and will get you safely on the ground and save the day. Remember there is no 3D model for the RAT, but it has been simulated, with only small features missing (the anti-stall system will come later).

### Physical Based PTU

Up to now we were using a simple flow model for the famous Barking dog. But a power transfer unit is far more complicated than just being something that activates at 500psi of pressure difference in a line of code.

In fact, it not always operates as a barking dog, but can also provide hydraulic power in a more continuous manner.
To model this, we switched the PTU to a physical based simulation, which will react to pressure variations and make the PTU mechanical shaft spin in a realistic manner. Should the green or yellow system lose its fluid, PTU will spin ultra fast, and when we will model the temperature, you will quickly get into trouble! All of this will soon be used by the sound engine so the continuous operation of the PTU and its recognizable slow growling sound can really shine.

### Flaps and Slats

Flaps and slats logic was recently brought into our custom systems. Now, it is connected realistically to the hydraulics. These systems are, surprisingly, incredibly complicated systems. Before going into a fully modeled system, which will come later, we first added a medium detailed system that will bring more realism in its hydraulic interactions.

Flaps and slats are respectively moved by 4 hydraulic motors connected through differential gearboxes, all of which are now connected to their corresponding hydraulic lines. Deploying times of flaps and slats will now highly depend on your hydraulic configuration, as they are using a lot of hydraulic flow to move.

Dual engine operation will give you nominal extension times. But if you try to use only the yellow electric pump to deploy both slats and flaps, be prepared to wait a good amount of time for them to get locked at full position.

### Aileron Control

> Why are the flight controls moving in cold and dark situations???

Patience my friends, you were using the default MSFS flight controls!

In a previous [NOTAM](https://flybywiresim.com/notams/development_notam-2021-10/) we talked about cargo door operation using a fully physical based simulation of hydraulic actuators? We will now deploy that system all around the aircraft, so you can have totally realistic flight controls.
As a reminder, the A320 is basically controlled by flight computers that will send commands to hydraulic actuators. This will be fully simulated in the A32NX, where each actuator will receive orders, and will move their surface to a desired position. Since we do enjoy having some fun, we're now able to simulate full hydraulic servo position control loops in real-time. 

Ailerons are the first control surfaces to implement that system. Each aileron is controlled hydraulically by servo actuators, trying to reach a commanded position, as shown below:

![aileron-1](/img/notam-images/feb2022-series/hydraulics/hydraulics.png)

There are two actuators controlling each aileron. One is the master actuator, controlling the position, the other one is a slaved one used in damping mode. Those control modes are simulated for all 4 actuators and will be activated accordingly as commanded by flight computers. The slave/master configuration can be switched following the flight computer state.

![aileron-2](/img/notam-images/feb2022-series/hydraulics/hydraulics2.png)

Note that this is the first implementation step of hydraulic low level.  Flight computer logic is for now a simple placeholder. When it comes to aircraft control, the hydraulic implementation will for now only be visual, and will not impact flight physics. Aerodynamic forces are also not computed yet, so do not be surprised if you see a drooping aileron in flight... More about this in the next section!

Again - patience my friends. Maybe some moving things are better than thousands of words!

https://streamable.com/jmvds0

In the video above you can see the famous aileron droop and aileron position control when hydraulic servos are active. This show clip also demonstrates how the yellow electric pump is fully simulated - as you can hear its pitch changing. What can also be seen is the PTU acting in a continuous manner, except at some point where it reaches the 500psi pressure difference, where it will act on its yellow side displacement control and shout a large bark and greatly impact the electric pump pitch. We plan on improving the soundscape for these features soon!

Now a *more realistic case*: if your plane finds itself upside down while on the ground, obviously the aileron droop will go up! Uh wait… Down… Well you get my point!

https://streamable.com/1p17hj

*[Can we have Benny hill music for that one? :D]*

---

## Coming Soon to Hydraulics

As we progress, we will simulate all control surfaces in the same realistic manner. Experimental version already has some early versions of elevator and rudder hydraulic simulation, including a realistic left/right elevator split. Don't hesitate to give it a try, and see those surfaces drooping or coming to life depending on hydraulic state of the plane.

Even in that early version, we are already simulating the fact that in certain speed/pitch demand conditions, the elevator is commanded by all actuators instead of "one slave/one master" actuator combination, so the surface gets the maximum available power to fight against those massive aerodynamic forces. Sadly, as we talked earlier, the surfaces are not receiving any aerodynamic forces due to MSFS SDK limitations, so that control surfaces will even droop in flight if hydraulic power is lost.

Well, this will soon be sorted out, as we will compute our own aerodynamic model for those control surfaces, so that they truly react to external forces. While in normal operation it would not be noticed, it will start to shine when hydraulics start to fail, and stop providing enough power for the surfaces to respond correctly. This way, the hydraulics will naturally impact flight characteristics as they would in real life.

Here's an early demo of what to expect with that new aerodynamic system. Yes, if there's enough wind, ailerons can droop UP! 

[VIDEO MATERIAL SHOWING WIND ON SURFACES]

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
