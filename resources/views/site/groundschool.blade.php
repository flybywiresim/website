@extends('layouts.site')

@section('content')
<div style="height: 100vh; background-image: linear-gradient(109.6deg,rgba(20,30,48, 0.7) 11.2%,rgba(36,59,85, 0.7) 91.1%), url('{{ asset('assets/ss/cruise1.jpg') }}');" class="position-fixed w-100"></div>
<header style="height:45vh">
    <div id="overlay-text" class="container">
        <h1><b><span class="fbw-b-text">FlyByWire</span></b></h1>
        <h1><b><span class="fbw-lb-text">Ground School</span></b></h1>
        <p>The best place to learn the skills to operate our aircraft</p>
    </div>
</header>
<main>
    <section id="cards" class="pb-5">
        <div class="container-fluid row row-cols-1 row-cols-md-3 g-4 mx-auto">
            <div class="col">
                <div style="background-color: #141e30" class="card shadow-lg">
                    <img src="{{ asset('assets/ss/overhead1.png') }}" class="card-img">
                    <div class="card-img-overlay h-100 text-center">
                        <h4 class="card-title p-2 mx-auto"><b>Chapter 1 - Basic Start</b></h4>
                        <hr/>
                        <p class="card-text">Learn the basics of starting up your A32NX aircraft with this concise and informative tutorial.</p>
                       <a target="_blank" href="https://www.youtube.com/watch?v=9dmYJxHdSLA&t=1s"><button class="btn btn-outline-light" type="button">Watch Now <i
                            class="fas fa-arrow-right"></i></button></a> 
                    </div>
                </div>  
            </div>       
            <div class="col">
                <div style="background-color: #141e30" class="card shadow-lg">
                    <img src="{{ asset('assets/ss/landing1.png') }}" class="card-img">
                    <div class="card-img-overlay h-100 text-center">
                        <h4 class="card-title p-2 mx-auto"><b>Coming Soon</b></h4>
                        <hr/>
                        <p class="card-text">-----</p>
                        <a target="_blank" href="https://www.youtube.com/watch?v=l_5J7ZuEEtk&list=PLyIyZ4OtCKhxTSKfpwxxFEROEjAaKta7j"><button class="btn btn-outline-light" type="button">Other Tutorials <i
                            class="fas fa-arrow-right"></i></button></a> 
                    </div>
                </div>  
            </div>    
            <div class="col">
                <div style="background-color: #141e30" class="card shadow-lg">
                    <img src="{{ asset('assets/ss/landing1.png') }}" class="card-img">
                    <div class="card-img-overlay h-100 text-center">
                        <h4 class="card-title p-2 mx-auto"><b>Coming Soon</b></h4>
                        <hr/>
                        <p class="card-text">-----</p>
                        <a target="_blank" href="https://www.youtube.com/watch?v=l_5J7ZuEEtk&list=PLyIyZ4OtCKhxTSKfpwxxFEROEjAaKta7j"><button class="btn btn-outline-light" type="button">Other Tutorials <i
                            class="fas fa-arrow-right"></i></button></a> 
                    </div>
                </div>  
            </div>       
        </div>
</section>
</main>
@endsection
