import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./Components/Header"
import { lazy, Suspense } from "react"
import Loader from "./Components/Loader";

// code spliting

const Home = lazy(() => import("./Components/Home"));
const Learning = lazy(() => import("./Components/Learning"));
const Quiz = lazy(() => import("./Components/Quiz"));
const Result = lazy(() => import("./Components/Result"));
const Login = lazy(() => import("./Components/Login"));



const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learning />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
