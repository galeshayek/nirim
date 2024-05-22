import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { FCC } from '../@types/types'
import Home from '../routes/Home'

const PrivateRoutes: FCC = ({ children }) => {
    const { isManager } = useContext(AuthContext)
    if (!isManager) {
        return <Home />
    } else {
        return (<>
            {children}
        </>)
    }

}

export default PrivateRoutes