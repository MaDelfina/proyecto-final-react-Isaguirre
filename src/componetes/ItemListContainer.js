import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Page from "../componetes/Page";

const ItemListContainer = ({ greeting }) => {

  const [ListProducts, SetListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {

    const productosCollection = collection(db, "productos")

    if (category) {
      const filtro = query(productosCollection, where("category", "==", category))
      getDocs(filtro)

        .then(snapshot =>

          SetListProducts(snapshot.docs.map(producto => ({ id: producto.id, ...producto.data() }))))

        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        })
    } else {

      getDocs(productosCollection)
        .then(snapshot =>
          SetListProducts(snapshot.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        })
    }
  }, [category])

  return (
    <>
      {
        loading
          ?
          <div className="cargando">Cargando...</div>
          :
          <Page>
            <h2 className="greeting">{greeting}</h2>
            <ItemList ListProducts={ListProducts} />
          </Page>
      }
    </>
  )
}

export default ItemListContainer