import React from 'react';
import "./Silka.css";
import { Bar, Chart } from 'react-chartjs-2';


function Silka({ country, flag }) {

     Chart.defaults.global.defaultFontSize = 20;
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defultFontWeight = 'bold';

    return (
        <div className="silka_wrapper">
                  <Bar
                 data={{labels: ['Նոր դեպքեր', 'Նոր մահեր', 'Նոր բուժվածներ', 'Ընդհանուր մահեր',],
        datasets: [
          {
            label: 'Նոր դեպքեր',
            backgroundColor: ['red', 'red', 'red', 'red'],
            borderWidth: 0,
            data: [`${country.todayCases}`, `${country.todayDeaths}`, `${country.todayRecovered}`, `${country.deaths}`],
            
          }
        ]}}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:30
            },
            legend:{
              display:true,
              position:'right'
            },
          }}
        />

        </div>
    )
}

export default Silka;
