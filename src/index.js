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
			<p>some random bullshit about menu</p>
			<div className="pizzas">
				<Pizza />
				<Pizza />
				<Pizza />
				<Pizza />
				<Pizza />
				<Pizza />
			</div>
		</main>
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
			<p> some random bullshit 2</p>
			<button className="btn">Order Now</button>
			{/* add some JavaScript code in a JSX */}
			{/* <div>{new Date().toLocaleTimeString()}</div> */}
		</footer>
	);
}

function Pizza() {
	return (
		<div className="pizza">
			<img src="pizzas/focaccia.jpg" alt="focaccia"></img>
			<h3>{pizzaData[0].name}</h3>
			<p>{pizzaData[0].ingredients}</p>
		</div>
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
