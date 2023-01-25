import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  invoiceFromContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  fromName: {
    fontSize: 11,
    fontWeight: 200,
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

const InvoiceFrom = ({ invoice }) => (
  <Fragment>
    <View style={styles.invoiceFromContainer}>
      <Text style={styles.from}>From:</Text>
      <View style={styles.fromDataContainer}>
        <Text style={styles.fromName}>Rohit Sharma</Text>
        <Text style={styles.fromName}>Business Name:</Text>
        <Text style={styles.fromName}>Rohit Sharma</Text>
        <Text style={styles.fromName}>mukundpura Road, Bhankrota</Text>
        <Text style={styles.fromName}>Ajmer Road</Text>
        <Text style={styles.fromName}>Jaipur, 302026</Text>
        <Text style={styles.fromName}>India</Text>
      </View>
    </View>
  </Fragment>
);

export default InvoiceFrom;

// import React, { Fragment } from "react";
// import { Text, View, StyleSheet } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   invoiceNoContainer: {
//     flexDirection: "row",
//     marginTop: 36,
//     justifyContent: "flex-end",
//   },
//   invoiceDateContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
//   invoiceDate: {
//     fontSize: 12,
//     fontStyle: "bold",
//   },
//   label: {
//     width: 60,
//   },
// });

// const InvoiceNo = ({ invoice }) => (
//   <Fragment>
//     <View style={styles.invoiceNoContainer}>
//       <Text style={styles.label}>Invoice No:</Text>
//       <Text style={styles.invoiceDate}>{invoice.invoice_no}</Text>
//     </View>
//     <View style={styles.invoiceDateContainer}>
//       <Text style={styles.label}>Date: </Text>
//       <Text>{invoice.trans_date}</Text>
//     </View>
//   </Fragment>
// );

// export default InvoiceNo;
