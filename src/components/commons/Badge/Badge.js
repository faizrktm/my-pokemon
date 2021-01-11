import { Box } from "../Box";
import { Text } from "../Text";

export default function Badge({
  title,
  bg = "interactive-1",
  color = "text-4",
}) {
  return (
    <Box
      sx={{
        mr: 500,
        mb: 500,
        p: 300,
        backgroundColor: bg,
        borderRadius: "8px",
      }}
    >
      <Text sx={{ color }}>{title}</Text>
    </Box>
  );
}
