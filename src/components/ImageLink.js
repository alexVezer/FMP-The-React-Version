import React from 'react'
import { Link } from 'react-router-dom' 

const ImageLink = ({page}) => {
    console.log(page.page)
    return (
        <Link  to={`${process.env.PUBLIC_URL}${page.page}`} className={`img-${page.id} photo pageLink`} >
    
            <h4>{page.pageName}</h4>
        
        </Link>
    )
}

export default ImageLink
