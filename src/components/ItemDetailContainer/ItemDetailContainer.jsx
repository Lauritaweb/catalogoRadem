import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import db from "../../db/db"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams()
  const getProduct = async () => {
    const docRef = doc(db, "products", idProduct)
    const dataDb = await getDoc(docRef)
    const data = { id: dataDb.id, ...dataDb.data() }
    setProduct(data)
  }

  useEffect(()=>{
    getProduct()
  }, [idProduct])

  return (
    <div className="itemDetailContainer">
      <ItemDetail product={product} />
      {/* Footer */}
      <footer className="py-3 text-center text-white mt-5 bg-dark">
        <div className="container-fluid">
          <p className="mb-0">© {new Date().getFullYear()} Radem</p>
        </div>
      </footer>
      {/* wa */}
      <div className="wa">
        <a href="https://wa.me/5491150458044" target="_blank">
            <img src="http://www.radem.com.ar/assets/img/icons/icon-whatsapp.svg" alt=""/>
        </a>
      </div>
    </div>
  )
}
export default ItemDetailContainer