<div {{ $attributes->merge(['class' => 'col']) }}>
    <a target="_blank" href="{{ $url }}">
        <img src="{{ $img }}" alt="{{ $imgAlt }}">
    </a>
    {{ $slot }}
</div>
