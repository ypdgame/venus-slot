
function checkUsername() {
  const username = document.getElementById("username").value.trim();
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const exists = users.some(user => user.username === username);
  if (exists) {
    alert("이미 사용 중인 아이디입니다.");
  } else {
    alert("사용 가능한 아이디입니다.");
  }
}

function checkNickname() {
  const nickname = document.getElementById("nickname").value.trim();
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const exists = users.some(user => user.nickname === nickname);
  if (exists) {
    alert("이미 사용 중인 닉네임입니다.");
  } else {
    alert("사용 가능한 닉네임입니다.");
  }
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const nickname = document.getElementById("nickname").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const pin = document.getElementById("pin").value.trim();
  const referral = document.getElementById("referral").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const bank = document.getElementById("bank").value;
  const accountName = document.getElementById("accountName").value.trim();
  const accountNumber = document.getElementById("accountNumber").value.trim();

  if (username.length < 2 || username.length > 20) return alert("아이디는 2자 이상 20자 이하로 입력해주세요.");
  if (nickname.length < 2) return alert("닉네임은 2자 이상이어야 합니다.");
  if (password.length < 8) return alert("비밀번호는 8자 이상이어야 합니다.");
  if (password !== confirmPassword) return alert("비밀번호가 일치하지 않습니다.");
  if (!/^[0-9]{4}$/.test(pin)) return alert("출금 비밀번호는 숫자 4자리여야 합니다.");
  if (!/^010[0-9]{8}$/.test(phone)) return alert("전화번호는 010으로 시작하는 11자리 숫자여야 합니다.");
  if (!bank) return alert("은행을 선택해주세요.");
  if (!accountName || !accountNumber) return alert("예금주 및 계좌번호를 입력해주세요.");

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const exists = users.some(user => user.username === username || user.nickname === nickname);
  if (exists) return alert("이미 존재하는 아이디 또는 닉네임입니다.");

  users.push({
    username,
    nickname,
    phone,
    bank,
    account: accountNumber
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("회원가입이 완료되었습니다!");
  window.location.href = "login.html";
});
