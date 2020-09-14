import { createSelector } from 'reselect'

const selectshop = state => state.shop

 const SelectCollections=createSelector(
    [selectshop],
    shop => shop.collections
)

export default SelectCollections