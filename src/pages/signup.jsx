import '../pagescss/signup.css';
import React from 'react'; 



export default function Signup() {
  
  return (
      <div className="Ma">
        <div className='forms'>
          <div className='ft'>본인정보를 입력해주세요</div>

          <div className='realforms'>
            <div className='divW'>이름</div>
              <div className='fi'>
                <input  className='fin' placeholder='홍길동'/>
              </div>




            <div className='divW'>생년월일</div>
              <div className='fi'>
                <input  className='fin' placeholder='2000.11.17'/>
              </div>




            
            <div className='divW'>이메일</div>
              <div className='fi'>
                <input  className='fin' placeholder='tes1234@gmail.com'/>
              </div> 
            
            <div className='bt'>
              <button className='btt'>다음</button>

            </div>
            
            
            </div>
          </div>
        </div>



  );
}
