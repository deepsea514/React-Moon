import React, { Component } from "react";

class Stake extends Component {
    render() {
        return (
            <>
                <div id="stake-section" className="stake-section">
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="text-white font-weight-700">MOONI POOL</h3>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img width="150px" src="moonitemplate/images/mooni_logo.png" alt="image" />
                                        <p className="my-2 text-pink font-40 font-weight-700">0.000</p>
                                        <p className="mb-1 text-grey font-weight-500">MOONI earned</p>
                                    </div>
                                    <div>
                                        <div className="mb-5">
                                            <button className="btn btn-medium btn-rounded btn-light" style={{ width: "140px", height: "40px", lineHeight: "18px" }}>Harvest</button>
                                        </div>
                                        <div>
                                            <button className="btn btn-medium btn-rounded btn-light" style={{ width: "140px", height: "40px", lineHeight: "18px" }}>Compound</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center my-3">
                                    <button className="btn btn-medium btn-rounded btn-secondary mr-3" style={{ width: "40%", height: "50px", lineJeight: "18px" }}>Unstake MOONI</button>
                                    <button className="btn btn-medium btn-rounded btn-pink" data-toggle="modal" data-target="#depositModal" style={{ width: "50px", height: "50px", lineJeight: "18px" }}><i className="fa fa-plus"></i></button>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="text-purple mb-0">APR:</p>
                                    <div className="text-right text-white">
                                        <p className="mb-0 font-weight-600">-</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="text-purple mb-0">Your Stake:</p>
                                    <div className="text-right text-white">
                                        <p className="mb-0 font-weight-600">0.0000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <button className="btn btn-medium btn-rounded btn-purple-outline" style={{ width: "100px", height: "40px", lineHeight: "18px" }}><i className="fas fa-check-circle"></i> Core</button>
                                    </div>
                                    <div className="d-flex text-grey font-weight-600" style={{ cursor: "pointer" }}>
                                        <p className="mb-0 mr-2">Hide</p>
                                        <div>
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div>
                                        <img width="30px" src="moonitemplate/images/mooni_logo.png" alt="image" />
                                        <span className="text-purple">Total</span>
                                    </div>
                                    <p className="mb-0 text-white">NaN</p>
                                </div>
                                <div>
                                    <a href="#" className="text-grey font-weight-600">Add MOONI to MetaMask<img width="20px" src="moonitemplate/images/metamask.png" alt="image" /></a>
                                </div>
                                <div>
                                    <a href="#" className="text-grey font-weight-600">View project site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="depositModal" tabindex="-1" role="dialog" aria-labelledby="depositModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-white" id="depositModalLabel">Deposit MOONI Tokens</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-right">
                                    <p className="mb-2 text-purple font-14 font-weight-500">0 MOONI Available</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <input className="form-control" type="number" step="0.0001" value="0" />
                                    <p className="mb-0 text-pink font-weight-600">MOONI</p>
                                    <button className="btn btn-medium btn-rounded btn-pink" style={{ height: "30px", lineHeight: "8px", padding: "10px 20px" }}>Max</button>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-medium btn-rounded btn-pink-outline mr-3" data-dismiss="modal" style={{ width: "44%", height: "54px", lineHeight: "18px" }}>Cancel</button>
                                    <button className="btn btn-medium btn-rounded btn-pink" style={{ width: "44%", height: "54px", lineHeight: "18px" }}>Confirm</button>
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
                                    <img width="30px" src="moonitemplate/images/metamask.png" alt="image" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center wallet-div" data-dismiss="modal">
                                    <p className="text-white mb-0">Metamask</p>
                                    <img width="30px" src="moonitemplate/images/metamask.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Stake;