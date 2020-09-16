import { createSelector } from 'reselect'


const selectshop = state => state.shop

 export const SelectCollections=createSelector(
    [selectshop],
    shop => shop.collections
)

export const SelectCollectionsForPreview= createSelector(
    [SelectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const SelectCollection=collectionUrlparam =>createSelector(
    [SelectCollections],
    collections => collections[collectionUrlparam]
)

export default SelectCollections