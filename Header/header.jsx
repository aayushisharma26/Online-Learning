const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="head">
                    <p className="logo">Logo </p>
                </div>
            
                <div className="col5">
                    <p className="k">Home</p>
                    <p className="k">Courses</p>
                    <p className="k">About</p>
                    <p className="k">Assement</p>                    
                </div>     
           </div>
           <div className="head-row">
                <div className="t">complete Guide from<br></br>
                    learning
                    <span class="typewrite" data-period="000" data-type="[&quot;Students.&quot;, &quot;Teachers.&quot;, &quot;Parents.&quot;]"><span class="wrap">Students.</span></span>
                        
                </div>
                <p className="p">Learning App for CBSE students and Test <br></br>
                                     Generator for teachers to create question papers<br></br>
                                     in minutes.
                    </p>
                <div className="button">
                    <a class="btn btn-success" href="/course/">Start Now</a>
                    <a class="btn btn-success" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=in.techchefs.MyCBSEGuide&amp;referrer=utm_source%3Dmycbseguide_home_banner_top%26utm_medium%3Dbutton%26utm_campaign%3Dhome">Install App</a>
                </div>
                <img className="home"  src="/home.png" alt="home"/>
            </div>
        </>
    );
};

export default Header;