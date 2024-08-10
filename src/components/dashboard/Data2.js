const createData2 = (t) => ({
  data1: {
    id:1,
    date: "03/07/2021",
    type: t("dashboard.middle.type-casual"),
    duration:"02/03/2024~05/06/2024",
    status:t("dashboard.middle.status-pending"),
    status_check:"pending"
  },
  data2: {
    id:2,
    date: "03/07/2021",
    type: t("dashboard.middle.type-late-entry"),
    duration:"02/03/2024~05/06/2024",
    status:t("dashboard.middle.status-approved"),
    status_check:"approved"
  },
  data3: {
    id:3,
    date: "03/07/2021",
    type: t("dashboard.middle.type-sick"),
    duration:"02/03/2024~05/06/2024",
    status:t("dashboard.middle.status-rejected"),
    status_check:"rejected"
  },
  data4: {
    id:4,
    date: "03/07/2021",
    type: t("dashboard.middle.type-casual"),
    duration:"02/03/2024~05/06/2024",
    status:t("dashboard.middle.status-rejected"),
    status_check:"rejected"
  },
  data5: {
    id:5,
    date: "03/07/2021",
    type: t("dashboard.middle.type-late-entry"),
    duration:"02/03/2024~05/06/2024",
    status:t("dashboard.middle.status-approved"),
    status_check:"approved"
  }
});

export default createData2;
