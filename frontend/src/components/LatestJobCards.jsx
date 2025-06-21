import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ zIndex: 10 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, stiffness: 200 }}
            onClick={() => navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer z-10'>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title} </h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant={"ghost"}>{job?.postion} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant={"ghost"}>{job?.jobType}</Badge>
                <Badge className={'text-[#7209B7] font-bold'} variant={"ghost"}>{job?.salary} LPA</Badge>
            </div>
        </motion.div>
    )
}

export default LatestJobCards
