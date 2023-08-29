 import { Button } from "@mui/material";
import { Box } from '@mui/material';

 export default function Result(props : {score : number, tryAgain : any}){

    return<>
<Box>
your score is {props.score} 

</Box>
    <Button onClick={props.tryAgain}>Try Again</Button>
    </>

} 

