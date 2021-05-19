import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

const Project = () => {
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
				title,
				date,
				place,
				description,
				projectType,
				link,
				tags,
				mainImage
			}`
			)
			.then((data) => setProjects(data))
			.catch((err) => console.error(err));
	}, []);
	console.log(projects);
	return (
		<main className="bg-blue-100 min-h-screen p-12">
			<section className="container mx-auto">
				<h1 className="text-4xl text-center">My Projects</h1>
				<h2 className="text-lg text-center text-gray-600 mb-12">
					Welcome to projects
				</h2>
				<section className="grid grid-cols-2 gap-8">
					{projects &&
						projects.map((project) => (
							<article className="relative rounded shadow-xl bg-white p-16">
								{/* <img
									className="w-full h-full rounded-right object-cover absolute"
									src={project.mainImage.asset.url}
									alt={project.mainImage.alt}
								/> */}
								<h3 className="text-gray-800 text-2xl font-bold mb-2 hover:text-pink-400">
									<a href={project.link} target="_blank" rel="noreferrer">
										{project.title}
									</a>
								</h3>
								<div className="text-gray-500 text-xs space-x-4 ">
									<span>
										<strong className="font-bold">finished on</strong>:{' '}
										{new Date(project.date).toLocaleDateString()}
									</span>
									<span>
										<strong className="font-bold">Company</strong>:{' '}
										{project.place}
									</span>
									<span>
										<strong className="font-bold">Type</strong>:{' '}
										{project.projectType}
									</span>
									<p className="my-6 text-lg leading-relax text-gray-700">
										{project.description}
									</p>
									<a
										href={project.link}
										target="_blank"
										className="text-pink-500 font-bold hover:text-pink-300 hover:underline"
										rel="noreferrer"
									>
										Go to Project{' '}
										<span role="img" aria-label="right pointer">
											👉
										</span>
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
};

export default Project;
