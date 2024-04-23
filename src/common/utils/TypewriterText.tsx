import { Box } from "@mui/material";
import Typewriter from "typewriter-effect";

interface Text {
  texts: string[];
}

const TypewriterText = ({ texts }: Text) => {
  return (
    <Box component="span" sx={{ display: "inline-block", color: "white" }}>
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
          delay: 90,
        }}
      />
    </Box>
  );
};

export default TypewriterText;
