import React, { useContext } from 'react'
import Product from "./componets/Product";
import { useProducts } from "./hooks/products";
import Loader from "./componets/Loader";
import { ErrorMessage } from "./componets/ErrorMessage";
import "./index.css";
import Modal from "./componets/Modal";
import CreateProduct from "./componets/CreateProduct";
import { IProduct } from "./modals";
import { ModalContext } from './context/ModalContext'

function App() {
  const { products, loading, error, addProduct } = useProducts();

  const { showModal, open, close } = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  };

  return (
    <>
      <div className="container relative mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        {showModal && (
          <Modal onClose={close} title="Create new product">
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
      </div>
      <div className="text-center my-4 fixed top-10 right-10">
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={open}
        >
          Add product
        </button>
      </div>
    </>
  );
}

export default App;
