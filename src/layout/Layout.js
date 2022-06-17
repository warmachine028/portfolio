import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { Container } from "./LayoutStyles"

export const Layout = ({ children }) => 
	<Container>
		<Header />
		<main>{children}</main>
		<Footer />
	</Container>

