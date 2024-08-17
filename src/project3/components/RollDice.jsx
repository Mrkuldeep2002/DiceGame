import styled from "styled-components";

const RollDice = ({currentdice,rotatemDice}) => {

  

  return (
    <DiceContainer>
        <div className="dice" onClick={rotatemDice}>
             <img src={`images/dice/dice_${currentdice}.png`}/>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
  `