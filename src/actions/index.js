// export const increment = () => {
//     return {
//         type: 'INCREMENT_COUNTER'
//     };
// };

//Actions
export const increment = (amount) => {
    return {
        type: 'INCREMENT_COUNTER',
        payload: amount
    };
};

export const addArticle = (msg) => {
    return {
        type: "ADD_ARTICLE",
        payload: msg
    }
};

export const showDetail = (payload) => {
    return {
        type: "SHOW_DETAIL",
        payload
    }
};