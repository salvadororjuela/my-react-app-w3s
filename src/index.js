import React, { useEffect, useState, createContext, useContext, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {name, age} from "./person.js"; // REACT MODULES
import message from "./message.js";  // REACT DEFAULT IMPORT
import Car3 from "./Car.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myFirstElement);

// map() Array Methods
const myArray = ["Renault", "Citroen", "Peugeot", "Bmw"];
const carBrandList = myArray.map((item) => <p>{item}</p>);
const arraymap = ReactDOM.createRoot(document.getElementById("arraymap"));
arraymap.render(carBrandList);

// REACT DESTRUCTURING
// Variables assign
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
};
const [add, subtract, multiply, divide] = calculate(6, 10)
const calculations = ReactDOM.createRoot(document.getElementById("results"));
calculations.render("Addition: " + add + ". Subtraction: " + subtract + ". Multiplication: " + multiply + ". Quotient: " + divide);
// Destructuring Objects
const vehicleOne = {
    brand: "Renault",
    model: "Logan",
    year: "2018",
    color: "Silver"
}
mycar(vehicleOne);
function mycar({brand, model, year, color}) {
    const destobjects = ReactDOM.createRoot(document.getElementById("destobjects"));
    destobjects.render("My car is a: " + brand + ", model: " + model + " of the year: " + year + ". It is a " + color + " car.");
}

// Destructure deeply nested objects
const vehicletwo = {
    brand: "Toyota",
    model: "Land Cruizer",
    year: 2021,
    color: "Blue",
    registration: {
        city: "Austin",
        state: "Tx",
        Country: "Usa"
    }
}
mycar2(vehicletwo)
function mycar2({brand, model, registration:{city, state, country}}) {
    const destnestedobjects = ReactDOM.createRoot(document.getElementById("destnestedobjects"));
    destnestedobjects.render("My second car is a: " + brand + " model: " + model + " , and it is registered in: " + city + " , " + state + " , " + country + ".")
}



// SPREAD OPERATOR
// Spread copy
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
const numbersToShow = ReactDOM.createRoot(document.getElementById("spreadcopy"));
numbersToShow.render(numbersCombined);
// Spread with Destructuring
const [one, two, ...rest] = numbersCombined;
const uno = ReactDOM.createRoot(document.getElementById("spreaddestructuring1"));
const dos = ReactDOM.createRoot(document.getElementById("spreaddestructuring2"));
const numbersrest = ReactDOM.createRoot(document.getElementById("spreaddestructuringRest"));
uno.render(one);
dos.render(two);
numbersrest.render(rest);

// Spread with Objects
const myVehicle = {
    brand: "Land Rover",
    model: "Velar",
    color: "Green"
};
const myupdateVehicle = {
    type: "SUV",
    year: "2022",
    color: "Silver" // This is the color to display because replaces the previous one.
};

const myUpdatedVehicle = {...myVehicle, ...myupdateVehicle};
console.log(myUpdatedVehicle);



// REACT MODULES
// Modules must be imported at the top part of the file (line 3)
const datamodules = ReactDOM.createRoot(document.getElementById("modulesexample"));
datamodules.render("This is " + name + ", he is " + age + " year old.")
// Default Exports
const defaultexport = ReactDOM.createRoot(document.getElementById("modulesdefault"));
defaultexport.render(message());



// TERNARY OPERATOR
function renderapp() {
    document.getElementById("ternary").innerHTML = "User Logged In. WELCOME!!!"
};

function renderloging() {
    document.getElementById("ternary").innerHTML = "Log in Plese."
};

const authenticated = true;  // Try changing the "authenticated" variable to false, and run the code to see what happens.
authenticated ? renderapp() : renderloging();



// ReactDOM.render() Function
const basictable = (
    <table>
        <tr>
            <th>NAME</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Emiliana</td>
        </tr>
    </table>
);  // To HTML on multiple lines, put the HTML inside parenthesis. 
const root2 = ReactDOM.createRoot(document.getElementById("rendertable"));
root2.render(basictable)



// React JSX
const myexpression = <h1>React is {5 + 5} times beter with JXS.</h1>;
const expression = ReactDOM.createRoot(document.getElementById("expression"));
expression.render(myexpression);



// ONE TOP LEVEL
const onetop = (
    <div>
        <h2>I am a header</h2>
        <h3>I am another Header</h3>
    </div>
);
const toplevel = ReactDOM.createRoot(document.getElementById("onetoplevel"));
toplevel.render(onetop);

