import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

function ChatbotPage() {
  const steps = [

    {
      id: 'Fruits',
      message: 'Which fruit are you interested in?',
      trigger: 'fruitOptions'
    },
    {
      id: 'fruitOptions',
      options: [
        { value: 'Orange', label: 'Orange', trigger: 'Orange' },
        { value: 'Tangerine', label: 'Tangerine', trigger: 'Tangerine' },
        { value: 'Cucumber', label: 'Cucumber', trigger: 'Cucumber' }
      ]
    },
    {
      id: 'Orange',
      message: 'Oranges are available at $2.50 per kg.',
      end: true
    },
    {
      id: 'Tangerine',
      message: 'Tangerines are available at $3.00 per kg.',
      end: true
    },
    {
      id: 'Cucumber',
      message: 'Cucumbers are available at $1.80 per kg.',
      end: true
    }
  ];

  return (
    <Segment floated="right">
      <ChatBot steps={steps} />
    </Segment>
  );
}

export default ChatbotPage;
