import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#000000";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "80%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 0.8,
    paddingLeft: 8,
  },
  amount: {
    width: "20%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableRow = ({ items }) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={item.sno.toString()}>
      <Text style={styles.description}>{item.desc}</Text>
      <Text style={styles.amount}>{(item.qty * item.rate).toFixed(2)}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
