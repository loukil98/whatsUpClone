import {USER_LOGGED_IN} from "../actionsTypes/userTypes";

export const userLoggedIn = (user) => {
    return {
        type : USER_LOGGED_IN ,
        payload : user
    }
}