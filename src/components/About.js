import React from "react";
import coverImg from "../imgs/cover.jpeg";

export const About = () => {
  return (
    <div id="about" className="flex flex-col items-center p-4 md:p-8 font-karla">
      <h3 className="text-3xl mt-4 font-medium pt-4 pb-10">About</h3>
      <div className="md:max-w-[800px]">
        <img src={coverImg} alt="Me hiking at Lake Louise 🇨🇦" className="md:max-w-[600px] mb-4 mx-auto shadow" />
        <p className=" p-6 leading-8 text-[14px] md:text-[16px] tracking-wider">
          I went to school for business/ finance, but after graduating realized
          that I was mostly interested in building and creating things! I built a
          startup called Koji Street, which was a marketplace for independent
          fashion designers and artists. I worked on that for about 1 1/2 years
          until I felt like I was hitting a wall I couldn't overcome. I realized
          my biggest issue in my last startup was my lack of technical ability
          to build out products/ services. So I decided to teach myself how to
          code. I first learned Web development and then decided that I wanted
          to be a builder in the CBW (Crypto, Blockchain and Web3) space because
          it was so innovative. I learned Solidity, hardhat and ethers.js in
          order to build smart contracts. So far, I have mainly built for EVM
          based chains like Ethereum testnets, mainnet, Polygon, etc... Right
          now I am focused on learning and building as much as possible in the
          CBW space because I want to be a part of building the future!
        </p>
      </div>
    </div>
  );
};
