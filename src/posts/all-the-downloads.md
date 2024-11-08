---
title: 'All the Downloads! A Story of a Large Release'
date: '2023-12-27'
authors:
  - 'straks'
category: 'INFO'
metaImage: '/img/notam-images/infrastructure/cockpit-header.png'
metaAlt: 'FlyByWire Simulations'
---

Today we are deviating a little from the regular types of NOTAMs that talk about new features or functionality in the FlyByWire Simulations A32NX. We are going to dive into a topic that helps deliver the A32NX to our users: Our Content Delivery Network (CDN).

For most of our users, this infrastructure is hidden while installing or flying the A32NX. However, when an issue occurs in this infrastructure, it becomes very visible as some functionality on the FBW Installer or the aircraft itself will no longer work.

When a new big update is released or announced, our infrastructure must be ready for all the people that want to download the new A32NX release.

## Why a Content Delivery Network?

In a traditional simple download of data (a website, an image, a file, ...), your browser will download that file directly from one server that is hosted somewhere in a data center. This server might be at the other side of the world which could cause the download to take longer.

To optimize performance of downloads, Content Delivery Networks are designed to host the same data in multiple locations around the world. In this case, when you try to download that data, automatically and in the background, your browser will connect to the closest and quickest server for you.

Another advantage is that when a lot of people want to download the same file, the load of all those downloads is spread across the CDN, and not all focused on a single server.

CDNs are used by all large platforms and hosting solutions. Hidden from most users, every time you open an application that uses the internet or a website, chances are really high that you'll be using a CDN.

## FlyByWire Simulations CDN

FlyByWire Simulations uses [Cloudflare](https://cloudflare.com) to host its data in a R2 storage bucket, a service offered by Cloudflare for optimally storing files in a secure and redundant way. This storage is not accessible directly from the internet, so to make the data available to the Installer, we use a Worker in Cloudflare that will execute every time someone wants to download something from our CDN.

That Worker in itself is a simple program that will find the file the Installer is looking for inside the R2 storage bucket, and will send the file back to the Installer. And the advantage of that Worker is that it will be executed in the Cloudflare data center closest (and most efficient) to where the Installer is connecting from. That way, the performance is as optimal as possible.

Our CDN hosts a whole range of data, not just the files needed to install the A32NX, but other data that the Installer uses to keep track of versions and information about the different releases. So not every request to our CDN is used to install or download the A32NX.

## Impact of releasing an improved cockpit

A good example of how heavily our CDN is used and how effective of a system this CDN is, is the release of a big update.

Recently, we announced and released an improved cockpit for the A32NX for the Development version, which caused a lot of people to update the A32NX through the Installer.

Below you can see how that impacts the use of our CDN in multiple graphs. The time in these graphs is all based of UTC+1.

### Bandwidth usage of the CDN

[![Weekly CDN Bandwidth usage](/img/notam-images/infrastructure/worker-bandwidth-weekly.png)](/img/notam-images/infrastructure/worker-bandwidth-weekly.png)

The above graph represents the bandwidth usage per hour for the time period of December 18th, 2023 at 09:00 UTC till December 25th, 2023 at 09:00 UTC.

You can see that earlier in the week the bandwidth on our CDN was rather low. It goes up during the day in Europe and US and it goes down a little when less people are trying to download data from the CDN.

On Thursday December 21st, at around 22:49 UTC we posted an announcement on the FlyByWire Simulations Discord server and immediately a big peak can be seen of all the people that are now downloading this new update. There's a lot of bandwidth usage, because the update in itself is pretty big as it contains a lot of new textures and other data. This peak reaches **1.36 Terabytes** of data served in one hour.

After an initial surge of downloads, things slow down a bit until the news spreads more and during the day on Friday an even higher peak is seen on December 22nd, at 16:00 UTC of **2.1 Terabytes** of data served in one hour.

And finally we hit the weekend, which is always a more busier time for our CDN, as a lot of people will only fly (and thus update) the A32NX during the weekend. During this time, a lot of people have already updated, so the bandwidth usage, while high, is not reaching new peak values.

### Total requests

[![Monthly CDN Requests](/img/notam-images/infrastructure/total-requests-monthly.png)](/img/notam-images/infrastructure/total-requests-monthly.png)

The next graph shows the number of requests our CDN receives per hour for the time period of November 25th, 2023 at 09:00 UTC till December 25th, 2023 at 09:00 UTC.

As you can see, the use of our CDN fluctuates heavily based on the time of day, and the day of the week. Every day we reach a peak during the time when most of Europe and the US are awake (around 17:00 UTC) and more users are getting data from our CDN. Additionally, during the weekends there's more requests then during the week. Neither of these are unexpected, as people tend to fly more in the evening or in the weekend.

Just as with the CDN Bandwidth usage, you can see where the initial announcement was made. By that time the number of requests had already started going down as it was late in Europe. Once the announcement was made, there's the same peak as was seen in the previous graph as people wanted to get the latest version.

The other two peaks that follow show that once news started spreading, a lot of people were interested in downloading this new update. Even during the weekend the amount of requests significantly increased because of the interest in the new cockpit.

### CDN Caching

[![Monthly CDN Bandwidth caching](/img/notam-images/infrastructure/bandwidth-caching-monthly.png)](/img/notam-images/infrastructure/bandwidth-caching-monthly.png)

We'll end with a graph which represents the bandwidth usage per day for the time period of November 25th, 2023 at 00:00 UTC till December 25th, 2023 at 00:00 UTC.

This is another view on the bandwidth usage, what's important for this graph is to notice the cached bandwidth versus uncached.

For a CDN to work as optimized as possible, it's important that the data should be stored (cached) as close as possible to the user. Uncached data means that while the Worker of the CDN is running close to the user, the data needs to be copied from a remote location, slowing down the download a little bit.

At the peak of the graph, between Friday 22nd, 2023 at 00:00 UTC and Saturday 23rd, 2023 at 00:00 UTC, a total of **28 Terabytes of data** was served by the CDN in a single day, of which **26.47 Terabytes** was cached data. This means 95% of all the downloads were fully optimized.

## Conclusion

Our team doesn't only develop the A32NX as an add-on to Microsoft Flight Simulator, we also work on optimizing the experience of our users while downloading and installing the A32NX. This behind-the-scenes work is also crucial as otherwise we wouldn't be able to deliver the cool features and improvements to you!

All of this infrastructure and hosting are financed from the [donations from generous users](https://opencollective.com/flybywire), which we immensely appreciate, as we all volunteer our time and effort together.

Hopefully the above helped you understand a little of what goes on behind the scenes of providing our users with new updates of the aircraft. There's a lot more to discuss on the infrastructure, including for instance the API which is used for the TELEX system and the EFB weather information.

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
