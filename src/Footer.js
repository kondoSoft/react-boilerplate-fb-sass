import React, {Component} from 'react'

class Footer extends Component{
  render(){
    return(
      <footer id="footer-gray" className='Footer'>
        <section className="row">
          <div className="four columns columns-footer">
            <span className="footer-p">NEWSLETTER</span>
            <p>Suscribete a nuestra newsletter, para enviarte informacion <br/> sobre nuestros programas y oferta educativa.</p>
            <form action="">
                <input type="email" id="input-email" name="name" value="" placeholder="Email"/>
                <input type="submit" className="button yellow" name="name" value="Enviar"/>
            </form>
            <p>HIPATIA<br/>Direccion Calle El Aguila #133 col. Atasta de Serra <br/>
                Telefono:+52 993-2681560</p>
          </div>
          <div className="four columns columns-footer">
            <div className="social-media">
                <p className="footer-p">FOLLOW US</p>
                <a href="https://www.facebook.com/hipatiadevhouse" title="Facebook"><i className="circulo fa fa-facebook fa-2x "></i></a>
                <a href="#" title="Twitter"><i className="circulo fa fa-twitter fa-2x "></i></a>
                <a href="https://www.youtube.com/user/cyberpolin" title="Youtube"><i className="circulo fa fa-youtube-play fa-2x "></i></a>
            </div>
            <div className="social-media">
                <p className="footer-p">LOCALIZANOS</p>
                <a href="#" title="Map"><i className="fa fa-map-marker fa-2x "></i></a>
            </div>
          </div>
          <div className="four columns columns-footer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <p>Ut faucibus lacus non dui consequat bibendum non a tellus
                  Sed rhoncus ex vitae elementum rutrum.</p>

              <p>Fusce vestibulum id nisl at eleifend.</p>

              <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </section>
        <div className="footer-legal">
          <img src='/imgs/webmail.png' alt="HipatiaFooter"/>
          <span>Copyright (c) 2016 Copyright Holder All Rights Reserved.</span>
        </div>
      </footer>
    )
  }
}

export default Footer
