

import "../intro/intro.css"
import { ImFolderDownload } from "react-icons/im";
import aug from "../../assets/aug.pdf";


function Intro(){

    return(
        <section className="introcontainer">
            <div className="Intro">
            <div className="Introcontent">
                <p id="hello">Hello,</p>
                <span className="details">Myself <span>G.Sri Dinesh</span><br/></span>
                <p className="bio-dtails">
 a recent graduate with a B.Tech in Information Technology (2022). I've since enrolled in Java Full Stack Development at Besant Technologies and am currently actively seeking job opportunities in the field. Eager to apply my skills and contribute to innovative projects, I look forward to new challenges in the professional landscape.</p>
               
                <a
               href={aug}
               download="SriDinesh-CV"
               target="_blank"
               rel="noreferrer"
            >
              <button className="contact-btn" style={{ marginRight: "0" }}alt="Download CV" >
                < ImFolderDownload  /> 
              </button>
              <h2>Download CV</h2>
            </a>
            </div>
            
            

        </div>
        </section>
    )
}
export default Intro;