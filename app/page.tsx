"use client"
import Image from "next/image";
import AddTask from "./component/addTask";
import Tasks from "./component/tasks";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Home() {
  return (
    <Provider store={store}>
    <div className="container mx-auto flex justify-center items-center p-4">
      <div className="w-10/12 max-md:w-full">
      <AddTask />
      <Tasks />
      </div>
    </div>
   </Provider>
  );

 
}
