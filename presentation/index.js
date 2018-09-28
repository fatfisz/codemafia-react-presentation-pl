import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  S,
  Slide,
  Text,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require("normalize.css");

const theme = createTheme({
  primary: '#fafafa',
  secondary: '#3f538a',
  tertiary: '#3f538a',
  quarternary: '#e0e0e0',
}, {
  primary: 'Lato',
});

const colorOffenders = [
  ...Object.values(theme.screen.components),
  ...Object.values(theme.screen.components.heading),
];

for (const value of colorOffenders) {
  if (value.color === 'black') {
    value.color = theme.screen.colors.secondary;
  }
}

theme.screen.components.cite.color = theme.screen.colors.primary;
theme.screen.components.code.backgroundColor = theme.screen.colors.quarternary;
theme.screen.components.codePane.fontSize = '20px';
theme.screen.components.link = {
  color: theme.screen.colors.tertiary,
};
theme.screen.components.list.listStylePosition = 'outside';
theme.screen.components.listItem.margin = '10px 0';
theme.screen.components.quote.fontSize = theme.screen.components.heading.h6.fontSize;

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} progress='bar'>
        <Slide bgColor='tertiary'>
          <Heading size={4} caps textColor='primary'>
            what a concept:
          </Heading>
          <Heading size={1} caps textColor='primary' margin='20px 0 0'>
            React
          </Heading>
          <Image src={require('react.svg')} height={200} margin='50px auto 0' />
          <Text textColor='primary' margin='50px auto 0'>
            by{' '}
            <Link
              href='https://fatfisz.com'
              target='_blank'
              textColor='primary'
            >
              Rafał Ruciński
            </Link>
            {' '}(FatFisz)
          </Text>
        </Slide>

        <Slide>
          <Heading fit caps>
            Robimy dokumenty
            <br />
            czy aplikacje?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6}>
            Outlook Express
          </Heading>
          <Image src={require('outlook-express.png')} margin='50px auto 0' />
        </Slide>

        <Slide>
          <Heading size={6}>
            Gmail
          </Heading>
          <Image src={require('gmail.png')} margin='50px auto 0' />
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit caps textColor='primary'>
            Spadek
            <br />
            (spuścizna)
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3}>
            HTML
          </Heading>
          <Heading size={6}>
            (początki lat 90.)
          </Heading>
          <Image src={require('first-website.png')} margin='50px auto 0' />
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={3} textColor='primary'>
            Hypertext
          </Heading>
          <BlockQuote>
            <Quote>
              Tekst wyświetlany na ekranie urządzenia elektronicznego
              z odnośnikami (hiperłączami) do innych tekstów.
            </Quote>
            <Cite>
              wolne tłumaczenie z Wikipedii
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={3}>
            JavaScript
          </Heading>
          <Heading size={6}>
            (wrzesień 1995)
          </Heading>
          <Layout>
            <Fill>
              <Image src={require('javascript-cursor.png')} margin='50px auto 0' />
            </Fill>
            <Fill>
              <Image src={require('javascript-snow.png')} margin='50px auto 0' />
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={3}>
            Java applet 😭
          </Heading>
          <Image src={require('java-applet.png')} margin='50px auto 0' />
        </Slide>

        <Slide>
          <Heading size={3}>
            CSS
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Na początku było wiele konkurujących propozycji
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Obecny standard zapoczątkowany w 1994 roku
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Po raz pierwszy w powszechnym użyciu<br />ok. 1996 roku
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading fit>
            "Metody" pracowania z CSS
          </Heading>
          <Image src={require('bicycle-for-the-whole-family.jpg')} height={600} margin='50px auto 0' />
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit caps textColor='primary'>
            zanim przejdziemy dalej...
          </Heading>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit textColor='primary'>
            Te technologie mają prawie 25 lat!
          </Heading>
          <BlockQuote>
            <Quote>
              Mimo ogromnego postępu w ostatnich latach, surowe HTML,
              JS i CSS nie nadają się do budowania dużych i złożonych{' '}
              <S type="italic">aplikacji internetowych</S>.
              <br />
              <br />
              Nie były do tego stworzone od podstaw i ten dług technologiczny spłacamy do dziś.
            </Quote>
            <Cite>
              moje głębokie przekonanie
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Image src={require('space-jam.png')} />
        </Slide>

        <Slide>
          <Heading size={3}>
            Przed rokiem 2018
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Era AJAX
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Era jQuery
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Era AngularJS
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>
            AngularJS
          </Heading>
          <Text margin='50px auto 0'>
            Nie myślimy już o obecnym statnie dokumentu i jak dojść z niego do stanu docelowego.
            <br />
            <br />
            Myślimy o tym jak ma docelowo wyglądać dokument dla określonych danych.
          </Text>
        </Slide>

        <Slide bgImage={require('what-a-concept.jpg')} bgDarken={0.6}>
          <Heading fit textColor='primary'>
            React
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6}>
            Co to ma być? 🤔
          </Heading>
          <Image src={require('jsx.png')} margin='50px auto 0' />
        </Slide>

        <Slide>
          <Heading fit>
            To tylko JavaScript!
          </Heading>
        </Slide>

        <Slide>
          <Heading fit>
            Dziel i zwyciężaj - komponenty!
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6}>
            Separation of concerns!
          </Heading>
          <Image src={require('separation-of-concerns.jpg')} height={600} margin='50px auto 0' />
          <Text textSize={20} margin='10px 0 0'>
            Źródło:{' '}
            <Link
              href="https://speakerdeck.com/didoo/let-there-be-peace-on-css?slide=62"
              target="_blank"
            >
              https://speakerdeck.com/didoo/let-there-be-peace-on-css?slide=62
            </Link>
          </Text>
        </Slide>

        <Slide>
          <Image src={require('separation-of-concerns-comment.png')} />
        </Slide>

        <Slide>
          <Text>
            React pozwala w łatwy sposób
            <br />
            napisać aplikację z gotowych komponentów.
          </Text>
        </Slide>

        <Slide>
          <Text>
            React pozwala dostosować komponenty
            <br />
            jeżeli zmieniają się wymagania.
          </Text>
        </Slide>

        <Slide>
          <Text>
            React wyznacza sposób dzielenia kodu,
            <br />
            który pozwala pisać duże aplikacje
            <br />
            bez tradycyjnie związanych z tym narzutów.
          </Text>
          <Appear>
            <Text margin='50px auto 0'>
              Strona Facebook składa się z
              <br />
              ponad 30 000 komponentów.
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading fit>
            Gdzie używać Reacta?
          </Heading>
        </Slide>

        <Slide bgImage={require('aggretsuko.jpg')} bgDarken={0.7}>
          <Heading fit caps textColor='primary'>
            Wszędzie
          </Heading>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit caps textColor='primary'>
            Live coding!
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Resources
          </Heading>
          <List>
            <ListItem>
              <Link
                href='https://reactjs.org/docs/getting-started.html'
                target='_blank'
              >
                ReactJS - Getting Started
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.youtube.com/watch?v=bb_kb6Q2Kdc'
                target='_blank'
              >
                Let there be peace on CSS - o CSS-in-JS i nie tylko
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.youtube.com/watch?v=0ZNIQOO2sfA'
                target='_blank'
              >
                Separation of concerns RANT - FunFunFunction
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://signalvnoise.com/posts/3124-give-it-five-minutes'
                target='_blank'
              >
                Give it five minutes - Jason Fried
              </Link>
            </ListItem>
            <ListItem>
              Twitter, newslettery, etc.
            </ListItem>
          </List>
        </Slide>

        <Slide bgImage={require('thats-all-folks.svg')} bgDarken={0.7}>
          <Heading fit caps textColor='primary'>
            Thanks!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
