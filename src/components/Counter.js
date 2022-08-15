import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {inc, dec, rnd} from "../actions";

const Counter = () => {
  const counter = useSelector(state => {
    return state.counter;
  });
  
  const dispatch = useDispatch();
  const memoizedInc = useCallback(() => dispatch(inc()), []);
  const memoizedDec = useCallback(() => dispatch(dec()), []);
  const memoizedRnd = useCallback(() => dispatch(rnd()), []);
  
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={memoizedDec} className="btn btn-primary">
        DEC
      </button>
      <button onClick={memoizedInc} className="btn btn-primary">
        INC
      </button>
      <button onClick={memoizedRnd} className="btn btn-primary">
        RND
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counter: state.value,
//   };
// };

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;