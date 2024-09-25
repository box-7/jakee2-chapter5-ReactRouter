// BrowserRouter
// React Routerのコンポーネントの一つ
        // SPA（シングルページアプリケーション）におけるURL管理とページ遷移を制御
// ヒストリーAPIを使用
        // ブラウザの「戻る」「進む」ボタンでURLの変更に対応
        // ページをリロードしても正しく動作
// URLにハッシュが含まれない
        // /page1や/aboutのような通常のパス形式でURLを表現
// ルーティングをシンプルにする
        // URLに応じてページを動的に切り替え、再読み込みなしでスムーズな遷移


// Link
        // <a>タグの代替として使用される
        // ページの再読み込みなしで、指定したパスに遷移できる
// URLに遷移させるために使用
        // hrefの代わりにto属性を使って、遷移先のパスを指定
        // ---ポイント--- React Routerがページ遷移を管理し、コンポーネントを切り替える
// ページリロードを避けて高速な遷移
        // シングルページアプリケーションの特性を活かし、全ページのリロードなしで部分的に更新
// toにオブジェクトを渡すことも可能
        // pathnameやstateでデータを遷移先に渡せる
// 使用例
        // <Link to="/about">About</Link>
        // URLが/aboutに変わり、Aboutページに遷移

import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'
// Routerコンポーネントのインポート react-router-domのRouteとは異なる
import { Router } from './router/Router'

export default function App() {
        return (
                <BrowserRouter>
                        <Link to="/">Home</Link>
                        <br />
                        <Link to="/page1">Page1</Link>
                        <br />
                        <Link to="/page2">Page2</Link>
                        <br />
                        <Link to="/page3">Page3</Link>
                        <br />
                        <Link to="/pagepropstest">PagePropsTest </Link>
                        <br />

                        {/* Routerがないと、ページ遷移が動作しない
                        <Link> をクリックしても、URLは変わるが、React Router で
                        その URL に対応するルートが設定されていないため、表示されるコンポーネントが変わらない */}
                        <Router />
                </BrowserRouter>
        );
}

