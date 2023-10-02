import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-blue-400'>
			<h3 className=' bg-blue-400 font-bold'>Githum search</h3>
			<span className=' bg-blue-400'>
				<Link to='/' className='mr-2 bg-blue-400'>
					Home{' | '}
				</Link>
				<Link to='/favorites' className=' bg-blue-400'>
					{' | '}Favorites
				</Link>
			</span>
		</nav>
	)
}

export default Navigation
