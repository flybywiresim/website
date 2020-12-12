@extends('layouts.site')

@section('content')
    <header>
        <div class="container text-white">
            <h1 id="fbw-title" class="size"><b><span class="fbw-b-text">A32</span><span class="fbw-db-text">N</span>X</b></h1>
            <p>A <span class="fbw-b-text">community</span> built and maintained project aiming to provide study-level aircraft for Microsoft Flight Simulator.</p>
        </div>

        <img src="{{ asset('assets/branding/svg/FBW-Web-Header.svg')}}" alt="">
        <span class="overlay"></span>
        <video src="{{ asset('assets/video/A32NX.mp4')}}" autoplay loop muted></video>
        </div>
    </header>
    <main>
        
    </main>
@endsection