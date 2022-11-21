import { render, screen } from '@testing-library/react';
import Widget from '../components/Widget/Widget';

test('should render userInfo component', () => {
    render(<Widget users={[{
        "phone": "902-738-3242",
        "name": "Geordan Aaryn",
        "nickname": "@geordanaaryn",
        "email": "geordan.aaryn@fallinhay.com",
        "position": "Chief Executive Officer", 
        "photo": "1.jpg"
      }]}/>);

    const UserInfoElement = screen.getByTestId('widget');
    expect(UserInfoElement).toBeInTheDocument();
    expect(UserInfoElement).toHaveTextContent('View all');
    expect(UserInfoElement).toHaveTextContent('Geordan Aaryn');
})