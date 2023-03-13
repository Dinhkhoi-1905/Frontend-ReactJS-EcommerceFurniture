import { Button } from "@mui/material";

const RefreshCart = ({cartState, handleSetCart}) =>{
    console.log(cartState);
    // const handleClick = () => {
    //     console.log(handleSetCart);
    //     return handleSetCart;
    // };
    return (
        <Button onClick={handleSetCart}>{cartState.toString()}</Button>
    );
};
export default RefreshCart;