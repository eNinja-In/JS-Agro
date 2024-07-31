
// navigation Bar 
const NavigationBar = document.querySelector(".navBar")
NavigationBar.innerHTML = `<div class="navLeft"><a href="/"><h2>JS-Agro</h2></a></div>
        <div class="navCentre">
          <ul class="navigationList">
            <a href="./index.html" style=" --i: 1 "><li>Home</li></a>
            <a href="./pages/about.html" style=" --i: 2 "><li>About</li></a>
            <a href="./pages/product.html" style=" --i: 3 "><li>Product</li></a>
            <a href="./pages/gallery.html" style=" --i: 4 "><li>Gallery</li></a>
            <a href="./pages/contact.html" style=" --i: 5 "><li>Contact</li></a>
          </ul>
        </div>
        <div class="navRight">
            <ul class="navsocialLinks">
                <a href="/" style="--i: 1"><img src="./resources/logo/facebook.png" alt="facebook" /></a>
                <a href="/" style="--i: 2"><img src="./resources/logo/instagram.png" alt="instagram" /></a>
                <a href="/" style="--i: 3"><img src="./resources/logo/youtube.png" alt="youtube" /></a>
            </ul>
        </div>
        <div class="navButton">
        <div class="navBarOn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="blue"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></div>
        <div class="navBarOff"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="blue"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
        </div>`

// footer Bar
const FooterBar = document.querySelector(".footer")
FooterBar.innerHTML = `<div class="footerLeft"></div>
        <div class="footerRight">
            <div class="rightUpper">
                <ul class="upperlist1"></ul>
                <ul class="upperlist2"></ul>
                <ul class="upperlist3"></ul>
            </div>
            <div class="rightlower">
                <ul class="HeadOffice">
                    <h3>HeadQuater</h3>
                    <li id="companyPhone"></li>
                    <li id="companyMail"></li>
                    <li id="companyAddress"></li>
                </ul>
            </div>
        </div>`

