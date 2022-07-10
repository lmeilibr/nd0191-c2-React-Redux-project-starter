import {renderWithProviders} from "../utils";
import Login from "../../components/Login";
import {fireEvent, screen} from "@testing-library/react";

describe('Login', () => {
    it('will fill the login input fields', () => {
        renderWithProviders(<Login/>, {
            preloadedState: {
                users: {'mtsamis': {password: "xyz123"}}
            }
        });
        const userInput = screen.queryByTestId('userinput')
        const pwdInput = screen.queryByTestId('pwdinput')
        fireEvent.change(userInput, {target: {value: 'mtsamis'}});
        fireEvent.change(pwdInput, {target: {value: 'xyz123'}});

        expect(userInput.value).toEqual('mtsamis');
        expect(pwdInput.value).toEqual('xyz123');
    });
    it('will check if header is in component', ()=>{
        renderWithProviders(<Login/>, {
        });
        expect(screen.getByText('Log In')).toBeInTheDocument()
    })
    it('will check if Username Label is in component', ()=>{
        renderWithProviders(<Login/>, {
        });
        expect(screen.getByText('Username')).toBeInTheDocument()
    })
})