import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    return <h1>{props.name}</h1>
 }

 const Sisalto = (props) => {
     console.log('props',props)
     return <div>
        <Osa nimi={props.part1.nimi} tehtavia={props.part1.tehtavia}/>
         <Osa nimi={props.part2.nimi} tehtavia={props.part2.tehtavia}/>
         <Osa nimi={props.part3.nimi} tehtavia={props.part3.tehtavia}/>
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
      <Sisalto part1={osat[0]} part2={osat[1]} part3={osat[2]} 
      /> 
      <Yhteensa t1={osat[0].tehtavia} t2={osat[1].tehtavia} t3={osat[2].tehtavia}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

