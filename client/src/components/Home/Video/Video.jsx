import "./Video.scss";
import Vide from "../../../assets/outfitv.mp4";
const Video = () => {
    return <div className="hero-vdo">
         
        <div className="content">
            <video className="intro-vdo" width="320" height="240" controls
                src={Vide} type="video/mp4">
            </video>

            <div className="text-content">
            <h4>HOW IT WORKS</h4>
                <h3>See for yourself.</h3>
                <p><b>Quick video introduction</b></p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
            odales lectus, non ultrices nisi. In varius, leo non gravida.
            </p>
                
            <div className="ctas">
                <div className="vdo-cta">Read More</div>
                {/* <div className="vdo-cta v2">Shop Now</div> */}
            </div>
            </div>
           
        </div>
    </div>
};

export default Video;
