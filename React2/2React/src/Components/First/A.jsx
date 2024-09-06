import B from './B'

function A()
{

    //state
    let x =100;
    let username ="uju";
    return(
        <div>
             <h1>Component A</h1>
             {/* Nest Component B here*/}

             <B s={x} username={username}/>
        </div>
    )
}


export default A;