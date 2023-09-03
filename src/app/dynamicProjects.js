import dynamic from "next/dynamic";

const DynamicProjects = dynamic(() => import("./Projects"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default DynamicProjects;
