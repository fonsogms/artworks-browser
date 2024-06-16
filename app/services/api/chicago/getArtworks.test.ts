import axios, { AxiosInstance } from "axios";
import { makeGetArtworks } from "./getArtworks";
import { mock, mockDeep } from "vitest-mock-extended";

it("works", async () => {
  const getMock = vi.fn().mockResolvedValue({ data: "alfosso" });
  // const client = mock<AxiosInstance>({
  //   get: getMock,

  // });
  // client.
  // const client = axios.create()
  const client = {} as unknown as AxiosInstance;

  client.get = getMock;

  // client.ge

  const getArtworks = makeGetArtworks(client);

  const page = 1;

  const isOnView = true;
  const isPublicDomain = true;
  const search = "cats";
  await getArtworks({
    isOnView,
    isPublicDomain,
    page,
    search,
  });

  expect(getMock).toHaveBeenCalledWith(
    expect.stringContaining(
      new URLSearchParams({
        q: search,
      }).toString()
    )
  );
  expect(getMock).toHaveBeenCalledWith(
    expect.stringContaining(
      new URLSearchParams({
        fields: "id,title,image_id,is_on_view",
      }).toString()
    )
  );
  expect(getMock).toHaveBeenCalledWith(
    expect.stringContaining(
      new URLSearchParams({
        page: page.toString(),
      }).toString()
    )
  );
  expect(getMock).toHaveBeenCalledWith(
    expect.stringContaining(
      new URLSearchParams({
        "query[bool][must][0][term][is_public_domain]":
          isPublicDomain.toString(),
      }).toString()
    )
  );
  expect(getMock).toHaveBeenCalledWith(
    expect.stringContaining(
      new URLSearchParams({
        "query[bool][must][1][term][is_on_view]": isOnView.toString(),
      }).toString()
    )
  );
});
