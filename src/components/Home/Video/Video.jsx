import React from 'react'
import './Video.css'
import vid from '../../../assets/Home/Video/video.mp4'

const Video = () => {
    return (
        <div className='video__container'>
            <div className='video__container__heading'>
                <h2>Here is an instructional video</h2>
            </div>

            <div className="video__container__video">
                <video id="banner-video" loop controls>
                    <source src={vid} />
                </video>
            </div>
        </div>
    )
}

export default Video