import React from 'react';

const Weather = (props) => {

    var ucfirst = require('ucfirst');

    return (
        <div className="container">
            <div className="cards">
                <h1 className="text-dark">
                    {props.city}
                </h1>
                <h5 className="py-4 text-dark">
                    <i className={`wi ${props.weatherIcon} display-1`} />
                </h5>
                
                { props.temp_celsius ? (
                    <h1 className="py-2 text-dark">{props.temp_celsius}&deg;</h1>
                ) : null}

                {/* {show max and min temp} */}
                <p className="text-dark">
                    {minmaxTemp(props.temp_min, props.temp_max)}
                </p>
                

                <h4 className="py-3 text-dark">{ucfirst(props.description)}</h4>
            </div>
        </div>
    )
};

function minmaxTemp(min, max){
    if(min && max){
        return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
        )
    }
  };

  
export default Weather;