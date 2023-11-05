import './Navbar.scss';


function Navbar(){
  const redirectToAnotherPage = () => {
    window.location.href = '/sighin';
  };

    return(
      
       <section className="top-nav">
          <div>
            <a href='/#'>

              Logo
            </a>
          </div>
              <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                  <div className='menu-button'>

      
                  </div>
                </label>
              <ul className="menu">
      {/* <li>One</li>
      <li>Two</li> */}
                <li>
                <button id='sign-in' className="custom-btn btn-3" onClick={redirectToAnotherPage} ><span> Sign in</span></button>
      <span className='span-sign-in'>
        <a href='/sighin' id='signin'>

        Sign in
        </a>
        </span> 
        </li>
      <li >
      <button id='sign-up' className="custom-btn btn-3"><span>Sign up</span></button>
      <span className='span-sign-up'>
        <a href='#'>

        Sign up
        </a>
        </span> 
        </li>
    </ul>
            </section>
    
    );
}



export default Navbar;