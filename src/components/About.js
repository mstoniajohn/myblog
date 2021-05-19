import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import flower from '../hibiscus.jpeg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const About = () => {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
			name,
			bio,
			"authorImage":image.asset->url
		}`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error);
	}, []);
	if (!author) return <div>Loading...</div>;
	return (
		<main className="relative">
			<img className="absolute w-full" src={flower} alt="flower" />
			<div className="p-10 lg:pt-48 container mx-auto relative">
				<section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
					<img
						className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
						src={urlFor(author.authorImage).url()}
						alt={author.name}
					/>
					<div className="text-lg flex flex-col justify-center">
						<h1 className="text-5xl text-blue-300 mb-4">
							Hey there, I'm{' '}
							<span className="text-blue-100 ">{author.name}</span>
						</h1>
						<div className="text-white prose-xl lg:prose-xl">
							<BlockContent
								blocks={author.bio}
								projectId="zjygiu49"
								dataset="production"
							/>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default About;
