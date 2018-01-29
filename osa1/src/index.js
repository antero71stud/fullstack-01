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
     return <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
 }

 const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
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
    }

   return (
     <div>
      <Kurssi name={kurssi.nimi}/>
      <Sisalto osat={kurssi.osat}/> 
      <Yhteensa osat={kurssi.osat}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

