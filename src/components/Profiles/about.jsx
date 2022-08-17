import React from 'react'
import Spotify from "../Music/Spotify"
import cap from "../../assets/img/gcap.png"

const AboutCard = (props) => {
  return (
    props.trigger && (
      <div className="post-outer-two">
        <div className="posts-two-master">
          <div className="posts-two-block-1">
            <h1 className="posts-two-heading">About</h1>
          </div>
        </div>
        <div className="about-card-outer">
          <div className="about-card-inner">
            <img className="cap" src={cap} alt="cap" />
          </div>
          <div className="about-card-inner2">
            <div className="about-grad">
              <a
                target="_blank"
                className="dm-link"
                href="https://devmountain.com/web-bootcamp-immersive?campaignid=14045896070&adgroupid=126527704458&adid=535792062951&utm_term=devmountain&utm_campaign=GoogleAds+-+io0_DevMountain+-+Struck_Brand+-+CON+-+CPC&utm_source=adwords&utm_medium=ppc&hsa_acc=7536270230&hsa_cam=14045896070&hsa_grp=126527704458&hsa_ad=535792062951&hsa_src=g&hsa_tgt=kwd-310433495452&hsa_kw=devmountain&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwo_KXBhAaEiwA2RZ8hOI4klsBg9zeQmLzyiU4nsC-WdVtQN5BbXiNBVj23jzFmYFzZ3RrzBoCT4cQAvD_BwE"
              >
                <p className="grad">Devmountain</p>
              </a>
              <p className="grad2">Attended from 2022 to 2022</p>
            </div>
          </div>
        </div>
        <div className="posts-two-master">
          <div className="posts-two-block-1">
            <h1 className="posts-two-heading">Favorite Song</h1>
          </div>
        </div>
        <div className="music-block-inner">
          <Spotify link="https://open.spotify.com/track/2F0MOLTF1sfgt4ZGW8wF5V?si=063dce8a4e2544a1"></Spotify>
        </div>
      </div>
    )
  );
};
export default AboutCard; 