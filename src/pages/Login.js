import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(' ')
    const {user,logIn} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email,password)
            navigate('/')
        } catch (error){
            console.log(error)
            setError(error.message)
        }
    }

  return (
    <>
    <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/3187860d-b0b5-4d82-88c3-034979c38e8b/US-en-20220718-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>
                        Sign In
                    </h1>
                    {error ? <p className='p-3 bg-violet-300 my-2'>{error}</p>:null}
                    <form onSubmit={handleSubmit} action="" className="w-full flex flex-col py-4">
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email or Phone Number" autoComplete="email"/>
                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete='password'/>
                        <button className='bg-violet-500 py-3 my-6 rounded font-bold'>Sign In</button>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <p>
                        <input 
                       className='mr-2' type="checkbox" />Remember me
                        </p>
                        <p>
                        Need help?
                        </p>
                    </div>
                    <p className="py-8"><span className="text-gray-500">
                        New to Vixie?
                    </span>{' '}
                    <Link to='/signup'>
                    Sign Up
                    </Link>
                    </p>
                    </form>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Login