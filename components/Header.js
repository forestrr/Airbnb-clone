import React from 'react'
import Image from "next/image";
import {SearchIcon,
    MenuIcon,
    UserCircleIcon,
    GlobeAltIcon,
    UserIcon,
    UsersIcon} from '@heroicons/react/solid'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import router, { useRouter } from 'next/router';
import { getDate } from 'date-fns';

function Header({placeholder}) {
   
    const[searchInput,setSearchInput]=useState('');
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuest, setnoOfGuest] = useState('1')
    const router=useRouter()
    console.log(searchInput)
    const handleSelect=(ranges)=>{
        console.log(ranges)
        setStartDate(ranges.Selection.startDate)
        setEndDate(ranges.Selection.endDate)        
    }
    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:'Selection'
    }
    const resetInput=()=>{
        setSearchInput('')
    }
    const search=()=>{
        router.push({
            pathname:'search',
            query:{
                location:searchInput,
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                noOfGuest  
            }
        })
    }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white
        shadow-md p-5  md:px-10">

        
           
            {/*left*/}
            <div  onClick={()=> router.push('/')}
            className="relative flex items-center h-10
            cursor-pointer my-auto">
                <Image 
                src='http://links.papareact.com/qd3'
                layout='fill'
                objectFit="contain"
                objectPosition='left'
                />
            </div>

            {/*middle-search*/}
            <div className="flex items-center md:border-2 rounded-full py-2">
                <input value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)} 
                className=" flex-grow pl-5 
                bg-transparent outline-none 
                md:shadow-sm text-gray-600 placeholder-gray" 
                type="text" placeholder={ placeholder|| "start your search"}/>
                <SearchIcon className="hidden md:inline-flex 
                h-8 bg-red-400
                 text-white rounded-full 
                 p-2 cursor-pointer md:mx-2"/>
            </div>

            {/*right*/}
            <div className="flex items-center justify-end 
            space-x-4 text-gray-500 "> 
            <p className="hidden md:inline">Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer"/>
            <div className='flex items-center space-x-2 p-2 rounded-full '>
                <MenuIcon className="h-6"/>
                <UserCircleIcon className="h-6"/>
            </div>
            </div>
            {searchInput && <div className="flex flex-col col-span-3 mx-auto"> 
            <DateRangePicker 
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}/>
            <div className="flex items-center border-b mb-4" >
                <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                <UsersIcon className="h-5"/>
                <input type="number" className='w-12 pl-2 text-lg outline-none text-red-400'
                value ={noOfGuest} onChange={(e)=>setnoOfGuest(e.target.value)}
                min={1}
            />
            </div>
            <div className="flex">
                <button onClick={resetInput} className='flex-grow text-gray-400' >Cancel</button>
                <button onClick={search} className='flex-grow text-red-400 '>Search</button>
                </div>
            </div> }
                   </header>
    )
}

export default Header