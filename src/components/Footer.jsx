import React, { useContext } from "react";
import AppContext from "../AppContext";

function Footer() {
    const { setLikeCount, setSize  } = useContext(AppContext);

  return (
    <footer className="footer">
      <p>
        This is the footer.{" "}
        <button onClick={() => setSize(30)}>
          Make the text 30px but leave the color the same
        </button>
      </p>
      <p>
        <button onClick={() => setLikeCount(prev => prev + 1)}>
          Like The Page
        </button>
      </p>
    </footer>
  );
}

export default Footer;
