import React from 'react'

const Weather = props => (
    <div className="has-text-centered block">
        { props.city && props.country &&  <p> Location: { props.city }, { props.country } </p>}
        { props.temperature  && <p> temperature:  { props.temperature } </p> }
        { props.humidity && <p> Humidity: { props.humidity } </p>}
        { props.description && <p> Conditions: { props.description } </p> }
        { props.error && <p> Erro: { props.error } </p> }
    </div>
)

export default Weather;