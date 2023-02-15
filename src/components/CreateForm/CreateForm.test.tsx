import { render, screen } from "@testing-library/react";
import CreateForm from "./CreateForm";

describe("Given a CreateForm component", () => {
  describe("When it renders", () => {
    test("Then it should show an input", () => {});
    render(<CreateForm />);

    const expectedInput = screen.getByRole("textbox");

    expect(expectedInput).toBeInTheDocument();

    test("Then it should show a button with 'Create Task' on it", () => {
      render(<CreateForm />);
      const text = "Create Task";

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
