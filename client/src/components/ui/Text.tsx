import React, { ReactNode } from "react";
import styled from "styled-components";

type TextProps = {
  children: ReactNode;
};

export default function Text({ children }: TextProps) {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
}

const Container = styled.div`
  p {
    margin: 16px 0 0;

    @media only screen and (min-width: 1200px) {
      margin-top: 24px;
    }
  }
`