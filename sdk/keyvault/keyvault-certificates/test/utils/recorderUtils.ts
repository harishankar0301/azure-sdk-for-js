// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { isNode } from "@azure/core-http";
import * as dotenv from "dotenv";
import * as path from "path";
import { isPlaybackMode } from "@azure/test-utils-recorder";

if (isNode) {
  dotenv.config({ path: path.resolve(__dirname, "../../.env") });
}

export function uniqueString(): string {
  return isPlaybackMode()
    ? ""
    : Math.random()
        .toString()
        .slice(2);
}

export const testPollerProperties = {
  intervalInMs: isPlaybackMode() ? 0 : undefined
};
