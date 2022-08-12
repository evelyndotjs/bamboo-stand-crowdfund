import React from "react";
import styled from "styled-components";
import MainPledge from "./MainPledge";

const Container = styled.div`
  width: 80%;
  height: 800px;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px auto;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  padding: 20px 40px;
`;

const Text = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: hsl(0, 0%, 48%);
  padding: 0 40px;
  line-height: 1.5;
`;

export default function About() {
  return (
    <>
      <Container>
        <Title>About this project</Title>
        <Text>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while working, helping you stay
          focused on the task at hand.
        </Text>
        <Text>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          stucks to be stored under the stand.
        </Text>
        <MainPledge />
      </Container>
    </>
  );
}
