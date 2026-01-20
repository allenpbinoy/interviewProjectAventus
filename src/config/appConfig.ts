export const appConfig = {
  theme: {
    primaryColor: "blue-500",
    secondaryColor: "gray-100",
    spacing: "4",
  },
  pages: [
    {
      path: "/",
      name: "Home",
      components: [
        { type: "Hero", props: { title: "Welcome!", subtitle: "This is Home" } },
        { type: "FeatureList", props: { items: ["Fast", "Configurable", "Reusable"] } },
      ],
    },
    {
      path: "/products",
      name: "Products",
      components: [
        { type: "ProductGrid", props: { products: [{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }] } },
      ],
    },
    {
      path: "/profile",
      name: "Profile",
      components: [
        { type: "UserCard", props: { name: "John Doe", email: "john@example.com" } },
      ],
    },
  ],
};
