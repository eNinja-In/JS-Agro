let navBtnOn = document.querySelector(".navBarOn")
let navBtnOff = document.querySelector(".navBarOff")
let slideBar = document.querySelector(".navCentre")
let footerlogo = document.querySelector(".footerLeft")
let footerQuickLinks = document.querySelector(".upperlist1")
let footerServicesLinks = document.querySelector(".upperlist2")
let footerSocialLinks = document.querySelector(".upperlist3")
let fCopyRight = document.querySelector(".footerCopyRight")
let companyPhone = document.querySelector("#companyPhone")
let companyMail = document.querySelector("#companyMail")
let companyaddress = document.querySelector("#companyAddress")

instaLink = ""
youtubeLink = ""
facebookLink = ""
twitterLink = ""
fLogo = "logo.jpeg"

footerlogo.innerHTML = `<div><img src="./resources/logo/${fLogo}" alt="logo" /></div>`
companyPhone.innerHTML = `<a href="/">Phone : +918814830805</a>`
companyMail.innerHTML = `<a href="https://mail.google.com/mail/u/0/#search/jsagroequipment%40gmail.com?compose=new" target="_blank">Email : jsagroequipment@gmail.com </a>`
companyaddress.innerHTML = `<a href="https://maps.app.goo.gl/aXuHoUXn56kX46Pz6" target="_blank">JS AGRO EQUIPMENT,<br/>Near Sonalika agency St, 8, Bhuna Rd, Fatehabad, Haryana 125050</a>`
footerQuickLinks.innerHTML = `<h3>Quick Links</h3>
                    <a href="./pages/about.html#company"><li>Company</li></a>
                    <a href="./pages/about.html#team"><li>Team</li></a>
                    <a href="./pages/gallery.html"><li>Gallery</li></a>
                    <a href="./pages/contact.html"><li>Contact</li></a>`

footerSocialLinks.innerHTML = `<h3>Social Links</h3>
                    <a href="${instaLink}"><li>Instagram</li></a>
                    <a href="${youtubeLink}"><li>Youtube</li></a>
                    <a href="${facebookLink}"><li>FaceBook</li></a>
                    <a href="${twitterLink}"><li>Twitter</li></a>`

footerServicesLinks.innerHTML = `<h3>Services</h3>
                    <a href="/contact.html"><li>Power weeder</li></a>
                    <a href="/"><li>Power Reaper</li></a>
                    <a href="/"><li>Delivery</li></a>
                    <a href="/"><li>Parts</li></a>`

fCopyRight.innerHTML = `<p>Copyright ©: eNinja-In 2024</p>`




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