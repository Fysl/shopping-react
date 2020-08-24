import React from 'react'
import {withRouter} from 'react-router-dom'

import '../Menu-Item/menu-item.styles.scss'

//destructing title {title}
const MenuItem = ({ title, imageUrl,size,history,linkUrl,match }) => (
    <div  className={`${size} Menu-Item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image'style={{
        backgroundImage: `url(${imageUrl})`
    }} />

        
        <div className='Content'>
            <h1 className='Title'>{title.toUpperCase()}</h1>
            <span className='Subtitle'>SHOP NOW</span>
        </div>
        
    </div>


);

export default withRouter(MenuItem) ;