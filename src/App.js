import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Project from './components/Project';
import SinglePost from './components/SinglePost';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about" component={About} />
				<Route path="/post/:slug" component={SinglePost} />
				<Route path="/post" component={Post} />
				<Route path="/projects" component={Project} />
			</Switch>
		</Router>
	);
}

export default App;
