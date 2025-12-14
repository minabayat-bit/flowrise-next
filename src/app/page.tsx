import Image from "next/image";
import Productivity from "./UI/Productivity";
import Comments from "./UI/Comments";
import Robust from "./UI/Robust ";

export default function Home() {
  return (
    <div >
       <Productivity />
        <Comments />
        <Robust />
     
    </div>
  );
}
