import Header from "../components/Header";
import Feed from "../components/Feed";
import Wedgets from "../components/Wedgets";

function MainPage() {
  return (
    <div className="">
      <Header />

      <div className="bg-gray-100 lg:px-52 md:px-20 md:py-6 flex md:space-x-8 min-h-screen">
        <Feed />
        <Wedgets />
      </div>
    </div>
  );
}

export default MainPage;
