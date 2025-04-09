test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // add this line
  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});