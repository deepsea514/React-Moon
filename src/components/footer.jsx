import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 text-center">
                                <div className="footer-social">
                                    <ul className="list-unstyled social-icons social-icons-simple">
                                        <li><a className="social-icon wow fadeInDown" href="https://twitter.com/moonidefi"><i className="fab fa-twitter" aria-hidden="true"></i> </a> </li>
                                        <li><a className="social-icon wow fadeInDown" href="https://t.me/moonichat"><i className="fab fa-telegram-plane" aria-hidden="true"></i> </a> </li>
                                        <li><a className="social-icon wow fadeInLeft" href="https://moonidefi.medium.com/" data-wow-delay="300ms"><i className="fab fa-medium"></i> </a> </li>
                                    </ul>
                                </div>
                                <p className="company-about fadeIn text-white">© 2021 M O O N I DeFi - Binance Smart Chain</p>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="go-top"><i className="fas fa-angle-up"></i><i className="fas fa-angle-up"></i></div>
            </>
        )
    }
}

export default Footer;