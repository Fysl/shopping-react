import React from 'react'
import { connect } from 'react-redux'
// import { Route } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../preview-collection/collectionpreview.component.js'
import {SelectCollectionsForPreview} from '../../redux/shop/shop.selector'

import './collection-overview.styles.scss'


const CollectionOverview =({collections})=>(

    <div className='collection-overview'>
 {collections.map(({ id, ...otherCollectionProps }) =>(
                <CollectionPreview key={id}{...otherCollectionProps} />
                     ))}

    </div>

)
const mapStateToProps = createStructuredSelector({
    collections:SelectCollectionsForPreview
}) 
     
export default connect(mapStateToProps)(CollectionOverview)