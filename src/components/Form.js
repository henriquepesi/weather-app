import React  from 'react'

const Form = props => (
    <form onSubmit={props.getWeather}>
        <div className="">
        <div className="field">
            <input className="input is-primary" type="text" name="city" placeholder="city..."/>  
            </div>
            <div className="field">
            <input className="input is-primary" type="text" name="country" placeholder="country..."/>  
            </div>

            <button className="button is-primary is-fullwidth">Get Weather</button>
        </div>
    </form>
);




export default Form;