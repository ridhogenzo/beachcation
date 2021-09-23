import React, { Component } from 'react';
import Header from 'parts/Header';
import landingPage from 'json/landingPage.json';
import Hero from 'parts/Hero';
import MostPopular from 'parts/MostPopular';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

export class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPopular = React.createRef();
    }
    render() {
        return (
            <>
                <Header {...this.props}>
                </Header>
                <Hero 
                refMostPopular={this.refMostPopular} 
                data={landingPage.hero} />
                <MostPopular 
                refMostPopular={this.refMostPopular} 
                data={landingPage.mostPopular} />
                <Categories 
                 data={landingPage.categories} />
                 <Testimony
                 data={landingPage.testimonial} />
                 <Footer />

            </>
        );
    }
}

export default LandingPage;