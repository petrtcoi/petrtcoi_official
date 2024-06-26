import NavBar from "@widgets/NavBar";
import MainPageText from "@widgets/MainPageText";
import HeroImage from "@widgets/HeroImage";
import Posts from "@widgets/Posts";
import Contacts from "@widgets/Contacts";
import Examples from "@/widgets/Examples";

import { getPostsWithLinks } from "@/entities/posts";

export const revalidate = 60;

export default function Home() {
  getPostsWithLinks();
  return (
    <div className="flex-col">
      <NavBar />
      <div className="pt-10 grid grid-rows-1 grid-cols-1 md:grid-cols-[50fr,50fr] gap-10">
        <HeroImage />
        <div>
          <MainPageText />
          <Contacts />
        </div>
      </div>
      <div className="max-w-[900px] mt-16 mx-auto">
        <h2 className="text-3xl pb-8 font-thin">Some examples of work</h2>
        <Examples />
      </div>
      <div className="max-w-[600px] mt-16 mx-auto">
        <Posts />
      </div>
      <div className="mt-[100px]" />
    </div>
  );
}
