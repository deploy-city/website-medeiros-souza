import React from "react";

import { Container } from "./styles";

function SideTag({ side, children }) {
  return (
    <Container className="side-tag" side={side}>
      {children}
    </Container>
  );
}

export default SideTag;
