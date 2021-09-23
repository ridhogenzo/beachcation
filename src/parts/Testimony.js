import React from 'react'
import Star from 'elements/Star'
import Button from 'elements/Button' 

export default function Testimony({data}) {
    return (
        <section className="container">
            <div className="row align-items-center">
                <div className="col-auto" style={{ marginRight: 55}}>
                    <div 
                    className="testimonial-hero">
                        <img 
                        src={data.imageUrl} 
                        alt="Testimonial" 
                        className="position-absolute"
                        style={{margin: `30 0 0 -30`}} />
                    </div>
                </div>
                <div className="col">
                <h4 className ="h1 font-weight-bold"
                    style={{marginBottom : 40}}>
                        {data.name}
                </h4>
                    <Star value={data.rate} width={45} height={45} spacing={4} />
                    <h5 className="font-weight-bold line-height-2 my-3 font-italic">
                        {data.content}
                    </h5>
                    <span className="text-gray-500">
                        {data.familyName}, {data.familyOccupation}
                    </span>
                    <div>
                        <Button 
                         className="btn px-5"
                         style={{marginTop: 40}}
                         hasShadow 
                         isPrimary 
                         type="link" 
                         href={`/testimonial/${data._id}`}>
                             Read Their Story
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
