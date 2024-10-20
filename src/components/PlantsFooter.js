import React from "react";
import "./PlantsFooter.css"; // Assuming you are using a separate CSS file for styles

const PlantsFooter = () => {
  return (
    <div className="plants-footer">
      {/* Main Container */}
      <div className="footer-main-container">
        {/* First Section */}
        <div className="first-section">
          {/* Subscription Section */}
          <div className="subscription-container">
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p>
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necessitatibus enim
            </p>
            <div className="input-button-container">
              <div className="input-box">
                <input type="email" placeholder="Enter your email address" />
              </div>
              <button className="subscribe-button">SUBSCRIBE</button>
            </div>
          </div>

          {/* About Us Section - Repeat 3 times */}
          <div className="about-us-container">
            <h2>ABOUT US</h2>
            <div className="about-links">
              <p>Our Story</p>
              <p>Blogs</p>
              <p>Careers</p>
              <p>Contact Us</p>
              <p>Help & Support</p>
            </div>
          </div>
          <div className="about-us-container">
            <h2>OUR SERVICES </h2>
            <div className="about-links">
              <p>Book Maali</p>
              <p>Plant Day Care</p>
              <p>Rent Plants</p>
              <p>Plants & Pots</p>
              <p>Gardening Tools</p>
            </div>
          </div>
          <div className="about-us-container">
            <h2>USEFUL LINKS</h2>
            <div className="about-links">
              <p>My Account</p>
              <p>Orders & Returns</p>
              <p>Track Order</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Return, Refund & Replacement Policy</p>
            </div>
          </div>
          <div className="about-us-container">
            <h2>GET IN TOUCH</h2>
            <div className="about-links address">
              <p>
                Address: F-262, First Floor,
                <br /> Sushant Lok Phase-III,
                <br />
                Sector-57,Gurgaon,
                <br /> Haryana, India 122003
                <br /> Call:
                <br />
                +919958287272
                <br />
                Email:
                <br />
                care@chaperoneplants.com
                <br />
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="second-section">
          <h2>CHAPERONE</h2>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis...
          </p>
          <h2 className="heading">Follow us on</h2>
          <div className="social-icons">
            <img
              src="https://s3-alpha-sig.figma.com/img/c84d/c1af/7f493eeb470e8de670f38cfd96f7f380?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBvRugKU9fRgKxU8Pnz0bs3gKtMYK~LMtZb-sxhLfFayg9Ag4iXO9p9RGMK5e5gcgIfubsi7bKxD5~-QwXF9Sl4SX~OuJ9n-~r2XX1SedaSIRoqa-7hBIGRV6s8olsBAV8GQp8nkjYf2In8Z-jwS0viFBvyshkfxZVzq7g28WTQhHeZeB63pEJD5LnnFAmmAQP3au0jgMDiRkW3ZEOs-tquWUv1eJXUW9Ym4H2efn~~UHtH4YL3Q81xpOGAxEjsA1o-wLuar1jRapYOzgvHBzkiJvfl7H9kevExYn8sjsTz0S-zc-4nrUGb~YKJjhXHRsSsOVg0JA-8-5pV1smm6cg__"
              alt="Instagram"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/4b5e/8bfb/6b93070272b75e9982142098a3f6d248?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h6wvp9WKgMTKKuXv8oD-WDgGj12Abv5oyrSHMsD72UdIPe35FRPlJhFvEOXvFJj5g380QPG8DdKCjEHUiEJgumMbVKY2vFrb5m3GIvdelI6nnuZvObCFKdHg-JnuEq4NcAgYq4Pv2ZFL-nxsk0ILJSbOAIHtm2OJFe9kkFbgeW9IH47j4BFLSWW3ckI4muTraMiR7ZbSyxyFGfdbfh8DPpA1tUPXWPKtOfzMrNoeHk8x28eOVk~15YYO6TVD~e3wH01DuIYFghphmATI4PPf91iEWOube1lUdvVePkJRcCNYQBX3Vn4ELjLiTwQFlIv8FIpnhfMaey6wTmXj14qhgg__"
              alt="Facebook"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/3ea3/b018/661f7cac5be403338d9e51ce045520d1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FPx6-sQyWnr09Yifi7uE9TGvuIWyeVHmmVBjy038T4yZBjx8B4e1Ezxf5T-Wf4ySYdCtxkXh3XKQ7lygm0qFCWvgGFJV2QM0HK-EzAChWZOF7-XVsNsPBgnTDoMJTgW67BGux2NjmNSVmzMFhzXfmuoIw304w9cPSK62frnHwMsMZhNWrpky8r1yMv8g9NZimesfFLFk1wAlvwZfRsK7viGm0yFhZz9b0-tMXnjuROTfjFu5dqsxug4YphW6gZB9zC9~9CBySgh4vZ0abyMDssub8r1~PUe8s8DZYDDie4a6XIdbxSLUJ15eqotnlVzyoikOVuCuAVoAyQqFYAGn~w__"
              alt="Threads"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/b47e/a275/df8eacd4bd4685ff2d34159351ac3113?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lyc9z0i9hr1-fbA4CgUGsIgpyDCA0cies~zaZdXvOlOaca7-a2LASv5uS7U9jbrlikWCY5tzctWEf8DyXN68CWvJnk2RNFjGolciZzAi7kbwpKwWnL4ClSBcT4gLSc0uQwjGEAxSi7zBXpL7pD61MqVZte~V~y8d~K45LX22~x1yXn1edawaPHXHVcSg4rAluxVekNRSZGzIDKW5myv8-To4q3gCSNyvcfLV2AAnRrJCNfHftOEM2nbBR0hmTuekEu5t9jIRBhRX8STyf7v8M2HY9nOwKFkDZV3-U3V1n~9D26felA1FBxM6RrMNWCy0eBJXvwzMvnhRM~ySv4sitQ__"
              alt="Youtube"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/876c/7318/8c3b49078085845b75d9d69eb409ff3b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GhV7l1whPqoLVfR0CK3nLQdkMLcrEnVtm~yjXATD2Pkr6axZ5u3AJtPjTPWf5FmaZGIwX4vDAMiv8iAedoiST4IqukX0w4oy8cr8ABMHd6gWR22m635GOXVXzEVXSppUMnoEo5Hu-1Lb-cScEZHhIRMGacqVokDLatwMn2bQLijHaLV9xqJuyPQLlgzPRqvg-8qWdkf3XWnS0YTaENhH53wxpZ1-jDpV9P-rnMr9gojTwvOgkd~peRdBmujKY9YL4oeyG2eANqfiPgvWvHswopV9NWZxpW6euqsmNrGrfB5WowAeO-3QIwMYmgragPHgoy52W0HPKT3g8SXlYHR9OQ__"
              alt="linkedin"
            />
            {/* Add your social icons here */}
          </div>
          <p>© 2023, chaperone.com All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PlantsFooter;
