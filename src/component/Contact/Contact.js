import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
const Contact = () => {
  return (
    <div className="bg-[#2879fe] md:px-[200px] text-[white] flex justify-center p-[15px]">
      <div className="w-screen flex items-center justify-between md:flex-row flex-col">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input
            className="my-4 p-2.5 rounded-[5px_0_0_5px] border-[none] bottom-[none]"
            type="text"
            placeholder="Enter your e-mail..."
          />
          <button className="text-[white] bg-[black] p-2.5 rounded-[0_5px_5px_0] border-[none]">
            JOIN US
          </button>
        </div>
        <div className="pl-4 flex gap-2.5 ">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
