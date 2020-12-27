<x-site-layout>

    <header style="height: 100vh">
        <div id="overlay-text" class="container">
            <h1><b><span class="fbw-b-text">A32</span><span class="fbw-db-text">N</span>X</b></h1>
            <p class="w-50 mb-3">A <span class="fbw-b-text">community</span> built and maintained project aiming to
                provide study-level aircraft for Microsoft Flight Simulator.</p>
            <x-button class="btn-primary btn-lg px-4 rounded-pill">
                Download
            </x-button>
            <x-button class="btn-outline-light btn-lg px-4 rounded-pill">
                NOTAMS
            </x-button>
        </div>

        <div>
            <img id="wave-header" src="{{ asset('assets/branding/svg/FBW-Web-Header.svg')}}" alt="" draggable="false">
            <span id="overlay"></span>
            <video src="https://flybywiresim-packages.nyc3.cdn.digitaloceanspaces.com/assets/website/A32NX.mp4" autoplay
                   playsinline
                   loop muted>
            </video>
        </div>
    </header>
    <main>
        {{-- ### START: DOWNLOAD ### --}}
        <section id="download" class="fbw-b-bg pb-5">
            <div class="container text-center p-5">
                <h1><b>Download and Fly</b></h1>
            </div>
            <div class="container-fluid mx-auto row row-cols-1 row-cols-md-3 g-4 text-center">
                <div class="col mt-3">
                    <x-site.version-download icon="fas fa-flask"
                                             candidate="Experimental Release"
                                             body="Install our latest experimental release where new features are included to improve overall experience and test new features before release."
                                             subBody="Features in this version are experimental and are prone to stability issues.">
                        <div class="container p-3">
                            <x-button class="btn-lg btn-outline-light rounded-pill">
                                Learn More
                            </x-button>
                        </div>
                    </x-site.version-download>
                </div>
                <div class="col">
                    <x-site.version-download class="bg-white text-dark"
                                             candidate="Stable Release"
                                             body="Install our latest stable release via the installer or follow us to our GitHub for a direct download. To learn how to install click below."
                                             subBody="Installation support can be provided on discord.">
                        <div class="container p-3">
                            <x-button class="btn-lg btn-primary rounded-pill">
                                Download
                            </x-button>
                        </div>
                        <div class="card-footer">
                            <div class="text-muted" id="last-updated"></div>
                        </div>
                    </x-site.version-download>
                </div>
                <div class="col mt-3">
                    <x-site.version-download icon="fas fa-code-branch"
                                             candidate="Development Master"
                                             body="Install our latest development version via the installer or follow us to our GitHub for instructions to install manually. To learn how to install click below."
                                             subBody="Some features are experimental and are not guaranteed to be stable.">
                        <div class="container p-3">
                            <x-button class="btn-lg btn-outline-light rounded-pill">
                                Learn More
                            </x-button>
                        </div>
                    </x-site.version-download>
                </div>
            </div>
        </section>
        {{-- ### END: DOWNLOAD ### --}}
        {{--  ### START: FEATURES ###  --}}
        <section id="cards" class="fbw-darker-bg pb-5">
            <div class="container text-center p-5">
                <h1><b>We are <span class="fbw-b-text">more</span> than a community</b></h1>
            </div>
            <div class="container-fluid row row-cols-1 row-cols-md-3 g-4 mx-auto mb-2">
                <x-site.card img="{{ asset('assets/ss/landing1.png') }}"
                             title="GROUND SCHOOL"
                             body="Before you take to the skies, consider visiting our ground school to learn about the various systems included and how to fly the A32NX.">
                    <x-button class="btn-outline-light">
                        Read More <i class="fas fa-arrow-right"></i>
                    </x-button>
                </x-site.card>
                <x-site.card img="{{ asset('assets/ss/takeoff1.jpg') }}"
                             title="ENHANCED FUNCTIONALITY"
                             body="Our team of volunteer developers are constantly working hard to implement new features to make your simulator experience as close to reality as possible.">
                    <x-button class="btn-outline-light">
                        Read More <i class="fas fa-arrow-right"></i>
                    </x-button>
                </x-site.card>
                <x-site.card img="{{ asset('assets/ss/cruise2.png') }}"
                             title="OTHER PROJECTS"
                             body="We have other projects under development! Why not learn more about what is coming to your simulator in the near future.">
                    <x-button class="btn-outline-light">
                        Read More <i class="fas fa-arrow-right"></i>
                    </x-button>
                </x-site.card>
            </div>
            <div class="container-md row row-cols-1 row-cols-md-2 g-4 mx-auto">
                <x-site.card img="{{ asset('assets/ss/modeling.png') }}"
                             title="3D MODELING"
                             body="Our volunteer design team are always working hard to make mockups and new features for the aircraft!">
                    <x-button class="btn-outline-light">
                        Read More <i class="fas fa-arrow-right"></i>
                    </x-button>
                </x-site.card>
                <x-site.card img="{{ asset('assets/ss/cruise1.jpg') }}"
                             title="EVENTS"
                             body="Take part in our regular events hosted by the community for the chance to meet new people and win prizes!">
                    <x-button class="btn-outline-light">
                        Read More <i class="fas fa-arrow-right"></i>
                    </x-button>
                </x-site.card>
            </div>
        </section>
        {{-- ### END: FEATURES ### --}}
        {{--  ### START: STATS ###--}}
        <section id="stats">
            <img src="{{ asset('assets/ss/takeoff1.jpg')}}" alt="" srcset="">
            <div id="stats-overlay" class="container row row-cols-2 row-cols-md-4 d-flex mx-auto p-4 text-center">
                <div class="col">
                    <div class="fbw-b-text" id="downloads"></div>
                    <h5>Downloads</h5>
                </div>
                <div class="col">
                    <div class="fbw-b-text" id="contributors"></div>
                    <h5>Contributors</h5>
                </div>
                <div class="col">
                    <div class="fbw-b-text" id="commits"></div>
                    <h5>Commits</h5>
                </div>
                <div class="col">
                    <div class="fbw-b-text" id="active-flights"></div>
                    <h5>Live Flights</h5>
                </div>
            </div>
        </section>
        {{-- ### END: STATS ### --}}

        {{-- ### LIVE MAP ### --}}
        <div id="live-map"></div>
        {{-- ### END LIVE MAP ### --}

        {{-- ### START: PARTNERS --}}
        {{-- todo: fix logo sizing & place a32nx svg in background --}}
        <section id="partners" class="fbw-darker-bg ">
            <div class="container text-center p-5">
                <h1><b>Partners</b></h1>
                <hr/>
                <div class="row row-cols-1 row-cols-md-3 d-flex mx-auto mt-3">
                    <x-site.partner url="https://fsnews.eu"
                                    img="{{ asset('assets/partners/fsnews.png') }}"
                                    imgAlt="FSNews">
                    </x-site.partner>
                    <x-site.partner class="col-md-2 mx-auto"
                                    url="https://sim4flight.com"
                                    img="{{ asset('assets/partners/sim4flight.png') }}"
                                    imgAlt="sim4flight">
                    </x-site.partner>
                    <x-site.partner url="https://flightsim.to"
                                    img="{{ asset('assets/partners/flightsimto.png') }}"
                                    imgAlt="FSNews">
                    </x-site.partner>
                </div>
                <div class="col-12 col-md-8 mx-auto">
                    <x-site.partner url="https://github.com/Sequal32/yourcontrols/blob/master/Readme.md"
                                    img="{{ asset('assets/partners/yourcontrols.png') }}"
                                    imgAlt="Your Controls">
                    </x-site.partner>
                </div>
            </div>
        </section>
        {{-- ### END: PARTNERS ### --}}
    </main>
</x-site-layout>
