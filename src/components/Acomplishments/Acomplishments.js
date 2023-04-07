import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents"
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles"
import { useEffect, useState } from "react"

const Acomplishments = () => {
	const [projects, setProjects] = useState(0)
	const [followers, setFollowers] = useState(0)
	const [stars, setStars] = useState(0)
	const [solved, setSolved] = useState(0)

	const fetchFollowers = userName => {
		fetch(`https://api.github.com/users/${userName}/followers?per_page=100`)
			.then(response => response.json())
			.then(followers => setFollowers(followers.length))
	}
	const fetchProjects = userName => {
		fetch(`https://api.github.com/users/${userName}/repos?per_page=100`)
			.then(response => response.json())
			.then(projects => projects.filter(project => !project.fork))
			.then(projects => setProjects(projects.length))
	}
	const fetchStars = userName => {
		let stargazers = 0
		setStars(0)
		fetch(`https://api.github.com/users/${userName}/repos?per_page=100`)
			.then(response => response.json())
			.then(projects => projects.filter(project => !project.fork).forEach(project => (stargazers += project.stargazers_count)))
			.then(_ => setStars(stargazers))
	}
	const fetcheSolvedQuestions = userName => {
		// fetch(`https://leetcode-api.cyclic.app/${userName}`, {
		// 	method: "GET",
		// 	headers: {
		// 		"Access-Control-Allow-Origin": "*",
		// 	},
		// 	crossorigin: true,
		// }).then(res => console.log(res))
		// 	.then(response => response.json())
		// 	.then(response => setSolved(response.totalSolved))
		setSolved(66)
	}
	useEffect(() => {
		fetchFollowers("warmachine028")
		fetchProjects("warmachine028")
		fetchStars("warmachine028")
		fetcheSolvedQuestions("pritamkundu")
	}, [])

	return (
		<Section id="accomplishments">
			<SectionDivider />
			<SectionTitle main>Personal Accomplishments</SectionTitle>
			<Boxes>
				<Box>
					<BoxNum>{followers}+</BoxNum>
					<BoxText>Github Followers</BoxText>
				</Box>
				<Box>
					<BoxNum>{projects}+</BoxNum>
					<BoxText>Open Source Projects</BoxText>
				</Box>
				<Box>
					<BoxNum>{stars}+</BoxNum>
					<BoxText>Github Stars</BoxText>
				</Box>
				<Box>
					<BoxNum>{solved}+</BoxNum>
					<BoxText>Problems solved on LeetCode</BoxText>
				</Box>
			</Boxes>
		</Section>
	)
}
export default Acomplishments
