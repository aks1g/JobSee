import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.salary.toString().includes(searchedQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs);
        }
        else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);

    return (

        <div>
            <Navbar/>
            <motion.div 
            initial={{zIndex:10}}
            className='max-w-7xl mx-auto mt-5 z-10'>
                <div className='flex gap-8'>
                    <div className='w-30%'><FilterCard />
                    </div>
                    {
                        filterJobs.length <= 0 ? <span>Job Not Found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5 z-10'>
                                <div className='grid grid-cols-3 gap-4 z-10'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                className='z-10'
                                                key={job?._id}>
                                                <motion.div 
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration:0.2 , stiffness: 200 }}>
                                                    <Job className="z-10" job={job} />
                                                </motion.div>

                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>

            </motion.div>
        </div>
    )
}

export default Jobs
