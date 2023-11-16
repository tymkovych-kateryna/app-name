import "./BoardContent.scss";
import frog from "../../images/frog.png"
import Column from "../Column/Column";
const BoardContent = () => {
return(
    <>
    <div className='board-columns'>
        {/* <div className='columns'>
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
        </div> */}
        <Column/>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
        


      </div>
    </>
)

}
export default BoardContent;