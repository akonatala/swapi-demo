import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './reduxStore';
import FormComponent from './components/formComponent'

const store = reduxStore();


function App() {
  return (
    <>
      <Provider store={store}>
     <FormComponent/>
      </Provider>
    </>
  );
}

export default App;
