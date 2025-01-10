// app/page.js 또는 pages/index.js
export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center text-center my-20">
			<img
				src="/logo.png"
				alt="A server surrounded by magic sparkles."
				className="w-32 h-32 object-cover drop-shadow-custom mb-12"
			/>
			<h1 className="text-3xl font-poppins text-text-heading mb-12">
				Welcome to this NextJS Course!
			</h1>
			<p className="text-xl">🔥 Let&apos;s get started! 🔥</p>
		</main>
	);
}
