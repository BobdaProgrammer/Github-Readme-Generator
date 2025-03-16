
//VARIABLES
let username = "BobdaProgrammer";
let life = false;
let lifetext = "false";
let theme = "radical";
let Hideborder = false;
let Hidebackground = false;
let text = "false";
let langsLayout = "compact";
let margin = 4;
let links = {
  "buymeacoffee": "https://buymeacoffee.com/",
  "patreon": "https://patrion.com/",
  "paypal": "https://paypal.me/",
  "kofi": "https://ko-fi.com/",
  "reddit": "https://reddit/u/",
  "behance": "https://behance.net/",
  "discord": "https://discord.com/invite/",
  "facebook": "https://facebook.com/",
  "insta": "https://instagram.com/",
  "linkedIn": "https://linkedin.com/in/",
  "medium": "https://medium.com/@",
  "pinterest": "https://pintrest.com/",
  "youtube":"https://youtube.com/@",
  "X":"https://x.com/@",
  "stackoverflow":"https://stackoverflow.com/users/",
  "twitch":"https://twitch.tv/",
  "tiktok":"https://tiktok.com/@",
  "codepen":"https://codepen.io/",
  "mastodon":"https://mastodon.social/@",
  "quora":"https://quora.com/profile/",
    "github": "https://github.com/",
    "leetcode": "https://leetcode.com/u/",
  "email":"mailto:",
  "threads": "https://www.threads.net/@",
}

let linkbadges = {
  "buymeacoffee": "https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black",
  "patreon": "https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white",
  "paypal": "https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white",
  "kofi": "https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white",
  "reddit": "https://img.shields.io/badge/Reddit-%23FF4500.svg?logo=Reddit&logoColor=white",
  "behance": "https://img.shields.io/badge/Behance-1769ff?logo=behance&logoColor=white",
  "discord": "https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white",
  "facebook": "https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white",
  "insta": "https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white",
  "linkedIn": "https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white",
  "medium": "https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white",
  "pinterest": "https://img.shields.io/badge/Pinterest-%23E60023.svg?logo=Pinterest&logoColor=white",
  "youtube":"https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white",
  "X":"https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white",
  "stackoverflow":"https://img.shields.io/badge/-Stackoverflow-FE7A16?logo=stack-overflow&logoColor=white",
  "twitch":"https://img.shields.io/badge/Twitch-%239146FF.svg?logo=Twitch&logoColor=white",
  "tiktok":"https://img.shields.io/badge/TikTok-%23000000.svg?logo=TikTok&logoColor=white",
  "codepen":"https://img.shields.io/badge/CodePen-black?&logo=codepen&logoColor=white",
  "mastodon":"https://img.shields.io/badge/-MASTODON-%232B90D9?logo=mastodon&logoColor=white",
  "quora":"https://img.shields.io/badge/Quora-%23B92B27.svg?logo=Quora&logoColor=white",
  "email":"https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white",
  "github": "https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white",
  "leetcode": "https://img.shields.io/badge/LeetCode-000000?logo=LeetCode&logoColor=#d16c06",
  "threads": "https://img.shields.io/badge/Threads-000000?logo=Threads&logoColor=white",
}

