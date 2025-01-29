import { lazy } from "react";

const Homepage = lazy(() => import('../Pages/Homepage'))

interface RouterProps {
    path: string,
    component: React.FC<{}>,
    exact: boolean
}

const Routers: RouterProps[] = [
    {
        path: '/',
        component: Homepage,
        exact: true
    }
]

export default Routers