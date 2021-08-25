import React from 'react';

const Userforclass = ({ users, onSelecterd }) => {
    return (
        <div>
            {
                users.map( (user) => {
                    const {id, avatar, first_name, last_name} = user;
                    const  name = `${first_name} ${last_name}`;

                    return (
                            // bu joyda 2 ta event  ishlatilgan: onMouseOver cursor u bu narsaga krganda vazifa bajaradi A onMouseOut bosa cursor chiqib ketganda vazifasini tugatish uchun ishlatiladi..! Nomidan ham aniq nma qilishi
                            <img className="images" key={id} src={avatar} alt={name} onMouseOver={ () => onSelecterd(user)}  onMouseOut={() => onSelecterd(null)}/>
                        )
                })
            }
        </div>
    );
};

export default Userforclass;