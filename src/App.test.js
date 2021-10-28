import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './components/Header';
import Form from './components/Form';

describe('App Header', () => {

    test('should render header', () => {
        render(<Header />);
        const appHeader = screen.getByText('Social Media - Stock Market');
        expect(appHeader).toBeInTheDocument();
    });

    test('should render facebook social buttons', () => {
        render(<Form />);
        const socialButtons = screen.getByRole('button', {
            name: /Facebook/i,
        });
        expect(socialButtons).toHaveClass('btn-facebook');
    });

    test('should have filter buttons', () => {
        render(<Form />);
        const filterButtons = screen.getByRole('button', {
            name: /All/i,
        });
        expect(filterButtons).toBeInTheDocument();
    });

})