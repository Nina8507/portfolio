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
                Junior BI Consultant at Systematic ApS
                </h3>
                <span className="qualification_subtitle">Internship</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> Feb 2022 - Iun 2022
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
                <h3 className="qualification_title">Junior Data Engineer at Systematic ApS</h3>
                <span className="qualification_subtitle">
                  Student Job
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> Jul 2022 - Dec 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
