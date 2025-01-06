import { Routes, Route } from "react-router-dom"
import { HomePage, JokePage, PageNotFound } from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/"     element={ <HomePage />     } />
            <Route path="/joke" element={ <JokePage />     } />
            <Route path="*"     element={ <PageNotFound /> } />
        </Routes>
    </>
  )
}
