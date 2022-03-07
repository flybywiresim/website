---
title: 'Feature Updates and Other Projects'
date: 'TBD'
authors:
  - 'BenW'
  - 'Cdr_Maverick'
  - 'Kevin'
  - 'Sven [de en]'
  - 'Valastiri'
category: 'UPDATE'
metaImage: '/img/a32nxwing.png'
metaAlt: 'FlyByWire Simulations'
---

## Overview

We hope that you have enjoyed the series of in-depth NOTAMs we published in February. As the team at FlyByWire Simulations continues to release new features and fine-tune those we already have, we never stop thinking of new ways to improve the experience flying the A32NX.

Keeping up with the many features we release each day onto our Development branch can be a little daunting. With that in mind this NOTAM calls to attention previously released features and updates as well as a sneak peek into flyPadOS v3! Additionally, we shine a light on the state of a couple of our other FlyByWire projects - Discord Bot and Documentation.

---

## Feature Updates

### Display Typeface Development

We believe in a holistic approach to aircraft development - we do not sacrifice one aspect of the aircraft for another, and this means we put as much attention into visuals as we do into systems. As part of this quest for visual accuracy, we have spent countless hours creating custom typefaces that replicate the look of Airbus’ many display fonts. At last count, there are five cockpit display typefaces on both the A320 and A380 - the EIS font, the ISIS font, the FMS font (A320 only), the DCDU font (A320 only) and the RMP font (A380 only). This does not include the seven-segment displays dotting the cockpit panels as well as the A380 EFIS control panel LCDs.

> How do we do them, and where do we start?

First, we determine whether the font is anti-aliased. If it is, we look for head-on closeups of the glyphs (letters, numbers and symbols) and carefully trace each glyph. If not, we look for underexposed display shots which allow us to discern every pixel on the glyphs, then trace the outlines of each glyph (the ‘path’) to create a pixel-perfect font. Once we are done with this, we determine the amount of spacing between letters, which in this case is consistent for all characters within each of the fonts since all of aforementioned fonts are monospaced.

Next, we export them as SVGs into a font editing software. Here, we adjust the size and spacing of the glyphs, as well as fix font formatting errors (e.g. path self-intersections, missing extremas, path direction issues and non-integral point values). Finally, we export them as .ttf files for use on the sim aircraft’s displays.

The following is a summary of the progress we have made:

- The EIS font has been merged into the aircraft
- The ISIS font is in the works
- The DCDU fonts are being reworked
- The A380 RMP fonts are in advanced progress 
 
Here are some previews of the ISIS and RMP fonts:

![typeface 1](/img/notam-images/march2022/typeface-1.png)
![typeface 2](/img/notam-images/march2022/typeface-2.png)

One last thing: we rework our fonts as new information and references come, some of which have fundamentally changed our understanding of the displays’ workings (e.g. subpixel array design). As an example, here are photos of our DCDU font before and after reworking:

![typeface 3](/img/notam-images/march2022/typeface-3.png)
![typeface 4](/img/notam-images/march2022/typeface-4.png)

In this case, it has allowed us to go one step further and reach the final frontier in display typeface replication - previously uncharted territory in the flight simulation industry - sub-pixel accuracy.

### CPDLC with Hoppie

We implemented CPDLC (Controller-Pilot-Datalink-Communication) in the A32NX based on Hoppie's ACARS system. Thereby it is possible to request route clearances on ground (DEPART REQ) and e.g. over the Atlantic (OCEANIC REQ). The whole implementation is based on a realistic realization of the ATS 623 standard. Furthermore, instructions from the air traffic controllers can be received and answered via the DCDU. We took care to display the data in the DCDU as realistically as possible.

![mcdu-atc-comm2](/img/notam-images/march2022/mcdu-atc-comm2.png)

![dcdu-dep-req](/img/notam-images/march2022/dcdu-dep-req.png)

In the next steps, FANS-A and FANS-B systems are implemented for a realistic simulation. Depending on the responsible sector, various communication functions will be activated. The first step is to implement requests that can be sent from the pilot to the air traffic controller. Our goal is a realistic ATSU implementation that also allows automatic responses to requests to be prepared and displayed to the pilot for review and adjustment.

We are also working on a realistic simulation of data link communications based on the VHF data link specification as implemented in real communications.
This will result in different communication times depending on the other aircraft, available ground stations and distances to the stations. Depending on the situation, this can last from a few seconds to several minutes and is always simulated accordingly.

### MCDU Web Interface
We have recently launched a new feature that has seen incredible popularity amongst our users; the MCDU web interface. It provides a convenient and easy to use web connection to run the MCDU over a web browser on any computer located on your local network.

