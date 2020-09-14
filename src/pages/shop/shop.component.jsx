import React from 'react';
import { connect } from 'react-redux'
// import { Route } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'

import SelectCollections from '../../redux/shop/shop.selector'
import CollectionPreview from '../../components/preview-collection/collectionpreview.component.js'

 

const  ShopPage=({collections}) => (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) =>(
                <CollectionPreview key={id}{...otherCollectionProps} />
                     ))
                 }
            </div>
        );

        const mapStateToProps = createStructuredSelector({
            collections:SelectCollections
        }) 
             

export default connect(mapStateToProps)(ShopPage) 