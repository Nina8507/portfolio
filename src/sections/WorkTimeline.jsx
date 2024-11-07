import React, { useState } from "react";

const WorkTimeline = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id= 'work' className="qualification section">
      <h2 className="section__title"> Professional Experience </h2>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >        
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                      .NET Developer   <i>Colibo A/S</i></h3>
                <span className="qualification_subtitle">Full Time</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> May 2024 - Nov 2024
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Junior Data Engineer <i>Systematic ApS</i></h3>
                <span className="qualification_subtitle">
                  Student Job
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> Jul 2022 - Dec 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                Junior BI Constultant <i>Systematic ApS</i></h3>
                <span className="qualification_subtitle">Full Time</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> Feb 2022 - Jun 2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>
          <h2 className="section__title">Job description</h2>
          <br />
          <br />
          <div className='flex flex-col md:flex-row items-center gap-10 md:gap-15'>
          <img src='/COLIBO.png' className='rounded-3xl w-full md:w-auto md:max-w-lg' />
            <div className='flex-1'>
              <p> Developing a software solution using .NET framework, SSMS for data storage, and Azure DevOps for CI/CD, this experience 
                has provided me with a solid foundation to further develop my skills in software development.
                <br />
                <br />
                I specialize in integrating systems and managing user imports from various sources, including Azure and Active Directory.
                My daily tasks include closely collaborating with stakeholders to design and plan data imports, implementing code, conducting tests, 
                providing user support for challenges related to software functionality, and deploying intranet solutions on client servers, including installation, 
                configuration, and post-launch support.
                <br />
                <br />
                By working in a structured and collaborative manner, we successfully reduced the number of unresolved tasks and prevented the escalation of common reported issues.
              </p>
              <br />
            </div>
          </div>
          <br/>
          <br/>
          <div className='flex flex-col md:flex-row items-center gap-10 md:gap-15'>
            <div className='flex-1'>
              <p> My passion for data began early in my studies and became a significant focus in my role as a data engineer at Systematic.
                During my time with the company, I worked in the healthcare department, where the project achieved success relatively quickly.
                <br />
                <br />
                While my primary focus was on performance optimization, it was not my sole responsibility.
                I was also responsible for handling customer change requests, participating in feature development and implementation,
                conducting stakeholder meetings to discuss improvements, and facilitating knowledge sharing.
              </p>
              <br />
            </div>
            <img src='/Systematic.png' className='rounded-3xl w-full md:w-auto md:max-w-lg' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
