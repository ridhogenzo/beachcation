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
        `${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
        "landingPage"
      );
  }
  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;
    return (
      <>
        <Header {...this.props}></Header>
        <Hero
          refMostPopular={this.refMostPopular}
          data={page.landingPage.hero}
        />
        <MostPopular
          refMostPopular={this.refMostPopular}
          data={page.landingPage.mostPopular}
        />
        <Categories data={page.landingPage.category} />
        <Testimony data={page.landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
