import React from 'react'
import data from './data';


const NavBar = () => {

    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filterNavBar = (category) => {
      setSelectedCategory(category);
    };


  return (
      <div>
        <div className="nav-bar">
          <div>
            <h1>Our Menu</h1>
            <hr className='horizontal-line' />
          </div>
          <div className='list-of-btn'>
            <button onClick={() => filterNavBar("All")} className='btn'>All</button>
            <button onClick={() => filterNavBar("Breakfast")} className='btn'>BreakFast</button>
            <button onClick={() => filterNavBar("Lunch")} className='btn'>Lunch</button>
            <button onClick={() => filterNavBar("Shakes")} className='btn'>Shakes</button>
            <button onClick={() => filterNavBar("Dinner")} className='btn'>Dinner</button>
          </div>
        </div>

        <div className="all">
          <div className="container">
            {data.filter(item => selectedCategory === "All" || item.category === selectedCategory.toLowerCase()).map(item => (
              <div className='card' key={item.id}>
                <img src={`./img/${item.img}`} alt={item.name} title={item.name} />
                <div className="texts">
                    <div className="name-and-price">
                        <h2>{item.name}</h2>
                        <p>${item.price}</p>
                    </div>
                    <hr />
                    <p>{item.description}</p>
                </div>
              </div>
            ))} 
          </div>
        </div>
        <div className="footer">
          <h1>Menu</h1>
        </div>
      </div>
  )
}

export default NavBar
