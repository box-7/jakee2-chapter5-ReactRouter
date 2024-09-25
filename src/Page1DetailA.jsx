import { useLocation, useHistory } from "react-router-dom"; 

// 現在のURLの情報を取得:
        // pathname: URLのパス部分（例: /users/123）
        // search: URLのクエリ部分（例: ?sort=name）
        // hash: URLのハッシュ部分（例: #top）
        // state: 遷移時に渡された状態オブジェクト
        // などの情報を取得できる。
// 動的なページの作成:
        // URLのパラメータから特定のデータをフェッチして表示したり、
        // 異なるURLで異なるコンポーネントを表示したりできる。
// ユーザーの行動に合わせて表示内容を切り替え:
        // 遷移元のページからデータを受け取って表示したり、
        // 現在のURLに基づいて特定の機能を有効/無効にしたりできる。

export const Page1DetailA = () =>  {
        // const location = useLocation();
        const { state } = useLocation();
        console.log("Page1DetailA", state);

        // useHistoryフック
        // history.goBack()：前のページに戻る
        const history = useHistory();
        const onClickBack = () => history.goBack();

        return (
                <div>
                        <h1>Page1DetailA ページです</h1>
                        <button onClick={onClickBack}>戻る</button>
                </div>
        )
}