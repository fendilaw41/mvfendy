<!-- jQuery, Popper JS -->
<input type="hidden" style="display: none;" class="app_url" value="{{ env("APP_URL") }}">
<script src="{{asset('assets/js/jquery-3.4.1.min.js')}}"></script>
<script src="{{asset('assets/js/flatpickr.min.js')}}"></script>
<script src="{{asset('assets/js/popper.min.js')}}"></script>
<!-- Bootstrap JS -->
<script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
<!-- Slick JS -->
<script src="{{asset('assets/js/slick.min.js')}}"></script>
<!-- owl carousel Js -->
<script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
<!-- select2 Js -->
<script src="{{asset('assets/js/select2.min.js')}}"></script>
<!-- Magnific Popup-->
<script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
<!-- Slick Animation-->
<script src="{{asset('assets/js/slick-animation.min.js')}}"></script>
<!-- Custom JS-->
<script src="{{asset('assets/js/custom.js')}}"></script>
<!-- validation JS -->
<script src="{{ asset('assets/js/jquery-validation.js') }}"></script>
<!-- toastr JS -->
<script src="{{ asset('assets/js/toastr.min.js') }}"></script>
<script src="{{ asset('assets/js/ext-component-toastr.js') }}"></script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"></script>
<!-- setting JS -->
<script src="{{ asset('assets/pages/setting.js') }}"></script>
@stack('scripts')