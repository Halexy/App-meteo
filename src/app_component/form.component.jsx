import React from 'react';
import form from './form.style.css';

const Form = props => {
    
    var date = new Date().toLocaleString([], {year: 'numeric', month: 'long', day: 'numeric'});

    return(

    <div className="container pb-4">
        <div>{props.error ? error() : null}</div>
        <div className="row justify-content-center">

            <div className="form-wrap w-75">
                <p className="mt-2 mb-0 text-light font-italic">
                    {date}
                </p>
                <h2 className="mt-1 mb-3 text-center text-dark">Où êtes-vous ?</h2>

                <form onSubmit={props.loadweather}>
                    <div className="form-group wrap-input">
                        <input type="text" className="form-control" name="city" placeholder="Ville" autoComplete="off" />
                        <span class="border"></span>
                    </div>

                    <div className="form-group wrap-input">
                        <input type="text" className="form-control" name="country" placeholder="Pays" autoComplete="off" />
                        <span class="border"></span>
                    </div>
                    
                    <div className="form-group pt-3">
                        <button className="button-form mx-auto">Obtenir ma météo</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
    )
};

function error(){
    return (
        <div className="alert alert-danger mx-5 mt-3" role="alert">
            Veuillez entrer une ville et un pays valide
        </div>
    )
};

export default Form;