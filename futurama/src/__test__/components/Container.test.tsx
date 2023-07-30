// Import the necessary testing dependencies
import React from "react";
import { render } from "@testing-library/react";

// Import the component that needs to be tested
import Container from "../../components/Container";

describe("Container", () => {
    it("renders children correctly", () => {
        const { getByText } = render(
            <Container>
                <div>Child Component</div>
            </Container>
        );

        expect(getByText("Child Component")).toBeInTheDocument();
    });

    it("applies custom className correctly", () => {
        const { container } = render(
            <Container className="custom-class">
                <div>Child Component</div>
            </Container>
        );

        expect(container.firstChild).toHaveClass("container custom-class");
    });
});
