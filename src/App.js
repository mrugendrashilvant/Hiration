import './App.css';
import Page1 from './components/page1/Page1';
import Page4 from './components/page4/Page4';
import Page2 from './components/page2/Page2';
import Page3 from './components/page3/Page3';
import Page5 from './components/page5/Page5';
import Page6 from './components/page6/Page6';
import Page7 from './components/page7/Page7';
import Page8 from './components/page8/Page8';
import Page9 from './components/page9/Page9';

function App() {
  return (
    <>
      <div className='container h-screen overflow-hidden mx-auto'>
        <Page1 />
      </div>
      <div className='container h-screen overflow-hidden mx-auto '>
        <Page2 />
      </div>
      <div className='container h-screen overflow-hidden mx-auto '>
        <Page3 />
      </div>
      <div className='container h-screen overflow-hidden mx-auto '>
        <Page4 />
      </div>
      <div className='container h-screen overflow-hidden mx-auto '>
        <Page5 />
      </div>
      <div className='container h-screen overflow-hidden mx-auto '>
        <Page6 />
      </div>
      <div className='container h-screen overflow-hidden mx-auto '>
        <Page7 />
      </div>
      <div className='container h-screen overflow-hidden mx-auto '>
        <Page8 />
      </div>
      <div className='relative h-screen overflow-hidden bg-gray-800 mx-auto w-screen'>
        <Page9 />
      </div>
    </>
  );
}

export default App;
