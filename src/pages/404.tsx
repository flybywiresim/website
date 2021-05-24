const Custom404 = () => (
    <section>
        <div className="flex flex-col min-h-screen mx-auto justify-center max-w-md md:max-w-4xl text-center">
            <h5 className="text-9xl text-blue-light font-bold">404</h5>
            <h2 className="mt-8 text-4xl font-bold">
                We don&apos;t know where the baggage is! It seems like the URL that you requested from us doesn&apos;t exist.
            </h2>
            <h1 className="mt-4 text-xl text-grey-light font-medium">
                If you believe this was a mistake, reach out to us through our Discord,
                or return to the homepage.
            </h1>
        </div>

        <video
            className="absolute top-0 h-screen object-cover w-screen opacity-10"
            src="https://cdn.flybywiresim.com/assets/website/video/A32NX.mp4"
            playsInline
            autoPlay
            muted
            loop
        />
    </section>
);

export default Custom404;
