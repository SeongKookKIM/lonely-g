import React from "react";
import Marquee from "react-fast-marquee";

function Content() {
  return (
    <div className="content">
      <div className="content-marquee">
        <Marquee gradient={true} gradientWidth={200}>
          <img src="/assets/our-loneliness.png" className="marquee-img" />
          <img src="/assets/our-loneliness.png" className="marquee-img" />
          <img src="/assets/our-loneliness.png" className="marquee-img" />
        </Marquee>
        <ul>
          <li>
            <img src="/assets/g/83.png" alt="NFT" />
          </li>
          <li>
            <img src="/assets/g/730.png" alt="NFT" />
          </li>
          <li>
            <img src="/assets/g/788.png" alt="NFT" />
          </li>
          <li>
            <img src="/assets/g/831.png" alt="NFT" />
          </li>
          <li>
            <img src="/assets/g/1026.png" alt="NFT" />
          </li>
          <li>
            <img src="/assets/g/1037.png" alt="NFT" />
          </li>
        </ul>
        <div className="content-use">
          <p>
            LONELY G HOLDERS ARE GRANTED COMMERCIAL RIGHTS TO THEIR ARTWORK{" "}
            <br className="mobile" /> THE SAME RIGHTS SET BY YUGA LABS FOR THEIR
            COLLECTIONS.
          </p>
        </div>
        <div className="more">
          <img src="/assets/IF YOU SEE MORE.png" alt="see more" />
        </div>
      </div>
    </div>
  );
}

export default Content;
