import React from "react";
import Giftcardtext from "../../components/Giftcardtext";
import Egiftcard from "../../components/Egiftcard";
import Buygift from "../../components/Buygift";
import Cardbalance from "../../components/Cardbalance";
import Redeemgift from "../../components/Redeemgift";
import Corporategifting from "../../components/Corporategifting";
import Products from "../../components/Products";
// import Corporateform from "../../components/Corporateform";
function Giftscreen() {
  return (
    <div>
      {/* <Corporateform/> */}
      <Giftcardtext />
      <Egiftcard />
      <Buygift />
      <Cardbalance />
      <Redeemgift />
      <Corporategifting />
      <Products />
    </div>
  );
}

export default Giftscreen;
