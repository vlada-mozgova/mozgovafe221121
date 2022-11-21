import { render, screen } from '@testing-library/react';
import WidgetUser from '../components/WidgetUser/WidgetUser';

test('should render userInfo component', () => {
    render(<WidgetUser user={{
        "phone": "902-738-3242",
        "name": "Geordan Aaryn",
        "nickname": "@geordanaaryn",
        "email": "geordan.aaryn@fallinhay.com",
        "position": "Chief Executive Officer", 
        "photo": "1.jpg"
      }}/>);

    const UserInfoElement = screen.getByTestId('widget-user');
    expect(UserInfoElement).toBeInTheDocument();
    expect(UserInfoElement).toHaveTextContent('Geordan Aaryn');
    expect(UserInfoElement).toHaveTextContent('@geordanaaryn');
})