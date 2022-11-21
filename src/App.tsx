import { FC, useEffect, useState } from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import UserModal from './components/UserModal/UserModal';
import Widget from './components/Widget/Widget';
import { IUser } from './types/user';

const App: FC = () => {
  const [userData, setUserData] = useState({} as IUser);
  const [openModal, setOpenModal] = useState(false);

  const users = useAppSelector(state => state.users)

  useEffect(() => {
    if (!!userData.name) setOpenModal(true)
  }, [userData])

  return (
    <div data-testid='app' className="App">
      {openModal && <UserModal user={userData} setOpenModal={setOpenModal} />}
      <Widget users={users} setUserData={setUserData} />
    </div>
  );
}

export default App;
