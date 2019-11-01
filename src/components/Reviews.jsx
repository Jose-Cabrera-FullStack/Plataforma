import React from 'react';
import '../assets/styles/components/Reviews.scss';
import Arrow_left from '../assets/static/images/arrow-left.svg';
import Arrow_right from '../assets/static/images/arrow-right.svg';
import Star from '../assets/static/images/star-rating.svg';
import Avatar from '../assets/static/images/avatar-review.png';

const Reviews = () =>(
    <section id="reviews" class="reviews">

    <div class="information__review">
        <h2 class="title__reviews">REVIEWS_</h2>
        <h4 class="rating__reviews">4.7 Rating</h4>
        <p class="users__review">3509 Reviews</p>
    </div>
    <div class="box__review">

        <figure>
            <img class="arrow" src={Arrow_left} alt=""/>
        </figure>

        <div class="user__review">
            <div class="review">
                <h2 class="rating__review">5.0</h2>
                <div class="stars">
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>

                </div>
                <div>
                    <h4 class="title__review">TFT Boosting</h4>
                    <p class="paragraph__review">Very Handsome Site that delivers much Options for <br/> every favor.
                        Fast & Clean!</p>
                    <div class="data__review">
                        <figure>
                            <img src={Avatar} alt=""/>
                        </figure>
                        <div class="subdata__review">
                            <h5 class="name__review">
                                User : Murdoc
                            </h5>
                            <p class="date__review">20/10/2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="user__review">
            <div class="review">
                <h2 class="rating__review">5.0</h2>
                <div class="stars">
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>

                </div>
                <div>
                    <h4 class="title__review">TFT Boosting</h4>
                    <p class="paragraph__review">Very Handsome Site that delivers much Options for <br/> every
                        favor.
                        Fast & Clean!</p>
                    <div class="data__review">
                        <figure>
                            <img src={Avatar} alt=""/>
                        </figure>
                        <div class="subdata__review">
                            <h5 class="name__review">
                                User : Murdoc
                            </h5>
                            <p class="date__review">20/10/2020</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        <div class="user__review">
            <div class="review">
                <h2 class="rating__review">5.0</h2>
                <div class="stars">
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div class="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>

                </div>
                <div>
                    <h4 class="title__review">TFT Boosting</h4>
                    <p class="paragraph__review">Very Handsome Site that delivers much Options for <br/> every
                        favor.
                        Fast & Clean!</p>
                    <div class="data__review">
                        <figure>
                            <img src={Avatar} alt=""/>
                        </figure>
                        <div class="subdata__review">
                            <h5 class="name__review">
                                User : Murdoc
                            </h5>
                            <p class="date__review">20/10/2020</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

        <figure>
            <img class="arrow" src={Arrow_right} alt=""/>
        </figure>


    </div>
</section>
)
export default Reviews;