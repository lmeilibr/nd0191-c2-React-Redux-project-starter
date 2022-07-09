import {render} from '@testing-library/react';
import NotFound from "../../components/NotFound";
import {BrowserRouter as Router} from "react-router-dom";

describe('NotFound', () => {
    it('matches the snapshot', () => {
        const {view} = render(
            <Router>
                <NotFound/>
            </Router>
        );
        expect(view).toMatchSnapshot();
    });
})