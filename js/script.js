// firebase
// 1. 생성 후 저장
// 2. 값 불러와서 화면에 띄우기
// 3. 업데이트 및 삭제하기

// 값을 받아와서 리스트에 넣어야한다...
const form = document.querySelector(".form");
const list = document.querySelector(".list");

let paintTodos = (todo) => {
  // 여기서 list에 투두(word)를 넣어준다...
  list.innerHTML += `<li>${todo}</li>`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let word = form.formInput.value;

  paintTodos(word);

  form.reset();
});
