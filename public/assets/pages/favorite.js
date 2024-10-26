const FavoriteController = (SET => {

    const fetchFavorite = (TOKEN) => {
        $("#movie-text").hide()
        $.ajax({
            url : `${SET._baseURL()}api/movies/favorite`,
            type : 'GET',
            dataType : 'json',
            headers : {
                'Authorization' : 'Bearer '+TOKEN
            },  
            beforeSend:function(){
                $("#movie-list").html(`<li class="col-md-12 dflex justify-content-center" style="text-align: center"><h3><i class="ri-movie-2-line"></i></h3><h6> Loading...</h6></li>`);
            },
            success: function(data, message, res) {
                var statusCode = res.status;
                if(statusCode == 200 && data.data.data.length > 0){
                    let html = data.data.data.map((v) => {
                        return `<li class="slide-item col-lg-3 col-md-4 col-6 mb-4">
                            <div class="block-images position-relative watchlist-first">
                                <div class="img-box w-100">
                                    <img src=${v.poster} class="img-fluid" alt="" loading="lazy">
                                </div>
                            <div class="block-description">
                                <h6 class="iq-title text-left"><a href="${SET._baseURL()}movies/show/${v.imdb_id}">${v.title}</a></h6>
                                <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">${v.year}</span>
                                </div>
                                <div class="hover-buttons text-left">
                                    <a href="${SET._baseURL()}movies/show/${v.imdb_id}" ${v.title} role="button" class="btn btn-hover"><i class="fa fa-play mr-1"
                                        aria-hidden="true"></i>${window.translations.play_now}</a>
                                </div>
                            </div>
                            <div class="block-social-info">
                                <ul class="list-inline p-0 m-0 music-play-lists">
                                    <li>
                                        <span><i class="${v.flag === 1 ? 'ri-heart-fill' : 'ri-heart-line'} btn_favorite" data-id="${v.imdb_id}"></i></span>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </li>`
                    })
                    $("#movie-list").html(html);
                    $("#movie-text").show()
                    if(data.data.to === data.data.total){
                        $("#load_more").hide()
                    } else {
                        $("#load_more").show()
                    }
                    var page = 2;
                    loadMore(page, TOKEN);
                    page++;
                }else{
                    $('#movie-list').html(`<li class="col-md-12 dflex justify-content-center" style="text-align: center"><h3><i class="ri-movie-2-line"></i></h3><h6>${data.message}</h6></li>`);
                }
            },
            error:function(data, message, res){
                $("#movie-list").html("");
                if(res.status === 419){
                    setTimeout(() => {
                        window.location.href=`${SET._baseURL()}logout`;
                    }, 500);
                } else {
                    $('#movie-list').html(`<li class="col-md-12 dflex justify-content-center" style="text-align: center"><h3><i class="ri-movie-2-line"></i></h3><h6>${data.responseJSON.message}</h6></li>`);
                    $("#load_more").hide()
                }
            }
        });
    }

    const switchLang = () => {
        $("#language").on('change', function(){
            window.location.href=`${SET._baseURL()}language/`+$(this).val()
         });
    }

    const deleteFavorite = (TOKEN) => {
        $("#movie-list").on('click', '.btn_favorite', function(){
            let data_id = $(this).data('id')
            $.ajax({
                url : `${SET._baseURL()}api/movies/delete-favorite/`+data_id,
                type : 'POST',
                dataType : 'json',
                headers : {
                    'Authorization' : 'Bearer '+TOKEN
                },  
                beforeSend:function(){
                    $("#movie-list").html(`<li class="col-md-12 dflex justify-content-center" style="text-align: center"><h3><i class="ri-movie-2-line"></i></h3><h6> Loading...</h6></li>`);
                },
                success: function(data, message, res) {
                    var statusCode = res.status;
                    if(statusCode == 200){
                        toastr['error'](window.translations.success, data.message, {
                            positionClass: 'toast-bottom-right',
                            closeButton: true,
                            tapToDismiss: true,
                        });
                        fetchFavorite(TOKEN)
                    }else{
                        $('#movie-list').html(`<li class="col-md-12 dflex justify-content-center" style="text-align: center"><h3><i class="ri-movie-2-line"></i></h3><h6>${data.message}</h6></li>`);
                    }
                },
                error:function(res){
                    $("#movie-list").html("");
                    if(res.status === 419){
                        setTimeout(() => {
                            window.location.href=`${SET._baseURL()}logout`;
                        }, 500);
                    }
                }
            });
        })
        
    }

    const loadMore = (page, TOKEN) => {
        $("#load_more").on('click', function(){
            $.ajax({
                url : `${SET._baseURL()}api/movies/favorite`,
                type : 'GET',
                dataType : 'json',
                data : {
                    page    : page
                },
                headers : {
                    'Authorization' : 'Bearer '+TOKEN
                },  
                success:function(data, message, res){
                    if(res.status == 200 && data.data.data.length > 0){
                        let html = data.data.data.map((v) => {
                            return `<li class="slide-item col-lg-3 col-md-4 col-6 mb-4">
                                <div class="block-images position-relative watchlist-first">
                                    <div class="img-box w-100">
                                        <img src=${v.poster} class="img-fluid" alt="" loading="lazy">
                                    </div>
                                <div class="block-description">
                                    <h6 class="iq-title text-left"><a href="${SET._baseURL()}movies/show/${v.imdbID}">${v.title}</a></h6>
                                    <div class="movie-time d-flex align-items-center my-2">
                                        <span class="text-white">${v.year}</span>
                                    </div>
                                    <div class="hover-buttons text-left">
                                        <a href="${SET._baseURL()}movies/show/${v.imdbID}" ${v.title} role="button" class="btn btn-hover"><i class="fa fa-play mr-1"
                                            aria-hidden="true"></i>${window.translations.play_now}</a>
                                    </div>
                                </div>
                                <div class="block-social-info">
                                    <ul class="list-inline p-0 m-0 music-play-lists">
                                        <li>
                                            <span><i class="${v.favorite && v.favorite.flag === 1 ? 'ri-heart-fill' : 'ri-heart-line'} btn_favorite" data-id="${v.imdbID}"></i></span>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </li>`
                        })
                        $("#movie-list").append(html);
                        if(data.data.to === data.data.total){
                            $("#load_more").hide()
                        } else {
                            $("#load_more").show()
                        }
                        $("#movie-text").show()
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
        })
    }
    
    return {
        init: (TOKEN) => {
            switchLang();
            fetchFavorite(TOKEN);
            deleteFavorite(TOKEN);
        }
    };
    
    })(SettingController);