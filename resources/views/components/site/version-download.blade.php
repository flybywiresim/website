<div {{ $attributes->merge(['class' => 'card h-100 card-rounded inner-shadow']) }}>
    <div class="card-body">
        <h5 class="card-title mb-4"><i class="{{$icon}}"></i> <b>{{ $candidate }}</b></h5>
        <p class="card-text">{{ $body }}</p>
        <hr/>
        <p class="card-subtitle">{{ $subBody }}</p>
    </div>
    {{$slot}}
</div>
