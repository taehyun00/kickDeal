import './App.css';
import React from 'react'; 
import logo from './images/logo.svg';
import search from './images/search.svg';
import back from './images/back.svg';

function App() {
  
  return (

    <div className="App">
      <div class="container">
        <div class="log">
        <button class="login"> 로그인 </button>
        <button class="signup"> 회원가입 </button>
        </div>
        <div>
        <img src={logo} alt="" class="logo"></img>
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
        <p>전체상품</p>
        <p>축구공</p>
        <p>축구화</p>
        <p>풋살화</p>
        <p>유니폼</p>
        <p>유소년</p>
        <p>기타용품</p>
        <p>글올리기</p>
        <p>마이페이지</p>
      </div>

      <div class="main">
      <p class='main'>마이페이지</p>

      <p class="detail">구매내역</p>

      <p class="detail">판매 내역</p>
      </div>
    </div>
  );
}

export default App;
