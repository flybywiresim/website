<button {{ $attributes->merge(['class' => 'btn px-3', 'type' => 'button']) }}>
    {{ $slot }}
</button>
