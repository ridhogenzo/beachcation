import React from 'react'
import ImageHero from 'assets/images/Banner.svg'
import IconHotels from 'assets/images/Icon/Icon-Hotels.svg'
import IcobOmbak from 'assets/images//Icon/Icon-Ombak.svg'
import ImageTravelers from 'assets/images//Icon/Icon-Travelers'
import Button from 'elements/Button'

export default function Hero(props) {

            function showMostPopular() {
                window.scrollTo()
            }
    return (
        <section className="container pt4"> 
            <div className="row align-item-center">
                <div className="col-auto-5 pr-5" style={{width : 533}}>
                    <h1 className="h2 font-weight-bold line-height-1 mb-3">
                    Tired because too many work? <br/>
                    Beach is the answer!
                    </h1>
                    <p className="mb-5 font-weight-light text-gray-500 w-75">
                    We provide cool wind, beautiful wave and sunset.
                    Money can return but not for time, so what you
                    waiting for? Let’s journey together with us.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPopular}>
                        Lets Started!
                    </Button>
                </div>
            </div>
        </section>
    );
}
