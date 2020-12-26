<?php

namespace App\View\Components\Site;

use Illuminate\View\Component;

class Partner extends Component
{
    public $url;
    public $img;
    public $imgAlt;
    /**
     * Create a new component instance.
     * @param string url
     * @param string img
     * @param string imgAlt
     * @return void
     */
    public function __construct($url=null, $img=null, $imgAlt=null)
    {
        $this->url = $url;
        $this->img = $img;
        $this->imgAlt = $imgAlt;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.site.partner');
    }
}
