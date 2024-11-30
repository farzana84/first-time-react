const style = {
    h1: {
        
        fontSize: "2rem",
        ...dims
    },
    h2: {
        
        fontSize: "1rem",
        ...dims
    }
}
/*export default function Heading(props) {
    if (props.level == "1") return (<h1 style={style.h1}>{props.children}</h1>)
    if (props.level == "2") return (<h2 style={style.h2}>{props.children}</h2>)
    if (props.level == "3") return (<h3 style={style.h3}>{props.children}</h3>)
    if (props.level == "4") return (<h4 style={style.h4}>{props.children}</h4>)
    if (props.level == "5") return (<h5 style={style.h5}>{props.children}</h5>)
    if (props.level == "6") return (<h6 style={style.h6}>{props.children}</h6>)
}*/
/*export default function Heading({level, children, style: dims}) {
    if (level == "1") return (<h1 style={{...style.h1, ...dims}}>{children}</h1>)
    if (level == "2") return (<h2 style={{...style.h2, ...dims}}>{children}</h2>)
    if (level == "3") return (<h3 style={{...style.h3, ...dims}}>{children}</h3>)
    if (level == "4") return (<h4 style={{...style.h4, ...dims}}>{children}</h4>)
    if (level == "5") return (<h5 style={{...style.h5, ...dims}}>{children}</h5>)
    if (level == "6") return (<h6 style={{...style.h6, ...dims}}>{children}</h6>)
        return  <h2 style= {{...style.h2, ...dims}}>{children}</h2>
    }*/
    export default function Heading({level, children}) {
        if (level == "1") return (<h1 style={style.h1}>{children}</h1>)
        if (level == "2") return (<h2 style={style.h2}>{children}</h2>)
        if (level == "3") return (<h3 style={style.h3}>{children}</h3>)
        if (level == "4") return (<h4 style={style.h4}>{children}</h4>)
        if (level == "5") return (<h5 style={style.h5}>{children}</h5>)
        if (level == "6") return (<h6 style={style.h6}>{children}</h6>)
            return  <h2 style= {style.h2}>{children}</h2>
        }