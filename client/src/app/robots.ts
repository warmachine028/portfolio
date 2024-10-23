import { baseURL } from '@/app/resources'

const robots = () => {
	return {
		rules: [{ userAgent: '*' }],
		sitemap: `${baseURL}/sitemap.xml`
	}
}

export default robots
