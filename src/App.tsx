import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, ConnectedProps } from 'react-redux';

function App({ requesting }: PropsFromRedux) {
  console.log(requesting);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    requesting: state.items.itemsRequesting
  }
}
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(App);
