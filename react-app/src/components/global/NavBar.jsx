import React, { useState } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import ProductItem from '../products/ProductItem'
import TailwindTest from './TailwindTest'
import '@fortawesome/fontawesome-free'

const NavBar = props => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <div className=''>
      {/* <div className=''>
        <Link to='/'>
          <p>logo</p>
          <img src='' alt='' />
        </Link>
      </div>
      <li>
        <Route component={ProductItem}>
          <Link to='/products/'>
            <ul>Products</ul>
          </Link>
        </Route>
        <Route component={TailwindTest}>
          <Link to='/uitests/'>
            <ul>Tests</ul>
          </Link>
        </Route>
      </li> */}

      <nav className='relative shadow-lg bg-white shadow-lg flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              to='/'
              className=' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase'
            >
              Logo Here
            </Link>
            <button
              className='cursor-pointer text-xl text-gray-600 leading-none px-5 py-1 border border-solid border-gray-600 rounded  block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='text-gray-800 bg-gray-900 fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-end'>
                <Route component={ProductItem}>
                  <Link
                    to='/products/'
                    className='text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  >
                    Products
                  </Link>
                </Route>
              </li>
            </ul>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-center'>
                <button
                  className='bg-pink-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                  type='button'
                  style={{ transition: 'all .15s ease' }}
                >
                  <i className='fas fa-arrow-alt-circle-down'></i> Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
