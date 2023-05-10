import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements }from 'react-router-dom';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Banner from './layouts/HomePage/components/Banner';
import Header from './layouts/Header/Header';
import About from './layouts/HomePage/components/About';
import Workouts from './layouts/HomePage/components/Workouts';
import Pricing from './layouts/HomePage/components/Pricing';
import Community from './layouts/HomePage/components/Community';
import Faq from './layouts/HomePage/components/Faq';
import Join from './layouts/HomePage/components/Join';
import Footer from './layouts/Footer/Footer';
import RootLayout from './layouts/RootLayout';

import Homepage from './layouts/HomePage/HomePage';
import TraineesPage from './layouts/Trainees/TraineesPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<RootLayout/>}>
      <Route index element={<Homepage />}/>
      <Route path="/trainees" element={<TraineesPage />}/>
    </Route>
  )
)

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    // <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
    //   <Header />
    //   <div>
        
        
    //     <Banner />
    //     <About />
    //     <Workouts />
    //     <Pricing />
    //     <Community />
    //     <Faq />
    //     <Join />
    //   </div>
    //   <Footer />
    //   {/* <div className='h-[4000px]'></div> */}
    // </div>

    <RouterProvider router={router} />
  );
};

export default App;
