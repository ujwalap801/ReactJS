
import C from './C'
function B(props)
{
    return(
        <div>
             <h1>Component B</h1>
                  {/*console.log(props) ==>s=100, username:"uju" */}
             <h2>Data taken from component A is {props.s}</h2>
             <h3>Name from component A is {props.username}</h3>
             {/*Nest Component C here */}
             <C/>
        </div>
    )
}



export default B;