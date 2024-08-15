import { Route, Routes } from 'react-router'

import './App.scss'
import { Home } from './Pages/Home/Index.tsx'
import { PageNotFound } from './App/Error/Index.tsx'
import { About } from './Pages/About/Index.tsx'
import { Blogs } from './Pages/Blogs/Index.tsx'
import { BlogsDatabaseKeys } from './Constants/Blogs.ts'
import { BlogPage } from './Components/Organisms/Blog-Key/Index.tsx'
import { Certificates } from './Pages/Certificates/Index.tsx'
import { CertificatesDatabaseKeys } from './Constants/Certificates.ts'
import { CertificatePage } from './Components/Organisms/Certificate-Key/Index.tsx'
import { Education } from './Pages/Education/Index.tsx'
import { Experience } from './Pages/Experience/Index.tsx'
import { More } from './Pages/More/Index.tsx'
import { Projects } from './Pages/Projects/Index.tsx'
import { ProjectsDatabaseKeys } from './Constants/Projects.ts'
import { ProjectPage } from './Components/Molecules/Project-Key/Index.tsx'
import { Skills } from './Pages/Skills/Index.tsx'
import { SkillsDatabaseKeys } from './Constants/Skills.ts'
import { SkillPage } from './Components/Organisms/Skill-Key/Index.tsx'
import { RolesDatabaseKeys } from './Constants/Roles.ts'
import { RolePage } from './Components/Molecules/Role-Key/Index.tsx'

const App = () => {
	const BlogRoutes = BlogsDatabaseKeys.map((BlogKey) => (
		<Route key={BlogKey} path={`/Blog/${BlogKey}`} element={<BlogPage Params={{ BlogKey: BlogKey }} SearchParams={{}} />} />
	))
	const CertificateRoutes = CertificatesDatabaseKeys.map((CertificateKey) => (
		<Route key={CertificateKey} path={`/Certificates/${CertificateKey}`} element={<CertificatePage Params={{ CertificateKey: CertificateKey }} SearchParams={{}} />} />
	))
	const ExperienceRoutes = RolesDatabaseKeys.map((RoleKey) => (
		<Route key={RoleKey} path={`/Experience/${RoleKey}`} element={<RolePage Params={{ RoleKey: RoleKey }} SearchParams={{}} />} />
	))
	const ProjectRoutes = ProjectsDatabaseKeys.map((ProjectKey) => (
		<Route key={ProjectKey} path={`/Projects/${ProjectKey}`} element={<ProjectPage Params={{ ProjectKey: ProjectKey }} SearchParams={{}} />} />
	))
	const SkillRoutes = SkillsDatabaseKeys.map((SkillKey) => (
		<Route key={SkillKey} path={`/Skills/${SkillKey}`} element={<SkillPage Params={{ SkillKey: SkillKey }} SearchParams={{}} />} />
	))
	const AppRoutes = (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='*'
					element={<PageNotFound />}
				/>
				<Route
					path='/About'
					element={<About />}
				/>
				<Route
					path='/Blog'
					element={<Blogs />}
				/>
				{BlogRoutes}
				<Route
					path='/Certificates'
					element={<Certificates />}
				/>
				{CertificateRoutes}
				<Route
					path='/Education'
					element={<Education />}
				/>
				<Route
					path='/Experience'
					element={<Experience />}
				/>
				{ExperienceRoutes}
				<Route
					path='/More'
					element={<More />}
				/>
				<Route
					path='/Projects'
					element={<Projects />}
				/>
				{ProjectRoutes}
				<Route
					path='/Skills'
					element={<Skills />}
				/>
				{SkillRoutes}
			</Routes>
		</>
	)
	return AppRoutes
}

export default App