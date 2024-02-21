import React from "react";
import { RecoilRoot } from "recoil";
import Entry from "./src/Entry";

export default function App() {
  return (
    <RecoilRoot>
      <Entry />
    </RecoilRoot>
  );
}
