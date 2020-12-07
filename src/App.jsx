import React from 'react';

import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer.jsx';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
