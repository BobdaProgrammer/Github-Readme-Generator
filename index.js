//VARIABLES
let username = "BobdaProgrammer";
let life = false;
let lifetext = "false";
let theme = "radical";
let Hideborder = false;
let text = "false";
let langsLayout = "compact";

//HELPER FUNCTIONS
function getResult(name) {
  let i = 1;
  let res = ""
  if (document.querySelectorAll("."+name).length > 1) {
    document.querySelectorAll("." + name).forEach(answer => {
      if (i == 1) {
        res += ("<a href=''>"+answer.value + "</a>")
      } else {
        res = (res.slice(0,9)+answer.value+res.slice(9,res.length))
      }
      i++
    })
    if (i == 2) {
      res = document.querySelector("."+name).value
    }
  } else {
    res = document.querySelector("."+name).value
  }
  return res
}

//FRONT END FUNCTIONS

//makes the input read only if the user has not selected that option 
function readonly(check, input) {
  input.forEach((inp) => {
    if (check.checked) {
      inp.readOnly = false;
    } else {
      inp.readOnly = true;
      inp.value = "";
    }
  });
}
//set up github profile cards
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang").forEach((lang) => {
      lang.addEventListener("click", function (event) {
        let item = event.target;
        if (item.style.border == "2px solid rgb(33, 119, 83)") {
          item.style.border = "2px solid #00ff6e";
        } else {
          item.style.border = "2px solid #217753";
        }
      });
    });
  if (window.location.pathname == "/stats.html") {
    username = sessionStorage.getItem("username")
    setCard(username, theme, text, lifetext, langsLayout)
    document.querySelectorAll(".stat").forEach(stat => {
      stat.style.display = "inline-flex"
    })
  }
});


//updates github profile cards to user's preferances
document.getElementById("topLang").addEventListener("change", function (event) {
  langsLayout = event.target.value;
  setCard(username, theme, text, lifetext, langsLayout);
});
document.getElementById("theme").addEventListener("change", function (event) {
  theme = event.target.value;
  setCard(username, theme, text, lifetext, langsLayout);
});
document.getElementById("border").addEventListener("change", function () {
  if (Hideborder) {
    Hideborder = false;
  } else {
    Hideborder = true;
  }
  text = Hideborder.toString();
  setCard(username, theme, text, lifetext, langsLayout);
});
document.getElementById("life").addEventListener("change", function () {
  if (life) {
    life = false;
  } else {
    life = true;
  }
  lifetext = life.toString();
  setCard(username, theme, text, lifetext, langsLayout);
});

//sets the cards with all the data to the screen
function setCard(user, theme, border, life, langsLayout) {
  let langsLink = `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&theme=${theme}&hide_border=${border}&include_all_commits=${life}&count_private=false`;
  if (langsLayout != "none" && langsLayout != "hide") {
    langsLink += `&layout=${langsLayout}`;
  } else if (langsLayout == "hide") {
    langsLink += "&hide_progress=true";
  }
  document.getElementById("langs").src = langsLink;
  document.getElementById(
    "norm"
  ).src = `https://github-readme-stats.vercel.app/api?username=${user}&theme=${theme}&hide_border=${border}&include_all_commits=${life}`;
  document.getElementById(
    "three"
  ).src = `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=${theme}&hide_border=${border}`;
}

//BACKEND FUNCTIONS

//adds user's responses on the about page to the final file
function about() {
  let currworkon = document.getElementById("cwo").checked
  let collon = document.getElementById("co").checked
  let help = document.getElementById("help").checked
  let learn = document.getElementById("learn").checked
  let about = document.getElementById("ab").checked
  let reach = document.getElementById("reach").checked
  let proj = document.getElementById("proj").checked
  let blog = document.getElementById("blog").checked
  let exp = document.getElementById("exp").checked
  let funfact = document.getElementById("funfact").checked
  let final = `<center><h2>Hi 👋, I am ` + username+`</h2><br>`;
  if(currworkon) final += "🔭 I'm currently working on " + getResult("currworkon")+"<br>";
  if(collon) final += "👯 I’m looking to collaborate on " + getResult("collon") + "<br>"; 
  if (help) final += "🤝 I’m looking for help with " + getResult("help") + "<br>";
  if (learn) final += "🌱 I’m currently learning "; + getResult("learn") + "<br>";
  if (about) final += "💬 Ask me about " + getResult("ab") +"<br>";
  if (reach) final += "📫 How to reach me " + getResult("reach") + "<br>";
  if (proj) final += "👨‍💻 All of my projects are available at " + getResult("proj") + "<br>";
  if (blog) final += "📝 I regularly write articles on " + getResult("blog") + "<br>";
  if (exp) final += "📄 See my resume " + getResult("exp") + "<br>";
  if (funfact) final += "⚡ Fun fact: " + getResult("funfact") +"<br>";
  final+="</center>"
  sessionStorage.setItem("about", final)
  window.location.href="stats.html"
}
//adds cards img to the final file
function Collectcards() {
  let final = ""
  document.querySelectorAll(".imgToggle").forEach(toggle => {
    if (toggle.checked) {
      console.log(toggle.parentElement.children[1].src)
      final+=`<img src="${toggle.parentElement.children[1].src}">`
    }
  });
  final+="</center>"
  sessionStorage.setItem("cards", final)
  window.location.href = "techstack.html"
}
//saves the username the user puts in
function addUsername() {
  if (document.getElementById("username").value != "") {
    sessionStorage.setItem("username", document.querySelector(".user").value)
    window.location.href = "about.html";
  }
}