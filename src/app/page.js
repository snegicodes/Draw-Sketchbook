"use client";
import Board from "@/components/Board";
import Menu from "@/components/Menu";
import ToolBox from "@/components/ToolBox";
import { appStore } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={appStore}>
      <Menu />
      <ToolBox />
      <Board />
    </Provider>
  );
}
