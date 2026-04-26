export default function Carrito() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold">Tu Bolsa de Compras</h2>
      <hr />
      <div className="text-center py-5">
        <h4>Tu bolsa está vacía</h4>
        <button className="btn btn-success mt-3">Ir a comprar</button>
      </div>
    </div>
  );
}