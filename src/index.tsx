import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import MyApp from './MyApp';
import reportWebVitals from './reportWebVitals';


/**
 * ======================TYPESCRIPT====================, 
 * General declaration of variable should be "any", if variable is of general use.
 * 
 * Variable type should be declared if variable is not for general use
 * 
 * However, multple variable types can be declared to a variable. This is called a Union. 
 * 
 * VAR vs LET
 * 
 * LET has a block scope, e.g. if a variable is "let" declared inside an "if-else" 
 * or "while-loop", it cannot be read. "var" declared variables do not have a block scope.
 * LET variable cannot be re-declared
 */
function formatName(user:any) {
  let toReturn:string
  if (user === null) {
    toReturn = "null"
  } else {
    toReturn = user.firstName + ' ' + user.lastName
  }
  return toReturn
}

function Welcome(props:any) {
  return <div className="bg-blue-300 p-1 m-1 rounded-lg">
    Hello, {props.name}
  </div>
}

function MathSample(x:number=150,y:number=200,type:string) {
  let toReturn:any

  toReturn = 
    type === 'mathDemo' 
    ? `${x} plus ${y} is equal to ${x+y}` 
    : type === 'simpleDemo' 
      ? x+y 
      : null

  return toReturn
}

function RestParameterSample(...items:any[]) {
  let modifiedItems:any[] = []
  
  items.forEach(function(item) {
    const itemType = typeof item
    if (itemType === 'string') {
      modifiedItems.push(
        <div className="m-2 p-2 bg-orange-200 rounded-lg">
          The item is a String: {item}
        </div>
      )
    } else if (itemType === 'number'){
      modifiedItems.push(
        <div className="m-2 p-2 bg-blue-200 rounded-lg">
          The item is a Number: {item}
        </div>
      )
    } else if (itemType === 'object'){
      modifiedItems.push(
        <div className="m-2 p-2 bg-blue-200 rounded-lg">
          The item is an Object: {item}
        </div>
      )
    }
  })

  return modifiedItems
}

function UnionTypeVariableSample(...items:any[]) {
  var value: string|number|object 
  let modifiedItems:any[] = []
  items.forEach(function(item) {
    value = item
    if (typeof value === 'string') {
      modifiedItems.push(
        <div className="m-2 p-2 bg-green-200 rounded-lg">
          The value is a String: {value}
        </div>
      )
    } else if (typeof value === 'number'){
      modifiedItems.push(
        <div className="m-2 p-2 bg-orange-200 rounded-lg">
          The value is a Number: {value}
        </div>
      )
    } else if (typeof value === 'object'){
      modifiedItems.push(
        <div className="m-2 p-2 bg-blue-200 rounded-lg">
          The value is an Object: {value}
        </div>
      )
    }
  })
  return modifiedItems
}

const user = {
  firstName: 'Zarley',
  lastName: 'Vedad',
};

const props = {
  name: 'Banana'
}

let element:any

const sampleHtml = 
  <div className="m-4">
    <div className="m-2 bg-green-500">
      Hi, my formatted name is {formatName(user)}!
    </div>
    <div className="m-2 bg-yellow-500">
      My favorite food is {Welcome(props)}
    </div>
    <div className="m-2 bg-blue-500">
      The day of my birthday is on {MathSample(5,6,'simpleDemo')}
    </div>
    <div className = "m-4 p-4 bg-red-300">
      <p>This is an example of a Rest Parameter Function</p>
      {RestParameterSample('Sample String', 66)}
    </div>
    <div className = "m-4 p-4 bg-yellow-300">
      <p>This is an example of a Rest Parameter Function with Union</p>
      {UnionTypeVariableSample('Sample String Union', 66, 'Sample string 2')}
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

function FirstComponent(props:any) {
  return <div className="m-4">
    <div className="m-2 bg-red-500">
      My First name (firstName) is, {props.firstName}!
    </div>
    <div className="m-2 bg-blue-500">
      My Last name (lastName) is, {props.lastName}
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


// class Clock extends React.Component <{}, {date: any, timerID: any,}> {
//   constructor(props:any) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render () {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

class Toggle extends React.Component <{}, {isToggleOn: any}> {
  constructor(props:any) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button 
        className="p-2 rounded-lg bg-yellow-600 hover:bg-yellow-700" 
        onClick={this.handleClick}
      >
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function App () {
  return (
    <div>
      <div className = "m-2 p-4 rounded-lg shadow-lg">
        This is the pre-component ; Treat this as the "Hello world" of this Typescript React Project.
        {element}
      </div>
      <div className="m-2 p-4 rounded-lg bg-yellow-300">
        <p>This is the first component ; It features the utilization of the Basic Syntax</p>
        <FirstComponent firstName="Zarley" lastName="Vedad" math={MathSample(3,4,'mathDemo')}/>
      </div>

      <div className="m-2 p-4 rounded-lg bg-green-300">
        <p>This is the second component ; It features utilization of Functions</p>
        <SecondComponent/>
      </div>
      <div className="m-2 p-4 rounded-lg bg-blue-300">
        <p>This is the third component ; It will feature utilization of Classes</p> 
        {/* <Clock/>  */}
      </div>
      <div className="m-2 p-4 rounded-lg bg-orange-300">
        <p>This is the 4th component ; Features actions</p>
        <Toggle/>
      </div>
    </div>
  )
}


ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
