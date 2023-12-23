"use client";
import Menu from "@/components/Menu";
import ToolBox from "@/components/ToolBox";
import Board from "@/components/Board";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Menu />
      <ToolBox />
      <Board />
    </Provider>
  );
}
