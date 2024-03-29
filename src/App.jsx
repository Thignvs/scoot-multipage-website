import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'



function App() {

  


  return (
    <>


      <nav>
        <NavBar />
      </nav>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App



// import React from 'react';
// import { Outlet, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       <nav>
//         <NavBar />
//       </nav>
//       <main>
//         <Route>
//           <Outlet />
//         </Route>
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//     </>
//   );
// }
// export default App;