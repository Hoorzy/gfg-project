import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './Login'

function App() {
  return (
    <div className="App">
      <div className="App" >
        <div className="Body" style={{ background: 'gray', height: 1000 }} >Global Fashion Group
        {/* nav component */}
        <nav className="Navigation"> 
            <a className="NavLink" href="/html/">Products</a>
            <a className="NavLink" href="/html/">Orders</a>
            <a className="NavLink" href="/html/" >Setting</a>
          </nav>
          {/* login component */}
          <div>
            <input type="button" value="Login" />
          </div>
          <div className="productGrid">
            {/* grid component */}
            <table>
              <th>Img</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
              <tr>
                <td></td> <td>skirt</td> <td>addidas</td> <td>100</td> <td>No</td>
              </tr>
              <tr>
                <td></td> <td>Hat</td> <td>Nike</td> <td>200</td> <td>Yes</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
