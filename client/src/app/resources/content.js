import { InlineCode } from '@/once-ui/components'

const person = {
	firstName: 'Pritam',
	lastName: 'Kundu',
	get name() {
		return `${this.firstName} ${this.lastName}`
	},
	role: 'Full Stack Developer',
	avatar: '/images/avatar.png',
	location: 'Asia/Kolkata', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ['English', 'Hindi', 'Bengali'] // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
	display: true,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>
			I occasionally write about design, technology, and share thoughts on the intersection of creativity and
			engineering.
		</>
	)
}

const social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	{
		name: 'GitHub',
		icon: 'github',
		link: 'https://github.com/warmachine028'
	},
	{
		name: 'LinkedIn',
		icon: 'linkedin',
		link: 'https://www.linkedin.com/in/pritam-kunduu'
	},
	{
		name: 'X',
		icon: 'x',
		link: 'https://x.com/pritamkundu771'
	},
	{
		name: 'Email',
		icon: 'email',
		link: 'mailto:pritamkundu771@gmail.com'
	}
]

const home = {
	label: 'Home',
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: <>Full Stack Developer, Systems Engineer</>,
	subline: (
		<>
			I'm Pritam, a systems engineer at <InlineCode>TCS</InlineCode>, where I craft intuitive
			<br /> user experiences. After hours, I build my own projects.
		</>
	)
}

const about = {
	label: 'About',
	title: 'About me',
	description: `Meet ${person.name}, ${person.role} from ${person.location}`,
	tableOfContent: {
		display: true,
		subItems: false
	},
	avatar: {
		display: true
	},
	calendar: {
		display: true,
		link: 'https://cal.com'
	},
	intro: {
		display: true,
		title: 'Introduction',
		description: (
			<>
				Pritam is a Kolkata-based Full Stack MERN developer with a passion for transforming complex challenges
				into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and
				the convergence of design and technology.
			</>
		)
	},
	work: {
		display: true, // set to false to hide this section
		title: 'Work Experience',
		experiences: [
			{
				company: 'eHobby.in',
				timeframe: 'Sep 2022 - Nov 2022',
				role: 'Web Developer Intern',
				achievements: [
					<>
						Worked as a Full Stack developer where I was tasked with developing a sophisticated and
						responsive Learning Management WebApp.
					</>,
					<>Used modern web development tools such as ReactJS, Firebase, Material UI Design system</>,
					<>
						Additionally, I was responsible for building a robust admin panel to facilitate user, client,
						and timeslot management.
					</>
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: '/images/projects/project-01/cover-01.jpg',
						alt: 'Once UI Project',
						width: 16,
						height: 9
					}
				]
			},
			{
				company: 'Pursuit Software Inc',
				timeframe: 'May 2024 - Jul 2024',
				role: 'Software Intern',
				achievements: [
					<>
						Worked in an Agile Environment as a Manual tester using qTest technology testing company's
						internal software.
					</>,
					<>
						Developed a Full-Stack website to automate resolution of HR Related queries using Deep learning
						model.
					</>,
					<>
						Used HTML. CSS, JS to develop client and Python Flask framework to handle backend APIs. - Hosted
						the entire website, frontend on GitHub and Flask backend on Render.
					</>
				],
				images: []
			}
		]
	},
	studies: {
		display: true, // set to false to hide this section
		title: 'Studies',
		institutions: [
			{
				name: 'University of Engineering and Management',
				description: <>Studied Software Engineering.</>
			},
			{
				name: 'Kendriya Vidyalaya',
				description: <>Studied Computer Science.</>
			}
		]
	},
	technical: {
		display: true, // set to false to hide this section
		title: 'Technical skills',
		skills: [
			{
				title: 'Next.js',
				description: <>Building next gen apps with Next.js + shadcn/ui + Prisma.</>,
				images: [
					{
						src: '/images/projects/portfolio/cover-01.png',
						alt: 'Project image',
						width: 16,
						height: 9
					},
					{
						src: '/images/projects/next-book/cover-01.png',
						alt: 'Project image',
						width: 16,
						height: 9
					}
				]
			},
			{
				title: 'React.js',
				description: <>Building next gen apps with React.js + tailwind.css + Vite.js.</>,
				images: [
					{
						src: '/images/projects/prisma-ai/cover-01.png',
						alt: 'Project image',
						width: 16,
						height: 9
					},
					{
						src: '/images/projects/portfolio/cover-01.png',
						alt: 'Project image',
						width: 16,
						height: 9
					}
				]
			},
			{
				title: 'Figma',
				description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
				images: [
					{
						src: '/images/projects/project-01/cover-02.jpg',
						alt: 'Project image',
						width: 16,
						height: 9
					},
					{
						src: '/images/projects/project-01/cover-03.jpg',
						alt: 'Project image',
						width: 16,
						height: 9
					}
				]
			}
		]
	}
}

const blog = {
	label: 'Blog',
	title: 'Writing about design and tech...',
	description: `Read what ${person.name} has been up to recently`
	// Create new blog posts by adding a new .mdx file to app/blog/posts
	// All posts will be listed on the /blog route
}

const work = {
	label: 'Work',
	title: 'My projects',
	description: `Design and dev projects by ${person.name}`
	// Create new project pages by adding a new .mdx file to app/blog/posts
	// All projects will be listed on the /home and /work routes
}

const gallery = {
	label: 'Gallery',
	title: 'My photo gallery',
	description: `A photo collection by ${person.name}`,
	// Images from https://pexels.com
	images: [
		{
			src: '/images/gallery/img-01.jpg',
			alt: 'image',
			orientation: 'vertical'
		},
		{
			src: '/images/gallery/img-02.jpg',
			alt: 'image',
			orientation: 'horizontal'
		},
		{
			src: '/images/gallery/img-03.jpg',
			alt: 'image',
			orientation: 'vertical'
		},
		{
			src: '/images/gallery/img-04.jpg',
			alt: 'image',
			orientation: 'horizontal'
		},
		{
			src: '/images/gallery/img-05.jpg',
			alt: 'image',
			orientation: 'horizontal'
		},
		{
			src: '/images/gallery/img-06.jpg',
			alt: 'image',
			orientation: 'vertical'
		},
		{
			src: '/images/gallery/img-07.jpg',
			alt: 'image',
			orientation: 'horizontal'
		},
		{
			src: '/images/gallery/img-08.jpg',
			alt: 'image',
			orientation: 'vertical'
		},
		{
			src: '/images/gallery/img-09.jpg',
			alt: 'image',
			orientation: 'horizontal'
		},
		{
			src: '/images/gallery/img-10.jpg',
			alt: 'image',
			orientation: 'horizontal'
		},
		{
			src: '/images/gallery/img-11.jpg',
			alt: 'image',
			orientation: 'vertical'
		},
		{
			src: '/images/gallery/img-12.jpg',
			alt: 'image',
			orientation: 'horizontal'
		},
		{
			src: '/images/gallery/img-13.jpg',
			alt: 'image',
			orientation: 'horizontal'
		},
		{
			src: '/images/gallery/img-14.jpg',
			alt: 'image',
			orientation: 'horizontal'
		}
	]
}

export { person, social, newsletter, home, about, blog, work, gallery }
