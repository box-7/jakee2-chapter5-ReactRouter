import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
        {
                // 親URLのパスを指定
                // path: "/",のみexact: trueとしている
                path: "/",
                exact: true,
                children: <Page1 />
        },
        {
                // 子URLのパスを指定
                path: "/detailA",
                exact: false,
                children: <Page1DetailA />
        },
        {
                path: "/detailB",
                exact: false,
                children: <Page1DetailB />
        },
];