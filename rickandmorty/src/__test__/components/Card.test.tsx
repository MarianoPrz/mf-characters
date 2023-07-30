import React from "react";
import { render } from "@testing-library/react";
import Card from "../../components/Card";

describe("Card Component", () => {
    const mockProps = {
        name: "John Doe",
        image: "image-url",
        gender: "Male",
        species: "Human",
    };

    it("renders card with correct props", () => {
        const { getByText, getByAltText } = render(<Card {...mockProps} />);

        // Assert that the card image is rendered with the correct source URL
        expect(getByAltText("image-url")).toHaveAttribute("src", "image-url");

        // Assert that each piece of text content is rendered correctly
        expect(getByText(mockProps.name)).toBeInTheDocument();
        expect(getByText(mockProps.gender)).toBeInTheDocument();
        expect(getByText(mockProps.species)).toBeInTheDocument();
    });
});
