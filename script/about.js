const NavigationBar = document.querySelector(".navBar")
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
        </div>`
const FooterBar = document.querySelector(".footer")
FooterBar.innerHTML = `<div class="footerLeft"><div><img src="../resources/logo/logo.jpeg" alt="logo" /></div></div>
        <div class="footerRight">
            <div class="rightUpper">
                <ul class="upperlist1">
                    <h3>Quick Links</h3>
                    <a href="./about.html#company"><li>Company</li></a>
                    <a href="./product.html"><li>Products</li></a>
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

