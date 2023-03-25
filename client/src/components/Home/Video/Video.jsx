import "./Video.scss";
import ReactPlayer from 'react-player';
import VideoPlayer from "react-video-js-player";
import Vide from "../../../assets/outfitv.mp4";
import Poster from "../../../assets/video_banner.webp";
const Video = () => {
    const videoSrc = Vide;
    const poster = Poster
    return <div className="hero-vdo">
      
        <div className="content">
            <div className="text-content">
                <h5>HOW IT WORKS</h5>
                <h2>See for yourself.</h2>
                <h4>Quick video introduction</h4>
                <div className="vdo-cta">Know More</div>
                
            </div>
            <VideoPlayer src={videoSrc} poster={poster} width="520" height="272"/>
        </div>
    </div>
};

export default Video;
