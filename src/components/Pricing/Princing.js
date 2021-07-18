
import React, { Fragment } from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Princing.elements';

function Pricing({preço_s, card_ht}) {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
            {preço_s ? ( <PricingHeading>Serviços</PricingHeading> ) : ( <PricingHeading>Financiamento</PricingHeading>)}
          <PricingContainer>

            <PricingCard card_ht='true' to='/sign-up'>
              <PricingCardInfo >
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>

              {preço_s ? (
              <Fragment>
                <PricingCardPlan>Prata</PricingCardPlan>
                <PricingCardCost>R$35</PricingCardCost>
                <PricingCardLength>Mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Domínio Grátis</PricingCardFeature>
                  <PricingCardFeature>Banco de dados 512mb</PricingCardFeature>
                  <PricingCardFeature>Suporte 10/7</PricingCardFeature>
                </PricingCardFeatures>
              </Fragment>) : (
              <Fragment>
                <PricingCardPlan>Prata</PricingCardPlan>
                <PricingCardCost>R$800</PricingCardCost>
                <PricingCardLength>Entrada</PricingCardLength>
                <PricingCardCost>R$170</PricingCardCost>
                <PricingCardLength>Durante 12 meses</PricingCardLength>
              </Fragment>
              )}

                <Button primary>Escolher Plano</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard card_ht='true' to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>

              {preço_s ? (
              <Fragment>
                <PricingCardPlan>Ouro</PricingCardPlan>
                <PricingCardCost>R$45</PricingCardCost>
                <PricingCardLength>Mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Domínio Grátis</PricingCardFeature>
                  <PricingCardFeature>Banco de dados 512mb</PricingCardFeature>
                  <PricingCardFeature>Atualizações mensais</PricingCardFeature>
                  <PricingCardFeature>Suporte 12/7</PricingCardFeature>
                </PricingCardFeatures>
              </Fragment>) : (
              <Fragment>
                <PricingCardPlan>Ouro</PricingCardPlan>
                <PricingCardCost>R$1000</PricingCardCost>
                <PricingCardLength>Entrada</PricingCardLength>
                <PricingCardCost>R$150</PricingCardCost>
                <PricingCardLength>Durante 12 meses</PricingCardLength>
              </Fragment>
              )}

                <Button primary>Escolher</Button>
              </PricingCardInfo>
            </PricingCard >
            <PricingCard to='/sign-up' card_ht='true'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
             {preço_s ? (
              <Fragment>
                <PricingCardPlan>Diamante</PricingCardPlan>
                <PricingCardCost>R$65</PricingCardCost>
                <PricingCardLength>Mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Domínio Grátis</PricingCardFeature>
                  <PricingCardFeature>Banco de dados 512mb</PricingCardFeature>
                  <PricingCardFeature>Atualizações mensais</PricingCardFeature>
                  <PricingCardFeature>Atualizações de componentes</PricingCardFeature>
                  <PricingCardFeature>Suporte 24/7</PricingCardFeature>
                </PricingCardFeatures>
              </Fragment>) : (
              <Fragment>
                <PricingCardPlan>Diamante</PricingCardPlan>
                <PricingCardCost>R$1400</PricingCardCost>
                <PricingCardLength>Entrada</PricingCardLength>
                <PricingCardCost>R$122</PricingCardCost>
                <PricingCardLength>Durante 12 meses</PricingCardLength>
              </Fragment>
              )}
                <Button primary>Escolher</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;