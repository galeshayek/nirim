import { SubmitHandler, useForm } from "react-hook-form"
import { manager } from "../@types/types"
import { toast } from "react-toastify"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useBoolean } from "@chakra-ui/react"
import { managerKey } from "../keys/keys"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const ManagerLogin = () => {
    const navigate = useNavigate()
    const [isPass, setPass] = useBoolean(true)
    const { toggle } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<manager>()

    const onSubmit: SubmitHandler<manager> = (data) => {
        if (data.pass === managerKey) {
            reset()
            toggle(true)
            toast.success('login')
            navigate('/users')
        } else {
            toggle(false)
            toast.error('wrong password');
        }
    }
    return (
        <div className="mx-auto w-5/12 h-[400px] flex flex-col justify-center items-center">
            <form noValidate
                onSubmit={handleSubmit(onSubmit)}
                className=" flex flex-col justify-center items-center gap-2"
            >
                <h1 className="text-xl">enter password:</h1>
                <div className="relative">
                    <input
                        placeholder="password"
                        aria-label="password"
                        type={isPass ? 'password' : 'text'}
                        className="border-2 rounded px-2 py-1"
                        {
                        ...register("pass",
                            {
                                required: { value: true, message: 'field is mendatory' }
                            }
                        )
                        }
                    />
                    <p className="text-lg absolute right-2 top-2" role="button" onClick={setPass.toggle}>{isPass ? <FaEye /> : <FaEyeSlash />}</p>
                    {errors.pass && (
                        <p className="text-center text-red-500">{errors.pass.message}</p>
                    )}
                </div>
                <button className="bg-primary rounded shadow px-4 py-2 mt-4">Login</button>
            </form>
        </div>
    )
}

export default ManagerLogin