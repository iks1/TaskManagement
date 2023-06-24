
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
        <Header />
        <div className='flex'>
          <Sidebar />
          <Body />
        </div>
      </div> */}

      <div className='flex flex-row App'>
         <Sidebar/>
         <div className='flex flex-col w-full'>
            <Header/>
            <Body/>
         </div>
      </div>
    </Provider>
  );
}

export default App;