const fragments = (
    <div>
        <h2>A header inside a fragment</h2>
        <h3>Another header inside a fragment</h3>
    </div>
);
const frags = ReactDOM.createRoot(document.getElementById("fragment")); 
frags.render(fragments);

// className
const classJSX = <h3 className="classnamestyle">This uses className JSX attribute</h3>;
const classNameCreation = ReactDOM.createRoot(document.getElementById("className"));
classNameCreation.render(classJSX);

// if EXPRESSIONS TERNARY EXPRESSION
const adultage = 19;
const legalage = <h3>{(adultage) >= 18 ? "You are " + adultage + ". You are an adult" : "You are under 18"}</h3>;
console.log(legalage)
const resultage = ReactDOM.createRoot(document.getElementById("ifternaryjsx"));
resultage.render(legalage);



// FUNCTION COMPONENTS
// Simple Function Component
function Car() {
    return <h2>Hi, I am a car!</h2>
}
const simfuncomp = ReactDOM.createRoot(document.getElementById("simplefunctioncomponent"));
simfuncomp.render(Car());

// Function components Props
function CarFeature(props) {
    return <h2>Now I am a {props.color} car.</h2>
}
const funcomppro = ReactDOM.createRoot(document.getElementById("funcompprops"));
funcomppro.render(<CarFeature color="Red"/>);

// Components in Components
function CarGarage() {
    return <h2>... so I am a car!</h2>
}

function Garage() {
    return (
        <>
            <h1>I live in a Garage...</h1>
            <CarGarage/>
        </>
    );
}

const caringarage = ReactDOM.createRoot(document.getElementById("compsincomps"));
caringarage.render(<Garage/>);

// Components in Files
const compinfiles = ReactDOM.createRoot(document.getElementById("compsinfiles"));
compinfiles.render(<Car3/>);



// REACT PROPS
// Pass Data
function CarProp(props) {
    return <h3> Me, I am a {props.brand}!</h3>;
}

function GarageProps() {
    return (
        <>
            <h3>Who Lives in my Garage?</h3>
            <CarProp brand = "Renault"/>
        </>
    );
}

const cardata = ReactDOM.createRoot(document.getElementById("propdata"));
cardata.render(<GarageProps/>);

// Props Pass Variables
function CarVariables(props) {
    return <h3>Now I am a {props.brand}</h3>
}

function GarageVariables() {
    const newbrand = "Toyota";
    return (
        <>
            <h3>Who lives in my garage now?</h3>
            <CarVariables brand={ newbrand }/>
        </>
    );
};

const propspassvariables = ReactDOM.createRoot(document.getElementById("propvariables"));
propspassvariables.render(<GarageVariables/>)

// Props Pass Objects
function CarObjects(props) {
    return <h3>Finally, I am a {props.brand.name} {props.brand.model}</h3>
}

function GarageObjects() {
    const carInfo = {name: "Toyota", model: "Land Cruizer"};
    return (
        <>
            <h3>What model are you, car?</h3>
            <CarObjects brand={carInfo}/>
        </>
    );
}

const propspassobjects = ReactDOM.createRoot(document.getElementById("propsobjects"));
propspassobjects.render(<GarageObjects/>);



// REACT EVENTS
// Adding Events
function Football() {
    const shoot = () => {
        alert("You scored. Great shot!!!");
    }
    return (
        <button onClick={shoot}>Take the shot</button>
    );
}
const addingEvents = ReactDOM.createRoot(document.getElementById("addingevents"));
addingEvents.render(<Football/>);

// Passing Arguments
function Football1() {
    const shot = (message) => {
        alert(message);
    };
    return (
        // To pass an argument to an event handler, use an arrow function.
        <button onClick={() => shot("Goal number 2!!! ARGUMENTS")}>Take a Second Shot!</button>
    );
}
const eventarguments = ReactDOM.createRoot(document.getElementById("addeventarguments"));
eventarguments.render(<Football1/>)

// React Event Object
function Football2() {
    const shoot = (message, b) => {
        alert(b.type);
    }
    return (
        <button onClick={(event) => shoot("Goal 3", event)}>Event Object</button>
    );
}
const eventobjecttype = ReactDOM.createRoot(document.getElementById("eventObject"));
eventobjecttype.render(<Football2/>)



// REACT RENDERING STATEMENTS
// if Statement
function MissedGoal() {
    return <h1>MISSED!!!!</h1>
}

function GoalMade() {
    return <h1>GOAL!!!!!!!</h1>
}

