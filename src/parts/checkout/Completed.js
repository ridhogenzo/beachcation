import React from "react";
import Fade from "react-reveal/Fade";
import CompleteIllustration from "assets/images/completed.jpg";
export default function Completed() {
  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompleteIllustration}
              alt="Reservasi Selesai"
              className="img-fluid"
            />
            <p className="text-gray-500">
              Pembayaran anda sedang kami proses. E-ticket akan dikirim melalui
              email.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
