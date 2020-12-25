<?php

namespace App\View\Components;

use Illuminate\View\Component;

class EnvWarning extends Component
{
    public string $env;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->env = $env = config('app.env');

        if($env != 'production'){
            $this->env = 'NON-PRODUCTION';
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.env-warning');
    }
}
