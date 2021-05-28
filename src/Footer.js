import React from 'react'
import './Styles/Footer.css'
import Spotify from './Media/Spotify_Logo.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {

    const stylesIcons = {
        display: 'flex',
        margin: '12px auto',
        fontSize: '30px',
        cursor: 'pointer'
    }

    return (
        <div className="footer">
            <div className="footer_content">

                <img className="footer_logo" src={Spotify} alt=""/>

                <div className="footer_ul1">Société
                    <p className="footer_li">A propos</p>
                    <p className="footer_li">Offres d'emploi</p>
                    <p className="footer_li">For the Record</p>
                </div>

                <div className="footer_ul2">Communautés
                    <p className="footer_li">Espace artistes</p>
                    <p className="footer_li">Développeurs</p>
                    <p className="footer_li">Campagnes<br/>publicitaires</p>
                    <p className="footer_li">Investisseurs</p>
                    <p className="footer_li">Fournisseurs</p>
                </div>

                <div className="footer_ul3">Liens utiles
                    <p className="footer_li">Assistance</p>
                    <p className="footer_li">Lecteur web</p>
                    <p className="footer_li">Appli mobile gratuite</p>
                </div>

                <div className="footer_network">
                    <div className="divs_networks"><InstagramIcon className="divs_icons" style={stylesIcons}/></div>
                    <div className="divs_networks"><TwitterIcon className="divs_icons" style={stylesIcons}/></div>
                    <div className="divs_networks r"><FacebookIcon className="divs_icons" style={stylesIcons}/></div>
                </div>

                <div className="footer_copyright">
                    <p className="footer_para">Légal</p>
                    <p className="footer_para">Centre de confidentialité</p>
                    <p className="footer_para">Protection des données</p>
                    <p className="footer_para">Cookies</p>
                    <p className="footer_para">À propos des pubs</p>
                    <p className="footer_paraRight">© 2021 Spotify</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
