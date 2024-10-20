import React from "react";
import "./Buttons.css"; // Import the CSS for styling

const Buttons = () => {
  return (
    <div>
      <div className="buttons-container">
        <button className="plants-button">
          <span>Plants</span>
        </button>
        <button className="pots-button">
          <span>Pots</span>
        </button>
      </div>
      <p className="description-text">
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>
      <h2 className="nursery-heading">Nursery</h2> {/* Added heading */}
    </div>
  );
};

export default Buttons;
