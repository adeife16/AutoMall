<?php
    $title = "Home";
    require_once "header.php";
?>
       <section class="ads_area pt-70  ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ads_tabs d-sm-flex align-items-end justify-content-between pb-30">
                        <div class="section_title mt-45">
                            <h3 class="title">Popular <br> and Featured Ads</h3>
                        </div>
                        <div class="tabs_menu mt-50">
                            <ul class="nav" id="myTab" role="tablist">
                                <li>
                                    <a  style="display: inline-block"class="active" id="popular-tab" data-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="true">Popular Ads</a>
                                </li>
                                <li>
                                    <a style="display: inline-block" id="featured-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="fasse">Featured Ads</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ads_tabs">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-1.png" alt="ads">
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Gadgets</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">Nikon Camera</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$129.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-2.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Camera</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">Fresh Digital Camera</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$99.00</span>
                                            <span class="date">12 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-3.png" alt="ads">
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Mobile</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">Samsung Glalaxy S8</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-4.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Mobile</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">iPhone X Fresh</a></h4>
                                        <p><i class="far fa-map"></i>Delaware, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$234.00</span>
                                            <span class="date">10 Jun, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-5.png" alt="ads">
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Vehicle</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">High-performance Bi-Cycle</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jun, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-6.png" alt="ads">
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Vehicle</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">KTM 800CC Bike</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$2399.00</span>
                                            <span class="date">25 Apr, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-7.png" alt="ads">
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Computers</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">MacBook Pro - 8 GB / 256GB</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$129.00</span>
                                            <span class="date">25 Dec, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-8.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Camera</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">8 GB DDR4 Ram, 4th Gen</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-1.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Ram & Laptop</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">8 GB DDR4 Ram, 4th Gen</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-2.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Ram & Laptop</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">8 GB DDR4 Ram, 4th Gen</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-3.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Ram & Laptop</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">8 GB DDR4 Ram, 4th Gen</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-4.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Ram & Laptop</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">8 GB DDR4 Ram, 4th Gen</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-5.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Ram & Laptop</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">8 GB DDR4 Ram, 4th Gen</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-6.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Ram & Laptop</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">8 GB DDR4 Ram, 4th Gen</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-7.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Ram & Laptop</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">8 GB DDR4 Ram, 4th Gen</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_ads_card mt-30">
                                    <div class="ads_card_image">
                                        <img src="assets/images/ads-8.png" alt="ads">
                                        <p class="sticker">Featured</p>
                                    </div>
                                    <div class="ads_card_content">
                                        <div class="meta d-flex justify-content-between">
                                            <p>Ram & Laptop</p>
                                            <a class="like" href="#"><i class="fas fa-heart"></i></a>
                                        </div>
                                        <h4 class="title"><a href="product-details.html">8 GB DDR4 Ram, 4th Gen</a></h4>
                                        <p><i class="far fa-map"></i>New York, USA</p>
                                        <div class="ads_price_date d-flex justify-content-between">
                                            <span class="price">$299.00</span>
                                            <span class="date">25 Jan, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php
    require_once "footer.php";
?>
