import React from 'react';
import '../assets/styles/components/Reviews.scss';
import Arrow_left from '../assets/static/images/arrow-left.svg';
import Arrow_right from '../assets/static/images/arrow-right.svg';
import Star from '../assets/static/images/star-rating.svg';
import Avatar from '../assets/static/images/avatar-review.png';

const Reviews = () =>(
    <section id="reviews" className="reviews">

    <div className="information__review">
        <h2 className="title__reviews">REVIEWS_</h2>
        <h4 className="rating__reviews">4.7 Rating</h4>
        <p className="users__review">3509 Reviews</p>
    </div>
    <div className="box__review">

        <figure>
            <img className="arrow" src={Arrow_left} alt=""/>
        </figure>

        <div className="user__review">
            <div className="review">
                <h2 className="rating__review">5.0</h2>
                <div className="stars">
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>

                </div>
                <div>
                    <h4 className="title__review">TFT Boosting</h4>
                    <p className="paragraph__review">Very Handsome Site that delivers much Options for <br/> every favor.
                        Fast & Clean!</p>
                    <div className="data__review">
                        <figure>
                            <img src={Avatar} alt=""/>
                        </figure>
                        <div className="subdata__review">
                            <h5 className="name__review">
                                User : Murdoc
                            </h5>
                            <p className="date__review">20/10/2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="user__review">
            <div className="review">
                <h2 className="rating__review">5.0</h2>
                <div className="stars">
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>

                </div>
                <div>
                    <h4 className="title__review">TFT Boosting</h4>
                    <p className="paragraph__review">Very Handsome Site that delivers much Options for <br/> every
                        favor.
                        Fast & Clean!</p>
                    <div className="data__review">
                        <figure>
                            <img src={Avatar} alt=""/>
                        </figure>
                        <div className="subdata__review">
                            <h5 className="name__review">
                                User : Murdoc
                            </h5>
                            <p className="date__review">20/10/2020</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        <div className="user__review">
            <div className="review">
                <h2 className="rating__review">5.0</h2>
                <div className="stars">
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={Star} alt=""/>
                        </figure>
                    </div>

                </div>
                <div>
                    <h4 className="title__review">TFT Boosting</h4>
                    <p className="paragraph__review">Very Handsome Site that delivers much Options for <br/> every
                        favor.
                        Fast & Clean!</p>
                    <div className="data__review">
                        <figure>
                            <img src={Avatar} alt=""/>
                        </figure>
                        <div className="subdata__review">
                            <h5 className="name__review">
                                User : Murdoc
                            </h5>
                            <p className="date__review">20/10/2020</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

        <figure>
            <img className="arrow" src={Arrow_right} alt=""/>
        </figure>


    </div>
</section>
)
export default Reviews;