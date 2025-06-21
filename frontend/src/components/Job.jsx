import { Button } from './ui/button'
import { Bookmark, BookMarked, BookMarkedIcon } from 'lucide-react'
import { Avatar, AvatarImage, } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
 
const Job = ({job}) => {
    const {user} = useSelector(store => store.auth);
    const navigate = useNavigate();
    // const jobId = "akjdflkajsfk";

    const daysAgoFunction = (mongodbTime) =>{
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }

    const saveForLater = (jobId) => {
        let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
        if(!user || user.role !== 'student'){
           navigate('/login');
           return;
        }
        if (!savedJobs.includes(jobId)) {
            savedJobs.push(jobId);
            localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
            toast.success('Job saved for later!');
        } else {
            toast.error('Job is already saved.');
        }
    };
    const bookMark = (jobId) => {
        let bookJobs = JSON.parse(localStorage.getItem('bookJobs')) || [];
        if(!user || user.role !== 'student'){
           navigate('/login');
           return;
        }
        if (!bookJobs.includes(jobId)) {
            bookJobs.push(jobId);
            localStorage.setItem('bookJobs', JSON.stringify(bookJobs));
            toast.success('Bookmarked');
        } else {
            toast.error('already Bookmarked');
        }
    };

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 z-10'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button onClick={()=> bookMark(job._id)} className='rounded-full' variant="outline" size="icon"> { bookMark ? <BookMarkedIcon className=''/> : <Bookmark className='bg-white'/>} </Button>
            </div>
            <div className='flex items-center gap-2 my-2'><Button className="p-6" variant="outline" size="icon">
                <Avatar>
                    <AvatarImage src={job?.company?.logo} />
                </Avatar>
            </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>

            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-650'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant={"ghost"}>{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant={"ghost"}>{job?.jobType}</Badge>
                <Badge className={'text-[#7209B7] font-bold'} variant={"ghost"}>{job?.salary} LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=> navigate(`/description/${job?._id}`) } variant="outline">Details</Button>
                <Button onClick={()=> saveForLater(job._id)} className= {`${saveForLater ? ' bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7]'}`} >{ saveForLater ? 'Saved' : 'Save for Later'}</Button>
                
            </div>
        </div>
    )
}

export default Job
