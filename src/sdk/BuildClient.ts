import fetch from 'node-fetch';
import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';
// VITE_HOST=https://api.us-central1.gcp.commercetools.com
// VITE_AUTH_URL=https://auth.us-central1.gcp.commercetools.com
// VITE_PROJECT_KEY=rs_stage2_01082023_kdy
// VITE_CLIENT_ID=XBqkmirwAeFvsnQAVuGQ1L1M
// VITE_CLIENT_SECRET=WCQ4dJPCcCY51-lNdbKoqlzjwXNJiG-U
// VITE_CTP_ACCESS_TOKEN=i9nKfmXSvMz0A7mrvIsklIGefBDSlvMw

const PROJECT_KEY = 'rs_stage2_01082023_kdy';
const projectKey = PROJECT_KEY;
const HOST = 'https://api.us-central1.gcp.commercetools.com';
const AUTH_URL = 'https://auth.us-central1.gcp.commercetools.com';
const CLIENT_ID = 'XBqkmirwAeFvsnQAVuGQ1L1M';
const CLIENT_SECRET = 'WCQ4dJPCcCY51-lNdbKoqlzjwXNJiG-U';
const scopes = ['manage_project:rs_stage2_01082023_kdy'];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: AUTH_URL,
  projectKey: projectKey,
  credentials: {
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: HOST,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions) // Include middleware for logging
  .build();
