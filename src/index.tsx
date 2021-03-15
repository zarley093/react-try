import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import MyApp from './MyApp';
import reportWebVitals from './reportWebVitals';

function formatName(user:object) {
  return user.firstName + ' ' + user.lastName;
}

function Welcome(props) {
  return <div className="bg-blue-300 p-1 m-1 rounded-lg">
    Hello, {props.name}
  </div>
}

function MathSample(x:number,y:number,type:string) {
  let toReturn:string

  if (type === 'mathDemo') {
    toReturn = `${x} plus ${y} is equal to ${x+y}`
  } else if (type === 'simpleDemo') {
    toReturn = `${x+y}`
  }
  return toReturn
}

const user = {
  firstName: 'Zarley',
  lastName: 'Vedad',
};

const props = {
  name: 'Banana'
}

let element:object

const sampleHtml = 
  <div className="m-4">
    <div className="m-2 bg-green-500">
      Hi, my full name is {formatName(user)}!
    </div>
    <div className="m-2 bg-yellow-500">
      My favorite food is {Welcome(props)}
    </div>
    <div className="m-2 bg-blue-500">
      The day of my birthday is on {MathSample(5,6,'simpleDemo')}
    </div>
  </div>

const sampleHtml2 = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);


if (parseFloat(MathSample(2,3,'simpleDemo')) <= 10 ) {
  element = sampleHtml2
} else {
  element = sampleHtml
}

function FirstComponent(props) {
  return <div className="m-4">
    <div className="m-2 bg-red-500">
      My First name is, {props.firstName}!
    </div>
    <div className="m-2 bg-blue-500">
      My Last name is, {props.lastName}
    </div>
    <div className="m-2 bg-orange-500">
      Testing math, {props.math}
    </div>
  </div>
}

function SecondComponent() {
  return (
    sampleHtml
  )
}

element = <FirstComponent firstName="Zarley" lastName="Vedad" math={MathSample(1,2,'mathDemo')}/>

function CombinedComponent () {
  return (
    <div>
      <div className="m-2 p-4 rounded-lg bg-yellow-300">
        <p>This is the first component</p>
        <FirstComponent firstName="Zarley" lastName="Vedad" math={MathSample(3,4,'mathDemo')}/>
      </div>

      <div className="m-2 p-4 rounded-lg bg-green-300">
        <p>This is the second component</p>
        <SecondComponent/>
      </div>      
    </div>
  )
}

ReactDOM.render(<CombinedComponent/>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
