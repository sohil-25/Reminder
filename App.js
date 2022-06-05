import React from 'react'
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import RootStackNav from './src/navigation/RootStackNav';

export default function App() {
  return (
    <Provider store={Store}>
    <RootStackNav/>
    </Provider>
  )
}