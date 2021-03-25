import React from 'react'
import Slider from "react-slick";
const Trending = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1014,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container">
                <div className="row mt-3 mb-5">
                    <Slider {...settings}>
                        <div>
                            <img src="images/A1.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/B.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/C.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/D.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/E.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/F.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/wall.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/1.png" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Trending
