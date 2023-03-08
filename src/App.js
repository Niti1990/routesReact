import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/layout/Main'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />}>
				 <Route path='Home' element={<Home />} />
					<Route path='contact' element={<Contact />} />
					<Route path='about' element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
