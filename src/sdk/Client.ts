import { ctpClient } from './BuildClient';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';

// Create apiRoot from the imported ClientBuilder and include your Project key
export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: 'rs_stage2_01082023_kdy',
});

// Example call to return Project information
// This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
// const getProject = () => {
//   return apiRoot.get().execute();
// };

// Retrieve Project information and output the result to the log
// getProject().then(console.log).catch(console.error);
