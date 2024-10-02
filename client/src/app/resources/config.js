const baseURL = 'pritam-kd.vercel.app'

const routes = {
	'/': true,
	'/about': true,
	'/work': true,
	'/blog': true,
	'/gallery': true
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
	'/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects = {
	gradient: true,
	dots: true,
	lines: false
}

const style = {
	theme: 'dark', // dark | light
	brand: 'pink', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
	accent: 'blue', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
	neutral: 'slate', // sand | gray | slate
	border: 'conservative', // rounded | playful | conservative
	solid: 'contrast', // color | contrast
	solidStyle: 'plastic', // flat | plastic
	surface: 'translucent', // filled | translucent
	transition: 'all' // all | micro | macro
}

const display = {
	location: true,
	time: true
}

const mailchimp = {
	action: 'https://url/subscribe/post?parameters',
	effects: {
		gradient: true,
		dots: false,
		lines: true
	}
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL }
