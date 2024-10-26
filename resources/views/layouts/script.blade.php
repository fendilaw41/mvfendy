<!-- jQuery, Popper JS -->
<input type="hidden" style="display: none;" class="app_url" value="{{ env("APP_URL") }}">
<script src="{{ env("APP_URL") }}/assets/js/jquery-3.4.1.min.js"></script>
<script src="{{ env("APP_URL") }}/assets/js/flatpickr.min.js"></script>
<script src="{{ env("APP_URL") }}/assets/js/popper.min.js"></script>
<!-- Bootstrap JS -->
<script src="{{ env("APP_URL") }}/assets/js/bootstrap.min.js"></script>
<!-- Slick JS -->
<script src="{{ env("APP_URL") }}/assets/js/slick.min.js"></script>
<!-- owl carousel Js -->
<script src="{{ env("APP_URL") }}/assets/js/owl.carousel.min.js"></script>
<!-- select2 Js -->
<script src="{{ env("APP_URL") }}/assets/js/select2.min.js"></script>
<!-- Magnific Popup-->
<script src="{{ env("APP_URL") }}/assets/js/jquery.magnific-popup.min.js"></script>
<!-- Slick Animation-->
<script src="{{ env("APP_URL") }}/assets/js/slick-animation.min.js"></script>
<!-- Custom JS-->
<script src="{{ env("APP_URL") }}/assets/js/custom.js"></script>
<!-- validation JS -->
<script src="{{ env("APP_URL") }}/assets/js/jquery-validation.js"></script>
<!-- toastr JS -->
<script src="{{ env("APP_URL") }}/assets/js/toastr.min.js"></script>
<script src="{{ env("APP_URL") }}/assets/js/ext-component-toastr.js"></script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"></script>
<!-- setting JS -->
<script src="{{ env("APP_URL") }}/assets/pages/setting.js"></script>
@stack('scripts')