import React, { FC } from 'react'
import classes from './UserInfo.module.scss'

interface Props {
    name: string;
    position: string;
    photo: string;
}

const UserInfo: FC<Props> = ({ name, position, photo }) => {
    return (
        <div className={classes.userBlockWrapper}>
            <img className={classes.userAvatar} src={require(`../../../data/photo/${photo}`)} alt='avatar' />
            <div className={classes.userBlockInfo}>
                {name}
                <span>{position}</span>
            </div>
        </div>
    )
}

export default UserInfo