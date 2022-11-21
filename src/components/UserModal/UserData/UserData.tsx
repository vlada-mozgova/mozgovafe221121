import React, { FC } from 'react'
import classes from './UserData.module.scss'

interface Props {
    phone: string;
    email: string;
}

const UserData: FC<Props> = ({ phone, email }) => {
    return (
        <div data-testid='user-data' className={classes.userDataWrapper}>
            <table>
                <tbody>
                    <tr>
                        <td>Phone</td>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <td>URL</td>
                        <td className={classes.userUrl}>{`https://${email.split('@')[1]}`}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td className={classes.userUrl}>{email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserData