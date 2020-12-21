<div class="js-cookie-consent cookie-consent text-center">
    <div class="container align-self-center">
        <span class="cookie-consent__message">
            Your experience on this site will be improved by allowing cookies. See our <a target="_blank" href="https://drive.google.com/file/d/1KviQQWptR42079Vaxzijtf-2WxGTfB5E/view?usp=sharing">Privacy Policy</a> for more information.
        </span>
    </div>

    <div class="d-flex px-4 m-2">
        <button class="js-cookie-consent-agree cookie-consent__agree btn btn-primary px-4">
            {{ trans('cookieConsent::texts.agree') }}
        </button>
        <button class="btn btn-danger px-4 mx-2" onClick="history.go(-1);">
            Refuse cookies
        </button>
    </div>
</div>
