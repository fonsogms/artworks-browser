import { countriesService } from "./countries";

describe("Countries", () => {
  it("should return a list of countries", async () => {
    const { countries } = await countriesService.allSupportedCountries();
    expect(countries).toEqual(["DE", "NL", "FR", "PL"]);
  });

  it("should check if a country is supported", async () => {
    expect(await countriesService.isInSupported("DE")).toBe(true);
    expect(await countriesService.isInSupported("NL")).toBe(true);
    expect(await countriesService.isInSupported("FR")).toBe(true);
    expect(await countriesService.isInSupported("PL")).toBe(true);
    expect(await countriesService.isInSupported("ES")).toBe(false);
  });
});
