import React from 'react'
import { Link } from 'react-router-dom' 

const ImageLink = ({page}) => {
    console.log(page)
    return (
        <div className={`img-${page.id} photo`} /* style={{background:`url("${page.photo}")`}} */>
        <Link className="pageLink" to={page.page} >
            {page.pageName}
        </Link>
        </div>
    )
}

export default ImageLink
