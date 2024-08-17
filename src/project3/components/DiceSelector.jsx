
import styled from "styled-components";

const DiceSelector = ({error, seterror , selectednumber,setselectednumber}) => {
        const dice = [1,2,3,4,5,6];
      
      const errorHandler=(item)=>{
        setselectednumber(item)
        seterror("");
      }  ;

        return (
            <NumberSelectorContainer>
        <p className="error">{error}</p>  
      <div className="flex">
        {dice.map((item, index)=>{
            return(
                <>
                <Box isSelected={item==selectednumber}
                key={index} onClick={()=>errorHandler(item)}>
                    {item}</Box>
                </>
            )
        })}
              </div>
              <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default DiceSelector;


const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