//HELPER FUNCTIONS
function getResult(name) {
  let i = 1;
  let res = ""
  if (document.querySelectorAll("." + name).length > 1&&document.querySelectorAll("." + name)[1].value != "") {
      document.querySelectorAll("." + name).forEach(answer => {
        if (i == 1) {
          res += ("<a href=''>" + answer.value + "</a>")
        } else {
          res = (res.slice(0, 9) + answer.value + res.slice(9, res.length))
        }
        i++
      })
      if (i == 2) {
        res = document.querySelector("." + name).value
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

function setTrophy(trophy, username, theme, Hideborder, Hidebackground,margin) {
  trophy.src = `https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme}&no-bg=${Hidebackground}&no-frame=${Hideborder}&margin-w=${margin}`;
}

function copyMarkdown(){
    let text = document.querySelector(".container").children[0].innerHTML
    navigator.clipboard.writeText(text)
    var x = document.getElementById("toaster");
    x.className = "show";
    var y = document.getElementById("copy")
    y.className="click"
    setTimeout(function(){ y.className = y.className.replace("click", ""); }, 1500);
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
}

function TheFinalPiece() {
  let codeArea = document.querySelector(".container").children[0];
  let about = localStorage.getItem("about");
  let stats = localStorage.getItem("cards")
  let addons = localStorage.getItem("addons");
  let social = localStorage.getItem("social");
  let donate = localStorage.getItem("donate");
  let techstack = localStorage.getItem("techstack");
  console.log(about, addons, social, donate, techstack);
  let final = "<div align='center'>";
  if (about != "") { final += about+"<br><br>" }
  if (addons != "") {
    addons = addons.replace(
      /<img/g,
      "<img style='max-width:90%; display:block;'"
    );
    final += addons;
  }
  if (stats != "") {
    stats = stats.replace(
        /<img/g,
        "<img style='max-width:90%; display:block;'"
    );
    final += "<h1>My Github Stats:</h1><div align='none'>" + stats+"</div>";
  }
  if (techstack != "") {
    final += "<h1>My Techstack:</h1>" + techstack;
  }
    if (social != ""){
        social = JSON.parse(social)
        if(social!={}){
            let socialsHTML = "<h1>Socials:</h1>"
            for(let [account, value] of Object.entries(social)){
                let finalLink = links[account]+value
                let badge = linkbadges[account]
                socialsHTML += `<a href="${finalLink}"><img src="${badge}" style="display: flexbox; margin-left: 2px;"></a>`
            }
            final+=socialsHTML
        }
    }
    if (donate != ""){
        donate = JSON.parse(donate)
        if(donate!={}){
            let donateHTML = "<h1>Consider Donating!</h1>"
            for(let [account, value] of Object.entries(donate)){
                let finalLink = links[account]+value
                let badge = linkbadges[account]
                donateHTML += `<a href="${finalLink}"><img src="${badge}" style="display: flexbox; margin-left: 2px;"></a>`
            }
            final+=donateHTML
        }
    }
  final+="</div>"
  console.log(final)
  codeArea.innerHTML = final
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
  if (window.location.pathname == "/ending.html") {
    TheFinalPiece();
  }
  else if (window.location.pathname == "/stats.html") {
    document.getElementById("border").addEventListener("change", function () {
      if (Hideborder) {
        Hideborder = false;
      } else {
        Hideborder = true;
      }
      text = Hideborder.toString();
      setCard(username, theme, text, lifetext, langsLayout);
    });
    username = localStorage.getItem("username")
    setCard(username, theme, text, lifetext, langsLayout)
    document.querySelectorAll(".stat").forEach(stat => {
      stat.style.display = "inline-flex"
    })
  }
  else if (window.location.pathname == "/techstack.html") {
    document.getElementById("stack").addEventListener("change", function (event) {
      var stackTheme = event.target.value;
      document.querySelectorAll(".lang").forEach(lang => {
        //https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white
        let src = lang.src.split("style=");
        //["https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?", "for-the-badge&logo=Apache+Groovy&logoColor=white"]
        let style = src[1].split("&");
        //["for-the-badge","logo=Apache+Groovy","logoColor=white"]
        style = style.slice(1, style.length);
        let newString = src[0] + `style=${stackTheme}&` + style.join("&");
        console.log(newString);
        lang.src = newString;
      });
    })
  }
  else if (window.location.pathname == "/additional.html") {
    document.getElementById("border").addEventListener("change", function () {
      if (Hideborder) {
        Hideborder = false;
      } else {
        Hideborder = true;
      }
            setTrophy(trophy, username, theme, Hideborder, Hidebackground, margin);
    });
    document.getElementById("margin").oninput = function () {
      margin = this.value;
      setTrophy(trophy, username, theme, Hideborder, Hidebackground, margin);
    }
        document
          .getElementById("background")
          .addEventListener("change", function () {
            if (Hidebackground) {
              Hidebackground = false;
            } else {
              Hidebackground = true;
            }
            setTrophy(trophy, username, theme, Hideborder, Hidebackground,margin);
          });
    let trophy = document.getElementById("trophy")
    trophy.src = `https://github-profile-trophy.vercel.app/?username=${username}&theme=radical&no-bg=false&no-frame=false&margin-w=4`;
    trophy.alt = username
    document.getElementById("trophytheme").addEventListener("change", function (event) {
      theme = event.target.value
      setTrophy(trophy, username, theme, Hideborder, Hidebackground,margin);
    });
    document.getElementById("quotetheme").addEventListener("change", function (event) {
      let src = document.getElementById("quote").src;
      src = src.split("&")[0] + "&theme=" + event.target.value;
      document.getElementById("quote").src = src;
    });
    document.getElementById("vert").addEventListener("click", function (event) {
      let ischecked = event.target.checked;
      let src = document.getElementById("quote").src;
      if (!ischecked) {
        document.getElementById("quote").src = src.split("?")[0] + "?type=horizontal&theme=" + document.getElementById("quotetheme").value;
      }
      else {
                document.getElementById("quote").src =
                  src.split("?")[0] +
                  "?type=vertical&theme=" +
                  document.getElementById("quotetheme").value;
      }
    });
  }
});

function finishHim() {
  let final = "";
  if (document.getElementById("usetrophy").checked) {
    let trophy = document.getElementById("trophy").src;
    final += `<img src="${trophy}"><br>`
  }
  if (document.getElementById("usequotes").checked) {
    let quote = document.getElementById("quote").src;
    final += `<h1>Random dev quote:</h1><img src="${quote}"><br>`;
  }
  localStorage.setItem("addons", final)
  window.location.href = "ending.html";
}

//updates github profile cards to user's preferances
document.getElementById("topLang").addEventListener("change", function (event) {
  langsLayout = event.target.value;
  setCard(username, theme, text, lifetext, langsLayout);
});
document.getElementById("theme").addEventListener("change", function (event) {
  theme = event.target.value;
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
  let extra = document.getElementById("extra").checked
  let final = `<div align="center"><h2>Hi 👋, I am ` + username+`</h2><br>`;
  if(currworkon) final += "🔭 I'm currently working on <strong>" + getResult("currworkon")+"</strong><br>";
  if(collon) final += "👯 I’m looking to collaborate on <strong>" + getResult("collon") + "</strong><br>"; 
  if (help) final += "🤝 I’m looking for help with <strong>" + getResult("help") + "</strong><br>";
  if (learn) final += "🌱 I’m currently learning <strong>" + getResult("learn") + "</strong><br>";
  if (about) final += "💬 Ask me about <strong>" + getResult("ab") +"</strong><br>";
  if (reach) final += "📫 How to reach me <strong>" + getResult("reach") + "</strong><br>";
  if (proj) final += "👨‍💻 All of my projects are available at <strong><a href='"+getResult("proj")+"'>" + getResult("proj") + "</a></strong><br>";
  if (blog) final += "📝 I regularly write articles on <strong><a href='"+getResult("blog")+"'>" + getResult("blog") + "</a></strong><br>";
  if (exp) final += "📄 See my resume <strong><a href='"+getResult("exp")+"'>" + getResult("exp") + "</a></strong><br>";
  if (funfact) final += "⚡ Fun fact: <strong>" + getResult("funfact") + "</strong><br>";
  if (extra) final += document.querySelector(".extra").value;
  final+="</div>"
  localStorage.setItem("about", final)
  window.location.href="stats.html"
}
//adds cards img to the final file
function Collectcards() {
  let final = ""
  document.querySelectorAll(".imgToggle").forEach(toggle => {
    if (toggle.checked) {
      final+=`<img src="${toggle.parentElement.children[1].src}">`
    }
  });
  final+="</center>"
  localStorage.setItem("cards", final);
  window.location.href = "techstack.html";
}

//save the social media accounts
function socialmedia() {
  let final = {};
  document.querySelectorAll(".social").forEach(social => {
    if (social.children[0].value != "") {
      final[social.id]=social.children[0].value;
    }
  });
  console.log(final);
  localStorage.setItem("social", JSON.stringify(final))
  window.location.href = "donate.html"
}

//save donation account usernames
function donate() {
  let final = {

  };
  document.querySelectorAll(".donate").forEach(donateAcc => {
    if (donateAcc.children[0].value != "") {
      final[donateAcc.id] = donateAcc.children[0].value;
    }
  })
  localStorage.setItem("donate", JSON.stringify(final))
  console.log(final)
  window.location.href = "additional.html";
}

//save the tech stack to local storage
function TechStack() {
  let final = "";
  document.querySelectorAll(".lang").forEach(lang => {
    let color = lang.style.border;
    console.log(color);
    if (color == "2px solid rgb(0, 255, 110)") {
        final += `<img style="display: flexbox; margin-left: 2px" src="${lang.src}">`
    }
  });  
  localStorage.setItem("techstack", final);
  window.location = "socialmedia.html";
}

//saves the username the user puts in
function addUsername() {
  if (document.getElementById("username").value != "") {
    localStorage.setItem("username", document.querySelector(".user").value)
    window.location.href = "about.html";
  }
}
