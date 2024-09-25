
{/* <Switch> と <Route> が存在しない場合、React Router によるルーティングが行われないため、
        次のような影響が出る

1. ページ遷移が動作しない
<Link> をクリックしても、URLは変わるが、React Router で
その URL に対応するルートが設定されていないため、表示されるコンポーネントが変わらない
ブラウザのアドレスバーに表示される URL は更新されても、アプリケーションの表示自体は変わらない

2. ブラウザのデフォルト動作
<Link> は、通常の HTML <a> タグのように動作しないため、
ブラウザのデフォルトのページリロードは行われないが、React Router で URL にマッチする処理がなければ、
React コンポーネントのレンダリングが起こらない
 */}

import { Switch, Route } from 'react-router-dom'
import { Home } from '../Home'
// Page1Routesのルーティングの配列だけ抜き出したコンポーネント
import { Page1Routes } from './Page1Routes'
import { Page2Routes } from './Page2Routes'
import { Page3 } from '../Page3'
import { Page404 } from '../Page404'
import { PagePropsTest } from '../PagePropsTest'

export const Router = () => {
        // Reactコンポーネント内で複数のJSX要素を返す場合、()を使ってJSX全体を括る
        return (
                <Switch>
                        {/* exactを入れると、"/"の完全一致が対象となる */}
                        <Route exact path="/">
                                <Home  />
                        </Route>

                        <Route
                                path="/page1"
                                // match.urlはpropsの中に入っている
                                // page1の中のルーティングを設定
                                // path="/page3"の中にpropsの事例がある
                                render={({match: { url }}) => (
                                        <Switch>
                                                {/* コンポーネントの内側にconsole.logは書く */}
                                                {console.log("Router.jsx Route path=/page1 url",url)};
                                                {Page1Routes.map((route) => (
                                                        <Route  key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                                                                {route.children}
                                                        </Route>
                                                ))}
                                        </Switch>
                                )}>
                        </Route>

                        <Route
                                path="/page2"
                                render={({match: { url }}) => (
                                        <Switch>
                                                {Page2Routes.map((route) => (
                                                        <Route  key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                                                                {route.children}
                                                        </Route>
                                                ))}
                                        </Switch>
                                )}>
                        </Route>

                        <Route
                                path="/page3"
                                // アロー関数で{}を使う場合、その中に複数のステートメントがあることを示している
                                render={(props) => {
                                        console.log("Route.jsx Page3 props", props);
                                        return <Page3 />
                                }}
                        >
                        </Route>

                        <Route
                                path="/pagepropstest"
                                // アロー関数で{}を使う場合、その中に複数のステートメントがあることを示している
                                render={(props) => {
                                        console.log("Route.jsx PagePropsTest props:", props);
                                        return <PagePropsTest />
                                }}
                        >
                        </Route>

                        <Route path="*">
                                <Page404 />
                        </Route>
                </Switch>
        )
}

// Switchコンポーネント
        // React Routerで使用され、複数のルートの中から最初に一致したルートをレンダリングする
        // ルートのパスが一致すると、そのコンポーネントのみを表示し、それ以外のルートは無視される


// page2の箇所
// react-router-domのRouteコンポーネントが自動的に提供するprops。
// history: ユーザーのナビゲーション履歴を管理するオブジェクト。ページ遷移や履歴操作を行うための関数が含まれている。
// location: 現在のURLに関する情報（pathname、クエリパラメータ、ハッシュなど）を持つオブジェクト。
// match: 現在のURLがルートにどのように一致しているかの情報（path、isExact、paramsなど）を持つオブジェクト。
// staticContext: サーバーサイドレンダリングで使用されるオブジェクト。クライアントサイドでは通常 undefined になる。


