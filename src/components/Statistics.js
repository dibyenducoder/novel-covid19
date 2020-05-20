import React, { useEffect , useState } from 'react';
import axios from "axios";
import {Bar} from 'react-chartjs-2';

const Statistics = () => {
    const [latest , setLatest] = useState([]);
  const [result , setResult] = useState([]);
//   const [searchCountry , setSearchCountry] = useState([""]);

   useEffect(()=> {
     axios
      .all([
     axios.get("https://disease.sh/v2/all"),
     axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
    ])
      .then(res => {
        setLatest(res[0].data);
        setResult(
            {
            active : res[1].data.data.total.active ,
            confirmed: res[1].data.data.total.confirmed,
            deaths: res[1].data.data.total.deaths,
            recovered: res[1].data.data.total.recovered,
            }
        );
      })
      .catch(err => {
        console.log(err);
      });
   },[]);

   const data = {
	labels: [
        'Confirmed',
		'Active',
		'Deaths',
		'Recovered'
	],
	datasets: [{
        data: [latest.cases, latest.active , latest.deaths , latest.recovered],
        label: 'Cases' ,
		backgroundColor: [
		'#E0DD08 ', //confirmed
        '#6D24AF  ', //active
        '#EC1E0D', //deaths
		'#7CCC07 ' //recovered
		],
		hoverBackgroundColor: [
		'#E0DD08 ',
        '#6D24AF  ',
        '#EC1E0D', //deaths
		'#7CCC07 '
		]
	}]
};

const dataIndia = {
	labels: [
        'Confirmed',
		'Active',
		'Deaths',
		'Recovered'
	],
	datasets: [{
        data: [result.confirmed , result.active ,result.deaths , result.recovered],
        labels: [
            'Confirmed',
            'Active',
            'Deaths',
            'Recovered'
        ],
		backgroundColor: [
		'#E0DD08 ', //confirmed
        '#2D2435 ', //active
        '#EC1E0D', //deaths
		'#7CCC07 ' //recovered
		],
		hoverBackgroundColor: [
		'#E0DD08 ',
        '#2D2435 ',
        '#EC1E0D', //deaths
		'#7CCC07 '
		]
	}]
};

    return (
       <div >
          <h2 style={{ color: "#fff" }}>Corona Statistics</h2>
          <div style={{ 
              position: "relative" , 
              width:800 , 
              height:800 , 
              left:400 , 
              top:70}}>
            <Bar data={data} 
                 options = {{
                     title :{
                         display:true,
                         text:'Global Statistics - Corona Cases',
                         fontSize:25
                     },
                     legend:{
                         display:true ,
                         position: 'right'
                     }
                 }}/>
                 <br/><br/>
                 
            <Bar data={dataIndia}
                options = {{
                    title :{
                        display:true,
                        text:'India Statistics - Corona Cases',
                        fontSize:25
                    },
                    legend:{
                        display:true ,
                        position: 'right'
                    }
                }}/>
            </div>
       </div>
    );
}
 
export default Statistics;