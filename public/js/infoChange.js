const $displayId = document.querySelector('.display-id');
const $changeCompleteBtn = document.querySelector('.change-complete-btn');
const $checkPw = document.querySelector('.check-pw');
const $changePw = document.querySelector('.change-pw');
const $changingPw = document.querySelector('.changing-pw');
const $changedPw = document.querySelector('.changed-pw');
const $changePwInput = document.querySelector('.change-pw-input');
const $changingPwInput = document.querySelector('.changing-pw-input');
const $changedPwInput = document.querySelector('.changed-pw-input');
const $changeBtnWrapper = document.querySelector('.change-btn-wrapper');
const $changeBtnWrapper2 = document.querySelector('.change-btn-wrapper2');
const $myNick = document.querySelector('.my-nick');


const request = {
  get (url) {
    return fetch(url);
  }
};

window.onload = e => {
  (async () => {
  //   const res = await request.get('/users');
  //   console.log(res);
  //   const users = await res.json();
  //   console.log(users);

  //   $displayId.textContent = users[0].id;

    sessionStorage.setItem('id', 'yongjin');
    sessionStorage.setItem('pw', '1234');
    sessionStorage.setItem('name', '용진');
    // console.log(sessionStorage.getItem('id'));
    // console.log(sessionStorage.getItem('pw'));
    // console.log(sessionStorage.getItem('name'));

    $displayId.textContent = sessionStorage.getItem('id') + '님';
  })();
};

$changeCompleteBtn.onclick = () => {
  if($changePwInput.value === sessionStorage.getItem('pw')) {
    $changePw.style.display = 'none';
    $changeBtnWrapper.style.display = 'none';
    $changingPw.style.display = 'block';
    $changeBtnWrapper2.style.display = 'block';
    $myNick.style.display = 'block';



  } else {
    console.log(+$checkPw.textContent === +sessionStorage.getItem('pw'));
  }
};


