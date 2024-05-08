import { useEffect } from "react"
import { getUsers } from "../services/axios"
const Users = () => {
    useEffect(() => {
        getUsers().then(r => console.log(r.data))
    }, [])
    return (
        <section>
            <div>
                <h2>First name</h2>
                <h2>Last name</h2>
                <h2>Email</h2>

            </div>
        </section>
    )
}

export default Users