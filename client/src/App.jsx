import React from 'react'
import { darkTheme } from './utils/Theme';
import styled, { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Wrapper>
            <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/post' element={<CreatePost />} />
              </Routes>
            </BrowserRouter>
          </Wrapper>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App