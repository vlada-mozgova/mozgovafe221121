import { FC } from 'react';
import { IUser } from '../../types/user';
import classes from './UserModal.module.scss';
import CloseButton from '../../helpers/images/IconClose.png'
import UserInfo from './UserInfo/UserInfo';
import UserData from './UserData/UserData';

interface Props {
    user: IUser;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const UserModal: FC<Props> = ({ user, setOpenModal }) => {
    return (
        <div data-testid='user-modal' className={classes.modalWrapper}>
            <div className={classes.modalBody}>
                <div className={classes.closeButton} onClick={() => setOpenModal(false)}>
                    <img src={CloseButton} alt='close' />
                </div>
                <UserInfo name={user.name} position={user.position} photo={user.photo} />
                <UserData phone={user.phone} email={user.email} />
                <button className={classes.sendButton} type='button'>Send message</button>
            </div>
        </div>
    )
}

export default UserModal