You can read up on this new functionality here:
[MCDU Web Interface Guide](https://docs.flybywiresim.com/fbw-a32nx/feature-guides/web-mcdu/)

Recent updates to this feature based on user feedback include an updated A32NX MCDU image, button click sounds, day and night mode and the CLR Hold function (to delete the scratchpad when holding the CLR button).

![web-mcdu](/img/notam-images/march2022/mcdu-day-night.png)

We have used this first development as a means of evaluating our strategy regarding custom instruments. We are currently working on developing custom high-speed protocols for offloading instrument rendering onto other programs or even other devices, over a network, to offer better possibilities for home cockpit integration.

### Nose WheelTiller
We implemented a way to use the tiller independently of the rudder utilising custom hydraulic steering. Based on our QA tests and feedback from our type rated pilots, this is a great start that helps accurately represent realistic situations when taxiing the aircraft. You can read more about how to use this feature and associated information in the guide below.

[Nose Wheel Tiller Guide](https://docs.flybywiresim.com/fbw-a32nx/feature-guides/nw-tiller/)

### Stored Waypoints
We also implemented stored waypoints recently allowing pilots to enter in custom waypoints to expand your data management for your flights. This allows for pilots to create, enter, and utilise pre-planned waypoints with a designated name such as “MYWP1” without having to type in latitude/longitude coordinates mid-flight.
You can read more about how to use this feature and associated information in the guide below.

[Stored Waypoints Guide](https://docs.flybywiresim.com/pilots-corner/advanced-guides/data-management/)

![Stored Waypoints](/img/notam-images/march2022/stored-waypoints.png "Stored Waypoints")

### flyPadOS v3
We have been working hard on a new version of the flyPad featuring a beautiful new design and many additional requested features.

- Better navigation handling remembering previously visited tabs and input fields
- Ability to pin charts
- Checklists
- Enhanced pushback features
- and much more!

Below is a preview of the upcoming update. (Work in progress and final layout may look different.)

![efb-checklist](/img/notam-images/march2022/efb-checklist.png)

![efb-atc](/img/notam-images/march2022/efb-atc.png)

![efb-charts](/img/notam-images/march2022/efb-charts.png)

![efb-dashboard](/img/notam-images/march2022/efb-dashboard.png)

---

## Other Projects

### Discord Bot

The FlyByWire Discord bot has been updated to discord.js v13 and API v9. As a result of this update the bot now works in threads, making it even more of an invaluable tool for our Community Support Team to help users diagnose issues! While there may not be many changes to the functionality of the bot, we have laid the foundation to add many great features in the future! 

Now that the update is complete, we have some exciting projects in the pipeline that we have started to work on - one of them being music integration! It would be beneficial for more people to join the Bot Development Team, so we can keep up with the regular workload of adding and updating commands to be used across the Discord server!

If you are interested in helping out with some of these projects or adding and updating support commands while the team is busy with other projects, please let us know in the #discord-bot channel (*you may need to obtain the programmer role from the #roles channel first*). Alternatively, contact the following users directly:

- BenW#8484
- █▀█ █▄█ ▀█▀#2123
- oim#0001

You can see our current projects and commands that need creating on our [Project Board](https://github.com/flybywiresim/discord-bot/projects/1). If you have an idea for a command or feature you can add it to our [GitHub Issues](https://github.com/flybywiresim/discord-bot/issues).

### Documentation

We have recently completed a branding update to our [documentation website](https://docs.flybywiresim.com/) featuring our new logo and an updated color palette. If you are not already aware, FlyByWire documentation provides a wealth of knowledge for support, technical issues, A32NX feature guides, aircraft information, and systems information.

The site is continuously updated, and we fact-check information with our pilots and developers for accuracy and to ensure we publish useful and educational information. Our pilots corner section contains our [Beginners Guide](https://docs.flybywiresim.com/pilots-corner/beginner-guide/overview/) which should not be mistaken for only novice pilots. It contains relevant information on all of our implemented systems with the A32NX. We also have our [Interactive Flight Deck](https://docs.flybywiresim.com/pilots-corner/a32nx-briefing/flight-deck/) where you can click on any panel onboard the aircraft and read more about a specific system.

We currently have a backlog of pending documentation and guides. If you are interested in helping to expand the scope of our documentation site please feel free to take a look at either our project board or issues list below. You can visit the GitHub repository for information and resources on how to contribute to the project.

- [Contribute](https://docs.flybywiresim.com/dev-corner/development-projects/documentation/)
- [Project Board](https://github.com/flybywiresim/docs/projects/1)
- [Issues List](https://github.com/flybywiresim/docs/issues)
- [Docs GitHub](https://github.com/flybywiresim/docs)

Please contact the following users on Discord if you need any assistance helping out with improving and extending our documentation.
- Valastiri#8902
- Cdr_Maverick#6475

We hope you find our documentation site a great resource for all your flights with us at FBW.
