import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    return <h1>{props.name}</h1>
 }

 const Sisalto = (props) => {
     console.log('props',props)
     return <div>
        <Osa nimi={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
         <Osa nimi={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia}/>
         <Osa nimi={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>
     </div>
 }

 const Osa = (props) => {
    return <p>{props.nimi}<br></br>
    {props.tehtavia}</p>
 }

 const Yhteensa = (props) => {
     return <p>yhteensä {props.t1 + props.t2 + props.t3} tehtävää</p>
 }

 const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  

   return (
     <div>
      <Kurssi name={kurssi}/>
      <Sisalto osat={osat}/> 
      <Yhteensa osat={osat}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

