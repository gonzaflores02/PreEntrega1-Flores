import "./itemlistcontainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div
      className="itemlistcontainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>{greeting}</h1>
    </div>
  );
};
