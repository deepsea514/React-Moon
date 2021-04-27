import React, { Component } from "react";

class Balance extends Component {
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
                                    <a href="#" className="sidemenu_btn" id="sidemenu_toggle">
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
                    <a id="close_side_menu" href="#"></a>
                </header>

                <div className="balance-section">
                    <div className="container">
                        <div className="select-div mb-4 font-weight-500">
                            <div className="row menu-div">
                                <div className="col-3 d-flex align-items-center mr-3">
                                    <img className="" width="90px" src="/vendor/moonitemplate/images/mooni_logo.png" alt="image" />
                                    <div>
                                        <p className="text-white mb-1">FARMING</p>
                                        <h5 className="text-pink mb-1 font-weight-600">MOONI</h5>
                                    </div>
                                </div>
                                <div className="col-8 row">
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14">Earned</p>
                                        <p className="text-pink mb-1">0.086</p>
                                    </div>
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14">APR</p>
                                        <p className="text-pink mb-1">Loading...</p>
                                    </div>
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14">Liquidity</p>
                                        <p className="text-white mb-1">-</p>
                                    </div>
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14"></p>
                                        <p className="text-white mb-1 mt-4"><i className="far fa-question-circle"></i></p>
                                    </div>
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14">Multiplier</p>
                                        <p className="text-white mb-1">-<i className="far fa-question-circle ml-5"></i></p>
                                    </div>
                                </div>
                                <div className="col-1 d-flex dropdown-icon text-grey" style={{ cursor: "pointer" }} data-toggle="collapse" data-target="#single_dropdown_div_1">
                                    <p className="mb-0 mr-2">Details</p>
                                    <div>
                                        <i className="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row dropdown-div collapse" id="single_dropdown_div_1">
                                <div className="col-md-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="mb-1 text-grey font-14">MOONI EARNED</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0 text-pink font-22 font-weight-700">0.086</p>
                                                <button className="btn btn-medium btn-rounded btn-pink" style={{ width: "40%", height: "50px", "lineJeight": "18px" }}>Harvest</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="mb-1 text-grey font-14">MOONI LP STAKED</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0 text-pink font-22 font-weight-700">7.365</p>
                                                <div className="d-flex">
                                                    <button className="btn btn-medium btn-rounded btn-pink-outline mr-2" data-toggle="modal" data-target="#stakeModal" style={{ width: "50px", height: "50px", lineHeight: "18px" }}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                    <button className="btn btn-medium btn-rounded btn-pink-outline" data-toggle="modal" data-target="#unstakeModal" style={{ width: "50px", height: "50px", lineHeight: "18px" }}>
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="select-div mb-4 font-weight-500">
                            <div className="row menu-div">
                                <div className="col-3 d-flex align-items-center mr-3">
                                    <img className="" width="90px" src="/vendor/moonitemplate/images/mooni_logo.png" alt="image" />
                                    <div>
                                        <p className="text-white mb-1">FARMING</p>
                                        <h5 className="text-pink mb-1 font-weight-600">MOONI</h5>
                                    </div>
                                </div>
                                <div className="col-8 row">
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14">Earned</p>
                                        <p className="text-pink mb-1">0.086</p>
                                    </div>
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14">APR</p>
                                        <p className="text-pink mb-1">Loading...</p>
                                    </div>
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14">Liquidity</p>
                                        <p className="text-white mb-1">-</p>
                                    </div>
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14"></p>
                                        <p className="text-white mb-1 mt-4"><i className="far fa-question-circle"></i></p>
                                    </div>
                                    <div className="col">
                                        <p className="text-grey mb-1 font-14">Multiplier</p>
                                        <p className="text-white mb-1">-<i className="far fa-question-circle ml-5"></i></p>
                                    </div>
                                </div>
                                <div className="col-1 d-flex dropdown-icon text-grey" style={{ cursor: "pointer" }} data-toggle="collapse" data-target="#single_dropdown_div_2">
                                    <p className="mb-0 mr-2">Details</p>
                                    <div>
                                        <i className="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row dropdown-div collapse" id="single_dropdown_div_2">
                                <div className="col-md-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="mb-1 text-grey font-14">MOONI EARNED</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0 text-pink font-22 font-weight-700">0.086</p>
                                                <button className="btn btn-medium btn-rounded btn-pink" style={{ width: "40%", height: "50px", lineHeight: "18px" }}>Harvest</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="mb-1 text-grey font-14">MOONI LP STAKED</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0 text-pink font-22 font-weight-700">7.365</p>
                                                <div className="d-flex">
                                                    <button className="btn btn-medium btn-rounded btn-pink-outline mr-2" data-toggle="modal" data-target="#stakeModal" style={{ width: "50px", height: "50px", lineHeight: "18px" }}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                    <button className="btn btn-medium btn-rounded btn-pink-outline" data-toggle="modal" data-target="#unstakeModal" style={{ width: "50px", height: "50px", lineHeight: "18px" }}>
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="stakeModal" tabindex="-1" role="dialog" aria-labelledby="stakeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-white" id="stakeModalLabel">Stake LP Tokens</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body has-error">
                                <div className="invalid" style={{ backgroundColor: "#2b243a", padding: "14px", borderRadius: "14px" }}>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2 text-white font-14 font-weight-500">Stake</p>
                                        <p className="text-right mb-2 text-white font-14 font-weight-500">Balance: 0</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input className="form-control" style={{ padding: "10px 0" }} type="number" step="0.0001" value="0" />
                                        <button className="btn btn-medium btn-rounded btn-pink" style={{ height: "30px", lineHeight: "8px", padding: "10px 20px" }}>Max</button>
                                        <p className="mb-0 text-pink font-weight-600">XED-BNB LP</p>
                                    </div>
                                </div>
                                <div className="error">
                                    <span className="font-14">No tokens to stake: get XED BNB LP</span>
                                </div>
                                <div className="text-center my-4">
                                    <button className="btn btn-medium btn-rounded btn-pink-outline mr-3" data-dismiss="modal" style={{ width: "44%", height: "54px", lineHeight: "18px" }}>Cancel</button>
                                    <button className="btn btn-medium btn-rounded btn-secondary" style={{ width: "44%", height: "54px", lineHeight: "18px" }}>Confirm</button>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="text-purple font-weight-600">Get XED BNB LP<i className="fas fa-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="unstakeModal" tabindex="-1" role="dialog" aria-labelledby="unstakeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-white" id="unstakeModalLabel">Unstake LP Tokens</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-4" style={{ backgroundColor: "#2b243a", padding: "14px", borderRadius: "14px" }}>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2 text-white font-14 font-weight-500">Unstake</p>
                                        <p className="text-right mb-2 text-white font-14 font-weight-500">Balance: 7.365</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input className="form-control" style={{ padding: "10px 0" }} type="number" step="0.0001" value="0" />
                                        <button className="btn btn-medium btn-rounded btn-pink" style={{ height: "30px", lineHeight: "8px", padding: "10px 20px" }}>Max</button>
                                        <p className="mb-0 text-pink font-weight-600">XED-BNB LP</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-medium btn-rounded btn-pink-outline mr-3" data-dismiss="modal" style={{ width: "44%", height: "54px", lineHeight: "18px" }}>Cancel</button>
                                    <button className="btn btn-medium btn-rounded btn-secondary" style={{ width: "44%", height: "54px", lineHeight: "18px" }}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="connectWalletModal" tabindex="-1" role="dialog" aria-labelledby="connectWalletModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-white" id="connectWalletModalLabel">Connect Wallets</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex justify-content-between align-items-center wallet-div" data-dismiss="modal">
                                    <p className="text-white mb-0">Metamask</p>
                                    <img width="30px" src="/vendor/moonitemplate/images/metamask.png" alt="image" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center wallet-div" data-dismiss="modal">
                                    <p className="text-white mb-0">Metamask</p>
                                    <img width="30px" src="/vendor/moonitemplate/images/metamask.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Balance;