const MovieDetailController = (SET => {

    const show = (TOKEN, id) => {
        $.ajax({
            url : `${SET._baseURL()}api/movies/`+id,
            type : 'POST',
            dataType : 'json',
            headers : {
                'Authorization' : 'Bearer '+TOKEN
            },  
            beforeSend:function(){
                $("#image-banner").html(`<li class="col-md-12 dflex justify-content-center" style="text-align: center"><h3><i class="ri-movie-2-line"></i></h3><h6> Loading...</h6></li>`);
            },
            success: function(data, message, res) {
                var statusCode = res.status;
                if(statusCode == 200 && data.message === window.translations.movie_found){
                    $("#image-banner").html(`<img src=${data.data.Poster} class="img-fluids" alt="" loading="lazy">`);
                    $("#detail-content").html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="trending-info mt-4 pt-0 pb-4">
                                    <div class="row">
                                    <div class="col-md-9 col-12  mb-auto">
                                        <div class="d-md-flex">
                                            <h3 class="trending-text big-title text-uppercase mt-0 fadeInLeft animated"
                                                data-animation-in="fadeInLeft" data-delay-in="0.6"
                                                style="opacity: 1; animation-delay: 0.6s">${data.data.Title}
                                            </h3>
                                        </div>
                                        <div class="slider-ratting d-flex align-items-center ml-md-3 ml-0">
                                            <ul class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                            ${renderStarRating(data.data.imdbRating)}
                                            </ul>
                                            <span class="text-white ml-2">${data.data.imdbRating} (imdb)</span>
                                        </div>
                                        <ul class="p-0 mt-2 list-inline d-flex flex-wrap movie-content">
                                            <li class="trending-list"><a class="text-primary title"href="#">${data.data.Genre}</a></li>
                                            <li class="trending-list"><a class="text-primary "href="#"> ${data.data.Country}</a></li>
                                        </ul>
                                        <div class="d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4">
                                            <span class="badge badge-secondary font-size-16">${data.data.Rated}</span>
                                            <span class="ml-3 font-Weight-500 genres-info">${data.data.Runtime}</span>
                                            <span class="trending-year trending-year-list font-Weight-500 genres-info">${data.data.Released}
                                            </span>
                                            <span class="trending-year trending-year-list single-view-count font-Weight-500 genres-info"><i
                                                class="fa fa-eye"></i> ${data.data.imdbVotes} votes</span>
                                            <span class="trending-year trending-year-list single-view-count font-Weight-500 genres-info"><i
                                                class="fa fa-film"></i> ${data.data.BoxOffice} box office</span>
                                        </div>
                                        <ul class="list-inline p-0 m-0 share-icons music-play-lists mb-1">
                                            <li><span><i class="${data.data.favorite && data.data.favorite.flag === 1 ? 'ri-heart-fill' : 'ri-heart-line'} btn_favorite"></i></span></li>
                                        </ul>
                                        <ul class="p-0 list-inline d-flex flex-wrap align-items-center mb-3 mt-4 iq_tag-list">
                                            <li class="text-primary text-lable mr-3"><i class="fa fa-language" aria-hidden="true"></i> ${data.data.Language}</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="streamit-content-details trending-info g-border iq-rtl-direction">
                                    <ul class="trending-pills-header d-flex nav nav-pills align-items-center text-center  mb-5 justify-content-center"
                                    role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active show" data-toggle="pill" href="#dectripton-1" role="tab"
                                            aria-selected="true">${window.translations.description}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#reviw-1" role="tab" aria-selected="false">${window.translations.rating}</a>
                                    </li>
                                    </ul>
                                    <div class="tab-content">
                                    <div id="dectripton-1" class="tab-pane fade active show" role="tabpanel">
                                        <div class="description-content">
                                            <p>Actor :${data.data.Actors}</p>
                                            <p>Writer : ${data.data.Writer}</p>
                                            <p>Director : ${data.data.Director}</p>
                                            <p>Plot : ${data.data.Plot}</p>
                                            <p>Awards : ${data.data.Awards}</p>
                                            ${data.data.Production !== 'N/A' ? `<p>Production : ${data.data.Production}</p>` : ''}
                                            ${data.data.Website !== 'N/A' ? `<p>Website : ${data.data.Website}</p>` : ''}
                                            ${data.data.DVD !== 'N/A' ? `<p>DVD : ${data.data.DVD}</p>` : ''}
                                        </div>
                                    </div>
                                    <div id="reviw-1" class="tab-pane fade" role="tabpanel">
                                        <div id="reviews" class="streamit-reviews">
                                            <div id="review_form_wrapper">
                                                <div id="review_form">
                                                <div id="respond" class="comment-respond">
                                                        ${
                                                            data.data.Ratings.map((v) => {
                                                                return `
                                                                <div class="comment-form-rating">
                                                                <label for="rating" class="mr-3">${v.Source} (${v.Value})</label>
                                                                    <ul class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                                   ${renderStarRating(v.Value)}
                                                                    </ul>
                                                                </div>
                                                                `
                                                            }).join('')
                                                        }
                                                </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    `)
                } else {
                    window.location.href=`${SET._baseURL()}404`;
                }
            },
            error:function(jqueryXHR){
                $("#movie-list").html("");
                if(jqueryXHR.status === 419){
                    setTimeout(() => {
                        window.location.href=`${SET._baseURL()}logout`;
                    }, 500);
                }
            }
        });
    }

    function renderStarRating(percentage) {
        let rating = percentage.replace(/[.%]/g, '').split(/[/%]/)
        
        const maxStars = 5; 
        const normalizedRating = (rating[0] / 100) * maxStars;
        let starIcons = '';
        for (let i = 1; i <= maxStars; i++) {
            if (i <= normalizedRating) {
                starIcons += `<li><i class="fa fa-star" aria-hidden="true"></i></li>`; // Bintang penuh
            } else if (i - normalizedRating < 1) {
                starIcons += `<li><i class="fa fa-star-half" aria-hidden="true"></i></li>`; // Setengah bintang
            } else {
                starIcons += `<li><i class="fa fa-star-o" aria-hidden="true"></i></li>`; // Bintang kosong
            }
        }
        return starIcons;
    }
    
    const switchLang = () => {
        $("#language").on('change', function(){
            window.location.href=`${SET._baseURL()}language/`+$(this).val()
         });
    }
    
    const addFavorite = (TOKEN, data_id) => {
        $.ajax({
            url : `${SET._baseURL()}api/movies/add`,
            type : 'POST',
            dataType : 'json',
            data: {
                imdb_id: data_id
            },
            headers : {
                'Authorization' : 'Bearer '+TOKEN
            },  
            beforeSend:function(){
                $(this).html(`<span>loading...</span>`);
            },
            success: function(data, message, res) {
                if(res.status == 200){
                    toastr['success'](window.translations.success, data.message, {
                        positionClass: 'toast-bottom-right',
                        closeButton: true,
                        tapToDismiss: true,
                    });
                    show(TOKEN, data_id)
                }
            },
            error:function(data, message, res){
                console.log(res.status);
                if(res.status === 419){
                    setTimeout(() => {
                        window.location.href=`${SET._baseURL()}logout`;
                    }, 500);
                }
            }
        });
    }
    
    const deleteFavorite = (TOKEN, data_id) => {
        $.ajax({
            url : `${SET._baseURL()}api/movies/delete-favorite/`+data_id,
            type : 'POST',
            dataType : 'json',
            headers : {
                'Authorization' : 'Bearer '+TOKEN
            },  
            beforeSend:function(){
                $(this).html(`<span>loading...</span>`);
            },
            success: function(data, message, res) {
                if(res.status == 200){
                    toastr['error'](window.translations.deleted, data.message, {
                        positionClass: 'toast-bottom-right',
                        closeButton: true,
                        tapToDismiss: true,
                    });
                    show(TOKEN, data_id)
                }
            },
            error:function(data, message, res){
                if(res.status === 419){
                    setTimeout(() => {
                        window.location.href=`${SET._baseURL()}logout`;
                    }, 500);
                }
            }
        });
    }
    
    const Favorite = (TOKEN, data_id) => {
        $("#detail-content").on('click', '.btn_favorite', function(){
            $.ajax({
                url : `${SET._baseURL()}api/movies/favorite/`+data_id,
                type : 'GET',
                dataType : 'json',
                headers : {
                    'Authorization' : 'Bearer '+TOKEN
                },  
                success: function(data, message, res) {
                    var statusCode = res.status;
                    if(statusCode == 200){
                        if(data.data.flag === 1){
                            deleteFavorite(TOKEN, data_id)
                        } else {
                            addFavorite(TOKEN, data_id)
                        }
                       
                    }
                },
                error:function(data, message, res){
                    if(res.status === 419){
                        setTimeout(() => {
                            window.location.href=`${SET._baseURL()}logout`;
                        }, 500);
                    } else {
                        addFavorite(TOKEN, data_id)
                    }
                }
            });
        })
        
    }
    
    return {
        init: (TOKEN, id) => {
            switchLang();
            show(TOKEN, id);
            Favorite(TOKEN, id)
        }
    };
    
    })(SettingController);