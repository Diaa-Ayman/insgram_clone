import Header from "../components/Header";
import Feed from "../components/Feed";
import Wedgets from "../components/Wedgets";

function MainPage() {
  return (
    <div className="">
      <Header />

      <div className="bg-gray-100 lg:px-52 md:px-20 px-8 py-4 flex space-x-8 min-h-screen">
        <Feed />
        <Wedgets />
      </div>
    </div>
  );
}

export default MainPage;
