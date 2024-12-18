"use client"
import courseData from "@/data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        level: string,
        isFeatured: boolean,
        price : number,
        duration_weeks: number,
}

export default function FeaturedCourses(){


   const featuredCourses = courseData.courses.filter(Course => Course.isFeatured)

    return(
        <div className="py-4 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
                    <p className="mt-2 text-3xl leading-8 font-extra-bold tracking-tight text-white sm:text-4xl">Learn with the best</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course:Course) => (
                        <div key={course.id} className="flex justify-center">
                         
                                <BackgroundGradient
                                className="flex felx-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                   <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-2xl mb-4 text-white font-bold">{course.title}</p>
                                    <p className="p-4 text-left ml-7 text-gray-400">{course.description}</p>
                                   </div>
                                   
                                </BackgroundGradient>

                           
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 flex ml-40  sm:ml-[680px] md:ml-[300px] lg:ml-[700px] 2xl:ml-[600px] border-2 justify-center bg-white text-black w-[150px] rounded-lg">
                <Link href="/courses" className="">Veiw All Courses</Link>
            </div>
        </div>
    )
}