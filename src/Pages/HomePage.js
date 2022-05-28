import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();
  function clearStorage() {
    localStorage.removeItem('token');
    navigate('/login', {replace: true} );
  }
    // const [count, setCount] = useState(0);
    //   // Аналогично componentDidMount и componentDidUpdate:
    //   useEffect(() => {
    //     // Обновляем заголовок документа с помощью API браузера
    //     document.title = `Вы нажали ${count} раз`;
    //   });
    
    return (
    <div>
      {/* <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button> */}
      <button onClick={() => clearStorage()}>
        Выход
      </button>
      <button onClick={() => alert(localStorage.getItem('token'))}>
        Узнать Токен
      </button>
    </div>
  );
}

export default HomePage;