import React from "react";
import uvhs from "../pictures/uvhs.png";
import weather from "../pictures/weather.png";
import dictionary from "../pictures/dictionary.png";
import "./Main.css";

const Main = () => {
  return (
    <div className="">
      <div className="container-fluid">
        <div className="row m-3">
          <div className="col-md-6 p-5 text-center rounded main-images d-md-block d-none">
            <img
              src={uvhs}
              alt="UVHST Project by Olena Kutasevych"
              className="img-fluid rounded-3"
            />
          </div>
          <div className="col-md-6 text-block">
            <h2 className="mb-4">UVHST Project</h2>
            <p className="text-muted my-4">
              This is a site for a volunteer organization based in Stockholm,
              Sweden. Organizations collect aid for Ukraine, namely for
              hospitals, children's shelters, internally displaced persons and
              the military.
              <br />
              <span className="text-info">
                The site was developed on React.js
              </span>
            </p>
            <a
              className="website-link"
              href="https://uvhts.netlify.app/"
              target="_blank"
              title="This is my website - https://uvhts.netlify.app/"
              rel="noopener noreferrer"
            >
              <button class="btn btn-branding-outline p-3 shadow">
                UVHST Project
              </button>
            </a>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-6 text-block">
            <h2 className="mb-4">Weather App</h2>
            <p className="text-muted my-4">
              An application that shows the current weather, as well as the
              weather forecast for 6 days, in the city of the user's choice. API
              is obtained from a resource OpenWeather.
              <br />
              <span className="text-info">
                The site was developed on React.js
              </span>
            </p>
            <a
              className="website-link"
              href="https://react-weather-app-olenak.netlify.app/"
              target="_blank"
              title="This is my first app - https://react-weather-app-olenak.netlify.app/"
              rel="noopener noreferrer"
            >
              <button className="btn btn-branding-outline p-3 shadow">
                Weather App
              </button>
            </a>
          </div>
          <div className="col-md-6 p-5 text-center rounded main-images d-md-block d-none">
            <img
              src={weather}
              alt="Weather App by Olena Kutasevych"
              className="img-fluid rounded-3"
            />
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-6 p-5 text-center rounded main-images d-md-block d-none">
            <img
              src={dictionary}
              alt="Warriors Project by Olena Kutasevych"
              className="img-fluid rounded-3"
            />
          </div>
          <div className="col-md-6 text-block">
            <h2 className="mb-4">Dictionary App</h2>
            <p className="text-muted my-4">
              The application, which uses API Dictionaryapi, shows the
              interpretation of the English word entered by the user, as well as
              its pronunciation.
              <br />
              <span className="text-info">
                The site was developed on React.js
              </span>
            </p>
            <a
              className="website-link"
              href="https://react-dictionary-app-ok.netlify.app/"
              target="_blank"
              title="This is my website - https://react-dictionary-app-ok.netlify.app/"
              rel="noopener noreferrer"
            >
              <button className="btn btn-branding-outline p-3 shadow">
                Dictionary App
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
