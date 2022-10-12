
let header = `
    <a href="index.html"><img class="logo" src="img/pizza-master-logo.png" alt=""></a>
    <!-- Hamburger icon -->
    <input class="side-menu" type="checkbox" id="side-menu" />
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
    <!-- Menu -->
    <nav class="nav">
        <ul class="menu">
            <li><a href="index.html">HISTORIA</a></li>
            <li><a href="variedades.html">VARIEDADES</a> </li>
            <li><a href="contacto.html">CONTACTO</a></li>
        </ul>
    </nav>
`
document.getElementById("idheader").innerHTML = header

footer = `
    <div class="footer-social-media">
        <a href="https://www.instagram.com/xxx/"><i id="instagram" class="fab fa-instagram "></i></a>
        <a href="https://www.facebook.com/xxx"><i id="facebook" class="fab fa-facebook "></i></a>
        <a href="https://wa.me/5491133333333"><i id="whatsapp" class="fab fa-whatsapp "></i></a>
    </div>
`
document.getElementById("idfooter").innerHTML = footer