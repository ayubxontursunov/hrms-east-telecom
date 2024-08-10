import im1 from '../../image/im1.png';
import im2 from '../../image/im2.png';
import im3 from '../../image/im3.png';
import im4 from '../../image/im4.png';

const createData1 = (t) => ({
  Company: {
    id:1,
    title: t("dashboard.first-section.title1"),
    label: t("dashboard.first-section.label1"),
    img: im1,
    link: "#1",
  },
  Employees: {
    id:2,
    title: t("dashboard.first-section.title2"),
    label: t("dashboard.first-section.label2"),
    img: im2,
    link: "/home/all-employees",
  },
  Users: {
    id:3,
    title: t("dashboard.first-section.title3"),
    label: t("dashboard.first-section.label3"),
    img: im3,
    link: "#3",
  },
  Projects: {
    id:4,
    title: "Projects",
    label: "4 Projects",
    img: im4,
    link: "#4",
  },
});

export default createData1;
