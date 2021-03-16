import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import MyApp from './MyApp';
import reportWebVitals from './reportWebVitals';
import Fruit from './Objects/Fruit'
import Banana from './Objects/Banana'
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

const user = {
  firstName: 'Zarley',
  lastName: 'Vedad',
};

const props = {
  name: 'Banana'
}

interface iFruit {
  name: string,
  texture: string,
  taste: string,
  price: number,
  quantity: number,
  total: () => string
}

let element:any

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

const strawberry:iFruit = {
  name: 'Strawberry',
  texture: 'Juicy',
  taste: 'Sour fragrant',
  price: 4,
  quantity: 10,
  total: function () {return `Total price to pay is ${strawberry.price * strawberry.quantity}`}
}

const sampleHtml3 = (
  <div>
   <div>{strawberry.name}</div>
   <div>{strawberry.texture}</div>
   <div>{strawberry.taste}</div>
   <div>{strawberry.total()}</div>
  </div>
)


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
    <div className="m-2 bg-orange-500">
      My Last name (lastName) is, {props.lastName}
    </div>
    <div className="m-2 bg-yellow-500">
      Testing math, {props.math}
    </div>
    <div className="m-2 bg-yello-300">
      Testing interface, {sampleHtml3}
    </div>
  </div>
}

function SecondComponent() {
  return (
    sampleHtml
  )
}

element = <FirstComponent firstName="Zarley" lastName="Vedad" math={MathSample(1,2,'mathDemo')}/>

interface IProps {
}

interface IState {
  isToggleOn: any
  something: any
}

class Toggle extends React.Component <IProps, IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      isToggleOn: true,
      something: 0,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log('button is clicked')
  }
  handleClick2 = () => {
    console.log('this is:', this);
  }
  change1 = () => {
    console.log('Add item')
    this.setState(state => ({
      something: parseFloat(state.something) + 1
    }));
  }
  
  change2 = () => {
    console.log('Deduct item')
    this.setState((state) => ({
      something: state.something-1
    }))
  }
  render() {
    return (
      <div>
        <div className="flex flex-row m-2">
          <button 
            className="m-2 p-2 rounded-lg bg-yellow-600 hover:bg-yellow-700" 
            onClick={this.handleClick}
          >
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
          <button 
            className="m-2 p-2 rounded-lg bg-yellow-600 hover:bg-yellow-700" 
            onClick={this.handleClick2}
          >
            Click me
          </button>
          <button 
            className="m-2 p-2 rounded-lg bg-yellow-600 hover:bg-yellow-700"
            onClick={this.change1}
          >
            Add
          </button>
          <button 
            className="m-2 p-2 rounded-lg bg-yellow-600 hover:bg-yellow-700"
            onClick={this.change2}
          >
            Deduct
          </button>
          
        </div>
        <div className="m-4 p-2 rounded-lg bg-orange-500">
          Count State: {this.state.something}
        </div>
      </div>
    );
  }
}

function UserGreeting(props:any) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props:any) {
  return <h1>Please sign up.</h1>;
}

function LoginButton(props:any) {
  return (
    <button className="m-2 p-2 rounded-lg bg-orange-400 hover:bg-orange-500" onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props:any) {
  return (
    <button className="m-2 p-2 rounded-lg bg-orange-400 hover:bg-orange-500" onClick={props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props:any) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class LoginControl extends React.Component <{}, {isLoggedIn:any} > {
  constructor(props:any) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
function Mailbox (props:any) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

function App () {
  return (
    <div>
      <div className = "m-2 p-4 rounded-lg shadow-lg">
        This is the pre-component ; Treat this as the "Hello world" of this Typescript React Project.
        Below is called an element.
        {element}
      </div>
      <div className="m-2 p-4 rounded-lg bg-yellow-300">
        <p>1st component ; It features the utilization of the Basic Syntax</p>
        <FirstComponent firstName="Zarley" lastName="Vedad" math={MathSample(3,4,'mathDemo')}/>
      </div>

      <div className="m-2 p-4 rounded-lg bg-green-300">
        <p>2nd component ; It features utilization of Functions</p>
        <SecondComponent/>
      </div>
      <div className="m-2 p-4 rounded-lg bg-blue-300">
        <p>3rd component ; It will feature utilization of OOP Concepts. Classes, Inheritance, etc</p> 
        <Fruit/>
        <Banana/>
      </div>
      <div className="m-2 p-4 rounded-lg bg-orange-300">
        <p>4th component ; Features states, props and actions</p>
        <Toggle/>
      </div>
      <div className="m-2 p-4 rounded-lg bg-purple-300">
        <p>5th component ; Features conditional Rendering</p>
        <LoginControl/>
        <Mailbox unreadMessages={messages} />
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
