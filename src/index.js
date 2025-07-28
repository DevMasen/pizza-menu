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
	//! Constomized styles stored in a object literal
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
	const pizzas = pizzaData;
	const pizzaCount = pizzas.length;
	// const pizzaCount = 0;
	return (
		<main className="menu">
			<h2> Our Menu </h2>
			{pizzaCount > 0 ? (
				<p>
					Authentic Italian cuisine. {pizzaCount} creative dishes to
					choose from. All from our stone oven, all origanic, all
					delicious.
				</p>
			) : null}

			{/*! Rendering component List instead of component one by one*/}
			{pizzaCount > 0 ? (
				<ul className="pizzas">
					{pizzas.map(pizza => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : (
				<p>
					We're still working on our menu, please come back later :)
				</p>
			)}
		</main>
	);
}

//! Always Destructure props and don't use props like that
// function Pizza(props) {

function Pizza({ pizzaObj }) {
	// console.log(props);
	// console.log(typeof props);
	//! props : an object contain the properties that a child component has.

	//! Conditional Rendering with multiple returns
	// if (pizzaObj.soldOut) return null;

	return (
		<li className="pizza">
			<img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>${pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	//! Writing Logic in a Component
	const time = new Date().getHours();
	const openHour = 8;
	const closeHour = 22;
	const isOpen = time >= openHour && time <= closeHour;
	// console.log(isOpen);

	return (
		<footer className="footer">
			{/*! Conditional Rendering: Renderin a component towards a condition checked by and operator */}
			{/* {isOpen && (
				<div className="order">
					<p>
						{' '}
						We're open until 22:00. Come visit us or order online.
					</p>
					<button className="btn">Order Now</button>
				</div>
			)} */}

			{/*! Conditional Rendering : Ternery Operator (Suggested)*/}
			{isOpen ? (
				//! Replace the long code with a new component
				<Order openHour={openHour} closeHour={closeHour} />
			) : (
				<p>
					We're happy to wellcome you between {openHour}:00 and{' '}
					{closeHour}:00 :)
				</p>
			)}

			{/*! JavaScript code in a JSX */}
			{/* <div>{new Date().toLocaleTimeString()}</div> */}
		</footer>
	);
}

//! Replace the long code with a new component
function Order({ openHour, closeHour }) {
	return (
		<div className="order">
			<p>
				We're open {openHour}:00 to {closeHour}:00. Come visit us or
				order online.
			</p>
			<button className="btn">Order Now</button>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

//! React 17 and earlier:
//! ReactDOM.render(<App />, document.getElementById('root'));
