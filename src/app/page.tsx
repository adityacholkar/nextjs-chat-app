import { db } from "@/lib/db";

const Home = async () => {
  await db.set("name", "Aditya");
  return <div className="text-red-500">Hello Aditya!</div>;
};

export default Home;
