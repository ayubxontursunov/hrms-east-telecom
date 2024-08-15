import im1 from '../../image/im1.png';
import im2 from '../../image/im2.png';
import im3 from '../../image/im3.png';
import im4 from '../../image/im4.png';

const createData1 = (t) => ({
  Company: {
    id:1,
    title: t("dashboard.cards.company"),
    label: t("dashboard.cards.departments"),
    img: im1,
    link: "/home/company",
  },
  Employees: {
    id:2,
    title: t("dashboard.cards.employees"),
    label: t("dashboard.cards.number-of-employees"),
    img: im2,
    link: "/home/all-employees",
  },
  Users: {
    id:3,
    title: t("dashboard.cards.users"),
    label: t("dashboard.cards.number-of-users"),
    img: im3,
    link: "/home/users",
  },
  Projects: {
    id:4,
    title: t("dashboard.cards.projects"),
    label: t("dashboard.cards.number-of-projects"),
    img: im4,
    link: "/home/projects",
  },
});

export default createData1;
