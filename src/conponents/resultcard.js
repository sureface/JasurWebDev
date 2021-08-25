import axios from "axios";

export default axios.create(
    {
        baseURL:'https://shoppingcards-9dd93-default-rtdb.firebaseio.com/'
    }
);