
import Hero from "@/components/herosection"
import Why from "@/components/WhyChoose"
import FeaturedCourses from "@/components/FeaturedCourses"
import Testimonial from "@/components/testimonial"

import UPcoming from "@/components/upcomingWebinar"

export default function Home(){
  return(
   <main className="bg-black/[0.95] min-h-screen antialiased bg-grid-white/[0.02] " >
<div className="text-white">
  <Hero/>
  <FeaturedCourses/>
<Why/>
<Testimonial/>
<UPcoming/>


</div>
   </main>
  )
}