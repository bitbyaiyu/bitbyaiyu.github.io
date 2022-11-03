import React, { Component } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Screen from './Screen/Screen'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/notice/path=:path" element={<Screen />} />
          <Route path="/event/path=:path" element={<Screen />} />
          <Route path="/syllabus/path=:path" element={<Screen />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App