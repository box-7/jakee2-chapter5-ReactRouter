import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
        {
                // 親URLのパスを指定
                path: "/",
                exact: true,
                children: <Page2 />
        },
        {
                // 子URLのパスを指定
                path: "/:id",
                exact: false,
                children: <UrlParameter />
        },

];