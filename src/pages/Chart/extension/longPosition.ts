import { OverlayTemplate } from "klinecharts";

const longPosition: OverlayTemplate = {
  name: "longPosition",
  totalStep: 4,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  styles: {
    polygon: {
      color: "rgba(5, 225, 5, 0.3)",
    }
  },
  createPointFigures: ({ coordinates }) => {
    if (coordinates.length > 2) {
      return [
        {
          type: "polygon",
          attrs: {
            coordinates: [
              coordinates[0],
              { x: coordinates[1].x, y: coordinates[0].y },
              coordinates[1],
              { x: coordinates[0].x, y: coordinates[1].y },
            ],
          },
          styles: { style: "stroke_fill" },
        },
        {
          type: "polygon",
          attrs: {
            coordinates: [
              coordinates[0],
              { x: coordinates[1].x, y: coordinates[0].y },
              { x: coordinates[1].x, y:coordinates[2].y},
              { x: coordinates[0].x, y: coordinates[2].y },
            ],
          },
          styles: { style: "fill" , color:"rgba(225, 22, 15, 0.4)"},
        },
      ];
    }
    return [];
  },
};

export default longPosition;