function Goal(props) {
    if (props.isGoal) {
        return <GoalMade/>;
    }
    return <MissedGoal/>;
};

const goalDiv = ReactDOM.createRoot(document.getElementById("ifstatement"));
goalDiv.render(<Goal isGoal={false}/>); // Change the argument to true to trigger GoalMade()

// Logical && Operator
function GarageAnd(props) {
    const cars = props.carsand;
    return (
        <>
            <h1>Garage &&</h1>
            {
                carsand.length > 0 &&
                <h2>You have {cars.length} cars in your Garage.</h2>
            }
        </>
    )
}

const carsand = ["Renault", "Toyota", "Land Rover", "Mazda"]; // Remove the content to produce only the h1 heading
const carsgarageand = ReactDOM.createRoot(document.getElementById("andoperator"));
carsgarageand.render(<GarageAnd carsand={carsand}/>)

// Conditional ternary operator
function CarTernary(props) {
    return (
        <>
            <h1>Goal Ternary Operator</h1>
            {
                props.goalIs ? <h2>Goal!!!</h2> : <h2>Missed!!!</h2>
            }
        </>
    )
}
const goalvar = ReactDOM.createRoot(document.getElementById("ternaryif"));
goalvar.render(<CarTernary goalIs={false}/>); // Change the value to true to score the goal



// REACT LISTS
// map() method
function CarInitial(props) {
    return <li>I want an {props.brand}</li>
}

function CarsMap() {
    const cars = ["Audi", "Acura", "Opel", "Alpha Romeo"]
    return (
        <>
            <h1>What cars I want?</h1>
            <ul>
                {cars.map((car) => <CarInitial brand={car}/>)};
            </ul>
        </>
    )
}

const carsIwant = ReactDOM.createRoot(document.getElementById("listmapmethod"));
carsIwant.render(<CarsMap/>)
/*
If you run this example in your create-react-app,
you will receive a warning that there is no "key" provided for the list items.
*/

// keys
function CarKeys(props) {
    return <li>I am id {props.id}, and my brand is {props.brand}</li>;
}

function CarKeyBrand() {
    const carkv = [
        {id: 1, brand: "Audi"},
        {id: 2, brand: "Acura"},
        {id: 3, brand: "Opel"},
        {id: 4, brand: "Alpha Romeo"},
    ];
    return (
        <>
            <h1>What are my car keys and brands?</h1>
            <ul>
                {carkv.map((car) => <CarKeys key={car.id} id={car.id} brand={car.brand}/>)}
            </ul>
        </>
    );
}
const carkeyvp = ReactDOM.createRoot(document.getElementById("keysmap"));
carkeyvp.render(<CarKeyBrand/>)



// REACT FORMS
// Adding a Form
function MyForm1() {
    return(
        <form>
            <label>Enter your name</label>
            <input type="text"/>
        </form>
    )
}
const myForm1 = ReactDOM.createRoot(document.getElementById("addform"));
myForm1.render(<MyForm1/>)

// Handling Forms
function MyForm2() {
    const [name, setName] = useState("");
    return (
        <form>
            <label>Enter your name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
    )
}
const myFomm2 = ReactDOM.createRoot(document.getElementById("handlingforms"));
myFomm2.render(<MyForm2/>)

// Submitting Forms
function MyForm3() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="submit" value="Submit your Name"/>
        </form>
    )
}
const myForm3 = ReactDOM.createRoot(document.getElementById("submittingforms"));
myForm3.render(<MyForm3/>)

// Multiple Input Fields
function MyForm4() {
    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your Name</label>
            <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
            <label>Enter your Age</label>
            <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}/>
            <input type="submit" value="Submit Name and Age"/>
        </form>
    )
}
const myForm4 = ReactDOM.createRoot(document.getElementById("multiinputfields"));
myForm4.render(<MyForm4/>)

// Textarea
function MyForm5() {
    const [textarea, setTextarea] = useState("The content of a textarea goes in the value attribute");

    const handleChange = (event) => {
        setTextarea(event.target.value);
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange}/>
        </form>
    )
}
const myForm5 = ReactDOM.createRoot(document.getElementById("textarea"));
myForm5.render(<MyForm5/>)

// Select
function MyForm6() {
    const [car, setCar] = useState("Volvo");

    const handleChange = (event) => {
        setCar(event.target.value);
    }

    return (
        <form>
            <select value={car} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Mazda">Mazda</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Renault">Renault</option>
                <option value="Volvo">Volvo</option>
            </select>
        </form>
    )
}
const myForm6 = ReactDOM.createRoot(document.getElementById("selecttag"));
myForm6.render(<MyForm6/>)



