import { Box } from "../Box";
import { Card } from "../Card";
import { Text } from "../Text";
import { Image } from "../Image";
import { PlainButton } from "../Button";
import Delete from "../../../assets/delete.svg";

export default function PokeCard({ image, name, subname, onClickDelete }) {
  const handleDelete = (e) => {
    e.preventDefault();
    onClickDelete(name);
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
      <Text variant="label" sx={{ textTransform: "capitalize" }}>
        {name}
      </Text>
      <Text sx={{ textTransform: "capitalize" }}>{subname}</Text>

      {typeof onClickDelete === "function" && (
        <Box sx={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
          <PlainButton onClick={handleDelete}>
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
