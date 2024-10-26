@extends('layouts.main')
@section('title', 'Movies')
@section('content')
@push('styles')
<link rel="stylesheet" href="{{ env("APP_URL") }}/assets/css/custom.css">
@endpush
<div class="iq-breadcrumb-one iq-bg-over ">
    <div class="container-fluid">
       <div class="row align-items-center">
          <div class="col-sm-12">
             <nav aria-label="breadcrumb" class="text-center iq-breadcrumb-two">
                <form action="order-received.html">
                    <h5 class="mb-4">{{ __("lang.search_movies") }}</h5>
                    <div class="row">
                        <div class="col-md-3 mb-4">
                            <input type="text" name="search_title" id="search_title" class="form-control" placeholder="{{ __("lang.search")}}">
                        </div>
                        <div class="col-md-3 mb-4">
                            <select class="form-control" id="type" name="type">
                                <option value="">{{ __("lang.choose_type") }}</option>
                                <option value="movie">{{ __("lang.movies") }}</option>
                                <option value="series">{{ __("lang.series") }}</option>
                                <option value="episode">{{ __("lang.episode") }}</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-4">
                            <select class="select2-basic-single js-states form-control" id="year" name="year">
                                <option value="">{{ __("lang.choose_year") }}</option>
                                @for($i=2022; $i >= 1998; $i--)
                                    <option>{{ $i }}</option>
                                @endfor
                            </select>
                        </div>
                        <div class="col-md-3 hover-buttons text-left">
                            <button type="button" id="btn_search" class="btn btn-hover"><i class="fa fa-search mr-1" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </form>
             </nav>
          </div>
       </div>
    </div>
</div>
<main id="main" class="site-main watchlist-contens">
<div class="container-fluid">
    <div class="iq-main-header d-flex align-items-center justify-content-between mt-5 mt-lg-0">
        <h4 class="main-title mb-3" id="movie-text">{{ __("lang.movie_result")}}</h4>
    </div>
    <ul class="row list-inline mb-0 iq-rtl-direction" id="movie-list">
       
    </ul>
    <button class="btn btn-hover hide-me" type="button" data-toggle="collapse" data-target="#collapseExample3"
        aria-expanded="false" aria-controls="collapseExample3" id="load_more">
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

<script src="{{ env("APP_URL") }}/assets/pages/movie.js"></script>
<script>
    MovieController.init('{{session('access_token')}}')
</script>
@endpush