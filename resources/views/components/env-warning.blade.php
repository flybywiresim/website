<div class="bg-danger w-100 fixed-bottom">
    <div class="container text-white p-1 text-center align-self-center">
        <p>You are in a <b>{{ $env }}</b> environment.</p>
        {{ $slot }}
    </div>
</div>
