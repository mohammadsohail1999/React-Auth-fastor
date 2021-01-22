export const placesReducer = (state={places:null},action) => {




    switch(action.type){


        case 'FETCH_SUCCESS':

            return { ...action.payload }

         case 'USER_LOGOUT':
             return {places:null}

            default:


            return {...state}



    }


    







};
