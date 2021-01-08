import React from 'react';
import "./Erkir.css";

function Erkir({ country, flag }) {
    return (
        <div className="erkir_wrapper">
           <div className="erkir">
              <p className="erkir_title"><span className="t">Երկիր։</span><span className="erkir_span">{ country.country } <img src={flag} width="60px" height="30px" alt={country.country} title={country.country}/></span></p>
              <p className="active">
               <span className="active_t">Վարակվել է։</span>
                <span className="erkir_span">{ country.cases }</span>
           </p>
           <p className="active">
                 <span className="active_t">Բնակչություն։</span>
    <span className="erkir_span">{ country.population }</span>
             </p>
             <p className="active">
                 <span className="active_t">Կատարված թեստեր։</span>
    <span className="erkir_span">{ country.tests }</span>
             </p>
           </div>
           <div className="erkir_2">
             <p className="active">
                 <span className="active_t">Բուժում է ստանում։</span>
    <span className="erkir_span">{ country.active }</span>
             </p>
             <p className="active">
                 <span className="active_t">Մայրցամաք։</span>
    <span className="erkir_span">{ country.continent }</span>
             </p>
             <p className="active">
                 <span className="active_t">Ապաքինված է։</span>
    <span className="erkir_span">{ country.recovered }</span>
             </p>
             <p className="active">
                 <span className="active_t">1մլն հաշվով։</span>
    <span className="erkir_span">{ country.activePerOneMillion }</span>
             </p>
           </div>
        </div>
    )
}

export default Erkir;
