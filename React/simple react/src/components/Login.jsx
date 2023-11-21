import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();

        navigate('/dashboard')

    }
  return (
    <div className=' w-[250px] h-[300px]'>
        <form onSubmit={handleSubmit} method="post">
        <p>Login your account</p>
        <div className='flex flex-col mt-6'>
            <input className='border mb-6' type="text" name="" id="" placeholder='email'/>
            <input className='border mb-4' type="password" name="" id="" placeholder='password'/>
        <button  className=' bg-red-600 text-white mb-4'>Login</button>
        <Link to="/register" className=' bg-blue-500 text-white py-2'>Register</Link>
        </div>
        </form>
    </div>
  )
}

export default Login