import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#000000";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    borderBottomWidth: 0.1,
    alignItems: "center",
    height: 30,
    fontSize: 12,
    fontStyle: "bold",
  },
  description: {
    width: "80%",
    textAlign: "left",
    borderRightColor: "#000000",
    borderRightWidth: 0.8,
    paddingLeft: 8,
  },
  total: {
    width: "20%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableFooter = ({ items }) => {
  const total = items
    .map((item) => item.qty * item.rate)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <View style={styles.row}>
      <Text style={styles.description}>TOTAL AMOUNT:</Text>
      <Text style={styles.total}>{Number.parseFloat(total).toFixed(2)}</Text>
    </View>
  );
};

export default InvoiceTableFooter;
