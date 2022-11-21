import { FC, useState } from 'react';
import { IUser } from '../../types/user';
import WidgetUser from '../WidgetUser/WidgetUser';
import classes from './Widget.module.scss';

interface Props {
    users: IUser[];
    setUserData: React.Dispatch<React.SetStateAction<IUser>>
}

const Widget: FC<Props> = ({ users, setUserData }) => {
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => setShowAll(true)
    return (
        <div data-testid='widget' className={classes.widgetWrapper}>
            {!!users?.length && users.map((user, index) => (!showAll ? index <= 2 : index >= 0) &&
                <WidgetUser key={user.nickname} user={user} setUserData={setUserData} />)}
            {!showAll && <button onClick={handleShowAll} className={classes.viewAllButton} type='button'>View all</button>}
        </div >
    )
}

export default Widget