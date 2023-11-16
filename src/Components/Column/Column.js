import frog from "../../images/frog.png"
import "./Column.scss"
const Column = () =>{
    return(
        <>
        <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog} alt="smth"></img>
              First task
            </li>
            <li>Second task</li>
            <li>Third task</li>
          </ul>
          <footer>Add task</footer>
        </div>
        </>

    )


}
export default Column;