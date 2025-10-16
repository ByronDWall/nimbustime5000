import { NimbusProvider, Button, Text } from "@commercetools/nimbus";
import { Explore } from "@commercetools/nimbus-icons";

function App() {
  return (
    <NimbusProvider>
      <Text>
        Nimbus Time <Explore />
      </Text>
      <Button onClickCapture={() => alert("Clicked")}>Click me</Button>
    </NimbusProvider>
  );
}

export default App;
