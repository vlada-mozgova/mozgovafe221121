import { render, screen } from '@testing-library/react';
import UserData from '../components/UserModal/UserData/UserData';

test('should render userInfo component', () => {
    render(<UserData phone= "902-738-3242"
        email="geordan.aaryn@fallinhay.com"
      />);

    const UserInfoElement = screen.getByTestId('user-data');
    expect(UserInfoElement).toBeInTheDocument();
    expect(UserInfoElement).toHaveTextContent('geordan');
    expect(UserInfoElement).toHaveTextContent('https://');
})