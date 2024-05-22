import { useEffect, useState } from "react"
import { getUsers } from "../../services/axios"
import { users } from "../../@types/types"
import { handleCopy } from "../../services/copyEmails"
import exportToExcel from "../../services/excel"
import useWindowSize from "../../hooks/useWindowSize"
const Users = () => {

    const [users, setUsers] = useState<users[]>([])
    const [excelList, setList] = useState<object[]>([])
    const [emailList, setEmails] = useState('')
    const { width } = useWindowSize()
    let i = 1
    useEffect(() => {
        getUsers()
            .then(r => {
                setUsers(r.data)
            })
    }, []);
    useEffect(() => {
        if (users.length > 0) {
            // Process excelList
            const excel = users.map(u => ({
                "first name": u.firstName,
                "last name": u.lastName,
                "email": u.email,
                "allow updates": u.receiveUpdates,
            }));
            setList(excel);

            // Process emailList
            const usersEmailArr = users.map(u => u.email);
            const emailString = usersEmailArr.join(' ');
            setEmails(emailString);
        }
    }, [users]);
    return (
        <section>
            <div className="px-10 w-full flex flex-col pt-4">
                <div className="space-x-2 mx-auto">
                    <button className=" p-2 bg-pop rounded shadow" onClick={() => handleCopy(emailList)}>copy emails</button>
                    <button className="p-2 bg-green-600 rounded shadow" onClick={() => exportToExcel(excelList)}>Download excel</button>
                </div>
                {width > 768 && <div className="border-b-2 pt-3 flex justify-around *:text-center *:w-full *:font-semibold ">
                    <p>First name</p>
                    <p>Last name</p>
                    <p>Email</p>
                    <p>Phone number</p>
                    <p>accepts getting updates</p>
                </div>}

                {
                    users.map((user) => (
                        <div key={user._id}
                            className="md:flex justify-center md:gap-4 md:*:w-full space-y-2 max-md:shadow *:p-4 md:*:rounded md:*:shadow "
                        >
                            <p><span className="inline-block md:hidden underline text-primary">first name: </span> {i++}. {user.firstName}</p>
                            <p><span className="inline-block md:hidden underline text-primary">last name: </span> {user.lastName}</p>
                            <p><span className="inline-block md:hidden underline text-primary">email: </span> {user.email}</p>
                            <p><span className="inline-block md:hidden underline text-primary">phone number: </span> {user.phoneNumber}</p>
                            <p><span className="inline-block md:hidden underline text-primary">allow updates: </span> {user.receiveUpdates ? 'yes' : 'no'}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Users