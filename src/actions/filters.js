
//EDIT TEXT FILTER
export const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

// EDIT SORT BY DATE FILTER
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

// EDIT SORT BY AMOUNT FILTER
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

//EDIT START DATE FILTER
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
}); 

//EDIT END DATE FILTER
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
}); 
