import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line">
                    <div className="container">
                        <a href="#slider-section" title="Logo" className="logo scroll">
                            <img src="moonitemplate/images/mooni_logo.png" alt="logo" className="ml-lg-3 m-0" />
                        </a>

                        <div className="collapse navbar-collapse" id="megaone">
                            <div className="navbar-nav ml-auto">
                                <a className="nav-link line" href="index.html">Home</a>
                                <a className="nav-link line" href="stake.html">Stake</a>
                                <a className="nav-link line" href="#" data-toggle="modal" data-target="#connectWalletModal">Connect Wallet</a>
                                <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xed438051437c22a9ef249b68c7e292435fe8b858" target="_blank" className="btn btn-medium btn-rounded btn-pink nav-button">Buy</a>
                            </div>
                        </div>
                    </div>

                    <div className="navigation-toggle">
                        <ul className="slider-social toggle-btn my-0">
                            <li>
                                <a href="javascript:void(0);" className="sidemenu_btn" id="sidemenu_toggle">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="side-menu hidden">
                    <span id="btn_sideNavClose">
                        <i className="las la-times btn-close"></i>
                    </span>
                    <div className="inner-wrapper">
                        <nav className="side-nav w-100">
                            <a href="#slider-section" title="Logo" className="logo scroll navbar-brand">
                                <img src="moonitemplate/images/mooni_logo.png" alt="logo" />
                            </a>
                            <ul className="navbar-nav text-capitalize">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="stake.html">Stake</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link line" href="#" data-toggle="modal" data-target="#connectWalletModal">Connect Wallet</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xed438051437c22a9ef249b68c7e292435fe8b858" target="_blank" className="btn btn-medium btn-rounded btn-pink nav-button">Buy</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="side-footer w-100">
                            <ul className="social-icons-simple">
                                <li><a className="social-icon wow fadeInRight" href="https://twitter.com/moonidefi" data-wow-delay="300ms"><i className="fab fa-twitter"></i> </a> </li>
                                <li><a className="social-icon wow fadeInLeft" href="https://t.me/moonichat" data-wow-delay="300ms"><i className="fab fa-telegram-plane"></i> </a> </li>
                                <li><a className="social-icon wow fadeInRight" href="https://moonidefi.medium.com/" data-wow-delay="300ms"><i className="fab fa-medium"></i> </a> </li>
                            </ul>
                            <p>&copy; 2021 M O O N I DeFi - Binance Smart Chain</p>
                        </div>
                    </div>
                </div>
                <a id="close_side_menu" href="javascript:void(0);"></a>
            </header>
        );
    }
}

export default Header;