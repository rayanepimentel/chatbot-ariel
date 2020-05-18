const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const watsonAssistant = new AssistantV1({
    version: '2020-10-05',
    username: 'pwCsutP9-q-Red6iB6sDGOu-so8cv67G4DFa_lq7paY1',
    password:  "Auto-generated for key c4fc99fb-edf3-4777-9fae-51a0f40b2ca3",
    url: "https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/b81eb8eb-a950-4f84-92c0-7cf5ab0c2e36"
});


  module.exports = watsonAssistant;