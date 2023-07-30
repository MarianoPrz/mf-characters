// Import the necessary testing dependencies
import React from "react";
import { render } from "@testing-library/react";

// Import the components that need to be tested
import { CardLayout, CardLayoutCol } from "../../components/CardLayout";

describe("CardLayout", () => {
    it("renders children correctly", () => {
        const { getByText } = render(
            <CardLayout>
                <span>Child Element</span>
            </CardLayout>
        );

        expect(getByText("Child Element")).toBeInTheDocument();
    });
});

describe("CardLayoutCol", () => {
    it("renders children correctly", () => {
        const { getByText } = render(
            <CardLayoutCol>
                <span>Child Element</span>
            </CardLayoutCol>
        );

        expect(getByText("Child Element")).toBeInTheDocument();
    });
});
