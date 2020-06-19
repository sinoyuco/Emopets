import React from 'react';
import { Link } from 'react-router-dom';

class TeamShow extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="entire-team-show">
        <h1
          style={{ textAlign: "center", fontSize: "48px", marginBottom: "-25px", color: "#d4d4dc"}}
        >Meet the team!</h1>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="entire-team-grid">

          <div className="entire-team-member">
            <h1>Hira Quddus</h1>
            <div className="member-picture-and-info">
            <img src="https://avatars3.githubusercontent.com/u/61429669?s=460&v=4" 
            className="team-member-image"/>
            <ul className="github-and-linkedin">
            
            <li>
              <i class="fa fa-linkedin"
              style={{fontSize: "48px"}}
                    onClick={() => window.location = "https://www.linkedin.com/in/hira-quddus-94963413b/"}
              ></i>
            </li>

            <li>
              <i class="fa fa-github"
              style={{fontSize: "48px"}}
              onClick={() => window.location = "https://github.com/hquddus93"}
              ></i>
            </li>
            </ul>

            </div>

          </div>

          <div className="entire-team-member">
            <h1>Sinan Yucesan</h1>
            <div className="member-picture-and-info">
            <img src="https://avatars3.githubusercontent.com/u/36941198?s=460&v=4" 
            className="team-member-image"/>
              <ul className="github-and-linkedin">

                <li>
                  <i class="fa fa-linkedin"
                    style={{ fontSize: "48px" }}
                    onClick={() => window.location = "https://www.linkedin.com/in/sinan-yucesan-91289a134/"}
                  ></i>
                </li>

                <li>
                  <i class="fa fa-github"
                    style={{ fontSize: "48px" }}
                    onClick={() => window.location = "https://github.com/sinoyuco"}
                  ></i>
                </li>
              </ul>

            </div>

          </div>

          <div className="entire-team-member">
            <h1>Oleksandr Melnykov</h1>
            <div className="member-picture-and-info">
            <img src="https://avatars1.githubusercontent.com/u/59855208?s=460&u=1e1e34a81ef7e756be28fb4d28986b9743a072b8&v=4" 
            className="team-member-image"/>
              <ul className="github-and-linkedin">

                <li>
                  <i class="fa fa-linkedin"
                    style={{ fontSize: "48px" }}
                    onClick={() => window.location = "https://www.linkedin.com/in/oleksandr-melnykov-347b811a8/"}
                  ></i>
                </li>

                <li>
                  <i class="fa fa-github"
                    style={{ fontSize: "48px" }}
                    onClick={() => window.location = "https://github.com/omelnykov1"}
                  ></i>
                </li>
              </ul>

            </div>

          </div>

          <div className="entire-team-member">
            <h1>Karl Konetsky</h1>
            <div className="member-picture-and-info">
            <img src="https://avatars0.githubusercontent.com/u/59674762?s=460&u=578b2318bb752a6ad642b06d85ae5935a440f05c&v=4" 
            className="team-member-image"/>
              <ul className="github-and-linkedin">

                <li>
                  <i class="fa fa-linkedin"
                    style={{ fontSize: "48px" }}
                    onClick={() => window.location = "https://www.linkedin.com/in/karlkonetsky/"}
                  ></i>
                </li>

                <li>
                  <i class="fa fa-github"
                    style={{ fontSize: "48px" }}
                    onClick={() => window.location = "https://github.com/Steelydanrules"}
                  ></i>
                </li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    )
  }

}



export default TeamShow;