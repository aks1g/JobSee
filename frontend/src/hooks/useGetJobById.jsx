import {JOb_API_END_POINT } from '@/components/utils/constant'
import { setSingleJob } from '@/redux/jobSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const UseGetJobById = (jobId) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSingleJob = async() =>{
            try {
                const res = await axios.get(`${JOb_API_END_POINT}/get/${jobId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingleJob(res.data.job));
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch])
}

export default UseGetJobById
