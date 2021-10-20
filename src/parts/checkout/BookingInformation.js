import React from "react";
import Fade from "react-reveal/Fade";
import InputText from "elements/Form/InputText";
import formatNumbering from "utils/formatNumbering";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  console.log(ItemDetails);
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    className="img-cover"
                    src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                    alt={ItemDetails.title}
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.title}</h5>
                      <span className="text-gray-500">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span className="text-gray-900 font-weight-bold">
                      RP{" "}
                      {formatNumbering(checkout.duration * ItemDetails.price)}{" "}
                      <span className="text-gray-900 font-weight-bold">/ </span>
                      {checkout.duration} {ItemDetails.unit}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstName">Nama Depan</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.fullName}
                onChange={props.onChange}
              />
              <label htmlFor="lastName">Nama Belakang</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.fullName}
                onChange={props.onChange}
              />
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />
              <label htmlFor="phone">Nomor Handphone</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
