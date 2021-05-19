import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
// urls aree unique, so use useeParams
import { useParams } from 'react-router';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const SinglePost = () => {
	const [post, setPost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
			title,
			_id,
			slug,
			mainImage{
				asset->{
					_id,
					url
				}
			},
			body,
			"name": author->name,
			"authorImage": author->image

		}`
			)
			.then((data) => setPost(data[0]))
			.catch((err) => console.error(err.message));
	}, [slug]);
	if (!post) return <div>Loading...</div>;
	return (
		<main className="bg-gray-200 min-h-screen p-12">
			<article className="container shadow-lg mx-auto bg-blue-100 rounded-lg">
				<header className="relative">
					<div className="absolute h-full w-full flex items-center justify-center p-8">
						<div className="bg-white bg-opacity-75 rounded p-12">
							<h1 className="text-2xl lg:text-4xl mb-4">{post.title}</h1>
							<div className="flex justify-center text-gray-800">
								<img
									className="w-10 h-10 rounded-full"
									src={urlFor(post.authorImage).url()}
									alt={post.name}
								/>
							</div>
							<p className="cursive flex items-center pl-2 text-xl">
								{post.name}
							</p>
						</div>
					</div>
					<img
						styles={{ height: '400px' }}
						className="w-full object-cover rounded-top"
						src={post.mainImage.asset.url}
						alt={post.title}
					/>
				</header>
				{/* install npm i @sanity/block-content-to-react */}
				<div className="px-16 lg:px-48 py-12 lg:py-20 prose  lg:prose-xl max-w-full">
					<BlockContent
						blocks={post.body}
						projectId="zjygiu49"
						dataset="production"
					/>
				</div>
			</article>
		</main>
	);
};

export default SinglePost;
