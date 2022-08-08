import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../helper/Helper";

const Schedule = () => {
  const [width, height] = useWindowSize();
  const [sunday, setSunday] = useState("active");
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [saturday, setSaturday] = useState("");
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
  }, []);
  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
  }, [width, height]);

  const setActiveDay = (day) => {
    setSunday("");
    setMonday("");
    setTuesday("");
    setWednesday("");
    setThursday("");
    setFriday("");
    setSaturday("");
    switch (day) {
      case "Sunday":
        setSunday("active");
        break;
      case "Monday":
        setMonday("active");
        break;
      case "Tuesday":
        setTuesday("active");
        break;
      case "Wednesday":
        setWednesday("active");
        break;
      case "Thursday":
        setThursday("active");
        break;
      case "Friday":
        setFriday("active");
        break;
      case "Saturday":
        setSaturday("active");
        break;

      default:
        break;
    }
  };
  return (
    <div id="fh5co-schedule-section" className="fh5co-lightgray-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="heading-section text-center animate-box">
              <h2>Class Schedule</h2>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
            </div>
          </div>
        </div>
        <div className="row animate-box">
          <div className="col-md-10 col-md-offset-1 text-center">
            <ul className="schedule">
              <li>
                <a
                  href="javascript:void(0)"
                  className={sunday}
                  data-sched="sunday"
                  onClick={() => setActiveDay("Sunday")}
                >
                  Sunday
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className={monday}
                  data-sched="monday"
                  onClick={() => setActiveDay("Monday")}
                >
                  Monday
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className={tuesday}
                  data-sched="tuesday"
                  onClick={() => setActiveDay("Tuesday")}
                >
                  Tuesday
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className={wednesday}
                  data-sched="wednesday"
                  onClick={() => setActiveDay("Wednesday")}
                >
                  Wednesday
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className={thursday}
                  data-sched="thursday"
                  onClick={() => setActiveDay("Thursday")}
                >
                  Thursday
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className={friday}
                  data-sched="monday"
                  onClick={() => setActiveDay("Friday")}
                >
                  Monday
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className={saturday}
                  data-sched="saturday"
                  onClick={() => setActiveDay("Saturday")}
                >
                  Saturday
                </a>
              </li>
            </ul>
          </div>
          <div className="row text-center">
            <div
              className="col-md-12 schedule-container"
              style={{ height: divHeight }}
            >
              <div
                className={`schedule-content ${sunday}`}
                data-day="sunday"
                ref={ref}
              >
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-dumbell.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Body Building</h3>
                    <span>John Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-yoga.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Yoga Programs</h3>
                    <span>James Smith</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-cycling.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Cycling Program</h3>
                    <span>Rita Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-boxing.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Boxing Fitness</h3>
                    <span>John Dose</span>
                  </div>
                </div>
              </div>
              {/* <!-- END sched-content --> */}

              <div className={`schedule-content ${monday}`} data-day="monday">
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-yoga.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Yoga Programs</h3>
                    <span>James Smith</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-dumbell.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Body Building</h3>
                    <span>John Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-boxing.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Boxing Fitness</h3>
                    <span>John Dose</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-cycling.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Cycling Program</h3>
                    <span>Rita Doe</span>
                  </div>
                </div>
              </div>
              {/* <!-- END sched-content --> */}

              <div className={`schedule-content ${tuesday}`} data-day="tuesday">
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-dumbell.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Body Building</h3>
                    <span>John Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-yoga.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Yoga Programs</h3>
                    <span>James Smith</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-cycling.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Cycling Program</h3>
                    <span>Rita Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-boxing.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Boxing Fitness</h3>
                    <span>John Dose</span>
                  </div>
                </div>
              </div>
              {/* <!-- END sched-content --> */}

              <div
                className={`schedule-content ${wednesday}`}
                data-day="wednesday"
              >
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-yoga.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Yoga Programs</h3>
                    <span>James Smith</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-dumbell.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Body Building</h3>
                    <span>John Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-boxing.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Boxing Fitness</h3>
                    <span>John Dose</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-cycling.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Cycling Program</h3>
                    <span>Rita Doe</span>
                  </div>
                </div>
              </div>
              {/* <!-- END sched-content --> */}

              <div
                className={`schedule-content ${thursday}`}
                data-day="thursday"
              >
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-dumbell.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Body Building</h3>
                    <span>John Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-yoga.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Yoga Programs</h3>
                    <span>James Smith</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-cycling.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Cycling Program</h3>
                    <span>Rita Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-boxing.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Boxing Fitness</h3>
                    <span>John Dose</span>
                  </div>
                </div>
              </div>
              {/* <!-- END sched-content --> */}

              <div className={`schedule-content ${friday}`} data-day="friday">
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-yoga.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Yoga Programs</h3>
                    <span>James Smith</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-dumbell.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Body Building</h3>
                    <span>John Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-boxing.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Boxing Fitness</h3>
                    <span>John Dose</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-cycling.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Cycling Program</h3>
                    <span>Rita Doe</span>
                  </div>
                </div>
              </div>
              {/* <!-- END sched-content --> */}

              <div
                className={`schedule-content ${saturday}`}
                data-day="saturday"
              >
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-dumbell.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Body Building</h3>
                    <span>John Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-yoga.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Yoga Programs</h3>
                    <span>James Smith</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-cycling.svg" alt="" />
                    <small>06AM-7AM</small>
                    <h3>Cycling Program</h3>
                    <span>Rita Doe</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="program program-schedule">
                    <img src="images/fit-boxing.svg" alt="Cycling" />
                    <small>06AM-7AM</small>
                    <h3>Boxing Fitness</h3>
                    <span>John Dose</span>
                  </div>
                </div>
              </div>
              {/* <!-- END sched-content --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
