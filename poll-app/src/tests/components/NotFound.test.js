import {fireEvent, render, screen} from '@testing-library/react';
import NotFound from "../../components/NotFound";
import {BrowserRouter as Router} from "react-router-dom";
import {renderWithProviders} from "../utils";
import Login from "../../components/Login";

describe('NotFound', () => {
    it('matches the snapshot', () => {
        const {view} = render(
            <Router>
                <NotFound/>
            </Router>
        );
        expect(view).toMatchSnapshot();
    });
    it('verify 404 header is on page', () => {
        render(
            <Router>
                <NotFound/>
            </Router>
        );
        const title = screen.getByTestId('404')
        expect(title).toBeInTheDocument();
    });
    it('verify 500 header is not on page', () => {
        render(
            <Router>
                <NotFound/>
            </Router>
        );
        const title = screen.queryByTestId('500')
        expect(title).not.toBeInTheDocument();
    });
})