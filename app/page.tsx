// app/page.js 또는 pages/index.js
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center text-center my-20">
			<Header />
			<p className="text-xl">🔥 Let&apos;s get started! 🔥</p>
			<Link href={"/about"}>About us</Link>
			<Link href={"/blog"}>Blog</Link>
		</main>
	);
}
