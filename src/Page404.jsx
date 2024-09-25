import { Link } from "react-router-dom";

export const Page404 = () => {
        return (
                <>
                        <h1>ページが見つかりません</h1>
                        <Link to="/page1">Page1に戻る</Link>
                        <br />
                        <Link to="/">Topに戻る</Link>

                </>
        );
};

// import { Link } from "react-router-dom"

// export const Page404 = () =>  {
//         return (
//                 <div>
//                         <p><Link to="/page1" >Page1に戻る</Link></p>
//                         <h1><Link to="/" >Topに戻る</Link></h1>

//                         <h1>ページが見つかりません</h1>
//                 </div>
//         );
// };
