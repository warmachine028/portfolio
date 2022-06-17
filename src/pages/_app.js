import Theme from "../styles/theme"
import Head from "next/head"
export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
				<link rel="icon" href="/images/icon.png" />
				<title>PortFolio</title>
			</Head>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	)
}
