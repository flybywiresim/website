@extends('layouts.site')

@section('content')
    <header style="height: 100vh">
        <div id="overlay-text" class="container">
            <h1><b><span class="fbw-b-text">A32</span><span class="fbw-db-text">N</span>X</b></h1>
            <p>A <span class="fbw-b-text">community</span> built and maintained project aiming to provide study-level
                aircraft for Microsoft Flight Simulator.</p>
            <button type="button" class="btn rounded-pill btn-lg btn-primary px-4">Download</button>
            <button type="button" class="btn rounded-pill btn-lg btn-outline-light px-4">NOTAMS</button>
        </div>

        <div>
            <img id="wave-header" src="{{ asset('assets/branding/svg/FBW-Web-Header.svg')}}" alt="">
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
            <x-site.versions/>
        </section>
        {{-- ### END: DOWNLOAD ### --}}
        {{--  ### START: FEATURES ###  --}}
        <section id="cards" class="fbw-darker-bg pb-5">
            <div class="container text-center p-5">
                <h1><b>We are <span class="fbw-b-text">more</span> than a community</b></h1>
            </div>
            <x-site.cards/>
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
        {{-- ### END LIVE MAP ### --}}

        {{-- ### START: PARTNERS --}}
        {{-- todo: fix logo sizing & place a32nx svg in background --}}
        <section id="partners" class="fbw-darker-bg ">
            <div class="container text-center p-5">
                <div class="pb-5">
                    <h1><b>Partners</b></h1>
                    <hr/>
                </div>
                <x-site.partners/>
            </div>
        </section>
        {{-- ### END: PARTNERS ### --}}
    </main>
@endsection
