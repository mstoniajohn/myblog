import React from 'react';
import image from '../hibiscus.jpeg';

const Home = () => {
	return (
		<main>
			<img
				src={image}
				className="absolute object-cover w-full h-full"
				alt="hibiscus"
			/>
			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
				<h1 className="text-6xl text-blue-200 font-bold leading-none lg:leading-snug ">
					Hello, Tonia here!
				</h1>
			</section>
		</main>
	);
};

export default Home;
