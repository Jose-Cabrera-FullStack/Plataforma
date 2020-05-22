import React from 'react';
import '../assets/styles/components/Reviews.scss';
import Arrow_left from '../assets/static/images/arrow-left.svg';
import Arrow_right from '../assets/static/images/arrow-right.svg';
import StarEmpty from '../assets/static/images/star-empty.svg';
import StarFull from '../assets/static/images/star-full.svg';
import Avatar from '../assets/static/images/avatar-review.png';

const Reviews = () =>(
    <section id="reviews" className="reviews">

    <div className="information__review">
        <h2 className="title__reviews">REVIEWS_</h2>
        <h4 className="rating__reviews">4.7 Rating</h4>
        <p className="users__review">3 Reviews</p>
    </div>
    <div className="box__review">

        {/* <figure>
            <img className="arrow" src={Arrow_left} alt=""/>
        </figure> */}

        <div className="user__review">
            <div className="review">
                <h2 className="rating__review">4.6</h2>
                <div className="stars">
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarEmpty} alt=""/>
                        </figure>
                    </div>

                </div>
                <div>
                    <h4 className="title__review">Coaching SOLOQ</h4>
                    <p className="paragraph__review">"Me pareció excelente, se adaptaron a mi forma de aprender. <br/> Aprendí Macro-game"</p>
                    <div className="data__review">
                        <figure>
                            <img src={Avatar} alt=""/>
                        </figure>
                        <div className="subdata__review">
                            <h5 className="name__review">
                                User : Zelphire
                            </h5>
                            <p className="date__review">15/05/2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="user__review">
            <div className="review">
                <h2 className="rating__review">4.8</h2>
                <div className="stars">
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>

                </div>
                <div>
                    <h4 className="title__review">Coaching SOLOQ</h4>
                    <p className="paragraph__review">"He mejorado mucho desde que entendí la importancia de farmear. <br/> Increible profesores"</p>
                    <div className="data__review">
                        <figure>
                            <img src={Avatar} alt=""/>
                        </figure>
                        <div className="subdata__review">
                            <h5 className="name__review">
                                User : RedondoJose
                            </h5>
                            <p className="date__review">14/05/2020</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        <div className="user__review">
            <div className="review">
                <h2 className="rating__review">3.8</h2>
                <div className="stars">
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarFull} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarEmpty} alt=""/>
                        </figure>
                    </div>
                    <div className="star">
                        <figure>
                            <img src={StarEmpty} alt=""/>
                        </figure>
                    </div>

                </div>
                <div>
                    <h4 className="title__review">Coaching SOLOQ</h4>
                    <p className="paragraph__review">"Mi kiteo mejoro bastante. Ya se como posicionarme <br/> Gracias Chicos! "</p>
                    <div className="data__review">
                        <figure>
                            <img src={Avatar} alt=""/>
                        </figure>
                        <div className="subdata__review">
                            <h5 className="name__review">
                                User : MurdocJose
                            </h5>
                            <p className="date__review">19/05/2020</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

        {/* <figure>
            <img className="arrow" src={Arrow_right} alt=""/>
        </figure> */}


    </div>
</section>
)
export default Reviews;