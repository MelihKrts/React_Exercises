import React, { useEffect, useState } from 'react'
import "./To-do.css"
function App() {

  const Header = () => {

    const [theme, setTheme] = useState("light")

    const changeBg = () => {
      if (theme === "light") {
        setTheme("dark");
      }

      else {
        setTheme("light");
      }
    }
    useEffect(() => {
      document.body.className = theme;
    }, [theme])

    return (
      <header>
        <div className='row'>
          <h1 className='header-title'>To-do App</h1>

          <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="2em" width="1.5em" style={{ marginLeft: 10, fill: "#fff" }} onClick={changeBg} xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>

        </div>
      </header>
    )
  }

  const InputField = () => {
    const [newItem, setNewItem] = useState("") // input value state
    const [items, setItems] = useState([])

    const handleChange = (e) => {
      setNewItem(e.target.value)
    }


    function addItem() {

      if (!newItem) {
        alert("Enter an item");
        return;
      }

      function todoTime() {
        const time = new Date();
        const day = time.toLocaleDateString("tr-TR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        })

        const hour = time.toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          hour12: false,
          minute: "2-digit"
        })

        return `${day} ${hour}`;
      }

      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem.charAt(0).toUpperCase() + newItem.slice(1),
        time: todoTime(),
      }

      console.log(item.id);

      setItems(oldList => [...oldList, item])
      setNewItem("");
    }
    function deleteItem(id) {

      var result = confirm("Want to Delete?");

      if (result) {
        const array = items.filter(item => item.id !== id);
        setItems(array)
      }

    }


    return (
      <main>
        <section>
          <div className='row'>
            <input type='text' value={newItem} onChange={handleChange} placeholder='Enter a To-do' className='to-do-input' style={{ textTransform: "capitalize" }} />
            <button className='add' onClick={() => addItem()}>Add to-do</button>
          </div>

        </section>

        <section>
          <div className='container'>

            <div className='to-do-box'>

              <div className='title'>
                <div className='order-name'>
                  <h2>To-do Name</h2>
                </div>

                <div className='order-name'>
                  <h2>Time</h2>
                </div>

                <div className='order-name'>
                  <h2>State</h2>
                </div>

              </div>

              {items.map(item => {
                return (
                  <div key={item.id} className='item-map'>

                    <div>
                      <h3 className='item-value'>{item.value}</h3>
                    </div>

                    <div>
                      {item.time}
                    </div>

                    <div className='btn-area'>

                      <div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" className='danger' onClick={() => deleteItem(item.id)} xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path></svg>
                      </div>

                    </div>

                  </div>

                )
              })}

            </div>

          </div>

        </section>

      </main>

    )
  }

  return (

    <>
      <Header />
      <InputField />
    </>
  )
}

export default App
