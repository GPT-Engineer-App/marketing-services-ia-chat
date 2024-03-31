import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, Flex, Input, IconButton, Avatar, Spacer } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");
      // TODO: Integrate with ChatGPT API to get the response
      // For now, a sample response is added after 1 second
      setTimeout(() => {
        setMessages([
          ...messages,
          {
            text: "Thank you for your message. I'll get back to you soon!",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white">
        <Heading as="h1" size="xl">
          Professional Services Marketing JG
        </Heading>
      </Flex>

      <VStack spacing={8} align="center" padding={8}>
        <Text fontSize="xl">Boost your business with our AI-powered marketing services</Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>

      <Box padding={8}>
        <Heading as="h2" size="xl" mb={4}>
          Chat with Us
        </Heading>
        <Box borderWidth={1} borderRadius="lg" overflow="hidden" maxW="600px" mx="auto">
          <Box p={4} maxH="400px" overflowY="auto">
            {messages.map((message, index) => (
              <Flex key={index} mb={4} align="flex-end">
                {message.sender === "bot" && (
                  <>
                    <Avatar name="Bot" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwYXZhdGFyfGVufDB8fHx8MTcxMTkxMDA4Mnww&ixlib=rb-4.0.3&q=80&w=1080" mr={2} />
                    <Box bg="gray.100" borderRadius="lg" p={2} maxW="75%" ml={2}>
                      <Text>{message.text}</Text>
                    </Box>
                  </>
                )}
                {message.sender === "user" && (
                  <>
                    <Spacer />
                    <Box bg="teal.500" color="white" borderRadius="lg" p={2} maxW="75%" mr={2}>
                      <Text>{message.text}</Text>
                    </Box>
                    <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMTkxMDA4Mnww&ixlib=rb-4.0.3&q=80&w=1080" />
                  </>
                )}
              </Flex>
            ))}
          </Box>
          <Flex p={4}>
            <Input placeholder="Type your message..." value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} mr={4} />
            <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={sendMessage} colorScheme="teal" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
