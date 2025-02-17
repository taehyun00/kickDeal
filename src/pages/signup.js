import '../pagescss/signup.css';
import React from 'react'; 


function Signup() {
  
  return (
      <div class="main">
        <div className='back-modal'>
            <p className='title'>본인정보를 입력해주세요</p>
        <div className='in'>
            <div className='i' >
                <input type="text" required></input>
                <label>이름</label>
                <span></span>
            </div>

            <div  className='i'>
                <input type="text" required></input>
                <label>생년월일</label>
                <span></span>
            </div>

        </div>
      </div>




      </div>

  );
}

export default Signup;