<nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <div class="container-md">
        <div class="navbar-brand">
            <a href="{{ route('site.index') }}">
                <img src="{{ asset('assets/branding/svg/white/FBW-Logo-WHITE.svg') }}" alt="" width="160px">
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="justify-content-end collapse navbar-collapse font-weight-bold" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('site.index') }}">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="FeaturesNavbarDropdownMenuLink" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Features
                    </a>
                    <div class="dropdown-menu" aria-labelledby="FeaturesNavbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Overview</a>
                        <a class="dropdown-item" href="{{ route('site.changelog') }}">Changelog</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pilots
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="{{ route('site.groundschool') }}">Ground School</a>
                        <a class="dropdown-item" href="{{ route('site.documentation') }}">Documentation</a>
                        <a class="dropdown-item" href="{{ route('site.resources') }}">Resources</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Developers
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" target="_blank" href="https://github.com/flybywiresim">Our
                            GitHub</a>
                        <a class="dropdown-item" target="_blank"
                           href="https://github.com/flybywiresim/a32nx/blob/master/.github/Contributing.md">Getting
                            Started</a>
                        <a class="dropdown-item" target="_blank"
                           href="https://github.com/flybywiresim/a32nx/issues">Issues</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Community
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="">NOTAMS / BLOG</a>
                        <a class="dropdown-item" target="_blank" href="https://discord.gg/flybywire">Discord</a>
                        <a class="dropdown-item" target="_blank"
                           href="https://twitter.com/flybywiresim/">Twitter</a>
                        <a class="dropdown-item" target="_blank"
                           href="https://www.facebook.com/FlyByWireSimulations/">Facebook</a>
                        <a class="dropdown-item" target="_blank"
                           href="https://www.youtube.com/c/FlyByWireSimulations/">YouTube</a>
                        <a class="dropdown-item" target="_blank" href="https://www.twitch.tv/flybywiresimulations/">Twitch</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
