import React, { useEffect, useState } from 'react'
import "./user.css";
import axios from 'axios';
import Navbar from '../navbar/Navbar'

const Userlist = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios
            .get('http://81.0.219.62:3000/api/v1/users/get-allUser')
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div className="home">
            <Navbar />
            <div className='divmain'>
                <div className='main_user'>
                    <h1 className='headuser'> Users</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map(user => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}-{user.country}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Userlist
