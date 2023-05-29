import React, { useState } from "react";
import "./Speek.css";
import ReactPlayer from "react-player";
const Speek = () => {
  const [videoUrl] = useState(
    "https://istart.rajasthan.gov.in/public/uploads/video/1676539748_4118.mp4"
  );

  return (
    <>
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="overlay-content animate slide-left delay-2">
            <h1 className="animate slide-left pop delay-4">
              Student Innovator
            </h1>
            {/* <p className="animate slide-left pop delay-5" style={{"color: white; margin-bottom: 2.5rem;"}}>Kingdom: <em>Plantae</em></p> */}
          </div>
          <p
            className="animate slide-left pop delay-5"
            style={{ color: "white", marginBottom: "2.5rem" }}
          ></p>

          <div className="image-content animate slide delay-5"></div>
          <div className="dots animate">
            <div className="dot animate slide-up delay-6"></div>
            <div className="dot animate slide-up delay-7"></div>
            <div className="dot animate slide-up delay-8"></div>
          </div>
        </div>
        <div className="text">
          <p>
            iStart School Startup Program intends to help students join the
            community of young entrepreneurs by inculcating entrepreneurial
            skills at an early age. These ignited and innovative young minds
            will be equipped to drive business creation and build products which
            benefit the society as a whole.
          </p>
          <p>
            Who Should Attend? Students : All students, attending Class 8th to
            12th from state-run schools (Government, state-aided and private
            schools including students from colleges from Rajasthan. Schools /
            Colleges : All schools in the state of Rajasthan (Government,
            state-aided and private schools & colleges) will be able to
            register.
          </p>
          <p>
            When managed properly, trees are a good source of renewable energy
            and construction material.
          </p>
        </div>
      </div>
      <div className="containerbootstrapsnippetsbootdeys">
        <div className="row">
          <div className="col-md-4 col-sm-6 content-card">
            <div className="car9-big-shadow">
              <div
                className="car9 car9-just-text"
                data-background="color"
                data-color="blue"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category">School Mentor Teacher</h6>

                  <p className="description">
                    School Startup program has been initiated with the aim to
                    imbibe entrepreneurial mindset in the school students of
                    Rajasthan and provide them a solid foundation in their
                    journey as a future entrepreneur..{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 content-card">
            <div className="car9-big-shadow">
              <div
                className="car9 car9-just-text"
                data-background="color"
                data-color="green"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category">School Startup Program</h6>

                  <p className="description">
                    School students have enormous potential, and iStart
                    Rajasthan believes immensely in that potential and endeavors
                    to tap it. Accelerating this effort to promote the spirit of
                    entrepreneurship in students, Hon’ble Chief Minister,
                    Rajasthan, has announced the launch of the iStart School
                    Startup program in his budget speech for the financial year
                    2021-22..{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 content-card">
            <div className="car9-big-shadow">
              <div
                className="car9 car9-just-text"
                data-background="color"
                data-color="yellow"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category">School Innovation Challenge</h6>

                  <p className="description">
                    iStart has espoused an iStart School Innovation Challenge,
                    given its innovation, entrepreneurship development, and
                    learning-by-doing ethos. It has been envisaged to help
                    unleash immense strength, creativity and potential of school
                    students of Rajasthan. The challenges have been divided in 7
                    mail Themes, These challenges would give students from
                    across the state an opportunity to showcase their ability to
                    innovate and invent on a variety of thematic areas keeping
                    SDG in consideration.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 content-card">
            <div className="car9-big-shadow">
              <div
                className="car9 car9-just-text"
                data-background="color"
                data-color="brown"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category">Startup LMS</h6>

                  <p className="description">
                    An iStart School Portal is an online education hub that
                    provides a large and indispensable set of features to
                    support students’ entrepreneurship activities such as
                    classroom learning, online workshops and development skills.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 content-card">
            <div className="car9-big-shadow">
              <div
                className="car9 car9-just-text"
                data-background="color"
                data-color="purple"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category">It is a huge CAREER BUILDER</h6>

                  <p className="description">
                    Whether you end up starting that startup, it pivots, or it
                    tanks, the skills and experience you gain is incredibly
                    valuable to future employers! It shows that you’re a
                    creative problem solver, resilient, driven, have some
                    business chops, can deal with uncertainty, adaptive, have
                    leadership and communication skills, and most all of the top
                    skills employers currently seek that may not be gained in
                    the classroom..{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 content-card">
            <div className="car9-big-shadow">
              <div
                className="car9 car9-just-text"
                data-background="color"
                data-color="orange"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category">People LOVE to help students!</h6>

                  <p className="description">
                    As a student starting a startup, people are so anxious to
                    help you. As a student, you have abundant access to
                    incredible mentors, coaches and advisors through university
                    centers like the Big Idea Center as well as the vast network
                    of Pitt alumni happy to help the next Pitt grad realize
                    their dream!.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-container">
        <ReactPlayer url={videoUrl} controls />
      </div>
     


{/* <footer>


  <div className='timeshow'><span id="current-time"></span></div>

</footer> */}

    </>
  );
};

export default Speek;
