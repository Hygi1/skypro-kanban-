import React from "react";
import styled from "styled-components";

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 20px;
  padding: 5px 8px;
  border-radius: 18px;
  background-color: ${({ $color }) =>
    $color === "orange"
      ? "#FFE4C2"
      : $color === "green"
      ? "#B4FDD1"
      : $color === "purple"
      ? "#E9D4FF"
      : "#94A6BE"};
  color: ${({ $color }) =>
    $color === "orange"
      ? "#FF6D00"
      : $color === "green"
      ? "#06B16E"
      : $color === "purple"
      ? "#9A48F1"
      : "#FFFFFF"};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CategoryBadge = ({ category }) => {
  const getColor = (cat) => {
    switch (cat) {
      case "Web Design":
        return "orange";
      case "Research":
        return "green";
      case "Copywriting":
        return "purple";
      default:
        return "gray";
    }
  };
  return <Badge $color={getColor(category)}>{category}</Badge>;
};

export default CategoryBadge;
