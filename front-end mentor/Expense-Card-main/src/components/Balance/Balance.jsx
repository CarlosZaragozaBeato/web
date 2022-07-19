import React from "react";
import logo from '../../assets/images/logo.svg';
import './Balance.css';

export default function Balance() {
  return (
    <div className="balanceSection">
      <div className="balanceInfo">
        <h2 className="balance">My balance</h2>
        <h3 className="balanceAmount">$921.48</h3>
          </div>
          <figure className="balanceLogo">
              <img src={logo} alt="page logo" />
        </figure>
    </div>
  );
}
