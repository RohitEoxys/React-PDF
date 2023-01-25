import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  InvoiceInfoContainer: {
    position: "absolute",
    top: "30",
    right: 25,
  },
  InvoiceInfoTitleContainer: {
    marginBottom: "10",
  },
  InvoiceInfoTitle: {
    backgroundColor: "#eeeeee",
    width: "170",
    textAlign: "center",
    padding: "5",
    marginBottom: "10",
    fontSize: 15,
    letterSpacing: "1",
  },
  from: {
    fontStyle: "bolder",
    fontSize: 12,
  },

  invoiceInfoLeft: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "flex-end",
    right: "10",
    top: "43",
    fontWeight: "bolder",
  },
});

const InvoiceInfo = ({ invoice }) => (
  <>
    <View style={styles.InvoiceInfoContainer}>
      <View styles={styles.InvoiceInfoTitleContainer}>
        <Text style={styles.InvoiceInfoTitle}>Invoice</Text>
      </View>
      <View style={styles.invoiceInfoRight}>
        <Text style={styles.from}>Invoice #</Text>
        <Text style={styles.from}>Date</Text>
        <Text style={styles.from}>Due Date</Text>
        <Text style={styles.from}>Total Amount</Text>
        <Text style={styles.from}>Total Due</Text>
      </View>
      <View style={styles.invoiceInfoLeft}>
        <Text style={styles.from}> T545454 </Text>
        <Text style={styles.from}>jan-25-2023</Text>
        <Text style={styles.from}>jan-25-2023</Text>
        <Text style={styles.from}>5000</Text>
        <Text style={styles.from}>5000</Text>
      </View>
    </View>
  </>
);

export default InvoiceInfo;
