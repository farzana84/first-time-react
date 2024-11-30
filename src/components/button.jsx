const style ={
    button: {
        backgroundColor:"hotpink",
        color:"black"
    }
}


export default function Button(props){
    console.log(props);
    
    return (
        <button style = {style.button}>
            {props.children}
        </button>
    )
}