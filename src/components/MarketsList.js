import React from "react";
import withContext from "../withContext";

const MarketsList = props => {
    const { products } = props.context;
  
    return (
        <>
        <div className="hero is-primary">
            <div className="hero-body container">
                <h4 className="title">Available markets</h4>
            </div>
        </div>
        <br />
        <div className="container">
            <div className="column">
                    <span className="title has-text-grey-light">
                        No markets found!
                    </span>
            </div>
        </div>
        </>
    );
  };
  
  export default withContext(MarketsList);