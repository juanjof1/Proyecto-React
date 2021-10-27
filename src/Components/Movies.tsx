import React from "react";
import App from "../App";

function movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/08/New-Venom-2-Poster.jpg?q=50&fit=crop&w=740&h=1096&dpr=1.5" />
        </Wrap>
        <Wrap>
          <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61116cea2313e8bae55a536a%2F-Dune-%2F0x0.jpg%3Ffit%3Dscale" />
        </Wrap>
        <Wrap>
          <img src="https://www.perthmint.com/images/product/500/5303-09-NoTimeToDie-Foil-Front-HighRes.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://lh3.googleusercontent.com/proxy/FBF9JsFZXXnj7EqgnxBCASshtTtCJuzwd7DNG09vaU3UMUf8PBbKK45IygKdwyTkPcdrGQRsjKkHm3zSPxU6kOUOfs9ZxddNSb4NXEnUhw" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default App;
