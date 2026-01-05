// chuyển đổi login sang register
const register = document.querySelector('.Register a');
const formBox = document.querySelector('.box-size');
const reBox = document.querySelector('.Re-size');
const forgot = document.querySelector('.fo-size');
register.addEventListener('click', function(e){
    e.preventDefault();
    formBox.style.display='none';
    reBox.style.display ='flex';
});

const Login = document.querySelector('.Login a');
//chuyển đổi từ register sang login
Login.addEventListener('click', function(e){
    e.preventDefault();
    formBox.style.display='flex';
    reBox.style.display ='none';
});

const update = document.getElementById("ok");
const agree = document.getElementById("Agree");
update.addEventListener('click', function(e){
    e.preventDefault();
    const username = document.getElementById("Username").value.trim();
    const email = document.getElementById("reEmail").value.trim();
    const password = document.getElementById("rePassword").value;

  // 1. Kiểm tra nhập đủ
  if (!username || !email || !password) {
    alert("Nhập đầy đủ vào hay muốn ăn đấm");
    return;
  }
  //kiểm tra đồng ý điều khoản.
  else if(!agree.checked){
    alert("con bạc này đồng ý đê");
    return;
  }
  // 4. Thành công
  
  const user = {
  username: username,
  email: email,
  password: password
};
alert("Đăng ký thành công");
localStorage.setItem("user", JSON.stringify(user));
});

/*forgot password*/
const getBack = document.querySelector(".goBack a");
getBack.addEventListener("click" , function(e){
    e.preventDefault();
    forgot.style.display= "none";
    formBox.style.display= "flex";
});

const forgotpassword =document.querySelector(".Forgot a");
forgotpassword.addEventListener("click", function(e){
  e.preventDefault();
    formBox.style.display ="none";
    forgot.style.display = "flex";
});

//Kiểm tra login
const Log = document.getElementById("getIn");
Log.addEventListener('click', function(e){
  e.preventDefault();
  

  const logEmail = document.getElementById("Email").value.trim();
  const logPassword = document.getElementById("Password").value;

  // Chưa nhập gì
  if (!logEmail || !logPassword) {
    alert("Nhập tài khoản đi chứ!");
    return;
  }

  //  Chưa có tài khoản
  const storedUser = localStorage.getItem("user");
  if (!storedUser) {
    alert("Đăng ký tài khoản đê");
    return;
  }

  const Inuser = JSON.parse(storedUser);

  // sai email
  if (logEmail !== Inuser.email) {
    alert("Sai email rồi ku!");
    return;
  }

  // sai password
  else if (logPassword !== Inuser.password) {
    alert("Sai password ông cố!");
    return;
  }
  else{
    window.location.href ="troll.html";
  }
});

