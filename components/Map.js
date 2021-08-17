import React ,{useState} from 'react'
import ReactMapGL,{Marker ,Popup} from 'react-map-gl';
import getCenter from "geolib/es/getCenter"

function Map({searchresult}) {
    const [selectedState, setSelectedState] = useState({})
    // latitude and long of the center
    const coordinates=searchresult.map((result)=>({
        longitude:result.long,
        latitude:result.lat
    }))
    console.log(selectedState)
    // transform the search results object into the 
    const center= getCenter(coordinates)
    
    const [viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
        latitude: center.latitude,
        longitude:center.longitude,
        zoom: 11,

    })
    return (
        
            <ReactMapGL 
            mapStyle='mapbox://styles/afii78/cksg08wb53g6d17mz6meauqfx'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport)=> setViewport(nextViewport)}
            >
                {searchresult.map((result)=>(
                    <div key={result.long}>
                        <Marker
                            longitude={result.long}
                            latitude={result.lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                            >  
                            <p onClick={()=>setSelectedState(result)} 
                            className='cursor-pointer text-2xl animate-bounce' 
                            aria-label='push-pin'
                            >📌</p>                      
                            </Marker>
                            {/* the popup that shows when you click on a Marker */}
                            {selectedState.long==result.long? (
                                <Popup onClose={()=>setSelectedState({})}
                                        closeOnClick={true}
                                        latitude={result.lat}
                                        longitude={result.long}>
                                    {result.title}
                                </Popup>)
                                :(false
                            )}
                    </div>
                ))}
            </ReactMapGL>
        
            
    )
}

export default Map
