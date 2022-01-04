import { useDispatch, useSelector } from "react-redux";
import { CounterActionType } from "./redux/CounterActionType";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.CounterReducer.count);

  const counterFunction = (data) => {
    dispatch({
      type: CounterActionType.INC_DEC,
      payload: data,
    });
  };

  const OddFunction = (data) => {
    if (data % 2 == 0) {
      dispatch({
        type: CounterActionType.INCREMENT_IF_ODD,
        payload: +1,
      });
    }
  };

  const asyncTimer = () => {
    const timer = setTimeout(() => {
      dispatch({
        type: CounterActionType.ASYNC_INCREMENT,
        payload: +2,
      });
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div>
      <fieldset>
        <legend>
          <h1>Counter Task</h1>
        </legend>
        <span>
          <h3>{`Clicked : ${count} times`}</h3>
          <button onClick={() => counterFunction(+1)}>+</button>
          <button onClick={() => counterFunction(-1)}>-</button>
          <button onClick={() => OddFunction(count)}>Increment if odd</button>
          <button onClick={asyncTimer}>async Increment</button>
        </span>
      </fieldset>
    </div>
  );
};

export default Counter;
