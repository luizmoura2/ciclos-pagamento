/* ============================== */
/* File: tabActcion.js */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 15:11 */
/* ============================== */
/**
 * Action Creator para identificação da tab a 
 * ser selecionada
 * @param {String} tabId 
 */
export function selectTab(tabId){
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabsIds){
    const tabsToShow = {}
    tabsIds.forEach(e => tabsToShow[e] = true)

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}