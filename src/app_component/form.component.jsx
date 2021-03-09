import React from 'react';
import form from './form.style.css';

const Form = props => {
    return(

    <div className="container pb-4">

        <div className="row justify-content-center">
                <div className="form-wrap p-0 w-75">
                    <h2 className="mt-5 mb-3 text-center">Où êtes-vous ?</h2>

                    <div className="form-group wrap-input">
                        <input type="text" className="form-control" name="city" placeholder="Ville" autoComplete="off" />
                    </div>

                    <div className="form-group wrap-input">
                        <input type="text" className="form-control" name="country" placeholder="Pays" autoComplete="off" />
                    </div>
                    
                    <div className="form-group pt-3">
                        <button className="button-form mx-auto">Obtenir ma météo</button>
                    </div>
                </div>
        </div>
    </div>



    )
}

export default Form;