const Custom404 = () => (
    <section>
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center text-center md:max-w-4xl">
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
            className="absolute top-0 h-screen w-screen object-cover opacity-10"
            src="https://flybywirecdn.com/assets/website/video/A32NX.mp4"
            playsInline
            autoPlay
            muted
            loop
        />
    </section>
);

export default Custom404;
