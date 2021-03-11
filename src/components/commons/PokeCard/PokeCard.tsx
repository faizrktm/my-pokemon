import { Box } from "../Box";
import { Card } from "../Card";
import { Text } from "../Text";
import { Image } from "../Image";
import { PlainButton } from "../Button";
import Delete from "../../../assets/delete.svg";
import { PokeCardProps } from "./types";

export default function PokeCard({
  image,
  name,
  subname,
  onClickDelete,
}: PokeCardProps) {
  const handleDelete = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!!onClickDelete) {
      onClickDelete(name);
    }
  };

  return (
    <Card sx={{ backgroundColor: "ui-1" }}>
      <Image
        src={image}
        alt={name}
        sx={{
          width: "100px",
          height: "100px",
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      />
      <Text
        variant="label"
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textTransform: "capitalize",
        }}
      >
        {name}
      </Text>
      {!!subname && <Text sx={{ textTransform: "capitalize" }}>{subname}</Text>}

      {!!onClickDelete && (
        <Box sx={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
          <PlainButton onClick={handleDelete} data-testid="delete-pokemon-btn">
            <Image
              src={Delete}
              alt="Delete PlainButton"
              sx={{ width: "20px", height: "20px" }}
            />
          </PlainButton>
        </Box>
      )}
    </Card>
  );
}
