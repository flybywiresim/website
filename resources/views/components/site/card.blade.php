<div {{ $attributes->merge(['class' => 'col']) }}>
    <div class="card shadow-lg">
        <img src="{{ $img }}" class="card-img" alt="...">
        <div class="card-img-overlay h-100 text-center">
            <h4 class="card-title p-2 mx-auto"><b>{{ $title }}</b></h4>
            <hr/>
            <p class="card-text mb-3">{{ $body }}</p>
            {{$slot}}
        </div>
    </div>
</div>
