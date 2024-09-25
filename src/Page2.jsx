import { Link } from "react-router-dom/cjs/react-router-dom.min"

export const Page2 = () =>  {
        return (
                <div>
                        <h1>Page2ページです</h1>
                        {/* id */}
                        <Link to="/page2/999">URL Parameter</Link>
                        <br />

                        {/* クエリパラメーター */}
                        <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
                </div>
        // return文で返されるJSX（または値）を囲む()の後にセミコロンを付けることで、return文が終了したことを明示的に示す
        );
// 関数の終わりを示すためにセミコロンを付けることで、コードの見た目を整えることができる
}