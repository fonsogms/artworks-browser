/**
 * @typedef {'DE' | 'FR' | 'NL' | 'PL'} CountryCode
 * The supported country codes.
 */

/**
 * List of supported countries
 * @type {Array<CountryCode>}
 */
const inMemoryCache = ["DE", "NL", "FR", "PL"] as const;

export type SupportedCountries = (typeof inMemoryCache)[number];

/**
 * A service for handling country-related operations.
 */
export class CountriesService {
  /**
   * Fetches a list of supported countries.
   * @returns {Promise<{countries: Array<CountryCode>}>} A promise that resolves with an object containing the list of supported countries.
   */
  async allSupportedCountries() {
    await fakeNetworkLatency();
    return {
      countries: inMemoryCache,
    };
  }

  /**
   * Checks if a given string is a supported country code.
   * @param {string} country - The country code to check.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the country is supported.
   */
  async isInSupported(country: string) {
    await fakeNetworkLatency();
    return (inMemoryCache as ReadonlyArray<string>).includes(country);
  }
}

/**
 * Simulates network latency by returning a promise that resolves after a specified time.
 * @param {number} [time=50] - The time in milliseconds to wait before resolving the promise.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
async function fakeNetworkLatency(time: number = 50) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export const countriesService = new CountriesService();
