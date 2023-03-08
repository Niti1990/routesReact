import { Outlet } from 'react-router-dom'
function Main() {
	return (
		<div>
			<ul>
				<li>
					<a href='Home'>HOME</a>
				</li>

				<li>
					<a href='Contact'>CONTACT US</a>
				</li>
				<li>
					<a href='About'>ABOUT</a>
				</li>
			</ul>
			<Outlet />
		</div>
	)
}
export default Main
