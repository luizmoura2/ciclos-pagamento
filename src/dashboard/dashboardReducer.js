const INITIAL_STATE = {summary: {credit: 50, debt: 10}}

export default (state= INITIAL_STATE, action) => {
    switch (action.type){
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data}
        default:
            return state    
    }
    
}