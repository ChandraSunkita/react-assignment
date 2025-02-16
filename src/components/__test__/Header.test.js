import { render, screen } from "@testing-library/react";
import { Header } from "../Header";


describe("Test Header Component", () => {
    test("render the heading text", () => {
        render(<Header heading="Word Counter" />);
        const heading = screen.getByTestId("heading");
        expect(heading.innerHTML).toBe("Word Counter");
    });

    test("render the subheading text", () => {
        render(<Header subheading="Word Counter subheading text" />);
        const subheading = screen.getByTestId("subHeading");
        expect(subheading.innerHTML).toBe("Word Counter subheading text");
    });
});