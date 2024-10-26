<!doctype html>
<html lang="en-US">
   <head>
      <!-- Required meta tags -->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>404 Not Found</title>
      <!-- Favicon -->
      {{-- <link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}"/> --}}
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}"/>
      <!-- Typography CSS -->
      <link rel="stylesheet" href="{{ asset('assets/css/typography.css') }}">
      <!-- Style -->
      <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}"/>
      <!-- Responsive -->
      <link rel="stylesheet" href="{{ asset('assets/css/responsive.css') }}"/>
   </head>
   <body>

  <div class="section-padding vh-100 image-flip-rtl" style="background: url({{ asset('assets/images/404-two.webp') }}); background-size: cover; background-repeat: no-repeat; position: relative;min-height:500px">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-6"></div>
        <div class="col-lg-5">
          <img src="{{ asset('assets/images/404-text.webp') }}" class="mb-5" alt="404" loading="lazy">
          <h4 class="fw-bold text-center">ohhh no..! page not found.</h4>
          <p class="text-center">we are sorry, but the page you are looking for doesn’t exist.</p>
          <div class="text-center mt-4 pt-3">
            <div class="iq-button">
                <a href="{{ url('/movies') }}" class="btn btn-hover">
                    <span class="button-text">Back to home</span>
                    <i class="fa fa-reply"></i>
                </a>
            </div>
          </div>
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
</div>
<script src="{{ asset('assets/js/jquery-3.5.1.min.js') }}"></script>
   <script src="{{ asset('assets/js/popper.min.js') }}"></script>
   <!-- Bootstrap JS -->
   <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
   <!-- owl carousel Js -->
   <script src="{{ asset('assets/js/owl.carousel.min.js') }}"></script>
   <!-- select2 Js -->
   <script src="{{ asset('assets/js/select2.min.js') }}"></script>
   <!-- Magnific Popup-->
   <script src="{{ asset('assets/js/jquery.magnific-popup.min.js') }}"></script>
   <!-- Custom JS-->
   <script src="{{ asset('assets/js/custom.js') }}"></script>
</body>
</html>