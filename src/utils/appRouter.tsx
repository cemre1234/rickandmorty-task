import { DetailScreen } from "../screens/DetailScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { createBrowserRouter } from "react-router-dom";

export const homeRoutePath = () => "/";
export const detailRoutePath = (characterId?: number) => `/detail/${characterId || ":characterId"}`;

export const appRouter = createBrowserRouter([
    {
        path: homeRoutePath(),
        element: <HomeScreen />,
    },
    {
        path: detailRoutePath(),
        element: <DetailScreen />
    }
]);