import { APPLICATION_API_END_POINT } from "@/components/utils/constant";
import { setAllAppliedJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () =>{
    const disptach = useDispatch();

    useEffect(()=>{
        const fetchAppliedJobs = async() =>{
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/get` ,{withCredentials: true});
                if(res.data.success){
                    disptach(setAllAppliedJobs(res.data.application));
                    console.log(res.data);
                    
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchAppliedJobs();
    },[])
}

export default useGetAppliedJobs;