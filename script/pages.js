export function Home(){
    return`
        <div class="homeSection">
        <div class="homeUpper">
            <div class="homeUpperLeft">
                <h2>Welcome to JS-Agro Equipment</h2>
                <h3>Discover the Future of Farming</h3>
                <p>At JS Agro Equipment, we are dedicated to revolutionizing agriculture with innovative solutions. Established in 2020, our mission is to empower farmers and agricultural businesses with cutting-edge equipment and technology. We believe in enhancing productivity, sustainability, and efficiency through our state-of-the-art products and exceptional customer service.</p>
                <button>Know More</button>
            </div>
            <div class="homeUpperRight">
                <div class="upperRightDiv">
                    <img src="./resources/assets/tracter.png" alt="tracter" />
                </div>
            </div>
        </div>
        <div class="homeMain"></div>
        <div class="homeLower"></div>
    </div>
    `;
}
export function About(){
    return `
    <div class="About">
    <div class="AboutLeft">
        <ul class="aboutList">
            <a href="#company"><li>Company</li></a>
            <a href="#history"><li>What we do</li></a>
            <a href="#team"><li>Team</li></a>
            <a href="#mission"><li>Mission</li></a>
            <!-- {/* <a href="#social"><li>Social</li></a> */" -->
        </ul>
    </div>
    <div class="AboutRight">
        <h1>JS-Agro Equipments</h1>
        <div class="intro" id="company">
            <h2>About Company</h2>
            <div>
            <p>Founded by Rakesh Painshia in 2020, JS-Agro Equipment is an innovative agriculture company based in Fatehabad. We specialize in creating advanced gadgets and tech products designed to enhance agricultural practices. Our mission is to provide high-quality, reliable equipment that boosts productivity and efficiency for farmers.<br/><br/>At JS-Agro Equipment, we understand the challenges of modern farming and are dedicated to developing solutions that address these needs. Our products range from advanced machinery to state-of-the-art irrigation systems, all aimed at optimizing various farming processes. Our team of skilled professionals is passionate about agriculture and committed to providing exceptional service and support.</p>
            <img src="../resources/logo/founder.jpeg" alt="Founder Rakesh Ji" />
            </div>
        </div>
        <div class="overview" id="history">
            <h3>What We Do:</h3>
            <p>
                <h4>Products and Services:</h4>
                We provide a wide range of agriculture equipment, including tractors, harvesters, irrigation systems, and more. Our team works diligently to ensure each product meets the highest standards of performance and durability.</p>
            <p>
                <h4>Collaborative Teamwork:</h4>
                At JS-Agro, we believe in the power of collaboration. Our team consists of skilled professionals dedicated to providing exceptional service and support to our customers.</p>
            <p>
                <h4>Community Support:</h4>
                We are committed to giving back to the farming community. Through various initiatives and programs, we strive to support farmers and promote sustainable agricultural practices.</p>
        </div>
        <div class="team" id="team">
            <h3>Team</h3>
            <h4>Co-Founders: Kuldeep and Vipin</h4>
            <ul>
                <li>
                <p>
                <h4>Kuldeep - Import-Export and Management:</h4><br/>
                Kuldeep, one of our dedicated co-founders, oversees the import-export department and excels as a manager. His expertise in global trade and logistics ensures that our products reach farmers efficiently and reliably. Kuldeep's leadership and organizational skills are vital to the smooth operation of our supply chain, helping us maintain high standards and timely deliveries.</p>
                <img src="../resources/logo/coFounder0.jpeg" alt="CO-Founder Kuldeep Ji" />
                </li>
                <li>
                    <p>
                    <h4>Vipin - Customer Service and Accounts:</h4><br/>Vipin, our other co-founder, is in charge of the customer service and accounts departments. He is committed to providing exceptional support to our customers, addressing their needs and ensuring their satisfaction. Vipin also manages our financial operations, ensuring that our accounts are handled with precision and transparency. His dual focus on customer relations and financial management is essential to our company’s success.</p>
                    <img src="../resources/logo/coFounder1.jpeg" alt="CO-Founder Vipin Ji" />
                </li>
            </ul>
        </div>
        <div class="mission" id="mission">
            <h3>Our Mission</h3>
            <p>At JS-Agro Equipment, our mission is to provide the best and most affordable products to farmers worldwide. We are dedicated to innovating new products that help farmers, with a special focus on the needs of Indian farmers. Our goal is to enhance agricultural productivity and sustainability by delivering high-quality equipment that meets the diverse needs of modern farming.</p>
            <h4>Why Choose JS-Agro?</h4>
            <ul>
                <li>
                    <h4>Innovative Products:</h4>
                    <p>We continuously innovate to bring the latest and most effective agricultural solutions to market.</p>
                </li>
                <li>
                    <h4>Affordability:</h4>
                    <p>Our products are designed to be cost-effective, ensuring that farmers can access high-quality equipment without breaking the bank.</p>
                </li>
                <li>
                    <h4>Global Reach:</h4>
                    <p>We serve farmers around the world, ensuring that our solutions are available wherever they are needed.</p>
                </li>
                <li>
                    <h4>Focus on Indian Farmers:</h4>
                    <p>We have a deep understanding of the challenges faced by Indian farmers and tailor our products to meet their specific needs.</p>
                </li>
                <li>
                    <h4>Reliable Supply Chain:</h4>
                    <p>With Kuldeep handling our import-export operations, we guarantee timely delivery and reliable supply of our products.</p>
                </li>
            </ul>
        </div>
        <div class="SocialLinks" id="social"></div>
    </div>
</div>
`;
}