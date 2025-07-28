import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	// const style = {
	// 	color: 'red',
	// 	fontSize: '48px',
	// 	textTransform: 'uppercase',
	// };
	const style = {};
	return (
		<header className="header">
			<h1 style={style}>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	return (
		<main className="menu">
			<h2> Our Menu </h2>
			<p>
				Authentic Italian cuisine. 6 creative dishes to choose from. All
				from our stone oven, all origanic, all delicious.
			</p>
			<div className="pizzas">
				<Pizza
					name={pizzaData[0].name}
					ingredients={pizzaData[0].ingredients}
					price={pizzaData[0].price}
					photoName={pizzaData[0].photoName}
				/>
				<Pizza
					name={pizzaData[1].name}
					ingredients={pizzaData[1].ingredients}
					price={pizzaData[1].price}
					photoName={pizzaData[1].photoName}
				/>
				<Pizza
					name={pizzaData[2].name}
					ingredients={pizzaData[2].ingredients}
					price={pizzaData[2].price}
					photoName={pizzaData[2].photoName}
				/>
				<Pizza
					name={pizzaData[3].name}
					ingredients={pizzaData[3].ingredients}
					price={pizzaData[3].price}
					photoName={pizzaData[3].photoName}
				/>
				<Pizza
					name={pizzaData[4].name}
					ingredients={pizzaData[4].ingredients}
					price={pizzaData[4].price}
					photoName={pizzaData[4].photoName}
				/>
				<Pizza
					name={pizzaData[5].name}
					ingredients={pizzaData[5].ingredients}
					price={pizzaData[5].price}
					photoName={pizzaData[5].photoName}
				/>
			</div>
		</main>
	);
}
function Pizza(props) {
	// console.log(props);
	// console.log(typeof props);
	//! props : an object contain the properties that a child component has.
	return (
		<div className="pizza">
			<img src={props.photoName} alt={props.name}></img>
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>{props.price}</span>
			</div>
		</div>
	);
}

function Footer() {
	//! Writing Logic in a Component
	// const time = new Date().getTime();
	// const openHour = 8;
	// const closeHour = 20;
	// if (time <= openHour || time >= closeHour) alert("We're Closed!");
	// else alert("We're Open!");

	return (
		<footer className="footer">
			<div className="order">
				<p> We're open until 22:00. Come visit us or order online.</p>
				<button className="btn">Order Now</button>
			</div>

			{/* add some JavaScript code in a JSX */}
			{/* <div>{new Date().toLocaleTimeString()}</div> */}
		</footer>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// React 17 and earlier:
// ReactDOM.render(<App />, document.getElementById('root'));
