import React from 'react';
import logo from './logo.svg';
import './App.css';
// UI 
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
// Layout
import Layout from './components/Layout';
import ConnectButton from './components/ConnectButton';
import AccountModal from "./components/AccountModal";
import { Box } from "@chakra-ui/react";
// import "@fontsource/inter";


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    // lets us use Chakra UI syntax across our app:
    <ChakraProvider>
      <Layout>
          {/*   we'll add content to our app shortly */}
          <Box margin="50px">
            <img src={logo} className="App-logo" alt="logo" />
          </Box>
          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
