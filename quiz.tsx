
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Result from './result/Result';
export default function Radios(props: { questions: any[] }) {
    let { questions } = props
    const [ind, setInd] = useState(0)
    const [showresult, setShowresult] = useState(false)
    const [score, setScore] = useState(0)
    const [clickoption, setClickoption] = useState("")
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setClickoption(event.target.value);

    };

    let updateScore = () => {
        if (clickoption == questions[ind].correctAnswer) {
            setScore(score + 1)
        }
    }

    let changeQus = () => {
        updateScore()
        if (ind < questions.length - 1) {
            setInd(ind + 1)

        }
        else {
            setShowresult(true)
        }

    }
    let clearAll = ()=>{
        setScore(0)
        setInd(0)
        setShowresult(false)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


    };
    let indexVal = ind;

    return (
        <>
                <Box style={{ textAlign: "center" ,backgroundColor:"lightcyan",width: "50%" ,height:"50%", margin: "auto",padding:"40px"}}>
            {

                showresult ? (<Result tryAgain={clearAll} score={score} />)
                    : (<form onSubmit={handleSubmit}>
                        <FormControl variant="standard">
                            <FormLabel id="demo-error-radios">{indexVal+1} of {questions.length}</FormLabel>
                            <Box sx={{ marginTop: "5px" }} >{questions[indexVal].question}</Box>
                            {
                                // questions.map((x,i)=>
                                
                                // )
                            }
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                // value={"value"}
                                onChange={handleRadioChange}
                                >
                                {
                                    questions[indexVal].options.map((x: string, i: number) =>
                                    
                                    <FormControlLabel key={i} value= {x} control={<Radio />} label= {x} />
                                    
                                    )
                                }
                            </RadioGroup>
                            <Button onClick={() => changeQus()} sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                                next
                            </Button>
                        </FormControl>
                    </form>)
            }
                                </Box>
        </>
    );
}


// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// export default function RadioButtonsGroup() {
//     return (
//         <FormControl>
//             <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//             <RadioGroup
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 defaultValue="female"
//                 name="radio-buttons-group"
//             >
//                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//                 <FormControlLabel value="other" control={<Radio />} label="Other" />
//             </RadioGroup>
//         </FormControl>
//     );
// }