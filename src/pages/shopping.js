import React, { useState } from 'react';
import axios from "axios";

const Shopping = () => {
    let cardPlaceholder = 'Enter your card Number';

    const [numberCard, setNumberCard] = useState('');
    const [dateCard, setDateCard] = useState('')



    const postDateHandler = (e) => {
        e.preventDefault();

        const Date = {
            numberCard,
            dateCard
        }

        axios.post(`https://card-2e083-default-rtdb.firebaseio.com/posts.json`, Date)
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div className="container m-auto">
            <div className="col-10">
                <form onSubmit={postDateHandler}>
                    <div className="form-control">
                        <label htmlFor="cardNumber">
                            Enter your card number:
                            <input type="text" id="cardNumber" value={numberCard} onChange={(e) => setNumberCard(e.target.value)} placeholder={cardPlaceholder}/>
                        </label>
                    </div>

                    <div className="form-control">
                        <label htmlFor="cardDate">
                            Enter your card date:
                            <input type="text" id="cardDate" value={dateCard} onChange={(e) => setDateCard(e.target.value)} placeholder={cardPlaceholder}/>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>

                </form>
            </div>

        </div>
    );
};

export default Shopping;