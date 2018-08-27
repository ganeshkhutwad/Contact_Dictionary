const contactListActions = {
    createList: (list) => {
        return {
            list,
            type: 'CREATE_LIST'
        };
    },

    getList: () => {
        const contactLists = [
            {
                id: 1,
                firstName: 'Ganesh',
                lastName: 'Khutwad',
                email: 'ganeshkhutwad30690@gmail.com',
                mobileNum: 9763484283,
                status: 'Active'
            },
            {
                id: 2,
                firstName: 'Cory',
                lastName: 'House',
                email: 'coryhouse@gmail.com',
                mobileNum: 1234512345,
                status: 'Active'
            }
        ];

        return {
            contactLists,
            type: 'GET_LIST'
        };
    }
}

export default contactListActions;

// export function createList(list) {
//     return {
//         list,
//         type: 'CREATE_LIST'
//     };
// }

// export function getList() {
//     return {
//         type: 'GET_LIST'
//     };
// }
