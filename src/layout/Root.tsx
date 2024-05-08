import { Outlet } from 'react-router-dom'
import Header from './Header'

const Root = () => {
    return (
        <div className='bg-base text-textColor'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Root