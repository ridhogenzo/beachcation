import React from "react";
import Button from "elements/Button";
import FormatNumber from "utils/formatNumbering";
import Fade from "react-reveal/Fade";

export default function MostPopular(props) {
  return (
    <section className="container" ref={props.refMostPopular}>
      <Fade bottom>
        <h4 className="mb-3 font-weight-bold">Most Popular</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpopular-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      RP {FormatNumber(item.price)}
                      <span className="font-weight-light"> / {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="streched-link d-block text-white"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
