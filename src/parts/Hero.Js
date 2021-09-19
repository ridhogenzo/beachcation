import React from 'react';
import ImageHero from 'assets/images/Banner.svg';
import IconHotels from 'assets/images/icon/icon-hotels.svg';
import IconOmbak from 'assets/images/icon/icon-ombak.svg';
import IconTravelers from 'assets/images/icon/icon-travelers.svg';
import Button from 'elements/Button';

export default function Hero(props) {

            function showMostPopular() {
                window.scrollTo({
                    top : props.refMostPopular.current.offsetTop -30,
                    behavior: "smooth"
                });
            }

    return (
        <section className="container pt-4"> 
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{width : 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                    Tired because too many work? <br/>
                    <span className="text-indigo">Beach</span> is the answer!
                    </h1>
                    <p className="mb-5 font-weight-light text-gray-500 w-75">
                    We provide cool wind, beautiful wave and sunset.
                    Money can return but not for time, so what you
                    waiting for? Let’s journey together with us.
                    </p>
                    <Button 
                    className="btn px-5" 
                    hasShadow 
                    isPrimary 
                    onClick={showMostPopular}>
                        Lets Started!
                    </Button>

                    <div className="row mt-5">
                        <div className="col-auto" style={{marginRight : 35}}>
                            <img 
                            width="36"
                            height="36" 
                            src={IconTravelers} 
                            alt={`${props.data.travelers} Travelers`} />
                                <h6 className="mt-3">
                                {props.data.travelers}{" "}
                                <span className="text-gray-500 font-weigth-light">Travelers</span>
                                </h6>
                        </div>
                            <div className="col-auto" style={{marginRight : 35}}>
                            <img 
                            width="36"
                            height="36" 
                            src={IconHotels} alt={`${props.data.hotels} Hotels`} />
                                <h6 className="mt-3">
                                {props.data.hotels}{" "}
                                <span className="text-gray-500 font-weigth-light">Hotels</span>
                                </h6>
                            </div>
                            <div className="col-auto">
                            <img 
                            width="36"
                            height="36" 
                            src={IconOmbak} alt={`${props.data.beach} Beach`} />
                                <h6 className="mt-3">
                                {props.data.beach}{" "}
                                <span className="text-gray-500 font-weigth-light">Beach</span>
                                 </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div
                    style={{ width: 580, height: 393}}>
                        <img
                        src={ImageHero} 
                        alt="Hotel With Seafood"
                        className="img-fluid position-absolute" 
                        style={{margin: "-30 0 0 -30"}} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
