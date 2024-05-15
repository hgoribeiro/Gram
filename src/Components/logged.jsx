const USER_TOKEN_KEY = "USER_TOKEN"

 const islogged = () => { 
    return (!!localStorage.getItem(USER_TOKEN_KEY))
 }
export {USER_TOKEN_KEY, islogged}