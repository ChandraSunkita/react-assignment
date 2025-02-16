import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { Counter } from "../Counter";
import { BrowserRouter } from "react-router-dom";

describe("Counter component test", ()=> {
    test("render the textarea", () => {
        const { getByTestId } = render(<Counter />, {wrapper: BrowserRouter})
        const textArea = getByTestId("textArea");
        expect(textArea).toBeTruthy();
    });
    
    test("render the textarea by placeholder", () => {
        const {  getByPlaceholderText } = render(<Counter />, {wrapper: BrowserRouter})
        const placeholder = getByPlaceholderText("Type or paste your text");
        expect(placeholder).toBeTruthy();
    });
    
    test("render the character result", () => {
        const { getByTestId } = render(<Counter />, {wrapper: BrowserRouter})
        const charLength = getByTestId("charLength");
        expect(charLength.innerHTML).toBe('Character: 0');
    });

    it("render the word result", () => {
        render(<Counter />, {wrapper: BrowserRouter})
        const wordLength =screen.getByTestId("wordLength");
        expect(wordLength.innerHTML).toBe('Word: 0');
    });

    test("render word result with text", () => {
       render(<Counter />, {wrapper: BrowserRouter});
       const wordSpan = screen.getByText("Word: 0");
       expect(wordSpan).toBeInTheDocument(); 
    });

    test("change text area and update result",() => {
        render(<Counter />, {wrapper: BrowserRouter});
        const textArea = screen.getByTestId("textArea");
        userEvent.type(textArea, "chandra");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");

        expect(charLength.innerHTML).toBe('Character: 7');
        expect(wordLength.innerHTML).toBe('Word: 1');
    });

    test("clear textArea and update result",() => {
        render(<Counter />, {wrapper: BrowserRouter});
        const textArea = screen.getByTestId("textArea");
        const clearBtn = screen.getByTestId("clearBtn");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");

        userEvent.type(textArea, "chandra");

        expect(charLength.innerHTML).toBe("Character: 7");
        expect(wordLength.innerHTML).toBe("Word: 1");

        userEvent.click(clearBtn);

        expect(charLength.innerHTML).toBe("Character: 0");
        expect(wordLength.innerHTML).toBe("Word: 0");
    });

})

