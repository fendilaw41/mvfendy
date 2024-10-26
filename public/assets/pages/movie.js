const MovieController = (SET => {

const fetchFavorite = (TOKEN) => {
    $.ajax({
        url : `${SET._baseURL()}api/movies/list`,
        type : 'POST',
        dataType : 'json',
        data : {
            title   : $("#search_title").val(),
            type    : $("#type").val(),
            year    : $("#year").val(),
        },
        headers : {
            'Authorization' : 'Bearer '+TOKEN
        },  
        beforeSend:function(){
            $("#movie-list").html(`<li class="col-md-12 dflex justify-content-center" style="text-align: center"><h3><i class="ri-movie-2-line"></i></h3><h6> Loading...</h6></li>`);
        },
        success: function(data, message, res) {
            var statusCode = res.status;
            if(statusCode == 200 && data.data.length > 0){
                let html = data.data.map((v) => {
                    const prefixLength = "<img data-src=".length;
                    const suffixLength = 'class="lozad fade">'.length;
                    const image = v.poster.substring(prefixLength).slice(0, -suffixLength); 
                    return `<li class="slide-item col-lg-3 col-md-4 col-6 mb-4">
                        <div class="block-images position-relative watchlist-first">
                            <div class="img-box w-100">
                                <img src=${image} class="img-fluid" alt="" loading="lazy">
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
                $("#movie-list").html(html);
                $("#movie-text").show()
                $("#load_more").show()
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
            }
        }
    });
}
    
const search = (TOKEN) => {
    var search = $('#btn_search');
    $("#load_more").hide()
    $("#movie-text").hide()
    search.on('click', function(e){
        fetchFavorite(TOKEN)
        var page = 2;
        loadMore(page, TOKEN);
        page++;
        e.preventDefault();
    });
}

loadMore = (page, TOKEN) => {
    $("#load_more").on('click', function(){
        $.ajax({
            url : `${SET._baseURL()}api/movies/list`,
            type : 'POST',
            dataType : 'json',
            data : {
                title   : $("#search_title").val(),
                type    : $("#type").val(),
                year    : $("#years").val(),
                page    : page
            },
            headers : {
                'Authorization' : 'Bearer '+TOKEN
            },  
            success:function(data, message, res){
                if(res.status == 200 && data.data.length > 0){
                    let html = data.data.map((v) => {
                        const prefixLength = "<img data-src=".length;
                        const suffixLength = 'class="lozad fade">'.length;
                        const image = v.poster.substring(prefixLength).slice(0, -suffixLength); 
                        return `<li class="slide-item col-lg-3 col-md-4 col-6 mb-4">
                            <div class="block-images position-relative watchlist-first">
                                <div class="img-box w-100">
                                    <img src=${image} class="img-fluid" alt="" loading="lazy">
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
                    $("#load_more").show()
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
            var statusCode = res.status;
            if(statusCode == 200){
                toastr['success'](window.translations.success, data.message, {
                    positionClass: 'toast-bottom-right',
                    closeButton: true,
                    tapToDismiss: true,
                });
                fetchFavorite(TOKEN)
            }
        },
        error:function(data, message, res){
            if(data.status >= 400 && data.status <= 500){
                setTimeout(() => {
                    window.location.href=`${SET._baseURL()}logout`;
                }, 500);
            } else {
                $('#movie-list').html(`<li class="col-md-12 dflex justify-content-center" style="text-align: center"><h3><i class="ri-movie-2-line"></i></h3><h6>${data.responseJSON.message}</h6></li>`);
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
            var statusCode = res.status;
            if(statusCode == 200){
                toastr['error'](window.translations.deleted, data.message, {
                    positionClass: 'toast-bottom-right',
                    closeButton: true,
                    tapToDismiss: true,
                });
                fetchFavorite(TOKEN)
            }
        },
        error:function(data, message, res){
            if(res.status === 419){
                setTimeout(() => {
                    window.location.href=`${SET._baseURL()}logout`;
                }, 500);
            } else {
                $('#movie-list').html(`<li class="col-md-12 dflex justify-content-center" style="text-align: center"><h3><i class="ri-movie-2-line"></i></h3><h6>${data.responseJSON.message}</h6></li>`);
            }
        }
    });
}

const Favorite = (TOKEN) => {
    $("#movie-list").on('click', '.btn_favorite', function(){
        let data_id = $(this).data('id')
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
    init: (TOKEN) => {
        switchLang();
        search(TOKEN);
        Favorite(TOKEN);
    }
};

})(SettingController);