import React from "react";

const topRow = ['q','w','e','r','t','y','u','i','o','p']
const letterArray = ['h', 'e', 'l', 'l', 'o']

export default function Main({chosenLetter, setChosenLetter}) {
    const letterClickHandler = React.useCallback(
        (letter) => () => {
          if (chosenLetter.length > 4) {
            return;
          }
    
          setChosenLetter((letters) => [...letters, letter]);
        },
        [chosenLetter]
      );

      return (

        <div>
             <div className="letterContainerWrapper">
                 {letterArray.map((letter, idx) => {
                  return (
                    <div className="letterContainer">
                        {chosenLetter.join(" ")}
                    </div>
                )    
                })}
            </div>
        <div className="keyboardContainer">
            <div className="topRow">
                    {topRow.map(letter => {
                    return (
                        <button
                            onClick={letterClickHandler(letter)}
                            className="keyContainer">
                            {letter}
                        </button>
                    )
                })}
            </div>
        </div>
    </div>
)}

//return (
    //     <div>
    //         <div className="letterContainerWrapper">
    //             {letterArray.map((letter, idx) => {
    //               return (
    //                 <div className="letterContainer">
    //                     {chosenLetter}
    //                 </div>
    //             )    
    //             })}
    //         </div>

    //         <div className="keyboardContainer">
    //             <div className="topRow">
    //                 {topRow.map(letter => {
    //                     return (
    //                         <button
    //                             onClick={() => setChosenLetter((letters) => [...letters, letter])}
    //                             className="keyContainer">
    //                             {letter}
    //                         </button>
    //                     )
    //                 })}
    //             </div>
    //         </div> 
    //     </div>
    // )