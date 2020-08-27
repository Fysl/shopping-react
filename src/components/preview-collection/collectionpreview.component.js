import React from 'react'
//import {withRouter} from 'react-router-dom'
import CollectionItem from '../collection-item/collectionitem.component'
import '../preview-collection/collectionpreview.styles.scss'

const CollectionPreview =({title,items}) => (

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
{
    items
    .filter((item,idx)=>idx < 4)
    .map(({id,...otherItemProps}) => (
    <CollectionItem key={id}{...otherItemProps} /> 
    ))}
</div>
    </div>
)

export default CollectionPreview