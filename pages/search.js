import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function search() {
    const router=useRouter()
    console.log(router.query)
    const {location , startDate ,endDate,noOfGuests }=router.query;
    console.log(startDate)

    return (
        <div className ="">
            <Header/>
            <main className="flex">
                <section className='flex-grow pt-14 px-16'>
                    <p className='text-xs'>300 +stays for {noOfGuests} guests </p>
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
