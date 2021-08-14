import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {format} from "date-fns"
function search() {
    const router=useRouter()
    console.log(router.query)
    const {location , startDate ,endDate,noOfGuest }=router.query;

    const formattedStartDate= format(new Date(startDate),"dd MMMM yy") 
    const formattedEndDate= format(new Date(endDate),"dd MMMM yy")     
    const ranges=`${formattedStartDate}-${formattedEndDate}`
    return (
        <div className ="">
            <Header/>
            <main className="flex">
                <section className='flex-grow pt-14 px-16'>
                    <h3 className='text-xs'>300 stays from {ranges} for {noOfGuest} guests </h3>
                    <h1 className="text=3xl font-semibold mt-2 mb-6">stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation flexiblity</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters </p>

                    </div>
                </section>

            </main>

            <Footer/>
        </div>
    )
}

export default search
