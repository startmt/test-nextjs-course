import { useRouter } from "next/router";

const AboutPage = () => {
  const { query } = useRouter();
  return <div>Hello world Movie : {query.movieId}</div>;
};

export default AboutPage;
