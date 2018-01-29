import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    return <h1>{props.kurssi}</h1>
 }

 const Sisalto = (props) => {
     console.log('props',props)
     return <div>
         <Osa osa={props.part1} tehtavia={props.t1}/>
         <Osa osa={props.part2} tehtavia={props.t2}/>
         <Osa osa={props.part3} tehtavia={props.t3}/>
     </div>
 }

 const Osa = (props) => {
    return <div><p>{props.osa}</p>
    <p>{props.tehtavia}</p></div>
 }

 const Yhteensa = (props) => {
     return <p>yhteensä {props.t1 + props.t2 + props.t3} tehtävää</p>
 }

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Kurssi name={kurssi}/>
      <Sisalto part1={osa1} t1={tehtavia1} part2={osa2}
      t2={tehtavia2} part3={osa3} t3={tehtavia3}/> 
      <Yhteensa t1={tehtavia1} t2={tehtavia2} t3={tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)