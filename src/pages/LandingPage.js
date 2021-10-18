import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPopular from "parts/MostPopular";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import { fetchPage } from "store/action/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPopular = React.createRef();
  }

  componentDidMount() {
    window.title = "Beachcation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(
        `https://server-beachcation.herokuapp.com/api/v1/member/landing-page`,
        "landingPage"
      );
  }
  render() {
    const { page } = this.props;

    console.log(page);

    if (!page.hasOwnProperty("landingPage")) return null;
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPopular={this.refMostPopular} data={page.hero} />
        <MostPopular
          refMostPopular={this.refMostPopular}
          data={page.mostPopular}
        />
        <Categories data={page.categories} />
        <Testimony data={page.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
