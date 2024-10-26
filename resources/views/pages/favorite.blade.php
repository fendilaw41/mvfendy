@extends('layouts.main')
@section('title', 'Favorite')
@section('content')
@push('styles')
<link rel="stylesheet" href="{{ env("APP_URL") }}/assets/css/custom.css">
@endpush
<div class="iq-breadcrumb-one iq-bg-over">
    <div class="container-fluid">
       <div class="row align-items-center">
          <div class="col-sm-12">
             <nav aria-label="breadcrumb" class="text-center iq-breadcrumb-two">
                <ol class="breadcrumb main-bg">
                    <li class="breadcrumb-item"><a href="/movies">{{ __("lang.movies")}}</a></li> 
                    <li class="breadcrumb-item active">{{ __("lang.favorite_list")}}</li>
              </ol>
             </nav>
          </div>
       </div>
    </div>
</div>
<main id="main" class="site-main watchlist-contens">
<div class="container-fluid">
    <div class="iq-main-header d-flex align-items-center justify-content-between mt-5 mt-lg-0">
        <h4 class="main-title mb-3" id="movie-text">{{ __("lang.favorite_list")}}</h4>
    </div>
    <ul class="row list-inline mb-0 iq-rtl-direction" id="movie-list">
       
    </ul>
    <button class="btn btn-hover hide-me" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" id="load_more">
        <span class="genres-btn">{{ __("lang.load_more")}}</span>
    </button>
</div>
</main>
@endsection
@push('scripts')
<script>
    window.translations = {!! json_encode([
        'play_now' => trans('lang.play_now'),
        'success' => trans('lang.success'),
        'deleted' => trans('lang.deleted'),
    ]) !!};
</script>

<script src="{{ env("APP_URL") }}/assets/pages/favorite.js"></script>
<script>
    FavoriteController.init('{{session('access_token')}}')
</script>
@endpush