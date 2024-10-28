import '../style/footer.scss'
import Hand from '../resources/Humans/footerHand.jpg'
function Footer() {
    const instagramLink = "https://www.instagram.com/kxgeou/"
    const gitHubLink = "https://github.com/kxGeou"
    const facebookLink = "https://www.facebook.com/profile.php?id=100073536213869"
  
    const igHandle = () => {
      window.open(instagramLink, "_blank");
    }
  
    const gitHandle = () => {
      window.open(gitHubLink, "_blank");
    }
  
    const facebookHandle = () => {
      window.open(facebookLink, "_blank");
    }
  
    return(
         <footer className="mainFooter">
            <img src={Hand} alt="vector of hand with phone" className='desktop'/>
            <div className='socialMedia'>
                <h2>Social Media</h2>
                <div className='socialBox'>
                    <i onClick={igHandle} className="fa-brands fa-instagram"></i>
                    <i onClick={facebookHandle} className="fa-brands fa-facebook"></i>
                    <i onClick={gitHandle} className="fa-brands fa-github"></i>
                </div>
            </div>
            <img src={Hand} alt="vector of hand with phone" className='mobile'/>
         </footer>
    );

}

export default Footer