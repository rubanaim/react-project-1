
import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = ({count}) => {

    // to repeate the skeltones 8 times
    //creates array with count elements and fill them 0 
    const skelton = Array(count).fill(0)
    return   <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 ">
        {
            skelton.map(( _ ,index)=>(
                <ContentLoader 
                key={index}
                   speed={2}
                   width={400}
                   height={400}
                   viewBox="0 0 400 370"
                   backgroundColor="#f3f3f3"
                   foregroundColor="#b9b5b5"
   
                 >
                   <rect x="44" y="19" rx="0" ry="0" width="227" height="216" /> 
                   <rect x="66" y="267" rx="0" ry="0" width="177" height="13" /> 
                   <rect x="80" y="290" rx="0" ry="0" width="153" height="11" /> 
                   <rect x="58" y="324" rx="0" ry="0" width="42" height="42" /> 
                   <rect x="224" y="323" rx="0" ry="0" width="42" height="42" />
               </ContentLoader>
            ))
        }
    </div>
  
}

export default MyLoader
