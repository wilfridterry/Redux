import { useDispatch, useSelector } from "react-redux/es/exports";
import * as actions from "../actions";

const Counter = () => {

  const counter = useSelector(state => {
    return state.counter;
  });
  
  const dispatch = useDispatch();

  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(actions.dec)} className="btn btn-primary">
        DEC
      </button>
      <button onClick={() => dispatch(actions.dec)} className="btn btn-primary">
        INC
      </button>
      <button onClick={() => dispatch(actions.rnd)} className="btn btn-primary">
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