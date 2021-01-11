import { Badge, Box, Text } from "../commons";

export default function Detail({ moves }) {
  return (
    <Box
      sx={{
        borderRadius: "32px 32px 0px 0px",
        backgroundColor: "ui-1",
        pb: 500,
        pl: 500,
        pr: 500,
        pt: 700,
        marginRight: "-1rem",
        marginLeft: "-1rem",
        marginBottom: "-2rem",
        flex: 1,
      }}
    >
      <Box sx={{ mb: 300 }}>
        <Text variant="label">Moves</Text>
      </Box>
      <Box sx={{ flexDirection: "row", flexWrap: "wrap" }}>
        {moves?.map(({ move }) => (
          <Badge title={move.name} key={move.name} />
        ))}
      </Box>
    </Box>
  );
}