// REACT ROUTER
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
const navbar = ReactDOM.createRoot(document.getElementById("routerexample"));
navbar.render(<App/>)



// useSTATE
// Update State
function UpdateColor() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favorite color is {color}</h1>
            <button type="button" onClick={() => setColor("blue")}>Change Color with setColor</button>
        </>
    )
}
const updatecolor = ReactDOM.createRoot(document.getElementById("updatestate"));
updatecolor.render(<UpdateColor/>);

// What Can State Hold?
function CarState() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1974");
    const [color, setColor] = useState("Red");

    const UpdateCar = () => {
        setBrand("Renault");
        setModel("Logan");
        setYear("2018");
        setColor("Silver");
    }
    
    return (
        <>
            <h1>My {brand}</h1>
            <h2>It is a {color} {model} of the year {year}.</h2>
            <button type="button" onClick={UpdateCar}>Change Car Information</button>
        </>
    )
}
const carState = ReactDOM.createRoot(document.getElementById("elementsStateHolds"));
carState.render(<CarState/>)

// Use One State To Hold an Object
function OneStateObject() {
    const [car, setCar] = useState({
        brand: "Mazda",
        model: "626",
        year: "1994",
        color: "Blue"
    });

    const UpdateCar = () => {
        setCar(previousState => {
            return {...previousState, year: "2023", color: "White"}
        });
    }

    return (
        <>
            <h1>My Other {car.brand}</h1>
            <h2>It is a {car.color} {car.model} of the year {car.year}.</h2>
            <button type="button" onClick={UpdateCar}>Change Car Information</button>
        </>
    )
}
const oneStateObject = ReactDOM.createRoot(document.getElementById("onestateobject"));
oneStateObject.render(<OneStateObject/>)



// useEffect
// Non-Stop Timer
function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000);
    });

    return <h1>I have rendered {seconds} times!</h1>
}
const nonStopTimer = ReactDOM.createRoot(document.getElementById("nonstoptimer"));
nonStopTimer.render(<Timer/>) 

// useEffect Render Only Once
function RenderOnlyOnce() {
    const [times, setTimes] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimes((times) => times + 1);
        }, 1000);
    }, []); // Add a second parameter to stop re-rendering (empty brackets).

    return <h1>I have rendered {times} times!</h1>
}
const renderOnlyOnce = ReactDOM.createRoot(document.getElementById("renderonlyonce"));
renderOnlyOnce.render(<RenderOnlyOnce/>)

// useEffect That is Dependent on a Variable
function VariableDependance() {
    const [click, setClick] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => click * 3);
    }, [click]); // add the click variable here

    return (
        <>
            <p>Count: {click}</p>
            <button onClick={() => setClick((c) => c + 1)}>+</button>
            <p>Count times 3 = {calculation}</p>
        </>
    );
}
const variableDependance = ReactDOM.createRoot(document.getElementById("variabledependance"));
variableDependance.render(<VariableDependance/>)

// useEffect Cleanup
function CleanUp() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    
    return () => clearTimeout(timer)
    }, []);

    return <h1>I have rendered {count} times!</h1>
}
const cleanUp = ReactDOM.createRoot(document.getElementById("cleanup"));
cleanUp.render(<CleanUp/>);



// useContext
// Full Example
const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState("Jean Jaymes")

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Component2 user={user}/>
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h1>Component2</h1>
            <Component3/>
        </>
    )
}

function Component3() {
    return (
        <>
            <h1>Component3</h1>
            <Component4/>
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component4</h1>
            <Component5/>
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component5</h1>
            <h2>Hello {user} again!</h2>
        </>
    )
}
const useContextFull = ReactDOM.createRoot(document.getElementById("usecontext"));
useContextFull.render(<Component1/>)



// useRef Hook
// Does Not Cause Re-renders
function NoReRender() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <h1>Render Count: {count.current}</h1>
        </>
    );
}
const noReRender = ReactDOM.createRoot(document.getElementById("norerenders"));
noReRender.render(<NoReRender/>)

// Accessing DOM Elements
function AccessDomEl() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}
const accessDomEl = ReactDOM.createRoot(document.getElementById("accessdomel"));
accessDomEl.render(<AccessDomEl/>);

// Tracking State Changes
function TrackingStateChanges() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}
const trackingStateChanges = ReactDOM.createRoot(document.getElementById("trackingstatechanges"));
trackingStateChanges.render(<TrackingStateChanges/>);