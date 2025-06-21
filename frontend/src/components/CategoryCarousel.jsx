import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { motion } from 'framer-motion'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "API Handler"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");

    }
    const categories = [...category, ...category]; // Duplicates the array
    return (
        <div>
            <Carousel className='w-full max-w-xl mx-auto my-20'>

                <CarouselContent>
                    <motion.div
                        className="w-full flex"
                        animate={{ x: [0, -100 * (categories.length / 2)] }}  // Smooth scrolling
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20, // Adjust the scroll speed
                            ease: "linear"
                        }}
                    >
                        {
                            categories.map((cat, index) => (
                                <motion.div
                                >
                                    <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        ></motion.div>
                                        <Button onClick={() => searchJobHandler(cat)} variant='outline' className='rounded-full'>{cat}</Button>
                                    </CarouselItem>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </CarouselContent>


            </Carousel>
        </div>
    )
}

export default CategoryCarousel
