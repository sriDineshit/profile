import React from "react";
// import styled from "styled-components";
import"./education.css"
import educationSvg from "../../assets/education.svg";
import udemyimg from "../../assets/besant_technologies_.jpeg";
import univerisityimg from "../../assets/JIT.png";
import univerisityimg1 from "../../assets/VVW.png"
import relevel from "../../assets/MIRS.png";


function Education() {
  return (
    <div className="container educontainer">
      <div
        className="education-title title"
        id="education"
        data-aos="fade-left"
      >
        Education
      </div>

      <div className="education-content">
        <div className="edu-svg-wrapper" data-aos="fade-right">
          <img
            src={educationSvg}
            alt="girl reading
            "
            className="edu-svg"
          />
        </div>
        <div className="edu-details-wrapper">
          <div
            className="degree-details-wrapper"
            data-aos="fade-up"
          >
            <h4 className="edu-title">DEGREE</h4>
            <p className="edu-institute">
              <span>
                <img
                  src={univerisityimg}
                  alt="universityLogo"
                  className="edu-logo"
                />
              </span>
              Jeppiaar Institute of Technology
            </p>
            <p className="edu-course">B-TECH Information Technology</p>
            <p className="edu-duration">&rarr;Aug 2018 - June 2022</p>
            <p className="edu-cgpa">&rarr;CGPA : 72</p>

            <p className="edu-institute">
              <span>
                <img
                  src={univerisityimg1}
                  alt="universityLogo"
                  className="edu-logo"
                />
              </span>
            Vedavalli Vidyalaya
            </p>
            <p className="edu-course">HSC</p>
            <p className="edu-duration">&rarr;June 2017 - May 2018</p>
            <p className="edu-cgpa">&rarr;Percentage : 60</p>
          </div>

          

          <div
            className="certification-details-wrapper "
            data-aos="fade-up"
          >
            
            <p className="edu-institute">
              <span>
                <img src={relevel} alt="relevelLogo" className="edu-logo" />
              </span>
             Maharishi International Residential School
            </p>
            <p className="edu-course">&rarr;SSLC</p>
            <p className="edu-duration">&rarr;June 2015-April 2016 </p>
            <p className="edu-cgpa">&rarr;Percentage:60</p>
              
            
            <br />
            <h4 className="edu-title">COURSE</h4>
            <p className="edu-institute">
              <span>
                <img src={udemyimg} alt="relevelLogo" className="edu-logo" />
              </span>
             Besant Technology
            </p>
            <p className="edu-course">&rarr;Java Full Stack Development</p>
            <p className="edu-course">&rarr;Spoken English Class</p>
      
            
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

// const EducationContainer = styled.div`
//   margin-bottom: 10%;
//   color: ${(props) => props.theme.text};

//   .education-title {
//     text-align: right;
//   }

//   .education-content {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: row;
//     width: 80%;
//     margin: auto;
//   }

//   .edu-svg {
//     height: 450px;
//     width: 350px;
//   }

//   .edu-svg-wrapper {
//     width: 40%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .edu-details-wrapper {
//     display: flex;
//     flex-direction: column;
//     gap: 2.4rem;
//   }

//   @media screen and (max-width: 1120px) {
//     .edu-svg {
//       height: 350px;
//       width: 250px;
//     }

//     .education-content {
//       flex-direction: column;
//     }
//   }

//   @media screen and (max-width: 500px) {
//     margin-bottom: 12%;
//   }
// `;

// const EduDetaisWrapper = styled.div`
//   p {
//     margin-bottom: 3.5%;
//   }

//   .edu-title {
//     color: ${(props) => props.theme.text};

//     margin-bottom: 8%;
//   }

//   .edu-institute {
//     color: ${(props) => props.theme.eduInstiName};
//     font-size: large;
//     display: flex;
//     align-items: center;
//   }

//   .edu-course {
//     color: var(--clr-blue);
//     font-size: x-large;
//     font-weight: 500;
//   }

//   .edu-duration {
//     color: ${(props) => props.theme.eduDuration};
//     font-size: 0.9rem;
//   }

//   .edu-logo {
//     height: 40px;
//     width: 40px;
//     border-radius: 50%;
//     margin-right: 8px;
//   }

//   .edu-cgpa {
//     color: ${(props) => props.theme.eduCgpa};
//     font-size: 0.9rem;
//     font-weight: 600;
//   }

//   .edu-cert-btn {
//     background-color: powderblue;
//     padding: 1% 2%;
//     border-radius: 2px;
//     border: none;
//     color: black;
//     font-weight: bold;
//     transition: all 0.3s;

//     &:hover {
//       color: powderblue;
//       background-color: rgb(61, 64, 73);
//     }
//   }

//   @media screen and (max-width: 400px) {
//     .edu-course {
//       font-size: large;
//     }

//     .edu-institute {
//       font-size: medium;
//     }
//   }
// `;
export default Education;
