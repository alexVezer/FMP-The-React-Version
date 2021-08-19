import React from 'react'
import { Link } from 'react-router-dom' 

const ImageLink = ({page}) => {
    console.log(page.page)
    return (
        <div className={`img-${page.id} photo`} >
        <Link className="pageLink" to={page.page} >
            {page.pageName}
            </Link>
            </div>
    )
}

export default ImageLink
