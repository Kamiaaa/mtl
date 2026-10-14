// app/loading.tsx

import PageLoader from "./components/PageLoader";


export default function Loading() {
  // This will automatically render during page transitions and server-component data fetching
  return <PageLoader fullScreen={true} />;
}