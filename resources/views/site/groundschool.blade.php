<x-site-layout>

<div style="height: 100vh; background-image: linear-gradient(109.6deg,rgba(20,30,48, 0.7) 11.2%,rgba(36,59,85, 0.7) 91.1%), url('{{ asset('assets/ss/takeoff1.jpg') }}');" class="position-fixed w-100"></div>
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
            <x-site.card img="{{ asset('assets/ss/overhead1.png') }}"
                         class="opacity-full-card-db"
                         title="Chapter 1 - Basic Start"
                         body="Learn the basics of starting up your A32NX aircraft with this concise and informative tutorial.">
                <x-button class="btn-outline-light">
                    Watch Now <i class="fas fa-arrow-right"></i>
                </x-button>
            </x-site.card>
            <x-site.card img="{{ asset('assets/ss/overhead1.png') }}"
                         class="opacity-full-card-db"
                         title="Coming Soon"
                         body="----- -----">
                <x-button class="btn-outline-light">
                    Watch Now <i class="fas fa-arrow-right"></i>
                </x-button>
            </x-site.card>
            <x-site.card img="{{ asset('assets/ss/overhead1.png') }}"
                         class="opacity-full-card-db"
                         title="Coming Soon"
                         body="----- -----">
                <x-button class="btn-outline-light">
                    Watch Now <i class="fas fa-arrow-right"></i>
                </x-button>
            </x-site.card>
        </div>
</section>
</main>
</x-site-layout>
