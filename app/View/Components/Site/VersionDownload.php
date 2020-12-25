<?php

namespace App\View\Components\Site;

use Illuminate\View\Component;

class VersionDownload extends Component
{
    public string $icon;
    public $candidate;
    public $body;
    public $subBody;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($candidate, $body, $subBody, $icon = "")
    {

        $this->icon = $icon;
        $this->candidate = $candidate;
        $this->body = $body;
        $this->subBody = $subBody;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.site.version-download');
    }
}
