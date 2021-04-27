import React, { Component } from "react";
import ScriptTag from 'react-script-tag';
import Iframe from 'react-iframe'

class Landing extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line">
                        <div className="container">
                            <a href="#slider-section" title="Logo" className="logo scroll">
                                <img src="/vendor/moonitemplate/images/mooni_logo.png" alt="logo" className="ml-lg-3 m-0" />
                            </a>

                            <div className="collapse navbar-collapse" id="megaone">
                                <div className="navbar-nav ml-auto">
                                    <a className="nav-link scroll line" href="#slider-section">Home</a>
                                    <a className="nav-link line" href="/stake" >Stake</a>
                                    <a className="nav-link line" href="/balance" >Farming</a>
                                    <a className="nav-link scroll line" href="#about">About</a>
                                    <a className="nav-link scroll line" href="#partner">Partner</a>
                                    <a className="nav-link scroll line" href="#roadmap">Roadmap</a>
                                    <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xed438051437c22a9ef249b68c7e292435fe8b858" target="_blank" className="btn btn-medium btn-rounded btn-pink nav-button">Buy</a>
                                </div>
                            </div>
                        </div>

                        <div className="navigation-toggle">
                            <ul className="slider-social toggle-btn my-0">
                                <li>
                                    <a className="sidemenu_btn" id="sidemenu_toggle">
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
                                    <img src="/vendor/moonitemplate/images/mooni_logo.png" alt="logo" />
                                </a>
                                <ul className="navbar-nav text-capitalize">
                                    <li className="nav-item">
                                        <a className="nav-link scroll" href="#slider-section">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="" data-animation-duration="500" data-fancybox data-src="#animatedModal">Stake</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link scroll" href="#about">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link scroll" href="#partner">Partner</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link scroll" href="#roadmap">Roadmap</a>
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
                    <a id="close_side_menu" href="#"></a>

                    <div className="quote-content hidden animated-modal stake-modal" id="animatedModal">

                        <div className="title mb-5">
                            <h2><span className="text-pink js-rotating">$, $</span> 100.00</h2>
                        </div>
                        <form className="contact-form" id="modal-contact-form-data">
                            <div className="row">

                                <div className="col-md-12">
                                    <div className="form-group row">
                                        <label className="col-3">Amount</label>
                                        <input className="form-control col-8" id="amount" name="amount" required=""
                                            type="number" />
                                    </div>
                                    <div className="row">
                                        <label className="col-3">Period</label>
                                        <select className="col-8 stake-period-single" name="period">
                                            <option value="AL">1 day</option>
                                            <option value="WY">1 week</option>
                                            <option value="WY">1 month</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-12" style={{ marginTop: "20px" }}>
                                    <a href="stake.html" className="btn btn-medium btn-rounded btn-pink modal_contact_btn" id="stake_submit_btn">Stake</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </header>

                <div id="slider-section" className="slider-section">
                    <div id="revo_main_wrapper" className="rev_slider_wrapper fullwidthbanner-container m-0 p-0 bg-dark" data-alias="classic4export" data-source="gallery">
                        <div id="vertical-bullets" className="rev_slider fullwidthabanner white vertical-tpb" data-version="5.4.1">
                            <ul>
                                <li data-index="rs-01" data-transition="fade" data-slotamount="default" data-easein="Power100.easeIn" data-easeout="Power100.easeOut" data-masterspeed="2000" data-fsmasterspeed="1500" data-param1="01">
                                    <img src="/vendor/moonitemplate/images/background_header.webp" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                    <div className="bg-overlay bg-black opacity-4"></div>
                                    <div className="tp-caption tp-resizeme"
                                        data-x="['right','center','center','center']" data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']" data-voffset="['-80','-80','-65','-65']"
                                        data-width="none" data-height="none" data-type="text"
                                        data-textalign="['center','center','center','center']"
                                        data-responsive_offset="on"
                                        data-beforeafter="before"
                                        data-transform_idle="o:1;"
                                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                                        data-start="1000" data-splitin="none" data-splitout="none">
                                        <p className="text-white alt-font font-18">DeFi on Binance Smart</p>
                                    </div>
                                    <div className="tp-caption tp-resizeme"
                                        data-x="['right','center','center','center']" data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']" data-voffset="['20','20','30','30']"
                                        data-width="none" data-height="none" data-type="text"
                                        data-textalign="['center','center','center','center']"
                                        data-responsive_offset="on"
                                        data-beforeafter="before"
                                        data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                        data-start="1200" data-splitin="none" data-splitout="none">
                                        <h1 className="text-white main-font fontWeight-600 font-40">
                                            <span className="fontWeight-200">Welcome to </span>
                                            <span style={{ color: "#897b1c" }}>M O O N I</span>
                                        </h1>
                                    </div>
                                    <div className="tp-caption tp-resizeme"
                                        data-x="['right','center','center','center']" data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']" data-voffset="['95','95','100','100']"
                                        data-width="none" data-height="none" data-type="text"
                                        data-textalign="['right','center','center','center']"
                                        data-responsive_offset="on"
                                        data-beforeafter="before"
                                        data-transform_idle="o:1;"
                                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                                        data-start="1000" data-splitin="none" data-splitout="none">
                                        <p className="text-white alt-font font-18">MOONI DeFi is the incubator based on Binance Smart chain with <br />innovative product launches, where community <br />gets rewarded in ecosystem tokens</p>
                                    </div>
                                    <div className="tp-caption tp-resizeme"
                                        data-x="['right','center','center','center']" data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']" data-voffset="['180','180','175','190']"
                                        data-width="['500','500','500','500']" data-textalign="['right','center','center','center']" data-type="text"
                                        data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:40px;","to":"o:1;fb:0;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'>
                                        <a href="https://moonidefi.com/pdf/Whitepaper.pdf" target="_blank" className="btn btn-medium btn-rounded btn-trans"><i className="fab fa-paperclip"></i>Whitepaper</a>
                                        <a href="https://moonidefi.com/pdf/Audit.pdf" target="_blank" className="btn btn-medium btn-rounded btn-trans">Audit</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="social-icons social-icons-simple revicon white d-none d-md-block d-lg-block">
                        <li className="d-table"><a href="https://twitter.com/moonidefi" className="social-icon"><i className="fab fa-twitter"></i> </a> </li>
                        <li className="d-table"><a href="https://t.me/moonichat" className="social-icon"><i className="fab fa-telegram-plane"></i> </a> </li>
                    </ul>
                </div>

                <a href="#about" className="scroll-down link scroll main-font font-15 animate"><i className="fas fa-long-arrow-alt-down"></i></a>

                <section className="about" id="about">

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-3" style={{ padding: "10px" }}>
                                <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xed438051437c22a9ef249b68c7e292435fe8b858" target="_blank" className="btn btn-medium rounded-pill w-100 portfolio-btn-pink">Buy on Pancakeswap</a>
                            </div>
                            <br />
                            <div className="col-12 col-lg-3" style={{ padding: "10px" }}>
                                <a href="https://bscscan.com/token/0xed438051437c22a9ef249b68c7e292435fe8b858" target="_blank" className="btn btn-medium rounded-pill w-100 portfolio-btn-pink">View Contract</a>
                            </div>
                            <br />
                            <div className="col-12 col-lg-3" style={{ padding: "10px" }}>
                                <a href="https://dex.guru/token/0xEd438051437c22A9Ef249B68c7E292435fE8B858" target="_blank" className="btn btn-medium rounded-pill w-100 portfolio-btn-pink"><i className="fab fa-area-chart"></i>Live Price Chart</a>
                            </div>
                            <br />
                            <div className="col-12 col-lg-3" style={{ padding: "10px" }}>
                                <a href="https://dxsale.app/app/pages/dxlockview?id=0&add=0xac59274737FdF93545E4652f9C6ea967cF7E2497&type=lplock&chain=BSC" target="_blank" className="btn btn-medium rounded-pill w-100 portfolio-btn-pink"><i className="fab fa-area-chart"></i>Locked LP</a>
                            </div>
                        </div>
                    </div >
                </section>
                <section className="about" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                                <p className="text-pink fontWeight-200 font-20">Binance Smart Chain DeFi</p>
                                <h1 className="main-font fontWeight-600 text-white">What is M O O N I?</h1>
                            </div>

                            <div className="col-12 col-lg-6 m-ipad wow fadeInRight" data-wow-delay="300ms">
                                <div className="ml-md-4 pl-md-2 fontWeight-200 text-grey font-18">
                                    <p>Mooni DeFi is the incubator based on Binance Smart chain with innovative product launches, where community gets rewarded in ecosystem tokens. Our focus is to build innovative DeFi products for BSC and support fair launches for the community. The ecosystem consists of four main offerings initially, here are the products with launch dates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row about-margin">
                            <div className="col-md-4 col-sm-12">
                                <div className="about-box center-block bg-green wow zoomIn" data-wow-delay="400ms">
                                    <div className="about-main-icon pb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            width="80" height="80"
                                            viewBox="0 0 172 172"
                                            style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M160.14771,4.8291c-0.61939,-0.05249 -1.24927,-0.03149 -1.87915,0.06299l-16.49243,2.41455c-19.8623,2.90796 -38.00293,12.8811 -51.08349,28.09277l-23.70459,27.53638l-41.23633,10.25659c-2.73999,0.68237 -5.15454,2.18359 -6.9917,4.33569l-8.80786,10.36157c-1.37524,1.6167 -1.67969,3.82129 -0.78735,5.74243c0.89234,1.92114 2.76099,3.11792 4.88159,3.11792h27.37891c0.12598,1.0708 0.47241,2.09961 1.01831,3.05493l-5.79492,10.66602c-0.07349,0.13647 -0.13647,0.28345 -0.18897,0.43042c-0.26245,0.79785 -0.39892,1.6167 -0.41992,2.42505l-1.20727,0.36743c-9.7002,2.97095 -17.06983,10.43506 -19.72583,19.96728c-2.21509,7.96802 -2.85547,16.17749 -3.03393,20.37671c-0.05249,1.50122 0.5144,2.96045 1.57471,4.02075c0.99732,0.99732 2.37256,1.56421 3.7793,1.56421c0.08398,0 0.15747,0 0.23096,-0.0105c4.16772,-0.16797 12.3457,-0.79785 20.28223,-2.99194c9.46924,-2.62451 17.15381,-10.26709 20.04077,-19.93579l0.17847,-0.60889c0.14697,0.0105 0.28345,0.03149 0.43042,0.03149c0.92383,0 1.85816,-0.14697 2.79248,-0.45141c0.13647,-0.04199 0.26245,-0.10498 0.38843,-0.17847l10.69751,-5.63745c0.87134,0.5144 1.80566,0.85034 2.78198,1.00781v27.11646c0,2.1206 1.18628,3.98926 3.10742,4.88159c0.73486,0.33594 1.51172,0.50391 2.27808,0.50391c1.24927,0 2.46704,-0.44092 3.46436,-1.29126l10.37207,-8.81836c2.1521,-1.83716 3.64282,-4.25171 4.33569,-6.9917l10.07813,-40.54346l28.00879,-24.10352c15.21167,-13.08057 25.18482,-31.23169 28.09277,-51.08349l2.40405,-16.49243c0.38843,-2.53003 -0.44092,-5.03906 -2.25708,-6.85522c-1.36475,-1.36475 -3.12842,-2.1731 -4.98657,-2.34107zM159.44434,10.18311c0.70337,0 1.37524,0.27295 1.88965,0.77685c0.59839,0.60889 0.88184,1.44873 0.75586,2.29907l-2.41455,16.48193c-2.71899,18.58154 -12.05176,35.55689 -26.27661,47.79761l-28.07178,24.15601c-0.38843,0.19946 -0.73486,0.47241 -0.98682,0.85034l-26.05615,22.41333c-1.0498,0.91333 -2.65601,0.85034 -3.65332,-0.13647l-27.14795,-27.14795c-0.98682,-0.99732 -1.0498,-2.60352 -0.14697,-3.65332l47.43018,-55.11474c5.81592,-6.76074 12.70264,-12.3982 20.32422,-16.76538l12.00977,12.00977c0.5249,0.5249 1.20728,0.78735 1.90015,0.78735c0.69287,0 1.37524,-0.26245 1.90015,-0.78735c1.0498,-1.0498 1.0498,-2.75049 0,-3.80029l-10.83398,-10.83398c7.05469,-3.39087 14.62378,-5.74243 22.48682,-6.89722l16.48193,-2.41455c0.13648,-0.0105 0.27295,-0.02099 0.40942,-0.02099zM137.0625,37.625c-0.68237,0 -1.37524,0.26245 -1.90015,0.78735c-1.0498,1.0498 -1.0498,2.75049 0,3.80029l8.0625,8.0625c0.5249,0.5249 1.20728,0.78735 1.90015,0.78735c0.69287,0 1.37524,-0.26245 1.90015,-0.78735c1.0498,-1.0498 1.0498,-2.75049 0,-3.80029l-8.0625,-8.0625c-0.5249,-0.5249 -1.21777,-0.78735 -1.90015,-0.78735zM115.5625,40.3125c-8.89185,0 -16.125,7.23315 -16.125,16.125c0,8.89185 7.23315,16.125 16.125,16.125c8.89185,0 16.125,-7.23315 16.125,-16.125c0,-8.89185 -7.23315,-16.125 -16.125,-16.125zM115.5625,45.6875c5.9314,0 10.75,4.8186 10.75,10.75c0,5.9314 -4.8186,10.75 -10.75,10.75c-5.9314,0 -10.75,-4.8186 -10.75,-10.75c0,-5.9314 4.8186,-10.75 10.75,-10.75zM60.93066,69.97998l-17.65771,20.52368c-0.23096,0.28345 -0.41992,0.57739 -0.60889,0.87134h-28.61767l8.81836,-10.37207c1.0918,-1.28076 2.54053,-2.18359 4.18872,-2.59302zM94.80786,71.00879c-0.69287,0 -1.37524,0.26245 -1.91065,0.78735c-1.0498,1.0498 -1.0498,2.75049 0,3.80029l3.81079,3.80029c0.5144,0.5249 1.20728,0.78735 1.88965,0.78735c0.69287,0 1.38574,-0.26245 1.90015,-0.78735c1.0603,-1.0498 1.0603,-2.75049 0,-3.80029l-3.78979,-3.80029c-0.5354,-0.5249 -1.21777,-0.78735 -1.90015,-0.78735zM85.29663,80.50952c-0.68237,0 -1.37524,0.26245 -1.90015,0.78735c-1.0498,1.0498 -1.0498,2.75049 0,3.80029l3.81079,3.80029c0.5144,0.5249 1.20728,0.78735 1.90015,0.78735c0.68237,0 1.37524,-0.26245 1.88965,-0.78735c1.0603,-1.0498 1.0603,-2.75049 0,-3.81079l-3.80029,-3.78979c-0.5249,-0.5249 -1.21777,-0.78735 -1.90015,-0.78735zM75.7959,90.02075c-0.68237,0 -1.37524,0.25195 -1.90015,0.77685c-1.0498,1.0603 -1.0498,2.75049 0,3.81079l3.80029,3.78979c0.5249,0.5249 1.20728,0.78735 1.90015,0.78735c0.69287,0 1.37524,-0.26245 1.90015,-0.78735c1.0498,-1.0498 1.0498,-2.73999 0,-3.78979l-3.80029,-3.81079c-0.5249,-0.5249 -1.21777,-0.77685 -1.90015,-0.77685zM66.30566,99.52148c-0.69287,0 -1.37524,0.25195 -1.90015,0.78735c-1.0603,1.03931 -1.0603,2.73999 0,3.78979l3.78979,3.81079c0.5249,0.5144 1.20728,0.77685 1.90015,0.77685c0.69287,0 1.37524,-0.26245 1.90015,-0.77685c1.0498,-1.0498 1.0498,-2.75049 0,-3.81079l-3.80029,-3.78979c-0.5249,-0.5354 -1.20728,-0.78735 -1.88965,-0.78735zM46.26489,104.04614l21.96191,21.97241l-8.73437,4.59815c-1.02881,0.29395 -2.01562,0.08398 -2.65601,-0.5564l-14.60278,-14.59228c-0.70337,-0.71387 -0.97632,-1.72168 -0.73486,-2.677zM101.84155,111.7832l-8.25146,33.17383c-0.40942,1.6377 -1.30176,3.09692 -2.59302,4.19922l-10.37207,8.80786v-28.10327c0.40942,-0.24146 0.79785,-0.51441 1.17578,-0.82935zM37.70898,118.42847c0.22046,0.29395 0.46191,0.57739 0.72436,0.82935l14.60278,14.61328c0.04199,0.04199 0.09448,0.06299 0.13647,0.11548l-0.34643,1.15478c-2.36206,7.92603 -8.6189,14.16187 -16.32446,16.29297c-7.41162,2.05762 -15.12768,2.64551 -19.05395,2.83447c0.16797,-3.95776 0.76636,-11.71582 2.83447,-19.16943c2.1626,-7.74756 8.18848,-13.83642 16.125,-16.26147z"></path></g></g></svg>
                                    </div>
                                    <p className="text-pink fontWeight-200 font-20">Fair launch</p>
                                    <p className="text-grey fontWeight-200 font-20">M O O N I was a stealth launch with no presale. 1% of supply went to the dev to cover fees. The initial liquidity was added by the dev and the project was given to the community.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="about-box center-block bg-blue wow zoomIn" data-wow-delay="500ms">
                                    <div className="about-main-icon pb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            width="80" height="80"
                                            viewBox="0 0 172 172"
                                            style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M24.1875,5.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v27.09546c0,1.48023 1.19678,2.6875 2.6875,2.6875h26.875c1.49072,0 2.6875,-1.20727 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875h-19.49487c13.60547,-13.84692 32.19751,-21.72046 51.74487,-21.72046c40.00806,0 72.5625,32.55444 72.5625,72.5625c0,37.90845 -29.58349,69.70703 -67.35547,72.38403c-1.48022,0.09448 -2.59302,1.38574 -2.48804,2.86597c0.09448,1.41724 1.27026,2.49854 2.6665,2.49854c0.06299,0 0.13648,0 0.19946,-0.0105c40.56445,-2.86597 72.35254,-37.01611 72.35254,-77.73804c0,-42.979 -34.96899,-77.9375 -77.9375,-77.9375c-21.40552,0 -41.75073,8.77637 -56.4375,24.1875v-21.5c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM84.66675,21.5c-4.18872,-0.09448 -8.39844,0.24146 -12.55566,1.00781c-1.45923,0.27295 -2.41455,1.66919 -2.1521,3.12842c0.27295,1.45923 1.67969,2.43555 3.12842,2.1626c10.10962,-1.86865 20.55517,-0.91333 30.21338,2.72949c0.31494,0.11548 0.64038,0.17847 0.95532,0.17847c1.0813,0 2.11011,-0.67187 2.51953,-1.74267c0.5144,-1.38574 -0.17847,-2.93945 -1.57471,-3.46436c-6.60327,-2.49853 -13.55298,-3.83179 -20.53418,-3.99976zM115.14258,30.54932c-1.02881,-0.16797 -2.11011,0.28345 -2.698,1.22827c-0.78735,1.24927 -0.40942,2.90796 0.85034,3.70581c1.73218,1.0813 3.42236,2.27808 5.03906,3.54834c0.49341,0.38843 1.0708,0.57739 1.65869,0.57739c0.79785,0 1.5852,-0.34643 2.11011,-1.01831c0.92383,-1.16528 0.72436,-2.85547 -0.44092,-3.7793c-1.76367,-1.38574 -3.62183,-2.698 -5.51147,-3.88428c-0.31494,-0.19946 -0.66138,-0.32544 -1.00781,-0.37793zM83.3125,43c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v8.0625h-2.6875c-7.41162,0 -13.4375,6.02588 -13.4375,13.4375v5.375c0,7.41162 6.02588,13.4375 13.4375,13.4375h10.75c4.44067,0 8.0625,3.62183 8.0625,8.0625v5.375c0,4.44067 -3.62183,8.0625 -8.0625,8.0625h-2.6875v-16.125c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v16.125h-2.6875c-4.44067,0 -8.0625,-3.62183 -8.0625,-8.0625c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,7.41162 6.02588,13.4375 13.4375,13.4375h2.6875v8.0625c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-8.0625h2.6875c7.41162,0 13.4375,-6.02588 13.4375,-13.4375v-5.375c0,-7.41162 -6.02588,-13.4375 -13.4375,-13.4375h-2.6875v-16.125c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v16.125h-2.6875c-4.44067,0 -8.0625,-3.62183 -8.0625,-8.0625v-5.375c0,-4.44067 3.62183,-8.0625 8.0625,-8.0625h10.75c4.44067,0 8.0625,3.62183 8.0625,8.0625c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-7.41162 -6.02588,-13.4375 -13.4375,-13.4375h-2.6875v-8.0625c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM14.61328,50.0127c-1.03931,-0.0105 -2.04712,0.58789 -2.49853,1.5957c-0.60889,1.36475 0.0105,2.94995 1.36474,3.55884l4.91309,2.18359c0.34643,0.15747 0.71387,0.23096 1.0813,0.23096c1.02881,0 2.01563,-0.59839 2.45654,-1.6062c0.60889,-1.35425 0,-2.93945 -1.35425,-3.53784l-4.91309,-2.18359c-0.34643,-0.15747 -0.69287,-0.23096 -1.0498,-0.24146zM9.19629,65.0354c-1.01831,0.18896 -1.88965,0.98682 -2.1206,2.06811c-0.30445,1.45923 0.61938,2.88696 2.07861,3.19141l5.24902,1.12329c0.18897,0.03149 0.37793,0.05249 0.5669,0.05249c1.23877,0 2.35156,-0.86084 2.62451,-2.1311c0.30444,-1.44873 -0.61939,-2.87646 -2.07861,-3.18091l-5.24902,-1.11279c-0.36743,-0.08398 -0.72437,-0.08398 -1.0708,-0.0105zM8.0625,80.625c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h5.375c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM15.47412,95.19629c-0.33594,-0.06299 -0.70337,-0.06299 -1.0708,0.0105l-5.24902,1.12329c-1.45923,0.30444 -2.38306,1.73218 -2.07861,3.19141c0.27295,1.25977 1.38574,2.1311 2.62451,2.1311c0.18897,0 0.37793,-0.021 0.5669,-0.06299l5.24902,-1.11279c1.45923,-0.31494 2.38305,-1.74268 2.07861,-3.19141c-0.23096,-1.0918 -1.0813,-1.88965 -2.1206,-2.08911zM19.43189,109.05371c-0.34643,0 -0.70337,0.07349 -1.03931,0.22046l-4.91309,2.18359c-1.35425,0.60889 -1.96314,2.19409 -1.36474,3.55884c0.44092,0.99732 1.42773,1.5957 2.45654,1.5957c0.36743,0 0.73486,-0.08398 1.0918,-0.24146l4.91309,-2.18359c1.35425,-0.59839 1.96314,-2.19409 1.35425,-3.54834c-0.45141,-1.01831 -1.44873,-1.6062 -2.49853,-1.58521zM27.21094,121.73535c-0.68237,-0.11548 -1.40674,0.03149 -2.00513,0.47241l-4.35669,3.15991c-1.19678,0.87134 -1.45923,2.56152 -0.58789,3.7583c0.5249,0.72436 1.34375,1.10229 2.18359,1.10229c0.5459,0 1.0918,-0.15747 1.57471,-0.5144l4.34619,-3.14941c1.19678,-0.88184 1.46973,-2.56152 0.59839,-3.7688c-0.44092,-0.59839 -1.0813,-0.95532 -1.75317,-1.0603zM36.40723,132.55884c-0.68237,0.03149 -1.35425,0.33594 -1.84766,0.88184l-3.60083,3.99976c-0.98682,1.10229 -0.89233,2.79248 0.19946,3.78979c0.5144,0.46191 1.16528,0.69287 1.80566,0.69287c0.72436,0 1.46973,-0.30444 1.99463,-0.89233l3.59033,-3.99976c0.99732,-1.10229 0.90283,-2.79248 -0.19946,-3.78979c-0.5459,-0.49341 -1.24927,-0.71387 -1.94214,-0.68237zM48.71094,141.15674c-1.0498,-0.12598 -2.11011,0.35693 -2.65601,1.32275l-2.6875,4.66113c-0.74536,1.28076 -0.30444,2.91846 0.97632,3.66382c0.41992,0.24146 0.88184,0.36743 1.34375,0.36743c0.92383,0 1.82666,-0.48291 2.32007,-1.34375l2.6875,-4.66113c0.74536,-1.28076 0.31494,-2.92896 -0.97632,-3.66382c-0.32544,-0.18897 -0.67187,-0.30444 -1.00781,-0.34643zM61.48706,147.08814c-1.0498,0.09448 -1.98413,0.78735 -2.32007,1.84766l-1.66919,5.11255c-0.45141,1.40674 0.31494,2.92895 1.72168,3.38037c0.28345,0.09448 0.5669,0.13647 0.83984,0.13647c1.13379,0 2.18359,-0.72436 2.55103,-1.85815l1.66919,-5.11255c0.46191,-1.40674 -0.31494,-2.92895 -1.72168,-3.38037c-0.35693,-0.11548 -0.72436,-0.15747 -1.0708,-0.12598zM76.28931,150.13257c-1.45923,-0.13647 -2.80298,0.91333 -2.96045,2.39355l-0.5564,5.34351c-0.15747,1.48022 0.91333,2.80298 2.39355,2.96045c0.09448,0 0.18897,0 0.28345,0c1.36474,0 2.51953,-1.01831 2.6665,-2.40405l0.5669,-5.34351c0.14697,-1.46973 -0.91333,-2.79248 -2.39355,-2.94995z"></path></g></g></svg>
                                    </div>
                                    <p className="text-pink fontWeight-200 font-20">Automatic LP</p>
                                    <p className="text-grey fontWeight-200 font-20">After each transaction, the 4% is automatically added to LP. That is why the LP increases automatically.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="about-box center-block bg-green wow zoomIn" data-wow-delay="600ms">
                                    <div className="about-main-icon pb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            width="80" height="80"
                                            viewBox="0 0 172 172"
                                            style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M102.125,10.75c-23.70912,0 -43,19.29088 -43,43c0,23.70913 19.29088,43 43,43c23.70913,0 43,-19.29087 43,-43c0,-23.70912 -19.29087,-43 -43,-43zM102.125,16.125c20.7475,0 37.625,16.8775 37.625,37.625c0,20.7475 -16.8775,37.625 -37.625,37.625c-20.7475,0 -37.625,-16.8775 -37.625,-37.625c0,-20.7475 16.8775,-37.625 37.625,-37.625zM102.125,29.5625c-1.48619,0 -2.6875,1.204 -2.6875,2.6875v2.6875c-5.92863,0 -10.75,4.82138 -10.75,10.75c0,5.92862 4.82137,10.75 10.75,10.75h5.375c2.96431,0 5.375,2.41069 5.375,5.375c0,2.96431 -2.41069,5.375 -5.375,5.375v-5.375c0,-1.4835 -1.20131,-2.6875 -2.6875,-2.6875c-1.48619,0 -2.6875,1.204 -2.6875,2.6875v5.375c-2.96431,0 -5.375,-2.41069 -5.375,-5.375c0,-1.4835 -1.20131,-2.6875 -2.6875,-2.6875c-1.48619,0 -2.6875,1.204 -2.6875,2.6875c0,5.92862 4.82137,10.75 10.75,10.75v2.6875c0,1.4835 1.20131,2.6875 2.6875,2.6875c1.48619,0 2.6875,-1.204 2.6875,-2.6875v-2.6875c5.92863,0 10.75,-4.82138 10.75,-10.75c0,-5.92862 -4.82137,-10.75 -10.75,-10.75v-5.375c0,-1.4835 -1.20131,-2.6875 -2.6875,-2.6875c-1.48619,0 -2.6875,1.204 -2.6875,2.6875v5.375c-2.96431,0 -5.375,-2.41069 -5.375,-5.375c0,-2.96431 2.41069,-5.375 5.375,-5.375h5.375c2.96431,0 5.375,2.41069 5.375,5.375c0,1.4835 1.20131,2.6875 2.6875,2.6875c1.48619,0 2.6875,-1.204 2.6875,-2.6875c0,-5.92862 -4.82137,-10.75 -10.75,-10.75v-2.6875c0,-1.4835 -1.20131,-2.6875 -2.6875,-2.6875zM49.1676,97.61609c-1.6227,-0.0367 -3.24973,0.03947 -4.87634,0.23096l-31.79334,3.7373c-4.06081,0.47837 -7.12292,3.91964 -7.12292,8.01001v34.02417c0,2.49937 1.12955,4.81663 3.10217,6.35657c1.96994,1.53725 4.48884,2.06916 6.91296,1.46448l17.63672,-4.40393c4.49619,-1.118 9.23152,-0.55186 13.32727,1.6062l33.82996,17.81518c3.526,1.85706 7.39172,2.78723 11.2644,2.78723c3.82163,0 7.64736,-0.90237 11.13843,-2.71374l57.2511,-29.68848c4.18713,-2.1715 6.78174,-6.4503 6.78174,-11.18567c0.00269,-3.92106 -1.77497,-7.54696 -4.87634,-9.9469c-3.10137,-2.40263 -7.06292,-3.20921 -10.85498,-2.22559l-36.03455,9.33801c-0.7095,-2.09894 -1.9324,-4.01109 -3.57983,-5.54297c-2.72244,-2.53163 -6.39537,-3.83002 -10.11487,-3.56934l-5.8894,0.42517c-2.30588,0.172 -4.61226,-0.26564 -6.69776,-1.24927l-25.29504,-11.93628c-4.43841,-2.09423 -9.24126,-3.22303 -14.10937,-3.33313zM49.04688,102.99109c4.11994,0.09448 8.1844,1.04699 11.94153,2.81873l25.29505,11.93628c2.91862,1.376 6.15244,1.97624 9.37476,1.75317l5.8894,-0.42517c2.26019,-0.15588 4.41493,0.59898 6.07312,2.1416c1.6555,1.53994 2.56677,3.63703 2.56677,5.8999v1.0918c0,1.05619 -0.62039,2.01861 -1.58521,2.4513l-7.93127,3.56408c-5.95281,2.67406 -12.84411,2.81512 -18.90173,0.39368l-13.55298,-5.42749c-1.38406,-0.55363 -2.94491,0.11985 -3.49585,1.50122c-0.55362,1.37869 0.11729,2.93966 1.49597,3.4906l13.55823,5.42749c7.40675,2.967 15.82589,2.78778 23.10095,-0.48291l7.92603,-3.56409c2.89175,-1.29806 4.76086,-4.18532 4.76086,-7.35388l36.67493,-9.52698c2.17687,-0.559 4.43841,-0.09255 6.21484,1.28076c1.77644,1.37331 2.79773,3.45062 2.79773,5.71619c0,2.70094 -1.48703,5.149 -3.88428,6.39331l-57.2511,29.68323c-5.46637,2.82994 -11.98188,2.81507 -17.42676,-0.05249l-33.82995,-17.81519c-3.5045,-1.84631 -7.36753,-2.78723 -11.26441,-2.78723c-1.96187,0 -3.92816,0.24061 -5.86316,0.72436l-17.64197,4.40393c-0.80625,0.20156 -1.64332,0.02516 -2.29907,-0.48816c-0.66113,-0.51331 -1.03931,-1.28748 -1.03931,-2.12061v-34.02417c0,-1.36256 1.02075,-2.51319 2.37256,-2.67175l31.79858,-3.7373c1.37734,-0.16058 2.75242,-0.22571 4.12573,-0.19421zM18.8125,110.1875c-1.4835,0 -2.6875,1.204 -2.6875,2.6875c0,1.4835 1.204,2.6875 2.6875,2.6875h5.375c1.4835,0 2.6875,-1.204 2.6875,-2.6875c0,-1.4835 -1.204,-2.6875 -2.6875,-2.6875zM18.8125,123.625c-1.4835,0 -2.6875,1.204 -2.6875,2.6875c0,1.4835 1.204,2.6875 2.6875,2.6875h5.375c1.4835,0 2.6875,-1.204 2.6875,-2.6875c0,-1.4835 -1.204,-2.6875 -2.6875,-2.6875zM18.8125,137.0625c-1.4835,0 -2.6875,1.204 -2.6875,2.6875c0,1.4835 1.204,2.6875 2.6875,2.6875h5.375c1.4835,0 2.6875,-1.204 2.6875,-2.6875c0,-1.4835 -1.204,-2.6875 -2.6875,-2.6875z"></path></g></g></svg>
                                    </div>
                                    <p className="text-pink fontWeight-200 font-20">Frictionless Staking</p>
                                    <p className="text-grey fontWeight-200 font-20">4% of every transaction redistributed to holders. Earn yield by just holding! Already burned 50% M O O N I</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center wow bounceInLeft" data-wow-delay="300ms">
                            <img className="saf" height="300px" src="/vendor/moonitemplate/images/blockchain_mooni_image.webp" alt="About-Us" />
                        </div>
                        <br /><br /><br />
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                                    <div className="d-flex justify-content-center wow bounceInLeft" data-wow-delay="300ms">
                                        <img className="saf" src="/vendor/moonitemplate/images/mooni_launch.png" alt="About-Us" />
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 m-ipad wow fadeInRight" data-wow-delay="300ms">
                                    <div className="ml-md-4 pl-md-2 fontWeight-200 text-grey font-18">
                                        <p className="text-pink fontWeight-200 font-20">Power of M O O N I</p>
                                        <h1 className="main-font fontWeight-600 text-white">Fair Launch!</h1>
                                        <p>
                                            Mooni token of Mooni deFi ecosystem, holding Mooni will give users voting rights for the development of ecosystem,
                                            also when you trade, each transaction has a 8% fee applied, which will be redistributed instantly to all holders
                                            of the Mooni token.​ The great thing about this mechanism is that holders will be earning rewards without staking or
                                            any interaction with smart contract. Mooni is also a governance plus utility token, using which the community can
                                            exercise rights on development of projects from our ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about" id="partner">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 m-ipad wow fadeInRight" data-wow-delay="300ms">
                                <div className="ml-md-4 pl-md-2 fontWeight-200 text-grey font-18">
                                    <h1 className="main-font text-pink  fontWeight-600 text-white">
                                        Partner
                                    </h1>
                                    <p>
                                        Flourmix Yield Farming
                                        Binance Smart Chain
                                    </p>
                                    <a href="https://flourmix.finance/" target="_blank">
                                        <img className="saf" width="200px" src="/vendor/moonitemplate/images/flourmix.webp" alt="Flourmix" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-0" id="roadmap">
                    <div className="row" style={{ backgroundColor: "#ddd" }}>
                        <div className="col-12" style={{ textAlign: "center" }}>
                            <img style={{ textAlign: "center" }} src="/vendor/moonitemplate/images/Roadmap.webp" alt="Roadmap" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        
                            <Iframe url="https://www.thinglink.com/mediacard/1432446840933974017"
                                width="640" 
                                height="650"
                                styles ="width: 100%; height: 650px"
                                allowFullScreen
                                scrolling={false}  
                                />
                            {/* <iframe width="640" height="320" data-original-width="640" data-original-height="320" 
                            src="https://www.thinglink.com/mediacard/1432446840933974017" 
                            type="text/html" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" scrolling="no" 
                            style={{ width: "100%", height: "650px" }}></iframe> */}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Landing;