const formBtn = document.querySelector("#formBtn");
const saleMail = document.querySelector(".mailing__form");

formBtn.addEventListener("click", () => {
  subcribe();
});

function subcribe() {
  document.querySelector(".submitForm").addEventListener("submit", (e) => {
    e.preventDefault();

    if (document.myForm.user_email.value == "") {
      alert("Пожалуйста введите Ваш Email!");
      document.myForm.user_email.focus();
      return false;
    }
    if (!document.myForm.user_email.value == "") {
      r46("profile", "set", {
        email: document.myForm.user_email.value,
      });
      r46("segment", "add", {
        email: document.myForm.user_email.value,
        segment_id: "9805",
      });
      r46("subscription", "manage", {
        email: document.myForm.user_email.value,
        email_bulk: true,
        email_transactional: true,
        email_chain: true,
      });
      r46(
        "subscription",
        "web_push_subscribe",
        console.log("success", document.myForm.user_email.value)
      );
      r46("subscription", "mailings", document.myForm.user_email.value, {
        segment: "9805",
      });
    }

    succesSend();

    return true;
  });
}

function succesSend() {
  saleMail.innerHTML = ` 
    <div class="mailing__form--success">
      Спасибо, за подписку!
    </div>`;
}