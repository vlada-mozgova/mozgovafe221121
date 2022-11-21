import { FC, useEffect, useState } from 'react';
import './App.css';
import UserModal from './components/UserModal/UserModal';
import Widget from './components/Widget/Widget';
import users from './data/initData.json';
import { IUser } from './types/user';

const App: FC = () => {
  const [userData, setUserData] = useState({} as IUser);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!!userData.name) setOpenModal(true)
  }, [userData])

  return (
    <div className="App">
      {openModal && <UserModal user={userData} setOpenModal={setOpenModal} />}
      <Widget users={users} setUserData={setUserData} />
    </div>
  );
}

export default App;
