import "./BoardContent.scss";
import frog from "../../images/frog.png"
const BoardContent = () => {
return(
    <>
    <div className='board-columns'>
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

        {/* <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog} alt="smth"></img>
              First task
            </li>
            <li>Second task</li>
          </ul>
          <footer>Add task</footer>
        </div>

        <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog} alt="smth"></img>
              First task
            </li>
            <li>Second task</li>
          </ul>
          <footer>Add task</footer>
        </div>

        <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog} alt="smth"></img>
              First task
            </li>
            <li>Second task</li>
          </ul>
          <footer>Add task</footer>
        </div>

        <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog} alt="smth"></img>
              First task
            </li>
            <li>Second task</li>
          </ul>
          <footer>Add task</footer>
        </div> */}


      </div>
    </>
)

}
export default BoardContent;