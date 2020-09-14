import { createSelector } from 'reselect'

const selectMainMenu = state => state.MainMenu

export const selectMainMenuSection=createSelector(
    [selectMainMenu],
    MainMenu => MainMenu.sections
)