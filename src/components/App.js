import Counter from "./Counter";

const App = () => {
  return <>
    <Counter />
    <Com/>
  </>;
};

const Com = () => {
    console.log('Com');
    return (
        <h1>Com</h1>
    );
}
export default App;
