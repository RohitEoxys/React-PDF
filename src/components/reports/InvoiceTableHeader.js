import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#000000";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    backgroundColor: "#eeeeee",

    alignItems: "center",
    height: 24,
    fontStyle: "bold",
    flexGrow: 1,

    border: 0.8,
    borderColor: "#000000",
  },
  description: {
    width: "80%",
    borderRightColor: borderColor,
    borderRightWidth: 0.8,
    paddingLeft: "8",
  },

  amount: {
    width: "20%",
    textAlign: "right",
    paddingRight: "8",
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.description}>DESCRIPTION/MEMO</Text>
    <Text style={styles.amount}>AMOUNT</Text>
  </View>
);

export default InvoiceTableHeader;
