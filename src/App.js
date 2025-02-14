import './App.css';
import React from 'react'; 
import logo from './images/logo.svg';
import search from './images/search.svg';
import back from './images/back.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Mypage  from './pages/mypages';
import All  from './pages/all';
import Ball  from './pages/ball';
import Kids  from './pages/kids';
import Shoes  from './pages/shoes';
import Shoes1  from './pages/shoes1';
import Uniform  from './pages/uniform';
import Upload  from './pages/upload';
import Another  from './pages/another';

function App() {
  
  return (
    

    <div className="App">
      <div class="container">
        <div class="parent">
        <div class="log">
        <button class="login"> 로그인 </button>
        <button class="signup"> 회원가입 </button>
        </div>
        <div>
        <Link to="/"><img src={logo} alt="" class="logo"></img></Link>
        <img src={back} alt="" class='back'></img>
        
        <div class="searchBox">

          <input type="text" placeholder="상품명을 입력해주세요" class='searchInput'>
            
          </input>

          <button id='search-Btn'>
                    <img src={search} alt='search icon' className='search-Img'/>
                </button>

        </div>
        
        <select class ="select">
      <optgroup>
    <option value="s">서울</option>
    <option value="B">대전</option>
    <option value="O">대구</option>
    <option value="M">부산</option>
      </optgroup>
      </select>
      </div>


      </div>

      <div class="chose">
        <p>
        <Link to="/all">전체상품</Link>
        </p>

        <p>
        <Link to="/ball">축구공</Link>
        </p>

        <p>
        <Link to="/shoes">축구화</Link>
        </p>

        <p>
        <Link to="/shoes1">풋살화</Link>
        </p>

        <p>
        <Link to="/uniform">유니폼</Link>
        </p>

        <p>
        <Link to="/kids">유소년</Link>
        </p>

        <p>
        <Link to="/another">기타용품</Link>
        </p>

        <p>
        <Link to="/upload">글올리기</Link>
        </p>

        <p>
        <Link to="/mypages">마이페이지</Link>
        </p>



     </div>
    </div>
    <Routes>
        <Route path="/mypages" element={<Mypage />}></Route>
    </Routes>

    <Routes>
        <Route path="/all" element={<All />}></Route>
    </Routes>

    <Routes>
        <Route path="/ball" element={<Ball />}></Route>
    </Routes>

    <Routes>
        <Route path="/shoes" element={<Shoes />}></Route>
    </Routes>

    <Routes>
        <Route path="/shoes1" element={<Shoes1 />}></Route>
    </Routes>

    <Routes>
        <Route path="/kids" element={<Kids />}></Route>
    </Routes>

    <Routes>
        <Route path="/another" element={<Another />}></Route>
    </Routes>

    <Routes>
        <Route path="/uniform" element={<Uniform />}></Route>
    </Routes>

    <Routes>
        <Route path="/upload" element={<Upload />}></Route>
    </Routes>

    </div>
    
  );
}

export default App;
