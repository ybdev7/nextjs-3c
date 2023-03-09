import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <div className="my-4 mx-4">
        <h1 className="my-2 text-5xl font-extrabold">404</h1>
        <h2 className="my-2 text-3xl font-bold text-slate-400">
          Ooops! We could not find the page you are looking for...
        </h2>
      </div>
    </Layout>
  );
}
