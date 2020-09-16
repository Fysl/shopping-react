import React from 'react'
import { connect } from 'react-redux'
import {SelectCollection} from '../../redux/shop/shop.selector'

import './collection.styles.scss'

import CollectionItem from '../../components/collection-item/collectionitem.component'

const CollectionPage = ({collections})=>{
    const {title,items}=collections;
    return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }

        </div>

    </div>
)}
const mapStateToProps = (state,ownprops)=>({
    collections:SelectCollection(ownprops.match.params.collectionId)(state)
}) 

export default connect(mapStateToProps)(CollectionPage) 