import React from "react"
import JeremyPhoto from "../images/image-jeremy.png"
import iconOptions from "../images/icon-ellipsis.svg"
import stats from "../data.json"

function ModalContainer() {
    const pickTimeframeDaily = () => {
        document.getElementById("daily").classList.add("active")
        if (document.getElementById("weekly").classList[1] === "active") {
            document.getElementById("weekly").classList.remove("active")
        } else if (document.getElementById("monthly").classList[1] === "active") {
            document.getElementById("monthly").classList.remove("active")
        }
    }
    const pickTimeframeWeekly = () => {
        document.getElementById("weekly").classList.add("active")
        if (document.getElementById("daily").classList[1] === "active") {
            document.getElementById("daily").classList.remove("active")
        } else if (document.getElementById("monthly").classList[1] === "active") {
            document.getElementById("monthly").classList.remove("active")
        }
    }
    const pickTimeframeMonthly = () => {
        document.getElementById("monthly").classList.add("active")
        if (document.getElementById("daily").classList[1] === "active") {
            document.getElementById("daily").classList.remove("active")
        } else if (document.getElementById("weekly").classList[1] === "active") {
            document.getElementById("weekly").classList.remove("active")
        }
    }
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
                    <button id="daily" onClick={pickTimeframeDaily} className="profile-footer-btn active">Daily</button>
                    <button id="weekly" onClick={pickTimeframeWeekly} className="profile-footer-btn">Weekly</button>
                    <button id="monthly" onClick={pickTimeframeMonthly} className="profile-footer-btn">Monthly</button>
                </div>
            </div>
            {stats.map(stat => {
                return (
                    <div key={stat.title} className={stat.classes}>
                        <div className="modal-stat-header">
                            <img className="modal-stat-header-img" src={stat.iconUrl} alt="modal stat"/>
                        </div>
                        <div className="modal-stat-footer">
                            <div className="modal-stat-footer-top center">
                                <h3 className="modal-stat-footer-top-activity">{stat.title}</h3>
                                <img className="modal-stat-footer-top-options" src={iconOptions} alt="icon options"/>
                            </div>
                            <div className="modal-stat-footer-bottom center">
                                <span id="currTime" className="modal-stat-footer-bottom-time">{stat.timeframes.daily.current}hrs</span>
                                <span id="prevTime" className="modal-stat-footer-bottom-last">Last week - {stat.timeframes.daily.previous}hrs</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ModalContainer