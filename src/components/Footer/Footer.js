import React from 'react'
import {Fragment} from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput,
    FooterLinksContainer,  FooterLinksWrapper, FooterLinkItems
, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap
,SocialLogo, SocialIcon, WebSiteRights, SocialIcons, SocialIconLink} from './Footer.elements'

const Footer = () => {
    return (

        <Fragment>
            <FooterContainer id="footerzin">
                <FooterSubscription>
                    <FooterSubHeading>
                        Por enquanto só atendemos via Whatsapp
                    </FooterSubHeading>
                        <FooterSubText> 
                            Nosso número: 013997303537
                        </FooterSubText>
                        
                          
                </FooterSubscription>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                        

                            <FooterLinkItems style={{marginRight: '30px'}}>
                                <FooterLinkTitle>Especialiçãções</FooterLinkTitle>
                                    <FooterLink >WebSites</FooterLink>
                                    <FooterLink >Aplicativos</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Parceiros</FooterLinkTitle>
                                    <FooterLink >Quero ser parceiro</FooterLink>
                            </FooterLinkItems>

                            </FooterLinksWrapper>
                          
                    </FooterLinksContainer>
                        <SocialMedia id="SocialMedia">
                            <SocialMediaWrap id="SocialMediaWrap">
                                <SocialLogo id="SocialLogo" to="/">
                                    <SocialIcon>
                                        LinkHat
                                    </SocialIcon>
                                </SocialLogo>

                                        <WebSiteRights>
                                            LinkHat 2021
                                        </WebSiteRights>
                                            <SocialIcons>
                                                <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                                 <FaWhatsapp/>
                                                </SocialIconLink>


                                            </SocialIcons>
                                            
                            </SocialMediaWrap>
                        </SocialMedia>
                </FooterContainer>
        </Fragment>
    )
}

export default Footer
