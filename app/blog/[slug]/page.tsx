// app/blog/[slug]/page.tsx

import React from "react";

interface PageProps {
	params: {
		slug: string;
	};
}

const BlogPosts = async ({ params }: PageProps) => {
	// params를 await하여 비동기적으로 처리
	const { slug } = await params;

	return (
		<main>
			<h1 className="text-3xl font-poppins text-text-heading mb-12">Blog Post</h1>
			<h2 className="text-xl font-poppins text-text-heading mb-12">{slug}</h2>
			{/* 추가적인 콘텐츠 */}
		</main>
	);
};

export default BlogPosts;
