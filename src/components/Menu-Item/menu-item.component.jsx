import React from 'react'

import '../Menu-Item/menu-item.styles.scss'

//destructing title {title}
const MenuItem = ({ title, imageUrl,size }) => (
    <div  className={`${size} Menu-Item`}>
        <div className='background-image'style={{
        backgroundImage: `url(${imageUrl})`
    }} />

        
        <div className='Content'>
            <h1 className='Title'>{title.toUpperCase()}</h1>
            <span className='Subtitle'>SHOP NOW</span>
        </div>
        
    </div>


);

export default MenuItem;