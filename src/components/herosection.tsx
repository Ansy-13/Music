
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/moving-border";

export default function Hero(){
    return(
       <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"> 
        <div className="p-4 relative z-10 w-full text-center space-y-11">
            <h1 className="mt-20 md:mt-10 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-300 to-zinc-600  bg-white">Master the Art Of Music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-zinc-400 max-w-lg mx-auto" 
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur quod consectetur quibusdam, obcaecati excepturi expedita officia beatae dolor nihil laboriosam cupiditate magnam nemo! Necessitatibus amet maiores doloribus aliquid qui!</p>
            <div className="mt-4">
            
            <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
                    Explore Courses
                </Button>

            </div>
        </div>
            <BackgroundBeams/>
       </div>
    )
}