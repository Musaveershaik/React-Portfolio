const Aside = () => {
  return (
    <aside className="sidebar motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate" data-sidebar>
        <div className="sidebar-info">
        <div className="avatar-box motion-preset-pop ">
          <img
              // src={"https://velvety-stroopwafel-403379.netlify.app/assets/MyProfilePic.jpg"}
              src={"/images/Dp_for All.png"}
              alt="Shaik Musaveer"
              // width="100"
              // height="100"
            />
        </div>


          <div className="info-content">
            <h1 className="name motion-preset-typewriter motion-duration-2000" title="Muasaveer">
            Hi👋, I'm Musaveer!
            {/* <br/> */}
            </h1>


            <p className="title motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur">Full Stack Web/App Developer</p>
          </div>

          {/* <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contact </span>

            
          </button> */}
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                {/* <GiMailbox/> */}
                <img 
          src="https://img.icons8.com/?size=100&id=HyjRWfleuVje&format=png&color=000000" 
          alt="Location Icon" 
          width="30" 
          height="30" 
        />
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:musaveershaikh43@gmail.com" className="contact-link">
                  musaveershaikh43@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                {/* <GiPhone/> */}
                <img 
          src="https://img.icons8.com/?size=100&id=KKBDB20a4V6t&format=png&color=000000" 
          alt="Phone Icon" 
          width="30" 
          height="30" 
        />
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="+91 9133892883" className="contact-link">
                  +91 9133892883
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                {/* <GiMayanPyramid/> */}
                <img 
          src="https://img.icons8.com/?size=100&id=h1ACssMxjHCf&format=png&color=000000" 
          alt="Location Icon" 
          width="30" 
          height="30" 
        />
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Bangalore, India</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside