import '../pagescss/index.css';
import React from 'react'; 
import img from '../images/main.svg';

function Index() {
  
  return (
      <div class="main">
        <img src={img} alt="" class="img"></img>
        <div class="lag">
        <div class="dis">
            <p>몇번만 즐겨볼 축구인데<br></br>가격이 부담되신다구요?</p>
        </div>
        <div class="disc">
            <p>그럴땐 KickDeal에서 빠르게<br></br>중고거래 해보세요!</p>
        </div>

        <button className='buy'>구매하러 가기</button>
        </div>
      </div>

  );
}

export default Index;
