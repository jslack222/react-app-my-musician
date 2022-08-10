import React from 'react'
import profile from "../../assets/img/profile.jpg"
import "./Profile.css"
import CoverImg from "../../assets/img/cover-img.jpg"



const Profile = () => {
    return (
        <div className="profile-outer-div">
            <div className="profile-inner-div">
                <div className="img-cover-container">
                    <img className="cover-img"src={CoverImg} alt="" />
                </div>
                <div className="profile-heading">
                    <img src={profile} className="pp-icon" alt="" />
                    <p></p>
                </div>
                <div className="info-section">
                    <div className="info-container">
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Profile; 

//localStorage.getItem
//do an axios call in the compoenent that you want to pass the info too.
//useParams from react router dom from pikachu demo
//save information to state 