import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-3 my-10'><span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Searching Website</span>
                <div className='flex items-center justify-center'>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className='text-5xl font-bold '>Search, Apply & <br />Get Your <span className='text-[#6A38C2]'>Dream Job</span></motion.h1>
                </div>

                <p className='text-gray-600 mt-4 text-lg leading-relaxed'>Discover thousands of tailored opportunities and take your career to the next level with us.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input type="text"
                        placeholder='Find Your Dream Jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full' />
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        <Button onClick={searchJobHandler} className='rounded-r-full bg-[#6a38C2]'>
                            <Search className='h-5 w-5' />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
