import React from "react"
import JeremyPhoto from "../images/image-jeremy.png"
import iconOptions from "../images/icon-ellipsis.svg"
import iconWork from "../images/icon-work.svg"
import iconPlay from "../images/icon-play.svg"
import iconStudy from "../images/icon-study.svg"
import iconExercise from "../images/icon-exercise.svg"
import iconSocial from "../images/icon-social.svg"
import iconSelfcare from "../images/icon-self-care.svg"
import stats from "../data.json"

function ModalContainer() {
    return (
        <div className="ModalContainer">
            <div className="profile">
                <div className="profile-header">
                    <div className="profile-header-photo">
                        <img className="profile-header-photo-img" src={JeremyPhoto} alt="profile pic"/>
                    </div>
                    <div className="profile-header-text">
                        <span className="profile-header-text-report">Report for</span>
                        <h1 className="profile-header-text-name">Jeremy Robson</h1>
                    </div>
                </div>
                <div className="profile-footer">
                    <button className="profile-footer-btn">Daily</button>
                    <button className="profile-footer-btn">Weekly</button>
                    <button className="profile-footer-btn">Monthly</button>
                </div>
            </div>
            {stats.map(stat => {
                return (
                    <div className="modal-stat light-orange-bg">
                        <div className="modal-stat-header">
                            <img className="modal-stat-header-img" src={stat.iconSrc} alt="modal stat"/>
                        </div>
                        <div className="modal-stat-footer">
                            <div className="modal-stat-footer-top center">
                                <h3 className="modal-stat-footer-activity">{stat.title}</h3>
                                <img className="modal-stat-footer-options" src={iconOptions} alt="icon options"/>
                            </div>
                            <div className="modal-stat-footer-bottom center">
                                <span className="modal-stat-footer-bottom-time">{stat.timeframes.daily.current}hrs</span>
                                <span className="modal-stat-footer-bottom-last">Last week - {stat.timeframes.daily.previous}hrs</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ModalContainer