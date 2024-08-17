import styled from "styled-components";

const Home = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png" />
      </div>
      <div className="content">
         <h1>Dice Game</h1>
        <Button onClick={ toggle }>PLay NOw</Button>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
    width: 220px;
    font-size:16px ;
    text-align: center;
    padding: 10px 18px;
    border-radius: 5px;
    border: 1px solid transparent;
    background: #000;;

    &:hover{
    border: 1px solid black;
    background: #fff;
    color: #000;
    transition: 0.4s all ease;
    }

`;