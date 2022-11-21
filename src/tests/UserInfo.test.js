import { render, screen } from '@testing-library/react';
import UserInfo from '../components/UserModal/UserInfo/UserInfo';

test('should render userInfo component', () => {
    render(<UserInfo name = 'Kamilla' position = 'HR' photo = { '1.jpg'} />);

    const UserInfoElement = screen.getByTestId('user-info');
    expect(UserInfoElement).toBeInTheDocument();
    expect(UserInfoElement).toHaveTextContent('Kamilla');
})