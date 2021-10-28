import axios from "axios";
import { GetServerSideProps } from "next";

const AboutPage = (props) => {
  return (
    <ul>
      {props.data.results.map((d) => {
        return <li>{d.title}</li>;
      })}
    </ul>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.req.cookies);
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=1f9caa72a7dd5aaad9864d5067a73d5b"
  );
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};

export default AboutPage;
