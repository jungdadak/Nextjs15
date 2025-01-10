import "./globals.css";

/*<head> 태그의 역할을 하는 meatadata*/
export const metadata = {
	title: "NextJS Course App",
	description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<body className="h-full m-0 bg-gradient-primary text-text-primary font-sans">
				{children}
			</body>
		</html>
	);
}
