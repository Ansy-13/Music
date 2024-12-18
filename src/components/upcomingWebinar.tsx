"use client"


import {  HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";



export default function UPcoming(){
    
    const featureWebinar = 
        [
            {
              title: "Basics of Music Theory",
              description: "Understand the fundamental concepts of music theory, including scales, chords, and rhythm.",
              link: "basics-of-music-theory",
             
            },
            {
              title: "Music Production for Beginners",
              description: "Learn how to create and produce music using modern digital tools.",
              link: "music-production-beginners",
              
            },
            {
              title: "Mastering Guitar Techniques",
              description: "Improve your guitar playing with advanced techniques and practice routines.",
              link: "mastering-guitar-techniques",
           
            },
            {
              title: "Vocal Training Essentials",
              description: "Enhance your vocal skills with exercises and techniques for all levels.",
              link: "vocal-training-essentials",
              
            },
            {
              title: "Exploring Music Genres",
              description: "Dive into different music genres and understand their unique characteristics.",
              link: "exploring-music-genres",
             
            },
            {
              title: "Building a Home Studio",
              description: "A guide to setting up a professional-grade music studio at home.",
              link: "building-home-studio",
             
            }
          ]
          
    
    
    return(
        <div className="p-12 bg-gray-900 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">  
                <div className="text-center">
                    <h1 className="text-base text-teal-600 font-bold tracking-wide uppercase"> FEATURED WEBINARS</h1>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl"> Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10">

                <HoverEffect items={featureWebinar}/>

               
</div>
                <div className="mt-10 text-center">
                    <Link href={"/"}
                    className="px-4 py-4 rounded-xl border-2 border-teal-600 hover:bg-gray-700 bg-teal-600 text-white transition duration-500 "
                    >View All Webinars</Link>
                </div>
            </div>
            

        </div>
    )
}