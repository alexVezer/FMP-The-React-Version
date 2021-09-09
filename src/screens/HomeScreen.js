import React, {Component} from 'react'
import ImageLink from '../components/ImageLink'
import data from '../data/data'

class HomeScreen extends Component {
    constructor (props) {
        super(props)
        this.state = {
            pages: data.pages,
            page: data.pages[0]
        }
    }

    render () {
        const {pages} = this.state
        

        return (
        <div className="container">
            <div className="gridWrapper">
                {pages.map((page,id) => {
                    console.log(`page ${id+1} : ${page}`)
                    return (
                        <ImageLink key={id+1} page={page}/> 
                    )
                } 
             )}
            </div>
        </div>
        )
    }
}

export default HomeScreen
