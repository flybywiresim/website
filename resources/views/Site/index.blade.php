@extends('layouts.site')

@section('content')
    <header>
        @include('Site.navigation')
        <div id="overlay-text" class="container text-white">
            <h1><b /><span class="fbw-b-text">A32</span><span class="fbw-db-text">N</span>X</h1>
            <p>A <span class="fbw-b-text">community</span> built and maintained project aiming to provide study-level aircraft for Microsoft Flight Simulator.</p>
            <button type="button" class="btn rounded-pill btn-lg btn-primary px-4">Download</button>
            <button type="button" class="btn rounded-pill btn-lg btn-outline-light px-4">NOTAMS</button>
        </div>

        <div>
            <img id="wave-header" src="{{ asset('assets/branding/svg/FBW-Web-Header.svg')}}" alt="">
            <span id="overlay"></span>
            <video src="https://flybywiresim-packages.nyc3.cdn.digitaloceanspaces.com/assets/website/A32NX.mp4" autoplay loop muted></video>
        </div>
    </header>
    <main>
      {{-- ### DOWNLOAD ### --}}
        <section id="download" class="fbw-b-bg">
            <div class="container text-center text-white p-5">
                <h1><b>Download and Fly</b></h1>
            </div>
            <div class="container-fluid mx-auto row row-cols-1 row-cols-md-3 g-4 text-center">
                <div class="col my-4 text-white">
                  <div class="card h-100 card-rounded inner-shadow">
                    <div class="card-body">
                      <h5 class="card-title mb-4"><i class="fas fa-flask"></i> Experimental Release</h5>
                      <p class="card-text">Install our latest experimental release where new features are included to improve overall experience and test new features before release.</p>
                      <hr />
                      <p class="card-subtitle"><b>Features in this version are experimental and are prone to stability issues.</b></p>
                    </div>
                    <div class="container p-3">
                      <button class="btn btn-outline-light rounded-pill" type="button">Learn More</button>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100 card-rounded bg-white">
                    <div class="card-body">
                      <h5 class="card-title mb-4 p-2"><b>Stable Release</b></h5>
                      <p class="card-text">Install our latest stable release via the installer or follow us to our GitHub for a direct download. To learn how to install click below.</p>
                      <hr />
                      <p class="card-subtitle">Installation support can be provided on discord.</p>
                    </div>
                    <div class="container p-3">
                      <button class="btn btn-lg btn-primary rounded-pill" type="button">Download</button>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
                <div class="col my-4 text-white">
                  <div class="card h-100 card-rounded inner-shadow">
                    <div class="card-body">
                      <h5 class="card-title mb-4"><i class="fas fa-code-branch"></i> Development Master</h5>
                      <p class="card-text">Install our latest DEVELOPMENT version via the installer or follow us to our GitHub for instructions to install manually. To learn how to install click below.</p>
                      <hr />
                      <p class="card-subtitle">Some features are experimental and are not garunteed to be stable.</p>
                    </div>

                    <div class="container p-3">
                      <button class="btn btn-outline-light rounded-pill" type="button">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
        </section>
        {{-- ### END DOWNLOAD ### --}}
        <section id="features" class="fbw-dark-bg">
          <div class="container text-center text-white p-5">
            <h1><b>We are <span class="fbw-b-text">more</span> than a communtiy</b></h1>
          </div>
          <div class="container-fluid row row-cols-1 row-cols-md-3 g-4 mx-auto">
            <div class="col">
              <div class="card text-white shadow-lg">
                <img src="{{ asset('assets/ss/landing1.png') }}" class="card-img">
                <div class="card-img-overlay text-center">
                  <h4 class="card-title p-2 mx-auto"><b>GROUND SCHOOL</b></h4>
                  <hr />
                  <p class="card-text">Before you take to the skies, consider visiting our ground school to learn about the various systems included and how to fly the A32NX.</p>
                  <button class="btn btn-outline-light" type="button">Read More <i class="fas fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-white shadow-lg">
                <img src="{{ asset('assets/ss/takeoff1.jpg') }}" class="card-img">
                <div class="card-img-overlay text-center">
                  <h4 class="card-title p-2 mx-auto"><b>ENHANCED FUNCTIONALITY</b></h4>
                  <hr />
                  <p class="card-text">Our team of volunteer developers are constantly working hard to implement new features to make your simulator experience as close to reality as possible.</p>
                  <button class="btn btn-outline-light" type="button">Read more <i class="fas fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-white shadow-lg">
                <img src="{{ asset('assets/ss/cruise1.jpg') }}" class="card-img">
                <div class="card-img-overlay text-center">
                  <h4 class="card-title p-2 mx-auto"><b>OTHER PROJECTS</b></h4>
                  <hr />
                  <p class="card-text">We have other projects under development! Why not learn more about what is coming to your simulator in the near future.</p>
                  <br />
                  <button class="btn btn-outline-light" type="button">Read more <i class="fas fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="container row row-cols-1 row-cols-md-2 g-4 mx-auto">
            <div class="col">
              <div class="card text-white shadow-lg">
                <img src="{{ asset('assets/ss/modeling.png') }}" class="card-img">
                <div class="card-img-overlay text-center">
                  <h4 class="card-title p-2 mx-auto"><b>3D MODELING</b></h4>
                  <hr />
                  <p class="card-text">Our volunteer design team are always working hard to make mockups and new features for the aircraft!</p>
                  <br />
                  <button class="btn btn-outline-light" type="button">Read more <i class="fas fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-white shadow-lg">
                <img src="{{ asset('assets/ss/cruise2.png') }}" class="card-img">
                <div class="card-img-overlay text-center">
                  <h4 class="card-title p-2 mx-auto"><b>LIVERY</b></h4>
                  <hr />
                  <p class="card-text">Our volunteer design team are always working hard to make mockups and new features for the aircraft!</p>
                  <br />
                  <button class="btn btn-outline-light" type="button">Read more <i class="fas fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
    </main>
@endsection