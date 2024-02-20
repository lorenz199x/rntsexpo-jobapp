import { StatusBar } from "expo-status-bar";
import { RecoilRoot } from "recoil";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <RecoilRoot>
      <AppNavigator />
    </RecoilRoot>
  );
}
