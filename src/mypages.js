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
      <p class='main'>마이페이지</p>
      <br></br>
      <p class="detail">구매내역</p>
      <br></br>
      <p class="detail">판매 내역</p>
    </div>
  );
}

export default App;
