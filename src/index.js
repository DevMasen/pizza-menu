import React from 'react';
import ReactDOM from 'react-dom/client';

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
		<div>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
	return (
		<div>
			<h2> Our Menu</h2>
			<p>some random bullshit about menu</p>
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
		</div>
	);
}

function Footer() {
	return (
		<div>
			<p> some random bullshit 2</p>
			<button>Order Now</button>
		</div>
	);
}

function Pizza() {
	return (
		<div>
			<img src="pizzas/focaccia.jpg" alt="focaccia"></img>
			<h2>{pizzaData[0].name}</h2>
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
