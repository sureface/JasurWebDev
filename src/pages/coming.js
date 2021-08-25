import React from 'react';
import Nav from '../conponents/nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Coming = () => {
    toast.error('Oops Something Wrong');
    toast.success('You Succeeded..!');
    toast.info('You Have Been Information');
    toast.warn('You Have Been Warned..!');

    return (
        <div>
            <Nav />
            <ToastContainer autoClose={8000}/>
        </div>
    );
};

export default Coming;