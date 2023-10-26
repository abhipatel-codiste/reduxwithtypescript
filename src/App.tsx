import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";

function App() {
    const Count = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <div>
                <h1>count is {Count}</h1>
            </div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </>
    );
}

export default App;
