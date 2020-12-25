<?php

namespace App\View\Components\Site;

use Illuminate\View\Component;

class Card extends Component
{
    public string $img;
    public string $title;
    public string $body;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($img, $title, $body)
    {
        $this->img = $img;
        $this->title = $title;
        $this->body = $body;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.site.card');
    }
}
