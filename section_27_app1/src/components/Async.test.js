import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    //apiye istek atmadan atıyormuş gibi mock kullanıp component testi yapılır.
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem"); // asenkron işlemler için find kullan. Promise döndürür. Kaç saniye beklemesi gerektiği yapılandırılabilir.
    expect(listItemElements).not.toHaveLength(0);
  });
});
