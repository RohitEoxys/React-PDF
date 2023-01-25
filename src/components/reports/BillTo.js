import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  billToContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  fromName: {
    fontSize: 12,
  },
  fromDataContainer: {
    flexDirection: "colomn",
    justifyContent: "flex-start",
  },
  label: {
    width: 50,
    fontStyle: "bold",
  },
  from: {
    width: 50,
    fontStyle: "bolder",
    fontSize: 12,
  },
});

const BillTo = ({ invoice }) => (
  <>
    <View style={styles.billToContainer}>
      <Text style={styles.from}>Bill to:</Text>
      <View style={styles.fromDataContainer}>
        <Text style={styles.billToName}>Kiran Gill</Text>
        <Text style={styles.billToName}>Attn: Kiran Gill</Text>
        <Text style={styles.billToName}>America</Text>
        <Text style={styles.billToName}>America</Text>
        <Text style={styles.billToName}>UAE</Text>
      </View>
    </View>
  </>
);

export default BillTo;
