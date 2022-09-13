const ItemCount = ({ onAdd, qty, setQty }) => {

  const incrementador = () => {
    setQty(qty + 1);
  }

  const decrementador = () => {
    setQty(qty - 1);
  }

  return (
    <>
      {<div className='d-flex justify-content-center mb-3'>
        <button className={`agregarAlCarrito ${qty > 0 ? "btn-success" : "btn-danger"}`} onClick={decrementador}>-</button>
        <div>
          <p>{qty}</p>
        </div>
        <button className={`agregarAlCarrito ${qty ? "btn-success" : "btn-danger"}`} onClick={incrementador}>+</button>
      </div>}
      <button className='agregarAlCarrito' onClick={() => { onAdd() }}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount;