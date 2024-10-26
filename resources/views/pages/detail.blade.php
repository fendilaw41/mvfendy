@extends('layouts.main')
@section('title', 'Movies')
@section('content')
@push('styles')
<link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}">
@endpush
<section class="iq-main-slider site-video">
    <div class="container-fluid">
       <div class="row">
          <div class="col-lg-12">
             <div class="pt-0" id="image-banner">
             </div>

          </div>
       </div>
    </div>
 </section>

<div class="main-content movi ">
    <div id="detail-content"></div>
</div>

 </div>
@endsection
@push('scripts')
<script>
    window.translations = {!! json_encode([
        'play_now' => trans('lang.play_now'),
        'movie_found' => trans('lang.movie_found'),
        'success' => trans('lang.success'),
        'deleted' => trans('lang.deleted'),
        'description' => trans('lang.description'),
        'rating' => trans('lang.rating'),
    ]) !!};
</script>

<script src="{{ asset('assets/pages/movie_detail.js') }}"></script>
<script>
    MovieDetailController.init('{{session('access_token')}}', '{{$id}}')
</script>
@endpush