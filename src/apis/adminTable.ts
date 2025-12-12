export type AdminTable = {
  img: string;
  description: string;
  ownerName: string;
  origin: string;
  status: string;
};

const adminTable: AdminTable[] = [
  {
    img: "/CuratorImages/curator1.jpg",
    description: "Excepteur sint occaecat cupidatat non proid",
    ownerName: "John Doe",
    origin: "North America",
    status: "Accepted",
  },
  {
    img: "/CuratorImages/curator2.jpg",
    description: "Nemo enim ipsam atem quia voluptas sit",
    ownerName: "Arlene McCoy",
    origin: "Croatia",
    status: "Flaged",
  },
  {
    img: "/CuratorImages/curator3.jpg",
    description: "Neque porro quisquam est, qui dolorem",
    ownerName: "Jacob Jones",
    origin: "Egypt",
    status: "Rejected",
  },
  {
    img: "/CuratorImages/curator1.jpg",
    description: "Excepteur sint occaecat cupidatat non proid",
    ownerName: "John Doe",
    origin: "North America",
    status: "Accepted",
  },
];
export default adminTable;
