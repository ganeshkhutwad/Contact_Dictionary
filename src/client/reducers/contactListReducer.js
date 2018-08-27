export default function courseReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_LIST': {
            return [
                ...state,
                {
                    ...action.list
                }
            ]
        }

        case 'GET_LIST': {
            console.log('action list ==>', action.contactLists);
            return [
                ...state,
                ...action.contactLists
            ];
        }

        default: {
            return state;
        }
            
    }
}