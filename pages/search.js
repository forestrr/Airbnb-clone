import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {format} from "date-fns"
import InfoCards from "../components/InfoCards";
function search({searchresult}) {
    console.log(searchresult)
    const router=useRouter()
    
    const {location , startDate ,endDate,noOfGuest }=router.query;

    const formattedStartDate= format(new Date(startDate),"dd MMMM yy") 
    const formattedEndDate= format(new Date(endDate),"dd MMMM yy")     
    const ranges=`${formattedStartDate}-${formattedEndDate}`
    return (
        <div className ="">
            <Header placeholder={`${location} | ${ranges} |  ${noOfGuest} Guests`} />
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
                    <div className="flex flex-col " >
                    {searchresult.map(({img ,location ,title ,description ,star ,price,total} )=>(
                     <InfoCards  
                     key={img}
                     img={img}
                     location={location}
                     title={title}
                     description={description}
                     star={star}
                     price={price}
                     total={total} />

                    ))}
                    </div>
                    
                    
                </section>

            </main>

            <Footer/>
        </div>
    )
}

export default search
export  async function getServerSideProps(){
    const searchresult= await fetch("https://links.papareact.com/isz ").then(res=>res.json())
    return{
         props:{
              searchresult:searchresult
         }
    }

}