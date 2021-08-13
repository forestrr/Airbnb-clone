import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]
        xl:h-[600px] 2xl:h-[700px]">
            <Image src="https://images.unsplash.com/photo-1492528491602-a42e1caf03ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
            layout="fill"
            objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg font-semibold">Not sure where to go ? Perfect.</p>
               
                <button className="text-purple-500 
                rounded-full bg-white py-4 
                px-10 shadow-md font-bold my-3 hover:shadow-xl active:scale-90  transition duration-150">Im flexible</button>
                </div>
        </div>
    )
}

export default Banner
