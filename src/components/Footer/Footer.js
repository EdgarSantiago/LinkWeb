import React from 'react'
import {Fragment} from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput,
    FooterLinksContainer,  FooterLinksWrapper, FooterLinkItems
, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap
,SocialLogo, SocialIcon, WebSiteRights, SocialIcons, SocialIconLink} from './Footer.elements'

const Footer = () => {
    return (

        <Fragment>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join oor exclusive aismdoaids osdmioadsk oaisd iojk
                    </FooterSubHeading>
                        <FooterSubText> 
                            you can unsub any time
                        </FooterSubText>
                            <Form>
                                <FormInput name="email" type="email" placeholder="Seu Email"/>
                                    <Button fontBig>Subscribe</Button>
                            </Form>
                </FooterSubscription>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/sign-up">How it Works</FooterLink>
                                    <FooterLink to="/Services">Services</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/sign-up">How it Works</FooterLink>
                                    <FooterLink to="/Services">Services</FooterLink>
                            </FooterLinkItems>
                            </FooterLinksWrapper>
                            <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/sign-up">How it Works</FooterLink>
                                    <FooterLink to="/Services">Services</FooterLink>
                            </FooterLinkItems>

                             <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/sign-up">How it Works</FooterLink>
                                    <FooterLink to="/Services">Services</FooterLink>
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
                                                    <FaInstagram/>
                                                </SocialIconLink>

                                                <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                                    <FaTwitter/>
                                                </SocialIconLink>

                                                <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                                    <FaLinkedin/>
                                                </SocialIconLink>

                                                <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                                    <FaGithub/>
                                                </SocialIconLink>
                                            </SocialIcons>
                                            
                            </SocialMediaWrap>
                        </SocialMedia>
                </FooterContainer>
        </Fragment>
    )
}

export default Footer
