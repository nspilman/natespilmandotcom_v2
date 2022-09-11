import React from "react";
import linkedInImg from "../../src/assets/img/linkedin@2x.png";
import twitterImg from "../../src/assets/img/twitter@2x.png";
import githubImg from "../../src/assets/img/github@2x.png";
import instagramImg from "../../src/assets/img/instagram@2x.png";
import Link from "next/link";
import Image from "next/image";

const Icons = () => (
  <div className="icon-container">
    <div>
      <Link href="https://www.linkedin.com/in/natespilman/">
        <Image height="25px" width="25px" src={linkedInImg} alt="linkedIn" />
      </Link>
    </div>
    <div>
      <Link href="https://github.com/nspilman">
        <Image src={githubImg} height="25px" width="25px" alt="GitHub" />
      </Link>
    </div>
    <div>
      <Link href="https://twitter.com/Natetheperson">
        <Image src={twitterImg} alt="Twitter" height="25px" width="25px" />
      </Link>
    </div>
    <div>
      <Link href="https://www.instagram.com/natespilman/">
        <Image src={instagramImg} alt="Instagram" height="25px" width="25px" />
      </Link>
    </div>
  </div>
);

export default Icons;
