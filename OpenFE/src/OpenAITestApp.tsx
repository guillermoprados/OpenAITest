import { RouterProvider } from 'react-router-dom';
import { router } from './presentation/router/router';

export const OpenAITestApp = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
