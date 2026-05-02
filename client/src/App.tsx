import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Projects from './pages/Projects'
import MyProjects from './pages/MyProjects'
import Preview from './pages/Preview'
import Community from './pages/Community'
import View from './pages/View'
import Navbar from './components/Navbar'
import { Toaster } from 'sonner';
import AuthPage from './pages/auth/AuthPage'
import Settings from './pages/Settings'
import Loading from './pages/Loading'

const App = () => {
  const { pathname } = useLocation();

    const hideNavbar =
        (pathname.startsWith("/projects/") && pathname !== "/projects") ||
        pathname.startsWith("/preview/") ||
        pathname.startsWith("/view/");

  return (
    <div>
      <Toaster />
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/preview/:projectId" element={<Preview />} />
        <Route path="/preview/:projectId/:versionId" element={<Preview />} />
        <Route path="/community" element={<Community />} />
        <Route path="/view/:projectId" element={<View />} />
        <Route path="/auth/:pathname" element={<AuthPage />} />
        <Route path="/account/settings" element={<Settings />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>

      <div className="fixed text-sm md:text-base p-2 backdrop-blur-md rounded right-2 border border-zinc-700/30 shadow bottom-1 text-center text-gray-500 z-50">
        <p>
          © Made with ❤️ by{" "}
          <a
            href="#"
            target="_blank"
            className="text-zinc-200 hover:underline"
            rel="noopener noreferrer"
          >
            Siddhartha 
          </a>{" "}🙇{" "}
        </p>
      </div>
    </div>
  )
}

export default App