import Link from "next/link";

export default function BlogMain() {
	return (
		<main className="flex flex-col items-center justify-center text-center my-20">
			<h1 className="text-3xl font-poppins text-text-heading mb-12">
				The Blog Main
			</h1>
			<Link href={"/blog/post-1"}>Post1</Link>
			<Link href={"/blog/post-2"}>Post2</Link>
		</main>
	);
}
