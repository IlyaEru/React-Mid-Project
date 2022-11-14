import { useState, useEffect } from 'react';
import AppViewWrapper from './components/AppViewWrapper';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <AppViewWrapper>
        <Header />
        <Main />
        <Footer />
      </AppViewWrapper>
    </>
  );
}

export default App;
