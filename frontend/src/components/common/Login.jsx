import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axiosInstance from './AxiosInstance';
import LogoImg from '../../assets/logo-img.png'
import LogoText from '../../assets/logo-text.png'

const Login = () => {
   const navigate = useNavigate()
   const [data, setData] = useState({
      email: "",
      password: "",
   })

   const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!data?.email || !data?.password) {
         return alert("Please fill all fields");
      } else {
         axiosInstance.post('/api/user/login', data)
            .then((res) => {
               if (res.data.success) {
                  alert(res.data.message)

                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("user", JSON.stringify(res.data.userData));
                  navigate('/dashboard')
                  setTimeout(() => {
                     window.location.reload()
                  }, 1000)
               } else {
                  alert(res.data.message)
               }
            })
            .catch((err) => {
               if (err.response && err.response.status === 401) {
                  alert("User doesn't exist");
               }
               navigate("/login");
            });
      }
   };

   return (
      <>
         <nav className='flex justify-between h-[80px] md:gap-5 w-[100%] items-center sticky top-0 z-10 bg-[#F6F4EB] md:h-24 pt-8 md:pt-12'>
            <div className='flex items-start justify-start md:ml-0 ml-[-5%] w-[40%] md:w-[20%]'>
               <img src={LogoImg} className='md:w-[40%] w-[70%]' />
               <img src={LogoText} className='md:w-[70%] md:ml-[-28%] ml-[-45%] mt-[-16%]' />
            </div>
            <ul className='hidden md:flex md:gap-14 font-bold md:justify-center mt-[-4%] w-[25%] cursor-pointer' onClick={() => { alert("Login or SignUp first") }}>
               <a>Home</a>
               <a>Courses</a>
               <a>Resources</a>
            </ul>
            <div className='md:w-[35%] w-[10%] md:ml-0 ml-14 font-bold flex items-center justify-end md:mr-10 md:mt-[-4%] mt-[-9%] gap-5'>
               <Link to={'/login'}><button className='text-[12px] md:text-[16px] w-full mx-5 md:mx-0'>Log In</button></Link>
               <Link to={'/register'}><button className='bg-[#004EEC] p-1 text-[12px] md:text-[16px] md:w-full px-5 w-[90px] text-white md:px-7 rounded-full'>Sign Up</button></Link>
            </div>
            <div className='md:hidden ml-[-15%] mr-5 cursor-pointer' onClick={() => { setShowNavbar(true) }}>
               <i class="fa-solid fa-bars text-2xl mb-9"></i>
            </div>
         </nav>
         <div className=''>
            <Container component="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
               <Box className='shadow-xl shadow-gray-500 p-4 rounded-3xl bg-white'
                  sx={{
                     marginTop: 8,
                     marginBottom: 4,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     padding: '10px',
                     borderRadius: '5px'
                  }}
               >
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  </Avatar>
                  <Typography component="h1" variant="h5">
                     <span className='font-bold'>Log In</span>
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate>

                     <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        autoFocus
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                     />
                     <Box mt={2}>
                        <Button className='font-bold'
                           type="submit"
                           variant="contained"
                           sx={{ mt: 3, mb: 2 }}
                           style={{ width: '200px' }}
                        >
                           Log In
                        </Button>
                     </Box>
                     <Grid container>
                        <Grid item>Have an account?
                           <Link style={{ color: "blue" }} to={'/register'} variant="body2">
                              {" Sign Up"}
                           </Link>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Container>
         </div>

      </>
   )
}

export default Login



