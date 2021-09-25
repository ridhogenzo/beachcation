import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import Button from "elements/Button";
import InputNumber from "elements/Form/InputNumber";
import InputDate from "elements/Form/InputDate";
import formatNumbering from "utils/formatNumbering";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3">Reservasi Tempat</h4>
        <h5 className="h3 text-gray-900 mb-4" style={{ opacity: "0.45" }}>
          Mulai dari{" "}
          <span className="font-weight-bold">
            RP
            {formatNumbering(itemDetails.price)}
          </span>{" "}
          <span className="text-gray-900 font-weight-light">
            / {itemDetails.unit}
          </span>
        </h5>

        <label htmlFor="duration">Berapa Lama?</label>
        <InputNumber
          max={30}
          suffix={" Malam"}
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />

        <label htmlFor="date">Pilih Tanggal</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />
        <h6
          className="text-gray-900 font-weight-light"
          style={{ marginBottom: 40, opacity: 0.45 }}
        >
          Biaya Untuk{" "}
          <span className="text-gray-900 font-weight-bold">
            {data.duration} {itemDetails.unit}
          </span>{" "}
          senilai{" "}
          <span className="text-gray-900 font-weight-bold">
            RP {formatNumbering(itemDetails.price * data.duration)}{" "}
          </span>
        </h6>

        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={startBooking}
        >
          Lanjutkan Reservasi
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);
