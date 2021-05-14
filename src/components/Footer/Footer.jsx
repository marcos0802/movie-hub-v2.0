import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import CallIcon from "@material-ui/icons/Call";
import RdcFlag from "../../assets/rdc.png";
import {
  ContactUs,
  Copyright,
  Country,
  FollowUs,
  FooterContainer,
  Title,
} from "./FooterStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        <Title>Copyright</Title>
        <span>Movie Hub&copy;2021 - Privacy Policy</span>
      </Copyright>
      <ContactUs>
        <Title>Contact Us</Title>
        <span>
          {" "}
          <MailIcon style={{ fontSize: "16px" }} /> marmus2019@gmail.com
        </span>
        <span>
          {" "}
          <HomeWorkIcon style={{ fontSize: "16px" }} /> Kinshasa, Ngaliema
        </span>
        <span>
          {" "}
          <CallIcon style={{ fontSize: "16px" }} /> +243993114176
        </span>
      </ContactUs>
      <FollowUs>
        <Title>Follow Us</Title>
        <div className="social-media">
          <span>
            {" "}
            <GitHubIcon style={{ fontSize: "20px" }} />{" "}
          </span>
          <span>
            {" "}
            <FacebookIcon style={{ fontSize: "20px" }} />{" "}
          </span>
          <span>
            {" "}
            <InstagramIcon style={{ fontSize: "20px" }} />{" "}
          </span>
          <span>
            {" "}
            <TwitterIcon style={{ fontSize: "20px" }} />{" "}
          </span>
        </div>
      </FollowUs>
      <Country>
        <img src={RdcFlag} alt="RDC" />
        RDCongo
      </Country>
    </FooterContainer>
  );
};

export default Footer;
