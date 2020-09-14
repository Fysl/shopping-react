import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import MenuItem from '../Menu-Item/menu-item.component'
import {selectMainMenuSection} from '../../redux/main-menu/main-menu.selector'

import '../Main-Menu/main-menu.styles.scss'

const MainMenu = ({sections}) => (
        <div className='Main-Menu'>
            {
                sections.map(({ id, ...othersectionprops }) =>
                    (<MenuItem key={id} {...othersectionprops} />
                    ))}
        </div>
    )

    const mapStateToProps = createStructuredSelector({
        sections:selectMainMenuSection
    }) 
         
    

export default connect(mapStateToProps)(MainMenu);