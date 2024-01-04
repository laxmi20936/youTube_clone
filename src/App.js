import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App-container">
        <Head />
        <Outlet />
      </div>
    </Provider>
  );

  // Head
  //     hamburger, youtube_logo, seachBar, userIcon
  // Body
  //     SideBar
  //         MenuItems/ NavigationItems
  //     MainContainer
  //         ButtonsList
  //         VideoContainer
  //             VideoCard
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: <WatchPage />,
          },
        ],
      },
    ],
  },
]);
export default App;
