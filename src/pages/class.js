import React, {useState, useEffect} from 'react';
import Loading from "./loading";
import Userforclass from '../conponents/userforclass';
import Nav from '../conponents/nav';
import Warning from "../conponents/warning";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Class = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(null);
    const [error, setError] = useState(null);
    const [retries, setRetries] = useState(0);

    toast.error('Oops Something Wrong');

    useEffect(() => {
        setLoading(true);
        fetch(`https://reqres.in/api/users?delay=2&${retries}`)

            // birinchi then datani json filega ogirvolish uchun ishlatiladi
            .then(res => {

                // if bilan data kevotganda error chqsa shuni pasegi fetchga oberadi va fetch consolega chqaradi
                if (!res.ok) {
                    throw new Error("oops cant fetch data");
                } else {
                    return res.json();
                }
            })

            // 2 chi then blani APi dan  kevotgan malumotni faqat data qismini  olish uchun ishlatildi..!
            .then(result => {
                return setUsers(result.data);
            })

            // catchni ishida API dan  kevotgan malumotda error bosa shuni consolga chiqarib turadi
            .catch(err => {
                console.error(err)
                setError(err)
            })

            //finallyga farqi yo holahan vatda ishga tushadi bu hozir loadingni hamma amal tugagandan  keyin toxtatish uchun ishlatildi..!
            .finally(() => {
                setLoading(false)
            })

    }, [retries])

    if (error) {
        return (
            <div>
                <Warning tryAgain={() => setRetries(retries + 1)}/>
                <ToastContainer autoClose={5000}/>
            </div>
        )

    }

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <Nav />

            <div className="users">
                <h1>User</h1>

                <Userforclass users={users} onSelecterd={(user) => setSelected(user)} />

                <div>{selected && `${selected.first_name} ${selected.last_name}`}</div>
            </div>

        </div>
    );
};

export default Class;