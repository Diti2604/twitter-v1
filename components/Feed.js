import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Indrit Ferati",
      username: "Indrit_Ferati",
      userImg:
        "https://media.licdn.com/dms/image/D4D03AQEGwy-ymEvWIg/profile-displayphoto-shrink_800_800/0/1689615097386?e=2147483647&v=beta&t=QqPOt9hVFEKD5sV0bTUy-WAEv5vKFgOmLNbGQdu7kws",
      img: "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
      text: "nice view!",
      timestamps: "2 hours ago",
    },
    {
      id: "2",
      name: "Indrit Ferati",
      username: "Indrit_Ferati",
      userImg:
        "https://media.licdn.com/dms/image/D4D03AQEGwy-ymEvWIg/profile-displayphoto-shrink_800_800/0/1689615097386?e=2147483647&v=beta&t=QqPOt9hVFEKD5sV0bTUy-WAEv5vKFgOmLNbGQdu7kws",
      img: "https://images.unsplash.com/photo-1695938884001-7f3ffe7066e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      text: "nice car!",
      timestamps: "2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5 " />
        </div>
      </div>
      <Input />
      {posts.map((post) =>(
        <Post key={post.id} post ={post}/>
      ))}
    </div>
  );
}
