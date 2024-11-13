import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const [isvisible, setIsvisible] = useState(false);

    // const apiCall = () => {

    // }

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
    </>
  );
};

export default Profile