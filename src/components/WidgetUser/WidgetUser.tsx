import { FC } from 'react';
import { IUser } from '../../types/user';
import classes from './WidgetUser.module.scss';

interface Props {
    user: IUser;
    setUserData: React.Dispatch<React.SetStateAction<IUser>>
}

const WidgetUser: FC<Props> = ({ user, setUserData }) => {
    return (
        <div className={classes.widgetUserWrapper}>
            <div className={classes.userWrapper}>
                <img src={require(`../../data/photo/${user.photo}`)} alt={'avatar'} className={classes.userAvatar} />
                <div className={classes.userName} >
                    {user.name}
                    <span>{user.nickname}</span>
                </div>
            </div>
            <button onClick={() => setUserData(user)} className={classes.viewButton} type='button'>View</button>
        </div>
    )
}

export default WidgetUser