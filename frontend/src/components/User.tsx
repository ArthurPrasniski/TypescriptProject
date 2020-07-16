import React from 'react'


interface IUser {
    name: string
    email: string
}

interface Props {
    user: IUser
}

const User: React.FunctionComponent<Props> = ({ user } => {
    return (
        <div>
            <strong>Nome:</strong>{user.name}<br />
            <strong>Email:</strong>{user.email || 'não existe'}<br />
        </div>
    )
})

export default User