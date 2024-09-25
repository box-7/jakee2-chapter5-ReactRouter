import { Link, useHistory } from "react-router-dom"

export const PagePropsTest = () =>  {
        const arr = [...Array(100).keys()];
        // console.log(arr);

        const history = useHistory();
        const onClickDetailA = () => history.push("/page1/detailA");
        return (
                <div>
                        <h1>PagePropsTestページです</h1>
                        {/* stateを使ってデータを渡す */}
                        <Link to={{pathname: "/page1/detailA", state: arr}}>DetailA</Link>
                        <br />
                        <Link to="/page1/detailB">DetailB</Link>
                        <br />
                        <button onClick={onClickDetailA}>DetailA</button>
                </div>
        )
}