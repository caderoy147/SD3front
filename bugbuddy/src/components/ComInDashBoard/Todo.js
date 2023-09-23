import React from 'react'
import '../../styles/dashboard.css'

const Todo = () => {
  return (
    <section id="content">
    <main>
      <div className='table-data'>
        <div className="todo">
              <div className="head">
                <h3>To Dos</h3>
                <i className='bx bx-plus' ></i>
                <i className='bx bx-filter' ></i>
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>To do List</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li className="completed">
                  <p>To do List</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li className="not-completed">
                  <p>To do List</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li className="completed">
                  <p>To do List</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
                <li className="not-completed">
                  <p>To do List</p>
                  <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </section>
  )
}

export default Todo