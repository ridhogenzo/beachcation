import React from 'react'
import Button from 'elements/Button'
import IconText from './IconText'
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{width: 350}}>
                        <IconText />
                        <p className="brand-tagline">
                             Cool Wind, Beautiful Wave, Sunset It’s Yours
                        </p>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type='link' href="/register">
                                    New Account
                                    </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href="/properties">
                                    Book A Room
                                    </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href="/payments">
                                    Payments
                                    </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type='link' href="/about">
                                    About
                                    </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href="/privacy">
                                    Privacy
                                    </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href="/terms">
                                    Terms & Condition
                                    </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">Contact Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type='link' href="mailto:Support@Beachcation.id">
                                Support@Beachcation.id
                                    </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type='link' href="tel:+6281318609456">
                                    0813-1860-9456
                                    </Button>
                            </li>
                            <li className="list-group-item">
                                <span>Beachation, Jakarta Timur</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                    Copyright 2021• All rights reserved • Beachcation
                    </div>
                </div>
            </div>
        </footer>
    );
}
