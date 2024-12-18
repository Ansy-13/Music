"use client"

import InfiniteMovingCards from "./ui/infinite-moving-cards"




function Testimonial(){
  const testominalContant=
              [  
              {
                quote: "This platform has truly boosted our productivity and has become a crucial part of our daily operations. It offers seamless integration with our existing tools and has greatly reduced the time we spend on routine tasks. I especially appreciate the intuitive interface that makes training new team members a breeze. The customer support team is always prompt, friendly",
                title: "Product Manager, Innovate Corp",
                name: "Alice Johnson"
              },
              {
                quote: "Exceptional customer support and a user-friendly design are just the beginning with this service. We were initially drawn to it due to its robust features, but we stayed because of the incredible support team. Every time we’ve encountered an issue, the team has been quick to respond and resolve it. Theyve made sure were able to get the most out of the platform.",
                title: "COO, Bright Future",
                name: "Robert Lee"
              },
              {
                quote: "Their attention to detail and dedication to quality is truly unmatched in the industry. Weve worked with numerous providers, but none have come close to the level of care and professionalism that this team delivers. They’re meticulous in every aspect, ensuring that each feature and update is flawlessly executed. ",
                title: "Founder, Visionary Labs",
                name: "Emily Davis"
              },
              {
                quote: "I am consistently impressed by their ability to deliver ahead of schedule while maintaining high standards. In the fast-paced environment we operate in, it’s rare to find a team that combines speed with quality. They’ve been an invaluable partner, helping us meet tight deadlines without sacrificing our standards. Their efficient processes and responsive team make collaboration a breeze. ",
                title: "Marketing Head, Digital Wave",
                name: "Michael Chen"
              },
              {
                quote: "An indispensable tool for our daily operations—simply phenomenal. This platform has not only improved our efficiency but has also made a tangible impact on our bottom line. We’ve been able to reduce our operational costs while increasing productivity. The features are thoughtfully designed, keeping the needs of businesses like ours in mind.",
                title: "Director, Apex Solutions",
                name: "Sarah Thompson"
              },
              {
                quote: "The best investment we have made in our companys growth and efficiency, hands down. We were hesitant initially, but the ROI has exceeded our expectations. This service has allowed us to streamline processes, cut down on unnecessary expenses, and focus our efforts on growth initiatives. The user experience is seamless, and the support team is always available to help with any questions. ",
                title: "CEO, GreenTech",
                name: "James Patel"
              },
              {
                quote: "Their support team is always quick to respond and resolve any issues that arise. Its rare to find a service provider that offers this level of customer care. Whenever we have had questions or encountered minor glitches, their team has been there to guide us through solutions. This responsiveness has been instrumental in helping us stay on track with our goals.",
                title: "IT Manager, Horizon Inc.",
                name: "Chris Martin"
              },
              {
                quote: "A reliable, efficient solution thats easy to integrate with our systems and enhances our overall workflow. I have been particularly impressed with how seamless the integration process was. We did not face the usual hurdles we have experienced with other platforms. Everything worked as expected from day one",
                title:"Seo Designer",
                name: "Samantha Rogers"
              },
              {
                quote: "Their professionalism and quality of work exceeded our expectations. From the initial consultation to the delivery of the final product, they demonstrated a level of expertise and commitment that is hard to come by. The team was always available to address our concerns, providing valuable insights that helped us improve our project.",
                title: "Project Manager, UrbanSpace",
                name: "Daniel Green"
              },
              {
                quote: "Since we started using this service, our workflow has improved significantly. Tasks that used to take hours can now be completed in minutes. The automation features alone have saved us countless hours, allowing our team to focus on more critical tasks. We have seen a noticeable improvement in both efficiency and morale, as team members are able to work smarter, not harder. The service has transformed the way we operate and has empowered us to take on more ambitious projects with confidence. Truly a valuable addition to our team.",
                title: "HR Director, Peak Performance",
                name: "Laura Hill"
              }
            ]
    return(
        <div className="h-[40rem] w-full dark:bg-zinc-950 dark:bg-grid-white/[0.1] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10 mt-11">Hear Our Harmony: Voices of success </h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl h-96">
             <InfiniteMovingCards
             items={testominalContant}
             direction="left"
             speed="slow"
             />
                </div>
            </div>
        </div>
    )
}

export default Testimonial