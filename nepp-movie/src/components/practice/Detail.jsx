import { useLocation, useParams } from "react-router-dom";

function Detail() {
  const { userId } = useParams(); // 숫자를 받아도 string 타입이다.
  console.log(typeof parseInt(userId)); // parseInt(string)을 통해 number 타입으로 변환한다.

  const { pathname } = useLocation();
  return (
    <div>
      <h2>Detail</h2>
      <p>Detail {userId}</p>
    </div>
  );
}

export default Detail;
