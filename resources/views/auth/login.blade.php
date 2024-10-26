<!doctype html>
<html lang="en-US">
   <head>
      <!-- Required meta tags -->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Login</title>
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
      <link rel="stylesheet" href="{{ asset('assets/css/toastr.min.css') }}">
      <link rel="stylesheet" href="{{ asset('assets/css/ext-component-toastr.css') }}">
   </head>
   <body>
   <!-- loader Start -->
   <!-- <div id="loading">
      <div id="loading-center">
      </div>
   </div> -->
   <!-- loader END -->
   <!-- MainContent -->
   <section class="sign-in-page">
      <div class="container">
         <div class="row justify-content-center align-items-center height-self-center">
            <div class="col-lg-5 col-md-12 align-self-center">
               <div class="sign-user_card ">                    
                  <div class="sign-in-page-data">
                     <div class="sign-in-from w-100 m-auto">
                        <h3 class="mb-3 text-center">Sign in</h3>
                        <form class="mt-4" id="form_login">
                           <div class="form-group">                                 
                              <input type="text" class="form-control mb-0" id="username" name="username" placeholder="Enter email" autocomplete="off" required>
                           </div>
                           <div class="form-group">                                 
                              <input type="password" class="form-control mb-0" id="password" name="password" placeholder="Password" required>
                           </div>
                              <div class="sign-info">
                                {!! csrf_field() !!}
                                 <button type="submit" id="btn_signin" class="btn btn-hover">Sign in</button>                              
                              </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- MainContent End-->
  
   <!-- back-to-top End -->
   <!-- jQuery, Popper JS -->
   <input type="hidden" style="display: none;" class="app_url" value="{{ env("APP_URL") }}">
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
   <script src="{{ asset('assets/js/jquery-validation.js') }}"></script>
   <script src="{{ asset('assets/js/toastr.min.js') }}"></script>
   <script src="{{ asset('assets/js/ext-component-toastr.js') }}"></script>
   <script src="{{ asset('assets/pages/setting.js') }}"></script>
   <script src="{{ asset('assets/pages/login.js') }}"></script>
   <script>
    AuthController.init()
   </script>
   </body>
</html>