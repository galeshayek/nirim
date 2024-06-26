import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Root = () => {
    return (
        <div className='bg-amber-50/50 text-textColor'>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Root