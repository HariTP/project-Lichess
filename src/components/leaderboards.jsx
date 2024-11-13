import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Leaderboards = () => {
    const navigate = useNavigate();

    const [isvisible, setIsvisible] = useState(false);

    const apiCall = () => {

    }

    const togglePasswordVisibilty = () => {
        setIsvisible(!isvisible);
        console.log(isvisible);
    }

    return (
    <>
    <div>
        <input type="text" className="w-full mt-6 bg-gray-800 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400' py-2.5 px-3 rounded-md" placeholder="Username"/>
        <button className='w-full mx-auto items-center justify-center outline-none mt-5 text-black bg-blue-300 px-8 py-2 text-sm rounded-3xl  hover:bg-blue-200 font-semibold'
            >Enter</button>
    </div>


    {/* <div className='flex justify-center items-center h-3/4'>
        <div className='p-5 w-1/3 rounded-2xl flex flex-col justify-center'>
            <h1 className='flex text-2xl font-semibold justify-center items-center'>Login</h1>
            <input type="text" className="w-full mt-6 bg-gray-800 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400' py-2.5 px-3 rounded-md" placeholder="Email or Phone"/>
            
            <div class="relative w-full mt-6">
                <input type={isvisible ? 'text' : 'password'} class="w-full bg-gray-800 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 py-2.5 px-3 rounded-md" placeholder="Password"/>
                <button onClick={togglePasswordVisibilty} class="absolute inset-y-0 right-0 flex items-center px-4 hover:text-white text-sm text-blue-300 focus:outline-none" type="button">{isvisible ? "Hide": "Show"}</button>
            </div>

            <button className='text-red-100 mt-3 hover:text-red-300 text-xs ml-auto'>Forgot password?</button>
            <button className='w-full mx-auto items-center justify-center outline-none mt-5 text-black bg-blue-300 px-8 py-2 text-sm rounded-3xl  hover:bg-blue-200 font-semibold'
            >Sign in</button>
        
            <div className="flex items-center mt-1">
                <div className="flex-1">
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </div>
                <div className="px-3 text-gray-200 text-sm">or</div>
                <div className="flex-1">
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </div>
            </div>
            <button className='w-full mx-auto items-center justify-center outline-none mt-1 text-black bg-blue-300 px-8 py-2 text-sm rounded-3xl  hover:bg-blue-200 font-semibold'
            >Sign in with Google</button>
            <button onClick={signupClick} className='text-blue-300 mt-5 hover:text-white text-xs'>New to ShortLY? SignUp</button>
        
        </div>
    </div> */}
    </>
  )
}

export default Leaderboards