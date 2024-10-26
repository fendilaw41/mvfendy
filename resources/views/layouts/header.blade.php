<header id="main-header">
    <div class="main-header">
       <div class="container-fluid">
          <div class="row">
             <div class="col-sm-12">
                <nav class="navbar navbar-expand-lg p-0">
                   <a href="#" class="navbar-toggler c-toggler" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <div class="navbar-toggler-icon" data-toggle="collapse">
                         <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                         <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
                         <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
                      </div>
                   </a>
                   <a class="navbar-brand" href="{{url('movies')}}"> <img class="img-fluid logo" src="{{ asset('assets/images/logo.jpg') }}" loading="lazy"
                         alt="fendi" /> </a>

                   <div class="mobile-more-menu">
                      <a href="javascript:void(0);" class="more-toggle" id="dropdownMenuButton"
                         data-toggle="more-toggle" aria-haspopup="true" aria-expanded="false">
                         <i class="ri-more-line"></i>
                      </a>
                      <div class="more-menu" aria-labelledby="dropdownMenuButton">
                         <div class="navbar-right position-relative">
                            <ul class="d-flex align-items-center justify-content-end list-inline m-0">
                               <li>
                                  <a href="#" class="iq-user-dropdown search-toggle d-flex align-items-center">
                                     <img src="{{ asset('assets/images/user/user.jpg') }}" class="img-fluid avatar-40 rounded-circle" loading="lazy"
                                        alt="user">
                                  </a>
                                  <div class="iq-sub-dropdown iq-user-dropdown">
                                     <div class="iq-card shadow-none m-0">
                                        <div class="iq-card-body p-0 pl-3 pr-3">
                                           <a href="manage-profile.html" class="iq-sub-card setting-dropdown">
                                              <div class="media align-items-center">
                                                 <div class="right-icon">
                                                    <i class="ri-heart-fill text-primary"></i>
                                                 </div>
                                                 <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">Favorite</h6>
                                                 </div>
                                              </div>
                                           </a>
                                           <a href="login.html" class="iq-sub-card setting-dropdown">
                                              <div class="media align-items-center">
                                                 <div class="right-icon">
                                                    <i class="ri-logout-circle-line text-primary"></i>
                                                 </div>
                                                 <div class="media-body ml-3">
                                                    <h6 class="mb-0">Logout</h6>
                                                 </div>
                                              </div>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   </div>
                   <div class="navbar-right menu-right">
                      <ul class="d-flex align-items-center list-inline m-0">
                         <li class="nav-item nav-icon">
                           <div style="text-align:center">
                              <div class="filters">
                                 <div class="media align-items-center">
                                    <div class="right-icon">
                                       <i class="ri-global-line text-primary"></i>
                                    </div>
                                    <div class="media-body ml-1">
                                       <form class="search-form">
                                          <select id="language" class="form-control">
                                             <option value="en" {{ session('lang_code') == 'en' ? 'selected' : null }}>English</option>
                                             <option value="id" {{ session('lang_code') == 'id' ? 'selected' : null }}>Indonesia</option>
                                          </select>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         </li>
                         <li class="nav-item nav-icon">
                           <div style="text-align:center">
                              <div class="filters">
                                 <a href="{{ url('movies') }}" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="right-icon">
                                             <i class="ri-movie-2-line text-primary"></i>
                                          </div>
                                          <div class="media-body ml-1">
                                             <h6 class="my-0 ">{{ __("lang.movies") }} </h6>
                                          </div>
                                       </div>
                                    </a>
                              </div>
                           </div>
                         </li>
                         <li class="nav-item nav-icon">
                           <div style="text-align:center">
                              <div class="filters">
                                 <a href="{{ url('movies/favorite-list') }}" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="right-icon">
                                             <i class="ri-heart-fill text-primary"></i>
                                          </div>
                                          <div class="media-body ml-1">
                                             <h6 class="my-0 ">{{ __("lang.favorite_list") }} </h6>
                                          </div>
                                       </div>
                                    </a>
                              </div>
                           </div>
                         </li>
                         <li class="nav-item nav-icon">
                           <div style="text-align:center">
                              <div class="filters">
                                 <a href="{{ url('logout') }}" class="iq-sub-card">
                                    <div class="media align-items-center">
                                       <div class="right-icon">
                                          <i class="ri-logout-circle-line text-primary"></i>
                                       </div>
                                       <div class="media-body ml-1">
                                          <h6 class="my-0 ">{{ __("lang.logout") }}</h6>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                           </div>
                         </li>
                         <li class="nav-item nav-icon">
                            <a href="#" class="iq-user-dropdown search-toggle p-0 d-flex align-items-center"
                               data-toggle="search-toggle">
                               <img src="{{ asset('assets/images/user/user.jpg') }}" class="img-fluid avatar-40 rounded-circle" alt="user" loading="lazy">
                            </a>
                            <div class="iq-sub-dropdown iq-user-dropdown">
                               <div class="iq-card shadow-none m-0">
                                  <div class="iq-card-body p-0 pl-3 pr-3">
                                  </div>
                               </div>
                            </div>
                         </li>
                      </ul>
                   </div>
                </nav>

             </div>
          </div>
       </div>
    </div>
 </header>