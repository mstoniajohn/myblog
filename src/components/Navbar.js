import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
	return (
		<header className="bg-blue-600">
			<div className="container mx-auto flex justify-between p-2">
				<nav className="p-2 inline-flex">
					<NavLink
						className="p-3 text-blue-200 hover:text-pink-400 mr-6 rounded text-2xl tracking-widest "
						activeClassName="text-pink-100"
						to="/"
						exact
					>
						Home
					</NavLink>

					<NavLink
						className="mr-4 text-blue-300 hover:text-pink-400 p-3 rounded text-2xl tracking-widest"
						activeClassName="text-pink-100 "
						to="/post"
					>
						BlogPost
					</NavLink>

					<NavLink
						className=" mr-4 text-blue-300 hover:text-pink-400 p-3 rounded text-2xl tracking-widest"
						activeClassName="text-pink-100"
						to="/projects"
					>
						Projects
					</NavLink>

					<NavLink
						className="mr-4 text-blue-300 hover:text-pink-400 p-3 rounded text-2xl tracking-widest"
						activeClassName="text-pink-100 bg-blue-400"
						to="/about"
					>
						About
					</NavLink>
				</nav>
				<div className="p-2 inline-flex">
					<SocialIcon
						url="https://www.linkedin.com/in/tonia-roganti/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						styles={{ height: 15, width: 15 }}
					/>
					<SocialIcon
						url="https://github.com/mstoniajohn"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
					/>
					<SocialIcon
						url="https://stackoverflow.com/users/15164866/ultra-coder"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
					/>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
