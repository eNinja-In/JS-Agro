let NavigationBar = document.querySelector(".navBar")
NavigationBar.innerHTML = `<div class="navLeft"><a href="/"><h2>JS-Agro</h2></a></div>
        <div class="navCentre">
          <ul class="navigationList">
            <a href="../index.html" style=" --i: 1 "><li>Home</li></a>
            <a href="./about.html" style=" --i: 2 "><li>About</li></a>
            <a href="./product.html" style=" --i: 3 "><li>Product</li></a>
            <a href="./gallery.html" style=" --i: 4 "><li>Gallery</li></a>
            <a href="./contact.html" style=" --i: 5 "><li>Contact</li></a>
          </ul>
        </div>
        <div class="navRight">
            <ul class="navsocialLinks">
                <a href="/" style="--i: 1"><img src="../resources/logo/facebook.png" alt="facebook" /></a>
                <a href="/" style="--i: 2"><img src="../resources/logo/instagram.png" alt="instagram" /></a>
                <a href="/" style="--i: 3"><img src="../resources/logo/youtube.png" alt="youtube" /></a>
            </ul>
        </div>
        <div class=navButton>
        <div class="navBarOn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="blue"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></div>
        <div class="navBarOff"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="blue"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
        </div>`
let FooterBar = document.querySelector(".footer")
let fLogo = "logo.jpeg"
FooterBar.innerHTML = `<div class="footerLeft"><div><img src="../resources/logo/${fLogo}" alt="logo" /></div></div>
        <div class="footerRight">
            <div class="rightUpper">
                <ul class="upperlist1">
                    <h3>Quick Links</h3>
                    <a href="./about.html#company"><li>Company</li></a>
                    <a href="./about.html#team"><li>Team</li></a>
                    <a href="./gallery.html"><li>Gallery</li></a>
                    <a href="./contact.html"><li>Contact</li></a>
                </ul>
                <ul class="upperlist3">
                    <h3>Services</h3>
                    <a href="/"><li>Power weeder</li></a>
                    <a href="/"><li>Power Reaper</li></a>
                    <a href="/"><li>Delivery</li></a>
                    <a href="/"><li>Parts</li></a>
                </ul>
                <ul class="upperlist3">
                    <h3>Social Links</h3>
                    <a href="/"><li>Instagram</li></a>
                    <a href="/"><li>Youtube</li></a>
                    <a href="/"><li>FaceBook</li></a>
                    <a href="/"><li>Twitter</li></a>
                </ul>
            </div>
            <div class="rightlower">
                <ul class="HeadOffice">
                    <h3>HeadQuater</h3>
                    <li><a href="/">Phone : +918814830805</a></li>
                    <li><a href="https://mail.google.com/mail/u/0/#search/jsagroequipment%40gmail.com?compose=new" target="_blank">Email : jsagroequipment@gmail.com </a></li>
                    <li>
                        <a href="https://maps.app.goo.gl/aXuHoUXn56kX46Pz6" target="_blank">JS AGRO EQUIPMENT,<br/>Near Sonalika agency St, 8, Bhuna Rd, Fatehabad, Haryana 125050</a>
                    </li>
                </ul>
            </div>
            </div>
        `
let navBtnOn = document.querySelector(".navBarOn")
let navBtnOff = document.querySelector(".navBarOff")
let slideBar = document.querySelector(".navCentre")


navBtnOn.onclick = () => {
    navBtnOff.style = `display:flex;`
    navBtnOn.style = `display:none;`
    slideBar.style = `display:flex;`
}
navBtnOff.onclick = () => {
    navBtnOn.style = `display:flex;`
    navBtnOff.style = `display:none;`
    slideBar.style = `display:none;`
}

let whatWeDoElements = document.querySelectorAll(".whatWeDo");
whatWeDoElements.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("Clicked")
    let paragraph = element.querySelector("p");
    // Toggle between 'none' and 'flex'
    paragraph.style.display = (paragraph.style.display === "none" || paragraph.style.display === "") ? "flex" : "none";
  });
});

let mission = document.querySelectorAll(".mission li");
mission.forEach((elm) => {
    elm.addEventListener("click", () => {
      console.log("Clicked")
      let paragraph = elm.querySelector("p");
      // Toggle between 'none' and 'flex'
      paragraph.style.display = (paragraph.style.display === "none" || paragraph.style.display === "") ? "flex" : "none";
    });
  });