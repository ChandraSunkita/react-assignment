import { render, waitFor } from "@testing-library/react";
import { Joke} from "../Joke";
import { BrowserRouter } from "react-router-dom";

describe('Test Joke Component', ()=> {

    test("render Joke component", async ()=> {
       const { getByTestId } = render(<Joke />, {wrapper: BrowserRouter});
       const jokeHeadline = getByTestId('jokeHeadline');
       await waitFor(() => expect(jokeHeadline.innerHTML).toBeTruthy());
    });
});