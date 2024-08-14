import AboutPage from "@/pages/about";
import { render, screen } from "@testing-library/react";

describe("About Page", () => {
    it("render about page", () => {
        const page = render(<AboutPage />);
        expect(page).toMatchSnapshot();
    });
});