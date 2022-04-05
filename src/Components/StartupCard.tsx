import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface props {
  name: string;
  dateFounded: string;
  employees: string;
  totalFunding: string;
  currentInvestmentStage: string;
  shortDescription: string;
}

const StartupCard: React.FC<props> = ({
  name,
  dateFounded,
  employees,
  totalFunding,
  currentInvestmentStage,
  shortDescription,
}) => {
  return (
    <Card sx={{ minWidth: 275, margin: "2rem" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Founded: {dateFounded.split(" ")[3]} | {employees} employees |{" "}
          {totalFunding} | {currentInvestmentStage}
        </Typography>

        <Typography sx={{ fontSize: 14 }}>{shortDescription}</Typography>
      </CardContent>
    </Card>
  );
};

export default StartupCard;
