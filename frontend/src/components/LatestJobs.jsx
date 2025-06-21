import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
    return (
        <div className='max-w-7xl mx-auto my-20 '>
            <h1 className='text-4xl font-bold'><span className='text-[#6A38c2]'>Latest & Higher </span>Job Openings</h1>
            <motion.div
                initial={{ opacity: 0,zIndex: 10, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='grid grid-cols-3 gap-4 my-5'
            >
                {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
                }
            </motion.div>
        </div>
    )
}

export default LatestJobs
