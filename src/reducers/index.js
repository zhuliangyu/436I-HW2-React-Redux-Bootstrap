// const counterReducer = (count = 0, action) => {
//
//     //initializing begin state count = 0
//
//     if (action.type === 'INCREMENT_COUNTER') {
//         return count + 1;
//     }
//     return count;
// };


import {combineReducers} from 'redux';

// const initialState = {
//     msgs: [
//         {id: 1, msg: "asd1"},
//         {id: 2, msg: "asd2"},
//         {id: 3, msg: "asd3"},
//     ],
//     lastIndex: 3
// };

const initialState = ["asd1", "asd2", "asd3"];

const addReducer = (state = initialState, action) => {
    if (action.type === "ADD_ARTICLE") {

        //immutable array
        const new_msg = action.payload;
        const new_msgs = state.concat(new_msg);

        return new_msgs;

    } else {
        return state;
    }

};

const detailReducer = (state = '', action) => {
    if (action.type === "SHOW_DETAIL") {

        const new_msg = action.payload;
        // const new_state = {
        //     detail: new_msg
        // };
        const new_state = new_msg;

        return new_state;

    } else {
        return state;
    }

};

const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return count + action.payload;
    }
    return count;
};


//reducer export the state
export default combineReducers({
    count: counterReducer,
    msgsPack: addReducer,
    my_detail: detailReducer

});
