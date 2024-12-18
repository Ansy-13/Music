"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";



function Why(){
    
    const musicSchool =[
        {
            "title": "Why choose US",
            "description" : "At our school, we are dedicated to creating an inspiring environment where music lovers of all ages and skill levels can thrive. Our experienced instructors are passionate professionals who tailor lessons to each student’s unique needs, ensuring steady progress and a rewarding learning experience. With both group and private lessons available, we provide flexible programs that make learning music enjoyable and accessible for everyone. Students also benefit from regular performance opportunities, allowing them to build confidence and showcase their skills. Our state-of-the-art facilities and high-quality instruments further enhance the learning experience, providing the ideal setting to discover and grow your musical potential. Join us to embark on a journey towards musical excellence!"
        },
        {
            "title": "Discover Piano Lessons",
            "description": "Comprehensive piano training for beginners to advanced students, covering classical and contemporary styles."
          },

          {
            "title": "Discover The Lesson Guitar Lessons",
            "description": "Learn acoustic and electric guitar from experienced instructors with a curriculum that covers a variety of genres."
          },
          {
            "title": "Vocal Training With US",
            "description": "Enhance your vocal skills with personalized training in techniques, range, and performance."
          },
          {
            "title": "Drums & Percussion",
            "description": "Dynamic drum classes that focus on rhythm, technique, and coordination for all levels."
          }
    ]
    
    return(
      <main>
      <div>
            
            <StickyScroll content={musicSchool}/>
        </div>

        </main>
    )
}

export default Why