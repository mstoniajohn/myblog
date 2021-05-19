import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { Link } from 'react-router-dom';

const Post = () => {
	const [posts, setPosts] = useState(null);
	console.log(posts);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post" ]{
            title, 
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }

        }`
			)
			.then((data) => setPosts(data))
			.catch((err) => console.error(err.message));
	}, []);
	return (
		<main className="bg-blue-100 min-height-screen p-12 mb-4">
			<section className="container mx-auto">
				<h1 className="text-4xl text-center">Blog Post Page</h1>
				<h2 className="text-lg text-center text-gray-600 mb-12">
					Welcome to my blog posts
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{posts &&
						posts.map((post, index) => (
							<article>
								<Link
									to={'/post/' + post.slug.current}
									key={post.slug.current}
									exact
								>
									<span
										className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400"
										key={index}
									>
										<img
											className="w-full h-full rounded-right object-cover absolute"
											src={post.mainImage.asset.url}
											alt={post.mainImage.alt}
										/>
										<span className="block relative h-full flex justify-end items-end pr-4 pb-4">
											<h3 className="text-gray-100 font-blog text-lg px-3 bg-blue-800 bg-opacity-75 rounded">
												{post.title}
											</h3>
										</span>
									</span>
								</Link>
							</article>
						))}
				</div>
			</section>
		</main>
	);
};

export default Post;
