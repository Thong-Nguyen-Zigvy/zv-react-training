import React from 'react'

const UserDetail = ({user}) => {
    return (
        <div>
            {
                Object.keys(user).map((key, index) => {
                if(key === "token"){
                    return null;
                }
                return <h2 key={index}>{key} : {user[key]},</h2>
            })
            }
        </div>
    )
}

export default UserDetail
