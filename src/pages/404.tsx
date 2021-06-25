const Custom404 = () => (
    <section>
        <div className="flex flex-col justify-center mx-auto max-w-md min-h-screen text-center md:max-w-4xl">
            <h5 className="text-9xl font-bold text-blue-light">404</h5>
            <h2 className="mt-8 text-4xl font-bold">
                We don&apos;t know where the baggage is! It seems like the URL that you requested from us doesn&apos;t exist.
            </h2>
            <h1 className="mt-4 text-xl font-medium text-grey-light">
                If you believe this was a mistake, reach out to us through our Discord,
                or return to the homepage.
            </h1>
        </div>

        <video
            className="object-cover absolute top-0 w-screen h-screen opacity-10"
            src="https://cdn.flybywiresim.com/assets/website/video/A32NX.mp4"
            playsInline
            autoPlay
            muted
            loop
        />
    </section>
);

export default Custom404;
