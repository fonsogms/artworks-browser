import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

export const server = setupServer(...handlers);

beforeAll(() => {
  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});
