import Link from "next/link";

const IndexPage = () => {
  return <Link href="/about">Hello world</Link>;
};

export async function getServerSideProps(context) {
  console.log("Serverside");
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default IndexPage;
