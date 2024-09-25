

import { Link, useHistory } from "react-router-dom"

export const Page1 = () =>  {
        const arr = [...Array(100).keys()];
        // console.log(arr);

        // フックを使う: コンポーネントの中でuseHistoryフックを実行
        // 履歴オブジェクトを取得: フックから返されるオブジェクト（historyオブジェクト）を使って、
        // 様々な履歴操作ができる
        // history.push('/path')：/pathに遷移する
        // history.goBack()：前のページに戻る
        // history.goForward()：次のページへ進む

        const history = useHistory();
        const onClickDetailA = () => history.push("/page1/detailA");
        return (
                <div>
                        <h1>Page1ページです</h1>
                        {/* stateを使ってデータを渡す */}
                        <Link to={{pathname: "/page1/detailA", state: arr}}>DetailA</Link>
                        <br />
                        <Link to="/page1/detailB">DetailB</Link>
                        <br />
                        <button onClick={onClickDetailA}>DetailA</button>
                </div>
        )
}