import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () =>  {
        const { id } = useParams();

        // page2の箇所
        // react-router-domのRouteコンポーネントが自動的に提供するprops。
        // history: ユーザーのナビゲーション履歴を管理するオブジェクト。ページ遷移や履歴操作を行うための関数が含まれている。
        // location: 現在のURLに関する情報（pathname、クエリパラメータ、ハッシュなど）を持つオブジェクト。
        // match: 現在のURLがルートにどのように一致しているかの情報（path、isExact、paramsなど）を持つオブジェクト。
        // staticContext: サーバーサイドレンダリングで使用されるオブジェクト。クライアントサイドでは通常 undefined になる。

        const { search } = useLocation();
                // searchをURLSearchParamsでパース
                // 「パース（parse）」とは、データや文字列を特定の形式から別の形式に変換するプロセス
                // ?name=Keiko&age=25 というクエリ文字列をパースする
                // name というキーに対して Keiko という値、age というキーに対して 25 という値が得られる
        const query = new URLSearchParams(search);

        return (
                <div>
                        <h1>UrlParameter  ページです</h1>
                        <p>パラメータは{id}です</p>
                        <p>クエリパラメータは{query.get("name")}です</p>
                </div>
        )
}