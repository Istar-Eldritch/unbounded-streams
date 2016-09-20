// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Table,
  TableRow,
  TableItem,
  S
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import GiphyLocal from "./giphy";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  ferbenza: require('../assets/ferbenza.jpg'),
  corks: require("../assets/corks.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#7D2A6D",
  primary_dark: "#5D0F51",
  primary_darkest: "#3E0034",
  primary_light: "#96488A",
  primary_lightest: "#B475AA",
  secondary: "#549431",
  secondary_dark: "#326F12",
  secondary_darkest: "#1A4A00",
  secondary_light: "#B4CB65",
  secondary_lightest: "#E1F4A2"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Table>
              <TableRow>
                <TableItem>
                  <Heading size={1} textColor="primary_darkest">Unbounded</Heading>
                </TableItem>
                <TableItem>
                  <Heading size={1} caps >Streams</Heading>
                </TableItem>
              </TableRow>
            </Table>

            <Text bold textAlign="left" textColor="primary_darkest" padding="4rem 0rem 0rem">Ruben Paz</Text>
            <Text textAlign="left" textColor="primary_darkest">Backend Developer</Text>
            <Text textAlign="left"><Link href="https://repositive.io" textColor="secondary">Repositive Ltd</Link></Text>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.ferbenza.replace('/', '')} bgDarken={0.75} notes="How many elements? How much time? Impact in hardware resources">
            <Heading>What is a stream?</Heading>
              <Appear>
                <BlockQuote textAlign="left" padding="4rem 0rem">
                  <Quote><Text textColor="secondary_lightest" textSize="2rem">"A sequence of data elements made available over time."</Text></Quote>
                  <Cite textSize="1.8rem" textColor="secondary_light">Wikipedia</Cite>
                </BlockQuote>
              </Appear>
          </Slide>

          <Slide transition={[]} bgColor="primary">
						<Heading margin="4rem" fit textColor="white">WHY & WHEN?</Heading>
						<List textColor="white">
							<Appear><ListItem>Transfering big amounts of data</ListItem></Appear>
							<Appear><ListItem>In flight data crunching and manipulation</ListItem></Appear>
						</List>
					</Slide>

          <Slide transition={['fade']} bgImage={images.ferbenza.replace('/', '')} bgDarken={0.75} bgColor="secondary"
          notes='<ul><li>Brief unix pipelines.</li><li>Node basic block of IO construction</li><ul><li>Standard Streams</li><li>File system</li><li>Sockets (tcp, http)</li></ul></ul>'>
            <Heading fit textColor="secondary_light">You are already using</Heading>
            <Heading caps fit>Streams</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="<ul><li>Harness the power of unix pipelines forward in the presentation</li></ul>">
            <Heading margin="4rem">stdout -> stdin</Heading>
            <Code textColor="primary_lightest">$ ls -l | grep key | less</Code>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary_darkest">
            <Heading textColor="white">Node.js I/O</Heading>
            <List textColor="primary_lightest" textAlign="left" bold>
              <Appear><ListItem>Standard Streams</ListItem></Appear>
              <Appear><ListItem>File system interaction</ListItem></Appear>
              <Appear><ListItem>Sockets & Network (tcp, http, ...)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary_darkest">
            <Heading fit>Stream Interfaces</Heading>
            <List textColor="primary_lightest" bold>
              <ListItem>Writable</ListItem>
              <ListItem>Readable</ListItem>
              <ListItem>Duplex</ListItem>
              <ListItem>Transform</ListItem>
            </List>
            <Appear><Text fit textColor="primary_light">All streams implement the "EventEmitter" interface</Text></Appear>
          </Slide>

          <Slide transition={['slide']}>
            <Heading fit margin="4rem">Streaming data to Writable</Heading>

            <Code fit textColor="primary_lightest" margin="2rem" textSize="1.8rem">
              .write(chunk[, encoding][, callback])
            </Code>
            <br/>
            <Code fit textColor="primary_lightest" textSize="1.8rem">
              .end([chunk][, encoding][, callback])
            </Code>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading fit margin="4rem">Standard Stream Hello World</Heading>
            <Code fit textColor="primary_lightest" textSize="1.8rem">
              process.stdout.write('Hello Stream\n');
            </Code>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../examples/ex2.js")}
            ranges={[
              { loc: [0, 21], title: "Writing to files" },
              { loc: [4, 5]},
              { loc: [5, 6], note:"256KiB"},
              { loc: [7,19]},
              { loc: [8,9]},
              { loc: [10, 18]},
              { loc: [11, 14]},
              { loc: [14, 17]},
              { loc: [20,21]}
            ]}
          />

          <Slide transition={["slide", "spin"]} bgColor="primary_darkest">
            <Heading margin="4rem" fit>This is super slow!</Heading>
            <Image src="../assets/slow.gif"/>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.corks.replace('/', '')} bgDarken={0.75}>
            <Heading fit margin="4rem">Uncorking performance</Heading>
            <Code fit textColor="primary_lightest" margin="2rem" textSize="1.8rem">
              .cork()
            </Code>
            <br/>
            <Code fit textColor="primary_lightest" textSize="1.8rem">
              .uncork()
            </Code>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../examples/ex3.js")}
            ranges={[
              { loc: [0, 36], title: "Buffering with cork" },
              { loc: [6,7]},
              { loc: [25, 36]},
              { loc: [27, 28]},
              { loc: [28, 29]},
              { loc: [29, 30]},
              { loc: [7, 24]},
              { loc: [9, 10]},
              { loc: [10, 11]},
              { loc: [11, 12]},
              { loc: [12, 13]},
              { loc: [21, 22]},
              { loc: [12, 13]},
              { loc: [14, 20]},
              { loc: [15, 16]},
              { loc: [17, 18]},
              { loc: [25, 36]},
              { loc: [27, 28]},
              { loc: [31, 32]}
            ]}
          />


          <Slide transition={["fade"]} bgColor="primary_dark">
            <Heading margin="4rem" fit>Reading data from readable</Heading>
            <Text textAlign="left" bold textColor="primary_lightest">Two modes:</Text>
            <List textColor="white">
              <ListItem>Flow (EventEmitter & Pipes)</ListItem>
              <ListItem>Paused (using the .read method)</ListItem>
            </List>
          </Slide>


					<CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../examples/ex4.js")}
            ranges={[
              { loc: [0, 36], title: "Using EventEmitter" },
							{ loc: [5, 6]},
							{ loc: [6, 7]}
						]}
          />

					<CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../examples/ex5.js")}
            ranges={[
              { loc: [0, 36], title: "Piping" },
							{ loc: [6, 7]},
							{ loc: [7, 8]}
						]}
          />

          <Slide transition={["slide"]} bgColor="primary_dark">
            <Heading size={1} caps fit textColor="primary_lightest">
              And this is the result
            </Heading>
            <GiphyLocal/>
          </Slide>

					<Slide transition={['slide']} bgColor="white">
						<Heading textColor="primary">Thank You</Heading>
					</Slide>

        </Deck>
      </Spectacle>
    );
  }
}
