import { render } from "@testing-library/react";
import { PageNotFound } from "../../pages/PageNotFound";
import { BrowserRouter } from "react-router-dom";

describe('Test PageNotFound page', () => {
    test('Render text and image', () => {
        const { getByAltText, getByTestId } = render(<PageNotFound />, {wrapper: BrowserRouter})
        const pnfText = getByTestId("pnfText");
        const pnfImage = getByAltText("Page Not Found");
        expect(pnfText.innerHTML).toBe("Oops - Page not found");
        expect(pnfImage).toBeTruthy();
    });
});