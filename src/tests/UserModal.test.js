import { render, screen } from '@testing-library/react';
import UserModal from '../components/UserModal/UserModal';

test('should render userInfo component', () => {
    render(<UserModal user={{
        "phone": "902-738-3242",
        "name": "Geordan Aaryn",
        "nickname": "@geordanaaryn",
        "email": "geordan.aaryn@fallinhay.com",
        "position": "Chief Executive Officer", 
        "photo": "1.jpg"
      }}/>);

    const UserInfoElement = screen.getByTestId('user-modal');
    expect(UserInfoElement).toBeInTheDocument();
    expect(UserInfoElement).toHaveTextContent('Send message');
    expect(UserInfoElement).toHaveTextContent('Geordan');
})