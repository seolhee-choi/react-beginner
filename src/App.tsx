import {useEffect, useMemo, useState} from "react";

const App = () => {
  // useState => Hooks
  // useState는 리액트에서 가장 기본적인 훅이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  // => 이 함수가 호출되면 배열을 반환한다.
  // => 반환된 배열의 첫 번째 요소는 상태 값, 두 번째 요소는 상태 값을 설정하는 함수
  // => useState 함수의 파라미터(매개변수)에는 상태의 기본값, 초기값을 넣어준다.

  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  const onChangeName = (event:React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const onChangeNickname = (event:React.ChangeEvent<HTMLInputElement>) => setNickname(event.target.value);

  // useEffect
  // 마운트가 될 때만, 최초 1회만 실행하고 싶을 때
  // 마운트란, 리액트 DOM에 우리가 return 키워드 하단에 작성한 HTML, CSS 영역 즉, UI가 붙었을때 => 우리가 HTML을 자바스크립트로 통제 가능할 때
  // useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고,
  // 업데이트 될 때는 실행하지 않으려면, 함수에 두 번째 파라미터(매개변수)로 빈 배열을 넣어주면 된다.

  // 특정 값이 업데이트 될 때만 실행하고 싶을 때
  // useEffect를 사용할 때, 특정 값이 변경될 때만 호출하고 싶을 경우도 있다.
  // useEffect의 두 번째 파라미터(매개변수)로 전달되는 배열안에 검사하고 싶은 값을 넣어주면 된다.
/*  useEffect(() => {
    // 해당 컴포넌트가 최초 렌더링이 될 때, useEffect가 실행이 되고,
    // 우리가 선언한 state 즉, 상태 값이 변화하더라도 useEffect가 실행되는 것으로 보아
    // state 즉, 상태 값이 변화하면 해당 컴포넌트는 재렌더링이 된다는 것을 알 수 있다.
    console.log("컴포넌트가 렌더링 될 때마다 특정작업 수행");
    console.log("name: ", name);
    console.log("nickname: ", nickname);
  });*/

  useEffect(() => {
    console.log("마운트가 될 때만 수행합니다. - 최초 1회 실시");
    console.log("name: ", name);
    console.log("nickname: ", nickname);
  },[]);

  useEffect(() => {
    console.log("name이라는 상태 값이 변할 경우에만 수행");
    console.log("name: ", name);
    console.log("nickname: ", nickname);
  },[name]);

  useEffect(() => {
    console.log("뒷 정리하기");
    console.log("updated name: ", name);

    return () => {
      console.log("cleanup");
      console.log(name);
    }
  }, [name])


  // useMemo
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>(""); // 실제 input태그에 입력된 숫자를 list 배열에 주입할 것이기 때문에
  // 상태값 이름을 number로 지정. 단, input 태그에 입력된 값이기 때문에 데이터 타입은 string

  const getAverage = (numbers: number[]) => {
    console.log("평균값을 계산 중입니다.");

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
  }
  const onInsert = () => {
    // concat: Array 인스턴스의 concat 함수는 두 개 이상의 배열을 병합하는데 사용됨. 이 메서드는 기존 배열을 변경하지 않고 새 배열을 반환함
    // parseInt: 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
    const newList = list.concat(parseInt(number));
    setList(newList); // number[]
    setNumber("");
  };

  const average = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <p>
        현재 카운터 값은: <b>{value}</b>
      </p>
      <button onClick={increment}>1 증가</button>
      <button onClick={decrement}>1 감소</button>

      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>

      <div>
        <b>이름 : {name}</b>
        <b>별명 : {nickname}</b>
      </div>

      <div>
        <input type="text" value={number} onChange={(event) => setNumber(event.target.value)} />
        <button onClick={onInsert}>등록</button>

        <ul>
          {list.map((item: number, index: number) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        <div>
          <b>평균 값: {average}</b>
        </div>
      </div>
    </div>
  )
}

export default App
