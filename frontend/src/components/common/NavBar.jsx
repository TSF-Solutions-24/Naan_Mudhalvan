import React, { useContext } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import { NavLink } from 'react-router-dom';

const NavBar = ({ setSelectedComponent }) => {

   const user = useContext(UserContext)

   if (!user) {
      return null
   }


   const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
   }
   const handleOptionClick = (component) => {
      setSelectedComponent(component);
   };

   return (
      <Navbar expand="lg" className="bg-body-tertiary p-4 flex justify-between md:gap-5 w-[100%] items-center sticky top-0 z-10 bg-[#F6F4EB]">
         <Container fluid>
            <Navbar.Brand>
               <h3 className='font-bold '>Skill Plus</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav className="me-auto my-2 my-lg-0 font-semibold flex justify-center ml-[40%] items-center " style={{ maxHeight: '100px' }} navbarScroll>
                  <NavLink onClick={() => handleOptionClick('home')}> <span className='bg-blue-500 text-white p-2'>Home</span> </NavLink>
                  {user.userData.type === 'Teacher' && (
                     <NavLink onClick={() => handleOptionClick('addcourse')}> <span className='bg-blue-500 text-white p-2'>Add Courses</span> </NavLink>
                  )}
                  {user.userData.type === 'Admin' && (
                     <>
                        <NavLink onClick={() => handleOptionClick('cousres')}><span className='bg-blue-500 text-white p-2'>Courses</span></NavLink>
                     </>
                  )}
                  {user.userData.type === 'Student' && (
                     <>
                        <NavLink onClick={() => handleOptionClick('enrolledcourese')}><span className='bg-blue-500 text-white p-2'>Enrolled Courses</span></NavLink>
                     </>

                  )}
               </Nav>
               <Nav className='flex items-center'>
                  <h5 className='mx-3'>Hello, <span className='font-bold'>{user.userData.name}</span></h5>
                  <Button onClick={handleLogout} className='text-white bg-red-500' size='sm' variant='outline-danger'>Log Out</Button >
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavBar

